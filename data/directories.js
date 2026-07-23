// Seed data for the Directory domain.
// PARTNER_SOURCES: the big nationwide aggregators we link out to / plan to ingest from.
// LISTINGS: sample entries showing the schema every listing will follow once real data is loaded
// (via partner API/ingestion or user-submitted + verified). Replace with live data source later.

const PARTNER_SOURCES = [
  { name: "Official Black Wall Street", url: "https://www.officialblackwallstreet.com/", note: "Largest global directory (10 countries); map + reviews + grant directory + free legal help for entrepreneurs.", category: "General" },
  { name: "Black Owned Everything", url: "https://blackownedeverything.co/", note: "Fashion, beauty, design & lifestyle brands.", category: "General" },
  { name: "BuyBlack.org", url: "https://www.buyblack.org/", note: "110,000+ Black-owned businesses nationwide.", category: "General" },
  { name: "Black Directory", url: "https://www.blackdirectory.com/", note: "~170,000 business listings.", category: "General" },
  { name: "Support Black Owned (SBO)", url: "https://www.supportblackowned.com/sbo-directory", note: "Category-based directory, automotive to beauty.", category: "General" },
  { name: "AfroBizWorld", url: "https://www.afrobizworld.com/", note: "2,000+ businesses, entrepreneurs & orgs.", category: "General" },
  { name: "Nationally Black Owned", url: "https://www.nationallyblackowned.com/", note: "Business growth resources + directory.", category: "General" },
  { name: "WeBuyBlack", url: "https://webuyblack.com/", note: "Marketplace — the \"Amazon for Black businesses.\"", category: "Marketplace" },
  { name: "BlackBusinessList.com", url: "https://www.blackbusinesslist.com/", note: "Directory since 1997.", category: "General" },
  { name: "FDIC Minority Depository Institutions List", url: "https://www.fdic.gov/resources/minority-depository-institutions/", note: "Official U.S. government list of Black- and minority-owned banks.", category: "Banking" },
  { name: "National Bankers Association", url: "https://www.nationalbankers.org/", note: "Trade group for ~100 minority-owned banks & credit unions.", category: "Banking" },
  { name: "National Black Bank Foundation", url: "https://nbbfoundation.org/", note: "Nurturing Black banks & growing Black wealth.", category: "Banking" },
  { name: "Black Farmers Index", url: "https://blackfarmersindex.com/", note: "Largest free directory of Black farmers, ranchers & growers.", category: "Farms" },
  { name: "Black Farmers Network", url: "https://blackfarmersnetwork.com/", note: "Hub for rural African-American farmers, Black Belt region.", category: "Farms" },
  { name: "Find A Black Doctor", url: "https://www.findablackdoctor.com/", note: "Board-certified physicians, dentists & psychologists, all 50 states.", category: "Medical" },
  { name: "Black Doctors USA", url: "https://blackdoctorsusa.com/findblackdoctor.htm", note: "Family physicians, OB-GYN, pediatrics & more.", category: "Medical" },
  { name: "Minority Business Development Agency (MBDA)", url: "https://www.mbda.gov/", note: "Federal grants & business development services.", category: "Grants" },
  { name: "NMSDC", url: "https://nmsdc.org/", note: "Minority Business Enterprise (MBE) certification.", category: "Grants" },

  // Legal & Advocacy — service organizations and Black-owned/operated law firms.
  { name: "NAACP", url: "https://naacp.org/", note: "Founded 1909 — the nation's oldest and largest civil rights organization.", category: "Legal & Advocacy" },
  { name: "NAACP Legal Defense Fund (LDF)", url: "https://www.naacpldf.org/", note: "Independent civil rights law firm founded 1940 — litigated Brown v. Board of Education. Separate organization from the NAACP itself.", category: "Legal & Advocacy" },
  { name: "National Urban League", url: "https://nul.org/", note: "Economic empowerment, education & civil rights — jobs, housing & anti-discrimination advocacy since 1910.", category: "Legal & Advocacy" },
  { name: "Southern Christian Leadership Conference (SCLC)", url: "https://nationalsclc.org/", note: "Founded 1957 by Dr. Martin Luther King Jr. — nonviolent action, community empowerment & leadership development.", category: "Legal & Advocacy" },
  { name: "National Action Network (NAN)", url: "https://nationalactionnetwork.net/", note: "Civil rights organization founded by Rev. Al Sharpton — social justice & voter engagement.", category: "Legal & Advocacy" },
  { name: "National Bar Association", url: "https://nationalbar.org/", note: "The nation's oldest and largest professional association of Black lawyers and judges.", category: "Legal & Advocacy" },
  { name: "Ben Crump Law", url: "https://bencrump.com/", note: "Nationally recognized civil rights trial firm — represented the families of Trayvon Martin, Breonna Taylor & Ahmaud Arbery.", category: "Legal & Advocacy" },
  { name: "Equal Justice Initiative (EJI)", url: "https://eji.org/", note: "Founded 1989 by Bryan Stevenson — legal representation for the wrongly convicted, unfairly sentenced & abused in prison. Based in Montgomery, AL.", category: "Legal & Advocacy" },
  { name: "The Cochran Firm", url: "https://www.cochranfirm.com/", note: "Founded by Johnnie L. Cochran Jr. — civil rights & personal injury trial firm, 40+ regional offices nationwide.", category: "Legal & Advocacy" },
  { name: "Merritt Law Firm (S. Lee Merritt)", url: "https://leemerrittesq.com/", note: "Civil rights attorney — represented families in the Ahmaud Arbery, Botham Jean & Atatiana Jefferson cases. Based in Philadelphia, cases nationwide.", category: "Legal & Advocacy" },
  { name: "Stewart Miller Simmons Trial Attorneys (L. Chris Stewart)", url: "https://smstrial.com/", note: "Atlanta civil rights & wrongful death firm — represented families in the Walter Scott, Alton Sterling, Ahmaud Arbery & George Floyd cases.", category: "Legal & Advocacy" },
  { name: "Rainbow PUSH Coalition", url: "https://rainbowpush.org/", note: "Founded by Rev. Jesse Jackson Sr. — social justice, civil rights & economic empowerment, based in Chicago.", category: "Legal & Advocacy" },
  { name: "Color Of Change", url: "https://colorofchange.org/", note: "Online racial justice organization — campaigns on criminal justice reform, corporate & political accountability.", category: "Legal & Advocacy" },
  { name: "UNCF (United Negro College Fund)", url: "https://uncf.org/", note: "Largest private scholarship provider to Black students — funds students & HBCUs.", category: "Legal & Advocacy" },
  { name: "Thurgood Marshall College Fund", url: "https://www.tmcf.org/", note: "Named for the first Black Supreme Court Justice — scholarships & advocacy for students at public HBCUs.", category: "Legal & Advocacy" },
  { name: "National Council of Negro Women (NCNW)", url: "https://ncnw.org/", note: "Coalition of organizations advancing opportunities for Black women, their families & communities.", category: "Legal & Advocacy" },
  { name: "100 Black Men of America", url: "https://100blackmen.org/", note: "Mentorship & education/empowerment for Black youth, headquartered in Atlanta.", category: "Legal & Advocacy" },
  { name: "National Association of Black Accountants (NABA)", url: "https://www.nabainc.org/", note: "Professional association for Black accounting, finance & related business professionals since 1969.", category: "Legal & Advocacy" },
];

