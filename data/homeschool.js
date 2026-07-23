// Seed data for the Homeschooling domain.
// IMPORTANT — accuracy discipline: homeschool law varies by state and changes over time.
// We only assert a specific regulation tier/requirement for a state when it's a well-documented,
// stable fact (sourced 2026-07-23 from HSLDA's own published tier framework + state law summaries).
// Every other state shows a "verify directly" card instead of a guessed tier — wrong legal info
// here could cause real harm to a family's compliance, so we don't fill gaps with guesses.

const REG_TIER_INFO = {
  "No/Low Notice": "No notification, or a simple notice to the local district — no testing or evaluation required.",
  "Moderate": "Notification plus some form of testing, evaluation, or subject requirements.",
  "High": "Notification/testing plus additional requirements — curriculum approval, parent qualifications, or home visits.",
};

// Confirmed from HSLDA's published framework — not a guess. All other states/DC show "verify" state.
const CONFIRMED_STATE_LAWS = {
  "TX": { tier: "No/Low Notice", note: "Homeschools are treated as private schools (Leeper v. Arlington ISD). No state approval, registration, or testing — but you must use a written curriculum covering reading, spelling, grammar, math & good citizenship, taught in a bona fide manner.", source: "https://hslda.org/post/how-to-comply-with-texas-homeschool-law" },
  "AK": { tier: "No/Low Notice", note: "Among the least regulated states — minimal to no notice requirement.", source: "https://hslda.org/legal/" },
  "ID": { tier: "No/Low Notice", note: "Among the least regulated states — minimal to no notice requirement.", source: "https://hslda.org/legal/" },
  "IL": { tier: "No/Low Notice", note: "Among the least regulated states — minimal to no notice requirement.", source: "https://hslda.org/legal/" },
  "IN": { tier: "No/Low Notice", note: "Among the least regulated states — minimal to no notice requirement.", source: "https://hslda.org/legal/" },
  "MI": { tier: "No/Low Notice", note: "Among the least regulated states — minimal to no notice requirement.", source: "https://hslda.org/legal/" },
  "MO": { tier: "No/Low Notice", note: "Among the least regulated states — minimal to no notice requirement.", source: "https://hslda.org/legal/" },
  "NJ": { tier: "No/Low Notice", note: "Among the least regulated states — minimal to no notice requirement.", source: "https://hslda.org/legal/" },
  "OK": { tier: "No/Low Notice", note: "Among the least regulated states — minimal to no notice requirement.", source: "https://hslda.org/legal/" },
  "MA": { tier: "High", note: "One of the most regulated states — expect district approval of your homeschool plan and possible ongoing oversight.", source: "https://hslda.org/legal/" },
  "NY": { tier: "High", note: "One of the most regulated states — individualized home instruction plan (IHIP), quarterly reports, and annual assessments are typically required.", source: "https://hslda.org/legal/" },
  "PA": { tier: "High", note: "One of the most regulated states — affidavit, subject requirements, and portfolio review/standardized testing at set grades.", source: "https://hslda.org/legal/" },
  "RI": { tier: "High", note: "One of the most regulated states — local school committee approval of your program is typically required.", source: "https://hslda.org/legal/" },
  "VT": { tier: "High", note: "One of the most regulated states — enrollment notice and annual assessment are typically required.", source: "https://hslda.org/legal/" },
};

// Equal-access ("Tim Tebow law") extracurricular participation — real, well-documented category of
// state law letting homeschoolers try out for public school sports/activities. Presence & exact
// rules vary by state; always verify locally rather than assuming.
const EQUAL_ACCESS_NOTE = "Many states have an “equal access” (sometimes called “Tim Tebow”) law that lets homeschoolers try out for public school sports and extracurriculars. Whether your state/district has one, and what the eligibility rules are, varies — confirm with your local district athletics office.";

// K-12 Education Savings Account (ESA) states — sourced 2026-07-23. Confirmed: fewer than a dozen
// of these actually extend eligibility to independent homeschoolers (vs. private-school-only use) —
// always verify current eligibility before counting on funding.
const ESA_STATES = ["AL", "AZ", "AR", "FL", "GA", "IN", "IA", "LA", "MS", "MT", "NH", "NC", "SC", "TN", "TX", "UT", "WV", "WY"];

const PRIVATE_GRANTS = [
  { name: "Children's Scholarship Fund", url: "https://scholarshipfund.org/", note: "Tuition assistance for low-income K-12 families." },
  { name: "Black Student Fund", url: "https://blackstudentfund.org/", note: "Financial aid & support for Black students pre-K–12 (Washington, DC area)." },
  { name: "Jack Kent Cooke Foundation", url: "https://www.jkcf.org/", note: "Scholarships for high-achieving students with financial need — academics + extracurriculars considered." },
  { name: "A Better Chance", url: "https://abetterchance.org/", note: "Connects grades 4–9 minority students with schools & financial aid." },
  { name: "Step Up For Students", url: "https://www.stepupforstudents.org/", note: "Florida K-12 scholarship program." },
];

const HOMESCHOOL_ORG_SOURCES = [
  { name: "HSLDA — Homeschool Laws by State", url: "https://hslda.org/legal/", note: "The authoritative, continuously-updated map of homeschool law for all 50 states + territories. Start here for anything not covered below." },
  { name: "A2Z Homeschooling", url: "https://a2zhomeschooling.com/", note: "Free curriculum guides, state law summaries, getting-started resources." },
];

if (typeof module !== "undefined") {
  module.exports = { REG_TIER_INFO, CONFIRMED_STATE_LAWS, EQUAL_ACCESS_NOTE, ESA_STATES, PRIVATE_GRANTS, HOMESCHOOL_ORG_SOURCES };
}
