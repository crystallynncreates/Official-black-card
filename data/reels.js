// Seed data for Reels (vlogs + short-form video). This domain also absorbs what was originally
// planned as a separate "safety mobilization/filming" network — instead of a real-time dispatch
// tool, community safety content (know-your-rights, documenting incidents, etc.) lives here as
// regular reel content alongside everything else, which sidesteps the liability/legal-review
// questions a live mobilization network would raise. See memory file for the full reasoning.

const REELS = [
  { creator: "Nia W.", avatarAlt: false, caption: "Sunday morning walk-through of the new co-op garden 🌱 who's coming next weekend?", gradient: "linear-gradient(160deg, var(--emerald), var(--violet))", likes: 214, comments: 18 },
  { creator: "Marcus J.", avatarAlt: true, caption: "Know your rights during a traffic stop — 60 second breakdown 🎥", gradient: "linear-gradient(160deg, var(--gold), var(--coral))", likes: 892, comments: 143 },
  { creator: "Denise R.", avatarAlt: false, caption: "How I filmed and documented a store incident the right way — stayed safe, got it on record.", gradient: "linear-gradient(160deg, var(--coral), var(--violet))", likes: 431, comments: 76 },
  { creator: "Tyrell B.", avatarAlt: true, caption: "Apprenticeship graduation day 🔧 from this app's job board to a full-time offer!", gradient: "linear-gradient(160deg, var(--violet), var(--emerald))", likes: 1204, comments: 210 },
  { creator: "Angela T.", avatarAlt: false, caption: "Quick recipe: Sunday greens, from my grandmother's recipe box.", gradient: "linear-gradient(160deg, var(--gold), var(--emerald))", likes: 356, comments: 44 },
  { creator: "Crystal N.", avatarAlt: true, caption: "Block captain 101 — what the role actually looks like week to week.", gradient: "linear-gradient(160deg, var(--emerald), var(--gold))", likes: 178, comments: 29 },
];

if (typeof module !== "undefined") {
  module.exports = { REELS };
}
