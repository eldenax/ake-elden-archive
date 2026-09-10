import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Research Premises — Dr. Åke Elden";
const DESCRIPTION =
  "The governing statement of Dr. Åke Elden's research programme: a philosophy of licensed transitions and prior conditions across judgment, responsibility, normativity, and agency.";
const URL_SELF = "https://ake-elden-archive.lovable.app/research-premises";

export const Route = createFileRoute("/research-premises")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL_SELF }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Research Premises: A Philosophy of Licensed Transitions",
          description: DESCRIPTION,
          url: URL_SELF,
          author: { "@type": "Person", name: "Åke Elden" },
          datePublished: "2026-09-10",
        }),
      },
    ],
  }),
  component: ResearchPremisesPage,
});

const SECTIONS = [
  {
    id: "central-question",
    label: "The central question",
    paragraphs: [
      "For some time, I have been working across problems that appear, at first sight, to belong to rather different areas of philosophy: responsibility, agency, standing, institutional authority, epistemic judgment, evaluation, technological mediation, and social comparison.",
      "Increasingly, however, I have come to think that these are not separate projects.",
      "They are manifestations of the same philosophical problem.",
      "The central question is this: Under what conditions is the transition from one epistemic, normative, evaluative, or agential status to another genuinely licensed?",
      "This question concerns something philosophy often treats too quickly: the move from one kind of fact to another kind of conclusion.",
      "We observe an action and attribute responsibility. We identify moral standing and infer priority. We observe a difference in outcomes and infer a difference in competence. We identify authorship and infer epistemic control. We recognize institutional authority and infer legitimate capacity. We evaluate an achievement at one time and assume that the same evaluative standard can be carried unchanged into another.",
      "In each case, the philosophical problem is not simply whether the first statement is true or whether the second statement is true.",
      "The problem lies in the transition between them.",
    ],
  },
  {
    id: "second-order",
    label: "From first-order questions to second-order philosophy",
    paragraphs: [
      "A first-order philosophical question asks something like: Is this person responsible? Does this person have moral standing? Is this achievement valuable? Is this exercise of power legitimate?",
      "These are important questions. But they are not usually where my own interest begins.",
      "I am increasingly interested in the second-order question: What would have to be true for us to be entitled to move from the relevant facts to that conclusion?",
      "Suppose, for example, that an entity has moral standing. Does it follow that it should receive greater priority when claims conflict?",
      "No.",
      "Standing and priority answer different questions. Standing concerns admission into a normative domain. Priority concerns comparative ordering within that domain. A property that is sufficient to establish standing does not automatically acquire priority-conferring force.",
      "Something additional is required.",
      "There must be a bridge principle that licenses the transition.",
      "Much philosophical reasoning depends upon such bridges. Yet the bridges themselves are often left implicit.",
    ],
  },
  {
    id: "third-order",
    label: "Third-order questions: when can the bridge itself operate?",
    paragraphs: [
      "The problem becomes more interesting when we move one order higher.",
      "Even if we specify a bridge principle, we can ask: What conditions must already obtain before that principle can legitimately be applied?",
      "Consider responsibility. A conventional philosophical discussion might ask whether responsibility requires knowledge, control, intention, or responsiveness to reasons. But there is a prior question: Were the conditions under which control, judgment, and answerability could arise actually available to the agent?",
      "This changes the structure of the problem.",
      "Instead of asking whether responsibility has been weakened, mitigated, or transferred, we may need to ask whether the conditions necessary for responsibility ever came into existence.",
      "The distinction matters especially in technologically mediated environments.",
      "A person may remain formally present in a decision-making process while the architecture surrounding that person progressively removes the possibility of meaningful judgment, contestation, or intervention.",
      "In such a case, continuing to attribute responsibility merely because the person occupies the formal role may be a category mistake.",
      "The philosophical issue is not simply diminished responsibility.",
      "It is the possibility that responsibility cannot arise under certain conditions.",
      "The same structure appears elsewhere. Before asking what a person ought to have done, we may need to ask whether there was a normative position that the person could actually occupy. Before attributing institutional answerability, we may need to ask whether the institution contains any locus from which an answer can genuinely be given. Before interpreting unequal outcomes as evidence of unequal competence, we may need to ask whether the comparison itself satisfies the conditions required for evidential attribution.",
      "These are not first-order questions about what happened.",
      "They are questions about the preconditions of valid attribution.",
    ],
  },
  {
    id: "fourth-order",
    label: "Fourth-order philosophy: the architecture of the conditions",
    paragraphs: [
      "The next step is to ask what produces these conditions.",
      "Here the philosophical focus moves from individual agents to institutions, technologies, temporal structures, and social environments.",
      "The question becomes: What kinds of social and institutional architecture determine whether the conditions for judgment, agency, responsibility, or evaluation are present?",
      "This is why technological mediation interests me philosophically.",
      "My project is not fundamentally about artificial intelligence.",
      "AI is one particularly revealing case because it makes visible something that has always been philosophically important: the extent to which agency and judgment depend upon structures that precede the immediate act.",
      "Predictive systems can shape what appears as an option before deliberation occurs. Administrative infrastructures can accumulate capacities that were never legitimized as a unified power. Digital standards can transform structural constraints into apparent personal failures. Institutions can retain formal procedures for responsibility while removing the practical conditions of answerability.",
      "The important philosophical object is therefore not the technology itself.",
      "It is the architecture of the conditions under which normative and epistemic statuses become possible.",
    ],
  },
  {
    id: "fifth-order",
    label: "A fifth-order problem: philosophy's unnoticed transitions",
    paragraphs: [
      "This eventually leads to a more general methodological claim.",
      "Many philosophical errors may arise not because the premises are obviously false and not because the conclusions are inherently incoherent.",
      "They arise because the transition between the two has not been adequately examined.",
      "Abstractly, philosophical reasoning often takes the form:",
      "A → B",
      "A fact, property, relation, or event is identified, and a further normative or epistemic status is inferred.",
      "But the real structure may be closer to:",
      "A + C → B",
      "where C represents the conditions that license the transition.",
      "Once this is recognized, another question immediately appears:",
      "What makes C available?",
      "That introduces a further level:",
      "D → C → [A → B]",
      "Here D may represent institutional, social, temporal, technological, or agential structures.",
      "This, I think, captures the deeper architecture of my research.",
      "The project is not simply a philosophy of action. Nor is it simply a theory of responsibility, technology, institutions, or social epistemology.",
      "It is a philosophy of the conditions under which transitions between statuses become warranted.",
    ],
  },
  {
    id: "conditions-transitions-attribution",
    label: "Conditions, transitions, attribution",
    paragraphs: [
      "Three concepts increasingly summarize the project for me: conditions, transitions, attribution.",
      "We attribute responsibility, competence, authority, value, standing, priority, authorship, or agency. But such attribution depends upon transitions from one kind of fact to another kind of status. And those transitions depend upon prior conditions that may be social, temporal, institutional, epistemic, or agential.",
      "The philosophical task is therefore not merely to ask: What is true of this person, act, institution, or outcome?",
      "It is also to ask: What licenses us to move from what we know to what we attribute?",
      "And then, one level deeper: What must already be true for that licensing relation itself to exist?",
      "I currently think of this research programme as a philosophy of licensed transitions, closely connected to what might also be called a philosophy of prior conditions.",
      "Its governing question is simple to state: What must already be true before a transition in normative, epistemic, evaluative, or agential status is warranted?",
      "That question is deliberately general. It can be asked about moral responsibility and social standing, about institutions and technologies, about evaluation and comparison, about authorship and agency. The domains differ. The underlying philosophical structure may be the same.",
      "And that is increasingly what I think my philosophical project is about.",
    ],
  },
];

