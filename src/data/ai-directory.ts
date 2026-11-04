export interface ExpertPerson {
  id: number;
  name: string;
  institution: string;
  expertise: string;
  category: string;
}

export const EXPERT_CATEGORIES: string[] = [
  "Maskinlæring og grunnleggende KI",
  "Computer vision og bildeanalyse",
  "Språkmodeller, NLP og kunnskapsrepresentasjon",
  "Robotikk og autonome systemer",
  "KI-etikk, forklarbarhet og ansvarlig KI",
  "KI i helse og medisin",
  "Life science, bioinformatikk og forskningsdata",
  "KI i utdanning, læring og dannelse",
  "KI-jus, regulering og personvern",
  "KI, filosofi, samfunn og menneskelig autonomi",
  "KI i medier, kommunikasjon og kreative uttrykk",
  "KI-strategi, ledelse og kommersialisering",
  "Offentlig sektor, KI-styring og implementering",
  "Industriell KI, energi og miljø",
  "KI-sikkerhet, robusthet og cybersikkerhet"
];

export const EXPERT_PEOPLE: ExpertPerson[] = [
  {
    "id": 1,
    "name": "Morten Goodwin",
    "institution": "UiA",
    "expertise": "Dyp læring, anvendt KI",
    "category": "Maskinlæring og grunnleggende KI"
  },
  {
    "id": 2,
    "name": "Helge Langseth",
    "institution": "NTNU",
    "expertise": "Bayesianske nettverk, beslutningsstøtte",
    "category": "Maskinlæring og grunnleggende KI"
  },
  {
    "id": 3,
    "name": "Filippo Maria Bianchi",
    "institution": "UiT",
    "expertise": "Maskinlæring, grafmodeller, tidsserier",
    "category": "Maskinlæring og grunnleggende KI"
  },
  {
    "id": 4,
    "name": "Pål Grønås Drange",
    "institution": "UiB",
    "expertise": "Algoritmer og maskinlæring",
    "category": "Maskinlæring og grunnleggende KI"
  },
  {
    "id": 5,
    "name": "Pinar Heggernes",
    "institution": "UiB",
    "expertise": "Algoritmer og KI-forskningsledelse",
    "category": "Maskinlæring og grunnleggende KI"
  },
  {
    "id": 6,
    "name": "Pekka Parviainen",
    "institution": "UiB",
    "expertise": "Maskinlæring og datavitenskap",
    "category": "Maskinlæring og grunnleggende KI"
  },
  {
    "id": 7,
    "name": "Hans Julius Skaug",
    "institution": "UiB",
    "expertise": "Statistikk og maskinlæring",
    "category": "Maskinlæring og grunnleggende KI"
  },
  {
    "id": 8,
    "name": "Robert Jenssen",
    "institution": "UiT",
    "expertise": "Dyp læring, visuell intelligens",
    "category": "Computer vision og bildeanalyse"
  },
  {
    "id": 9,
    "name": "Michael Kampffmeyer",
    "institution": "UiT",
    "expertise": "Forklarbar KI, medisinsk bildeanalyse",
    "category": "Computer vision og bildeanalyse"
  },
  {
    "id": 10,
    "name": "Anne Solberg",
    "institution": "UiO",
    "expertise": "Maskinlæring og bildeanalyse",
    "category": "Computer vision og bildeanalyse"
  },
  {
    "id": 11,
    "name": "Line Eikvil",
    "institution": "Norsk Regnesentral",
    "expertise": "Bildeanalyse, anvendt maskinlæring",
    "category": "Computer vision og bildeanalyse"
  },
  {
    "id": 12,
    "name": "Adín Ramírez Rivera",
    "institution": "UiO",
    "expertise": "Computer vision, representasjonslæring",
    "category": "Computer vision og bildeanalyse"
  },
  {
    "id": 13,
    "name": "Arnt-Børre Salberg",
    "institution": "Norsk Regnesentral",
    "expertise": "Fjernmåling og bildeanalyse",
    "category": "Computer vision og bildeanalyse"
  },
  {
    "id": 14,
    "name": "Anders Ueland Waldeland",
    "institution": "Norsk Regnesentral",
    "expertise": "Bildeanalyse i energisektoren",
    "category": "Computer vision og bildeanalyse"
  },
  {
    "id": 15,
    "name": "Erik Velldal",
    "institution": "UiO",
    "expertise": "Språkteknologi og maskinlæring",
    "category": "Språkmodeller, NLP og kunnskapsrepresentasjon"
  },
  {
    "id": 16,
    "name": "Samia Touileb",
    "institution": "UiB",
    "expertise": "NLP, automatisert tekstanalyse",
    "category": "Språkmodeller, NLP og kunnskapsrepresentasjon"
  },
  {
    "id": 17,
    "name": "Trond Trosterud",
    "institution": "UiT",
    "expertise": "Samisk språkteknologi",
    "category": "Språkmodeller, NLP og kunnskapsrepresentasjon"
  },
  {
    "id": 18,
    "name": "Thomas Ågotnes",
    "institution": "UiB",
    "expertise": "Logikk, multiagentsystemer",
    "category": "Språkmodeller, NLP og kunnskapsrepresentasjon"
  },
  {
    "id": 19,
    "name": "Bjørnar Tessem",
    "institution": "UiB",
    "expertise": "KI-algoritmer og kunnskapsbaserte systemer",
    "category": "Språkmodeller, NLP og kunnskapsrepresentasjon"
  },
  {
    "id": 20,
    "name": "Kerstin Bach",
    "institution": "NTNU",
    "expertise": "Intelligente systemer, datadrevet KI",
    "category": "Språkmodeller, NLP og kunnskapsrepresentasjon"
  },
  {
    "id": 21,
    "name": "Benjamin Ricaud",
    "institution": "UiT",
    "expertise": "Grafbasert maskinlæring, generativ KI",
    "category": "Språkmodeller, NLP og kunnskapsrepresentasjon"
  },
  {
    "id": 22,
    "name": "Jim Tørresen",
    "institution": "UiO",
    "expertise": "Robotikk og intelligente systemer",
    "category": "Robotikk og autonome systemer"
  },
  {
    "id": 23,
    "name": "Lei Jiao",
    "institution": "UiA",
    "expertise": "Tsetlin-maskiner og læringsautomater",
    "category": "Robotikk og autonome systemer"
  },
  {
    "id": 24,
    "name": "Linga Reddy Cenkeramaddi",
    "institution": "UiA",
    "expertise": "Autonome systemer og sensorteknologi",
    "category": "Robotikk og autonome systemer"
  },
  {
    "id": 25,
    "name": "Kai Olav Ellefsen",
    "institution": "UiO",
    "expertise": "Robotikk og maskinlæring",
    "category": "Robotikk og autonome systemer"
  },
  {
    "id": 26,
    "name": "Adil Rasheed",
    "institution": "NTNU",
    "expertise": "KI, digitale tvillinger og droner",
    "category": "Robotikk og autonome systemer"
  },
  {
    "id": 27,
    "name": "Puneet Sharma",
    "institution": "UiT",
    "expertise": "KI, automasjon og bildeanalyse",
    "category": "Robotikk og autonome systemer"
  },
  {
    "id": 28,
    "name": "Inga Strümke",
    "institution": "NTNU",
    "expertise": "Forklarbar KI og KI-etikk",
    "category": "KI-etikk, forklarbarhet og ansvarlig KI"
  },
  {
    "id": 29,
    "name": "Marija Slavkovik",
    "institution": "UiB",
    "expertise": "Maskinetikk, logikk og normative systemer",
    "category": "KI-etikk, forklarbarhet og ansvarlig KI"
  },
  {
    "id": 30,
    "name": "Miria Grisot",
    "institution": "UiO",
    "expertise": "Ansvarlig KI og datapraksiser",
    "category": "KI-etikk, forklarbarhet og ansvarlig KI"
  },
  {
    "id": 31,
    "name": "Tone Bratteteig",
    "institution": "UiO",
    "expertise": "Menneskesentrert KI og systemdesign",
    "category": "KI-etikk, forklarbarhet og ansvarlig KI"
  },
  {
    "id": 32,
    "name": "Maja van der Velden",
    "institution": "UiO",
    "expertise": "Kritiske KI-studier, teknologietikk",
    "category": "KI-etikk, forklarbarhet og ansvarlig KI"
  },
  {
    "id": 33,
    "name": "Kristoffer Wickstrøm",
    "institution": "UiT",
    "expertise": "Forklarbar KI og modellusikkerhet",
    "category": "KI-etikk, forklarbarhet og ansvarlig KI"
  },
  {
    "id": 34,
    "name": "Fred Godtliebsen",
    "institution": "UiT",
    "expertise": "Statistiske metoder og usikkerhetsanalyse",
    "category": "KI-etikk, forklarbarhet og ansvarlig KI"
  },
  {
    "id": 35,
    "name": "Helge Ræder",
    "institution": "UiB",
    "expertise": "KI i medisin",
    "category": "KI i helse og medisin"
  },
  {
    "id": 36,
    "name": "Bettina Husebø",
    "institution": "UiB",
    "expertise": "KI i eldreomsorg og demens",
    "category": "KI i helse og medisin"
  },
  {
    "id": 37,
    "name": "Michael Riegler",
    "institution": "Simula",
    "expertise": "Medisinsk KI og analyse",
    "category": "KI i helse og medisin"
  },
  {
    "id": 38,
    "name": "Klas Pettersen",
    "institution": "Simula",
    "expertise": "KI og beregningsbasert helseforskning",
    "category": "KI i helse og medisin"
  },
  {
    "id": 39,
    "name": "Ole Christian Lingjærde",
    "institution": "UiO",
    "expertise": "Medisinsk informatikk og maskinlæring",
    "category": "KI i helse og medisin"
  },
  {
    "id": 40,
    "name": "Karl Øyvind Mikalsen",
    "institution": "UiT",
    "expertise": "KI i klinisk medisin",
    "category": "KI i helse og medisin"
  },
  {
    "id": 41,
    "name": "Samuel Kuttner",
    "institution": "UiT/UNN",
    "expertise": "Medisinsk avbildning, maskinlæring",
    "category": "KI i helse og medisin"
  },
  {
    "id": 42,
    "name": "Noeska Natasja Smit",
    "institution": "UiB",
    "expertise": "Medisinsk visualisering",
    "category": "KI i helse og medisin"
  },
  {
    "id": 43,
    "name": "Geir Kjetil Sandve",
    "institution": "UiO",
    "expertise": "Maskinlæring, biomedisinske data",
    "category": "Life science, bioinformatikk og forskningsdata"
  },
  {
    "id": 44,
    "name": "Inge Jonassen",
    "institution": "UiB",
    "expertise": "Bioinformatikk og algoritmer",
    "category": "Life science, bioinformatikk og forskningsdata"
  },
  {
    "id": 45,
    "name": "Lars Ailo Bongo",
    "institution": "UiT",
    "expertise": "Helsedata og beregningsinfrastruktur",
    "category": "Life science, bioinformatikk og forskningsdata"
  },
  {
    "id": 46,
    "name": "Marit Bakke",
    "institution": "UiB",
    "expertise": "KI i biomedisinsk forskning",
    "category": "Life science, bioinformatikk og forskningsdata"
  },
  {
    "id": 47,
    "name": "Torbjørn Rognes",
    "institution": "UiO",
    "expertise": "Bioinformatikk og sekvensanalyse",
    "category": "Life science, bioinformatikk og forskningsdata"
  },
  {
    "id": 48,
    "name": "Elisabeth Wetzer",
    "institution": "UiT",
    "expertise": "Maskinlæring og medisinsk bildeanalyse",
    "category": "Life science, bioinformatikk og forskningsdata"
  },
  {
    "id": 49,
    "name": "Barbara Wasson",
    "institution": "UiB",
    "expertise": "KI i utdanning, læringsanalyse",
    "category": "KI i utdanning, læring og dannelse"
  },
  {
    "id": 50,
    "name": "Mohammad Khalil",
    "institution": "UiB",
    "expertise": "AI in Education, syntetiske data",
    "category": "KI i utdanning, læring og dannelse"
  },
  {
    "id": 51,
    "name": "Kine Maridatter Dørum Maxwell",
    "institution": "UiT",
    "expertise": "Generativ KI i høyere utdanning",
    "category": "KI i utdanning, læring og dannelse"
  },
  {
    "id": 52,
    "name": "Marko Lukic",
    "institution": "UiT",
    "expertise": "KI i undervisning og læring",
    "category": "KI i utdanning, læring og dannelse"
  },
  {
    "id": 53,
    "name": "Monika Nerland",
    "institution": "UiO",
    "expertise": "Profesjonslæring og digital kunnskapspraksis",
    "category": "KI i utdanning, læring og dannelse"
  },
  {
    "id": 54,
    "name": "Guri Verne",
    "institution": "UiO",
    "expertise": "Menneske–KI-interaksjon",
    "category": "KI i utdanning, læring og dannelse"
  },
  {
    "id": 55,
    "name": "Jo Herstad",
    "institution": "UiO",
    "expertise": "KI, menneske–maskin-interaksjon",
    "category": "KI i utdanning, læring og dannelse"
  },
  {
    "id": 56,
    "name": "Tobias Mahler",
    "institution": "UiO",
    "expertise": "Regulering av KI, robotrett",
    "category": "KI-jus, regulering og personvern"
  },
  {
    "id": 57,
    "name": "Samson Yoseph Esayas",
    "institution": "UiO",
    "expertise": "KI-regulering, personvern og konkurranserett",
    "category": "KI-jus, regulering og personvern"
  },
  {
    "id": 58,
    "name": "Malgorzata Cyndecka",
    "institution": "UiB",
    "expertise": "EU/EØS-rett, personvern",
    "category": "KI-jus, regulering og personvern"
  },
  {
    "id": 59,
    "name": "Bjørn Aslak Juliussen",
    "institution": "UiT",
    "expertise": "KI-regulering og datasikkerhetsrett",
    "category": "KI-jus, regulering og personvern"
  },
  {
    "id": 60,
    "name": "Mona Naomi Lintvedt",
    "institution": "UiO",
    "expertise": "KI, personvern og robotrett",
    "category": "KI-jus, regulering og personvern"
  },
  {
    "id": 61,
    "name": "Vibeke Blaker Strand",
    "institution": "UiO",
    "expertise": "Diskrimineringsrett og ny teknologi",
    "category": "KI-jus, regulering og personvern"
  },
  {
    "id": 62,
    "name": "Åke Elden",
    "institution": "NLA Høgskolen",
    "expertise": "KI-etikk, autonomi og ansvar",
    "category": "KI, filosofi, samfunn og menneskelig autonomi"
  },
  {
    "id": 63,
    "name": "Jill Walker Rettberg",
    "institution": "UiB",
    "expertise": "KI, digital kultur og fortellinger",
    "category": "KI, filosofi, samfunn og menneskelig autonomi"
  },
  {
    "id": 64,
    "name": "Lars Nyre",
    "institution": "UiB",
    "expertise": "Teknologifilosofi og menneske–maskin-forhold",
    "category": "KI, filosofi, samfunn og menneskelig autonomi"
  },
  {
    "id": 65,
    "name": "Gabriele de Seta",
    "institution": "UiB",
    "expertise": "Algoritmer og digital kultur",
    "category": "KI, filosofi, samfunn og menneskelig autonomi"
  },
  {
    "id": 66,
    "name": "Scott Rettberg",
    "institution": "UiB",
    "expertise": "Digitale fortellinger og generativ KI",
    "category": "KI, filosofi, samfunn og menneskelig autonomi"
  },
  {
    "id": 67,
    "name": "Erik Knudsen",
    "institution": "UiB",
    "expertise": "KI, politisk kommunikasjon og medier",
    "category": "KI, filosofi, samfunn og menneskelig autonomi"
  },
  {
    "id": 68,
    "name": "Silvia Masiero",
    "institution": "UiO",
    "expertise": "Digital identitet, inkludering og teknologisk rettferdighet",
    "category": "KI, filosofi, samfunn og menneskelig autonomi"
  },
  {
    "id": 69,
    "name": "Christoph Trattner",
    "institution": "UiB/MediaFutures",
    "expertise": "Ansvarlig KI og anbefalingssystemer",
    "category": "KI i medier, kommunikasjon og kreative uttrykk"
  },
  {
    "id": 70,
    "name": "Duc Tien Dang Nguyen",
    "institution": "UiB",
    "expertise": "Multimedieverifikasjon og analyse",
    "category": "KI i medier, kommunikasjon og kreative uttrykk"
  },
  {
    "id": 71,
    "name": "Jason Nelson",
    "institution": "UiB",
    "expertise": "KI og digital kunst",
    "category": "KI i medier, kommunikasjon og kreative uttrykk"
  },
  {
    "id": 72,
    "name": "Alinta Kiri Krauth",
    "institution": "UiB",
    "expertise": "KI og digital kunst",
    "category": "KI i medier, kommunikasjon og kreative uttrykk"
  },
  {
    "id": 73,
    "name": "David Jhave Johnston",
    "institution": "UiB",
    "expertise": "KI-basert historiefortelling",
    "category": "KI i medier, kommunikasjon og kreative uttrykk"
  },
  {
    "id": 74,
    "name": "Viktoria Stray",
    "institution": "UiO",
    "expertise": "Generativ KI i programvareutvikling og samarbeid",
    "category": "KI i medier, kommunikasjon og kreative uttrykk"
  },
  {
    "id": 75,
    "name": "Vegard Kolbjørnsrud",
    "institution": "BI",
    "expertise": "KI og organisasjonsdesign",
    "category": "KI-strategi, ledelse og kommersialisering"
  },
  {
    "id": 76,
    "name": "Silvija Seres",
    "institution": "Teknologirådgivning",
    "expertise": "KI-strategi og digital transformasjon",
    "category": "KI-strategi, ledelse og kommersialisering"
  },
  {
    "id": 77,
    "name": "Elin Hauge",
    "institution": "Uavhengig rådgiver",
    "expertise": "KI-strategi og næringsliv",
    "category": "KI-strategi, ledelse og kommersialisering"
  },
  {
    "id": 78,
    "name": "Lars Rinnan",
    "institution": "Teknologibransjen",
    "expertise": "KI-forretningsutvikling",
    "category": "KI-strategi, ledelse og kommersialisering"
  },
  {
    "id": 79,
    "name": "Anita Schjøll Brede",
    "institution": "Iris.ai / teknologibransjen",
    "expertise": "KI-entreprenørskap",
    "category": "KI-strategi, ledelse og kommersialisering"
  },
  {
    "id": 80,
    "name": "Peder Inge Furseth",
    "institution": "BI",
    "expertise": "Teknologidrevet innovasjon",
    "category": "KI-strategi, ledelse og kommersialisering"
  },
  {
    "id": 81,
    "name": "Morten Irgens",
    "institution": "Akademia og KI-nettverk",
    "expertise": "KI-politikk og forskningsstrategi",
    "category": "KI-strategi, ledelse og kommersialisering"
  },
  {
    "id": 82,
    "name": "Cathrine Pihl Lyngstad",
    "institution": "NAV / KI-samarbeid",
    "expertise": "Data og offentlig KI-implementering",
    "category": "Offentlig sektor, KI-styring og implementering"
  },
  {
    "id": 83,
    "name": "Alex Moltzau",
    "institution": "KI-politikk og forskningsnettverk",
    "expertise": "Ansvarlig KI og offentlig politikk",
    "category": "Offentlig sektor, KI-styring og implementering"
  },
  {
    "id": 84,
    "name": "Alexander Moltubakk Kempton",
    "institution": "UiO",
    "expertise": "KI og endring i offentlig forvaltning",
    "category": "Offentlig sektor, KI-styring og implementering"
  },
  {
    "id": 85,
    "name": "Arild Waaler",
    "institution": "UiO",
    "expertise": "Industriell digitalisering og interoperabilitet",
    "category": "Offentlig sektor, KI-styring og implementering"
  },
  {
    "id": 86,
    "name": "Malcolm Langford",
    "institution": "UiO / TRUST",
    "expertise": "Pålitelig KI i institusjoner og rettssystem",
    "category": "Offentlig sektor, KI-styring og implementering"
  },
  {
    "id": 87,
    "name": "Øystein Flø Baste",
    "institution": "UiO",
    "expertise": "KI, utdanningsrett og digital forvaltning",
    "category": "Offentlig sektor, KI-styring og implementering"
  },
  {
    "id": 88,
    "name": "Signe Riemer-Sørensen",
    "institution": "SINTEF",
    "expertise": "Industriell og anvendt KI",
    "category": "Industriell KI, energi og miljø"
  },
  {
    "id": 89,
    "name": "Michail Spitieris",
    "institution": "SINTEF",
    "expertise": "Probabilistisk og fysikkinformert KI",
    "category": "Industriell KI, energi og miljø"
  },
  {
    "id": 90,
    "name": "Felix Kohler",
    "institution": "SINTEF",
    "expertise": "KI og industrielle analysesystemer",
    "category": "Industriell KI, energi og miljø"
  },
  {
    "id": 91,
    "name": "Katarzyna Michalowska",
    "institution": "SINTEF",
    "expertise": "Analytikk og industriell KI",
    "category": "Industriell KI, energi og miljø"
  },
  {
    "id": 92,
    "name": "Giulia Robbiani",
    "institution": "SINTEF",
    "expertise": "Anvendt KI og analytikk",
    "category": "Industriell KI, energi og miljø"
  },
  {
    "id": 93,
    "name": "Alexander Johannes Stasik",
    "institution": "SINTEF",
    "expertise": "Maskinlæring og industrielle systemer",
    "category": "Industriell KI, energi og miljø"
  },
  {
    "id": 94,
    "name": "Yngve Birkelund",
    "institution": "UiT",
    "expertise": "KI og vindkraftprediksjon",
    "category": "Industriell KI, energi og miljø"
  },
  {
    "id": 95,
    "name": "Ali Ramezani-Kebrya",
    "institution": "UiO",
    "expertise": "Robust og sikker dyp læring",
    "category": "KI-sikkerhet, robusthet og cybersikkerhet"
  },
  {
    "id": 96,
    "name": "Olav Lysne",
    "institution": "Simula",
    "expertise": "Sikkerhet i digitale systemer",
    "category": "KI-sikkerhet, robusthet og cybersikkerhet"
  },
  {
    "id": 97,
    "name": "Lillian Røstad",
    "institution": "Simula",
    "expertise": "Cybersikkerhet og digital tillit",
    "category": "KI-sikkerhet, robusthet og cybersikkerhet"
  },
  {
    "id": 98,
    "name": "Jostein Jensen",
    "institution": "Simula",
    "expertise": "Cybersikkerhet",
    "category": "KI-sikkerhet, robusthet og cybersikkerhet"
  },
  {
    "id": 99,
    "name": "Audun Jøsang",
    "institution": "UiO",
    "expertise": "Informasjonssikkerhet og tillitsmodeller",
    "category": "KI-sikkerhet, robusthet og cybersikkerhet"
  },
  {
    "id": 100,
    "name": "Vasileios Mavroeidis",
    "institution": "UiO",
    "expertise": "Cybertrusseletterretning og sikkerhetsanalyse",
    "category": "KI-sikkerhet, robusthet og cybersikkerhet"
  }
];

export const METHOD_CAVEAT = "Viktig metodeforbehold: Dette er et redaksjonelt bruttoutvalg, ikke en offisielt godkjent nasjonal ekspertliste. En rekke navn og fagområder er kontrollert mot institusjonenes egne oversikter, men ikke alle nåværende roller, publikasjoner og individuelle ekspertkvalifikasjoner er fullstendig validert. Rekkefølgen uttrykker ikke kvalitet eller rangering.";

/** Search tolerates Norwegian diacritics and requires every word to match. */
export function normalizeSearch(value: string) {
  return value.toLocaleLowerCase("nb-NO").replaceAll("æ", "ae").replaceAll("ø", "o").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function filterExperts(query: string, category: string, institution: string) {
  const terms = normalizeSearch(query).trim().split(/\s+/).filter(Boolean);
  return EXPERT_PEOPLE.filter((person) => {
    const haystack = normalizeSearch([person.name, person.institution, person.expertise, person.category].join(" "));
    return (!category || person.category === category) && (!institution || person.institution === institution) && terms.every((term) => haystack.includes(term));
  });
}

export function profileSearchUrl(person: ExpertPerson) {
  return `https://www.google.com/search?q=${encodeURIComponent(`${person.name} ${person.institution} profil`)}`;
}
