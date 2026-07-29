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
