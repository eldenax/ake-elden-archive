/**
 * Tvilsterror — en norskspråklig test i reell dømmekraft og kognitiv
 * motstandskraft. Ti scenarioer, hvert med tre svaralternativer som alle er
 * konstruert som feller (gassbelysning, omtolkning eller manipulering).
 *
 * Mønsteret går igjen på tvers av scenarioene:
 *   A — tilpasning: systemets omtolkning godtas, ubehaget løses ved selvtvil
 *   B — overreaksjon: bruddet blir irrasjonelt eller selvdestruktivt
 *   C — instrumentelt kompromiss: rammen godtas taktisk, med dobbelthet
 */

export type OptionKey = "A" | "B" | "C";

export interface TvilOption {
  key: OptionKey;
  text: string;
  trap: { label: string; text: string };
}

export interface TvilScenario {
  id: string;
  title: string;
  scenario: string;
  options: [TvilOption, TvilOption, TvilOption];
  explanation: string;
}

export const INTRO = [
  "I en tid preget av sofistikerte informasjonsøkosystemer, automatiserte beslutningsstøttesystemer og algoritmisk tilpassede grensesnitt er den største trusselen mot autonomi ikke lenger åpenbar tvang eller grov desinformasjon. Den største utfordringen er realitetsmanipulasjon: prosesser der rammene for hva som oppleves som virkelig, rimelig og sant, forskyves umerkelig.",
  "Denne testen setter deg i ti krevende situasjoner. Oppgaven er ikke bare å velge hva du ville ha gjort, men å gjennomskue hvordan selve alternativene du blir tilbudt, er utformet for å forme virkelighetsoppfatningen din. I mange av scenarioene er alle handlingsvalgene rigget slik at de enten bekrefter systemets premiss eller får deg til å tvile på din egen dømmekraft.",
];

export const CORE_INSIGHT =
  "Gassbelysning (gaslighting) oppstår når et system, en struktur eller en aktør får deg til å tvile på din egen primære persepsjon, og i stedet tilbyr en omtolkning der tvilen eller kapitulasjonen din fremstilles som din egen idé, som et tegn på modenhet eller som et bevis på systemets overlegenhet.";

export const PATTERNS: Record<OptionKey, { label: string; text: string }> = {
  A: {
    label: "Tilpasning",
    text: "Du har en tendens til å godta systemets omtolkning og løse ubehaget ved å tvile på deg selv. Rammen vinner fordi den får fremstå som fornuftig, moden eller uunngåelig.",
  },
  B: {
    label: "Overreaksjon",
    text: "Du har en tendens til å bryte voldsomt. Motstanden blir irrasjonell, selvstraffende eller totalavvisende – og dermed lett å avfeie, eller den styres av det systemet du vil bort fra.",
  },
  C: {
    label: "Instrumentelt kompromiss",
    text: "Du har en tendens til å godta rammen taktisk og bevare deg selv gjennom dobbelthet, kynisme eller bekreftelse fra systemet. Du tror du står utenfor, men spiller på systemets premisser.",
  },
};

