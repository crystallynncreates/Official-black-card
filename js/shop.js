// Back To Wallstreet Shoppe — data engine.
// No backend yet, so "creating a shop/product" and "placing an order" are stored in the browser's
// localStorage. This is real client-side state (persists across pages & reloads on this device/
// browser), not a toast-only demo — but it is NOT shared between users/devices. A real backend
// (Supabase) replaces this file's storage calls 1:1 when ready; the function signatures below are
// written so that swap is mechanical.
//
// Money model (updated 2026-07-23): the peer-to-peer "pay the seller's own Cash App/Zelle handle
// directly" pattern is scoped to Savings Circles ONLY, not the Shoppe. The Shoppe simulates a real
// integrated TikTok Shop-style checkout instead (shipping + card-form payment step in checkout.html)
// — no seller handle is ever shown to a buyer. No real payment processor is connected; the payment
// form is a visual placeholder only, and nothing entered there is stored. A live launch needs a
// licensed payment processor (e.g. Stripe) wired in here before this can move real money. Sellers
// still record a payoutMethod/payoutHandle when creating a shop — that's how the platform would pay
// THEM out later (seller-facing only, shown in sell.html, never buyer-facing).

const GRADIENTS = [
  "linear-gradient(160deg, var(--gold), var(--coral))",
  "linear-gradient(160deg, var(--emerald), var(--violet))",
  "linear-gradient(160deg, var(--coral), var(--violet))",
  "linear-gradient(160deg, var(--gold), var(--emerald))",
  "linear-gradient(160deg, var(--violet), var(--gold))",
];

function bcRead(key) {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch (e) { return []; }
}
function bcWrite(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

// ---- Shops ----
function getAllShops() { return SEED_SHOPS.concat(bcRead("bcShops")); }
function getShopById(id) { return getAllShops().find(s => String(s.id) === String(id)); }
function createShop({ name, category, bio, payoutMethod, payoutHandle }) {
  const shops = bcRead("bcShops");
  const shop = {
    id: "u" + Date.now(),
    name, category, bio, payoutMethod, payoutHandle,
    gradient: GRADIENTS[shops.length % GRADIENTS.length],
    rating: 5.0,
    reviews: 0,
    followers: 0,
    custom: true,
  };
  shops.push(shop);
  bcWrite("bcShops", shops);
  return shop;
}
function getMyShops() { return bcRead("bcShops"); }

// ---- Products ----
function getAllProducts() { return SEED_PRODUCTS.concat(bcRead("bcProducts")); }
function getProductById(id) { return getAllProducts().find(p => String(p.id) === String(id)); }
function getProductsByShop(shopId) { return getAllProducts().filter(p => String(p.shopId) === String(shopId)); }
function createProduct({ shopId, title, desc, price, originalPrice, category, qty, variants }) {
  const products = bcRead("bcProducts");
  const product = {
    id: "p" + Date.now(),
    shopId, title, desc,
    price: Number(price),
    originalPrice: originalPrice ? Number(originalPrice) : null,
    category,
    qty: Number(qty) || 1,
    variants: variants && variants.length ? variants : null,
    gradient: GRADIENTS[products.length % GRADIENTS.length],
    rating: 5.0,
    sold: 0,
    custom: true,
  };
  products.push(product);
  bcWrite("bcProducts", products);
  return product;
}

// ---- Cart ----
function getCart() { return bcRead("bcCart"); }
function cartKey(productId, variant) { return productId + "::" + (variant || ""); }
function addToCart(productId, variant, qty) {
  const cart = getCart();
  const key = cartKey(productId, variant);
  const existing = cart.find(c => cartKey(c.productId, c.variant) === key);
  if (existing) { existing.qty += qty; } else { cart.push({ productId, variant: variant || "", qty }); }
  bcWrite("bcCart", cart);
  updateCartBadge();
}
function updateCartLineQty(productId, variant, qty) {
  let cart = getCart();
  const key = cartKey(productId, variant);
  if (qty <= 0) { cart = cart.filter(c => cartKey(c.productId, c.variant) !== key); }
  else { const line = cart.find(c => cartKey(c.productId, c.variant) === key); if (line) line.qty = qty; }
  bcWrite("bcCart", cart);
  updateCartBadge();
}
function removeFromCart(productId, variant) { updateCartLineQty(productId, variant, 0); }
function clearCart() { bcWrite("bcCart", []); updateCartBadge(); }
function cartCount() { return getCart().reduce((n, c) => n + c.qty, 0); }
function cartLines() {
  return getCart().map(c => ({ ...c, product: getProductById(c.productId) })).filter(l => l.product);
}
function cartTotal() { return cartLines().reduce((sum, l) => sum + l.product.price * l.qty, 0); }

function updateCartBadge() {
  document.querySelectorAll("#cartCount").forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "grid" : "none";
  });
}

// ---- Orders ----
function getOrders() { return bcRead("bcOrders"); }
function placeOrder(shippingInfo) {
  const lines = cartLines();
  if (!lines.length) return null;
  const bySeller = {};
  lines.forEach(l => {
    const shop = getShopById(l.product.shopId);
    if (!bySeller[l.product.shopId]) {
      bySeller[l.product.shopId] = { shopId: l.product.shopId, shopName: shop ? shop.name : "Unknown Shop", payoutMethod: shop ? shop.payoutMethod : "Cash App", payoutHandle: shop ? shop.payoutHandle : "", items: [], status: "Paid — Processing" };
    }
    bySeller[l.product.shopId].items.push({ productId: l.product.id, title: l.product.title, price: l.product.price, qty: l.qty, variant: l.variant });
  });
  const order = {
    id: "o" + Date.now(),
    date: new Date().toISOString(),
    shippingInfo,
    subOrders: Object.values(bySeller),
    total: cartTotal(),
  };
  const orders = getOrders();
  orders.unshift(order);
  bcWrite("bcOrders", orders);
  clearCart();
  return order;
}
function setSubOrderStatus(orderId, shopId, status) {
  const orders = getOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  const sub = order.subOrders.find(s => String(s.shopId) === String(shopId));
  if (sub) sub.status = status;
  bcWrite("bcOrders", orders);
}
function getOrdersForShop(shopId) {
  const results = [];
  getOrders().forEach(o => {
    o.subOrders.filter(s => String(s.shopId) === String(shopId)).forEach(s => {
      results.push({ orderId: o.id, date: o.date, shippingInfo: o.shippingInfo, ...s });
    });
  });
  return results;
}

function stars(rating) {
  const full = Math.round(rating);
  return "&#9733;".repeat(full) + "&#9734;".repeat(5 - full);
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
