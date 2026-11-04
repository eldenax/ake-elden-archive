export interface ExpertPerson {
  id: number;
  name: string;
  institution: string;
  expertise: string;
  category: string;
}

export const EXPERT_CATEGORIES: string[] = [
  "Machine learning and foundational AI",
  "Computer vision and image analysis",
  "Language models, NLP and knowledge representation",
  "Robotics and autonomous systems",
  "AI ethics, explainability and responsible AI",
  "AI in health and medicine",
  "Life sciences, bioinformatics and research data",
  "AI in education, learning and human formation",
  "AI law, regulation and privacy",
  "AI, philosophy, society and human autonomy",
  "AI in media, communication and creative expression",
  "AI strategy, leadership and commercialisation",
  "Public sector, AI governance and implementation",
  "Industrial AI, energy and the environment",
  "AI safety, robustness and cybersecurity"
];

export const EXPERT_PEOPLE: ExpertPerson[] = [
  {
    "id": 1,
    "name": "Morten Goodwin",
    "institution": "UiA",
    "expertise": "Deep learning, applied AI",
    "category": "Machine learning and foundational AI"
  },
  {
    "id": 2,
    "name": "Helge Langseth",
    "institution": "NTNU",
    "expertise": "Bayesian networks, decision support",
    "category": "Machine learning and foundational AI"
  },
  {
    "id": 3,
    "name": "Filippo Maria Bianchi",
    "institution": "UiT",
    "expertise": "Machine learning, graph models, time series",
    "category": "Machine learning and foundational AI"
  },
  {
    "id": 4,
    "name": "Pål Grønås Drange",
    "institution": "UiB",
    "expertise": "Algorithms and machine learning",
    "category": "Machine learning and foundational AI"
  },
  {
    "id": 5,
    "name": "Pinar Heggernes",
    "institution": "UiB",
    "expertise": "Algorithms and AI research leadership",
    "category": "Machine learning and foundational AI"
  },
  {
    "id": 6,
    "name": "Pekka Parviainen",
    "institution": "UiB",
    "expertise": "Machine learning and data science",
    "category": "Machine learning and foundational AI"
  },
  {
    "id": 7,
    "name": "Hans Julius Skaug",
    "institution": "UiB",
    "expertise": "Statistics and machine learning",
    "category": "Machine learning and foundational AI"
  },
  {
    "id": 8,
    "name": "Robert Jenssen",
    "institution": "UiT",
    "expertise": "Deep learning, visual intelligence",
    "category": "Computer vision and image analysis"
  },
  {
    "id": 9,
    "name": "Michael Kampffmeyer",
    "institution": "UiT",
    "expertise": "Explainable AI, medical image analysis",
    "category": "Computer vision and image analysis"
  },
  {
    "id": 10,
    "name": "Anne Solberg",
    "institution": "UiO",
    "expertise": "Machine learning and image analysis",
    "category": "Computer vision and image analysis"
  },
  {
    "id": 11,
    "name": "Line Eikvil",
    "institution": "Norwegian Computing Center",
    "expertise": "Image analysis, applied machine learning",
    "category": "Computer vision and image analysis"
  },
  {
    "id": 12,
    "name": "Adín Ramírez Rivera",
    "institution": "UiO",
    "expertise": "Computer vision, representation learning",
    "category": "Computer vision and image analysis"
  },
  {
    "id": 13,
    "name": "Arnt-Børre Salberg",
    "institution": "Norwegian Computing Center",
    "expertise": "Remote sensing and image analysis",
    "category": "Computer vision and image analysis"
  },
  {
    "id": 14,
    "name": "Anders Ueland Waldeland",
    "institution": "Norwegian Computing Center",
    "expertise": "Image analysis in the energy sector",
    "category": "Computer vision and image analysis"
  },
  {
    "id": 15,
    "name": "Erik Velldal",
    "institution": "UiO",
    "expertise": "Language technology and machine learning",
    "category": "Language models, NLP and knowledge representation"
  },
  {
    "id": 16,
    "name": "Samia Touileb",
    "institution": "UiB",
    "expertise": "NLP, automated text analysis",
    "category": "Language models, NLP and knowledge representation"
  },
  {
    "id": 17,
    "name": "Trond Trosterud",
    "institution": "UiT",
    "expertise": "Sámi language technology",
    "category": "Language models, NLP and knowledge representation"
  },
  {
    "id": 18,
    "name": "Thomas Ågotnes",
    "institution": "UiB",
    "expertise": "Logic, multi-agent systems",
    "category": "Language models, NLP and knowledge representation"
  },
  {
    "id": 19,
    "name": "Bjørnar Tessem",
    "institution": "UiB",
    "expertise": "AI algorithms and knowledge-based systems",
    "category": "Language models, NLP and knowledge representation"
  },
  {
    "id": 20,
    "name": "Kerstin Bach",
    "institution": "NTNU",
    "expertise": "Intelligent systems, data-driven AI",
    "category": "Language models, NLP and knowledge representation"
  },
  {
    "id": 21,
    "name": "Benjamin Ricaud",
    "institution": "UiT",
    "expertise": "Graph-based machine learning, generative AI",
    "category": "Language models, NLP and knowledge representation"
  },
  {
    "id": 22,
    "name": "Jim Tørresen",
    "institution": "UiO",
    "expertise": "Robotics and intelligent systems",
    "category": "Robotics and autonomous systems"
  },
  {
    "id": 23,
    "name": "Lei Jiao",
    "institution": "UiA",
    "expertise": "Tsetlin machines and learning automata",
    "category": "Robotics and autonomous systems"
  },
  {
    "id": 24,
    "name": "Linga Reddy Cenkeramaddi",
    "institution": "UiA",
    "expertise": "Autonomous systems and sensor technology",
    "category": "Robotics and autonomous systems"
  },
  {
    "id": 25,
    "name": "Kai Olav Ellefsen",
    "institution": "UiO",
    "expertise": "Robotics and machine learning",
    "category": "Robotics and autonomous systems"
  },
  {
    "id": 26,
    "name": "Adil Rasheed",
    "institution": "NTNU",
    "expertise": "AI, digital twins and drones",
    "category": "Robotics and autonomous systems"
  },
  {
    "id": 27,
    "name": "Puneet Sharma",
    "institution": "UiT",
    "expertise": "AI, automation and image analysis",
    "category": "Robotics and autonomous systems"
  },
  {
    "id": 28,
    "name": "Inga Strümke",
    "institution": "NTNU",
    "expertise": "Explainable AI and AI ethics",
    "category": "AI ethics, explainability and responsible AI"
  },
  {
    "id": 29,
    "name": "Marija Slavkovik",
    "institution": "UiB",
    "expertise": "Machine ethics, logic and normative systems",
    "category": "AI ethics, explainability and responsible AI"
  },
  {
    "id": 30,
    "name": "Miria Grisot",
    "institution": "UiO",
    "expertise": "Responsible AI and data practices",
    "category": "AI ethics, explainability and responsible AI"
  },
  {
    "id": 31,
    "name": "Tone Bratteteig",
    "institution": "UiO",
    "expertise": "Human-centred AI and system design",
    "category": "AI ethics, explainability and responsible AI"
  },
  {
    "id": 32,
    "name": "Maja van der Velden",
    "institution": "UiO",
    "expertise": "Critical AI studies, technology ethics",
    "category": "AI ethics, explainability and responsible AI"
  },
  {
    "id": 33,
    "name": "Kristoffer Wickstrøm",
    "institution": "UiT",
    "expertise": "Explainable AI and model uncertainty",
    "category": "AI ethics, explainability and responsible AI"
  },
  {
    "id": 34,
    "name": "Fred Godtliebsen",
    "institution": "UiT",
    "expertise": "Statistical methods and uncertainty analysis",
    "category": "AI ethics, explainability and responsible AI"
  },
  {
    "id": 35,
    "name": "Helge Ræder",
    "institution": "UiB",
    "expertise": "AI in medicine",
    "category": "AI in health and medicine"
  },
  {
    "id": 36,
    "name": "Bettina Husebø",
    "institution": "UiB",
    "expertise": "AI in elder care and dementia",
    "category": "AI in health and medicine"
  },
  {
    "id": 37,
    "name": "Michael Riegler",
    "institution": "Simula",
    "expertise": "Medical AI and analysis",
    "category": "AI in health and medicine"
  },
  {
    "id": 38,
    "name": "Klas Pettersen",
    "institution": "Simula",
    "expertise": "AI and computational health research",
    "category": "AI in health and medicine"
  },
  {
    "id": 39,
    "name": "Ole Christian Lingjærde",
    "institution": "UiO",
    "expertise": "Medical informatics and machine learning",
    "category": "AI in health and medicine"
  },
  {
    "id": 40,
    "name": "Karl Øyvind Mikalsen",
    "institution": "UiT",
    "expertise": "AI in clinical medicine",
    "category": "AI in health and medicine"
  },
  {
    "id": 41,
    "name": "Samuel Kuttner",
    "institution": "UiT/UNN",
    "expertise": "Medical imaging, machine learning",
    "category": "AI in health and medicine"
  },
  {
    "id": 42,
    "name": "Noeska Natasja Smit",
    "institution": "UiB",
    "expertise": "Medical visualisation",
    "category": "AI in health and medicine"
  },
  {
    "id": 43,
    "name": "Geir Kjetil Sandve",
    "institution": "UiO",
    "expertise": "Machine learning, biomedical data",
    "category": "Life sciences, bioinformatics and research data"
  },
  {
    "id": 44,
    "name": "Inge Jonassen",
    "institution": "UiB",
    "expertise": "Bioinformatics and algorithms",
    "category": "Life sciences, bioinformatics and research data"
  },
  {
    "id": 45,
    "name": "Lars Ailo Bongo",
    "institution": "UiT",
    "expertise": "Health data and computing infrastructure",
    "category": "Life sciences, bioinformatics and research data"
  },
  {
    "id": 46,
    "name": "Marit Bakke",
    "institution": "UiB",
    "expertise": "AI in biomedical research",
    "category": "Life sciences, bioinformatics and research data"
  },
  {
    "id": 47,
    "name": "Torbjørn Rognes",
    "institution": "UiO",
    "expertise": "Bioinformatics and sequence analysis",
    "category": "Life sciences, bioinformatics and research data"
  },
  {
    "id": 48,
    "name": "Elisabeth Wetzer",
    "institution": "UiT",
    "expertise": "Machine learning and medical image analysis",
    "category": "Life sciences, bioinformatics and research data"
  },
  {
    "id": 49,
    "name": "Barbara Wasson",
    "institution": "UiB",
    "expertise": "AI in education, learning analytics",
    "category": "AI in education, learning and human formation"
  },
  {
    "id": 50,
    "name": "Mohammad Khalil",
    "institution": "UiB",
    "expertise": "AI in education, synthetic data",
    "category": "AI in education, learning and human formation"
  },
  {
    "id": 51,
    "name": "Kine Maridatter Dørum Maxwell",
    "institution": "UiT",
    "expertise": "Generative AI in higher education",
    "category": "AI in education, learning and human formation"
  },
  {
    "id": 52,
    "name": "Marko Lukic",
    "institution": "UiT",
    "expertise": "AI in teaching and learning",
    "category": "AI in education, learning and human formation"
  },
  {
    "id": 53,
    "name": "Monika Nerland",
    "institution": "UiO",
    "expertise": "Professional learning and digital knowledge practices",
    "category": "AI in education, learning and human formation"
  },
  {
    "id": 54,
    "name": "Guri Verne",
    "institution": "UiO",
    "expertise": "Human–AI interaction",
    "category": "AI in education, learning and human formation"
  },
  {
    "id": 55,
    "name": "Jo Herstad",
    "institution": "UiO",
    "expertise": "AI, human–computer interaction",
    "category": "AI in education, learning and human formation"
  },
  {
    "id": 56,
    "name": "Tobias Mahler",
    "institution": "UiO",
    "expertise": "AI regulation, robotics law",
    "category": "AI law, regulation and privacy"
  },
  {
    "id": 57,
    "name": "Samson Yoseph Esayas",
    "institution": "UiO",
    "expertise": "AI regulation, privacy and competition law",
    "category": "AI law, regulation and privacy"
  },
  {
    "id": 58,
    "name": "Malgorzata Cyndecka",
    "institution": "UiB",
    "expertise": "EU/EEA law, privacy",
    "category": "AI law, regulation and privacy"
  },
  {
    "id": 59,
    "name": "Bjørn Aslak Juliussen",
    "institution": "UiT",
    "expertise": "AI regulation and data security law",
    "category": "AI law, regulation and privacy"
  },
  {
    "id": 60,
    "name": "Mona Naomi Lintvedt",
    "institution": "UiO",
    "expertise": "AI, privacy and robotics law",
    "category": "AI law, regulation and privacy"
  },
  {
    "id": 61,
    "name": "Vibeke Blaker Strand",
    "institution": "UiO",
    "expertise": "Anti-discrimination law and emerging technology",
    "category": "AI law, regulation and privacy"
  },
  {
    "id": 62,
    "name": "Åke Elden",
    "institution": "NLA University College",
    "expertise": "AI ethics, autonomy and responsibility",
    "category": "AI, philosophy, society and human autonomy"
  },
  {
    "id": 63,
    "name": "Jill Walker Rettberg",
    "institution": "UiB",
    "expertise": "AI, digital culture and narratives",
    "category": "AI, philosophy, society and human autonomy"
  },
  {
    "id": 64,
    "name": "Lars Nyre",
    "institution": "UiB",
    "expertise": "Philosophy of technology and human–machine relations",
    "category": "AI, philosophy, society and human autonomy"
  },
  {
    "id": 65,
    "name": "Gabriele de Seta",
    "institution": "UiB",
    "expertise": "Algorithms and digital culture",
    "category": "AI, philosophy, society and human autonomy"
  },
  {
    "id": 66,
    "name": "Scott Rettberg",
    "institution": "UiB",
    "expertise": "Digital narratives and generative AI",
    "category": "AI, philosophy, society and human autonomy"
  },
  {
    "id": 67,
    "name": "Erik Knudsen",
    "institution": "UiB",
    "expertise": "AI, political communication and media",
    "category": "AI, philosophy, society and human autonomy"
  },
  {
    "id": 68,
    "name": "Silvia Masiero",
    "institution": "UiO",
    "expertise": "Digital identity, inclusion and technological justice",
    "category": "AI, philosophy, society and human autonomy"
  },
  {
    "id": 69,
    "name": "Christoph Trattner",
    "institution": "UiB/MediaFutures",
    "expertise": "Responsible AI and recommender systems",
    "category": "AI in media, communication and creative expression"
  },
  {
    "id": 70,
    "name": "Duc Tien Dang Nguyen",
    "institution": "UiB",
    "expertise": "Multimedia verification and analysis",
    "category": "AI in media, communication and creative expression"
  },
  {
    "id": 71,
    "name": "Jason Nelson",
    "institution": "UiB",
    "expertise": "AI and digital art",
    "category": "AI in media, communication and creative expression"
  },
  {
    "id": 72,
    "name": "Alinta Kiri Krauth",
    "institution": "UiB",
    "expertise": "AI and digital art",
    "category": "AI in media, communication and creative expression"
  },
  {
    "id": 73,
    "name": "David Jhave Johnston",
    "institution": "UiB",
    "expertise": "AI-based storytelling",
    "category": "AI in media, communication and creative expression"
  },
  {
    "id": 74,
    "name": "Viktoria Stray",
    "institution": "UiO",
    "expertise": "Generative AI in software development and collaboration",
    "category": "AI in media, communication and creative expression"
  },
  {
    "id": 75,
    "name": "Vegard Kolbjørnsrud",
    "institution": "BI",
    "expertise": "AI and organisational design",
    "category": "AI strategy, leadership and commercialisation"
  },
  {
    "id": 76,
    "name": "Silvija Seres",
    "institution": "Technology consulting",
    "expertise": "AI strategy and digital transformation",
    "category": "AI strategy, leadership and commercialisation"
  },
  {
    "id": 77,
    "name": "Elin Hauge",
    "institution": "Independent advisor",
    "expertise": "AI strategy and business",
    "category": "AI strategy, leadership and commercialisation"
  },
  {
    "id": 78,
    "name": "Lars Rinnan",
    "institution": "Technology industry",
    "expertise": "AI business development",
    "category": "AI strategy, leadership and commercialisation"
  },
  {
    "id": 79,
    "name": "Anita Schjøll Brede",
    "institution": "Iris.ai / technology industry",
    "expertise": "AI entrepreneurship",
    "category": "AI strategy, leadership and commercialisation"
  },
  {
    "id": 80,
    "name": "Peder Inge Furseth",
    "institution": "BI",
    "expertise": "Technology-driven innovation",
    "category": "AI strategy, leadership and commercialisation"
  },
  {
    "id": 81,
    "name": "Morten Irgens",
    "institution": "Academia and AI networks",
    "expertise": "AI policy and research strategy",
    "category": "AI strategy, leadership and commercialisation"
  },
  {
    "id": 82,
    "name": "Cathrine Pihl Lyngstad",
    "institution": "NAV / AI collaboration",
    "expertise": "Data and public-sector AI implementation",
    "category": "Public sector, AI governance and implementation"
  },
  {
    "id": 83,
    "name": "Alex Moltzau",
    "institution": "AI policy and research networks",
    "expertise": "Responsible AI and public policy",
    "category": "Public sector, AI governance and implementation"
  },
  {
    "id": 84,
    "name": "Alexander Moltubakk Kempton",
    "institution": "UiO",
    "expertise": "AI and change in public administration",
    "category": "Public sector, AI governance and implementation"
  },
  {
    "id": 85,
    "name": "Arild Waaler",
    "institution": "UiO",
    "expertise": "Industrial digitalisation and interoperability",
    "category": "Public sector, AI governance and implementation"
  },
  {
    "id": 86,
    "name": "Malcolm Langford",
    "institution": "UiO / TRUST",
    "expertise": "Trustworthy AI in institutions and the legal system",
    "category": "Public sector, AI governance and implementation"
  },
  {
    "id": 87,
    "name": "Øystein Flø Baste",
    "institution": "UiO",
    "expertise": "AI, education law and digital administration",
    "category": "Public sector, AI governance and implementation"
  },
  {
    "id": 88,
    "name": "Signe Riemer-Sørensen",
    "institution": "SINTEF",
    "expertise": "Industrial and applied AI",
    "category": "Industrial AI, energy and the environment"
  },
  {
    "id": 89,
    "name": "Michail Spitieris",
    "institution": "SINTEF",
    "expertise": "Probabilistic and physics-informed AI",
    "category": "Industrial AI, energy and the environment"
  },
  {
    "id": 90,
    "name": "Felix Kohler",
    "institution": "SINTEF",
    "expertise": "AI and industrial analysis systems",
    "category": "Industrial AI, energy and the environment"
  },
  {
    "id": 91,
    "name": "Katarzyna Michalowska",
    "institution": "SINTEF",
    "expertise": "Analytics and industrial AI",
    "category": "Industrial AI, energy and the environment"
  },
  {
    "id": 92,
    "name": "Giulia Robbiani",
    "institution": "SINTEF",
    "expertise": "Applied AI and analytics",
    "category": "Industrial AI, energy and the environment"
  },
  {
    "id": 93,
    "name": "Alexander Johannes Stasik",
    "institution": "SINTEF",
    "expertise": "Machine learning and industrial systems",
    "category": "Industrial AI, energy and the environment"
  },
  {
    "id": 94,
    "name": "Yngve Birkelund",
    "institution": "UiT",
    "expertise": "AI and wind power forecasting",
    "category": "Industrial AI, energy and the environment"
  },
  {
    "id": 95,
    "name": "Ali Ramezani-Kebrya",
    "institution": "UiO",
    "expertise": "Robust and secure deep learning",
    "category": "AI safety, robustness and cybersecurity"
  },
  {
    "id": 96,
    "name": "Olav Lysne",
    "institution": "Simula",
    "expertise": "Digital systems security",
    "category": "AI safety, robustness and cybersecurity"
  },
  {
    "id": 97,
    "name": "Lillian Røstad",
    "institution": "Simula",
    "expertise": "Cybersecurity and digital trust",
    "category": "AI safety, robustness and cybersecurity"
  },
  {
    "id": 98,
    "name": "Jostein Jensen",
    "institution": "Simula",
    "expertise": "Cybersecurity",
    "category": "AI safety, robustness and cybersecurity"
  },
  {
    "id": 99,
    "name": "Audun Jøsang",
    "institution": "UiO",
    "expertise": "Information security and trust models",
    "category": "AI safety, robustness and cybersecurity"
  },
  {
    "id": 100,
    "name": "Vasileios Mavroeidis",
    "institution": "UiO",
    "expertise": "Cyber threat intelligence and security analysis",
    "category": "AI safety, robustness and cybersecurity"
  }
];

export const METHOD_CAVEAT = "This is an editorial preliminary selection, not an officially approved national expert register. A number of names and subject areas have been checked against institutional directories, but not all current roles, publications or individual expert qualifications have been fully validated. The order does not indicate quality or ranking.";

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
  return `https://www.google.com/search?q=${encodeURIComponent(`${person.name} ${person.institution} profile`)}`;
}
