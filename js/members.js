// Membership, connections & messaging — data engine.
// Same localStorage-backed pattern as js/shop.js: real client-side state, per-browser only,
// no backend yet. Swapping in Supabase later is a mechanical replacement of bcRead/bcWrite.

function bcRead(key) {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch (e) { return []; }
}
function bcWrite(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

function normalizeNumber(n) { return String(n || "").replace(/[^0-9]/g, ""); }
function formatMemberNumber(n) { return "OBC · " + normalizeNumber(n).padStart(6, "0"); }

// ---- Members ----
function getAllMembers() { return SEED_MEMBERS.concat(bcRead("bcMembers")); }
function findMemberByNumber(num) {
  const n = normalizeNumber(num);
  return getAllMembers().find(m => normalizeNumber(m.number) === n);
}
function nextMembershipNumber() {
  let counter = Number(localStorage.getItem("bcMemberCounter") || 10000);
  localStorage.setItem("bcMemberCounter", String(counter + 1));
  return String(counter);
}
// Returns { ok: true, member } or { ok: false, error }
function createMember({ firstName, lastName, email, referredByNumber }) {
  const referrer = findMemberByNumber(referredByNumber);
  if (!referrer) {
    return { ok: false, error: "That membership number isn't recognized. You need a valid member's number to join — ask the person who invited you to double-check theirs." };
  }
  const number = nextMembershipNumber();
  const member = {
    number, firstName, lastName, email,
    referredBy: referrer.number,
    joined: new Date().toISOString().slice(0, 10),
  };
  const members = bcRead("bcMembers");
  members.push(member);
  bcWrite("bcMembers", members);
  setCurrentMember(number);
  return { ok: true, member, referrer };
}
function setCurrentMember(number) { localStorage.setItem("bcCurrentMemberNumber", number); }
function getCurrentMember() {
  const num = localStorage.getItem("bcCurrentMemberNumber");
  return num ? findMemberByNumber(num) : null;
}

// ---- Connections ("People You May Know" → connected) ----
function getConnections() { return bcRead("bcConnections"); }
function addConnection(name) {
  const list = getConnections();
  if (!list.includes(name)) { list.push(name); bcWrite("bcConnections", list); }
}

// ---- Messaging ----
function getConversations() {
  const overrides = JSON.parse(localStorage.getItem("bcConvOverrides") || "{}");
  return SEED_CONVERSATIONS.map(c => ({ ...c, messages: overrides[c.id] ? c.messages.concat(overrides[c.id]) : c.messages }));
}
function sendMessage(convId, text) {
  const overrides = JSON.parse(localStorage.getItem("bcConvOverrides") || "{}");
  if (!overrides[convId]) overrides[convId] = [];
  overrides[convId].push({ from: "me", text, time: "Just now" });
  localStorage.setItem("bcConvOverrides", JSON.stringify(overrides));
}
function unreadCount() {
  // Demo heuristic: one unread per conversation that has no "me" reply yet.
  return getConversations().filter(c => !c.messages.some(m => m.from === "me")).length;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#msgCount").forEach(el => {
    const n = unreadCount();
    el.textContent = n;
    el.style.display = n > 0 ? "grid" : "none";
  });
});