function ResearchPremisesPage() {
  return (
    <article>
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Research Premises
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            A philosophy of licensed transitions
          </h1>
          <p className="mt-8 font-display text-lg italic leading-relaxed text-foreground/80">
            The governing statement of the research programme: what must already
            be true before a transition in normative, epistemic, evaluative, or
            agential status is warranted?
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <nav
          aria-label="Premises sections"
          className="mb-16 rounded-md border border-border bg-muted/30 p-6"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Sections
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-4 text-sm text-foreground/80">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="underline decoration-dotted underline-offset-4 hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id} className="mb-14 scroll-mt-24">
            <h2 className="font-display text-2xl leading-snug text-foreground">
              {s.label}
            </h2>
            {s.paragraphs.map((p, i) => {
              const isFormula =
                p === "A → B" ||
                p === "A + C → B" ||
                p === "What makes C available?" ||
                p === "D → C → [A → B]" ||
                p === "No.";
              if (isFormula) {
                return (
                  <p
                    key={i}
                    className="mt-6 font-display text-xl italic leading-relaxed text-foreground md:text-2xl"
                  >
                    {p}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="mt-4 text-base leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              );
            })}
          </section>
        ))}

        <div className="border-t border-border pt-10">
          <p className="font-display text-lg leading-relaxed text-foreground/85">
            This statement also appears as a{" "}
            <Link
              to="/blog/$slug"
              params={{ slug: "research-premises" }}
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              working note
            </Link>
            . The same structure is explored across the{" "}
            <Link
              to="/inquiry"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              Research Programme
            </Link>
            , the{" "}
            <Link
              to="/concepts"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              concepts
            </Link>
            , and the{" "}
            <Link
              to="/publications"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              publications
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
