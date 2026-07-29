export type Capacity = "presupposed" | "transformed" | "concealed";

export type Publication = {
  title: string;
  venue: string;
  status: string;
  year?: string;
  themeSlug: string;
  conceptSlug?: string;
  contribution: string;
  caseNote?: string;
  href?: string;
  paperSlug?: string;
  doi?: string;
  selected?: boolean;
  capacities?: Capacity[];
};

export const PUBLICATIONS: Publication[] = [
  {
    title: "Standing Is Not an Ordering",
    venue: "Under review",
    status: "Under review",
    year: "2026",
    themeSlug: "normativity-moral-standing-ethical-disclosure",
    conceptSlug: "partition-thesis",
    contribution:
      "Develops the partition thesis: criteria of moral standing determine who is considerable but do not by themselves generate priority among those admitted.",
    caseNote:
      "Ontocentric information ethics serves as the maximal test of the thesis.",
    selected: true,
    capacities: ["presupposed"],
  },
  {
    title: "The Locus of Answerability",
    venue: "Working paper",
    status: "Working paper",
    year: "2026",
    themeSlug: "judgment-answerability-institutional-reason",
    conceptSlug: "judgment-gap",
    contribution:
      "Identifies the institutional site at which answerability must be borne when reasoning is delegated to automated procedures, and where that site can be silently vacated.",
    selected: true,
    capacities: ["presupposed"],
  },
  {
    title: "Second-Order Provenance",
    venue: "Working paper",
    status: "Working paper",
    year: "2026",
    themeSlug: "judgment-answerability-institutional-reason",
    conceptSlug: "second-order-provenance",
    contribution:
      "Introduces second-order provenance: the traceability not of data but of the normative orderings under which data are taken to matter.",
    selected: true,
    capacities: ["transformed"],
  },
  {
    title:
      "The Licensing Problem in Predictive Maintenance: When Does a Prediction Become a Reason to Act?",
    venue: "Working paper (draft v5)",
    status: "Working paper",
    year: "2026",
    themeSlug: "judgment-answerability-institutional-reason",
    conceptSlug: "inferential-license",
    paperSlug: "licensing-problem-predictive-maintenance",
    contribution:
      "Specifies four conditions on a maintenance license — the entitlement to treat a predictive output as a ground for a given intervention — and shows that predictive accuracy does not by itself confer any of them.",
    caseNote:
      "AI-driven predictive maintenance in industrial asset management serves as the applied test case for the licensing framework.",
    selected: true,
    capacities: ["presupposed", "concealed"],
  },

  {
    title: "Creaturehood Under Conditions of Optimization",
    venue: "In preparation",
    status: "In preparation",
    year: "2026",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Reconstructs the concept of creaturehood as an anthropological structure that persists — or is deformed — under ambient optimisation.",
    selected: true,
    capacities: ["transformed"],
  },
  {
    title: "Comparative Desire and Social Violence",
    venue: "Working paper",
    status: "Working paper",
    year: "2026",
    themeSlug: "desire-comparison-social-relations",
    conceptSlug: "comparative-entitlement-formation",
    contribution:
      "Analyses how platform-mediated comparison produces entitlements whose frustration is structurally converted into grievance and, at scale, into social violence.",
    selected: true,
    capacities: ["transformed"],
  },
  {
    title: "Conceptual Inflation and Explanatory Entitlement",
    venue: "Working paper",
    status: "Working paper",
    year: "2026",
    themeSlug: "explanation-object-constitution-philosophy-of-science",
    contribution:
      "Names conceptual inflation as a systematic pathology in AI research: extending explanations beyond the entitlements of their underlying object constitutions.",
    selected: true,
    capacities: ["concealed"],
  },
  {
    title: "When Responsibility Fails to Arise",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "normativity-moral-standing-ethical-disclosure",
    contribution:
      "Distinguishes cases in which responsibility is refused from cases in which the conditions for responsibility to arise are absent from the outset.",
    capacities: ["presupposed"],
  },
  {
    title: "The Diffuse Void",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "normativity-moral-standing-ethical-disclosure",
    contribution:
      "Examines the diffuse configurations in which no addressable party stands where a moral claim would ordinarily land.",
    capacities: ["concealed"],
  },
  {
    title: "The Ontological Organization of Normativity",
    venue: "In preparation",
    status: "In preparation",
    themeSlug: "normativity-moral-standing-ethical-disclosure",
    contribution:
      "Studies how ontological commitments organise the space in which normative orderings can be constructed at all.",
    capacities: ["presupposed"],
  },
  {
    title: "Predictive AI and Second-Personal Exclusion",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "normativity-moral-standing-ethical-disclosure",
    contribution:
      "Argues that predictive systems can enact a second-personal exclusion: those about whom claims are made are structurally not among those to whom answer is owed.",
    capacities: ["concealed"],
  },
  {
    title: "Answerability on the Record",
    venue: "In preparation",
    status: "In preparation",
    themeSlug: "judgment-answerability-institutional-reason",
    contribution:
      "Argues that answerability requires an addressable record — not merely an explainable output — and reconstructs institutional recordkeeping as a moral infrastructure.",
    capacities: ["presupposed", "transformed"],
  },
  {
    title: "From Phronesis to Pronoia",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Traces the drift from practical wisdom to anticipatory foresight when deliberation is displaced by predictive tooling.",
    capacities: ["transformed"],
  },
  {
    title: "The Gifted Subject",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Recovers the notion of the gifted subject against a self that is exhaustively constituted through optimisation.",
    capacities: ["presupposed"],
  },
  {
    title: "Action Without Acts",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Investigates conditions under which behaviour occurs without any recoverable act — no addressable agent, no unified intention.",
    capacities: ["concealed"],
  },
  {
    title: "Algorithmic Habitus and the Invisible Mission",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Extends the concept of habitus to environments in which formation is directed by systems whose formative purposes remain undeclared.",
    capacities: ["concealed"],
  },
  {
    title: "Algorithmic Formation and the Mimetic Self",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Analyses how mimetic structures of the self are recomposed when models of the self are precomputed for us.",
    capacities: ["transformed"],
  },
  {
    title: "Epistemic Automation and the Deformation of the Human",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Identifies the deformation that follows when epistemic labour is automated without a corresponding reformation of the practices it once required.",
    capacities: ["transformed"],
  },
  {
    title: "The Platforming of Desire",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "desire-comparison-social-relations",
    conceptSlug: "post-mimetic-relationality",
    contribution:
      "Describes the platforming of desire: the conversion of desire into a resource whose comparative structure can be measured, ranked, and monetised.",
    capacities: ["transformed"],
  },
  {
    title: "Mapping Epistemic Instability",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "explanation-object-constitution-philosophy-of-science",
    contribution:
      "Provides a map of epistemic instabilities that arise where model, world, and design fail to align.",
    capacities: ["concealed"],
  },
  {
    title: "Design–Inference Alignment",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "explanation-object-constitution-philosophy-of-science",
    contribution:
      "Formulates a criterion of design–inference alignment: the inferences licensed by an empirical design must not exceed the constitution of its object.",
    capacities: ["presupposed"],
  },
  {
    title: "Object constitution and scientific inference",
    venue: "In preparation",
    status: "In preparation",
    themeSlug: "explanation-object-constitution-philosophy-of-science",
    contribution:
      "Sketches a general account of how the constitution of scientific objects constrains the inferences that can be drawn about them.",
    capacities: ["presupposed"],
  },
  {
    title: "Markov models and the ontology of state",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "explanation-object-constitution-philosophy-of-science",
    contribution:
      "Diagnoses ontological assumptions smuggled in by Markov-model formulations of state and transition.",
    capacities: ["concealed"],
  },
  {
    title: "LLM experiments and inferential license",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "explanation-object-constitution-philosophy-of-science",
    conceptSlug: "inferential-license",
    contribution:
      "Shows why the standard experimental repertoire around large language models systematically overreaches its inferential license.",
    capacities: ["concealed"],
  },
  {
    title: "AI as epistemic infrastructure",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "institutions-infrastructure-technological-mediation",
    conceptSlug: "epistemic-infrastructure",
    contribution:
      "Argues that AI systems function as epistemic infrastructure — silent scaffolding of what an institution can know — and reframes safety and governance in those terms.",
    capacities: ["transformed"],
  },
  {
    title: "Institutional inversion",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "institutions-infrastructure-technological-mediation",
    contribution:
      "Describes institutional inversion: the pattern by which supporting systems come to determine the institutional practices they were built to serve.",
    capacities: ["transformed"],
  },
  {
    title: "Systemic friction",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "institutions-infrastructure-technological-mediation",
    conceptSlug: "systemic-friction",
    contribution:
      "Reconstructs friction as a productive, not merely obstructive, feature of institutional systems and shows what its removal costs.",
    capacities: ["presupposed", "transformed"],
  },
  {
    title: "Organic API theory",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "institutions-infrastructure-technological-mediation",
    contribution:
      "Proposes an organic account of institutional interfaces against a purely mechanical API metaphor.",
    capacities: ["presupposed"],
  },
  {
    title: "Administrative expertise as epistemic lag",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "institutions-infrastructure-technological-mediation",
    contribution:
      "Argues that accumulated administrative expertise can itself become a source of epistemic lag under rapid technological change.",
    capacities: ["concealed"],
  },
  {
    title: "Media as infrastructure",
    venue: "Working paper",
    status: "Working paper",
    themeSlug: "institutions-infrastructure-technological-mediation",
    contribution:
      "Treats media systems as infrastructure whose formative effects operate below the level of content.",
    capacities: ["concealed"],
  },
];
