// Official Black Card — Supabase client.
// The publishable key below is safe to ship client-side by design (same as any anon/publishable
// key) — every table it touches is protected by row-level security policies on the server, so
// this key alone can't read or write anything a signed-in user shouldn't see. See the migrations
// in the project's Supabase project (tables prefixed obc_) for the actual access rules.
//
// Loaded via CDN (no bundler/Node on this machine) — include supabase-js BEFORE this file:
//   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
//   <script src="js/supabase-client.js"></script>

const OBC_SUPABASE_URL = "https://gfhnwydldnvtvquagzav.supabase.co";
const OBC_SUPABASE_KEY = "sb_publishable_oE5CKadv0y-bBpr217-gmg_0CII8so0";

const obcClient = supabase.createClient(OBC_SUPABASE_URL, OBC_SUPABASE_KEY);

// ---- Session / member helpers shared across pages ----

async function obcGetSession() {
  const { data } = await obcClient.auth.getSession();
  return data.session;
}

async function obcGetMyMember() {
  const session = await obcGetSession();
  if (!session) return null;
  const { data, error } = await obcClient
    .from("obc_members")
    .select("*")
    .eq("id", session.user.id)
    .maybeSingle();
  if (error) { console.error(error); return null; }
  return data;
}

async function obcSignOut() {
  await obcClient.auth.signOut();
}

function obcFormatMemberNumber(n) {
  return "OBC · " + String(n || "").padStart(6, "0");
}

// Redirect helper for pages that require a signed-in member with a completed profile
// (e.g. profile.html, messages.html, invite.html). Call and await at the top of the page script.
async function obcRequireMember() {
  const member = await obcGetMyMember();
  if (!member) {
    window.location.href = "login.html";
    return null;
  }
  return member;
}
