// Seed data for the Prayer Corner domain.
// All scripture is KJV (public domain) only. DAILY[i] indexes by JS Date.getDay() (0=Sunday..6=Saturday)
// so the verse, gratitude line, and background motif all rotate automatically, once per day.

const DAILY = [
  { // Sunday
    motif: "sunrise",
    verse: "This is the day which the LORD hath made; we will rejoice and be glad in it.",
    ref: "Psalm 118:24 (KJV)",
    gratitude: "Today is a gift before it's anything else. Start there.",
  },
  { // Monday
    motif: "lion",
    verse: "The wicked flee when no man pursueth: but the righteous are bold as a lion.",
    ref: "Proverbs 28:1 (KJV)",
    gratitude: "Boldness isn't the absence of fear — it's showing up anyway. Be grateful for the courage already in you.",
  },
  { // Tuesday
    motif: "lamb",
    verse: "The next day John seeth Jesus coming unto him, and saith, Behold the Lamb of God, which taketh away the sin of the world.",
    ref: "John 1:29 (KJV)",
    gratitude: "Grace already covered what you're still carrying. Set it down today.",
  },
  { // Wednesday
    motif: "olive",
    verse: "Thy wife shall be as a fruitful vine by the sides of thine house: thy children like olive plants round about thy table.",
    ref: "Psalm 128:3 (KJV)",
    gratitude: "Look around your table today. That's the harvest.",
  },
  { // Thursday
    motif: "dove",
    verse: "And he saw the Spirit of God descending like a dove, and lighting upon him.",
    ref: "Matthew 3:16 (KJV)",
    gratitude: "Peace isn't loud. Let it land on you today.",
  },
  { // Friday
    motif: "mountain",
    verse: "I will lift up mine eyes unto the hills, from whence cometh my help.",
    ref: "Psalm 121:1 (KJV)",
    gratitude: "Whatever mountain you're facing, you were never meant to climb it staring at your feet.",
  },
  { // Saturday
    motif: "wheat",
    verse: "He which soweth bountifully shall reap also bountifully.",
    ref: "2 Corinthians 9:6 (KJV)",
    gratitude: "Rest today. What you've planted is still growing even when you're not working it.",
  },
];

// Seed prayer wall posts — client-side only (no backend yet), replies nest under posts.
const PRAYER_POSTS = [
  {
    id: 1,
    name: "Nia W.",
    time: "2h ago",
    text: "Asking for prayers for my mom's surgery Monday morning. She's nervous and so am I. 🙏",
    prays: 14,
    replies: [
      { name: "Marcus J.", time: "1h ago", text: "Praying for peace over her and steady hands for the surgeons. 🙏" },
      { name: "Denise R.", time: "45m ago", text: "Lifting your family up. Keep us posted." },
    ],
  },
  {
    id: 2,
    name: "Tyrell B.",
    time: "5h ago",
    text: "Grateful today. Got the apprenticeship offer I applied for on here. Thank you all for the encouragement these past few weeks.",
    prays: 32,
    replies: [
      { name: "Angela T.", time: "4h ago", text: "Let's gooo! So proud of you." },
    ],
  },
  {
    id: 3,
    name: "Crystal N.",
    time: "1d ago",
    text: "Praying for everyone job searching right now — favor, open doors, and the right people to see your worth.",
    prays: 21,
    replies: [],
  },
];

if (typeof module !== "undefined") {
  module.exports = { DAILY, PRAYER_POSTS };
}
