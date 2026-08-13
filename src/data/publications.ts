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
  /** Norwegian publication channel level (NSD/HK-dir): "2", "1", "0". */
  level?: string;
  selected?: boolean;
  capacities?: Capacity[];
};

/**
 * Peer-reviewed articles that are published or formally accepted.
 * Metadata verified against NVA (Nasjonalt vitenarkiv) — see /academic-profile.
 */
export const PUBLICATIONS: Publication[] = [
  {
    title:
      "Creaturehood Under Conditions of Optimization: AI and the Externalization of Moral Formation",
    venue: "Studies in Christian Ethics",
    status: "Published online",
    year: "2026",
    level: "2",
    doi: "10.1177/09539468261467326",
    href: "https://doi.org/10.1177/09539468261467326",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Reconstructs creaturehood as an anthropological structure — a life received rather than assembled — and shows what is externalised when moral formation is delegated to optimising systems.",
    selected: true,
    capacities: ["transformed"],
  },
  {
    title:
      "Action Without Acts: The Institutional Production of Action and the Doctrinal Conditions of Responsibility",
    venue: "Neue Zeitschrift für Systematische Theologie und Religionsphilosophie",
    status: "Published online",
    year: "2026",
    level: "2",
    doi: "10.1515/nzsth-2026-0021",
    href: "https://doi.org/10.1515/nzsth-2026-0021",
    themeSlug: "institutions-infrastructure-technological-mediation",
    conceptSlug: "epistemic-infrastructure",
    paperSlug: "action-without-acts",
    contribution:
      "Shows that the tradition's resources for indirect agency are act-derivative without exception, and that some infrastructural configurations decline, at the operating level, to produce the act those resources require — then reformulates sin, judgment, and moral agency accordingly.",
    caseNote:
      "Robodebt, the Dutch childcare-benefits scandal, and automated platform moderation serve as the three institutional configurations.",
    selected: true,
    capacities: ["concealed", "transformed"],
  },
  {
    title:
      "From Phronesis to Pronoia: Algorithmic Mediation and the Theological Displacement of Practical Wisdom",
    venue: "Studies in Christian Ethics",
    status: "Published online",
    year: "2026",
    level: "2",
    doi: "10.1177/09539468261463719",
    href: "https://doi.org/10.1177/09539468261463719",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Traces the displacement of practical wisdom by anticipatory foresight when deliberation is mediated by predictive systems, and identifies what is lost when judgment is replaced by provision.",
    selected: true,
    capacities: ["transformed"],
  },
  {
    title:
      "The Gifted Subject: Kenosis, Phenomenology, and the Constitution of Responsive Agency",
    venue: "Studia Theologica — Nordic Journal of Theology",
    status: "Published online",
    year: "2026",
    level: "2",
    doi: "10.1080/0039338x.2026.2691693",
    href: "https://doi.org/10.1080/0039338x.2026.2691693",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Recovers the gifted subject — an agency constituted through reception and response — against a self taken to be exhaustively self-authored or exhaustively optimised.",
    selected: true,
    capacities: ["presupposed"],
  },
  {
    title:
      "When Responsibility Fails to Arise: Institutional Conditions of Action in Algorithmic Governance",
    venue: "AI and Ethics",
    status: "Published online",
    year: "2026",
    level: "1",
    doi: "10.1007/s43681-026-01204-1",
    href: "https://doi.org/10.1007/s43681-026-01204-1",
    themeSlug: "normativity-moral-standing-ethical-disclosure",
    contribution:
      "Distinguishes cases in which responsibility is refused from cases in which the institutional conditions for responsibility to arise at all are absent from the outset.",
    selected: true,
    capacities: ["presupposed"],
  },
  {
    title:
      "The Diffuse Void: Algorithmic Safety and the Disappearance of Judgment",
    venue: "AI and Ethics",
    status: "Published online",
    year: "2026",
    level: "1",
    doi: "10.1007/s43681-026-01095-2",
    href: "https://doi.org/10.1007/s43681-026-01095-2",
    themeSlug: "normativity-moral-standing-ethical-disclosure",
    conceptSlug: "judgment-gap",
    contribution:
      "Examines the diffuse configurations in which no addressable party stands where a moral claim would ordinarily land, and shows how safety engineering can produce exactly that vacancy.",
    selected: true,
    capacities: ["concealed"],
  },
  {
    title:
      "Automated Certainty: Algorithmic Perplexity Reduction and Theological Metacognitive Miscalibration",
    venue: "Journal for the Cognitive Science of Religion",
    status: "Published online",
    year: "2026",
    level: "1",
    doi: "10.1558/jcsr.34912",
    href: "https://doi.org/10.1558/jcsr.34912",
    themeSlug: "formation-agency-human-subject",
    conceptSlug: "automated-certainty",
    paperSlug: "automated-certainty",
    contribution:
      "Introduces automated certainty as a condition in which algorithmic systems reduce experienced perplexity faster than they produce the interpretive competence required to evaluate the resolution, and proposes an empirical research program for tracking the resulting divergence between theological confidence and competence.",
    caseNote:
      "Cognitive science of religion, processing fluency, predictive processing, and historical practices of interpretive formation (Chavruta, lectio divina, apophatic discipline) frame the analysis.",
    capacities: ["concealed", "transformed"],
  },
  {
    title:
      "Epistemic Automation and the Deformation of the Human: Artificial Intelligence and the Reconfiguration of Theological Anthropology",
    venue: "Religions",
    status: "Published online",
    year: "2026",
    level: "1",
    href: "https://www.mdpi.com/2077-1444/17/5/515",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Identifies the deformation that follows when epistemic labour is automated without a corresponding reformation of the practices that labour once required of the human subject.",
    capacities: ["transformed"],
  },
  {
    title:
      "Sanctification and the Ordo Extractionis: Formative Sovereignty and Predictive Habituation",
    venue: "Religions",
    status: "Published online",
    year: "2026",
    level: "1",
    href: "https://www.mdpi.com/2077-1444/17/3/392",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Sets an extractive order of habituation against sanctification as a formative order, and asks who holds formative sovereignty when habits are shaped predictively.",
    capacities: ["transformed"],
  },
  {
    title:
      "Conceptual Inflation and Explanatory Entitlement: On the Limits of Construct Extension in Science",
    venue: "Philosophies",
    status: "Published online",
    year: "2026",
    level: "1",
    href: "https://www.mdpi.com/2409-9287/11/4/105",
    themeSlug: "explanation-object-constitution-philosophy-of-science",
    contribution:
      "Names conceptual inflation as a systematic pathology: extending a construct beyond the explanatory entitlements conferred by its underlying object constitution.",
    capacities: ["concealed"],
  },
  {
    title:
      "Algorithmic Habitus and the Invisible Mission: Sanctification as the Reordering of Desire",
    venue: "New Blackfriars",
    status: "Published online",
    year: "2026",
    level: "0",
    doi: "10.1017/nbf.2026.10162",
    href: "https://doi.org/10.1017/nbf.2026.10162",
    themeSlug: "desire-comparison-social-relations",
    contribution:
      "Extends habitus to environments in which formation is directed by systems whose formative purposes remain undeclared, and reads sanctification as a counter-ordering of desire.",
    capacities: ["concealed"],
  },
  {
    title:
      "Micro-Discipline: A Process Model of Behavioural Regulation and Character Formation",
    venue: "Behavioral Sciences",
    status: "Published online",
    year: "2026",
    level: "1",
    doi: "10.3390/bs16060879",
    href: "https://doi.org/10.3390/bs16060879",
    themeSlug: "formation-agency-human-subject",
    contribution:
      "Formalises a process model linking small-scale behavioural regulation to the longer arc of character formation, giving the formation thesis an empirically tractable shape.",
    capacities: ["transformed"],
  },
  {
    title:
      "Amplification Chambers and Belief Persistence in Commercial Health Communication",
    venue: "Journal of Health Communication",
    status: "Published online",
    year: "2026",
    level: "1",
    doi: "10.1080/10810730.2026.2693890",
    href: "https://doi.org/10.1080/10810730.2026.2693890",
    themeSlug: "explanation-object-constitution-philosophy-of-science",
    contribution:
      "Models how commercially structured amplification sustains belief beyond the evidence that would ordinarily revise it.",
    capacities: ["concealed"],
  },
];

