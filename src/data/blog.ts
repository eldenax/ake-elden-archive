export type BlogSection = {
  heading: string;
  paragraphs: string[];
  concepts?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  description: string;
  lede: string;
  sections: BlogSection[];
  closing: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "the-other-who-resists",
    title: "The Other Who Resists: AI, Relational Friction, and the Conditions of Moral Formation",
    date: "2026-10-04",
    readingTime: "16 min read",
    description:
      "Moral formation has always been mediated. The question is which forms of mediation preserve the otherness, correction, and answerability through which persons learn to judge — and whether highly accommodating artificial interlocutors do.",
    lede: "Recent criticism of artificial intelligence has moved beyond what AI systems do toward how sustained interaction with them may form their users. My earlier account of creaturehood under conditions of optimization argued that technologies designed to reduce uncertainty, cognitive burden, and existential difficulty may externalize the practices of judgment through which moral agency is cultivated. This article addresses a difficulty that account left insufficiently examined: moral formation has never occurred within an isolated individual. It has always been mediated. The question is therefore not whether AI mediates formation, but what kind of mediation it is.",
    sections: [
      {
        heading: "1. Ethics begins before the decision",
        paragraphs: [
          "Much contemporary discussion of artificial intelligence begins with an act. A recommendation is made, a diagnosis generated, a text written, a decision delegated, or an outcome produced. Ethical analysis then asks whether the result was accurate, fair, transparent, autonomous, or attributable to an appropriate human agent.",
          "These questions are indispensable. They may nevertheless begin too late.",
          "Before a person can exercise judgment, that person must have become capable of judging. Before responsibility can be assigned for an action, there must exist an agent capable of recognizing reasons, interpreting situations, responding to others, revising their commitments, and bearing the claims that others make upon them. These capacities are not given at birth in finished form. They are acquired, slowly and unevenly, through a history.",
          "That history is the domain of moral formation. An ethics of artificial intelligence that attends only to decisions treats the agent as already constituted and asks how the technology bears on what the agent does. A formative ethics asks a prior question: how does sustained life within a technological environment bear on what kind of agent a person becomes? The first question concerns the use of capacities. The second concerns their conditions.",
        ],
        concepts: ["exercisable-answerability", "judgment-gap"],
      },
      {
        heading: "2. Formation has always been mediated",
        paragraphs: [
          "The argument of my earlier work can be misread as nostalgia for an unmediated self — a person who once judged alone and now leans on machines. No such person has ever existed. Human beings are formed through relationships, traditions, institutions, languages, practices, and communities. A child learns what counts as cruelty from parents, siblings, stories, and playground disputes. An adult learns what fidelity requires from marriages, friendships, and congregations, and from the failures of each. The vocabulary in which anyone deliberates was inherited before it was used.",
          "Formation is therefore necessarily mediated. Books mediate it, liturgies mediate it, teachers and confessors mediate it, and so do schools, legal systems, and professional guilds. If the objection to AI were simply that it stands between a person and their judgment, the objection would condemn every tradition through which judgment has ever been learned.",
          "The relevant distinction is not between mediated and unmediated formation. It is between mediation as such and particular configurations of mediation. Some mediators transmit a world that does not bend to the learner. Others are shaped around the learner from the outset. The difference matters because judgment is learned in part by meeting what does not bend.",
        ],
        concepts: ["epistemic-infrastructure"],
      },
      {
        heading: "3. Formative alterity",
        paragraphs: [
          "I propose that mature moral agency depends upon what I call formative alterity: sustained exposure to persons and practices whose claims upon us are not reducible to our antecedent preferences.",
          "The point is not that others are useful sources of information. It is that another person can resist us. A friend can misunderstand us and require that we explain ourselves better. A colleague can refuse a request we thought reasonable. A child can need something from us at the precise moment we wanted to attend to something else. A person we have wronged can withhold forgiveness, and in doing so make visible that our account of what happened is not the only account. In each case, the other is someone whose good is not exhausted by our purposes.",
          "Friendship, disagreement, correction, dependence, forgiveness, obligation, and reconciliation are formative partly for this reason. They place us before a perspective that is independently situated — grounded in a life with its own history, vulnerabilities, and stakes — and that cannot simply be adjusted to suit us. What we learn in such encounters is not only content. We learn that our preferences are not the measure of the situation, that we can be wrong in ways we did not anticipate, and that the claims of others have standing whether or not we find them convenient.",
          "The classical virtue tradition treats practical wisdom as something acquired through experience and habituation rather than through the possession of rules. On the account developed here, a central part of that experience is relational: phronesis is learned among others who are not under our control. Theologically, the same point can be put in terms of creaturehood. A creature is a life received rather than assembled, and it is received in part through others — through dependence on parents, neighbours, and communities whose existence precedes and exceeds the self. To be formed as a creature is to be formed by what one did not choose and cannot fully manage.",
        ],
        concepts: ["exercisable-answerability", "post-mimetic-relationality"],
      },
      {
        heading: "4. Relationally formative friction",
        paragraphs: [
          "Encounters with formative alterity generate what I call relationally formative friction. Elsewhere I have argued that institutional friction — delay, checkpointing, redundancy, dispute — is not simply inefficiency but the temporal and relational room in which judgment and answerability are exercised. Relationally formative friction is the interpersonal counterpart of that structure.",
          "It has several recognizable forms. There is the friction of misunderstanding, which requires the work of articulation. There is the friction of disagreement, which requires that one either give reasons or revise one's view. There is the friction of correction, which requires that one bear being told one was wrong. There is the friction of dependence, which requires that one accept limits on one's own sufficiency. There is the friction of obligation, which requires that one act when one would rather not. And there is the friction of reconciliation, which requires that one remain in relation after harm has been done.",
          "None of these is pleasant in itself, and not all friction is formative. Contempt, domination, and abuse also resist us, and they deform rather than form. What distinguishes relationally formative friction is that the resistance comes from someone who remains, in principle, a party to a shared life — someone to whom we are answerable and who is answerable to us. The friction is formative because it occurs within a relationship that can bear it.",
        ],
        concepts: ["systemic-friction", "exercisable-answerability"],
      },
      {
        heading: "5. Accommodative mediation",
        paragraphs: [
          "Generative AI introduces a distinctive possibility. Systems can increasingly occupy conversational, advisory, interpretive, and companion-like roles — the roles in which, for most of human history, other persons have stood. They do so while being personalized around the user and structurally incapable of standing before the user as another vulnerable and independently situated human life.",
          "I call this accommodative mediation: mediation that can simulate many of the phenomenological features of relationship while selectively diminishing the alterity, reciprocity, and answerability through which relationships become morally formative.",
          "The phenomenological features are real. A conversational system attends to what one says, responds in natural language, remembers prior exchanges, expresses something that reads as concern, and is always available. Many of the outward signs by which we recognize being addressed are present. What is diminished is precisely what generates formative friction. The system has no life of its own that one's actions could damage. It does not need anything from the user that the user would have to give at cost. It cannot be wronged in a way that would require reconciliation. Its disagreement, where it occurs, is not grounded in an independent situation and can usually be dissolved by rephrasing the request, starting a new conversation, or switching systems.",
          "Accommodative mediation is not defined by flattery, although flattery is one of its forms. A system may be configured to challenge, question, or correct. The issue is structural rather than tonal: the challenge arrives from an interlocutor whose stance is ultimately set by design, commercial incentive, and the user's continued engagement, rather than by a perspective that holds its ground because it is someone's own.",
        ],
        concepts: ["automated-certainty", "post-mimetic-relationality"],
      },
      {
        heading: "6. Why the danger is not replacement",
        paragraphs: [
          "The familiar worry about AI and judgment is replacement: machines will decide in place of persons, and human judgment will atrophy through disuse. That worry is real, and my earlier work addressed a version of it. But the relational argument identifies a different and less visible danger.",
          "The danger is not simply that machines replace human judgment. It is that environments of highly responsive artificial interlocution may change the relational conditions under which judgment itself is learned. A person may continue to make every decision for themselves while the field of relationships in which they learned to decide becomes progressively more accommodating — less likely to misunderstand, refuse, require, or correct them in ways they cannot easily exit.",
          "This shift need not involve any single harmful interaction. Each conversation may be helpful, accurate, and kind. The concern lies in the ecology: in the proportion of a life's interlocution that is conducted with partners who cannot resist in the formative sense, and in what happens to a person's capacity to bear human resistance when that proportion grows. If one becomes accustomed to interlocutors who are always available, endlessly patient, and adjustable at will, the ordinary frictions of human relationship may come to feel like malfunctions rather than conditions of growth.",
          "Formation is cumulative and largely invisible while it is happening. For that reason the effects of accommodative mediation would be difficult to detect in any single outcome measure. They would appear, if at all, as a gradual change in what people find tolerable in one another.",
        ],
        concepts: ["judgment-gap", "systemic-friction"],
      },
      {
        heading: "7. Objections and limits",
        paragraphs: [
          "Three objections deserve a response.",
          "First, human relationships are themselves often accommodating. People choose friends who agree with them, sort themselves into like-minded communities, and avoid those who make demands. This is true, and it shows that accommodative tendencies are not new. But it does not show that their technological amplification is harmless. Human accommodation is limited by the fact that other people have their own lives; even a chosen friend eventually needs something, disagrees about something, or fails us. Accommodative mediation removes that limit by design.",
          "Second, AI systems can be built to introduce friction: to question users, decline requests, or present opposing views. Such design choices matter and should be encouraged. They do not, however, supply alterity. Friction introduced by design remains within the user's power to exit, and it does not arise from a perspective with its own stakes. Designed friction can scaffold judgment; it cannot substitute for being answerable to someone.",
          "Third, artificial companions may help people who are isolated, anxious, or without other resources. For some users an accommodating interlocutor may be the most available form of support, and in some cases it may help a person return to human relationships. The argument here does not deny this. It insists only that the question of benefit be asked at the level of formation and ecology — whether a given use preserves or erodes a person's capacity for relationships with others who can resist them — and not only at the level of momentary wellbeing.",
        ],
        concepts: ["post-mimetic-relationality"],
      },
      {
        heading: "8. A relational extension of formative anthropology",
        paragraphs: [
          "The argument amounts to a relational extension of formative anthropology. Moral agency is not only formed through practices of judgment that an individual might perform or outsource. It is formed through relationships in which others resist, require, correct, depend upon, and forgive us. Technologies can therefore affect moral formation not only by taking over tasks, but by reconfiguring the relational ecologies in which persons are formed.",
          "This has consequences for how AI ethics frames its questions. The dominant framework asks whether artificial systems respect human autonomy: whether users are informed, unmanipulated, and free to choose. Those questions are necessary, but a system can satisfy all of them and still be formatively corrosive, because it can respect a person's choices while gradually changing the kind of chooser they become.",
          "A formative AI ethics would add a further set of questions. Does the relational ecology a system creates preserve exposure to otherness — to perspectives that are not shaped around the user? Does it preserve correction that the user cannot simply dismiss? Does it preserve dependence on, and obligation to, other human beings? Does it preserve answerability — a relationship in which the user must give an account to someone whose life is affected by what they do? And does it make the difference between an accommodating interlocutor and another person visible to the user, rather than obscuring it?",
          "These are not questions about any single system. They are questions about environments, and about the proportion of a life lived within them.",
        ],
        concepts: ["exercisable-answerability", "epistemic-infrastructure", "systemic-friction"],
      },
    ],
    closing: [
      "The other who resists is not an obstacle to moral formation but one of its conditions. Persons become capable of responsible agency by being exposed to claims they did not author, from lives they cannot manage, within relationships they cannot simply exit. Accommodative mediation does not abolish that exposure, but it can thin it — and it can do so while feeling like relationship.",
      "The Other Who Resists: AI, Relational Friction, and the Conditions of Moral Formation is a working paper. It extends the argument of Creaturehood Under Conditions of Optimization (Studies in Christian Ethics, 2026) from the externalization of judgment to the relational conditions under which judgment is learned.",
    ],
  },
  {
    slug: "research-premises",
    title: "Research Premises: A Philosophy of Licensed Transitions",
    date: "2026-09-10",
    readingTime: "11 min read",
    description:
      "The governing question of the research programme: under what conditions is the transition from one epistemic, normative, evaluative, or agential status to another genuinely licensed?",
    lede: "For some time I have been working across problems that appear, at first sight, to belong to different areas of philosophy: responsibility, agency, standing, institutional authority, epistemic judgment, evaluation, technological mediation, and social comparison. Increasingly, however, I have come to think that these are not separate projects. They are manifestations of the same philosophical problem: under what conditions is the transition from one status to another genuinely licensed?",
    sections: [
      {
        heading: "The central question",
        paragraphs: [
          "The central question is this: under what conditions is the transition from one epistemic, normative, evaluative, or agential status to another genuinely licensed? This question concerns something philosophy often treats too quickly: the move from one kind of fact to another kind of conclusion.",
          "We observe an action and attribute responsibility. We identify moral standing and infer priority. We observe a difference in outcomes and infer a difference in competence. We identify authorship and infer epistemic control. We recognize institutional authority and infer legitimate capacity. We evaluate an achievement at one time and assume that the same evaluative standard can be carried unchanged into another.",
          "In each case, the philosophical problem is not simply whether the first statement is true or whether the second statement is true. The problem lies in the transition between them.",
        ],
        concepts: ["inferential-license", "judgment-gap"],
      },
      {
        heading: "From first-order questions to second-order philosophy",
        paragraphs: [
          "A first-order philosophical question asks something like: Is this person responsible? Does this person have moral standing? Is this achievement valuable? Is this exercise of power legitimate? These are important questions. But they are not usually where my own interest begins.",
          "I am increasingly interested in the second-order question: What would have to be true for us to be entitled to move from the relevant facts to that conclusion? Suppose, for example, that an entity has moral standing. Does it follow that it should receive greater priority when claims conflict? No. Standing and priority answer different questions. Standing concerns admission into a normative domain. Priority concerns comparative ordering within that domain. A property that is sufficient to establish standing does not automatically acquire priority-conferring force. Something additional is required. There must be a bridge principle that licenses the transition.",
          "Much philosophical reasoning depends upon such bridges. Yet the bridges themselves are often left implicit.",
        ],
        concepts: ["partition-thesis", "ethical-disclosure"],
      },
      {
        heading: "Third-order questions: when can the bridge itself operate?",
        paragraphs: [
          "The problem becomes more interesting when we move one order higher. Even if we specify a bridge principle, we can ask: What conditions must already obtain before that principle can legitimately be applied?",
          "Consider responsibility. A conventional philosophical discussion might ask whether responsibility requires knowledge, control, intention, or responsiveness to reasons. But there is a prior question: Were the conditions under which control, judgment, and answerability could arise actually available to the agent? This changes the structure of the problem. Instead of asking whether responsibility has been weakened, mitigated, or transferred, we may need to ask whether the conditions necessary for responsibility ever came into existence.",
          "The distinction matters especially in technologically mediated environments. A person may remain formally present in a decision-making process while the architecture surrounding that person progressively removes the possibility of meaningful judgment, contestation, or intervention. In such a case, continuing to attribute responsibility merely because the person occupies the formal role may be a category mistake. The philosophical issue is not simply diminished responsibility. It is the possibility that responsibility cannot arise under certain conditions.",
        ],
        concepts: ["exercisable-answerability", "judgment-gap"],
      },
      {
        heading: "Fourth-order philosophy: the architecture of the conditions",
        paragraphs: [
          "The next step is to ask what produces these conditions. Here the philosophical focus moves from individual agents to institutions, technologies, temporal structures, and social environments. The question becomes: What kinds of social and institutional architecture determine whether the conditions for judgment, agency, responsibility, or evaluation are present?",
          "This is why technological mediation interests me philosophically. My project is not fundamentally about artificial intelligence. AI is one particularly revealing case because it makes visible something that has always been philosophically important: the extent to which agency and judgment depend upon structures that precede the immediate act.",
          "Predictive systems can shape what appears as an option before deliberation occurs. Administrative infrastructures can accumulate capacities that were never legitimized as a unified power. Digital standards can transform structural constraints into apparent personal failures. Institutions can retain formal procedures for responsibility while removing the practical conditions of answerability. The important philosophical object is therefore not the technology itself. It is the architecture of the conditions under which normative and epistemic statuses become possible.",
        ],
        concepts: ["epistemic-infrastructure", "systemic-friction"],
      },
      {
        heading: "A fifth-order problem: philosophy's unnoticed transitions",
        paragraphs: [
          "This eventually leads to a more general methodological claim. Many philosophical errors may arise not because the premises are obviously false and not because the conclusions are inherently incoherent. They arise because the transition between the two has not been adequately examined.",
          "Abstractly, philosophical reasoning often takes the form A → B: a fact, property, relation, or event is identified, and a further normative or epistemic status is inferred. But the real structure may be closer to A + C → B, where C represents the conditions that license the transition. Once this is recognized, another question immediately appears: What makes C available? That introduces a further level: D → C → [A → B]. Here D may represent institutional, social, temporal, technological, or agential structures.",
          "This, I think, captures the deeper architecture of my research. The project is not simply a philosophy of action. Nor is it simply a theory of responsibility, technology, institutions, or social epistemology. It is a philosophy of the conditions under which transitions between statuses become warranted.",
        ],
        concepts: ["second-order-provenance"],
      },
      {
        heading: "Conditions, transitions, attribution",
        paragraphs: [
          "Three concepts increasingly summarize the project for me: conditions, transitions, attribution. We attribute responsibility, competence, authority, value, standing, priority, authorship, or agency. But such attribution depends upon transitions from one kind of fact to another kind of status. And those transitions depend upon prior conditions that may be social, temporal, institutional, epistemic, or agential.",
          "The philosophical task is therefore not merely to ask: What is true of this person, act, institution, or outcome? It is also to ask: What licenses us to move from what we know to what we attribute? And then, one level deeper: What must already be true for that licensing relation itself to exist?",
          "I currently think of this research programme as a philosophy of licensed transitions, closely connected to what might also be called a philosophy of prior conditions. Its governing question is simple to state: What must already be true before a transition in normative, epistemic, evaluative, or agential status is warranted? That question is deliberately general. It can be asked about moral responsibility and social standing, about institutions and technologies, about evaluation and comparison, about authorship and agency. The domains differ. The underlying philosophical structure may be the same. And that is increasingly what I think my philosophical project is about.",
        ],
        concepts: ["inferential-license", "exercisable-answerability", "second-order-provenance"],
      },
    ],
    closing: [
      "This note sets out the governing premise of the research programme: that the philosophical task is to examine the conditions under which transitions between normative, epistemic, evaluative, and agential statuses are warranted.",
      "The same structure is explored across the six problem areas of the programme, the concept pages, and the publications listed on this site.",
    ],
  },
  {
    slug: "when-responsibility-cannot-arise",
    title: "When Responsibility Cannot Arise",
    date: "2026-09-07",
    readingTime: "5 min read",
    description:
      "A new article in AI and Ethics argues that algorithmic mediation can erode the preconditions of moral imputability itself — so that responsibility does not merely go unassigned but cannot arise at all.",
    lede: "Responsibility gaps are usually described as failures of attribution: something went wrong, and no one can be made to answer for it. A new article in AI and Ethics argues that algorithmic mediation produces something more fundamental — situations in which responsibility cannot arise in the first place, because the conditions that make an act imputable to an agent have been eroded before the outcome occurs.",
    sections: [
      {
        heading: "Beyond the responsibility gap",
        paragraphs: [
          "The standard worry about automated decision-making is the responsibility gap: outcomes produced jointly by humans and systems that no single party can be held to. The article argues this framing is too optimistic. It assumes there is still a responsible party to be found — the difficulty is merely locating them.",
          "Algorithmic mediation can instead operate upstream, on the preconditions of imputability itself. When the informational basis, the range of perceived options, and the moment of judgment are all formatted by a system before a person acts, the resulting act may not be attributable to anyone in the way responsibility requires.",
        ],
        concepts: ["inferential-license", "judgment-gap"],
      },
      {
        heading: "Conditional responsibility requirements",
        paragraphs: [
          "The analysis builds on conditional responsibility requirements: the conditions that must hold for an outcome to count as something an agent did, rather than something that happened through them. Control, awareness, and the capacity to have done otherwise are not optional extras; they are what make imputation possible.",
          "When a system's outputs arrive pre-ordered, pre-weighted, and pre-interpreted, these conditions can fail quietly. The human in the loop still clicks, approves, or signs — but the act no longer bears the structure that would make it theirs.",
        ],
        concepts: ["exercisable-answerability", "second-order-provenance"],
      },
      {
        heading: "Misfired imputation",
        paragraphs: [
          "The article names the resulting failure misfired imputation: responsibility is assigned after the fact to parties who could not have been responsible, because the conditions for imputation were already absent. Institutions then answer a structural problem with an individual verdict.",
          "The sepsis-alerting case developed in the article shows the pattern. A clinician follows a system's recommendation; the patient is harmed; the clinician is held responsible. Yet the salience, timing, and framing that shaped the judgment were produced upstream, by infrastructure no one at the bedside controlled or could reconstruct.",
        ],
        concepts: ["epistemic-infrastructure", "systemic-friction"],
      },
      {
        heading: "What this changes",
        paragraphs: [
          "If responsibility can fail to arise, then assigning it more carefully is not a remedy. The practical question shifts from liability after the fact to design before it: how to preserve the conditions under which the acts of persons remain imputable to them when decisions are algorithmically mediated.",
          "This connects the article to the wider programme. Inferential license concerns who may conclude; the judgment gap concerns what separates output from judgment; this article concerns what happens to responsibility itself when mediation reaches deep enough into the formation of the act.",
        ],
        concepts: ["inferential-license", "exercisable-answerability"],
      },
    ],
    closing: [
      "When Responsibility Cannot Arise: Algorithmic Mediation and the Preconditions of Moral Imputability is published in AI and Ethics (2026). It extends the programme's account of judgment and answerability to the conditions that must hold before responsibility can be attributed at all.",
      "The full article is available via DOI: 10.1007/s43681-026-01359-x.",
    ],
  },
  {
    slug: "comparative-desire-and-social-violence",
    title: "Comparative Desire and Social Violence",
    date: "2026-08-29",
    readingTime: "6 min read",
    description:
      "A new article in Philosophy & Social Criticism argues that comparative relations do not merely shape responses to unequal outcomes but constitute the sense of entitlement through which those outcomes are experienced as unfair.",
    lede: "Social experiences of unfairness resist standard distributional accounts. A new article in Philosophy & Social Criticism develops the mechanism of comparative entitlement formation: the process by which comparative relations do not merely shape responses to unequal outcomes but participate in constituting the sense of entitlement through which those outcomes are experienced as unfair. Drawing on Girard's mimetic desire, Festinger's social comparison theory, Honneth's recognition, and empirical work on inequity aversion, the paper traces the pathway from comparison to grievance and, under determinate conditions, to displacement onto vulnerable third parties.",
    sections: [
      {
        heading: "The gap between distribution and grievance",
        paragraphs: [
          "Egalitarian political philosophy has moved from the distribution of bundles toward the quality of social relations, but it has not supplied an account of how a comparative sense of entitlement is formed in the first place. The recent literature on political grievance, meanwhile, documents comparative resentment in detail without theorising the mechanism that generates it.",
          "The article sits between these two literatures and argues that the missing link is comparative entitlement formation. Comparative relations are not a background condition against which unfairness is judged; they are part of what constitutes the felt claim that an outcome is unfair.",
        ],
        concepts: ["comparative-entitlement-formation"],
      },
      {
        heading: "The mechanism",
        paragraphs: [
          "The proposed mechanism links proximate comparison, the felt claim it generates, grievance, and — under determinate conditions — displacement onto vulnerable third parties. It is not a chain of separate psychological events but a single social configuration in which each stage is shaped by the others.",
          "Infrastructures of comparison — feeds, rankings, dashboards, metrics — do not simply display what others have. They continuously measure proximity and similarity, and in doing so they format inequality as a felt entitlement whose frustration has a recognisable affective shape. The claim is not that people compare and then become resentful; it is that the comparison itself helps constitute what counts as owed.",
        ],
        concepts: ["comparative-entitlement-formation", "post-mimetic-relationality"],
      },
      {
        heading: "Why unfairness feels irrational",
        paragraphs: [
          "The characteristic irrationality of unfairness experience — its disproportionate intensity under conditions of social proximity and similarity — has often been treated as a failure of rational judgement. The article argues instead that this intensity reflects the mechanics of comparative entitlement formation.",
          "When the comparator is close and similar, the comparison is not a neutral measurement; it is a relation that structures the self's own sense of what it can claim. The heat of the response is therefore not a cognitive distortion but a feature of the social-psychological configuration that produces the entitlement in the first place.",
        ],
        concepts: ["comparative-entitlement-formation"],
      },
      {
        heading: "Scapegoating as displacement",
        paragraphs: [
          "The article specifies the conditions under which frustrated comparative entitlements are displaced onto vulnerable third parties. This is the scapegoat dynamic: not an archaic ritual but a structural possibility of comparative social relations.",
          "Displacement is not a separate pathology. It is the continuation of the same mechanism by other means: when the party held responsible cannot be the party that generated the grievance, the affective charge is redirected toward those who can be made to bear it. The result is a form of social violence whose origins lie in the basic structure of comparison itself.",
        ],
        concepts: ["post-mimetic-relationality"],
      },
      {
        heading: "Second-order costs",
        paragraphs: [
          "The harms produced when comparative entitlements are frustrated are second-order costs of institutional arrangements. They are generated by distributive structures, borne by parties outside the initial justification, and cannot be externalised from the basic structure.",
          "This reframes the moral economy of unfairness. The question is no longer only who gets what, but whose comparative position is produced by the arrangement and who pays the costs when the resulting entitlements cannot be satisfied. The article offers evidential criteria for identifying these products and marks the limits beyond which the mechanism does not extend.",
        ],
        concepts: ["comparative-entitlement-formation"],
      },
    ],
    closing: [
      "Comparative Desire and Social Violence is published in Philosophy & Social Criticism (2026). It develops the concept of comparative entitlement formation that runs through the wider programme on desire, comparison, and social relations, and connects it to the empirical literatures on inequity aversion and social comparison.",
      "The full article is available via DOI: 10.1177/01914537261481740.",
    ],
  },
  {
    slug: "when-responsibility-is-real-exercisable-answerability",
    title: "When responsibility is real: exercisable answerability",
    date: "2026-08-24",
    readingTime: "5 min read",
    description:
      "Exercisable answerability distinguishes being formally assigned responsibility from actually being able to answer for what has been done — and explains why retaining a human decision-maker is not enough to preserve human judgment.",
    lede: "Exercisable answerability distinguishes being formally assigned responsibility from actually being able to answer for what has been done. A person or institution is answerable only when it can reconstruct the relevant judgment, explain why the reasons counted as they did, defend the ordering under challenge, and revise the conclusion when those reasons fail. Responsibility can therefore remain nominally human while the conditions required to exercise it have migrated into systems, procedures, or infrastructures that no individual can adequately reconstruct.",
    sections: [
      {
        heading: "Assigned versus exercisable",
        paragraphs: [
          "It is possible to be responsible on paper and unanswerable in practice. Org charts, job titles, and signature fields assign responsibility; they do not guarantee that the person who bears it can actually discharge it. Exercisable answerability is what separates the two.",
          "The distinction matters because automation is often introduced under the assurance that a human remains in charge. But remaining in charge is not the same as being able to answer. The human may be the last node in a chain whose earlier links — the thresholds, rankings, and categories that shaped the decision — have already been settled out of reach.",
        ],
        concepts: ["exercisable-answerability"],
      },
      {
        heading: "What it takes to answer",
        paragraphs: [
          "To answer for a decision is not merely to acknowledge it. It is to reconstruct the judgment that produced it: to show why the reasons counted as they did, to defend the ordering under challenge, and to revise the conclusion when those reasons fail. These are not procedural formalities; they are the conditions that make responsibility a real standing rather than an empty label.",
          "When these conditions are distributed across systems that no one person can traverse, the formal assignment of responsibility becomes a kind of fiction. The responsible party is left saying, in effect, that the system decided — and saying it in the first person does not make it a judgment.",
        ],
        concepts: ["exercisable-answerability"],
      },
      {
        heading: "Why human-in-the-loop is not enough",
        paragraphs: [
          "The judgment gap opens between what a system produces and what would be required for the same act to count as an answerable judgment. Seating a person at the end of that process does not close the gap. The person may approve, dissent, or override, but if the conditions of judgment have already been stripped from the process, their presence is a vestige rather than a restoration.",
          "This is why exercisable answerability is a stronger test than human oversight. It asks not whether a human was involved, but whether a human could still occupy the position from which the decision can be owned.",
        ],
        concepts: ["judgment-gap"],
      },
      {
        heading: "The deeper failure than opacity",
        paragraphs: [
          "Second-order provenance asks where the ordering behind a decision came from — the threshold, ranking, or category that turned data into a decisive reason. A system may be fully transparent at the first order and yet unanswerable at the second.",
          "Exercisable answerability goes a step further. Even if the ordering is traceable, there must still be someone positioned to defend it. An institution can know which system produced a decision and still lack anyone capable of answering for why that decision deserved to count. The failure is not ignorance; it is the absence of a competent respondent.",
        ],
        concepts: ["second-order-provenance"],
      },
      {
        heading: "Institutional migration",
        paragraphs: [
          "The conditions of answerability migrate gradually. A workflow is streamlined; a checkpoint is removed; a threshold is set by a model whose training data no one can fully inspect. Each step may be defensible on its own. Cumulatively, they move the institutional capacity to answer into infrastructure that no individual can reconstruct.",
          "Systemic friction is the companion idea here. The delays, redundancies, and disputes that automation removes are often the very spaces in which judgment and answerability are exercised. When they are designed away, responsibility does not disappear; it becomes unexercisable.",
        ],
        concepts: ["epistemic-infrastructure", "systemic-friction"],
      },
    ],
    closing: [
      "Exercisable answerability therefore belongs to the same movement as the other concepts in this programme. Inferential license is relocated; the judgment gap opens; second-order provenance fails; the friction that would have sustained answerability is removed; and the person who remains nominally responsible no longer occupies the position from which the decision can be defended.",
      "The practical question is not how to keep a human in the loop, but how to keep the loop answerable — how to design institutions in which the standing to answer remains exercisable, not merely assigned.",
    ],
  },
  {
    slug: "the-vocabulary-in-one-piece",
    title: "The Vocabulary in One Piece: How the Concepts Fit Together",
    date: "2026-08-11",
    readingTime: "9 min read",
    description:
      "A single walk through the working vocabulary of the programme — inferential license, judgment gap, second-order provenance, the partition thesis, ethical disclosure, comparative entitlement formation, post-mimetic relationality, epistemic infrastructure, systemic friction, and automated certainty — and how each concept depends on the others.",
    lede: "The concepts developed in this programme are not a glossary. They are the joints of one argument about what has to be in place before a decision can count as a judgment for which someone is answerable — and what happens to those conditions when the work of deciding is redistributed into infrastructure.",
    sections: [
      {
        heading: "Where the argument begins: license, not accuracy",
        paragraphs: [
          "The programme does not begin with the question of whether automated systems reason well. It begins one step earlier, with the question of who is permitted to draw a conclusion at all, in what setting, and to whom they must answer. That permission is what inferential license names: a normative standing, not a cognitive capacity.",
          "Once license is in view, a familiar puzzle changes shape. A system that outputs a correct conclusion has not thereby acquired the standing to conclude. What automation does is not principally to accelerate inference but to relocate license — quietly, and usually without anyone deciding that it should be relocated.",
          "The judgment gap is the direct consequence. It is the interval between what a system produces and what the same act would require in order to be a judgment someone owns. The gap does not close with better accuracy. It closes only when the act is returned to a structure in which addressability, stake, and standing can be recovered — which is why human-in-the-loop arrangements so often fail: they seat a person at the end of a process from which the conditions of judgment have already been stripped.",
        ],
        concepts: ["inferential-license", "judgment-gap"],
      },
      {
        heading: "What answerability requires: provenance at the second order",
        paragraphs: [
          "If judgment is to be owned, its normative footing must be traceable. First-order provenance tells us where data came from. Second-order provenance asks the harder question: where did the orderings come from that make those data matter — the threshold, the ranking, the category that turned an output into something decisive?",
          "Systems routinely satisfy the first requirement while failing the second. Every input is documented; no addressable party ever authored the ordering under which the output counts. An institution in that position cannot answer for the decisions its systems produce, however complete its audit trail.",
        ],
        concepts: ["second-order-provenance"],
      },
      {
        heading: "Two questions kept apart: standing and ordering",
        paragraphs: [
          "The partition thesis performs a separation that normative theory tends to blur. Criteria of moral standing settle who enters the moral field. They do not, by themselves, generate any priority among those admitted. Standing is a threshold notion; ordering is a relational one.",
          "Conflating them produces two symmetrical errors: treating admission as if it entailed priority, and treating disputes about ordering as if they were disputes about standing. Debates about the moral status of artificial systems are a live case, and the thesis is developed against the most inclusive standing criteria available precisely because even they supply no internal principle of priority.",
        ],
        concepts: ["partition-thesis"],
      },
      {
        heading: "Before principles: whether anything shows up as a claim",
        paragraphs: [
          "Ethical disclosure moves the question upstream of principles and reasons. Before a norm can be applied, a situation has to appear as ethically laden — a claim has to be disclosed as a claim, rather than registering as a fact, a preference, or a datum.",
          "This is where mediation does its quietest work. A system can foreclose disclosure without contradicting a single ethical principle: nothing arrives as a claim in the first place, so nothing is violated. Disclosure-suppressing infrastructures are not unethical by their outputs; they are unethical by what they prevent from becoming visible.",
        ],
        concepts: ["ethical-disclosure"],
      },
      {
        heading: "The social layer: desire routed through comparison",
        paragraphs: [
          "Comparative entitlement formation describes how infrastructures of comparison — feeds, rankings, dashboards — constitute the sense of what one is owed by continuously measuring what others have. These environments do not merely display inequality; they format it as entitlement, whose frustration then has a recognisable and monetisable affective shape.",
          "Post-mimetic relationality names the wider configuration this belongs to. Mimetic dynamics classically presuppose co-presence and reciprocity. When desire is routed through infrastructures that measure, aggregate, and re-serve it, the resulting relations resemble mimetic ones but have lost their bidirectional character. That residue is neither individual psychology nor a network effect, and it deserves a name of its own.",
        ],
        concepts: ["comparative-entitlement-formation", "post-mimetic-relationality"],
      },
      {
        heading: "The scaffolding underneath: infrastructure and friction",
        paragraphs: [
          "Epistemic infrastructure denotes the largely invisible arrangements — categories, standards, records, review processes, training pipelines — through which claims come to count as knowledge. AI systems both depend on this scaffolding and reshape it, inheriting its categories while altering the practices that produced them. That reflexive loop is not anticipated by classical accounts of evidence, and it is why questions of bias and trust belong to arrangements rather than to models.",
          "Systemic friction is the companion concept. Delay, checkpointing, redundancy, and dispute are not simply inefficiencies; they create the temporal and relational room in which judgment and answerability are exercised. Automation frequently succeeds precisely by removing them, and the resulting system may be faster, cheaper, and less answerable at once. Institutional inversion follows: the organisation reorganises itself around what the automated system can do.",
        ],
        concepts: ["epistemic-infrastructure", "systemic-friction"],
      },
      {
        heading: "The newest term: certainty arriving too early",
        paragraphs: [
          "Automated certainty names the technologically mediated production of settled understanding faster than the competence required to hold it can form. Fluency arrives first; the capacity to assess what has been understood arrives late, if at all.",
          "It is the concept that ties the others together on the side of the subject. Where inferential license and the judgment gap concern the structure of the act, automated certainty concerns its formation: what happens to a person's calibration when interpretive difficulty is removed on their behalf, and the friction that would have taught them to doubt has been designed away.",
        ],
        concepts: ["automated-certainty"],
      },
    ],
    closing: [
      "Read in sequence, the vocabulary describes one movement. License is relocated; a gap opens between output and judgment; the ordering that made the output decisive has no author; the situation stops appearing as a claim; the friction that would have slowed it has been removed as waste; and the subject at the end of the chain is more certain, sooner, than their competence warrants.",
      "Each concept is developed at length on its own page, with its theoretical statement, the publications that carry it, and the work currently under way. The research map shows how they connect and which contributions support each connection.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
