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
  relatedArticle?: { title: string; href: string; venue: string };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "hva-bor-vi-utrustes-med-i-mote-med-kunstig-intelligens",
    title: "Hva bør vi utrustes med i møte med kunstig intelligens?",
    date: "2026-11-07",
    readingTime: "4 min read",
    description: "Kritisk tenkning, dyp domenekunnskap, etisk forankring og teknologisk forståelse: hva vi trenger for å vurdere KI og ta ansvar for hvordan den brukes.",
    lede: "Møtet med kunstig intelligens krever hverken at vi alle blir programmerere eller at vi passivt lar teknologien overta styringen. Når KI i økende grad overtar rutineoppgaver, saksbehandling og tekstgenerering, forskyves den mest kritiske kjerneoppgaven vår: fra ren produksjon til kvalifisert evaluering, skjønn og ansvarsinngang.\n\nFor å navigere dette skiftet trygt og formålstjenlig, må vi utrustes på tre overordnede nivåer: epistemologisk og kritisk, etisk og institusjonelt, og praktisk og funksjonelt.",
    sections: [
      {
        heading: "1. Epistemologisk og kritisk utrustning: Evnen til å forstå og overprøve",
        paragraphs: [
          "Det er en utbredt misforståelse at KI gjør dyp domenekunnskap overflødig. Tvert imot krever teknologien at vi forsterker vår faglige ballast for ikke å bli passive tilskuere til algoritmisk oppførsel.",
          "Epistemisk autonomi og kildekritikk: Språkmodeller leverer ofte syntaktisk feilfrie svar med betydelig skråsikkerhet, men uten forankring i sannhetsforpliktelse. Vi må trene opp evnen til å identifisere modelltenkningens grenser, oppdage hallusinasjoner og avdekke skjevheter (bias).",
          "Dyp domenekunnskap: For å overprøve og korrigere et KI-system må brukeren besitte en dypere fagforståelse enn verktøyet selv. Uten solid domenekunnskap mangler vi grunnlaget for å oppdage når systemet gjør feilslutninger.",
          "Metakognitiv bevissthet: Om vi setter ut kognitive delprosesser — som problemformulering, syntese og kategorisering — for tidlig i en tenkeprosess, risikerer vi å svekke vår egen evne til uavhengig og kritisk analyse.",
        ],
      },
      {
        heading: "2. Etisk og normativ utrustning: Navigering av ansvar og verdier",
        paragraphs: [
          "Automatisering av beslutningsstøtte utfordrer etablerte strukturer for ansvar og menneskelig verdighet.",
          "Ansvarsplassering og tilregnelighet (Accountability): Algoritmer kan aldri bære juridisk eller etisk ansvar. Beslutninger som fattes på bakgrunn av KI-genererte underlag krever alltid en klar og entydig locus of answerability — et menneskelig ansvarspunkt som kan stilles til svars.",
          "Etisk skjønn og verdivurdering: Algoritmer optimaliserer utelukkende mot definerte parametere. De kan ikke vekte verdier som rettferdighet, skjønn eller barmhjertighet. Det krever et tydelig etisk rammeverk for å avklare hva som ikke skal delegeres til automatisering.",
          "Regulatorisk forståelse: Innsikt i rammeverk som EUs AI Act og GDPR er nødvendig for å sikre at implementeringen skjer innenfor rammene av personvern, rettssikkerhet og samfunnssikkerhet.",
        ],
      },
      {
        heading: "3. Praktisk og funksjonell utrustning: Verktøybeherskelse",
        paragraphs: [
          "Ren teori er utilstrekkelig dersom det praktiske håndverket mangler.",
          "Interaksjons- og instruksjonskompetanse: Evnen til å utforme presise kontekster, avgrense premisser og tildele operasjonelle roller til modellene er avgjørende for å oppnå høy relevans uten å introdusere kognitiv støy.",
          "System- og infrastrukturforståelse: Forståelse av forskjellene mellom ulike modellarkitekturer (f.eks. generelle språkmodeller kontra spesialiserte domenemodeller) og hvordan disse integreres i eksisterende og sikker datainfrastruktur.",
        ],
      },
      {
        heading: "Oppsummering: Utrustningens fire pilarer",
        paragraphs: [
          "Kritisk tenkning: Validere, overprøve og utfordre KI-generert materiale framfor passiv aksept.",
          "Dyp domenekunnskap: Teoretisk og praktisk fagkunnskap som nødvendig vurderingsgrunnlag.",
          "Etisk forankring: Fastholde at etisk og juridisk ansvar alltid påhviler mennesket.",
          "Teknologisk forståelse: Innsikt i verktøyenes virkemåte, begrensninger og sikkerhetsrisikoer.",
        ],
      },
    ],
    closing: [
      "Det viktigste grepet vi gjør i møte med kunstig intelligens er ikke å overlate tenkningen til maskinene, men å heve standarden for vår egen faglige og etiske evaluering.",
    ],
  },
{
  "slug": "when-the-system-raises-an-alarm",
  "title": "When the System Raises an Alarm but Cannot Explain Why",
  "date": "2026-11-04",
  "readingTime": "8 min read",
  "description": "A Microsoft Power Platform notification as a case of automated certainty and institutional irresponsibility—and what it reveals about the duty to explain.",
  "lede": "On 3 November 2026, I received an automated message from Microsoft Power Platform with an alarming subject line: “Immediate action required: Out of File capacity.”\n\nThe message was unequivocal. My organisation had allegedly exhausted its available storage capacity, and immediate action was necessary to avoid operational disruption. The figures were equally striking: 9.88 GB of storage had been consumed out of an available capacity of 0 MB. The system declared that 100 percent of the available capacity had been used.\n\nThere was only one problem. I did not use the applications that the warning appeared to concern, and the message offered no meaningful explanation of why the storage allocation was zero, what the stored data consisted of, or which operational functions were actually at risk. The notification appeared certain about the problem while remaining remarkably uninformative about its significance.\n\nThis small incident illustrates a much larger problem in contemporary digital governance: automated systems increasingly possess the authority to demand action without assuming a corresponding obligation to make their demands intelligible.",
  "sections": [
    {
      "heading": "1. The case: an emergency without an explanation",
      "paragraphs": [
        "The notification originated from Microsoft Power Platform and concerned storage associated with Microsoft Dataverse, a data platform supporting various business applications. Its message was structured around three assertions: the organisation had reached its storage limit; immediate action was required; failure to act could result in operational disruption.",
        "Yet the numerical information accompanying these assertions raised more questions than it answered. How could an organisation consume 9.88 GB of an allocation reported as 0 MB? Had a previously available storage entitlement expired? Had a subscription changed? Was the storage associated with an application that was no longer in use? Was there an actual operational problem, or merely an administrative inconsistency between recorded usage and current entitlement?",
        "None of these questions was addressed. The 0 MB figure is not necessarily a computational error. It could reflect a genuine absence of allocated capacity while data remain stored. The issue is that the notification did not explain this distinction.",
        "The message also contained a prominent instruction to manage capacity, effectively transferring responsibility for investigating the situation to the recipient. The system had enough information to issue an emergency warning, but apparently not enough—or had not been designed—to explain the emergency. That distinction matters."
      ],
      "concepts": ["automated-certainty"]
    },
    {
      "heading": "2. Automated certainty is not the same as justified certainty",
      "paragraphs": [
        "Automated systems are exceptionally effective at identifying conditions that satisfy predefined rules. A storage-monitoring system may operate according to a relatively simple logic: if reported usage exceeds available capacity, issue a warning. From a computational perspective, such a rule may function exactly as intended.",
        "But identifying a threshold violation is not equivalent to determining whether that violation constitutes a meaningful operational problem. The threshold provides a condition for classification. It does not, by itself, establish the significance of that classification for a particular user. In this case, the warning moved from a technical observation to an operational demand without adequately explaining the connection between the two.",
        "The distinction is epistemologically important. An automated classification may be internally valid while the practical conclusion communicated to the user remains insufficiently justified. The system effectively presented a conditional assessment as an unconditional instruction.",
        "This is an example of what I have elsewhere examined as automated certainty: the presentation of machine-generated classifications with a degree of authority that exceeds the explanatory resources made available to those expected to act upon them. The difficulty is not necessarily that the system is wrong. The difficulty is that the recipient cannot determine whether the system is right in the way that matters."
      ],
      "concepts": ["automated-certainty", "judgment-gap"]
    },
    {
      "heading": "3. The inversion of responsibility",
      "paragraphs": [
        "The most revealing aspect of the notification was not the numerical discrepancy. It was the allocation of responsibility. Microsoft operates the technical infrastructure, defines the storage categories, establishes the licensing arrangements, controls the monitoring system and determines the thresholds that trigger alerts. The recipient, by contrast, has limited access to the reasoning that produces the warning.",
        "Nevertheless, the burden of action is placed almost entirely on the recipient. The organisation is told to act immediately, even though the notification does not establish what action would be proportionate, necessary or effective.",
        "This produces an asymmetry: the institution controls the classification, while the user must absorb the uncertainty. Such an arrangement reverses an important principle of institutional accountability. An organisation that issues an authoritative demand should be able to explain the grounds on which that demand rests, especially when it invokes the possibility of operational disruption.",
        "The fact that a demand is generated automatically does not eliminate that obligation. Indeed, automation may make the obligation more important because the recipient cannot ordinarily question the system in the way one might question a human representative."
      ],
      "concepts": ["exercisable-answerability"]
    },
    {
      "heading": "4. A warning without actionable knowledge",
      "paragraphs": [
        "A well-designed notification should enable its recipient to make an informed decision. At minimum, it should distinguish between four different kinds of information: Observation—what has the system detected? Interpretation—why does the detected condition matter? Consequence—what specifically may happen if no action is taken? Remedy—what action will resolve or meaningfully investigate the problem?",
        "The Microsoft notification provided a numerical observation and a generic warning about possible disruption. It did not adequately connect those elements to a user-specific diagnosis.",
        "The difference between information and actionable knowledge is fundamental here. A user does not become better informed simply because a system produces more precise numbers or more urgent language. Information becomes actionable when the recipient can understand the relationship between a condition, its significance and the available responses. Without that relationship, automation risks producing urgency rather than understanding.",
        "This is especially problematic when messages are directed toward small organisations that may lack dedicated technical support or specialised knowledge of enterprise software licensing. The organisation receiving the warning is effectively required to reconstruct the system’s administrative logic. That is not an efficient distribution of expertise. It is an institutional transfer of diagnostic labour."
      ],
      "concepts": ["systemic-friction"]
    },
    {
      "heading": "5. The missing possibility: the system may not be relevant to the user",
      "paragraphs": [
        "One particularly revealing feature of this case was that the recipient did not knowingly use the applications associated with the warning. This does not prove that the Dataverse environment was unused or unnecessary. Historical applications, dependencies or licensing arrangements could explain its existence. But that is precisely the point.",
        "An effective monitoring system should distinguish between a technical condition and its relevance to the organisation receiving the notification. A capacity warning for a critical production database is not equivalent to a warning involving an inactive legacy environment. Both may satisfy the same numerical threshold. Their operational significance, however, differs substantially.",
        "By failing to communicate that distinction, automated alerting systems can manufacture a false equivalence between technically similar but practically different situations. The result is an escalation of administrative noise. Every condition becomes potentially urgent because the system does not sufficiently discriminate between what is technically detectable and what is operationally consequential."
      ]
    },
    {
      "heading": "6. When automation becomes an institutional authority",
      "paragraphs": [
        "This incident illustrates a broader transformation in the relationship between organisations and their users. Historically, a service provider could be expected to explain a problem when requesting that a customer take action. Digital platforms increasingly replace that interaction with automated notifications, dashboards and self-service procedures.",
        "This transformation is often presented as efficiency. And in many respects, it is efficient. Routine monitoring can identify technical problems faster than human operators. Automated notifications can reach large numbers of users almost immediately. Self-service interfaces can reduce the cost of ordinary administrative tasks.",
        "But efficiency in generating demands must not be confused with adequacy in justifying them. The crucial question is not whether the notification was automated. It is whether the institution preserved the conditions under which its demands could be understood, evaluated and challenged.",
        "In this case, the warning offered a route to capacity management, but not an explanation sufficient to determine why management was required. The system could command attention without providing the grounds necessary for informed judgment. This is the point at which automation risks becoming an institutional authority rather than merely an administrative instrument."
      ],
      "concepts": ["epistemic-infrastructure"]
    },
    {
      "heading": "7. From technical accountability to institutional answerability",
      "paragraphs": [
        "The distinction between accountability and answerability helps clarify what is at stake. A system may be accountable in a limited technical sense: its thresholds can be documented, its outputs logged and its notifications traced to predefined rules. But institutional answerability requires something more. It requires that the organisation issuing a consequential demand be capable of providing reasons that the affected person can understand and contest.",
        "In this case, answerability would not require Microsoft to disclose proprietary algorithms or every aspect of its infrastructure. It would require a much simpler explanation: What data are being counted? Why is the available capacity zero? Which service is affected? What happens if the recipient takes no action? How can the discrepancy be resolved without unnecessary expenditure or deletion of useful data?",
        "These are not unreasonable expectations. They are elementary conditions of responsible service provision. A notification that cannot answer such questions may still be technically correct, but it is institutionally incomplete."
      ],
      "concepts": ["exercisable-answerability"]
    },
    {
      "heading": "8. The real cost of automated ambiguity",
      "paragraphs": [
        "The consequences of cases like this are often dismissed as minor inconveniences. One user receives a confusing message. A few minutes are spent investigating. Perhaps the problem is resolved. But this interpretation overlooks the cumulative effects of automated ambiguity.",
        "When organisations repeatedly receive poorly contextualised alerts, they must devote time and cognitive resources to distinguishing genuine risks from administrative artefacts. Some users may purchase unnecessary services. Others may delete data or modify configurations without understanding the implications. Still others may begin ignoring warnings because previous alerts proved irrelevant.",
        "These are possible consequences, not demonstrated outcomes of this particular incident. Nevertheless, they illustrate why the quality of automated communication is not merely a matter of customer satisfaction. It affects the reliability of the relationship between institutions and those who depend on them. An alert system that systematically overproduces urgency can ultimately weaken the credibility of warnings that genuinely deserve attention."
      ]
    },
    {
      "heading": "9. What responsible automated communication would look like",
      "paragraphs": [
        "A more responsible notification could have communicated the same technical condition without creating unnecessary ambiguity. For example:",
        "“Your organisation currently has 9.88 GB of files recorded in Microsoft Dataverse, while your present licence configuration provides no allocated Dataverse file capacity. This may reflect a change in licensing or an existing environment with stored data. The affected environment is [name]. The following operations may be restricted [specific functions]. Before purchasing additional capacity, review the environment and its licence assignment.”",
        "Such wording would still communicate the need for investigation. But it would distinguish an observed condition from its possible explanations, identify the relevant uncertainty and offer a proportionate next step. Most importantly, it would treat the recipient as someone capable of exercising judgment rather than merely complying with an automated instruction.",
        "That difference is not cosmetic. It concerns the relationship between knowledge, authority and responsibility."
      ]
    },
    {
      "heading": "10. The larger lesson: automation does not dissolve the duty to explain",
      "paragraphs": [
        "The Microsoft notification is a small case, but its implications extend far beyond enterprise software. Similar structures appear in automated insurance decisions, compliance systems, financial monitoring, university administration, healthcare platforms and algorithmically supported public services.",
        "Across these domains, institutional systems increasingly classify conditions, assign risk and trigger action. The recurring danger is that the authority of the classification becomes detached from the obligation to explain its practical significance.",
        "Automation can detect a condition without understanding its context. It can produce a warning without supplying a proportionate remedy. It can impose urgency without enabling informed action. None of these limitations necessarily makes automation undesirable. They do, however, establish limits on what organisations may reasonably delegate to it.",
        "A responsible institution cannot regard the successful transmission of an automated warning as the completion of its obligation. The responsibility to explain does not disappear when the message is generated by a machine. And where automated systems are permitted to demand human action, the institutions behind them must remain answerable for the reasons those demands are made.",
        "Otherwise, technological efficiency is achieved by transferring uncertainty, interpretative labour and practical risk to the very people the system is supposed to serve. That is not simply poor customer service. It is a failure of institutional design."
      ],
      "concepts": ["exercisable-answerability", "automated-certainty"]
    }
  ],
  "closing": [
    "Case note: This analysis is based on a Microsoft Power Platform notification received on 3 November 2026. It concerns the notification’s communicated content and its implications for institutional answerability. The underlying Microsoft licensing configuration, actual storage dependencies and operational consequences have not been independently verified."
  ]
},
{
  "slug": "beyond-hermeneutical-housekeeping",
  "title": "Beyond Hermeneutical Housekeeping: A Diagnostic Method for AI, Governance, and Human Agency",
  "date": "2026-11-03",
  "readingTime": "6 min read",
  "description": "A four-stage diagnostic method for examining how technological and institutional systems reshape the conditions for human judgment, agency, and responsibility.",
  "lede": "Much of modern scholarly output—across philosophy, systematic theology, ethics, and institutional theory—suffers from a quiet crisis of explanatory power. \n\nWhen facing complex technological shift, standard research often defaults to what can be called \"hermeneutical housekeeping.\" Authors select a canonical text, a historic doctrine, or a philosophical framework, and engage in intricate internal re-arrangements to make old concepts fit new realities. They resolve tensions through semantic redefinition or high-level paradoxes, leaving the actual material mechanics of modern life unexamined.\n\nWhen we strip away the technical vocabulary, a vital question remains: Does this work generate genuine explanatory leverage? Does it diagnose how the world actually functions when structural, algorithmic, and institutional architectures intervene?\n\nTo move beyond conceptual maintenance, we require a different research methodology—one grounded in Institutional Metacognition and Antecedent Diagnosis. \n\nHere is how this diagnostic method works, why it differs from conventional approaches, and how it provides an analytical framework for understanding human agency in an automated age.",
  "sections": [
    {
      "heading": "The Core Problem: Internalist Isolation vs. External Mechanics",
      "paragraphs": [
        "Standard confessional or internalist methods typically begin inside a closed conceptual ecosystem:",
        "Canonical Text / Internal Dogma → Conceptual Conflict → Semantic Redefinition → Intra-Systemic Coherence",
        "In this model, if an automated system disrupts human agency or institutional answerability, the analyst often redefines \"agency\" or \"intent\" to keep the framework intact. The analysis operates entirely at the level of internal textual logic, detached from concrete causal friction.",
        "The Diagnostic Method, by contrast, flips the analytical direction. It begins with the material, technological, and administrative infrastructures that pre-condition human thought and action:",
        "Structural Infrastructure → Antecedent Conditions → Failure/Atrophy Point → Diagnostic Reframing",
        "Instead of asking how a historical concept can be stretched to accommodate technology, this method asks: What precise antecedent conditions make human judgment, responsibility, or formation possible—and how do automated architectures reconfigure or eliminate those conditions?"
      ]
    },
    {
      "heading": "The 4-Stage Diagnostic Framework",
      "paragraphs": [
        "Structural mechanism → Antecedent conditions → Systemic failure / atrophy point → Diagnostic reframing"
      ]
    },
    {
      "heading": "Stage 1: Grounding in Concrete Structural Mechanisms",
      "paragraphs": [
        "Analysis must start at the point of material friction. This means examining actual operational infrastructures:  Predictive optimization algorithms in health and decision architectures.  Perplexity-reduction pipelines in generative AI.  Regulatory compliance protocols in multi-site clinical trials or institutional governance.",
        "By establishing the operational mechanics first, the inquiry grounds itself in how systems aggregate, mediate, or bypass human input before explicit reflection even begins."
      ]
    },
    {
      "heading": "Stage 2: Isolating Necessary Antecedent Conditions",
      "paragraphs": [
        "Before evaluating whether an action is \"ethical,\" \"valid,\" or \"responsible,\" we must identify its constitutive preconditions.",
        "For example, moral imputability does not exist in a vacuum; it requires an attributable act generated within a shared normative space. Epistemic entitlement requires direct engagement with evidence and the capacity for self-correcting inquiry. Moral formation requires structural cognitive latency—the time and friction necessary for metacognitive evaluation."
      ]
    },
    {
      "heading": "Stage 3: Diagnosing Structural Failure Modes",
      "paragraphs": [
        "Rather than treating systemic issues as simple errors or bad choices by individual human actors, the diagnostic method locates where the infrastructure systematically undermines its own enabling conditions. This reveals distinct structural failure modes:",
        "Post-Agential Governance & \"Action Without Acts\": How predictive systems generate institutional outcomes without discrete human acts of judgment, creating a structural void where traditional accountability fails to attach.",
        "Derivative Epistemic Agency: The shift from first-order engagement with evidence to reliance on synthetic, algorithmically mediated outputs, altering how authority and entitlement are established.",
        "Metacognitive Atrophy: How automated perplexity reduction eliminates the friction required for self-reflective inquiry, gradually eroding human capacity for deliberate choice."
      ]
    },
    {
      "heading": "Stage 4: Deploying Concepts as Diagnostic Instruments",
      "paragraphs": [
        "In the final stage, normative, philosophical, or theological concepts are re-introduced—not to defend institutional doctrines, but as high-resolution diagnostic tools.",
        "Theological anthropology or philosophical accounts of agency are deployed to show precisely what is being erased or transformed when human judgment is mediated by algorithmic systems. The goal is to provide empirical, policy, and theoretical fields with clear analytical clarity."
      ]
    },
    {
      "heading": "Why Method Matters: Comparing Analytical Approaches",
      "paragraphs": [
        "Primary Baseline — Standard Internalist Method: Canonical texts, dogmatic puzzles, abstract concepts. The Diagnostic Method: Material architectures, automated systems, institutional mechanics.",
        "Core Task — Standard Internalist Method: Harmonization, textual commentary, semantic revision. The Diagnostic Method: Structural diagnosis of antecedent & enabling conditions.",
        "View of Agency — Standard Internalist Method: Assumed as a given; managed through moral exhortation. The Diagnostic Method: Analyzed through its constitutive enabling environments.",
        "Diagnostic Output — Standard Internalist Method: Conceptual alignment. The Diagnostic Method: Structural breakdown (\"action without acts,\" \"metacognitive atrophy\").",
        "Cross-Disciplinary Yield — Standard Internalist Method: Limited to confessional/internal audiences. The Diagnostic Method: Directly applicable to AI ethics, policy, and cognitive science."
      ]
    },
    {
      "heading": "Moving Forward: Research with Explanatory Leverage",
      "paragraphs": [
        "As algorithmic and predictive architectures become deeply embedded in institutional life, scholarship can no longer afford to remain in comfortable internalist silos. Rearranging conceptual definitions while the material conditions of human judgment change around us yields little insight.",
        "By shifting our focus to antecedent conditions, structural mechanisms, and systemic diagnoses, we produce work that does more than internal housekeeping. We build analytical models capable of identifying how technology reshapes human agency, governance, and responsibility—offering practical leverage for navigating an automated world."
      ]
    }
  ],
  "closing": []
},
{
  "slug": "silent-automation-of-professional-judgment",
  "title": "The Silent Automation of Professional Judgment: Why Efficiency Metrics Threaten the Future of Formation",
  "date": "2026-11-02",
  "readingTime": "5 min read",
  "description": "How automated recommendations, shifting burdens of proof, and efficiency targets can weaken professional judgment—and what institutions can do to protect its formation.",
  "lede": "We live in an era of seamless interfaces and predictive decision support. From clinical triage and social service allocations to legal discovery and academic evaluation, institutions are rapidly integrating algorithmic architectures under the banner of efficiency, neutrality, and complexity management.\n\nOn the surface, the narrative is compelling: delegate the repetitive analytical volume to the machine, and leave human practitioners free to exercise high-level discernment.\n\nMy recent theoretical work suggests a different possibility: rather than simply relieving human operators, algorithmic governance can erode professional agency through four cascading stages.",
  "sections": [
    {
      "heading": "The Four Stages of Epistemic Atrophy",
      "paragraphs": [
        "When we look beneath the surface of algorithmic optimization, we discover that digital systems do not simply support judgment; they fundamentally alter the conditions under which judgment occurs.",
        "Epistemic automation → outsourcing of complexity → moving standards of justification → automated governance and a crisis of professional formation."
      ]
    },
    {
      "heading": "1. Epistemic Automation (The Technological Premise)",
      "paragraphs": [
        "Drawing on Immanuel Kant’s distinction in the Critique of the Power of Judgment, authentic professional discernment relies on reflective judgment—the capacity to confront an ambiguous, unclassified situation and discover a context-sensitive meaning. Algorithmic platforms, by contrast, execute determining judgment: they force complex human particulars into predefined statistical categories. This generates automated certainty, collapsing the necessary hermeneutic hesitation that historically signals unresolved moral or diagnostic tension."
      ]
    },
    {
      "heading": "2. The Outsourcing of Complexity (The Organizational Mechanism)",
      "paragraphs": [
        "Systems rarely eliminate systemic friction; they simply externalize it. Under what I call infrastructural burden transfer, institutions report local cost savings while pushing the invisible work of verification, error-correction, and interface navigation onto individual practitioners. As researchers like Madeleine Elish have shown, human professionals become \"moral crumple zones\"—bearing full legal and ethical liability when a system fails, despite having little operational freedom to influence the output."
      ]
    },
    {
      "heading": "3. The Moving Standard of Justification (The Normative Shift)",
      "paragraphs": [
        "Once algorithmic outputs become institutional defaults, the burden of proof shifts dramatically. Under the Asymmetric Evaluation Principle (AEP), accepting a machine’s recommendation requires minimal procedural defense. Overriding it, however, demands an exhausting, documented case to counter a synthetic default. Over time, this dynamic endogenously ratchets up the standard of proof required for human dissent, turning professional discretion into a prohibitive career risk."
      ]
    },
    {
      "heading": "4. The Crisis of Professional Formation (The Pedagogical Casualty)",
      "paragraphs": [
        "What happens to professional education (Bildung or danning) under these conditions? Gert Biesta identifies three essential purposes of education: qualification, socialization, and subjectification (becoming an independent, answerable subject). Algorithmic governance hyper-optimizes qualification and enforces rigid socialization, but systematically starves subjectification. Novice practitioners are trained to seek immediate shelter under machine predictions rather than developing the courage to stand accountable for their own situated choices."
      ]
    },
    {
      "heading": "Reclaiming Epistemic Agency: A Strategic Agenda",
      "paragraphs": [
        "If we are to preserve human dignity and authentic accountability in our public institutions—whether in education, healthcare, or social administration—we cannot treat technological integration as a neutral upgrade. We must actively design institutional safeguards that protect the space for human reflection:",
        "Formative Governance & Epistemic Hesitation: Higher education curricula must deliberately cultivate spaces for open-ended, unmediated reflective judgment, treating ethical friction not as a system flaw, but as the essence of professional wisdom (phronesis).",
        "Inverting the Burden of Proof: Institutions must implement strong \"safe harbor\" protections for practitioners who override automated metrics based on qualitative, context-specific insights.",
        "Establishing Jurisdictional Sanctuaries: Professional bodies must designate specific decision-making domains where probabilistic pattern-matching models are strictly prohibited or strictly confined to advisory roles."
      ]
    }
  ],
  "closing": [
    "I welcome dialogue with colleagues, researchers, and institutional leaders navigating these transformations. How are automated tools reshaping judgment and accountability in your field? Let’s connect."
  ]
},
{
  "slug": "when-ai-helps-us-think",
  "title": "When AI Helps Us Think, Who Is Responsible for What We Know?",
  "date": "2026-10-27",
  "readingTime": "6 min read",
  "description": "Scientific knowledge has always depended on tools, collaboration, and trust. Artificial intelligence brings a new question into focus: what happens when we remain responsible for conclusions we can no longer adequately explain?",
  "lede": "Scientific knowledge has always depended on tools, collaboration, and trust. Artificial intelligence brings a new question into focus: what happens when we remain responsible for conclusions we can no longer adequately explain?",
  "sections": [
    {
      "heading": "AI and the responsibility to understand",
      "paragraphs": [
        "Scientific research has never been a purely individual intellectual achievement. We depend on instruments, statistical methods, colleagues, inherited theories, and institutions that make knowledge possible. No scientist independently reconstructs every calculation, verifies every underlying assumption, or personally possesses all the expertise on which a research project depends.",
        "This dependence is not a weakness. It is one of the conditions that makes modern science possible.",
        "Artificial intelligence, however, introduces a new dimension to this familiar arrangement. Generative AI can now suggest hypotheses, interpret findings, construct arguments, summarize research, and produce scientific explanations. It can perform tasks that previously required substantial intellectual engagement from researchers.",
        "The immediate question is often whether using AI is acceptable.",
        "I believe a more important question lies beneath it: When we use AI to produce scientific knowledge, do we retain the understanding required to take responsibility for what we claim?",
        "This question is at the centre of my recently published article, Derivative Epistemic Agency: AI-Mediated Scientific Cognition and the Limits of Human Answerability, in JMIR Metascience and Research Integrity."
      ]
    },
    {
      "heading": "The Difference Between Producing an Answer and Understanding It",
      "paragraphs": [
        "Consider two researchers using an AI system to interpret statistical results.",
        "The first researcher receives a suggested interpretation, examines the underlying analysis, checks its assumptions, considers alternatives, and ultimately accepts a conclusion that she can explain and defend.",
        "The second receives an equally convincing interpretation but lacks the competence to assess whether it is justified. The explanation sounds plausible, the references appear appropriate, and the conclusion fits the expected narrative. The researcher incorporates it into the manuscript.",
        "Both researchers have used AI. Both may produce scientifically credible prose. Yet their relationships to the resulting knowledge are fundamentally different.",
        "The distinction is not about whether AI contributed to the work. It is about whether the researcher can justify adopting that contribution.",
        "In my article, I describe a continuum between integrated epistemic extension and derivative epistemic substitution.",
        "In the first case, technology extends our intellectual capabilities while leaving us able to evaluate and defend our conclusions. In the second, technology begins to substitute for the very capacities through which we ordinarily exercise scientific judgment.",
        "The distinction matters because generating a plausible conclusion is not equivalent to possessing adequate reasons for accepting it."
      ]
    },
    {
      "heading": "Responsibility Requires More Than a Declaration",
      "paragraphs": [
        "Scientific journals increasingly require authors to disclose their use of generative AI. Such transparency is important, but disclosure alone cannot answer the central epistemic question.",
        "A researcher can truthfully declare that AI was used, confirm that the manuscript has been reviewed, and accept full responsibility for its contents.",
        "But what does that responsibility mean if nobody involved can adequately explain why a consequential conclusion should be accepted?",
        "I call this problem responsibility asymmetry.",
        "It arises when formal responsibility remains with human authors while their capacity to justify particular claims is insufficient.",
        "This does not mean that researchers must independently reproduce every scientific operation. A clinician can legitimately rely on a statistician, just as a research team may rely on a properly validated instrument whose internal workings are not fully transparent.",
        "The requirement is more modest, but also more demanding: someone within the responsible research team must be able to explain why the relevant evidence, expertise, or validated procedure provides adequate grounds for accepting the conclusion.",
        "Scientific responsibility is therefore not simply a matter of authorship, disclosure, or approval. It requires what I describe as sufficient justificatory competence: the ability to respond to reasonable questions about evidence, assumptions, alternatives, limitations, and circumstances that would require revision.",
        "A conclusion may be correct without having been responsibly justified. Conversely, a carefully justified conclusion may later turn out to be mistaken.",
        "Understanding this difference is essential to scientific integrity."
      ]
    },
    {
      "heading": "From Philosophical Questions to Practical Safeguards",
      "paragraphs": [
        "One challenge in studying artificial intelligence is moving beyond general warnings about its consequences.",
        "It is relatively easy to argue that excessive reliance on AI might weaken critical thinking. It is more difficult to establish when reliance becomes problematic, how we might recognize it, and what institutions should reasonably do in response.",
        "My article therefore attempts to connect philosophical analysis with practical proposals for scientific publishing.",
        "One proposal is an epistemic participation profile, which would identify where AI has contributed substantive reasoning, which researchers are responsible for evaluating it, and what evidence supports their acceptance of the resulting claims.",
        "Another is a risk-sensitive approach to reporting. Correcting the grammar of a manuscript does not create the same responsibilities as allowing an AI system to formulate an interpretation of a primary clinical outcome.",
        "A third proposal concerns reasoning audits: targeted opportunities for researchers to demonstrate how they justify a particular scientific conclusion when a specific concern arises.",
        "These are not established standards or validated assessment methods. They are conceptual proposals that require empirical investigation before wider adoption.",
        "The purpose is not to punish researchers for using AI, nor to create unrealistic expectations of intellectual self-sufficiency. It is to preserve the relationship between scientific claims and the human capacity to answer for them."
      ]
    },
    {
      "heading": "A Broader Question About Human Agency",
      "paragraphs": [
        "Although the article focuses on scientific research, the underlying question reaches considerably further.",
        "As AI becomes integrated into education, healthcare, administration, and professional decision-making, we increasingly encounter situations in which people remain formally responsible for judgments that are partly constructed elsewhere.",
        "A physician may endorse a recommendation generated by a clinical decision-support system. A teacher may adopt an automated assessment. A public administrator may rely on a technological classification that affects another person's opportunities.",
        "In each case, the presence of a human decision-maker does not automatically establish that meaningful human judgment has occurred.",
        "The important question concerns the relationship between the decision, the reasons supporting it, and the person's capacity to evaluate and revise those reasons.",
        "This connects to a broader research interest that has increasingly shaped my work: the conditions under which human agency, judgment, and responsibility remain possible within technologically mediated institutions."
      ]
    }
  ],
  "closing": [],
  "relatedArticle": {
    "title": "Derivative Epistemic Agency: AI-Mediated Scientific Cognition and the Limits of Human Answerability",
    "href": "https://metascience.jmir.org/2026/1/e105907",
    "venue": "JMIR Metascience and Research Integrity"
  }
},
  {
    slug: "derivative-epistemic-agency",
    title: "Derivative Epistemic Agency: When AI Helps Write the Science, Who Can Still Answer for It?",
    date: "2026-10-21",
    readingTime: "5 min read",
    description:
      "A new article published in JMIR Metascience and Research Integrity argues that the real risk of AI in research is not plagiarism or hallucination, but authors who remain formally responsible for claims they can no longer fully answer for.",
    lede: "Most discussion of AI in research is about plagiarism, made-up references, disclosure statements and who counts as an author. These are real problems. But my article \"Derivative Epistemic Agency: AI-Mediated Scientific Cognition and the Limits of Human Answerability\", published in JMIR Metascience and Research Integrity, argues that they are symptoms of a deeper shift in how scientific claims are produced.",
    sections: [
      {
        heading: "The problem beneath the familiar worries",
        paragraphs: [
          "Generative AI can help with scientific work while leaving authors responsible for claims they may not adequately understand. Authorship rules and disclosure statements make sure a human name stands behind every paper. But stating that one supervised the work does not show that one has the understanding needed to answer for it.",
          "The article draws on social epistemology, theories of distributed and extended cognition, automation research, work on responsibility gaps, and metascience to describe this shift more precisely.",
        ],
        concepts: ["exercisable-answerability"],
      },
      {
        heading: "Not a yes-or-no question",
        paragraphs: [
          "Using AI is not simply either acceptable or unacceptable. The article offers a graded account of how researchers relate to the systems they rely on.",
          "At one end is integrated epistemic extension: the researcher delegates work to a tool but keeps comprehension, the ability to evaluate the result, control over it, and the ability to answer for it. At the other end is derivative epistemic substitution: these capacities fall below what genuine answerability requires — even though the researcher is still listed as the author.",
        ],
        concepts: ["inferential-license", "judgment-gap"],
      },
      {
        heading: "Responsibility asymmetry",
        paragraphs: [
          "The gap between these two is what the article calls responsibility asymmetry: a mismatch between the responsibility formally assigned to an author and the actual competence that author retains over what their paper claims.",
          "The article sets out when this asymmetry arises, how it differs from ordinary reliance on tools, and why publication pressure in today's research system makes it more likely.",
        ],
        concepts: ["exercisable-answerability"],
      },
      {
        heading: "From diagnosis to practical rules",
        paragraphs: [
          "The article tests existing guidance — the ICMJE authorship criteria, COPE guidance, and contributorship frameworks such as CRediT and MeRIT — against this account, and finds that they establish who is accountable without checking whether accountability can actually be exercised.",
          "It then proposes a governance model scaled to risk: a profile of how each author took part in the reasoning, tiered reporting of where key thinking came from, an enforceable standard for whether the reasoning can be audited, and fair treatment of AI use, for instance for researchers writing in a second language. The aim is rules that journals and institutions can actually apply, not just aspirations.",
        ],
        concepts: ["epistemic-infrastructure"],
      },
    ],
    closing: [
      "Why it is interesting: the article moves the debate from \"Was AI used?\" to \"Can the author still answer for what the paper claims?\" That question matters to journals, research institutions and readers of science alike, especially in health research, where published claims shape practice.",
      "Elden, Å. Derivative Epistemic Agency: AI-Mediated Scientific Cognition and the Limits of Human Answerability. JMIR Metascience and Research Integrity (2026). https://metascience.jmir.org/2026/1/e105907",
    ],
  },
  {
    slug: "for-dommekraft-handling-og-ansvar",
    title: "Før dømmekraft, handling og ansvar",
    date: "2026-10-14",
    readingTime: "5 min lesetid",
    description:
      "Hva må være på plass før menneskelig dømmekraft, handling og ansvar kan utøves? Om forståelse, handlingsrom og institusjonene som gjør dem mulige.",
    lede: "Vi spør ofte om mennesker har vurdert riktig, handlet godt eller tatt ansvar. Men disse spørsmålene forutsetter noe som lett blir oversett: at det faktisk var mulig å vurdere, handle og svare for det som skjedde. Forskningen min undersøker hva som må være på plass før menneskelig dømmekraft, handling og ansvar kan utøves.",
    sections: [
      {
        heading: "Spørsmålet som kommer før",
        paragraphs: [
          "Når en beslutning får uheldige følger, leter vi gjerne etter personen som tok den. Hvem godkjente? Hvem signerte? Hvem burde ha grepet inn? Det er nødvendige spørsmål. Men de er ikke alltid de første vi bør stille.",
          "Før vi vurderer hva noen burde ha gjort, må vi undersøke hvilke muligheter vedkommende faktisk hadde. Var informasjonen tilgjengelig og forståelig? Fantes det tid til å vurdere den? Kunne personen utfordre premissene, velge annerledes eller stanse prosessen?",
          "Dette flytter oppmerksomheten fra den enkelte beslutningen til betingelsene som gjorde beslutningen mulig. Poenget er ikke å frita mennesker for ansvar, men å undersøke grunnlaget for å tilskrive dem det.",
        ],
      },
      {
        heading: "Dømmekraft er mer enn å motta et svar",
        paragraphs: [
          "Menneskelig dømmekraft innebærer mer enn å velge mellom ferdig oppstilte alternativer. Den krever at vi kan forstå hva som står på spill, vurdere relevansen av opplysninger og spørre om selve problemstillingen er riktig. Noen ganger består god dømmekraft nettopp i å avvise rammen som en beslutning presenteres innenfor.",
          "Et system kan levere en anbefaling uten å gjøre begrunnelsen tilgjengelig for den som skal bruke den. Anbefalingen kan til og med være korrekt. Likevel følger det ikke automatisk at personen som godtar den, har hatt anledning til å utøve selvstendig dømmekraft. Et riktig resultat og en begrunnet vurdering er ikke det samme.",
          "Vi må derfor spørre hva som gjør en vurdering til personens egen: ikke at den er upåvirket av andre, men at personen har en reell mulighet til å undersøke, prøve og ta stilling til grunnene.",
        ],
        concepts: ["judgment-gap", "inferential-license"],
      },
      {
        heading: "Handling krever et reelt handlingsrom",
        paragraphs: [
          "Å være til stede i en prosess er ikke det samme som å kunne påvirke den. En person kan stå oppført som beslutningstaker og likevel mangle myndighet, ressurser eller praktiske muligheter til å handle annerledes. Den formelle rollen forteller oss derfor ikke alene hvor handlingsrommet finnes.",
          "Tenk på en tenkt arbeidssituasjon der en ansatt skal godkjenne en automatisk anbefaling. Arbeidsmengden gir knapt tid til gjennomgang, grunnlaget er vanskelig å etterprøve, og et avvik krever en godkjenning som sjelden er tilgjengelig. Den ansatte kan teknisk sett trykke nei. Men den tekniske muligheten er ikke nødvendigvis et reelt alternativ.",
          "Dette betyr ikke at enhver begrensning opphever handleevne. Menneskelig handling foregår alltid innenfor rammer. Spørsmålet er hvilke begrensninger som fortsatt tillater meningsfull påvirkning, og hvilke som gjør personens deltakelse til en formalitet.",
        ],
        concepts: ["systemic-friction"],
      },
      {
        heading: "Ansvar må kunne utøves, ikke bare plasseres",
        paragraphs: [
          "Ansvar omtales ofte som noe som fordeles etter at en hendelse har funnet sted. Men ansvar har også en side som kommer før utfallet: muligheten til å forstå en forpliktelse, reagere på relevante grunner og gripe inn mens handlingen ennå kan påvirkes.",
          "Det er derfor ikke nok at en institusjon kan peke på en navngitt ansvarlig. Personen må også kunne svare for vurderingen på en meningsfull måte. Det krever blant annet tilgang til grunnlaget og mulighet til å forklare, utfordre og korrigere det som gjøres.",
          "Når slike betingelser mangler, kan problemet være mer grunnleggende enn uklar ansvarsfordeling. Vi må undersøke om den formen for ansvar vi tilskriver personen, overhodet kunne oppstå i situasjonen. Å plassere ansvar kan ikke i ettertid skape det handlingsrommet som manglet.",
        ],
        concepts: ["exercisable-answerability"],
      },
      {
        heading: "Betingelsene formes før beslutningen",
        paragraphs: [
          "Tid, tilgang til informasjon, arbeidsdeling og muligheter for innsigelse er ikke bare bakgrunn for menneskelige valg. De er med på å bestemme hva mennesker kan få øye på, forstå og gjøre. Institusjoner og teknologier former dermed betingelsene for dømmekraft og ansvar før den enkelte står overfor en beslutning.",
          "Kunstig intelligens gjør dette særlig synlig, men spørsmålet er ikke begrenset til AI. Det oppstår også i administrative rutiner, profesjonelle hierarkier og vurderingssystemer. Overalt hvor noen forventes å svare for et resultat, må vi undersøke forholdet mellom forventningen og de faktiske mulighetene til å påvirke det.",
          "Den praktiske oppgaven blir å bevare rom for begrunnet uenighet, etterprøving og inngrep. Det er ikke tilstrekkelig å beholde et menneske i prosessen dersom prosessen samtidig fjerner det mennesket trenger for å kunne utøve rollen.",
        ],
        concepts: ["epistemic-infrastructure"],
      },
      {
        heading: "Fra det vi observerer, til det vi tilskriver",
        paragraphs: [
          "At noen har signert, viser at en signatur foreligger. Det viser ikke alene at personen hadde kontroll. At noen har godkjent en anbefaling, viser ikke alene at vedkommende kunne vurdere den. Overgangen fra et observerbart forhold til en tilskrivelse av dømmekraft, handling eller ansvar trenger en begrunnelse.",
          "Her ligger en felles tråd i forskningsprogrammet mitt: Hva gir oss grunnlag for å gjøre denne overgangen, og hva må allerede være på plass for at grunnlaget skal holde? Det er et spørsmål om betingelser, men også om hvordan betingelsene blir skapt, fordelt og noen ganger fjernet.",
        ],
        concepts: ["inferential-license"],
      },
    ],
    closing: [
      "Vi bør ikke slutte å spørre hva mennesker har gjort, eller hva de bør svare for. Men vi må også stille spørsmålet som kommer før: Hadde de reelle muligheter til å forstå, vurdere og påvirke det som skjedde?",
      "Menneskelig dømmekraft, handling og ansvar sikres ikke bare ved å kreve dem. Vi må også sørge for at betingelsene for å utøve dem er til stede.",
    ],
  },
  {
    slug: "mennesket-i-endring",
    title: "Mennesket i endring: Hva skjer med frihet, kunnskap og ansvar når verden forvandles?",
    date: "2026-10-14",
    readingTime: "2 min lesetid",
    description:
      "Når teknologi, sosiale relasjoner og institusjonelle praksiser endrer seg, utfordres det teoretiske fundamentet som filosofien har hvilt på.",
    lede: "Klassisk filosofi har gitt oss dypsindige teorier om hva det vil si å tenke, handle, være fri og bære ansvar. Tradisjonelt har disse teoriene tatt utgangspunkt i gitte forutsetninger om den menneskelige natur og våre omgivelser: at kunnskap krever en bevisst observatør, at en handling er et resultat av et fritt valg, og at etisk ansvar forutsetter en viss grad av kontroll.\n\nMen hva skjer når selve betingelsene for disse begrepene endres i takt med omverdenen?\n\nNår teknologi, sosiale relasjoner og institusjonelle praksiser endrer seg, utfordres det teoretiske fundamentet som filosofien har hvilt på.",
    sections: [
      {
        heading: "1. Kunnskap i en digital og nettverksbasert tidsalder",
        paragraphs: [
          "Hva vil det si å «vite» noe når algoritmer, søkemotorer og kunstig intelligens overtar deler av vår kognitive prosess? Tidligere var kunnskap noe som i hovedsak ble tilegnet, bearbeidet og lagret i det enkelte menneskes sinn. I dag er kunnskap i økende grad distribuert og mediert gjennom teknologiske verktøy og institusjonelle nettverk. Forutsetningen om det uavhengige, erkjennende subjektet må derfor revideres.",
        ],
      },
      {
        heading: "2. Handling og agens: Hvem handlet egentlig?",
        paragraphs: [
          "Tradisjonelle handlingsteorier forutsetter en klar årsakssammenheng mellom menneskelig intensjon og den utførte handlingen. Men når beslutninger fattes i komplekse sosiotekniske systemer – der algoritmisk styring, institusjonelt regelverk og sosiale normer veves sammen – blir grensene for menneskelig agens uklare. Er det personen, verktøyet eller systemet som utfører handlingen?",
        ],
      },
      {
        heading: "3. Frihetens nye rammebetingelser",
        paragraphs: [
          "Frihet defineres ofte som fravær av tvang eller som evnen til å forme eget liv. Samtidig endrer nye teknologier og sosiale mønstre måten vi påvirkes på. Gjennom atferdsdesign, sosiale medier og institusjonelle føringer formes våre preferanser og valg lenge før vi i det hele tatt er klar over det. Frihet handler i dag ikke bare om å kunne velge fritt blant alternativer, men om å forstå hvordan selve handlingsrommet oppstår og begrenses.",
        ],
      },
      {
        heading: "4. Ansvar i komplekse strukturer",
        paragraphs: [
          "Etisk og juridisk ansvar forutsetter vanligvis kontroll, forutsigbarhet og en klar aktør. Når handlinger skjer gjennom sammensatte institusjoner eller automatiserte prosesser, oppstår ofte et «ansvarsvakuum». Hvem bærer ansvaret når et system feiler, eller når institusjonelle praksiser fører til utilsiktede konsekvenser?",
        ],
      },
      {
        heading: "Veien videre for filosofien",
        paragraphs: [
          "Å undersøke filosofiens forutsetninger i lys av samtiden er ikke bare en teoretisk øvelse, men en praktisk nødvendighet. For å kunne navigere i en verden preget av raske teknologiske og sosiale endringer, må vi kontinuerlig stille spørsmålet: Holdes de filosofiske verktøyene våre fortsatt oppdatert, eller analyserer vi en ny virkelighet med utdaterte briller?",
        ],
      },
    ],
    closing: [],
  },
  {
    "slug": "nar-kategoriene-brister",
    "title": "Når kategoriene brister: Hva skjer med kunnskap, handling og ansvar i den algoritmisk medierte tidsalder?",
    "date": "2026-10-14",
    "readingTime": "5 min lesetid",
    "description": "Hva skjer med kunnskap, handling og ansvar når algoritmer og institusjonelle infrastrukturer utfordrer filosofiens etablerte kategorier?",
    "lede": "Filosofien har i århundrer stilt de samme grunnleggende spørsmålene: Hva kan vi vite? Hva vil det si å handle fritt? Og hvem bærer ansvaret når ting går galt?\n\nKlassiske svar har forutsatt en nokså ryddig verden: Det finnes et uavhengig tenkende subjekt, en klar sammenheng mellom intensjon og handling, og verktøy som ganske enkelt forsterker våre egne evner. Men når beslutninger og kunnskapsproduksjon i dag skjer i tette samspill mellom autonome algoritmer, generative modeller og ugjennomsiktige institusjonelle infrastrukturer, oppstår en fundamental utfordring: Våre etablerte filosofiske kategorier passer ikke lenger på praksisen de skal forklare.\n\nNedenfor undersøkes denne problemstillingen systematisk gjennom fire avgjørende metodiske spørsmål.",
    "sections": [
      {
        "heading": "1. Problemet: Er dette et reelt filosofisk problem – eller bare begrepsmessig inflasjon?",
        "paragraphs": [
          "Et berettiget kontrollspørsmål til enhver samtidsfilosofisk tese er om vi egentlig har oppdaget noe nytt, eller om vi bare har oppfunnet fasjonable nyord som «algoritmisk agens» og «distribuert ansvar».",
          "Svaret er at problemet er genuint, ontologisk og praksisorientert:",
          "Mangel på epistemisk uavhengighet: Tradisjonell erkjennelsesteori forutsetter en aktør med enten direkte tilgang til sansedata eller klar kontroll over egne deduktive resonnementer. Når kunnskap i dag produseres og medieres av lærende algoritmer, forkylles forutsetningen om det uavhengige, erkjennende subjektet.",
          "Sammenbrudd i tilregnelighet (imputabilitet): Tradisjonell handlingsfilosofi og etikk krever kausal kontroll og forutsigbarhet for at en aktør skal kunne stilles til ansvar. Når teknologiske og organisatoriske infrastrukturer skaper et «ansvarsvakuum» – der ingen enkeltaktør besitter hverken full oversikt eller eksklusiv kontroll – står vi overfor et teoretisk og juridisk sammenbrudd i begrepet om moral tilregnelighet.",
          "Problemet oppstår altså ikke i språket, men i at de faktiske betingelsene for menneskelig liv og beslutningstaking har endret seg fundamentalt."
        ]
      },
      {
        "heading": "2. Tradisjonen: Hva er den sterkeste eksisterende forklaringen, og hvorfor strekker den ikke til?",
        "paragraphs": [
          "Det sterkeste forsvaret for det eksisterende rammeverket finnes i klassisk handlingsfilosofi (som hos Donald Davidson og Harry Frankfurt), Kantianisme og tradisjonell institusjonell etikk.",
          "Denne tradisjonen hviler på tre søyler:",
          "Handling: En handling er en kroppsbevegelse forårsaket på riktig måte av aktørens intensjoner, ønsker og trosforestillinger.",
          "Ansvar: En aktør bærer ansvar dersom handlingen var frivillig, utført med tilstrekkelig kunnskap og under aktørens kontroll.",
          "Teknologi som instrument: Verktøy er nøytrale midler; moral og agens tilhører utelukkende mennesket som bruker verktøyet."
        ]
      },
      {
        "heading": "Hvorfor denne forklaringen svikter",
        "paragraphs": [
          "Tradisjonen har tre avgjørende blindsoner i møte med moderne teknologi:",
          "Blindsonen for konstitutiv mediering: Den godtar at verktøy forsterker menneskelig kapasitet, men overser at mediet omstrukturerer selve mulighetsrommet for skjønn, valg og oppmerksomhet før aktøren i det hele tatt begynner å reflektere.",
          "Det distribuert-sammenkoblede skjønn: Den klassiske modellen antar en atomær aktør som foretar isolerte vurderinger. Den klarer ikke å fange opp situasjoner der det faglige eller etiske skjønnet er spredt utover sosiotekniske systemer slik at den epistemiske gjennomsiktigheten går tapt.",
          "Systemisk asymmetri: Ved å behandle teknologiske rammer enten som «nøytrale verktøy» eller som «ytre tvang», feiler tradisjonen i å forklare hvordan moderne infrastruktur former handlingsbetingelsene fra utsiden og innsiden samtidig."
        ]
      },
      {
        "heading": "3. Bidraget: Hva kan vi forstå nå som vi ikke forsto like godt tidligere?",
        "paragraphs": [
          "Ved å analysere de endrede betingelsene direkte, i stedet for å tvinge nye fenomener inn i klassiske former, oppnår vi tre avgjørende teoretiske og praktiske innsikter:",
          "Mekanismen bak «ansvarsvakuumer» (The Institutionalization Gap): Vi ser nå at manglende ansvar ved bruk av ny teknologi (som generativ KI) i organisasjoner sjeldent skyldes uærlighet eller uvilje hos enkeltpersoner. Det skyldes et strukturelt avvik der individuell adopsjon av teknologiske verktøy går mye raskere enn utviklingen av institusjonelle styringsstrukturer og vurderingskriterier.",
          "Skjønnets og agensens relasjonelle struktur: Vi lærer å skille skarpt mellom lavgradig oppgaveutførelse og høygradige faglige skjønnsprosesser. Vi kan presisere nøyaktig hvor og hvordan teknologisk støtte glir over fra å være en kognitiv protese til å bli en ufrivillig delegasjon av vurderingsmyndighet.",
          "Rekonstruert imputabilitet: Vi får et teoretisk fundament for å reetablere moral og juridisk tilregnelighet. I stedet for å kreve en umulig, absolutt kontroll over komplekse systemer, kan ansvarsbegrepet knyttes til aktørens evne til å redegjøre for, begrunne og kvalitetssikre sitt medierte skjønn."
        ]
      },
      {
        "heading": "4. Motargumentet: Kan ikke en tradisjonell filosof forklare alt dette uten å endre premissene?",
        "paragraphs": [
          "En tradisjonelt orientert eller reduksjonistisk filosof vil typisk reise følgende motargument:",
          "«Vi trenger ingen revisjon av filosofiske forutsetninger. Alt dette kan forklares ved hjelp av klassiske begreper om uvitenhet (epistemisk feil) eller manglende kontroll (kausal svikt). Når en kirurg feiler med en robot, eller en saksbehandler gjør feil med en algoritme, gjelder de samme reglene som før: Enten var personen uforsiktig (aktsomhetsansvar), eller så var det en teknisk svikt (produktansvar). Å snakke om 'endrede betingelser for frihet og ansvar' er bare en overkomplisert måte å si at verktøyene våre har blitt mer avanserte på.»"
        ]
      },
      {
        "heading": "Hvorfor motargumentet feiler i praksis",
        "paragraphs": [
          "Det misforstår konstitutiv mediering: Reduksjonismen behandler teknologiske og institusjonelle systemer som ytre omstendigheter (på linje med regnvær eller dårlig sikt). Men algoritmiske praksiser former selve språket, oppmerksomheten og kriteria for hva som teller som en gyldig begrunnelse eller en rasjonell handling.",
          "Kollaps i praksis: Tviholder man på den tradisjonelle modellen, tvinges man over i et falskt dilemma: Enten må man konkludere med at ingen bærer ansvar i komplekse sosiotekniske systemer (fordi ingen oppfyller kravene til full innsikt og kontroll), eller så må man ilegge enkeltpersoner et strengt objektivt ansvar som oppleves vilkårlig og urettferdig.",
          "Mangel på eksplanatorisk kraft: Vår nye tese forklarer den faktiske opplevelsen av normativ usikkerhet og lammelse hos fagfolk som skal utøve skjønn i dag. Den reduksjonistiske forklaringen avviser denne usikkerheten som en misforståelse, og forblir dermed blind for samtidsdiagnosen."
        ]
      },
      {
        "heading": "Konklusjon",
        "paragraphs": [
          "Å reevaluere filosofiens forutsetninger i lys av teknologiske og institusjonelle endringer er ikke et spørsmål om å kaste klassisk filosofi over bord. Det handler om å oppdatere verktøykassen slik at begrepene våre om kunnskap, handling, frihet og ansvar fortsatt har kritisk kraft og praktisk relevans i den hverdagen vi faktisk lever i."
        ]
      }
    ],
    "closing": []
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
        heading: "From first questions to prior questions",
        paragraphs: [
          "A first-order philosophical question asks something like: Is this person responsible? Does this person have moral standing? Is this achievement valuable? Is this exercise of power legitimate? These are important questions. But they are not usually where my own interest begins.",
          "I am increasingly interested in the prior question: What would have to be true for us to be entitled to move from the relevant facts to that conclusion? Suppose, for example, that an entity has moral standing. Does it follow that it should receive greater priority when claims conflict? No. Standing and priority answer different questions. Standing concerns admission into a normative domain. Priority concerns comparative ordering within that domain. A property that is sufficient to establish standing does not automatically acquire priority-conferring force. Something additional is required. There must be a bridge principle that licenses the transition.",
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
        concepts: [],
      },
      {
        heading: "Conditions, transitions, attribution",
        paragraphs: [
          "Three concepts increasingly summarize the project for me: conditions, transitions, attribution. We attribute responsibility, competence, authority, value, standing, priority, authorship, or agency. But such attribution depends upon transitions from one kind of fact to another kind of status. And those transitions depend upon prior conditions that may be social, temporal, institutional, epistemic, or agential.",
          "The philosophical task is therefore not merely to ask: What is true of this person, act, institution, or outcome? It is also to ask: What licenses us to move from what we know to what we attribute? And then, one level deeper: What must already be true for that licensing relation itself to exist?",
          "I currently think of this research programme as a philosophy of licensed transitions, closely connected to what might also be called a philosophy of prior conditions. Its governing question is simple to state: What must already be true before a transition in normative, epistemic, evaluative, or agential status is warranted? That question is deliberately general. It can be asked about moral responsibility and social standing, about institutions and technologies, about evaluation and comparison, about authorship and agency. The domains differ. The underlying philosophical structure may be the same. And that is increasingly what I think my philosophical project is about.",
        ],
        concepts: ["inferential-license", "exercisable-answerability"],
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
        concepts: ["exercisable-answerability"],
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
        heading: "Downstream costs",
        paragraphs: [
          "The harms produced when comparative entitlements are frustrated are downstream costs of institutional arrangements. They are generated by distributive structures, borne by parties outside the initial justification, and cannot be externalised from the basic structure.",
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
          "Transparency asks where the ordering behind a decision came from — the threshold, ranking, or category that turned data into a decisive reason. A system may be fully transparent about its data and yet unanswerable for its orderings.",
          "Exercisable answerability goes a step further. Even if the ordering is traceable, there must still be someone positioned to defend it. An institution can know which system produced a decision and still lack anyone capable of answering for why that decision deserved to count. The failure is not ignorance; it is the absence of a competent respondent.",
        ],
        concepts: [],
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
      "Exercisable answerability therefore belongs to the same movement as the other concepts in this programme. Inferential license is relocated; the judgment gap opens; the friction that would have sustained answerability is removed; and the person who remains nominally responsible no longer occupies the position from which the decision can be defended.",
      "The practical question is not how to keep a human in the loop, but how to keep the loop answerable — how to design institutions in which the standing to answer remains exercisable, not merely assigned.",
    ],
  },
  {
    slug: "the-vocabulary-in-one-piece",
    title: "The Vocabulary in One Piece: How the Concepts Fit Together",
    date: "2026-08-11",
    readingTime: "9 min read",
    description:
      "A single walk through the working vocabulary of the programme — inferential license, judgment gap, the partition thesis, ethical disclosure, comparative entitlement formation, post-mimetic relationality, epistemic infrastructure, systemic friction, and automated certainty — and how each concept depends on the others.",
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
        heading: "What answerability requires: an author for the ordering",
        paragraphs: [
          "If judgment is to be owned, its normative footing must be traceable. Knowing where data came from is not enough. The harder question is: where did the orderings come from that make those data matter — the threshold, the ranking, the category that turned an output into something decisive?",
          "Systems routinely satisfy the first requirement while failing the second. Every input is documented; no addressable party ever authored the ordering under which the output counts. An institution in that position cannot answer for the decisions its systems produce, however complete its audit trail.",
        ],
        concepts: [],
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
