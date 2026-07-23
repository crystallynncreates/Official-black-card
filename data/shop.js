// Seed data for Back To Wallstreet Shoppe.

const SEED_SHOPS = [
  { id: 1, name: "Sweet Auburn Apothecary", category: "Beauty", bio: "Small-batch shea butters, oils & candles, hand-poured in Atlanta.", payoutMethod: "Cash App", payoutHandle: "$SweetAuburnApothecary", gradient: "linear-gradient(160deg, var(--gold), var(--coral))", rating: 4.8, reviews: 212, followers: 3400 },
  { id: 2, name: "Crownworthy Apparel", category: "Fashion", bio: "Streetwear & headwraps designed by us, for us.", payoutMethod: "Zelle", payoutHandle: "orders@crownworthy.co", gradient: "linear-gradient(160deg, var(--emerald), var(--violet))", rating: 4.6, reviews: 98, followers: 1900 },
  { id: 3, name: "Roots & Root Vegetables", category: "Food", bio: "Family farm goods — preserves, honey, and heirloom seeds.", payoutMethod: "Cash App", payoutHandle: "$RootsAndRootVeg", gradient: "linear-gradient(160deg, var(--coral), var(--violet))", rating: 5.0, reviews: 64, followers: 820 },
  { id: 4, name: "Ink & Onyx Prints", category: "Art & Home", bio: "Original prints, candles, and home goods from independent Black artists.", payoutMethod: "Zelle", payoutHandle: "shop@inkandonyx.com", gradient: "linear-gradient(160deg, var(--gold), var(--emerald))", rating: 4.9, reviews: 156, followers: 2600 },
];

const SEED_PRODUCTS = [
  { id: 101, shopId: 1, title: "Whipped Shea Butter — Vanilla Bean", desc: "100% raw shea, whipped smooth. 8oz jar.", price: 14.99, originalPrice: 19.99, category: "Beauty", qty: 40, variants: ["4oz", "8oz", "16oz"], gradient: "linear-gradient(160deg, var(--gold), var(--coral))", rating: 4.9, sold: 1240 },
  { id: 102, shopId: 1, title: "Black Soap Bar Trio", desc: "Traditional African black soap, 3-pack.", price: 18.00, originalPrice: null, category: "Beauty", qty: 30, variants: null, gradient: "linear-gradient(160deg, var(--gold), var(--emerald))", rating: 4.7, sold: 612 },
  { id: 103, shopId: 1, title: "Honey Almond Candle", desc: "Hand-poured soy candle, 40hr burn.", price: 22.00, originalPrice: 26.00, category: "Home", qty: 25, variants: null, gradient: "linear-gradient(160deg, var(--coral), var(--gold))", rating: 4.8, sold: 340 },
  { id: 201, shopId: 2, title: "Crownworthy Ankara Headwrap", desc: "Premium wax-print headwrap, one size.", price: 24.99, originalPrice: 32.00, category: "Fashion", qty: 60, variants: ["Sunrise", "Onyx", "Emerald"], gradient: "linear-gradient(160deg, var(--emerald), var(--violet))", rating: 4.6, sold: 890 },
  { id: 202, shopId: 2, title: "\"Rooted\" Graphic Tee", desc: "Heavyweight cotton tee, screen printed.", price: 29.00, originalPrice: null, category: "Fashion", qty: 100, variants: ["S", "M", "L", "XL", "XXL"], gradient: "linear-gradient(160deg, var(--violet), var(--gold))", rating: 4.5, sold: 455 },
  { id: 203, shopId: 2, title: "Crown Snapback Cap", desc: "Structured 6-panel cap, embroidered crown.", price: 27.50, originalPrice: 35.00, category: "Fashion", qty: 45, variants: ["Black", "Gold"], gradient: "linear-gradient(160deg, var(--emerald), var(--coral))", rating: 4.7, sold: 210 },
  { id: 301, shopId: 3, title: "Peach Preserves — 12oz", desc: "Small-batch, family recipe, no added pectin.", price: 9.50, originalPrice: null, category: "Food", qty: 80, variants: null, gradient: "linear-gradient(160deg, var(--coral), var(--violet))", rating: 5.0, sold: 300 },
  { id: 302, shopId: 3, title: "Raw Wildflower Honey — 16oz", desc: "Unfiltered, single-origin, harvested this season.", price: 13.00, originalPrice: 16.00, category: "Food", qty: 55, variants: null, gradient: "linear-gradient(160deg, var(--gold), var(--violet))", rating: 4.9, sold: 410 },
  { id: 303, shopId: 3, title: "Heirloom Collard Seed Pack", desc: "Open-pollinated, non-GMO, saved seed.", price: 4.99, originalPrice: null, category: "Home & Garden", qty: 200, variants: null, gradient: "linear-gradient(160deg, var(--violet), var(--emerald))", rating: 4.8, sold: 180 },
  { id: 401, shopId: 4, title: "\"Sunday Best\" Fine Art Print", desc: "Giclée print, archival paper, signed.", price: 45.00, originalPrice: 60.00, category: "Art & Home", qty: 20, variants: ["8x10", "11x14", "16x20"], gradient: "linear-gradient(160deg, var(--gold), var(--emerald))", rating: 5.0, sold: 95 },
  { id: 402, shopId: 4, title: "Onyx Ceramic Vase", desc: "Hand-thrown stoneware, matte black glaze.", price: 38.00, originalPrice: null, category: "Art & Home", qty: 15, variants: null, gradient: "linear-gradient(160deg, var(--emerald), var(--gold))", rating: 4.9, sold: 60 },
  { id: 403, shopId: 4, title: "Ancestors Amber Candle", desc: "Sandalwood & amber, poured in reclaimed glass.", price: 24.00, originalPrice: 28.00, category: "Home", qty: 35, variants: null, gradient: "linear-gradient(160deg, var(--coral), var(--emerald))", rating: 4.8, sold: 275 },
];

const SHOP_CATEGORIES = ["All", "Beauty", "Fashion", "Food", "Home", "Home & Garden", "Art & Home"];

if (typeof module !== "undefined") {
  module.exports = { SEED_SHOPS, SEED_PRODUCTS, SHOP_CATEGORIES };
}
