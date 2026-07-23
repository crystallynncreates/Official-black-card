// Wallstreet Shoppee — real backend data engine (added 2026-07-25, replaces the old
// localStorage-only js/shop.js demo). Requires js/supabase-client.js loaded first.
//
// Two kinds of listings:
//  1. Real member shops/products — obc_shops / obc_products in this app's own database.
//     Full commerce flow: product page, cart, checkout.
//  2. "Featured Black-owned brand" showcase — pulled live from the real CLC Beauties `products`
//     table in the same Supabase project (real photos, real inventory, public-read table).
//     Display-only: these belong to a separate live business, so we show them as a real photo
//     gallery rather than faking a shared cart/checkout with a different company's storefront.

async function getMemberShops() {
  const { data, error } = await obcClient.from("obc_shops").select("*").order("created_at", { ascending: false });
  if (error) { console.error(error); return []; }
  return data;
}
async function getMemberShopById(id) {
  const { data } = await obcClient.from("obc_shops").select("*").eq("id", id).maybeSingle();
  return data;
}
async function getMemberProducts() {
  const { data, error } = await obcClient.from("obc_products").select("*").order("created_at", { ascending: false });
  if (error) { console.error(error); return []; }
  return data;
}
async function getMemberProductById(id) {
  const { data } = await obcClient.from("obc_products").select("*").eq("id", id).maybeSingle();
  return data;
}
async function getMemberProductsByShop(shopId) {
  const { data } = await obcClient.from("obc_products").select("*").eq("shop_id", shopId).order("created_at", { ascending: false });
  return data || [];
}

async function createMemberShop({ name, category, bio, payoutMethod, payoutHandle, ownerId }) {
  return obcClient.from("obc_shops").insert({ name, category, bio, payout_method: payoutMethod, payout_handle: payoutHandle, owner_id: ownerId }).select().single();
}
async function createMemberProduct({ shopId, title, description, price, originalPrice, category, qty, variants, imageUrl }) {
  return obcClient.from("obc_products").insert({
    shop_id: shopId, title, description,
    price: Number(price),
    original_price: originalPrice ? Number(originalPrice) : null,
    category, qty: Number(qty) || 1,
    variants: variants && variants.length ? variants : null,
    image_url: imageUrl || null,
  }).select().single();
}

// Upload a photo (shop logo, product photo) to the obc-images bucket, namespaced by the
// uploading member's own id (matches the storage RLS policy). Returns the public URL.
async function uploadObcImage(file, memberId) {
  const ext = file.name.split(".").pop();
  const path = `${memberId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await obcClient.storage.from("obc-images").upload(path, file);
  if (error) throw error;
  const { data } = obcClient.storage.from("obc-images").getPublicUrl(path);
  return data.publicUrl;
}

// Real CLC Beauties products — read-only showcase, live from the same Supabase project.
// Pulls a genuine spread across categories (wigs/bundles/hair_care first, since those are the
// core beauty line — not just whatever happens to be flagged is_featured, which skewed toward
// generic dropship accessories) and randomizes within each category so the showcase doesn't
// show the exact same handful of products every visit.
async function getClcBeautiesShowcase(limit) {
  const perCategory = Math.max(2, Math.ceil((limit || 8) / 4));
  const categories = ["wigs", "bundles", "hair_care", "accessories", "nails"];
  const seen = new Set();
  const results = [];

  for (const category of categories) {
    if (results.length >= (limit || 8)) break;
    const { data, error } = await obcClient
      .from("products")
      .select("id,name,category,price,image_url")
      .eq("category", category)
      .not("image_url", "is", null)
      .limit(perCategory * 3); // overfetch, then sample client-side for variety
    if (error) { console.error(error); continue; }
    const shuffled = (data || []).sort(() => Math.random() - 0.5);
    for (const p of shuffled) {
      if (seen.has(p.id) || results.length >= (limit || 8)) break;
      seen.add(p.id);
      results.push(p);
    }
  }
  return results;
}

function stars(rating) {
  const full = Math.round(rating || 5);
  return "&#9733;".repeat(full) + "&#9734;".repeat(5 - full);
}

// ---- Cart (still localStorage — it's a per-session shopping cart, doesn't need to sync across
// devices, and storing a snapshot of the product here avoids extra round-trips on the cart page) ----
function cartKey(productId, variant) { return productId + "::" + (variant || ""); }
function getCart() { try { return JSON.parse(localStorage.getItem("bcCart") || "[]"); } catch (e) { return []; } }
function saveCart(cart) { localStorage.setItem("bcCart", JSON.stringify(cart)); updateCartBadge(); }
function addToCart(productId, variant, qty, productSnapshot) {
  const cart = getCart();
  const key = cartKey(productId, variant);
  const existing = cart.find(c => cartKey(c.productId, c.variant) === key);
  if (existing) { existing.qty += qty; }
  else { cart.push({ productId, variant: variant || "", qty, product: productSnapshot }); }
  saveCart(cart);
}
function updateCartLineQty(productId, variant, qty) {
  let cart = getCart();
  const key = cartKey(productId, variant);
  if (qty <= 0) { cart = cart.filter(c => cartKey(c.productId, c.variant) !== key); }
  else { const line = cart.find(c => cartKey(c.productId, c.variant) === key); if (line) line.qty = qty; }
  saveCart(cart);
}
function removeFromCart(productId, variant) { updateCartLineQty(productId, variant, 0); }
function clearCart() { saveCart([]); }
function cartLines() { return getCart(); }
function cartTotal() { return cartLines().reduce((sum, l) => sum + Number(l.product.price) * l.qty, 0); }
function updateCartBadge() {
  const n = getCart().reduce((sum, c) => sum + c.qty, 0);
  document.querySelectorAll("#cartCount").forEach(el => { el.textContent = n; el.style.display = n > 0 ? "grid" : "none"; });
}
document.addEventListener("DOMContentLoaded", updateCartBadge);

// ---- Orders (real — written to obc_orders / obc_order_items) ----
async function placeOrder(shippingInfo, buyerId) {
  const lines = cartLines();
  if (!lines.length) return null;
  const total = cartTotal();
  const { data: order, error } = await obcClient.from("obc_orders").insert({ buyer_id: buyerId, shipping_info: shippingInfo, total }).select().single();
  if (error) { console.error(error); return null; }
  const items = lines.map(l => ({
    order_id: order.id,
    product_id: l.productId,
    shop_id: l.product.shop_id,
    title: l.product.title,
    price: l.product.price,
    qty: l.qty,
    variant: l.variant || null,
  }));
  await obcClient.from("obc_order_items").insert(items);
  clearCart();
  return order;
}

async function getOrderItemsForShop(shopId) {
  const { data, error } = await obcClient
    .from("obc_order_items")
    .select("id,order_id,title,price,qty,variant,status,obc_orders(shipping_info,created_at)")
    .eq("shop_id", shopId)
    .order("id", { ascending: false });
  if (error) { console.error(error); return []; }
  return data;
}
async function setOrderItemStatus(orderItemId, status) {
  return obcClient.from("obc_order_items").update({ status }).eq("id", orderItemId);
}
