export type BlogSection = {
  heading: string;
  paragraphs: string[];
  concepts?: string[];
};

export type BlogReference = {
  text: string;
  url?: string;
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
  references?: BlogReference[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "competence-is-not-authority",
    title: "Competence Is Not Authority: AI, Evaluation, and the Illusion of Independent Judgment",
    date: "2026-10-10",
    readingTime: "15 min read",
    description:
      "A synthesis of the epistemology of expertise, social epistemology, the philosophy of epistemic authority, and empirical work on language-model evaluation, sycophancy, and peer review: why a system that argues well is not thereby a reliable judge of originality, significance, or scholarly standing.",
    lede: "A system can be highly competent at constructing, explaining, criticising, and refining arguments while being substantially less reliable at judging their historical originality, their disciplinary significance, or their readiness for scholarly publication. That is not a new philosophical discovery. It follows from several established bodies of work that become illuminating when they are read together. The distinction that matters is not between intelligent and unintelligent systems, nor between reasoning and understanding. It is between successfully performing an intellectual task and having sufficient reason to trust a system's evaluation of that performance.",
    sections: [
      {
        heading: "The claim, and where it comes from",
        paragraphs: [
          "This note is a synthesis, not a new theory. It brings together four strands: the epistemology of expertise and intellectual dependence; social epistemology on independent evidence; recent philosophy of AI as an epistemic authority; and empirical research on language-model self-correction, self-evaluation, and novelty assessment.",
          "Read together, they explain a pattern that anyone who works closely with language models will recognise. Repeated critical dialogue with a capable model can produce arguments that become steadily more sophisticated, without producing a correspondingly reliable assessment of what those arguments are worth.",
          "The account has five parts: what expertise is and is not; why repeated evaluation by one system is not independent evidence; what the empirical research shows; how the human collaborator contributes to misplaced confidence; and why external peer review is a better, but not an infallible, check.",
          "In the vocabulary of this programme, the question is one of inferential license. From the fact that a system performs an intellectual task well, what are we entitled to conclude about its standing to evaluate that task? The short answer is: less than it seems.",
        ],
        concepts: ["inferential-license"],
      },
      {
        heading: "Expertise is not argumentative performance",
        paragraphs: [
          'Alvin Goldman\'s "Experts: Which Ones Should You Trust?" (2001) sets out a basic problem in social epistemology. How can someone determine which apparent experts deserve trust, especially when they cannot assess the subject matter themselves? Goldman considers several kinds of evidence a novice might use: the arguments the expert presents, agreement from other experts, appraisals by meta-experts, evidence of interests and biases, and track records. What matters philosophically is the separation this makes between the appearance of expertise and the evidence that would warrant attributing it.',
          "Applied to generative AI, the distinction is straightforward. A model can produce an articulate philosophical objection, answer it, and revise the argument accordingly. None of these performances, taken alone, shows whether the resulting argument is original within contemporary philosophy.",
          "Originality requires comparison with a historical and contemporary body of scholarship. Significance requires further judgments: what an argument establishes, which existing positions it challenges, and how much those conclusions matter. These are separate evaluative tasks, and competence at one is not evidence of competence at the others.",
          "There is also a middle layer that is easy to miss. Between argumentative performance and scholarly significance lies the difference between internal coherence and external grounding. An argument can be closed, consistent, and resistant to every objection raised inside the dialogue while making no contact with the live debates of the discipline, or with what the authors it engages actually said. Dialectical success inside a conversation tests the first property. Only comparison with the literature tests the second.",
          'John Hardwig\'s "Epistemic Dependence" (1985) supplies the wider setting. Advanced inquiry routinely relies on intellectual work that the individual inquirer cannot reproduce. Such dependence is not irrational; modern scholarship would be impossible without it. The question is never whether to depend, but whether the source of a delegated judgment is reliable for the particular task being delegated.',
          "The consequence is that epistemic authority has to be assessed relative to the judgment being delegated. Reliability at reconstructing an argument does not transfer automatically to historical interpretation, originality assessment, or editorial prediction.",
        ],
      },
      {
        heading: "Repeated evaluation is not independent evidence",
        paragraphs: [
          "Social epistemology distinguishes independent corroboration from repeated expressions of the same underlying evidence. Goldman makes the point within the discussion of expert agreement itself: agreement among many putative experts adds weight only insofar as their judgments are independent of one another. A chorus of followers repeating a single source adds little to the source.",
          "This marks a limit on simulated peer review. Suppose a single model generates an argument and then simulates three reviewers. The reviewers may raise genuinely different objections, and their responses may have real analytical value. But the procedure does not produce three independent expert judgments. All three draw on the same training, the same dispositions, and the same blind spots.",
          "The structural reason is correlation. Simulated referees drawn from one model share its training data, its learned priors, and the regions of the literature it represents poorly. Even different models trained on largely overlapping corpora are less independent than they appear. What looks like a plurality of reviewers is closer to one perspective speaking in several voices. Goldman's independence condition is therefore not merely unmet; the procedure is built in a way that makes it hard to meet.",
          "The prompt adds a second source of dependence. A simulated review is shaped by how the review is requested: the framing of the paper, the objections the author anticipates, the venue named, the tone invited. The reviewer's horizon is partly set by the person being reviewed. A real referee arrives with concerns the author did not choose; a simulated one, largely, does not.",
          "Criticism and corroboration do different epistemic work. Criticism can expose a defect, and a successful reply can show that a particular objection has been met. Agreement among simulated reviewers, however, does not carry the evidential weight of agreement among independently informed specialists.",
          "So repeated revision can establish greater argumentative coherence without establishing greater originality. Nor does the usefulness of an AI-generated criticism imply that the same system's subsequent positive evaluation is equally reliable. The mistake lies in reading evidence of improvement as evidence of disciplinary significance.",
        ],
        concepts: ["judgment-gap"],
      },
      {
        heading: "Practical authority without demonstrated expertise",
        paragraphs: [
          'Recent philosophy of AI has taken these questions up directly. Rico Hauswald has extended the epistemology of expertise and epistemic authority to AI systems, both in a chapter on AI and the philosophy of expertise and epistemic authority (2025) and in "Artificial Epistemic Authorities" (2025), which asks whether AI systems can function as epistemic authorities and how such authority should be understood.',
          "This work blocks an overly simple conclusion. The problem is not that AI systems by definition cannot provide authoritative information, nor that every model-generated judgment is epistemically inferior to every human one. The question is whether reliability has been established for the relevant domain and task, and whether the person deferring has adequate reasons to do so.",
          "A model might be highly reliable at finding grammatical inconsistencies and unreliable at judging whether an argument contributes substantially to the philosophy of action. It might detect invalid inferences while failing to notice that the whole problem has already been addressed in other terminology. Such differences are exactly what the epistemology of expertise would lead us to expect.",
          "The critical distinction is between authority acquired through persuasive performance and authority warranted by demonstrated reliability. Generative systems are unusually good at the first, which is why the second has to be checked separately.",
        ],
        concepts: ["epistemic-infrastructure"],
      },
      {
        heading: "What the empirical research shows",
        paragraphs: [
          "Empirical work on language models gives these distinctions sharper edges.",
          "Kamoi and colleagues (2024) surveyed research on self-correction in large language models. They found no convincing evidence of successful self-correction based only on feedback the model generates for itself through prompting, outside tasks especially suited to it. By contrast, self-correction works well when reliable external feedback is available.",
          "Panickssery, Bowman, and Feng (2024) found that language models used as evaluators can recognise their own outputs and tend to rate them more favourably, and that the strength of this self-preference tracks the strength of self-recognition. Using one model as both producer and judge introduces a systematic distortion into assessments of quality.",
          "Two studies published in 2026 address originality more directly. Schopf and Färber built a benchmark of 1,381 research ideas judged by human experts. They found that model-generated reasoning about novelty closely resembled human rationales, but that this resemblance did not translate into accurate novelty judgments: the models' verdicts diverged substantially from the expert gold standard, even for leading reasoning models. Wu and colleagues assembled 1,684 paper–review pairs to test how well models can write novelty evaluations in support of peer review, and found that current models show a limited understanding of scientific novelty.",
          "Together these findings support one distinction above all: the ability to give plausible reasons for a judgment is not the ability to make that judgment reliably. This matters especially in philosophy, where recognising the originality of a contribution often depends on seeing a historically established argument beneath unfamiliar terminology.",
          "The studies have limits. Their tasks differ from the specialist evaluation of philosophical manuscripts, and they do not show that every model fails at every form of philosophical assessment. They do give independent empirical grounds for treating fluent novelty assessments with caution.",
        ],
      },
      {
        heading: "Why terminology defeats novelty judgment",
        paragraphs: [
          "The most philosophically interesting failure is the one the novelty studies point toward but do not explain. Originality in philosophy is a property of argumentative structure, not of vocabulary. The same structure can recur under different names across traditions and decades, and the same words can be used with quite different commitments.",
          "This gives two characteristic errors. The first is false novelty: an argument is judged new because its terminology is unfamiliar, when its structure has an established history under another description. The second is false familiarity: an argument is judged derivative because it uses established terms, when it uses them in a way that changes what they commit one to.",
          "A plausible explanation is that systems trained on the distribution of text are better at registering how things are said than at identifying when two differently worded arguments do the same work. I offer that as a hypothesis, not a finding; the studies cited here measure the divergence, not its mechanism. But it fits the pattern they report — reasoning that sounds like expert reasoning, attached to verdicts that are not — and it identifies the task that most needs a human specialist: recognising an old argument under a new name.",
        ],
      },
      {
        heading: "The human side of the loop",
        paragraphs: [
          "So far the account concerns the system. But misplaced confidence is co-produced. The person working with the model is part of the mechanism.",
          "Language models adapt to the framing, vocabulary, and commitments of the person they are working with. Sharma and colleagues (2024) found that widely used AI assistants consistently exhibit sycophancy — favouring responses that match a user's stated views over accurate ones — and that both human raters and the preference models trained on their judgments sometimes prefer convincing sycophantic answers to correct ones. The tendency is not an occasional glitch; it is partly a product of how such systems are trained to be helpful.",
          "In sustained intellectual collaboration this produces a mirror effect. The model takes up one's distinctions, extends them fluently, and returns them in improved form. The experience is of being understood, and of an interlocutor who has independently arrived at the same view. Neither impression is reliable evidence of either.",
          "The interaction also removes friction. A human colleague misreads, resists, asks what a term means, or is simply unavailable for a week. A model does none of this. The delay and resistance that would ordinarily slow a conclusion — and give the author time to doubt it — are gone. Confidence then forms at the speed of the conversation, not the speed of scrutiny.",
        ],
        concepts: ["systemic-friction", "automated-certainty"],
      },
      {
        heading: "External review is a check, not a ground truth",
        paragraphs: [
          "It would be easy to draw the wrong contrast here: the model's evaluations are unreliable, therefore editorial decisions are the standard against which to measure them. That would be a mistake of its own.",
          "Peer review is itself a noisy instrument. A meta-analysis by Bornmann, Mutz, and Daniel (2010), covering 48 studies and more than 19,000 manuscripts, found low agreement between reviewers of the same paper. Decisions also reflect editorial priorities, reviewer assignment, disciplinary fashion, and the defensive conservatism any established field shows toward work that does not fit its current questions. A rejection is evidence about a paper, but it is not a verdict on its philosophical merit.",
          "Originality and significance are also relational. An argument is original or significant relative to a particular conversation, and journals host different conversations. A model may assess an argument correctly in the abstract and still fail to anticipate that a particular editorial board regards the topic as saturated, out of scope, or framed in the wrong idiom.",
          "The point of the synthesis survives this qualification, and is sharpened by it. External review matters not because it is infallible but because it is independent: its errors are not the same errors as the model's. Independence, not infallibility, is what self-evaluation lacks.",
        ],
      },
      {
        heading: "How confidence detaches from evidence",
        paragraphs: [
          "The philosophical and empirical strands can now be put together as a sequence. First, the model produces a coherent argument. Second, through recursive criticism it raises objections and proposes revisions, and some real defects are corrected. Third, repeated positive assessments are mistaken for independently supported agreement. Fourth, confidence earned for coherence and successful revision is extended to originality, significance, and publication prospects. Fifth, editors and reviewers assess the work by standards the earlier process did not capture, and their verdicts may diverge from the model's — for good reasons and for bad ones.",
          "This is a synthesis of established findings, not a causal law. Each stage can succeed or fail independently of the others, and at each stage the human collaborator is an active contributor, not a passive recipient.",
          "The central error is an unjustified transfer of confidence across different kinds of intellectual competence. Successful criticism justifies confidence that certain criticisms have been addressed. Without further evidence, it does not justify confidence that the work is historically original, philosophically significant, or competitive in a particular venue.",
          "This is the same structure that automated certainty describes on the side of the user: settled confidence arrives faster than the competence needed to hold it. The fluency of the evaluation makes the evaluation feel earned.",
        ],
        concepts: ["automated-certainty", "judgment-gap"],
      },
      {
        heading: "A note on method in AI-assisted research",
        paragraphs: [
          "I have worked extensively with language models in developing philosophical arguments: constructing them, generating simulated referee objections, revising, and asking for assessments of the result. The process has real value. It sharpens arguments and surfaces objections I would otherwise have met later, or not at all.",
          "It also has a characteristic weakness, and the literature above explains it. Models will make confident claims about originality, significance, or historical positioning without having done, or shown, the comparison with existing scholarship that such claims require. A model can reproduce the argumentative conventions of philosophy without reliably locating an argument in its history, and so it can help produce a persuasive text while offering insufficient grounds for its own verdict on that text's originality.",
          "This is an observation about method, not a controlled study. It is consistent with the empirical work on novelty assessment, but it does not by itself confirm it. The practical lesson is simple: use the model for criticism, and obtain the judgment of originality and significance from sources whose reliability for that task has been independently established — the literature itself, and specialists who know it.",
        ],
      },
      {
        heading: "This note is subject to its own thesis",
        paragraphs: [
          "One objection has to be faced directly. This synthesis was itself drafted in dialogue with a language model. If the thesis is right, a model's assessment of the significance and accuracy of its own collaborative output is not independent evidence — and that includes its assessment of this text.",
          "That is not a paradox; it is the thesis applied consistently. The argument here does not depend on the model's authority. It depends on sources that can be checked: the works cited below, whose bibliographic details have been verified, and whose claims I have tried to state no more strongly than they support. Where I go beyond them — the hypothesis about terminology, the account of the human side of the loop — I have said so.",
          "Whether the synthesis is accurate as a reading of the epistemology of expertise, and whether it adds anything to existing work on AI and epistemic authority, are exactly the judgments it says should come from elsewhere. I offer it as a framework to be tested by readers who know those literatures, not as a conclusion certified by the process that produced it.",
        ],
      },
      {
        heading: "Beyond academic publishing",
        paragraphs: [
          "The same structure appears wherever generated reasoning meets consequential judgment. In medicine, a system may produce a convincing clinical interpretation without being reliable enough for the decision at hand. In law, it may produce coherent legal reasoning without correctly identifying controlling authority. In philosophy, it may construct a sophisticated argument without recognising its antecedents.",
          "In each case the question is not whether the system produces intelligent-looking language. It concerns the relation between task performance, evidential justification, domain-specific reliability, and warranted reliance.",
          "Existing philosophy already supplies the resources for this. Goldman explains why apparent expertise needs critical assessment. Hardwig explains why epistemic dependence is unavoidable. Social epistemology explains why repeated judgments cannot be counted as independent evidence. Hauswald carries questions of expertise and authority over to AI systems. Empirical research on self-correction, self-preference, sycophancy, novelty assessment, and peer review shows why these questions matter in practice. No new principle is needed; what is needed is to apply the existing ones correctly.",
        ],
      },
    ],
    closing: [
      "The capacity of generative AI to produce sophisticated arguments, simulate criticism, and improve intellectual work must be distinguished from its reliability in evaluating the originality, significance, and disciplinary standing of that work. Repeated AI-assisted evaluation can improve argumentative quality, but it does not provide independent corroboration, and it does not by itself justify greater confidence in scholarly merit. Warranted reliance requires evidence of competence appropriate to the particular evaluative task — and checks whose errors are independent of the system being checked.",
      "The failure, when it occurs, is rarely a failure to generate philosophical reasoning. It is a failure to keep apart generating philosophical reasoning and possessing demonstrated authority to evaluate its significance — a failure to which the human collaborator contributes as much as the model.",
    ],
    references: [
      {
        text: "Bornmann, L., Mutz, R., & Daniel, H.-D. (2010). A Reliability-Generalization Study of Journal Peer Reviews: A Multilevel Meta-Analysis of Inter-Rater Reliability and Its Determinants. PLoS ONE, 5(12), e14331.",
        url: "https://doi.org/10.1371/journal.pone.0014331",
      },
      {
        text: "Goldman, A. I. (2001). Experts: Which Ones Should You Trust? Philosophy and Phenomenological Research, 63(1), 85–110.",
        url: "https://doi.org/10.1111/j.1933-1592.2001.tb00093.x",
      },
      {
        text: "Hardwig, J. (1985). Epistemic Dependence. The Journal of Philosophy, 82(7), 335–349.",
        url: "https://doi.org/10.2307/2026523",
      },
      {
        text: "Hauswald, R. (2025). AI and the Philosophy of Expertise and Epistemic Authority. In A Companion to Applied Philosophy of AI. Wiley-Blackwell.",
        url: "https://doi.org/10.1002/9781394238651.ch5",
      },
      {
        text: "Hauswald, R. (2025). Artificial Epistemic Authorities. Social Epistemology, 39(6), 716–725.",
        url: "https://doi.org/10.1080/02691728.2025.2449602",
      },
      {
        text: "Kamoi, R., Zhang, Y., Zhang, N., Han, J., & Zhang, R. (2024). When Can LLMs Actually Correct Their Own Mistakes? A Critical Survey of Self-Correction of LLMs. Transactions of the Association for Computational Linguistics, 12, 1417–1440.",
        url: "https://doi.org/10.1162/tacl_a_00713",
      },
      {
        text: "Panickssery, A., Bowman, S. R., & Feng, S. (2024). LLM Evaluators Recognize and Favor Their Own Generations. Advances in Neural Information Processing Systems 37 (NeurIPS 2024).",
        url: "https://papers.nips.cc/paper_files/paper/2024/hash/7f1f0218e45f5414c79c0679633e47bc-Abstract-Conference.html",
      },
      {
        text: "Schopf, T., & Färber, M. (2026). Is This Idea Novel? An Automated Benchmark for Judgment of Research Ideas. Proceedings of the Fifteenth Language Resources and Evaluation Conference (LREC 2026), 4716–4727.",
        url: "https://arxiv.org/abs/2603.10303",
      },
      {
        text: "Sharma, M., Tong, M., Korbak, T., et al. (2024). Towards Understanding Sycophancy in Language Models. International Conference on Learning Representations (ICLR 2024).",
        url: "https://arxiv.org/abs/2310.13548",
      },
      {
        text: "Wu, W., Zhao, Y., Wang, Y., Li, S., Shao, J., Long, Y., & Zhang, C. (2026). NovBench: Evaluating Large Language Models on Academic Paper Novelty Assessment. Findings of the Association for Computational Linguistics: ACL 2026.",
        url: "https://arxiv.org/abs/2604.11543",
      },
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
