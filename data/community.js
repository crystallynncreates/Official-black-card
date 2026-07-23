// Seed data for "Take Back Your Community" — civic action hub.
//
// LINK PHILOSOPHY (rewritten 2026-07-25 — no more Google-search links, ever):
//  - direct: a single authoritative nationwide source (e.g. vote.gov) — same for everyone.
//  - curated311: 311/city-services needs are handled by ~19,000 different cities, so we can't
//    hand-maintain a direct link for all of them. Instead of punting to a Google search (which
//    isn't the app doing any real work), we maintain a real, curated list of major cities' actual
//    311 portals (CURATED_311 below). If the member's city matches, they get the real direct link.
//    If not, the honest fallback is USA.gov's official state/local government directory — a real
//    federal resource built for exactly "find your city's official site," not a search engine.
//  - directoryFallback: for hyper-local programs with no way to curate at scale (block captain,
//    rec boards), same honest USA.gov fallback, framed as "we don't have your city yet."

const CURATED_311 = [
  { city: "New York", state: "NY", name: "NYC 311", url: "https://portal.311.nyc.gov/" },
  { city: "Chicago", state: "IL", name: "Chicago 311", url: "https://311.chicago.gov/" },
  { city: "Houston", state: "TX", name: "Houston 311", url: "https://my311.houstontx.gov/" },
  { city: "Los Angeles", state: "CA", name: "MyLA311", url: "https://lacity.gov/myla311" },
  { city: "Philadelphia", state: "PA", name: "Philly311", url: "https://www.phila.gov/departments/philly311/" },
  { city: "Atlanta", state: "GA", name: "ATL311", url: "https://www.atl311.com/" },
  { city: "Washington", state: "DC", name: "DC 311", url: "https://311.dc.gov/citizen/s/" },
  { city: "San Francisco", state: "CA", name: "SF311", url: "https://www.sf311.org/" },
  { city: "Boston", state: "MA", name: "Boston 311", url: "https://www.boston.gov/departments/boston-311" },
  { city: "Detroit", state: "MI", name: "Improve Detroit", url: "https://detroitmi.gov/how-do-i/report-problem/improve-detroit" },
];

const STATE_LOCAL_GOV_DIRECTORY = "https://www.usa.gov/state-local-governments";
const POLICE_NONEMERGENCY_DIRECTORY = "https://www.police1.com/non-emergency-number-directory";

