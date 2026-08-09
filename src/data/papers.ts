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
];

export function getPaper(slug: string): Paper | undefined {
  return PAPERS.find((p) => p.slug === slug);
}