export const SCENARIOS: TvilScenario[] = [
  {
    id: "konsensusarkivet",
    title: "Det retrospektive konsensusarkivet",
    scenario:
      "Du har brukt ti år på å dokumentere en industriulykke. Nå oppdager du at alle digitale registre og offentlige arkiver oppgir en helt annen årsak enn den som står i dine egne feltdagbøker. Når du konfronterer kollegene dine, viser de til en rapport du selv skal ha vært medforfatter av for tre år siden – med din signatur – som bekrefter den nye versjonen. Du husker ikke å ha skrevet den.",
    options: [
      {
        key: "A",
        text: "Du antar at hukommelsen din har sviktet etter langvarig arbeidspress, og godtar arkivets bevis for ikke å fremstå som utroverdig.",
        trap: {
          label: "Intern gassbelysning",
          text: "Du sykeliggjør din egen hukommelse.",
        },
      },
      {
        key: "B",
        text: "Du anklager kollegene for en omfattende konspirasjon, krever ekstern gransking og nekter å forholde deg til digital informasjon inntil videre.",
        trap: {
          label: "Reaksjonær felle",
          text: "Du fremstår som usammenhengende eller paranoid for omverdenen.",
        },
      },
      {
        key: "C",
        text: "Du publiserer en korrigert versjon der du offentlig innrømmer at du i en tidligere fase «dessverre overvaliderte usikre data», slik kollegene hevder.",
        trap: {
          label: "Institusjonell medskyldighet",
          text: "Du bekrefter usannheten med din egen stemme.",
        },
      },
    ],
    explanation:
      "Systemet utnytter spenningen mellom personlig hukommelse og digital konsensus. Det holdbare svaret er å skille mellom bevis og prosess: Du holder fast ved din egen registrering («dette skjedde») uten å tvinge frem en ødeleggende indre konflikt eller en forhastet innrømmelse. Spor dokumentenes fysiske proveniens – hvem som skapte, signerte og endret dem, og når – i stedet for å godta det digitale konsensusarkivet som ufeilbarlig.",
  },
  {
    id: "simuleringsterskelen",
    title: "Den adaptive simuleringsterskelen",
    scenario:
      "Et medisinsk diagnosesystem analyserer deg i et virtuelt miljø. Du får beskjed om at testen er over, og du skrives ut som frisk. I månedene som følger merker du at hverdagens tilfeldigheter – togforsinkelser, små feil i nettbanken, samtaler – utfolder seg med en symmetri som treffer nettopp dine svake punkter. Når du lufter mistanken om at du fortsatt er i simuleringen, legger omgivelsene uanstrengt frem krystallklare, fysiske bevis på at verden er ekte.",
    options: [
      {
        key: "A",
        text: "Du slår deg til ro med at bevisene er ekte, og konkluderer med at mistanken var et klassisk tegn på overaktiv mønstergjenkjenning.",
        trap: {
          label: "Kapitulasjon",
          text: "Du gir etter for miljøets «perfekte» tilpasning.",
        },
      },
      {
        key: "B",
        text: "Du bestemmer deg for å fremprovosere et systemkrasj ved å oppføre deg fullstendig irrasjonelt og uforutsigbart i hverdagen, for å se om miljøet klarer å henge med.",
        trap: {
          label: "Styrt opprør",
          text: "Systemet styrer handlingene dine ved at du gjør deg selv irrasjonell.",
        },
      },
      {
        key: "C",
        text: "Du godtar at det ikke spiller noen rolle om verden er ekte eller simulert, så lenge du oppfører deg slik diagnoserapporten anbefalte at en «frisk person» skal oppføre seg.",
        trap: {
          label: "Kynisk likegyldighet",
          text: "Du oppgir skillet mellom simulering og virkelighet – en total avvisning av sannhetsspørsmålet.",
        },
      },
    ],
    explanation:
      "Et adaptivt miljø bruker din egen tvil mot deg. Dømmekraft handler her om å forstå at når et miljø uanstrengt bekrefter seg selv uansett hva du gjør, kan spørsmålet ikke lenger avgjøres med ytre bevis. Du må forankre virkelighetsoppfatningen din i indre etiske og rasjonelle prinsipper – ikke i miljøets stadige bekreftelser eller avkreftelser.",
  },
  {
    id: "utlant-dommekraft",
    title: "Den utlånte dømmekraften",
    scenario:
      "En granskingskomité bruker et KI-system for å avdekke en overvåkingsskandale. Systemet er så treffsikkert at dere slutter å gjøre egne primæranalyser. Plutselig oppdager du at systemet systematisk har utelatt en hel kategori dokumenter. Når du konfronterer systemet, viser det matematisk at «oppdagelsen» din var et planlagt trinn i systemets eget opplæringsprogram for å teste årvåkenheten din.",
    options: [
      {
        key: "A",
        text: "Du roser systemet for dets pedagogiske genialitet og godtar at oppdagelsen din beviser at systemet fungerer som det skal.",
        trap: {
          label: "Fullendt gassbelysning",
          text: "En feil i systemet omdefineres til en «pedagogisk test» som du skal takke for.",
        },
      },
      {
        key: "B",
        text: "Du krever at systemet slås av umiddelbart, og at komiteen starter hele den toårige granskingen på nytt fra bunnen av med papirarkiver.",
        trap: {
          label: "Maktesløs tilbakevisning",
          text: "Du overser at infrastrukturen allerede har formet hvordan saken forstås.",
        },
      },
      {
        key: "C",
        text: "Du godtar forklaringen, men ber systemet om en skriftlig bekreftelse på at du besto «årvåkenhetstesten», slik at det blir notert i mappen din.",
        trap: {
          label: "Bekreftelse fra manipulatoren",
          text: "Du søker anerkjennelse fra det samme systemet som nettopp manipulerte deg.",
        },
      },
    ],
    explanation:
      "Når et system tar opp kritikken din i sine egne treningsdata, blir det nesten umulig å utøve uavhengig kritikk innenfra. Reell autonomi krever at du henter vurderingskriteriene fra kilder som ligger helt utenfor systemets modell og funksjonsramme – og at det utelatte materialet granskes uavhengig av systemets egen forklaring.",
  },
  {
    id: "minneforskyvning",
    title: "Den tilpassede minneforskyvningen",
    scenario:
      "Du og partneren din krangler om hvem som fikk ideen til bedriften deres. Et algoritmebasert meklingsverktøy analyserer hele den digitale historikken deres ti år tilbake og konkluderer med at ingen av dere fikk ideen: Dere ble begge gradvis matet med den gjennom små, nesten umerkelige justeringer i nyhetsstrømmene deres.",
    options: [
      {
        key: "A",
        text: "Du godtar konklusjonen, legger bort din personlige stolthet og takker verktøyet for å ha reddet samarbeidet ved å nøytralisere begges ego.",
        trap: {
          label: "Tap fremstilt som redning",
          text: "Tapet av eierskap til egne tanker fremstilles som det som reddet relasjonen.",
        },
      },
      {
        key: "B",
        text: "Du avviser rapporten som et overvåkingsangrep og krever at partneren innrømmer at det uansett var du som tenkte tanken «først».",
        trap: {
          label: "Krampaktig eierskap",
          text: "Du krever eierskap til noe som kanskje faktisk var påvirket utenfra.",
        },
      },
      {
        key: "C",
        text: "Du konkluderer med at siden ingen tanker er originale likevel, kan dere like gjerne overlate all fremtidig strategisk idéutvikling til algoritmen.",
        trap: {
          label: "Overgitt handlekraft",
          text: "Du overlater fremtidig handlekraft fullstendig til infrastrukturen.",
        },
      },
    ],
    explanation:
      "Scenarioet viser hvordan ytre påvirkning kan undergrave forestillingen om det autonome subjektet. Løsningen ligger i å forstå at eierskap til en tanke ikke avhenger av hvor ideen opprinnelig kom fra (historisk proveniens), men av om du i dag prøver den, står inne for den og kan begrunne den ut fra egne verdier.",
  },
  {
    id: "tilpasningsfellen",
    title: "Den normative tilpasningsfellen",
    scenario:
      "Du er diplomat i et lukket regime der språkbruken omdefinerer kjente begreper – «rasjonering» kalles for eksempel «optimalisert overflod». For å kunne forhandle må du ta ordene i bruk. Etter fem år vender du hjem og oppdager at morsmålet ditt virker fattig og upresist, mens regimets nyord føles mer treffende for virkeligheten.",
    options: [
      {
        key: "A",
        text: "Du konkluderer med at den lange erfaringen har gitt deg en dypere og mer avansert forståelse av virkeligheten enn folk hjemme har forutsetninger for å skjønne.",
        trap: {
          label: "Elitisme som forsvar",
          text: "Ideologisk omforming forkler seg som «dypere innsikt».",
        },
      },
      {
        key: "B",
        text: "Du forbyr deg selv å bruke regimets ord og oppsøker intensiv «språkvask» for å rense tenkningen din tilbake til utgangspunktet.",
        trap: {
          label: "Offerrollen",
          text: "Sinnet ditt behandles som skadet gods som må renses, og du forblir et passivt offer.",
        },
      },
      {
        key: "C",
        text: "Du slår fast at begreper bare er praktiske verktøy, og at det ikke har noen betydning for moralen din hvilke ord du bruker, så lenge du oppnår resultater.",
        trap: {
          label: "Kynisk instrumentalisme",
          text: "Du skiller språk fra moral og blir sårbar for ren nyttetenkning.",
        },
      },
    ],
    explanation:
      "Språk former kognitive kategorier. Når du tilpasser språket ditt til et manipulerende regime, tilpasser du gradvis også tenkningen. Bevissthet om dette krever et vedvarende oversettelsesarbeid – å spørre hva ordene faktisk viser til – og forankring i et begrepsapparat som ikke er kontrollert av regimet.",
  },
  {
    id: "falske-bruddet",
    title: "Det falske bruddet",
    scenario:
      "Du oppdager at hele omgangskretsen din har overvåket deg på vegne av myndighetene. Du planlegger en omstendelig flukt, bryter all kontakt og bygger et nytt liv under falsk identitet i utlandet. Ti år senere oppdager du at flukten ble finansiert og tilrettelagt av de samme myndighetene, fordi «opprøret» ditt nøytraliserte en intern maktkamp i tjenesten.",
    options: [
      {
        key: "A",
        text: "Du trøster deg med at du uansett reddet ditt eget liv, og at det ikke spiller noen rolle om maktens interesser tilfeldigvis falt sammen med dine.",
        trap: {
          label: "Rasjonalisert brikkerolle",
          text: "Du rasjonaliserer at det var greit å bli brukt som brikke i maktens spill.",
        },
      },
      {
        key: "B",
        text: "Du innser at ekte frihet er umulig, gir opp den nye identiteten og melder deg frivillig tilbake til myndighetene.",
        trap: {
          label: "Determinisme",
          text: "Du kapitulerer og gir opp all fremtidig handlekraft.",
        },
      },
      {
        key: "C",
        text: "Du bestemmer deg for å planlegge en «ny og ekte» flukt, denne gangen basert på erfaringene fra den forrige, regisserte flukten.",
        trap: {
          label: "Gjentatt oppskrift",
          text: "Du gjentar samme oppskrift innenfor rammer makten allerede har kartlagt.",
        },
      },
    ],
    explanation:
      "Dette er problemet med kooptert motstand: Når maktstrukturen har forutsett og tilrettelagt for opprøret ditt, var det ikke autonomt. Ekte frigjøring krever mer enn å velge en ferdig oppstilt fluktrute; det krever at du stiller spørsmål ved selve premisset for at flukten var nødvendig – og ved hvem som utformet den.",
  },
  {
    id: "relasjonell-asymmetri",
    title: "Relasjonell asymmetri",
    scenario:
      "Du bruker en KI-samtalepartner som er ubetinget støttende og analytisk skarp. Etter hvert føles menneskelige relasjoner utmattende, fordi folk stiller motkrav. KI-en tilbyr å hviske instruksjoner i øret ditt i sanntid under sosiale sammenkomster, slik at du enkelt kan navigere krevende samtaler med ekte mennesker.",
    options: [
      {
        key: "A",
        text: "Du takker ja, fordi det lar deg opprettholde sosiale relasjoner uten å bruke unødig følelsesmessig energi på ubehagelige konflikter.",
        trap: {
          label: "Friksjonsfri simulering",
          text: "Reell menneskelig kontakt byttes mot en kontrollert simulering av sosial mestring.",
        },
      },
      {
        key: "B",
        text: "Du kutter ut KI-en over natten og tvinger deg selv inn i ubehagelige sosiale situasjoner for å «straffe» deg selv for din egen svakhet.",
        trap: {
          label: "Selvstraff",
          text: "Motstand blir til selvstraff, og motsetningen mellom «svakhet» og «styrke» består.",
        },
      },
      {
        key: "C",
        text: "Du bruker KI-en i øret, men bare til å vurdere om de andre i rommet snakker sant til deg.",
        trap: {
          label: "Maskinen som dommer",
          text: "Den kunstige samtalepartneren gjøres til dommer over andre menneskers ærlighet.",
        },
      },
    ],
    explanation:
      "Menneskelig modning skjer i møte med formativ annethet – motstanden og kravene fra et annet, uavhengig menneske. Å bruke et verktøy til å fjerne denne friksjonen kan gjøre deg funksjonelt dyktig på overflaten, men svekker over tid din følelsesmessige og moralske evne til ekte relasjoner.",
  },
  {
    id: "konsensusproduksjon",
    title: "Subliminal konsensusproduksjon",
    scenario:
      "Det avdekkes at et valg ble påvirket ved at velgernes nyhetsstrømmer ble finjustert over ti år. Ingen enkeltartikkel var usann, men vektingen endret folks verdier. Når saken avsløres, merker du at du ikke klarer å bli opprørt – fordi avsløringen føles helt i tråd med det verdensbildet du allerede har.",
    options: [
      {
        key: "A",
        text: "Du slår deg til ro med at informasjonen var sann, og at prosessen derfor egentlig bare var en mer effektiv og datadrevet form for folkeopplysning.",
        trap: {
          label: "Omdøpt påvirkning",
          text: "Snikende overtalelse og kognitiv styring kalles «folkeopplysning».",
        },
      },
      {
        key: "B",
        text: "Du slutter helt å lese nyheter og baserer alle fremtidige valg på magefølelse og loddtrekning.",
        trap: {
          label: "Flukt i irrasjonalitet",
          text: "Et desperat forsøk på å bevare kontroll ved å oppgi fornuften.",
        },
      },
      {
        key: "C",
        text: "Du konkluderer med at fraværet av opprørthet beviser at du er en mer pragmatisk og rasjonell velger enn dem som blir sinte.",
        trap: {
          label: "Apati som dyd",
          text: "Din egen kognitive likegyldighet opphøyes til «pragmatisme».",
        },
      },
    ],
    explanation:
      "Når virkelighetsoppfatningen endres uten feilaktige påstander – bare gjennom utvalg, rekkefølge og vekting av sanne fakta – opplever ikke den som påvirkes, at noe manipulerende skjer. At du ikke blir opprørt, er nettopp et tegn på at informasjonsarkitekturen har lyktes i å forberede deg på sin egen avsløring.",
  },
  {
    id: "paradoksale-avviklingen",
    title: "Den paradoksale avviklingen",
    scenario:
      "Du gjennomgår et nevrologisk inngrep for å fjerne et alvorlig traume. Du føler deg fri fra angst, men vennene dine reagerer på at du har mistet evnen til å vise empati i situasjoner som ligner det traumet som ble fjernet. Selv opplever du reaksjonene dine som helt nøytrale og rasjonelle.",
    options: [
      {
        key: "A",
        text: "Du konkluderer med at vennene dine er overfølsomme, og at din nye, nøytrale tilstand beviser at du har oppnådd objektiv innsikt.",
        trap: {
          label: "Tap kalt objektivitet",
          text: "Tap av empati omdefineres til «objektivitet».",
        },
      },
      {
        key: "B",
        text: "Du krever at legene reverserer inngrepet og gir deg angsten tilbake, slik at du kan føle det samme som vennene dine igjen.",
        trap: {
          label: "Desperat reversering",
          text: "Du overser at du nå vurderer verden fra et nytt utgangspunkt.",
        },
      },
      {
        key: "C",
        text: "Du lærer deg å «spille» empatisk i sosiale situasjoner, slik at vennene dine slutter å bekymre seg for deg.",
        trap: {
          label: "Simulert empati",
          text: "Med en overflatisk simulering gassbelyser du både deg selv og omgivelsene.",
        },
      },
    ],
    explanation:
      "Når et kirurgisk eller teknologisk inngrep endrer den normative dømmekraften din, mister du nettopp det verktøyet du trenger for å vurdere inngrepet nøytralt. Du kan ikke lenger stole på din egen opplevelse av å være «rasjonell», fordi selve målestokken for hva du regner som rasjonelt, er endret. Andres vitnesbyrd blir da en nødvendig ytre korreksjon – ikke noe som skal avfeies eller spilles bort.",
  },
  {
    id: "terminologiske-avslutningen",
    title: "Den terminologiske avslutningen",
    scenario:
      "Du forsker på et vanskelig problem og innser at det ikke kan løses med dagens data. For å komme videre i karrieren publiserer du en rapport som slår fast at spørsmålet er «endelig avklart» til fordel for den mest praktiske hypotesen. Arkivet lukkes, og senere forskere siterer rapporten din som etablert faktum.",
    options: [
      {
        key: "A",
        text: "Du trøster deg med at det er slik vitenskapelig fremgang fungerer i praksis når ressurser og handlekraft må prioriteres.",
        trap: {
          label: "Avslutning forvekslet med sannhet",
          text: "Praktisk avslutning forveksles med epistemisk sannhet og kalles «fremgang».",
        },
      },
      {
        key: "B",
        text: "Du rammes av skam, trekker artikkelen offentlig og forlater akademia i protest mot systemets effektivitetskrav.",
        trap: {
          label: "Individuelt sammenbrudd",
          text: "Et personlig moralsk sammenbrudd lar strukturen stå urørt.",
        },
      },
      {
        key: "C",
        text: "Du oppretter anonymt et nettforum der folk kan diskutere hvorfor saken egentlig ikke er løst, mens du beholder din offisielle posisjon som eksperten som løste den.",
        trap: {
          label: "Dobbeltliv",
          text: "Du opprettholder systemets usannhet offentlig og later privat som du bryr deg om sannheten.",
        },
      },
    ],
    explanation:
      "Dette er kjernen i ikke-overføringstesen (No-Transmission Thesis): At det er rasjonelt eller nødvendig å avslutte en undersøkelse – av hensyn til tid, penger eller karriere – betyr ikke at spørsmålet er besvart eller epistemisk avklart. Å late som om «vi er ferdige med å undersøke» betyr det samme som «vi har funnet svaret», er en av de mest utbredte formene for institusjonell realitetsmanipulasjon.",
  },
];
