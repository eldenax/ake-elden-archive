export type ConceptEdge = {
  a: string;
  b: string;
  publications: string[];
  note: string;
};

export const CONCEPT_EDGES: ConceptEdge[] = [
  {
    a: "inferential-license",
    b: "judgment-gap",
    note: "Overreached inference is the mechanism by which the judgment gap opens.",
    publications: [
      "LLM experiments and inferential license",
      "The Locus of Answerability",
      "Design–Inference Alignment",
    ],
  },
  {
    a: "judgment-gap",
    b: "second-order-provenance",
    note: "Closing the gap requires provenance not of data but of the orderings that make outputs decisive.",
    publications: [
      "The Locus of Answerability",
      "Second-Order Provenance",
      "Answerability on the Record",
    ],
  },
  {
    a: "second-order-provenance",
    b: "epistemic-infrastructure",
    note: "Normative orderings are sustained by — and inherited from — epistemic infrastructure.",
    publications: ["Second-Order Provenance", "AI as epistemic infrastructure"],
  },
  {
    a: "inferential-license",
    b: "epistemic-infrastructure",
    note: "License to infer is granted, revoked, and audited by the surrounding epistemic infrastructure.",
    publications: [
      "LLM experiments and inferential license",
      "AI as epistemic infrastructure",
      "Design–Inference Alignment",
    ],
  },
  {
    a: "partition-thesis",
    b: "ethical-disclosure",
    note: "Standing does not by itself disclose a claim; disclosure is the prior condition of ordering.",
    publications: [
      "Standing Is Not an Ordering",
      "Predictive AI and Second-Personal Exclusion",
    ],
  },
  {
    a: "ethical-disclosure",
    b: "judgment-gap",
    note: "Where disclosure is foreclosed, no judgment can arise — the gap is total.",
    publications: ["The Diffuse Void", "When Responsibility Fails to Arise"],
  },
  {
    a: "partition-thesis",
    b: "second-order-provenance",
    note: "Ordering disputes are second-order disputes; standing does not settle them.",
    publications: ["Standing Is Not an Ordering", "Second-Order Provenance"],
  },
  {
    a: "comparative-entitlement-formation",
    b: "post-mimetic-relationality",
    note: "Entitlement forms out of comparison once mimetic relations are infrastructurally routed.",
    publications: [
      "Comparative Desire and Social Violence",
      "The Platforming of Desire",
    ],
  },
  {
    a: "post-mimetic-relationality",
    b: "epistemic-infrastructure",
    note: "Post-mimetic relations are held in place by the same infrastructures that constitute knowledge.",
    publications: ["The Platforming of Desire", "Media as infrastructure"],
  },
  {
    a: "comparative-entitlement-formation",
    b: "ethical-disclosure",
    note: "Platform grievance forecloses the disclosure of the other as an addressable party.",
    publications: [
      "Comparative Desire and Social Violence",
      "Predictive AI and Second-Personal Exclusion",
    ],
  },
  {
    a: "systemic-friction",
    b: "judgment-gap",
    note: "Removing friction removes the temporal room in which judgment could be exercised.",
    publications: ["Systemic friction", "Institutional inversion"],
  },
  {
    a: "systemic-friction",
    b: "epistemic-infrastructure",
    note: "Friction is a load-bearing feature of epistemic infrastructure, not an inefficiency.",
    publications: ["Systemic friction", "Administrative expertise as epistemic lag"],
  },
];

export function pairKey(a: string, b: string): string {
  return [a, b].sort().join("--");
}

export function edgesForPublication(title: string): ConceptEdge[] {
  return CONCEPT_EDGES.filter((e) => e.publications.includes(title));
}