/**
 * Manuscripts under review or under revision. Formally distinct from the
 * published record above and from exploratory notes below.
 */
export const UNDER_REVIEW: Publication[] = [
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
    capacities: ["presupposed"],
  },
  {
    title: "Comparative Desire and Social Violence",
    venue: "Revise and resubmit",
    status: "Revise and resubmit",
    year: "2026",
    themeSlug: "desire-comparison-social-relations",
    conceptSlug: "comparative-entitlement-formation",
    contribution:
      "Analyses how platform-mediated comparison produces entitlements whose frustration is structurally converted into grievance and, at scale, into social violence.",
    capacities: ["transformed"],
  },
];

/**
 * Working papers, drafts, and exploratory notes. Not peer-reviewed output.
 */
export const RESEARCH_NOTES: Publication[] = [
  {
    title: "When Institutions Stop Answering Back",
    venue: "Draft manuscript",
    status: "Draft",
    year: "2026",
    themeSlug: "judgment-answerability-institutional-reason",
    conceptSlug: "judgment-gap",
    contribution:
      "Principal current manuscript. Identifies the institutional site at which answerability must be borne once reasoning is delegated to automated procedures, and shows how nominal oversight can leave that site vacant.",
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
      "AI-driven predictive maintenance in industrial asset management serves as the applied test case.",
    capacities: ["presupposed", "concealed"],
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

/** Every entry across the three registers, for search and cross-linking. */
export const ALL_ENTRIES: Publication[] = [
  ...PUBLICATIONS,
  ...UNDER_REVIEW,
  ...RESEARCH_NOTES,
];
