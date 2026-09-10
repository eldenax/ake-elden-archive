import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Method: The Error Lies in the Transition — Dr. Åke Elden";
const DESCRIPTION =
  "A methodological statement: on unlicensed ascent in philosophical reasoning — bridge omission, property migration, constitutive-condition neglect, and the philosophy of prior conditions.";
const URL_SELF = "https://ake-elden-archive.lovable.app/method";

export const Route = createFileRoute("/method")({
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
          headline:
            "The Error Lies in the Transition: On Unlicensed Ascent in Philosophical Reasoning",
          description: DESCRIPTION,
          url: URL_SELF,
          author: { "@type": "Person", name: "Åke Elden" },
          datePublished: "2026-09-10",
        }),
      },
    ],
  }),
  component: MethodPage,
});

const FORMULAS = new Set([
  "A → B",
  "A + C → B",
  "D → C → [A → B]",
  "causal involvement → moral responsibility",
  "standing → priority",
  "authorship → epistemic ownership",
  "observed performance → competence",
  "legal powers → legitimate capacity",
  "past value → present evaluative standing",
]);

const SECTIONS: { id: string; label: string; paragraphs: string[] }[] = [
  {
    id: "introduction",
    label: "Introduction",
    paragraphs: [
      "Philosophy has developed an extensive vocabulary for diagnosing bad reasoning. We speak of invalid inference, equivocation, category mistakes, naturalistic fallacies, illicit generalization, question-begging, and conceptual confusion. Yet there is a recurrent form of philosophical error that is not adequately captured by any one of these categories.",
      "It occurs when we identify one status and move from it to another without asking what licenses the transition.",
      "A person causes an outcome; therefore the person is responsible for it.",
      "A being possesses moral standing; therefore its interests should receive greater priority.",
      "Someone formally authors a text; therefore the judgments expressed in it are epistemically theirs.",
      "An institution possesses a number of individually legitimate powers; therefore their integrated exercise constitutes a legitimate institutional capacity.",
      "One person performs less well than another; therefore the difference provides evidence of inferior competence.",
      "An achievement was valuable when accomplished; therefore its present value may be assessed according to whatever standards now prevail.",
      "Each inference may sometimes be correct. The difficulty is that none is correct merely in virtue of the relation stated. Something else has to be true.",
      "The philosophical question is therefore not simply whether A obtains or whether B follows in some particular case. It is:",
      "What must be true for the transition from A to B to be licensed?",
      "This question points toward a general class of philosophical problems that might be called problems of licensed transition.",
    ],
  },
  {
    id: "status-ascent",
    label: "1. Status ascent",
    paragraphs: [
      "Consider a simple schema:",
      "A → B",
      "Here A and B designate statuses rather than merely propositions. A may be causal, descriptive, institutional, epistemic, temporal, or normative. B represents some further status attributed on the basis of A.",
      "For example:",
      "causal involvement → moral responsibility",
      "standing → priority",
      "authorship → epistemic ownership",
      "observed performance → competence",
      "legal powers → legitimate capacity",
      "past value → present evaluative standing",
      "The right-hand side is not simply a restatement of the left. Something has been added. The inference has ascended from one status to another.",
      "Call this status ascent.",
      "Status ascent is unavoidable. Moral philosophy, epistemology, political philosophy, philosophy of action, and social philosophy all depend upon it. We constantly move from facts concerning what agents did, knew, intended, occupied, possessed, or produced to conclusions concerning what they may be blamed for, believed, owed, authorized to do, or credited with.",
      "The problem arises when the ascent is treated as philosophically costless.",
      "It rarely is.",
      "The more accurate structure is usually:",
      "A + C → B",
      "where C specifies a condition, or set of conditions, under which A has the relevant B-conferring significance.",
      "C is the bridge.",
      "The central error I want to examine occurs when C disappears from philosophical reasoning.",
      "We observe A, attribute B, and leave the licensing conditions unexamined.",
    ],
  },
  {
    id: "unlicensed-ascent",
    label: "2. The error of unlicensed ascent",
    paragraphs: [
      "I shall call this the error of unlicensed ascent.",
      "An unlicensed ascent occurs when a philosopher, institution, or ordinary reasoner moves from one status to another without establishing that the conditions under which the first status bears upon the second are satisfied.",
      "This formulation is deliberately broader than the familiar distinction between facts and values.",
      "Hume's discussion of the movement from “is” to “ought” identified one important version of the problem. But status transitions occur even when both sides of an inference are normative, both are epistemic, or both concern agency.",
      "For example, moral standing and moral priority are both normative statuses. Yet standing does not itself determine priority.",
      "Authorship and epistemic authority may both concern intellectual agency. Yet authorship does not automatically establish that the relevant judgment was formed, controlled, or endorsed by the author in the epistemically relevant sense.",
      "Formal institutional authority and legitimate institutional capacity both belong to the normative architecture of institutions. Yet the possession of several legitimate powers does not establish that their integration into a novel capability is itself legitimate.",
      "The problem is therefore not merely that normative conclusions cannot be mechanically extracted from descriptive premises.",
      "It is more general:",
      "one status cannot acquire the inferential powers of another merely because the two regularly occur together.",
    ],
  },
  {
    id: "bridge-omission",
    label: "3. Bridge omission",
    paragraphs: [
      "The simplest form of unlicensed ascent is bridge omission.",
      "Suppose we know that X has status A and wish to conclude that X has status B.",
      "The question is what connects them.",
      "If the transition requires an independent principle P, then the complete argument must have something like the following structure:",
      "X possesses A. Under conditions C, possession of A provides reason for attributing B. C obtains. Therefore B may be attributed to X.",
      "When the middle steps disappear, what looked like an inference may turn out to be an assumption.",
      "This matters because disagreement about B is often misdiagnosed as disagreement about A.",
      "Consider moral standing. Two parties may agree completely that a subject has moral standing yet disagree about whether the subject should receive priority over another. The apparent disagreement about the significance of standing actually concerns the missing bridge principle.",
      "What additional property makes standing priority-conferring? Need? Vulnerability? Equality? Contribution? Urgency? Strength of claim?",
      "No answer follows merely from standing itself.",
      "The omission of the bridge conceals where the philosophical burden actually lies.",
    ],
  },
  {
    id: "property-migration",
    label: "4. Property migration",
    paragraphs: [
      "A particularly important error occurs when a property that performs one normative function is assumed to perform another merely because the second question arises nearby.",
      "Call this property migration.",
      "Suppose property F establishes standing. From this we infer: F confers standing. That proposition does not entail: more F generates stronger priority. Nor: F determines comparative ordering among those who possess standing.",
      "The property has migrated from an admission function to an ordering function.",
      "The transition requires justification.",
      "The same structure appears outside moral philosophy. A property that makes someone eligible for attribution need not determine the strength of the attribution. A feature that makes testimony admissible as evidence need not determine its evidential weight. A condition that establishes authorship need not establish epistemic authority.",
      "Property migration is philosophically tempting because the same concept appears on both sides of the argument. But conceptual continuity does not establish functional continuity.",
      "A property can do one normative job without being entitled to do another.",
    ],
  },
  {
    id: "constitutive-condition-neglect",
    label: "5. Constitutive-condition neglect",
    paragraphs: [
      "There is, however, a deeper problem.",
      "Sometimes the missing condition is not merely an additional premise connecting A with B. It is a condition required for B to be possible at all.",
      "Consider responsibility. One may begin from causal involvement: S contributed causally to outcome O. A familiar discussion then asks what additional conditions convert causal involvement into responsibility: knowledge, control, intention, voluntariness, reasons-responsiveness, foreseeability, or some combination of these.",
      "But a prior question can arise.",
      "Were the conditions under which meaningful control, judgment, or answerability could occur available to S in the first place?",
      "Suppose an institutional or technological system has prestructured the relevant options, filtered the evidence, automated the operative judgment, prevented meaningful intervention, and left the human agent formally positioned as the decision-maker.",
      "We can continue asking how much responsibility the person has. But that may already concede too much.",
      "The more fundamental question is whether the conditions required for responsibility were instantiated.",
      "This is constitutive-condition neglect: treating a status as diminished or imperfectly realized when the more basic possibility is that its constitutive conditions were absent.",
      "The distinction is crucial. There is a difference between less responsibility and conditions under which responsibility cannot arise.",
      "Likewise, there is a difference between weak agency and the absence of a position from which agency can meaningfully be exercised; between an inadequate answer and the absence of any locus capable of answering; between poor judgment and an environment that has displaced the conditions under which judgment can be formed.",
      "These are not quantitative differences within an already established status. They are questions concerning whether the status was available for occupation at all.",
    ],
  },
  {
    id: "normative-unoccupiability",
    label: "6. The error of normative unoccupiability",
    paragraphs: [
      "This suggests another form of philosophical error: attributing obligations, powers, responsibilities, or forms of agency to positions that no actual subject could occupy under the relevant conditions.",
      "We routinely say that an agent ought to have acted differently. But “could have done otherwise” is only one dimension of the problem.",
      "A more basic issue is whether the normative position presupposed by the attribution was occupiable.",
      "Was there a standpoint from which the relevant reasons could be recognized? Was there sufficient control for the agent to act upon them? Was there an institutional channel through which dissent could matter? Was there an answerable role corresponding to the responsibility being attributed?",
      "If not, the problem is not merely demandingness. The attribution may lack a bearer.",
      "Normative philosophy often specifies duties before investigating whether the structure of the situation contains a position from which those duties could be exercised as duties. This reverses the proper order of explanation.",
      "Before asking what someone should do from a normative position, we sometimes need to ask whether the position exists.",
    ],
  },
  {
    id: "evidential-over-attribution",
    label: "7. Evidential over-attribution",
    paragraphs: [
      "A parallel mistake occurs in epistemic reasoning.",
      "Suppose two researchers have different publication records, two students obtain different marks, or two employees produce different outcomes. We observe: A performs better than B. The difference may be real. But a further inference often follows: A is more competent than B.",
      "That second proposition is not an observation. It is an attribution.",
      "For the observed differential to provide evidence regarding competence, relevant background conditions must be sufficiently controlled or accounted for: resources, opportunities, selection effects, institutional support, workload, social position, measurement quality, and other explanatory factors.",
      "The existence of such factors does not necessarily destroy the evidential significance of the comparison. But it changes its weight.",
      "The error occurs when the comparison is treated as epistemically self-interpreting. It is not.",
      "Observed differences acquire attributional significance only under conditions that make the comparison probative with respect to the property being attributed.",
      "The general point is: difference is not yet diagnosis.",
      "The movement from outcome to property requires an evidential bridge. Failure to examine that bridge produces what might be called infrastructural misattribution: effects partly generated by unequal structures are redescribed as properties of individuals.",
    ],
  },
  {
    id: "composition",
    label: "8. Composition and institutional legitimacy",
    paragraphs: [
      "A similar transition error appears in political and institutional philosophy.",
      "Suppose an administrative body possesses powers P1, P2, and P3, each acquired through legitimate procedures. It may be tempting to infer: each power is legitimate; therefore the integrated capacity P1 + P2 + P3 is legitimate.",
      "But the conclusion does not follow automatically.",
      "Integration can alter the normative object. The capacity to combine datasets, infer behavioural patterns, automate enforcement, or predict future conduct may constitute a form of institutional power that no individual component previously possessed.",
      "The question therefore changes. It is no longer: was each power legitimately acquired? It becomes: has the configuration created a qualitatively new capacity requiring independent legitimation?",
      "This is an instance of composition error in normative authority. Component legitimacy does not necessarily entail configuration legitimacy.",
      "Again, the error lies in a transition. A series of valid lower-order authorizations is treated as sufficient for a higher-order capacity whose normative significance arises only at the level of their combination.",
    ],
  },
  {
    id: "temporal",
    label: "9. Temporal transition error",
    paragraphs: [
      "Status ascent may also occur across time.",
      "Suppose an achievement satisfied demanding standards at t1. At t2, practices, technologies, knowledge, or expectations have changed. How should the achievement now be evaluated?",
      "One possibility is to apply the standards of t2 directly: the achievement would not be exceptional today; therefore it was not exceptional. Another is to freeze evaluation entirely: it was excellent according to the standards of t1; therefore it must remain equally excellent under every subsequent evaluative perspective.",
      "Both moves can be mistaken.",
      "The difficulty is that evaluative predicates may be temporally indexed in different ways. Historical achievement, current utility, technical quality, difficulty, originality, and comparative excellence need not track one another through time.",
      "The error occurs when a standard valid at one temporal location is carried into another without specifying the principle that licenses the transfer.",
      "Temporal evaluation therefore contains its own bridge problem. A change in standards does not automatically rewrite the past. But neither does historical achievement immunize an object from all subsequent evaluation.",
      "The relevant transition must be specified.",
    ],
  },
  {
    id: "proxy-attribution",
    label: "10. Proxy and attribution error",
    paragraphs: [
      "The same structure becomes acute in technologically mediated agency.",
      "Suppose a system produces an output under a person's name. The person selected the system, initiated the process, perhaps supplied the task and ultimately accepted the result.",
      "Who is the author? Who exercised judgment? Who is answerable for the content?",
      "These questions cannot be settled by identifying one observable relation such as initiation, ownership, signature, or causal contribution. Different statuses are involved. Authorship under one description may coexist with absence of agency under another.",
      "A person may be legally responsible for a document without having exercised the epistemic judgment expressed within every part of it. Someone may causally initiate a process without controlling its internal reasoning. A proxy may act for a principal without every property of the proxy's performance being attributable to the principal.",
      "The philosophical error is attributional compression: several distinct relations are collapsed into one because they converge upon the same outcome.",
      "Again, careful analysis requires separating the statuses and specifying the bridge principles governing transitions among them.",
    ],
  },
  {
    id: "why-philosophy",
    label: "11. Why philosophy repeatedly makes these mistakes",
    paragraphs: [
      "Why are unlicensed transitions so persistent?",
      "One reason is that ordinary language compresses levels of analysis. We say: “He did it.” “She decided.” “The institution knew.” “The algorithm discriminated.” “The author argues.” “The evidence shows.” Each sentence may conceal several distinct relations.",
      "Causal contribution becomes agency. Formal position becomes judgment. Correlation becomes evidence. Output becomes authorship. Authorization becomes legitimacy.",
      "Another reason is philosophical economy. Explicitly representing every bridge principle makes arguments longer and less elegant. Where the connection appears intuitive, philosophers often suppress it. Usually this causes no difficulty. But suppressed premises become dangerous precisely where the philosophical controversy concerns the transition they encode.",
      "A third reason is that successful social practices stabilize transitions until they appear natural. When most authors historically wrote their own sentences, authorship and epistemic production could safely travel together much of the time. When administrative powers operated separately, component authorization could approximate capacity authorization. When human decision-makers controlled the relevant information and options, formal decision authority could plausibly track substantive agency.",
      "Technological and institutional change destabilizes these alignments. What previously functioned as a reliable shortcut becomes an invalid inference.",
      "New technologies therefore do not merely create new ethical problems. They reveal old bridge principles that had been invisible because the social conditions supporting them were taken for granted.",
    ],
  },
  {
    id: "prior-conditions",
    label: "12. From bridge principles to prior conditions",
    paragraphs: [
      "The analysis so far produces a deeper hierarchy.",
      "At the first level we have the attribution: B. At the second level we ask what licenses the transition: A + C → B. At the third level we ask what makes C obtain. Call those background conditions D.",
      "The structure becomes:",
      "D → C → [A → B]",
      "D may include institutional organization, technological affordances, epistemic access, social relations, temporal stability, opportunities for action, or available positions of answerability.",
      "This changes the philosophical enterprise. The task is no longer merely to formulate better principles for moving from A to B. We must investigate the conditions under which those principles themselves become applicable.",
      "And beyond this lies a fourth-order question: what produces, maintains, distributes, or destroys those conditions?",
      "At this level, philosophy intersects with institutional design, technological mediation, political structure, and social epistemology.",
      "The philosophical object is no longer simply the agent who acts. It is the architecture within which agency becomes possible.",
    ],
  },
  {
    id: "licensed-transition-principle",
    label: "13. A general principle of licensed transition",
    paragraphs: [
      "We can now formulate a general methodological principle.",
      "Licensed Transition Principle: an attribution of a higher-order normative, epistemic, evaluative, or agential status B on the basis of status A is warranted only where the conditions that give A B-conferring significance are independently satisfied.",
      "This principle is intentionally modest. It does not specify what the relevant conditions must be in every domain. Nor does it imply that all philosophical inference requires elaborate formal reconstruction. Its purpose is diagnostic.",
      "Whenever we encounter an inference of the form “A, therefore B”, we should ask: Is B genuinely contained within A, or has the argument crossed a status boundary? If a boundary has been crossed, what principle licenses the transition? Under what conditions is that principle applicable? Are those conditions present in the case at hand? What social, institutional, technological, or temporal structures determine whether those conditions obtain?",
      "These questions expose a family of errors that otherwise appear unrelated.",
    ],
  },
  {
    id: "significance",
    label: "14. The philosophical significance of the transition",
    paragraphs: [
      "There is a broader methodological implication.",
      "Philosophy often concentrates its scrutiny at the ends of arguments. Are the premises plausible? Is the conclusion acceptable? Are the concepts clearly defined? But an argument can contain plausible premises and an intelligible conclusion while still failing at the point connecting them.",
      "This suggests that some of philosophy's deepest mistakes occur neither in what we start with nor in where we end. They occur in what we permit ourselves to cross.",
      "A causal relation becomes responsibility. A qualifying property becomes a ranking property. A statistical difference becomes a personal attribute. A formal role becomes substantive agency. A legitimate component becomes a legitimate configuration. A historical value becomes a temporally unrestricted value.",
      "At each point, the transition can look natural because the two statuses have historically travelled together.",
      "But co-occurrence is not entailment. Functional association is not conceptual identity. And institutional convenience is not philosophical justification.",
      "The burden of philosophy is therefore not merely to classify statuses correctly. It is to police the transitions among them.",
    ],
  },
  {
    id: "conclusion",
    label: "Conclusion: the philosophy of prior conditions",
    paragraphs: [
      "The general philosophical question with which we began was: what kinds of philosophical error arise when we reason from an observed status to a higher-order normative, epistemic, or agential status without examining the conditions that license the transition?",
      "The answer is that several apparently different errors emerge from the same underlying structure.",
      "We omit necessary bridge principles. We allow properties to migrate between normative functions. We mistake weakened conditions for absent constitutive conditions. We attribute responsibilities to unoccupiable positions. We transform structural outcomes into personal properties. We infer configuration legitimacy from component legitimacy. We transport evaluative standards across time without temporal justification. And we compress distinct forms of authorship, agency, control, and answerability into a single attribution.",
      "What unites these errors is not their subject matter. It is their architecture. They all involve an unlicensed transition between statuses.",
      "This suggests a broader conception of philosophical inquiry. Before asking whether responsibility, authority, priority, competence, authorship, value, or agency should be attributed, we should ask what must already be true for such attribution to be warranted.",
      "The resulting project is a philosophy of prior conditions. Its characteristic movement is backward: from attribution to transition, from transition to licensing condition, from licensing condition to the structures that make that condition possible.",
      "The governing question is therefore not merely: what follows from what? It is:",
      "What must already be true before one thing is entitled to count as another?",
      "That question applies across ethics, epistemology, social philosophy, political philosophy, philosophy of action, and the philosophy of technology.",
      "And it directs philosophical attention toward a surprisingly neglected location: the space between the premise and the status we think it licenses.",
    ],
  },
];

