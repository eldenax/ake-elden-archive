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
    slug: "inferential-license",
    name: "Inferential License",
    tagline:
      "The normative permission to draw a conclusion from a given design — not merely the capacity to draw it.",
    theory: [
      "Inferential license names the normative permission — not the mere capacity — to move from evidence to conclusion within a given practice. A radiologist, a jury, and a peer reviewer each hold different licenses, and each is answerable in different ways for their exercise.",
      "Automated inference does not simply accelerate reasoning; it silently relocates license. When a model 'concludes,' someone must still stand behind the inference, but the ordinary chain from evidence through judgement to answerability is disturbed.",
      "The concept provides a vocabulary for a question that classical epistemology tends to skip: not 'is this inference valid?' but 'who is licensed to draw it, in what setting, and to whom must they answer?'",
    ],
    publications: [
      "LLM experiments and inferential license (working paper).",
      "Design–Inference Alignment (working paper).",
      "The Locus of Answerability (working paper).",
    ],
    currentWork: [
      "A comparative study of inferential license across medicine, law, and public administration.",
      "Work on delegated inference — the conditions under which license can and cannot be transferred to automated systems.",
      "Integration with the partition thesis and second-order provenance in the wider programme.",
    ],
  },
  {
    slug: "judgment-gap",
    name: "Judgment Gap",
    tagline:
      "The interval between what a system outputs and what a judgment would require to be answerable.",
    theory: [
      "The judgment gap names the interval between what an automated system produces and what would be required for the same act to count as a judgment for which some party is answerable.",
      "The gap is not closed by more accurate outputs. It is closed only by relocating the act back into a structure in which addressability, stake, and standing are recoverable.",
      "The concept clarifies why 'human-in-the-loop' arrangements often fail to restore judgment: they place a person at the terminus of a process from which the constitutive conditions of judgment have already been removed.",
    ],
    publications: [
      "The Locus of Answerability (working paper).",
      "Answerability on the Record (in preparation).",
      "When Responsibility Fails to Arise (working paper).",
    ],
    currentWork: [
      "Case work on judgment gaps in predictive administration.",
      "A typology of failure modes by which nominal oversight leaves the gap intact.",
    ],
  },
  {
    slug: "second-order-provenance",
    name: "Second-Order Provenance",
    tagline:
      "Traceability not of data, but of the normative orderings under which data are taken to matter.",
    theory: [
      "First-order provenance tracks where data came from. Second-order provenance tracks where the normative orderings that make those data matter came from: how a ranking, threshold, or category was selected, licensed, and sustained.",
      "Systems that satisfy first-order provenance can nevertheless be answerable to no one at the second order — the ordering under which their outputs count as decisive was itself never authored by an addressable party.",
      "The concept links technical audit to institutional answerability: an institution that cannot answer at the second order cannot own the decisions its systems produce.",
    ],
    publications: [
      "Second-Order Provenance (working paper).",
      "Standing Is Not an Ordering (under review).",
    ],
    currentWork: [
      "A framework for second-order provenance audits of institutional AI deployments.",
      "Cross-work with ClaimBuilder.ai on how second-order provenance can be operationalised.",
    ],
  },
  {
    slug: "partition-thesis",
    name: "Partition Thesis",
    tagline:
      "Criteria of moral standing determine who is considerable but do not, by themselves, generate priority among those admitted.",
    theory: [
      "The partition thesis distinguishes two questions frequently conflated in normative theory: the question of who or what enters the moral field, and the question of how that field is ordered once entry is settled.",
      "Standing is a threshold notion; ordering is a relational one. Confusing them produces both overreach — treating admission as if it entailed priority — and neglect — treating ordering disputes as if they were disputes about standing.",
      "The thesis is developed with ontocentric information ethics as its maximal test case: even the most inclusive standing criterion cannot supply an internal principle of priority.",
    ],
    publications: [
      "Standing Is Not an Ordering (under review).",
      "The Ontological Organization of Normativity (in preparation).",
    ],
    currentWork: [
      "Extension of the thesis to debates on AI moral status.",
      "Application to environmental and infrastructural ethics.",
    ],
  },
  {
    slug: "ethical-disclosure",
    name: "Ethical Disclosure",
    tagline:
      "The conditions under which a moral claim comes into view at all.",
    theory: [
      "Ethical disclosure names the prior question of when a situation shows up as ethically laden — when a moral claim is disclosed as a claim rather than as a fact, a preference, or a datum.",
      "Systems that mediate perception can foreclose disclosure without ever contradicting an ethical principle: nothing appears as a claim in the first place.",
      "The concept relocates a central ethical question upstream of principles and reasons: what has to be in place for anything to register as an ethical matter?",
    ],
    publications: [
      "The Diffuse Void (working paper).",
      "Predictive AI and Second-Personal Exclusion (working paper).",
    ],
    currentWork: [
      "An account of disclosure-preserving and disclosure-suppressing infrastructures.",
    ],
  },
  {
    slug: "comparative-entitlement-formation",
    name: "Comparative Entitlement Formation",
    tagline:
      "How platforms form entitlements out of comparison, and structure the grievance that follows.",
    theory: [
      "Comparative entitlement formation names the process by which infrastructures of comparison — feeds, rankings, dashboards — constitute the sense of what one is owed by measuring what others have.",
      "The account is post-mimetic: it treats desire not as a private state but as a relational configuration that platform mediation reshapes and stabilises.",
      "The concept explains why platform environments generate grievance at scale: they do not merely display inequality, they format it as entitlement whose frustration has a recognisable, and monetisable, affective shape.",
    ],
    publications: [
      "Comparative Desire and Social Violence (working paper).",
      "The Platforming of Desire (working paper).",
    ],
    currentWork: [
      "Fieldwork with mimetic theory on entitlement structures in platform environments.",
      "A theory of grievance formation as an infrastructural output.",
    ],
  },
  {
    slug: "post-mimetic-relationality",
    name: "Post-Mimetic Relationality",
    tagline:
      "Relational configurations that arise once mimetic desire is infrastructurally mediated.",
    theory: [
      "Post-mimetic relationality names the relational configurations that arise when mimetic desire is no longer exchanged directly between persons but is routed through infrastructures that measure, aggregate, and re-serve it.",
      "Ordinary mimetic dynamics presuppose co-presence and reciprocity; their infrastructural mediation produces relations that resemble mimetic ones but have lost their bidirectional character.",
      "The concept opens a space between classical mimetic theory and platform studies, and gives a name to relations that are neither reducible to individual psychology nor exhaustively described as network effects.",
    ],
    publications: ["The Platforming of Desire (working paper)."],
    currentWork: [
      "A book-length treatment of post-mimetic relationality as a general social configuration.",
    ],
  },
  {
    slug: "epistemic-infrastructure",
    name: "Epistemic Infrastructure",
    tagline:
      "The background scaffolding of concepts, institutions, and practices that makes knowledge possible.",
    theory: [
      "Epistemic infrastructure denotes the largely invisible arrangements — categories, standards, records, review processes, training pipelines — through which claims come to count as knowledge. It is what makes an assertion assessable at all.",
      "AI systems both depend on and transform epistemic infrastructure: they inherit its categories, exploit its records, and reshape the practices that produced them. This creates a reflexive loop classical accounts of evidence do not anticipate.",
      "Treating epistemic infrastructure as a first-class philosophical object reframes debates about bias, generalisation, and trust — moving them from properties of models to properties of the arrangements in which models are trained, deployed, and audited.",
    ],
    publications: [
      "AI as epistemic infrastructure (working paper).",
      "Administrative expertise as epistemic lag (working paper).",
    ],
    currentWork: [
      "An extended argument that AI safety and AI epistemology are inseparable from the maintenance of epistemic infrastructure.",
      "Empirical mapping of infrastructural dependencies in clinical AI deployments.",
    ],
  },
  {
    slug: "systemic-friction",
    name: "Systemic Friction",
    tagline:
      "Friction as a productive institutional condition — and the costs of its removal.",
    theory: [
      "Systemic friction reconstructs friction as a productive institutional condition, not simply an obstacle to efficiency. Delay, checkpointing, redundancy, and dispute create the temporal and relational room in which judgment and answerability can be exercised.",
      "Automation frequently succeeds by removing friction; the concept clarifies what is lost in the process and why the resulting system may be faster, cheaper, and less answerable.",
      "The account links to institutional inversion: once frictional practices are removed, the remaining scaffolding often reorganises the institution around what the automated system can do.",
    ],
    publications: [
      "Systemic friction (working paper).",
      "Institutional inversion (working paper).",
    ],
    currentWork: [
      "A diagnostic instrument for identifying productive friction in institutional workflows.",
    ],
  },
];

export function getConcept(slug: string): Concept | undefined {
  return CONCEPTS.find((c) => c.slug === slug);
}
