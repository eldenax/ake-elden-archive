export type PaperSection = {
  number: string;
  heading: string;
  summary: string;
};

export type PaperResult = {
  label: string;
  statement: string;
};

export type Paper = {
  slug: string;
  title: string;
  subtitle?: string;
  affiliation: string;
  status: string;
  draftNote?: string;
  doi?: string;
  href?: string;
  themeSlug: string;
  themeLabel: string;
  conceptSlugs: string[];
  abstract: string;
  keywords: string[];
  claim: string;
  sections: PaperSection[];
  results: PaperResult[];
  conditions: { label: string; body: string }[];
  positioning: string;
};

export const PAPERS: Paper[] = [
  {
    slug: "action-without-acts",
    title: "Action Without Acts",
    subtitle:
      "The Institutional Production of Action and the Doctrinal Conditions of Responsibility",
    affiliation: "NLA University College, Oslo, Norway",
    status: "Published · Neue Zeitschrift für Systematische Theologie und Religionsphilosophie (2026)",
    doi: "10.1515/nzsth-2026-0021",
    href: "https://doi.org/10.1515/nzsth-2026-0021",
    draftNote:
      "Open access. © 2026 the author, published by De Gruyter under CC BY 4.0.",
    themeSlug: "institutions-infrastructure-technological-mediation",
    themeLabel: "Institutions, Infrastructure and Technological Mediation",
    conceptSlugs: ["judgment-gap", "epistemic-infrastructure", "systemic-friction"],
    abstract:
      "Christian theological responsibility is not merely act-based but institutionally conditioned, and the doctrines of sin, judgment, and moral agency may therefore benefit from explicit articulation in light of institutional forms that can decline to produce action. The tradition's resources for indirect agency — cooperation, omission, vicarious responsibility, structural sin — are, on inspection, act-derivative without exception, while certain contemporary infrastructural configurations decline, at the operating level, to produce the act on which those resources depend. Three institutional cases — robotic debt recovery in Australia, the Dutch childcare-benefits scandal, and platform content moderation — introduce the problem and are returned to throughout. The argument develops through classical accounts of the act-grammar (Augustine, Aquinas, Barth, O'Donovan), the social ontology of action (Anscombe, Searle), the political phenomenology of action and judgment (Arendt), and the reconstruction of responsibility under structural conditions (Bonhoeffer).",
    keywords: [
      "systematic theology",
      "moral responsibility",
      "action theory",
      "institutional agency",
      "sin",
      "judgment",
      "moral agency",
      "social ontology",
      "political theology",
      "theological anthropology",
    ],
    claim:
      "The question \u201cwho answers for this?\u201d, asked at the operating level of such a configuration, has no answerer at that level — not because someone is hiding, but because no one has done anything, at that level, in the sense the question requires.",
    sections: [
      {
        number: "1",
        heading: "The sufficiency problem",
        summary:
          "The starting claim is the inverse of novelty: the tradition already holds substantial categories for indirect, mediated, and structural agency. The wrong at issue — treating persons as objects of management rather than addressees — is old; what may be new is the means by which it is accomplished without anyone occupying the position of the one who so regards them.",
      },
      {
        number: "2",
        heading: "Three configurations",
        summary:
          "Robodebt (judgment without a judge), the Dutch toeslagenaffaire (accusation without an accuser), and automated content moderation (removal without a remover). Each is returned to throughout as a test of the diagnosis.",
      },
      {
        number: "3–4",
        heading: "The act-structure of responsibility",
        summary:
          "Discreteness, authorship, and publicness are conditions of intelligibility, not of metaphysical perfection: something must have been done, by someone, at a determinate time, in a manner that can be seen. Action so understood is institutionally produced, not simply given.",
      },
      {
        number: "5",
        heading: "The operating level",
        summary:
          "The operating level is the layer at which a system delivers determinations to those it affects; the upstream level comprises authorization, design, specification, and oversight. What is novel is the configuration in which the upstream level is populated by acts and agents while the operating level is populated by neither.",
      },
      {
        number: "6",
        heading: "Four mechanisms of withdrawal",
        summary:
          "Infrastructural mediation dissolves discreteness; metric substitution dissolves authorship; procedural diffusion dissolves authorship and publicness; continuous operation dissolves the temporal economy on which judgment depends. Each alone weakens the act; convergence withdraws it.",
      },
      {
        number: "7–8",
        heading: "The act-derivative structure of the tradition's resources",
        summary:
          "Cooperation presupposes another's deed; omission presupposes the structure of the action it negates; vicarious responsibility presupposes an act of those for whom one answers; structural sin extends imputation across acts. Applied back to the three configurations, each resource finds upstream agents but no operating-level act.",
      },
      {
        number: "9",
        heading: "The post-agential as a category in theological anthropology",
        summary:
          "The post-agential is neither a metaphysical thesis nor a phenomenology but a name for a configuration: outcomes produced at the operating level without generating acts or fora of accountability, even where upstream agency remains real. It is continuous with classical accounts by exception, not displacement.",
      },
      {
        number: "10–12",
        heading: "Reformulating sin, judgment, and moral agency",
        summary:
          "Doctrinal consequence is drawn in three movements, followed by institutional form as theological responsibility and a conclusion on the conditions of answerability: those conditions are either produced or not, and their production is itself a moral and theological responsibility.",
      },
    ],
    results: [
      {
        label: "Diagnostic claim",
        statement:
          "The tradition is not silent before these configurations; its categories remain necessary. But those categories require an object — an act — that the configurations do not, at the operating level, supply.",
      },
      {
        label: "Doctrine of sin",
        statement:
          "The doctrine admits a distinct category of upstream sin whose object is the production of harm at an operating level that does not produce acts. This is not structural sin; it is the design of structures that withdraw the conditions under which sin could be located at the point of harm.",
      },
      {
        label: "Institutional form",
        statement:
          "Theological responsibility includes responsibility for institutional forms — specifically, for whether they produce action at the operating level or withdraw it. This is not a displacement of personal responsibility but its completion.",
      },
      {
        label: "Scope",
        statement:
          "The claim is deliberately narrow: not that technologically mediated institutions universally extinguish action, but that certain architectures increasingly exhibit configurations in which outcomes carry the practical weight of action while the act-structures presupposed by moral judgment become difficult to locate.",
      },
    ],
    conditions: [
      {
        label: "Discreteness",
        body: "There must be a bounded event to point to — an answer to the question when did this happen? Continuous infrastructural processing dissolves it: the Robodebt income-averaging comparison ran across a tax year with no isolable moment of decision.",
      },
      {
        label: "Authorship",
        body: "Someone must stand behind the outcome as its author. Metric substitution replaces normative judgment with the application of formal criteria whose origins are remote from the outcome: the risk-classification score in the toeslagenaffaire had designers, but no one stood behind it as the accuser of any particular family.",
      },
      {
        label: "Publicness",
        body: "There must be a forum in which the matter can be answered. Procedural diffusion disperses responsibility across roles, modules, and stages without ever assigning it — each capable of pointing to the next, none capable of being addressed.",
      },
      {
        label: "Temporal economy",
        body: "Judgment requires intervals: a sequence of distinct events to which sequential answerability can attach. Platform moderation, classifying around the clock, offers no natural interval at which a case could be said to have closed.",
      },
    ],
    positioning:
      "Theology cannot supply the institutional production of action by doctrinal restatement. It can only mark precisely where the conditions of answerability hold and where they fail, reformulate the doctrines under explicit acknowledgment of their institutional presupposition, and refuse the consolation of a grammar that has lost its object.",
  },
  {
    slug: "licensing-problem-predictive-maintenance",
    title: "The Licensing Problem in Predictive Maintenance",
    subtitle: "When Does a Prediction Become a Reason to Act?",
    affiliation: "NLA University College, Oslo, Norway",
    status: "Working paper",
    draftNote:
      "Draft v5 — §2.1 and reference list verified against the publication record, July 2026; items marked [†] remain to be checked.",
    themeSlug: "judgment-answerability-institutional-reason",
    themeLabel: "Judgment & Answerability",
    conceptSlugs: ["inferential-license", "judgment-gap", "second-order-provenance"],
    abstract:
      "Predictive maintenance research is organised around improving prediction. This paper argues that the binding constraint lies in the transition from prediction to intervention. I specify four conditions on a maintenance license — the entitlement to treat a predictive output as a ground for a given intervention — and argue their necessity by isolation. Three are grounding conditions: constitutive adequacy, entitlement transfer, and interventional discrimination. The fourth, answerability, is second-order, governing whether the first three can be held over time. The interventional condition binds asymmetrically: engineering knowledge supports replace versus do not replace, whereas predictive maintenance proposes replace now versus replace later. Four formal results follow, including that accuracy improvement resolves only the component of the intervention contrast the labelling scheme individuates, and that evidence accumulated by a control population buys a post-withdrawal extension depending on reserve intensity rather than duration. Reserve is a subscription, not an investment.",
    keywords: [
      "predictive maintenance",
      "prescriptive maintenance",
      "prognostics and health management",
      "maintenance optimization",
      "interventional identification",
      "selective labels",
      "accountability",
    ],
    claim:
      "A prediction is a claim about what will happen. A maintenance decision is a commitment to make something happen. The first does not entail the second, and no accumulation of the first converts into the second. Something must license the passage — and that entitlement is what I call a maintenance license.",
    sections: [
      {
        number: "1",
        heading: "Introduction",
        summary:
          "Licenses are situation-indexed, they expire independently of model accuracy, and they require a bearer. The argument is neither against predictive maintenance nor in favour of human judgment over automation: time-based and reactive regimes operate under licenses too, and usually weaker ones.",
      },
      {
        number: "2",
        heading: "The closure thesis",
        summary:
          "Prediction plus preferences is taken to close the question of action. Closure is not false; it is correct only under four rarely stated conditions — which are the licensing conditions themselves, appearing in the guise of assumptions about a formula.",
      },
      {
        number: "3",
        heading: "Four gaps",
        summary:
          "The constitutive gap (models predict a proxy, not failure), the entitlement gap (warrant is a relation, not a property of a model), the interventional gap (observational conditioning is not an interventional contrast), and the answerability gap (a defeasible license requires a defeater-detection mechanism).",
      },
      {
        number: "4",
        heading: "The maintenance license",
        summary:
          "The predicate L(f, a, σ, r) holds when an organisation is entitled to treat a predictive output as a ground for performing an action on a situation under the responsibility of an agent. Metrics reach only the first argument place. Necessity is argued by isolation.",
      },
      {
        number: "5–6",
        heading: "Four formal results",
        summary:
          "Accuracy improvement resolves only the component of the intervention contrast the labelling scheme individuates; licenses have a computable lifetime governed by process drift; and reserved non-intervention buys a post-withdrawal extension scaling with reserve intensity rather than duration.",
      },
      {
        number: "7",
        heading: "What licensing is not",
        summary:
          "Not model validation (validation compares outputs to the predictand; licensing relates the predictand to the action). Not explainability (neither necessary nor sufficient). Not threshold tuning (the threshold sets an ongoing evidential burden, not a hyperparameter).",
      },
      {
        number: "8–10",
        heading: "Objections, operational schema, conclusion",
        summary:
          "Answers to the MLOps, decision-theory, prescriptive-maintenance, and tacit-expertise objections; then a register in which the four conditions, their grounds, and their expiry are recorded and owned.",
      },
    ],
    results: [
      {
        label: "Proposition 1",
        statement:
          "Accuracy improvement resolves only the component of the intervention contrast that the labelling scheme individuates. Where the binding constraint is constitutive, interventional, or institutional, better models have sharply limited licensing return.",
      },
      {
        label: "Proposition 2–3",
        statement:
          "A license has a computable lifetime determined by process drift and the rate at which counterfactual evidence is regenerated — a lifetime independent of predictive accuracy. A programme can lose its entitlement to act while every monitored metric remains stable.",
      },
      {
        label: "Proposition 4",
        statement:
          "Evidence accumulated by a reserved control population buys a post-withdrawal extension that scales with reserve intensity rather than duration. Reserve is a subscription, not an investment.",
      },
      {
        label: "Corollary 2",
        statement:
          "Lowering the alarm threshold raises the evidence-generation cost of the license in proportion to the additional degradation range admitted. The threshold is not a free hyperparameter; it sets the evidential burden the programme must carry.",
      },
    ],
    conditions: [

      {
        label: "C1 — Constitutive adequacy",
        body: "The failure modes individuated by the labelling scheme must include the modes the intervention addresses, and the relation between the labelling threshold and the functional failure of concern must be documented and defensible.",
      },
      {
        label: "C2 — Entitlement transfer",
        body: "The deployment situation must lie inside an envelope specified in advance — including operating context and maintenance regime, not only input distribution — with the mechanisms assumed shared between validation and deployment stated.",
      },
      {
        label: "C3 — Interventional discrimination",
        body: "The sign of the intervention value must be determined by evidence that does not reduce to observational conditioning under the policy already in force. Established engineering knowledge supports replace versus do not replace; it rarely supports replace now versus replace later.",
      },
      {
        label: "C4 — Answerability",
        body: "There must exist an agent with authority to enact and to withhold the action, access at decision time to the grounds for C1–C3 as documented, and exposure to the consequences. C4 is second-order: it governs whether an entitlement grounded by C1–C3 can be held over time.",
      },
    ],
    positioning:
      "The prescriptive-maintenance literature has named the gap: predictive capability translates poorly into prescriptive capability, because associative models cannot support interventional claims. What it has not established is what the conditions on legitimate action are, how they relate to predictive accuracy, and what sustaining them costs.",
  },
  {
    slug: "automated-certainty",
    title: "Automated Certainty",
    subtitle: "Algorithmic Perplexity Reduction and Theological Metacognitive Miscalibration",
    affiliation: "NLA University College, Oslo, Norway",
    status: "Published · Journal for the Cognitive Science of Religion 11.1–2 (2026)",
    doi: "10.1558/jcsr.34912",
    href: "https://doi.org/10.1558/jcsr.34912",
    draftNote: "© 2026 Equinox Publishing Ltd. Advance access.",
    themeSlug: "formation-agency-human-subject",
    themeLabel: "Formation, Agency and the Human Subject",
    conceptSlugs: ["automated-certainty", "epistemic-infrastructure", "judgment-gap"],
    abstract:
      "Automated certainty is a technologically mediated condition in which experienced perplexity is reduced more rapidly than users acquire the competence required to evaluate the apparent resolution thereby produced. Drawing on the cognitive science of religion, processing fluency, predictive processing, and cognitive ecology, this article argues that algorithmic systems may increase the accessibility and apparent completeness of theological representations without producing correspondingly developed interpretive competence. The central empirical prediction is a divergence between subjective certainty and demonstrated competence. The paper proposes a research program comparing singular-fluent, interpretively plural, and scaffolded-complexity presentations, and identifies boundary conditions including algorithmic specificity, user expertise, and cross-cultural and tradition-specific variation.",
    keywords: [
      "automated certainty",
      "cognitive science of religion",
      "cognitive ecology",
      "metacognition",
      "processing fluency",
      "practiced naturalness",
      "predictive processing",
      "epistemic calibration",
      "algorithmic mediation",
    ],
    claim:
      "Under conditions of repeated exposure to fluent, personalized, and authoritative-seeming outputs, algorithmic mediation may reduce experienced perplexity more rapidly than it develops the interpretive competence required to evaluate the resulting understanding.",
    sections: [
      {
        number: "I",
        heading: "Automated certainty and the calibration problem",
        summary:
          "Defines automated certainty as the production of apparently settled understanding without the corresponding cognitive labour, and distinguishes epistemic miscalibration from mere falsity.",
      },
      {
        number: "II",
        heading: "Automated certainty in the cognitive science of religion",
        summary:
          "Situates the phenomenon within CSR research on cognitive accessibility, doctrinal representation, attention, memory, social reasoning, and McCauley’s distinction between maturational and practiced naturalness.",
      },
      {
        number: "III",
        heading: "Historical analogies and their limits",
        summary:
          "Compares indulgences, catechisms, revival preaching, radio, and television with algorithmic systems, stressing that the novelty lies in continuous adaptation, personalised selection, and feedback rather than compression alone.",
      },
      {
        number: "IV",
        heading: "Mechanisms of algorithmic miscalibration",
        summary:
          "Identifies processing fluency, recommendation pathways, representational accessibility, algorithmic specificity, and the expert blind spot as mechanisms through which fluent outputs may outpace competence.",
      },
      {
        number: "V",
        heading: "Religious practices as metacognitive scaffolds",
        summary:
          "Examines Chavruta, Vipassanā, lectio divina, and apophatic discipline as functional scaffolds that interrupt premature closure and preserve the labour of interpretation.",
      },
      {
        number: "VI",
        heading: "Empirical implications and testable hypotheses",
        summary:
          "Proposes a research program comparing three presentation conditions and specifies secondary hypotheses concerning expertise, epistemic motivation, analytic style, repeated exposure, and tradition-specific calibration.",
      },
      {
        number: "VII",
        heading: "Limitations and future directions",
        summary:
          "Acknowledges the lack of direct experimental verification, ecological-validity challenges, system heterogeneity, expertise as a boundary condition, and the normative ambivalence of perplexity reduction.",
      },
      {
        number: "VIII",
        heading: "Conclusion: calibrated understanding",
        summary:
          "Reframes the task as preserving the difference between access to a representation and competence in a domain, and defends docta ignorantia as a form of epistemic calibration.",
      },
    ],
    results: [
      {
        label: "Central hypothesis",
        statement:
          "Fluent, singular, and authoritative-seeming algorithmic presentations can produce a divergence between subjective certainty and demonstrated interpretive competence.",
      },
      {
        label: "Empirical prediction",
        statement:
          "Participants exposed to singular-fluent theological explanations without visible sources or uncertainty markers will show poorer confidence-accuracy calibration than those exposed to interpretive plurality or scaffolded-complexity conditions.",
      },
      {
        label: "Moderator",
        statement:
          "Expertise is a principal moderator: the same fluent output may scaffold an expert while producing automated certainty in a novice lacking corrective resources.",
      },
      {
        label: "Design implication",
        statement:
          "Systems can reduce miscalibration by preserving source visibility, signalling uncertainty, presenting structured disagreement, and distinguishing synthesis from consensus.",
      },
    ],
    conditions: [
      {
        label: "Singular-fluent condition",
        body: "One concise, coherent explanation presented without visible sources, interpretive alternatives, or uncertainty markers — the baseline most likely to produce automated certainty.",
      },
      {
        label: "Interpretive-plurality condition",
        body: "Multiple defensible positions and their principal disagreements are made explicit, so users cannot mistake accessibility for resolution.",
      },
      {
        label: "Scaffolded-complexity condition",
        body: "A concise explanation is accompanied by sources, uncertainty markers, and explicit indications of what has been omitted, preserving accessibility while resisting premature closure.",
      },
    ],
    positioning:
      "The cognitive science of religion shows that religious understanding depends on more than the availability of propositions. Algorithmic systems can reorganise the attention, authority, memory, and social labour through which that understanding is formed. The task is not to maximise perplexity but to calibrate resolution to competence.",
  },
];

export function getPaper(slug: string): Paper | undefined {
  return PAPERS.find((p) => p.slug === slug);
}
