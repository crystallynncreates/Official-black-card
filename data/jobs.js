// Seed data for the Jobs & Apprenticeships domain.

const JOB_CATEGORIES = ["All", "Second Chance Friendly", "Youth", "Internship", "Apprenticeship"];

// Sample postings — demo shape only. Live version ingests city-by-city/county-by-county
// from the partner boards below plus direct employer postings, refreshed daily.
const JOBS = [
  { title: "Warehouse Associate", company: "Metro Logistics Co.", category: "Second Chance Friendly", city: "Atlanta", state: "GA", zip: "30303", posted: "2026-07-22", url: "#" },
  { title: "CDL Driver Trainee", company: "Southern Freight Partners", category: "Second Chance Friendly", city: "Houston", state: "TX", zip: "77002", posted: "2026-07-21", url: "#" },
  { title: "Summer Youth Crew Member", company: "City of Detroit Parks Dept.", category: "Youth", city: "Detroit", state: "MI", zip: "48226", posted: "2026-07-22", url: "#" },
  { title: "Marketing Intern", company: "Sweet Auburn Media Group", category: "Internship", city: "Atlanta", state: "GA", zip: "30312", posted: "2026-07-20", url: "#" },
  { title: "Electrical Apprentice (IBEW Local)", company: "IBEW Local Chapter", category: "Apprenticeship", city: "Charlotte", state: "NC", zip: "28202", posted: "2026-07-19", url: "#" },
  { title: "HVAC Apprenticeship Program", company: "ComfortPro Services", category: "Apprenticeship", city: "Chicago", state: "IL", zip: "60601", posted: "2026-07-18", url: "#" },
  { title: "Reentry Culinary Trainee", category: "Second Chance Friendly", company: "Fresh Start Kitchens", city: "New Orleans", state: "LA", zip: "70112", posted: "2026-07-17", url: "#" },
  { title: "College Fellowship — Data Analytics", company: "INROADS Partner Employer", category: "Internship", city: "Remote / Nationwide", state: "All 50", zip: "", posted: "2026-07-16", url: "https://inroads.org/" },
];

const JOB_SOURCES = [
  { name: "Honest Jobs", url: "https://www.honestjobs.com/", note: "Dedicated platform connecting people with records to fair-chance employers.", category: "Second Chance Friendly" },
  { name: "Next Chance Jobs", url: "https://nextchancejobs.com/", note: "Connects former felons with employers willing to hire.", category: "Second Chance Friendly" },
  { name: "Felony Record Hub — Jobs for Felons", url: "https://www.felonyrecordhub.com/jobs-for-felons/", note: "1,100+ companies that hire felons, updated regularly.", category: "Second Chance Friendly" },
  { name: "Exoffenders.net", url: "https://exoffenders.net/", note: "Reentry resources, location-based job listings, housing & legal help.", category: "Second Chance Friendly" },
  { name: "Apprenticeship.gov", url: "https://www.apprenticeship.gov/", note: "Official U.S. registered apprenticeship finder — search by industry & location.", category: "Apprenticeship" },
  { name: "USAJOBS — Pathways for Students", url: "https://help.usajobs.gov/working-in-government/unique-hiring-paths/students", note: "Federal internship program for current high school, college & grad students.", category: "Internship" },
  { name: "Youth.gov — Summer & Youth Employment", url: "https://youth.gov/youth-topics/youth-employment/summer-youth-employment-resources", note: "Federal directory of summer & youth employment programs.", category: "Youth" },
  { name: "INROADS", url: "https://inroads.org/", note: "Internship pipeline connecting Black, Latino & Native students to corporate careers.", category: "Internship" },
];

const TRENDS_ARTICLES = [
  {
    title: "97% of employers now use AI-powered ATS to screen resumes — here's how to beat it",
    date: "2026-07-21",
    source: "Monster & Teal",
    sourceUrl: "https://www.monster.com/career-advice/resume/resume-trends",
    overview: "2026 resume trends: ATS-friendly formatting, measurable achievements over vague duties, and clear evidence of AI-tool fluency are now baseline expectations.",
    relevance: "Knowing the ATS rules changes how you format a resume before a human ever sees it — worth building into our resume-builder checklist.",
    tags: ["Resume", "Trends"],
  },
  {
    title: "Show the number, not the title: why results-first resumes are winning in 2026",
    date: "2026-07-14",
    source: "Novoresume",
    sourceUrl: "https://novoresume.com/career-blog/resume-trends",
    overview: "Recruiters want quantified outcomes — how many people led, what improved, by how much — not just a list of responsibilities.",
    relevance: "A quick template anyone can use: 'I [did X], which resulted in [measurable Y].' Good for first resumes and career switchers alike.",
    tags: ["Resume", "Interview Prep"],
  },
];

if (typeof module !== "undefined") {
  module.exports = { JOB_CATEGORIES, JOBS, JOB_SOURCES, TRENDS_ARTICLES };
}
