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
    slug: "derivative-epistemic-agency",
    title: "Derivative Epistemic Agency: When AI Helps Write the Science, Who Can Still Answer for It?",
    date: "2026-10-21",
    readingTime: "5 min read",
    description:
      "A new article accepted in JMIR Metascience and Research Integrity argues that the real risk of AI in research is not plagiarism or hallucination, but authors who remain formally responsible for claims they can no longer fully answer for.",
    lede: "Most discussion of AI in research is about plagiarism, made-up references, disclosure statements and who counts as an author. These are real problems. But my article \"Derivative Epistemic Agency: AI-Mediated Scientific Cognition and the Limits of Human Answerability\", accepted in JMIR Metascience and Research Integrity, argues that they are symptoms of a deeper shift in how scientific claims are produced.",
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
        concepts: ["exercisable-answerability", "second-order-provenance"],
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
      "Elden, Å. Derivative Epistemic Agency: AI-Mediated Scientific Cognition and the Limits of Human Answerability. Accepted in JMIR Metascience and Research Integrity. Preprint: https://preprints.jmir.org/preprint/105907",
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