const CIVIC_ACTIONS = [
  {
    id: "watch",
    title: "Start a Neighborhood Watch",
    tag: "Safety",
    tagClass: "tag-emerald",
    icon: "&#128064;",
    overview: "Any resident can start one. Watch members are extra eyes and ears — you observe and report to police, you don't confront or take enforcement action yourself.",
    steps: ["Talk to neighbors and gauge interest", "Contact local law enforcement's community policing office to set up a kickoff meeting", "Register your group for free at the National Neighborhood Watch site", "Agree on how members will report suspicious activity"],
    linkType: "direct",
    linkLabel: "Register at National Neighborhood Watch",
    linkUrl: "https://www.nnw.org/getting-started",
  },
  {
    id: "captain",
    title: "Become a Block Captain",
    tag: "Leadership",
    tagClass: "tag-gold",
    icon: "&#127968;",
    overview: "Block captains are the point person for their block — sharing city/neighborhood-association updates, organizing clean-ups, and being the first call when something's wrong. Programs are run city-by-city (Philadelphia's, for example, requires a petition signed by a majority of your block, then a short training).",
    steps: ["Find your city or neighborhood association's block captain program", "Some cities require a petition signed by a majority of your block", "Attend an orientation/training session", "Start relaying updates and organizing your block"],
    linkType: "directoryFallback",
    linkLabel: "Find your city's official government site",
  },
  {
    id: "vote",
    title: "Register to Vote",
    tag: "Civic Rights",
    tagClass: "tag-violet",
    icon: "&#128233;",
    overview: "Every citizen 18+ has the right to register. Rules on registering after a felony conviction vary significantly by state — some restore rights automatically, some require an application. Check your state's specific rule if this applies to you.",
    steps: ["Go to vote.gov and select your state", "Register online where available, or print/mail the National Mail Voter Registration Form", "Confirm your polling place before election day", "Consider becoming a paid poll worker through the EAC lookup tool"],
    linkType: "direct",
    linkLabel: "Register at Vote.gov",
    linkUrl: "https://vote.gov/",
    secondaryLabel: "Become a poll worker (EAC)",
    secondaryUrl: "https://www.eac.gov/help-america-vote",
  },
  {
    id: "gun",
    title: "Get a Gun License / Permit",
    tag: "Rights",
    tagClass: "tag-coral",
    icon: "&#128737;",
    overview: "There are two different systems: a Federal Firearms License (FFL) from the ATF is for people in the business of selling/manufacturing firearms. Personal ownership/carry permits are issued by your state, and requirements range from no permit needed (\"constitutional carry\") to a full application, training, and background check — it varies a lot by state.",
    steps: ["Decide if you need a personal carry permit (state) or a business FFL (federal)", "For a business FFL, apply directly through ATF", "For a personal permit, find your state's official rules below", "Complete any required safety training and background check"],
    linkType: "mixed",
    linkLabel: "ATF Federal Firearms Licenses",
    linkUrl: "https://www.atf.gov/firearms/federal-firearms-licenses",
    secondaryLabel: "Find your state's official government site",
    secondaryUrl: STATE_LOCAL_GOV_DIRECTORY,
  },
  {
    id: "recboard",
    title: "Join a Recreation Center Board",
    tag: "Leadership",
    tagClass: "tag-emerald",
    icon: "&#127942;",
    overview: "Most parks & recreation advisory boards are open to any resident — often you just need to attend a meeting and sign in, or submit a short application. Some require you to live or own property in the city.",
    steps: ["Find your city's Parks & Recreation Board or Advisory Council", "Attend a public meeting (this alone often qualifies you as a member)", "Or submit a board application/self-nomination if your city requires one"],
    linkType: "directoryFallback",
    linkLabel: "Find your city's official government site",
  },
  {
    id: "reportcrime",
    title: "Report a Crime",
    tag: "Safety",
    tagClass: "tag-gold",
    icon: "&#128222;",
    overview: "Call 911 for anything happening right now that threatens life, health, or property. For something after the fact (a break-in you just discovered, an ongoing pattern), use your local police non-emergency line.",
    steps: ["Life-threatening or in-progress? Call 911", "Otherwise, look up your local police non-emergency number", "Many departments also accept online reports for minor incidents", "Ask for a case/report number for your records"],
    linkType: "direct",
    linkLabel: "Look up your department: Police1 Non-Emergency Directory",
    linkUrl: POLICE_NONEMERGENCY_DIRECTORY,
  },
  {
    id: "pothole",
    title: "Report a Pothole",
    tag: "Neighborhood",
    tagClass: "tag-violet",
    icon: "&#128679;",
    overview: "Most cities route this through 311 — a non-emergency number/portal for city services, separate from 911. You describe the problem once and it's routed to public works.",
    steps: ["Note the exact location (nearest cross streets or address)", "Call 311 or use your city's 311 app/website", "Include a photo if the portal allows it", "Save your service request number to check status"],
    linkType: "curated311",
  },
  {
    id: "streetclean",
    title: "Street Cleaning Schedule & Reporting",
    tag: "Neighborhood",
    tagClass: "tag-coral",
    icon: "&#129529;",
    overview: "Street cleaning schedules and missed-cleaning reports are also handled through your city's 311 system in most places.",
    steps: ["Look up your street's cleaning schedule on your city's site or 311 app", "Report a missed cleaning through 311", "Sign up for street-cleaning alerts/reminders if your city offers them"],
    linkType: "curated311",
  },
];

if (typeof module !== "undefined") {
  module.exports = { CIVIC_ACTIONS, CURATED_311, STATE_LOCAL_GOV_DIRECTORY, POLICE_NONEMERGENCY_DIRECTORY };
}