const EMPHATIC = new Set([
  "What must be true for the transition from A to B to be licensed?",
  "What must already be true before one thing is entitled to count as another?",
  "Were the conditions under which meaningful control, judgment, or answerability could occur available to S in the first place?",
  "Call this status ascent.",
  "C is the bridge.",
  "Call this property migration.",
]);

function MethodPage() {
  return (
    <article>
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Method
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            The Error Lies in the Transition
          </h1>
          <p className="mt-4 font-display text-xl italic text-foreground/80">
            On unlicensed ascent in philosophical reasoning
          </p>
          <p className="mt-8 font-display text-lg italic leading-relaxed text-foreground/80">
            A methodological statement: what must be true for the transition
            from one status to another to be licensed — and what goes wrong
            when we never ask.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <nav
          aria-label="Method sections"
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
              if (FORMULAS.has(p)) {
                return (
                  <p
                    key={i}
                    className="mt-6 font-display text-xl italic leading-relaxed text-foreground md:text-2xl"
                  >
                    {p}
                  </p>
                );
              }
              if (EMPHATIC.has(p)) {
                return (
                  <p
                    key={i}
                    className="mt-6 font-display text-lg italic leading-relaxed text-foreground/90"
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
            This statement formalizes the method behind the{" "}
            <Link
              to="/research-premises"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              Research Premises
            </Link>
            . The same diagnostics are applied across the{" "}
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
