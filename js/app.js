// Shared behavior across pages: mobile nav toggle + cart badge.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.style.display === "flex";
      links.style.display = open ? "none" : "flex";
      links.style.flexDirection = "column";
      links.style.position = "absolute";
      links.style.top = "58px";
      links.style.left = "0";
      links.style.right = "0";
      links.style.background = "#111116";
      links.style.padding = "18px 24px";
      links.style.borderBottom = "1px solid #2b2b38";
    });
  }

  // Cart badge — reads localStorage directly so it works on every page, even ones
  // that don't load js/shop.js. js/shop.js's own updateCartBadge() takes over on shop pages.
  try {
    const cart = JSON.parse(localStorage.getItem("bcCart") || "[]");
    const count = cart.reduce((n, c) => n + c.qty, 0);
    document.querySelectorAll("#cartCount").forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? "grid" : "none";
    });
  } catch (e) { /* localStorage unavailable — badge just stays hidden */ }

  // Message badge — mirrors js/members.js's unreadCount() without needing data/members.js
  // loaded on every page. Seed conversations c1 and c3 start unread until the member replies
  // (see data/members.js SEED_CONVERSATIONS — keep this list in sync if seed convos change).
  try {
    const seedUnread = ["c1", "c3"];
    const overrides = JSON.parse(localStorage.getItem("bcConvOverrides") || "{}");
    const count = seedUnread.filter(id => !(overrides[id] || []).some(m => m.from === "me")).length;
    document.querySelectorAll("#msgCount").forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? "grid" : "none";
    });
  } catch (e) { /* localStorage unavailable — badge just stays hidden */ }
});
