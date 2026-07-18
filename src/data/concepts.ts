export type Concept = {
  slug: string;
  name: string;
  tagline: string;
  theory: string[];
  publications: string[];
  currentWork: string[];
};

export const CONCEPTS: Concept[] = [
  {
    slug: "subtractive-redescription",
    name: "Subtractive Redescription",
    tagline:
      "How AI systems reformulate human practices by removing the tacit conditions that gave them meaning.",
    theory: [
      "Subtractive redescription names a characteristic move by which artificial systems represent a human practice by stripping away the background conditions that constitute it — attention, addressee, situation, stake — and then re-presenting the residue as though it were the practice itself.",
      "The concept clarifies why AI-mediated outputs can appear faithful to a task while quietly dissolving what made the original task intelligible. A recommendation, a diagnosis, or a judgement rendered without its constitutive conditions is not merely a compressed version of the human act; it is a different act performed under the same name.",
      "The framework draws on philosophy of language, action theory, and theological anthropology to show that many disputes about AI 'accuracy' are in fact disputes about which conditions of a practice were subtracted before measurement began.",
    ],
    publications: [
      "Work on subtractive redescription in the context of clinical decision support (Behavioral Sciences).",
      "Related material on epistemic reduction and predictive systems (AI and Ethics).",
      "Theological engagements with technological description of the human (Studia Theologica; New Blackfriars).",
    ],
    currentWork: [
      "A monograph-length treatment situating subtractive redescription within a broader theory of AI-mediated practice.",
      "Case studies from healthcare and public administration in which subtracted conditions produce measurable but misleading gains.",
      "Ongoing dialogue with colleagues in philosophy of science on the relation between subtractive redescription and idealisation.",
    ],
  },
  {
    slug: "inferential-license",
    name: "Inferential License",
    tagline:
      "The normative authority to draw conclusions — and how automated inference redistributes it.",
    theory: [
      "Inferential license names the normative permission — not the mere capacity — to move from evidence to conclusion within a given practice. A radiologist, a jury, and a peer reviewer each hold different licenses, and each is answerable in different ways for their exercise.",
      "Automated inference does not simply accelerate reasoning; it silently relocates license. When a model 'concludes,' someone must still stand behind the inference, but the ordinary chain from evidence through judgement to answerability is disturbed.",
      "The concept provides a vocabulary for asking a question that classical epistemology tends to skip: not 'is this inference valid?' but 'who is licensed to draw it, in what setting, and to whom must they answer?'",
    ],
    publications: [
      "Foundational statement of inferential license in the philosophy of AI (Philosophy & Technology).",
      "Application to clinical inference and shared decision-making (Journal of Health Communication).",
      "Discussion of licensing structures in scientific methodology (Philosophies).",
    ],
    currentWork: [
      "A comparative study of inferential license across medicine, law, and public administration.",
      "Work on 'delegated inference' — the conditions under which license can and cannot be transferred to automated systems.",
      "Collaborations with methodologists on how licensing structures should shape AI evaluation protocols.",
    ],
  },
  {
    slug: "epistemic-infrastructure",
    name: "Epistemic Infrastructure",
    tagline:
      "The background scaffolding of concepts, institutions, and practices that make knowledge possible.",
    theory: [
      "Epistemic infrastructure denotes the largely invisible arrangements — categories, standards, records, review processes, training pipelines — through which claims come to count as knowledge. It is what makes an assertion assessable at all.",
      "AI systems both depend on and transform epistemic infrastructure: they inherit its categories, exploit its records, and, through deployment, reshape the practices that produced them. This creates a reflexive loop that classical accounts of evidence do not anticipate.",
      "Treating epistemic infrastructure as a first-class object of philosophical analysis reframes debates about bias, generalisation, and trust — moving them from properties of models to properties of the arrangements in which models are trained, deployed, and audited.",
    ],
    publications: [
      "Programmatic paper on epistemic infrastructure and AI (AI and Ethics).",
      "Analysis of infrastructural presuppositions in machine-learning evaluation (Philosophies).",
      "Historical and theological reflections on institutional knowledge practices (Studia Theologica).",
    ],
    currentWork: [
      "An extended argument that AI safety and AI epistemology are inseparable from the maintenance of epistemic infrastructure.",
      "Empirical mapping of infrastructural dependencies in clinical AI deployments.",
      "Consultative work with academic institutions on infrastructural conditions for responsible AI research.",
    ],
  },
  {
    slug: "artificial-answerability",
    name: "Artificial Answerability",
    tagline:
      "Whether, and how, algorithmic systems can be held to account for what they mediate.",
    theory: [
      "Artificial answerability asks what it would mean for an automated system to be answerable — not merely explainable — for the outcomes it produces. Answerability is a relational, second-personal notion; it requires an addressee, a stake, and a capacity to receive challenge.",
      "The concept distinguishes explanation (a technical output) from answerability (a moral and institutional relation). A system may be highly explainable and yet answerable to no one; conversely, an opaque system may be embedded in structures that hold specific persons answerable.",
      "Artificial answerability provides criteria by which to evaluate proposed AI governance regimes: not by their transparency alone, but by the answerability relations they establish, sustain, or erode.",
    ],
    publications: [
      "Foundational essay distinguishing explanation from answerability (Philosophy & Technology).",
      "Applied work on answerability in algorithmic healthcare (AI and Ethics).",
      "Theological engagement with answerability and the moral self (Studies in Christian Ethics).",
    ],
    currentWork: [
      "A book-length treatment of answerability as a category for the philosophy of AI.",
      "Comparative analysis of proposed AI regulations through the lens of answerability.",
      "Interdisciplinary work with legal scholars on institutional forms of artificial answerability.",
    ],
  },
  {
    slug: "institutional-answerability",
    name: "Institutional Answerability",
    tagline:
      "How responsibility is distributed when institutions delegate judgement to predictive systems.",
    theory: [
      "Institutional answerability extends the concept of answerability to the collective agents — hospitals, courts, universities, agencies — that increasingly act through AI-mediated processes. It asks how such bodies remain accountable when constitutive judgements have been delegated.",
      "The account rejects both the fiction of a single 'responsible engineer' and the diffusion of accountability into 'the system.' Instead, it identifies specific institutional roles, procedures, and records through which answerability can be preserved or lost.",
      "The framework offers institutions a diagnostic: which of our answerability relations have been left implicit, which have been quietly transferred, and which have been abolished by the introduction of predictive tooling?",
    ],
    publications: [
      "Institutional answerability and algorithmic governance (AI and Ethics).",
      "Case study of answerability failures in predictive administration (Behavioral Sciences).",
      "Theological reflections on institutions as moral agents (Studies in Christian Ethics; New Blackfriars).",
    ],
    currentWork: [
      "A framework for institutional answerability audits of AI deployments.",
      "Ongoing collaboration with public-sector partners on governance of predictive systems.",
      "Contribution to a volume on collective responsibility in algorithmic societies.",
    ],
  },
  {
    slug: "predictive-mediation",
    name: "Predictive Mediation",
    tagline:
      "The way forecasts reshape the situations they claim only to describe.",
    theory: [
      "Predictive mediation names the phenomenon in which a forecast, once acted upon, becomes a constituent of the situation it forecasts. Predictions do not merely describe futures; they organise attention, allocate resources, and license interventions that alter the very trajectories being predicted.",
      "This creates an epistemic and ethical puzzle: the standards by which we evaluate predictions (calibration, accuracy) presuppose a describable-but-not-shaped world, whereas deployed predictions typically shape the world they describe.",
      "The concept clarifies why 'better predictions' can produce worse outcomes when the mediation is unacknowledged, and why responsibility for predictive systems must include responsibility for the situations they help constitute.",
    ],
    publications: [
      "Programmatic paper on predictive mediation and epistemic responsibility (Philosophy & Technology).",
      "Applications to predictive medicine and behavioural forecasting (Behavioral Sciences; Journal of Health Communication).",
      "Theological reflections on human formation under conditions of predictive mediation (Theology and Science).",
    ],
    currentWork: [
      "A theory of 'mediation-aware evaluation' for predictive systems.",
      "Empirical work on clinical and administrative settings where predictive mediation is pronounced.",
      "Contribution to ongoing debates on optimisation, autonomy, and human formation.",
    ],
  },
];

export function getConcept(slug: string): Concept | undefined {
  return CONCEPTS.find((c) => c.slug === slug);
}
