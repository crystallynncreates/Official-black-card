// Real favicon for any external link card — derived straight from the link's own domain
// (no third-party favicon proxy, no Google). Used everywhere a search result/source has a URL.
function obcFavicon(url) {
  try { return new URL(url).origin + "/favicon.ico"; } catch (e) { return ""; }
}
function obcFaviconImg(url, size) {
  const s = size || 20;
  const src = obcFavicon(url);
  if (!src) return "";
  return `<img src="${src}" alt="" style="width:${s}px;height:${s}px;border-radius:4px;object-fit:contain;background:#fff;padding:2px;" onerror="this.style.display='none'" />`;
}

// Shared behavior across pages: app launcher, nav avatar, cart/message badges.
document.addEventListener("DOMContentLoaded", () => {
  // App launcher — the grid-icon button in the upper-left of the nav that opens a panel
  // of every topic. Replaces the old hamburger/nav-links mobile menu everywhere.
  const launcherBtn = document.getElementById("launcherBtn");
  const launcherPanel = document.getElementById("appLauncherPanel");
  if (launcherBtn && launcherPanel) {
    launcherBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = launcherPanel.classList.toggle("open");
      launcherBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", (e) => {
      if (launcherPanel.classList.contains("open") && !launcherPanel.contains(e.target) && e.target !== launcherBtn) {
        launcherPanel.classList.remove("open");
        launcherBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Nav avatar — shows the signed-in member's initials once loaded (falls back to a
  // generic icon already in the markup if this never resolves, e.g. offline).
  const navAvatar = document.getElementById("navAvatar");
  if (navAvatar && typeof obcGetMyMember === "function") {
    obcGetMyMember().then((member) => {
      if (member) {
        navAvatar.textContent = `${(member.first_name || "?")[0]}${(member.last_name || "")[0] || ""}`.toUpperCase();
      }
    }).catch(() => {});
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
