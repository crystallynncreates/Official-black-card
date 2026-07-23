// Seed data for the Prison & Government Watch domain.
// Each entry: a plain-language overview + explicit "why it matters" framing + a cited, real source.
// Grouped by real publish date — we show up to 3 stories per day, matching how often these sources
// actually publish (not a fabricated daily quota). "broadcast" type = a real TV/video news segment,
// shown as a video-style card that links out to the real segment (no fake embed of an unverified
// video ID — X-Frame-Options blocks most news players from iframing anyway, so a verified outbound
// link is both more honest and more reliable than a broken embed).
//
// In production this list is populated by a scheduled job that checks source feeds daily
// and appends new items (see README "Next steps").

const WATCH_ARTICLES = [
  {
    type: "article",
    title: "Black Americans are incarcerated in state prisons at nearly 5x the rate of white Americans",
    date: "2026-07-20",
    source: "The Sentencing Project",
    sourceUrl: "https://www.sentencingproject.org/reports/one-in-five-ending-racial-inequity-in-incarceration/",
    overview: "New national data shows the racial gap in state imprisonment rates remains wide, with 1 in 81 Black adults currently serving time in state prison.",
    relevance: "This is the clearest single number for why criminal-justice reform, know-your-rights education, and family/caregiving support for the incarcerated are core to Black community life — this isn't an abstract statistic, it touches most Black families directly or through someone close to them.",
    tags: ["Sentencing", "Data"],
  },
  {
    type: "article",
    title: "Racial and ethnic disparities remain across arrests, sentencing, and correctional facilities",
    date: "2026-07-20",
    source: "Prison Policy Initiative",
    sourceUrl: "https://www.prisonpolicy.org/research/racial_and_ethnic_disparities/",
    overview: "PPI's ongoing tracker shows Black Americans are arrested at roughly double the rate of white Americans, with compounding disparities at each later stage of the system.",
    relevance: "Understanding where in the pipeline disparities widen (arrest vs. charging vs. sentencing) helps direct advocacy and legal-aid resources to the stage where they'll do the most good.",
    tags: ["Policy", "Data"],
  },
  {
    type: "article",
    title: "NAACP renews call to eliminate racial sentencing disparities",
    date: "2026-07-20",
    source: "NAACP",
    sourceUrl: "https://naacp.org/resources/eliminate-racial-sentencing-disparities",
    overview: "NAACP policy brief citing Sentencing Project findings that minority defendants, once convicted, are sentenced more harshly than white defendants for comparable offenses.",
    relevance: "Names concrete legislative asks (sentencing reform, judicial training, data transparency) that community members can track, support, or contact representatives about.",
    tags: ["Advocacy", "Legislation"],
  },
  {
    type: "article",
    title: "Durbin and Lee introduce bipartisan bill to lower mandatory minimums for drug offenses",
    date: "2026-02-26",
    source: "U.S. Senate Judiciary Committee",
    sourceUrl: "https://www.judiciary.senate.gov/press/dem/releases/durbin-lee-introduce-bipartisan-criminal-justice-reform-bills",
    overview: "The Smarter Sentencing Act would give federal judges more flexibility on mandatory-minimum drug sentences instead of a one-size-fits-all penalty; over half of federal inmates are serving time for drug offenses.",
    relevance: "Mandatory minimums are one of the most-cited drivers of racial sentencing disparity — a real, currently-pending bill in Congress is worth tracking and worth calling your senators about.",
    tags: ["Legislation", "Sentencing"],
  },
  {
    type: "broadcast",
    title: "Tennessee judge jailed minors on bogus charges following playground fights, cursing",
    date: "2026-02-26",
    source: "PBS NewsHour",
    sourceUrl: "https://www.pbs.org/newshour/show/tennessee-judge-jailed-minors-on-bogus-charges-following-playground-fights-cursing",
    overview: "A broadcast investigation into a juvenile court judge who jailed children for minor school infractions — part of PBS NewsHour's ongoing look at the juvenile justice system.",
    relevance: "Juvenile-justice overreach disproportionately touches Black children and families; this segment shows what it looks like at the level of one courtroom, not just in national statistics.",
    tags: ["Broadcast", "Juvenile Justice"],
  },
  {
    type: "broadcast",
    title: "PBS NewsHour documentary explores the challenges of life after incarceration",
    date: "2026-02-26",
    source: "PBS NewsHour",
    sourceUrl: "https://www.pbs.org/newshour/show/pbs-newshour-documentary-explores-the-challenges-of-life-after-incarceration",
    overview: "A documentary segment following people navigating housing, employment, and family life after release from prison.",
    relevance: "Reentry is where a lot of the Watch, Caregiving, and Jobs domains of this app actually intersect in someone's real life — worth watching alongside the second-chance employer listings on the Jobs board.",
    tags: ["Broadcast", "Reentry"],
  },
];

if (typeof module !== "undefined") {
  module.exports = { WATCH_ARTICLES };
}
