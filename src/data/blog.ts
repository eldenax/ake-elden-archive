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
  /** Bibliography entries; text between underscores renders in italics. */
  references?: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "epistemic-automation-academic-evaluation",
    title:
      "Epistemic Automation and the Atrophy of Academic Evaluation: How Institutional Peer Review Rewards Conformity and Punishes Conceptual Overshoot",
    date: "2026-10-07",
    readingTime: "18 min read",
    description:
      "A philosophical essay on what happens to judgment when academic evaluation is reduced to classification — read against the empirical research on peer review, novelty, and interdisciplinarity.",
    lede: "Academic institutions present peer review, grant panels, and appointment committees as the places where judgment is exercised on their behalf. This essay asks what that judgment is, and argues that it can be hollowed out while every procedure remains intact. Empirical research on peer review has documented for decades that evaluation tends to disfavour novel, unconventional, and interdisciplinary work. What that research describes, this essay tries to explain. When an evaluative body meets work that exceeds its inherited categories and responds by declaring it “of limited relevance”, it has not judged the work; it has classified it, and treated the failure of classification as a property of the thing classified. I call this condition epistemic automation: human evaluators performing, through their own agency, the operation of a closed pattern-matching system. Its characteristic casualty is conceptual overshoot — contribution that reaches beyond where a discipline has been toward where it is being pushed.",
    sections: [
      {
        heading: "1. What is it to judge a contribution?",
        paragraphs: [
          "Peer review of manuscripts, the assessment of grant proposals, and the expert evaluation of candidates for academic positions occupy a peculiar place in academic life. They are procedures, but what they are supposed to deliver is not procedural. An institution convenes experts precisely because it does not believe that a checklist could do the work. It wants judgment: the capacity to weigh what is heterogeneous, to recognise quality in an unfamiliar form, and to see what a contribution might become as well as what it already is.",
          "That expectation carries a philosophical commitment that is rarely stated. It assumes that the evaluator stands in an open relation to the work: that the work can, in principle, alter the evaluator's sense of what matters. If no possible submission could change an evaluator's understanding of their own field, then the evaluator is not judging but sorting, and the institution could replace them with a sufficiently detailed description of what it already wants.",
          "The question of this essay is what happens when that open relation closes while the procedure continues — when judgment atrophies without anyone deciding to abandon it.",
        ],
        concepts: ["judgment-gap"],
      },
      {
        heading: "2. What the research on peer review shows",
        paragraphs: [
          "The worry is not speculative. A substantial empirical literature has studied how evaluators actually behave, and several of its findings bear directly on the question.",
          "Lamont's (2009) study of multidisciplinary fellowship and grant panels, based on observation of deliberations and interviews with panellists, found that judgments of excellence are not mechanically rational but cognitive, emotional, and social at once, shaped by disciplinary cultures with different standards of evidence and by customary rules of deliberation that panels develop among themselves. Excellence, on this account, is not simply detected; it is negotiated within a particular evaluative culture.",
          "Earlier, Travis and Collins (1991), observing grant committees of the British Science and Engineering Research Council, argued that the familiar worry about cronyism — favouring people one knows — matters less than what they called cognitive particularism: favouring work that belongs to one's own school of thought. Langfeldt (2006), synthesising a broad set of empirical studies, concluded that peer review has conservative and risk-minimising features that may disfavour interdisciplinary and non-conventional research, and that a system meant to encourage such work would need to be adjusted towards a more risk-taking mode.",
          "Quantitative studies point the same way. In a randomised grant-evaluation exercise at a research university, with 2,130 evaluator–proposal pairs, Boudreau and colleagues (2016) found that evaluators systematically gave lower scores to highly novel proposals — an effect concentrated in the right tail of novelty — and, more surprisingly, to proposals close to their own expertise. They interpret the pattern as consistent with boundedly rational evaluation of new ideas rather than with noise or self-interest. Bromham, Dinnage, and Hua (2016), analysing all 18,476 proposals submitted to the Australian Research Council's Discovery programme over five years, found that the more interdisciplinary a proposal was, the lower its chance of funding, even after controlling for team size, primary field, and institution. Wang, Veugelers, and Stephan (2017) found that highly novel papers are less likely to appear in high-impact journals and are slower to be recognised, yet more likely in the long run to become top-cited — with much of their impact arising in fields other than their own. They warned explicitly against relying on single-discipline review and short citation windows.",
          "Two cautions are needed. First, Lee, Sugimoto, Zhang, and Cronin (2013) have shown in a major review that the evidence for many hypothesised biases in peer review is weaker than often assumed, and that the very concept of bias raises normative questions that empirical work cannot settle on its own. Second, most of this research concerns manuscripts and grants, not appointment committees, and extending it to the latter is an inference rather than a finding. With those cautions, the record supports a modest but important conclusion: evaluation as practised tends to penalise work that exceeds established categories, and it tends to do so without anyone intending it.",
          "What the empirical literature largely leaves open is why. Boudreau and colleagues point to bounded rationality; Bromham and colleagues state plainly that their data establish the pattern, not its cause. The remainder of this essay offers a philosophical account of the mechanism.",
        ],
      },
      {
        heading: "3. Two kinds of judgment",
        paragraphs: [
          "Kant's distinction in the Critique of the Power of Judgment (Kant 2000) is a useful place to begin. Determining judgment subsumes a particular under a universal that is already given; reflective judgment begins with the particular and must find the universal under which it can be thought. The first applies a rule. The second has to discover, or even form, the rule.",
          "Most evaluation is properly determining. A methods section can be checked against standards of design, a dataset against standards of adequacy, a citation against its source. But the evaluation of a contribution as a contribution — the question whether it moves a field — is reflective in structure. Its object is, by definition, something the existing categories did not anticipate. A contribution that fitted the given universal completely would add nothing to it.",
          "Epistemic atrophy can therefore be described with some precision: it is the substitution of determining judgment for reflective judgment in cases that require the latter. The evaluator holds the inherited taxonomy of the field as the given universal and asks only whether the work can be subsumed under it. If it can, it is relevant. If it cannot, the evaluation does not move to the reflective question — what concept would make sense of this? — but ends.",
          "This also suggests a reading of the empirical pattern. A penalty that falls on the right tail of novelty is what one would expect if evaluators judge determiningly: moderate novelty can still be subsumed under existing categories and earns credit for doing so, while radical novelty cannot be subsumed at all.",
        ],
        concepts: ["judgment-gap", "inferential-license"],
      },
      {
        heading: "4. Epistemic automation",
        paragraphs: [
          "I call the resulting condition epistemic automation, extending a term I have used elsewhere for the delegation of judgment and interpretive authority to computational systems (Elden 2026b). Here it does not claim that evaluators use software, nor that they lack intelligence or good faith. It names a functional resemblance: human agents come to perform the operation characteristic of a closed classification system. Inputs are matched against stored patterns; what matches is ranked; what does not match is discarded as noise.",
          "The resemblance is clearest in what such systems do with uncertainty. Any decision procedure confronted with ambiguity — work that could be read in several ways, or whose value depends on developments not yet visible — is under pressure to reduce that perplexity into a ranked order as quickly as possible. A reflective judge tolerates the perplexity long enough to learn from it. An automated one resolves it at the first available point, and the first available point is usually the surface of the text: its vocabulary, its keywords, the familiar markers of a research tradition.",
          "Elsewhere I have described automated certainty as the condition in which experienced perplexity is reduced more rapidly than the competence required to evaluate the resolution is acquired (Elden 2026a). Epistemic automation in evaluation is its institutional counterpart. The evaluator arrives at a settled verdict faster than they could have understood what they were rejecting, and the settledness of the verdict is then mistaken for evidence of its correctness.",
          "What makes the condition philosophically interesting is that nothing in it is visibly broken. The evaluators read; they deliberate; they write reasons. The automation lies not in the absence of human activity but in the closure of its object: the activity has stopped being able to encounter anything it did not already expect.",
        ],
        concepts: ["automated-certainty", "epistemic-infrastructure"],
      },
      {
        heading: "5. “Of limited relevance” as an unlicensed transition",
        paragraphs: [
          "The characteristic verdict of epistemic automation is that a contribution is “of limited relevance to the field”. The phrase deserves close attention, because its grammar conceals an inference.",
          "Relevance is not a property a piece of work possesses on its own. It is a relation between the work, a field, and a description of what that field is for. To say that work is irrelevant is to say that, under the correct description of the field, it does not bear on the field's tasks. The verdict therefore presupposes that the evaluator's description of the field is the correct one, and that it is complete.",
          "Consider what has actually been established in the typical case. The evaluator has established that the work could not be mapped onto the historically familiar vocabulary of the discipline. From that, they conclude that the work is not relevant to the discipline. The transition from the first claim to the second is not licensed. It would be licensed only if the familiar vocabulary exhausted the discipline's legitimate concerns — which is exactly what a novel contribution calls into question.",
          "A schematic case makes the structure plain. Suppose a position, a grant call, or a journal is defined within an applied professional field — nursing, teaching, social work, clinical practice. Evaluators look for the markers the field has historically produced: its characteristic populations, designs, and interventions. A contribution arrives that examines the infrastructural and algorithmic conditions under which the field's practitioners now exercise discretion and bear responsibility. That work is about the field in the most direct sense; it concerns the conditions under which the field's own practice is increasingly carried out. But it is not written in the field's inherited idiom, and so the failure of a lexical match is converted into a judgment of substance.",
          "This is the essential move of epistemic automation: the limits of the evaluator's taxonomy are attributed to the object evaluated. The evaluator's inability to place the work becomes the work's irrelevance. The interdisciplinary penalty reported by Bromham and colleagues is what one would expect if this move were common.",
        ],
        concepts: ["inferential-license", "systemic-friction"],
      },
      {
        heading: "6. Conceptual overshoot and the asymmetry of error",
        paragraphs: [
          "By conceptual overshoot I mean contribution that does what the field already does and then goes further: it masters the established methods but also asks about the conditions under which those methods, and the practices they study, now operate. Overshoot is not a failure to reach the target. It is reaching past it.",
          "Under reflective judgment, overshoot is plainly additive. Someone who can practise and teach the field's established methods, and who can also analyse the transformation of the institutions in which those methods are applied, offers more than someone who can do only the first. Under determining judgment, however, overshoot becomes subtractive. Whatever does not fit the template is read as distance from the core, and the more a contribution exceeds the template, the further from the core it appears. The logic of inclusion — this and also that — is replaced by a logic of exclusion — this rather than that.",
          "The deeper problem is an asymmetry in the visibility of error. When evaluators admit work that later proves weak, the error is visible: the work is there to be criticised. When they exclude work that would have proved important, the error leaves no trace. The idea is not funded, the article is not published in that venue, the candidate is not appointed, and no one is in a position to observe what was lost. A system whose false positives are visible and whose false negatives are invisible will, under ordinary pressure to avoid embarrassment, drift toward conformity. It will not experience this as bias. It will experience it as rigour. Wang, Veugelers, and Stephan's finding that the value of novel work appears late, and often elsewhere, describes exactly the conditions under which false negatives stay invisible.",
          "Kuhn's account of normal science is relevant here, though it should be applied with care (Kuhn 2012). On that account, a mature field works within a shared framework that settles what counts as a legitimate problem and a legitimate solution, and work that does not fit is liable to be set aside as not belonging to the field at all. Kuhn treated this as part of how science functions, not simply as a pathology. The point here is narrower: an evaluative body that takes the boundaries of normal practice as the boundaries of relevance has made itself structurally incapable of recognising the contributions on which the field's future depends.",
        ],
        concepts: ["judgment-gap", "exercisable-answerability"],
      },
      {
        heading: "7. Horizons and their closure",
        paragraphs: [
          "Hermeneutic philosophy offers a second vocabulary for the same phenomenon. Gadamer (2004) argued that understanding always proceeds from a horizon of prior expectations, and that these expectations are not obstacles to be eliminated but conditions of understanding at all. What matters is whether they are put at risk in the encounter with what is to be understood. Understanding, on this view, happens when one's horizon is extended by the encounter rather than merely confirmed by it.",
          "Read in these terms, the evaluator's taxonomy is not the problem. No one can evaluate from nowhere, and an inherited picture of the field is the necessary starting point of any evaluation. Lamont's panellists could not have judged without their disciplinary cultures. The problem is a horizon that has ceased to be at risk: one that admits only what it already contains. Such a horizon cannot be extended by the work, because the work is permitted to appear only to the extent that it reproduces the horizon. Evaluation in this condition is not understanding but recognition — the confirmation that something is what one already knew.",
          "There is a temporal dimension to this closure. A field's taxonomy is a sediment of its past problems. To evaluate exclusively against it is to measure contributions by how well they continue what the field has done, not by how well they respond to what the field now faces. The evaluator looks backward, and calls the backward look a standard.",
        ],
        concepts: ["epistemic-infrastructure"],
      },
      {
        heading: "8. The practical stakes: fields that have already changed",
        paragraphs: [
          "This would be an internal academic matter if the fields in question were static. They are not. Health care, social services, education, and public administration are being reorganised by algorithmic casework, predictive risk modelling, and automated decision support. Postphenomenological philosophy of technology, associated with Ihde (1990) and Verbeek (2005) among others, has argued that technologies are not neutral instruments but mediate how situations appear to practitioners and which actions present themselves as possible. If that is right, then the conditions of professional judgment, ethics, and responsibility in these fields are being altered at their root.",
          "An evaluative apparatus that defines disciplinary relevance by the categories of a pre-digital regime therefore produces a specific institutional blindness. It classifies research on algorithmic governance and technological formation as peripheral to the education and practice of future professionals — at precisely the moment when those professionals will spend their working lives inside the systems such research examines. The researchers best placed to understand the conditions practitioners will meet are passed over in favour of those who extend what was already being done.",
          "The curriculum and the research agenda are thereby preserved in a form the field of practice has already left behind. No one decides that they should be. It follows from a sequence of individually reasonable verdicts, each of which declined to recognise the changed situation because the changed situation had no place in the categories used to recognise anything.",
        ],
        concepts: ["epistemic-infrastructure", "exercisable-answerability"],
      },
      {
        heading: "9. Objections: conservatism, and “this is just bias”",
        paragraphs: [
          "Two objections deserve a reply. The first is that evaluative conservatism is not a vice but a function. Disciplines need boundaries; calls and positions are defined for particular needs; an evaluator who admitted every ambitious reframing as relevant would cease to evaluate anything.",
          "The objection is right about the need for boundaries and wrong about what follows from it. Conservatism is legitimate as a burden of proof: novel work may reasonably be required to show how it bears on the field's tasks. It is not legitimate as a categorical exclusion, in which novel work is not asked to show anything because the absence of familiar markers has already settled the question. The first is a demand that reflective judgment be exercised and its results made explicit. The second is the refusal to exercise it.",
          "The second objection is that epistemic automation is simply a new name for what the empirical literature already calls bias, or what Travis and Collins called cognitive particularism. The answer is that the account is meant to explain that pattern rather than rename it, and that it differs from a bias account in two respects. A bias account locates the problem in a distortion of an otherwise sound procedure, and its remedy is correction: anonymise, diversify panels, adjust for distance. But, as Lee and colleagues observe, the concept of bias presupposes a standard of correct evaluation, and it is precisely that standard — the field's description of itself — that novel work calls into question. Epistemic automation locates the problem not in a distortion of the procedure but in the kind of judgment the procedure is performing. A perfectly unbiased evaluator, faithfully applying the field's received categories without favour to persons or schools, would still produce the pattern, because determining judgment cannot recognise what its universal does not contain.",
          "Second, the account explains why the pattern survives good faith. The empirical studies consistently find the effect without evidence of malice; Boudreau and colleagues explicitly reject private interest as an explanation. An account on which competent, honest evaluators systematically fail to recognise radical novelty because of the structure of the judgment they are asked to make fits that finding better than one on which they are distorted by preference.",
          "The test that follows is simple. Where evaluators reject work as irrelevant, can they state what the work claims, why that claim does not bear on the field, and what description of the field they are relying on? If they can, they have judged, and one may disagree with the judgment on the merits. If they can only report that the work did not match, they have classified — and the classification, however carefully performed, does not license the verdict.",
        ],
        concepts: ["inferential-license"],
      },
      {
        heading: "10. Conclusion: restoring judgment",
        paragraphs: [
          "When expert evaluation operates as a mechanism of perplexity reduction, peer review ceases to be an engine of disciplinary development and becomes an instrument of epistemic reproduction. It conserves the institution in the image of its past while presenting that conservation as quality assurance.",
          "The remedy is not to abolish evaluation, nor to replace experts with procedures, which would complete the automation rather than reverse it. Some institutional measures follow directly from the research: evaluation panels that span the fields a contribution actually draws on, as Wang and colleagues recommend; longer horizons for judging impact; and, in Langfeldt's terms, a deliberate shift toward a more risk-taking mode where novelty is wanted. But measures of this kind can themselves be applied mechanically. What institutions need are arrangements that force the reflective step itself — that make it impossible to reach the verdict “of limited relevance” without first having done the work that would license it. Two examples show what this could look like in an evaluation committee.",
          "The first is a synthesis requirement for relevance-based rejection. A committee that wishes to reject a manuscript, proposal, or candidate on the ground that the work is irrelevant to the field must first write a short synthesis of what the work actually claims: its central thesis, the problem it addresses, and the connection it proposes to the field's tasks, stated in terms the author would recognise as accurate. Only then may the committee state which description of the field the work falls outside, and why that description should govern. The requirement puts into practice the test proposed in section 9. It does not prevent rejection, and it does not ask evaluators to agree with the work. It prevents classification from passing as judgment, because a committee that cannot say what the work claims has not yet earned the right to say that it does not matter. It also makes the invisible errors described in section 6 documentable: a written synthesis can later be compared with how the rejected work fared elsewhere.",
          "The second is an adjacent-field evaluator triggered by overshoot. When a contribution reaches beyond the established boundaries of the field — and the clearest signal is that the committee itself describes the work as lying partly outside them — this should trigger a requirement that at least one evaluator be drawn from the adjacent field toward which the overshoot points, with an explicit mandate to state the strongest case for the work's relevance. This answers the warning of Wang and colleagues against single-discipline review. The finding of Boudreau and colleagues that evaluators also penalise proposals close to their own expertise suggests that this evaluator should be chosen for competence in the field the work points toward, not for closeness to the work itself. The role is that of a devil's advocate rather than a sponsor: not to secure a positive verdict, but to ensure that the case for relevance has been stated at its strongest before the committee decides against it.",
          "Neither arrangement guarantees judgment. Both could be reduced to forms that are filled in without thought, and an institution that adopted them as checklists would only have automated at a higher level. Their value lies elsewhere: they turn the absence of reflective judgment from an invisible omission into a visible gap in the record, something a dean, a complainant, or a later committee can point to. That is as much as institutional design can do. The rest depends on evaluators who are willing to let the work they judge put their own understanding of the field at risk.",
          "Until such judgment is restored, academic evaluation will continue to reward what is safe and recognisable, and the work that most directly addresses where fields are going will continue to be set aside, carefully and in good faith, as “of limited relevance”.",
        ],
        concepts: ["judgment-gap", "inferential-license"],
      },
    ],
    closing: [
      "This essay extends the research programme's account of licensed transitions to academic evaluation itself: the verdict “of limited relevance” is treated as an inference whose license must be shown, not as a report of a fact about the work.",
      "It draws on the programme's concepts of automated certainty and the judgment gap, linked from each section above.",
    ],
    references: [
      "Boudreau, Kevin J., Eva C. Guinan, Karim R. Lakhani, and Christoph Riedl. 2016. “Looking Across and Looking Beyond the Knowledge Frontier: Intellectual Distance, Novelty, and Resource Allocation in Science.” _Management Science_ 62 (10): 2765–2783. https://doi.org/10.1287/mnsc.2015.2285.",
      "Bromham, Lindell, Russell Dinnage, and Xia Hua. 2016. “Interdisciplinary Research Has Consistently Lower Funding Success.” _Nature_ 534 (7609): 684–687. https://doi.org/10.1038/nature18315.",
      "Elden, Åke. 2026a. “Automated Certainty: Algorithmic Perplexity Reduction and Theological Metacognitive Miscalibration.” _Journal for the Cognitive Science of Religion_ 11 (1–2). https://doi.org/10.1558/jcsr.34912.",
      "Elden, Åke. 2026b. “Epistemic Automation and the Deformation of the Human: Artificial Intelligence and the Reconfiguration of Theological Anthropology.” _Religions_ 17: 515.",
      "Gadamer, Hans-Georg. 2004. _Truth and Method_. 2nd rev. ed. Translation revised by Joel Weinsheimer and Donald G. Marshall. London: Continuum.",
      "Ihde, Don. 1990. _Technology and the Lifeworld: From Garden to Earth_. Bloomington: Indiana University Press.",
      "Kant, Immanuel. 2000. _Critique of the Power of Judgment_. Edited by Paul Guyer. Translated by Paul Guyer and Eric Matthews. Cambridge: Cambridge University Press. https://doi.org/10.1017/CBO9780511804656.",
      "Kuhn, Thomas S. 2012. _The Structure of Scientific Revolutions_. 50th anniversary ed. With an introductory essay by Ian Hacking. Chicago: University of Chicago Press.",
      "Lamont, Michèle. 2009. _How Professors Think: Inside the Curious World of Academic Judgment_. Cambridge, MA: Harvard University Press. https://doi.org/10.4159/9780674054158.",
      "Langfeldt, Liv. 2006. “The Policy Challenges of Peer Review: Managing Bias, Conflict of Interests and Interdisciplinary Assessments.” _Research Evaluation_ 15 (1): 31–41. https://doi.org/10.3152/147154406781776039.",
      "Lee, Carole J., Cassidy R. Sugimoto, Guo Zhang, and Blaise Cronin. 2013. “Bias in Peer Review.” _Journal of the American Society for Information Science and Technology_ 64 (1): 2–17. https://doi.org/10.1002/asi.22784.",
      "Travis, G. D. L., and H. M. Collins. 1991. “New Light on Old Boys: Cognitive and Institutional Particularism in the Peer Review System.” _Science, Technology, & Human Values_ 16 (3): 322–341. https://doi.org/10.1177/016224399101600303.",
      "Verbeek, Peter-Paul. 2005. _What Things Do: Philosophical Reflections on Technology, Agency, and Design_. Translated by Robert P. Crease. University Park: Pennsylvania State University Press.",
      "Wang, Jian, Reinhilde Veugelers, and Paula Stephan. 2017. “Bias against Novelty in Science: A Cautionary Tale for Users of Bibliometric Indicators.” _Research Policy_ 46 (8): 1416–1436. https://doi.org/10.1016/j.respol.2017.06.006.",
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
    readingTime: "5 min read",
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
