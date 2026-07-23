// Seed data for the Prison & Government Watch domain.
// Each entry: a plain-language overview + explicit "why it matters" framing + a cited source.
// In production this list is populated by a scheduled job that checks source feeds daily
// and appends new items (see README "Next steps").

const WATCH_ARTICLES = [
  {
    title: "Black Americans are incarcerated in state prisons at nearly 5x the rate of white Americans",
    date: "2026-07-20",
    source: "The Sentencing Project",
    sourceUrl: "https://www.sentencingproject.org/reports/one-in-five-ending-racial-inequity-in-incarceration/",
    overview: "New national data shows the racial gap in state imprisonment rates remains wide, with 1 in 81 Black adults currently serving time in state prison.",
    relevance: "This is the clearest single number for why criminal-justice reform, know-your-rights education, and family/caregiving support for the incarcerated are core to Black community life — this isn't an abstract statistic, it touches most Black families directly or through someone close to them.",
    tags: ["Sentencing", "Data"],
  },
  {
    title: "Racial and ethnic disparities remain across arrests, sentencing, and correctional facilities",
    date: "2026-07-15",
    source: "Prison Policy Initiative",
    sourceUrl: "https://www.prisonpolicy.org/research/racial_and_ethnic_disparities/",
    overview: "PPI's ongoing tracker shows Black Americans are arrested at roughly double the rate of white Americans, with compounding disparities at each later stage of the system.",
    relevance: "Understanding where in the pipeline disparities widen (arrest vs. charging vs. sentencing) helps direct advocacy and legal-aid resources to the stage where they'll do the most good.",
    tags: ["Policy", "Data"],
  },
  {
    title: "NAACP renews call to eliminate racial sentencing disparities",
    date: "2026-07-10",
    source: "NAACP",
    sourceUrl: "https://naacp.org/resources/eliminate-racial-sentencing-disparities",
    overview: "NAACP policy brief citing Sentencing Project findings that minority defendants, once convicted, are sentenced more harshly than white defendants for comparable offenses.",
    relevance: "Names concrete legislative asks (sentencing reform, judicial training, data transparency) that community members can track, support, or contact representatives about.",
    tags: ["Advocacy", "Legislation"],
  },
];

if (typeof module !== "undefined") {
  module.exports = { WATCH_ARTICLES };
}