const CATEGORIES = ["All", "General", "Banking", "Farms", "Medical", "Grants", "Marketplace", "Legal & Advocacy"];

// Sample listings — illustrates the data shape; real launch will ingest/crowdsource at scale.
const LISTINGS = [
  { name: "Liberty Bank & Trust", category: "Banking", city: "New Orleans", state: "LA", zip: "70113", desc: "One of the nation's largest Black-owned banks, founded 1972.", url: "https://libertybank.net/" },
  { name: "City First Bank", category: "Banking", city: "Washington", state: "DC", zip: "20009", desc: "Community development bank serving underserved neighborhoods.", url: "https://cityfirstbank.com/" },
  { name: "Soul Fire Farm", category: "Farms", city: "Grafton", state: "NY", zip: "12082", desc: "Afro-Indigenous farm training the next generation of Black farmers.", url: "https://www.soulfirefarm.org/" },
  { name: "Sweet Auburn Seafood", category: "General", city: "Atlanta", state: "GA", zip: "30303", desc: "Black-owned seafood restaurant in historic Sweet Auburn.", url: "#" },
  { name: "Find A Black Doctor Network", category: "Medical", city: "Nationwide", state: "All 50", zip: "", desc: "Search board-certified Black physicians near you.", url: "https://www.findablackdoctor.com/" },
  { name: "Ben Crump Law", category: "Legal & Advocacy", city: "Tallahassee", state: "FL", zip: "32301", desc: "National civil rights trial firm with offices across the country.", url: "https://bencrump.com/" },
  { name: "NAACP National Headquarters", category: "Legal & Advocacy", city: "Baltimore", state: "MD", zip: "21230", desc: "The nation's oldest and largest civil rights organization.", url: "https://naacp.org/" },
];

if (typeof module !== "undefined") {
  module.exports = { PARTNER_SOURCES, CATEGORIES, LISTINGS };
}
