export type ThemeWork = {
  title: string;
  status?: string;
  note?: string;
};

export type Theme = {
  slug: string;
  number: number;
  name: string;
  short: string;
  tagline: string;
  description: string[];
  works: ThemeWork[];
  conceptSlugs: string[];
  conceptNotes?: string[];
  projects?: string[];
};

export const THEMES: Theme[] = [
  {
    slug: "judgment-answerability-institutional-reason",
    number: 1,
    name: "Judgment, Answerability and Institutional Reason",
    short: "Judgment & Answerability",
    tagline:
      "The normative question: what makes an institutional decision answerable, and who can be held to it.",
    description: [
      "This theme asks a normative question about acts: under what conditions does an institutional decision count as a judgment that someone can be held to? It develops a vocabulary — provenance, inferential license, closure — for locating the point at which answerability is either preserved or lost.",
      "The problem is not whether machines can reason, but what happens to the standing of an institution's speech when its decisions can no longer be traced to a locus of answerability. Where Area 6 asks what infrastructure makes decisions possible, this area asks what makes them defensible.",
    ],

    works: [
      { title: "Standing Is Not an Ordering", status: "Under review" },
      { title: "The Locus of Answerability", status: "Working paper" },
      { title: "Answerability on the Record", status: "In preparation" },
      { title: "Second-Order Provenance", status: "Working paper" },
      { title: "ClaimBuilder.ai", note: "Applied research context" },
    ],
    conceptSlugs: ["inferential-license", "judgment-gap", "second-order-provenance"],
    conceptNotes: ["institutional closure", "provenance of normative orderings"],
    projects: ["ClaimBuilder.ai"],
  },
  {
    slug: "normativity-moral-standing-ethical-disclosure",
    number: 2,
    name: "Normativity, Moral Standing and Ethical Disclosure",
    short: "Normativity & Standing",
    tagline:
      "The conditions under which moral claims arise, and the difference between admission to consideration and priority within it.",
    description: [
      "This theme investigates how moral standing is constituted and how it is distinguished from normative priority. It defends what I call the partition thesis: criteria of moral standing determine who is considerable, but they do not by themselves generate ordering among those admitted.",
      "Ontocentric information ethics is treated here as a maximal test case rather than as a target. The Floridi engagement is not a critique of a single author; it is a general study of the relation between standing and ordering, and of the ethical disclosure conditions under which either can arise.",
    ],
    works: [
      { title: "Standing Is Not an Ordering", status: "Under review" },
      { title: "When Responsibility Fails to Arise", status: "Working paper" },
      { title: "The Diffuse Void", status: "Working paper" },
      { title: "The Ontological Organization of Normativity", status: "In preparation" },
      { title: "Predictive AI and Second-Personal Exclusion", status: "Working paper" },
    ],
    conceptSlugs: ["partition-thesis", "ethical-disclosure"],
  },
  {
    slug: "formation-agency-human-subject",
    number: 3,
    name: "Formation, Agency and the Human Subject",
    short: "Formation & Agency",
    tagline:
      "Moral and subject formation under conditions of optimisation and technological mediation.",
    description: [
      "This theme investigates how the human subject is formed — morally, practically, spiritually — under conditions in which technological systems mediate attention, desire, deliberation, and action. Theology functions here as one context in which questions of agency, creaturehood, and formation become philosophically pressing, not as a separate discipline.",
      "The unifying question is how the background conditions of moral formation persist, mutate, or dissolve when optimisation becomes an ambient environment.",
    ],
    works: [
      { title: "Creaturehood Under Conditions of Optimization", status: "In preparation" },
      { title: "From Phronesis to Pronoia", status: "Working paper" },
      { title: "The Gifted Subject", status: "Working paper" },
      { title: "Action Without Acts", status: "Working paper" },
      { title: "Algorithmic Habitus and the Invisible Mission", status: "Working paper" },
      { title: "Algorithmic Formation and the Mimetic Self", status: "Working paper" },
      { title: "Epistemic Automation and the Deformation of the Human", status: "Working paper" },
      { title: "Automated Certainty: Algorithmic Perplexity Reduction and Theological Metacognitive Miscalibration", status: "Published" },
    ],
    conceptSlugs: [],
    conceptNotes: [
      "creaturehood",
      "habitus",
      "kenosis",
      "phronesis / pronoia",
      "action without acts",
    ],
  },
  {
    slug: "desire-comparison-social-relations",
    number: 4,
    name: "Desire, Comparison and Social Relations",
    short: "Desire & Relations",
    tagline:
      "Mimetic desire, comparative entitlement, and the platform mediation of grievance and social violence.",
    description: [
      "This theme develops a philosophical account of desire and comparison under platform mediation. It draws on mimetic theory and social ontology to analyse how comparative entitlement is formed, how grievance and resentment are structured, and how relational configurations shift once desire is infrastructurally shaped.",
      "The theme is not reducible to 'social media studies' or 'platform studies': it is a study of the relational configuration of the human under conditions in which comparison itself has been engineered.",
    ],
    works: [
      { title: "Comparative Desire and Social Violence", status: "Working paper" },
      { title: "The Platforming of Desire", status: "Working paper" },
    ],
    conceptSlugs: ["comparative-entitlement-formation", "post-mimetic-relationality"],
    conceptNotes: ["infrastructural valuation", "salience"],
  },
  {
    slug: "explanation-object-constitution-philosophy-of-science",
    number: 5,
    name: "Explanation, Object Constitution and Philosophy of Science",
    short: "Explanation & Science",
    tagline:
      "Explanatory entitlement, object constitution, and the inferential license of scientific and statistical models.",
    description: [
      "This theme develops a general philosophy of science oriented around object constitution and design–inference alignment. It examines when an empirical or statistical design is entitled to the inferences it invites, and when explanations exceed the constitution of their objects.",
      "It shows that much of what circulates as 'AI ethics' is in fact philosophy of science: the crucial questions concern what has been constituted, what has been measured, and what may be inferred — long before any normative claim is made.",
    ],
    works: [
      { title: "Conceptual Inflation and Explanatory Entitlement", status: "Working paper" },
      { title: "Mapping Epistemic Instability", status: "Working paper" },
      { title: "Design–Inference Alignment", status: "Working paper" },
      { title: "Object constitution and scientific inference", status: "In preparation" },
      {
        title: "Markov models and the ontology of state",
        status: "Working paper",
      },
      { title: "LLM experiments and inferential license", status: "Working paper" },
    ],
    conceptSlugs: ["inferential-license"],
    conceptNotes: [
      "explanatory entitlement",
      "conceptual inflation",
      "object constitution",
      "design–inference alignment",
    ],
  },
  {
    slug: "institutions-infrastructure-technological-mediation",
    number: 6,
    name: "Institutions, Infrastructure and Technological Mediation",
    short: "Institutions & Infrastructure",
    tagline:
      "The material question: which infrastructures make institutional knowing and deciding possible in the first place.",
    description: [
      "This theme treats infrastructure as a first-class philosophical object. Its question is material rather than normative: which systems, records, frictions, and forms of administrative expertise constitute what an institution is able to know and decide at all — and how that capacity changes when institutional functions are automated.",
      "Where Area 1 evaluates decisions once made, this area studies the conditions of their production. Applied projects such as TrialTact and ClaimBuilder.ai are treated here as diagnostic contexts: practical settings in which the philosophical problems of the programme become visible under load.",
    ],

    works: [
      { title: "AI as epistemic infrastructure", status: "Working paper" },
      { title: "Institutional inversion", status: "Working paper" },
      { title: "Systemic friction", status: "Working paper" },
      { title: "Organic API theory", status: "Working paper" },
      {
        title: "Administrative expertise as epistemic lag",
        status: "Working paper",
      },
      { title: "Media as infrastructure", status: "Working paper" },
      { title: "TrialTact", note: "Applied research context" },
      { title: "ClaimBuilder.ai", note: "Applied research context" },
    ],
    conceptSlugs: ["epistemic-infrastructure", "systemic-friction"],
    projects: ["TrialTact", "ClaimBuilder.ai"],
  },
];

export function getTheme(slug: string): Theme | undefined {
  return THEMES.find((t) => t.slug === slug);
}
