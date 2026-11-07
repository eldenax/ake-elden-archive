export interface PublicProfileLink {
  id: number;
  name: string;
  url: string;
  source: string;
  kind?: "source";
  evidenceUrl?: string;
}

// Public profile addresses are checked separately from the supplied directory claims.
export const PUBLIC_PROFILE_LINKS: PublicProfileLink[] = [
  {
    "id": 1,
    "name": "Morten Goodwin",
    "url": "https://www.uia.no/english/about-uia/employees/mortengo/",
    "source": "University of Agder"
  },
  {
    "id": 2,
    "name": "Helge Langseth",
    "url": "https://www.ntnu.no/ansatte/helge.langseth",
    "source": "NTNU"
  },
  {
    "id": 3,
    "name": "Filippo Maria Bianchi",
    "url": "https://uit.no/ansatte/filippo.m.bianchi",
    "source": "UiT"
  },
  {
    "id": 4,
    "name": "Pål Grønås Drange",
    "url": "https://www4.uib.no/en/find-employees/pal-gronas.drange",
    "source": "UiB"
  },
  {
    "id": 5,
    "name": "Pinar Heggernes",
    "url": "https://www4.uib.no/finn-ansatte/pinar.heggernes",
    "source": "UiB"
  },
  {
    "id": 7,
    "name": "Hans Julius Skaug",
    "url": "https://www4.uib.no/en/find-employees/Hans.Julius.Skaug",
    "source": "https://github.com/MishMash-Norway/mishmash-web/blob/main/site/_directory/people/hans-skaug/index.md"
  },
  {
    "id": 8,
    "name": "Robert Jenssen",
    "url": "https://uit.no/ansatte/robert.jenssen",
    "source": "UiT"
  },
  {
    "id": 9,
    "name": "Michael Kampffmeyer",
    "url": "https://uit.no/ansatte/michael.c.kampffmeyer",
    "source": "UiT"
  },
  {
    "id": 10,
    "name": "Anne Solberg",
    "url": "https://www.visual-intelligence.no/people/anne-solberg",
    "source": "https://www.visual-intelligence.no/about/people"
  },
  {
    "id": 11,
    "name": "Line Eikvil",
    "url": "https://nr.no/en/employees/line-eikvil/",
    "source": "https://nr.no/en/employees/line-eikvil/"
  },
  {
    "id": 12,
    "name": "Adín Ramírez Rivera",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/adinr/",
    "source": "https://www.mn.uio.no/ifi/english/people/aca/adinr/"
  },
  {
    "id": 13,
    "name": "Arnt-Børre Salberg",
    "url": "https://nr.no/en/employees/arnt-borre-salberg/",
    "source": "https://nr.no/en/employees/arnt-borre-salberg/"
  },
  {
    "id": 14,
    "name": "Anders Ueland Waldeland",
    "url": "https://nr.no/en/employees/anders-ueland-waldeland/",
    "source": "https://nr.no/en/employees/anders-ueland-waldeland/"
  },
  {
    "id": 15,
    "name": "Erik Velldal",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/erikve/",
    "source": "https://www.mn.uio.no/ifi/english/people/aca/erikve/"
  },
  {
    "id": 16,
    "name": "Samia Touileb",
    "url": "https://www4.uib.no/en/find-employees/samia.touileb",
    "source": "https://www4.uib.no/en/find-employees/samia.touileb"
  },
  {
    "id": 17,
    "name": "Trond Trosterud",
    "url": "https://en.uit.no/ansatte/trond.trosterud",
    "source": "https://en.uit.no/ansatte/trond.trosterud"
  },
  {
    "id": 18,
    "name": "Thomas Ågotnes",
    "url": "https://www4.uib.no/en/find-employees/thomas.agotnes",
    "source": "https://www4.uib.no/en/find-employees/thomas.agotnes"
  },
  {
    "id": 19,
    "name": "Bjørnar Tessem",
    "url": "https://www4.uib.no/en/find-employees/bjornar.tessem",
    "source": "https://www4.uib.no/en/find-employees/bjornar.tessem"
  },
  {
    "id": 20,
    "name": "Kerstin Bach",
    "url": "https://www.ntnu.edu/employees/kerstinb",
    "source": "https://www.ntnu.edu/employees/kerstinb"
  },
  {
    "id": 21,
    "name": "Benjamin Ricaud",
    "url": "https://en.uit.no/ansatte/person?p_document_id=741975",
    "source": "https://en.uit.no/ansatte/person?p_document_id=741975"
  },
  {
    "id": 22,
    "name": "Jim Tørresen",
    "url": "https://www.mn.uio.no/ifi/personer/vit/jimtoer/",
    "source": "UiO"
  },
  {
    "id": 23,
    "name": "Lei Jiao",
    "url": "https://www.uia.no/english/about-uia/employees/leij/",
    "source": "https://www.uia.no/english/about-uia/employees/leij/"
  },
  {
    "id": 24,
    "name": "Linga Reddy Cenkeramaddi",
    "url": "https://www.uia.no/english/about-uia/employees/lingac/",
    "source": "https://www.uia.no/english/about-uia/employees/lingac/"
  },
  {
    "id": 25,
    "name": "Kai Olav Ellefsen",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/kaiolae/",
    "source": "https://www.mn.uio.no/ifi/english/people/aca/kaiolae/"
  },
  {
    "id": 26,
    "name": "Adil Rasheed",
    "url": "https://www.ntnu.edu/employees/adil.rasheed",
    "source": "https://www.ntnu.edu/employees/adil.rasheed"
  },
  {
    "id": 27,
    "name": "Puneet Sharma",
    "url": "https://en.uit.no/ansatte/puneet.sharma",
    "source": "https://en.uit.no/ansatte/puneet.sharma"
  },
  {
    "id": 28,
    "name": "Inga Strümke",
    "url": "https://www.ntnu.no/ansatte/inga.strumke",
    "source": "NTNU"
  },
  {
    "id": 29,
    "name": "Marija Slavkovik",
    "url": "https://www4.uib.no/en/find-employees/marija.slavkovik",
    "source": "UiB"
  },
  {
    "id": 30,
    "name": "Miria Grisot",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/miriag/",
    "source": "https://www.mn.uio.no/ifi/english/people/aca/miriag/"
  },
  {
    "id": 31,
    "name": "Tone Bratteteig",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/tone/",
    "source": "https://www.mn.uio.no/ifi/english/people/aca/tone/"
  },
  {
    "id": 32,
    "name": "Maja van der Velden",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/majava/",
    "source": "https://www.mn.uio.no/ifi/english/people/aca/majava/"
  },
  {
    "id": 33,
    "name": "Kristoffer Wickstrøm",
    "url": "https://en.uit.no/ansatte/kristoffer.k.wickstrom",
    "source": "UiT"
  },
  {
    "id": 34,
    "name": "Fred Godtliebsen",
    "url": "https://uit.no/ansatte/fred.godtliebsen",
    "source": "UiT"
  },
  {
    "id": 35,
    "name": "Helge Ræder",
    "url": "https://www4.uib.no/finn-ansatte/helge.raeder",
    "source": "UiB"
  },
  {
    "id": 36,
    "name": "Bettina Husebø",
    "url": "https://www4.uib.no/en/find-employees/bettina-sandgathe.husebo",
    "source": "UiB"
  },
  {
    "id": 37,
    "name": "Michael Riegler",
    "url": "https://www.oslomet.no/en/about/employee/michaelr/",
    "source": "OsloMet"
  },
  {
    "id": 38,
    "name": "Klas Pettersen",
    "url": "https://www.simula.no/people/klas",
    "source": "Simula"
  },
  {
    "id": 39,
    "name": "Ole Christian Lingjærde",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/ole/index.html",
    "source": "UiO"
  },
  {
    "id": 40,
    "name": "Karl Øyvind Mikalsen",
    "url": "https://scholar.google.com/citations?hl=no&user=L8tTIvYAAAAJ",
    "source": "Google Scholar"
  },
  {
    "id": 41,
    "name": "Samuel Kuttner",
    "url": "https://en.uit.no/ansatte/person?p_dimension_id=88136&p_document_id=770704",
    "source": "UiT"
  },
  {
    "id": 42,
    "name": "Noeska Natasja Smit",
    "url": "https://www4.uib.no/finn-ansatte/noeska.smit",
    "source": "UiB"
  },
  {
    "id": 43,
    "name": "Geir Kjetil Sandve",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/geirksa/index.html",
    "source": "UiO"
  },
  {
    "id": 44,
    "name": "Inge Jonassen",
    "url": "https://www4.uib.no/en/find-employees/inge.jonassen",
    "source": "UiB"
  },
  {
    "id": 45,
    "name": "Lars Ailo Bongo",
    "url": "https://uit.no/ansatte/lars.ailo.bongo",
    "source": "UiT"
  },
  {
    "id": 46,
    "name": "Marit Bakke",
    "url": "https://linkedin.com/in/marit-bakke-1601b629",
    "source": "LinkedIn (UiB dean/professor; distinct from NMBU namesake)"
  },
  {
    "id": 47,
    "name": "Torbjørn Rognes",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/torognes/index.html",
    "source": "UiO"
  },
  {
    "id": 48,
    "name": "Elisabeth Wetzer",
    "url": "https://en.uit.no/ansatte/person?p_document_id=834826",
    "source": "UiT"
  },
  {
    "id": 49,
    "name": "Barbara Wasson",
    "url": "https://www4.uib.no/en/find-employees/barbara.wasson",
    "source": "UiB"
  },
  {
    "id": 50,
    "name": "Mohammad Khalil",
    "url": "https://nva.sikt.no/research-profile/1004640",
    "source": "NVA"
  },
  {
    "id": 51,
    "name": "Kine Maridatter Dørum Maxwell",
    "url": "https://en.uit.no/ansatte/person?p_document_id=315550",
    "source": "UiT"
  },
  {
    "id": 52,
    "name": "Marko Lukic",
    "url": "https://uit.no/ansatte/marko.lukic",
    "source": "UiT"
  },
  {
    "id": 53,
    "name": "Monika Nerland",
    "url": "https://uv.uio.no/iped/english/people/aca/monikn/index.html",
    "source": "University of Oslo"
  },
  {
    "id": 56,
    "name": "Tobias Mahler",
    "url": "https://www.jus.uio.no/ifp/english/people/aca/tobiasm/",
    "source": "UiO"
  },
  {
    "id": 60,
    "name": "Mona Naomi Lintvedt",
    "url": "https://www.jus.uio.no/ifp/english/people/aca/monali/",
    "source": "University of Oslo Faculty of Law"
  },
  {
    "id": 61,
    "name": "Vibeke Blaker Strand",
    "url": "https://www.jus.uio.no/ior/english/people/aca/vibekbla/",
    "source": "University of Oslo Faculty of Law"
  },
  {
    "id": 62,
    "name": "Åke Elden",
    "url": "https://www.nla.no/en/about-nla/find-employees/ake-elden",
    "source": "NLA staff profile and publications; AI and theological anthropology: https://www.nla.no/en/research%20and%20development/find-publications/epistemic-automation-and-the-deformation-of-the-human-artificial-intelligence-and-the-reconfiguration-of-theological-anthropology"
  },
  {
    "id": 63,
    "name": "Jill Walker Rettberg",
    "url": "https://www4.uib.no/en/find-employees/jill-walker.rettberg",
    "source": "UiB"
  },
  {
    "id": 64,
    "name": "Lars Nyre",
    "url": "https://www4.uib.no/en/find-employees/lars.nyre",
    "source": "University of Bergen"
  },
  {
    "id": 65,
    "name": "Gabriele de Seta",
    "url": "https://www4.uib.no/en/find-employees/gabriele.de-seta",
    "source": "University of Bergen"
  },
  {
    "id": 66,
    "name": "Scott Rettberg",
    "url": "https://uib.no/en/persons/Scott.Rettberg",
    "source": "UiB"
  },
  {
    "id": 68,
    "name": "Silvia Masiero",
    "url": "https://www.mn.uio.no/ifi/personer/vit/silvima/",
    "source": "UiO"
  },
  {
    "id": 69,
    "name": "Christoph Trattner",
    "url": "https://www4.uib.no/en/find-employees/christoph.trattner",
    "source": "https://www4.uib.no/en/find-employees/christoph.trattner"
  },
  {
    "id": 70,
    "name": "Duc Tien Dang Nguyen",
    "url": "https://www4.uib.no/en/find-employees/duc-tien.dang-nguyen",
    "source": "https://www4.uib.no/en/find-employees/duc-tien.dang-nguyen"
  },
  {
    "id": 71,
    "name": "Jason Nelson",
    "url": "https://www4.uib.no/en/find-employees/jason.nelson",
    "source": "https://www4.uib.no/en/find-employees/jason.nelson"
  },
  {
    "id": 72,
    "name": "Alinta Kiri Krauth",
    "url": "https://www4.uib.no/en/find-employees/alinta.krauth",
    "source": "https://www4.uib.no/en/find-employees/alinta.krauth"
  },
  {
    "id": 73,
    "name": "David Jhave Johnston",
    "url": "https://www4.uib.no/en/find-employees/david-jhave.johnston",
    "source": "https://www4.uib.no/en/find-employees/david-jhave.johnston"
  },
  {
    "id": 74,
    "name": "Viktoria Stray",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/stray/",
    "source": "https://www.mn.uio.no/ifi/english/people/aca/stray/"
  },
  {
    "id": 75,
    "name": "Vegard Kolbjørnsrud",
    "url": "https://www.bi.no/en/about-bi/employees/department-of-strategy-and-entrepreneurship/vegard-kolbjornsrud/",
    "source": "https://www.bi.no/en/about-bi/employees/department-of-strategy-and-entrepreneurship/vegard-kolbjornsrud/"
  },
  {
    "id": 79,
    "name": "Anita Schjøll Brede",
    "url": "https://linkedin.com/in/anitasa",
    "source": "LinkedIn (profile under married name Anita Schjøll Abildgaard; maiden name Brede)"
  },
  {
    "id": 80,
    "name": "Peder Inge Furseth",
    "url": "https://www.bi.no/en/about-bi/employees/department-of-communication-and-culture/peder-inge-furseth/",
    "source": "BI Norwegian Business School"
  },
  {
    "id": 81,
    "name": "Morten Irgens",
    "url": "https://linkedin.com/in/mortenirgens",
    "source": "LinkedIn (NORA steering group confirms role)"
  },
  {
    "id": 83,
    "name": "Alex Moltzau",
    "url": "https://linkedin.com/in/alexandermoltzau",
    "source": "LinkedIn (NORA lists Alex Moltzau in policy and ethics)"
  },
  {
    "id": 84,
    "name": "Alexander Moltubakk Kempton",
    "url": "https://linkedin.com/in/alexanderkempton",
    "source": "LinkedIn (UiO affiliation)"
  },
  {
    "id": 85,
    "name": "Arild Waaler",
    "url": "https://linkedin.com/in/arildwaaler",
    "source": "LinkedIn (UiO professor)"
  },
  {
    "id": 88,
    "name": "Signe Riemer-Sørensen",
    "url": "https://www.sintef.no/alle-ansatte/ansatt/signe.riemer-sorensen/",
    "source": "SINTEF"
  },
  {
    "id": 89,
    "name": "Michail Spitieris",
    "url": "https://www.sintef.no/en/all-employees/employee/michail.spitieris/",
    "source": "SINTEF"
  },
  {
    "id": 90,
    "name": "Felix Kohler",
    "url": "https://www.sintef.no/en/all-employees/employee/felix.kohler/",
    "source": "SINTEF"
  },
  {
    "id": 91,
    "name": "Katarzyna Michalowska",
    "url": "https://www.sintef.no/en/all-employees/employee/katarzyna.michalowska/",
    "source": "SINTEF"
  },
  {
    "id": 93,
    "name": "Alexander Johannes Stasik",
    "url": "https://linkedin.com/in/alexander-stasik-7853261a2",
    "source": "LinkedIn (SINTEF researcher; listed as A. Stasik)"
  },
  {
    "id": 95,
    "name": "Ali Ramezani-Kebrya",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/ali/",
    "source": "https://www.mn.uio.no/ifi/english/people/aca/ali/"
  },
  {
    "id": 96,
    "name": "Olav Lysne",
    "url": "https://www.simula.no/people/olavly",
    "source": "https://www.simula.no/people/olavly"
  },
  {
    "id": 97,
    "name": "Lillian Røstad",
    "url": "https://www.simula.no/people/lillian",
    "source": "https://www.simula.no/people/lillian"
  },
  {
    "id": 98,
    "name": "Jostein Jensen",
    "url": "https://www.simula.no/people/jostein",
    "source": "https://www.simula.no/people/jostein"
  },
  {
    "id": 99,
    "name": "Audun Jøsang",
    "url": "https://linkedin.com/in/audunjosang",
    "source": "https://linkedin.com/in/audunjosang"
  },
  {
    "id": 100,
    "name": "Vasileios Mavroeidis",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/vasileim/",
    "source": "https://www.mn.uio.no/ifi/english/people/aca/vasileim/"
  },
  {
    "id": 101,
    "name": "Herman Cappelen",
    "url": "https://philosophy.hku.hk/people/herman-cappelen",
    "source": "HKU profile and AI publications; Norwegian connection: https://www.hermancappelen.net/about"
  },
  {
    "id": 102,
    "name": "Kari Steen-Johnsen",
    "url": "https://www.samfunnsforskning.no/english/people/res/karsteen/",
    "source": "Institute profile; AI evidence: https://www.samfunnsforskning.no/english/research/elections-and-democracy/projects/knowai--betydningen-av-ki-for-politisk-kunnskap-eng.html"
  },
  {
    "id": 103,
    "name": "Alexander Refsum Jensenius",
    "url": "https://www.uio.no/ritmo/english/people/management/alexanje/",
    "source": "UiO profile; AI evidence: https://mishmash.no/news/new-centre-announced/"
  },
  {
    "id": 104,
    "name": "Fabian Andsem Harang",
    "url": "https://www.bi.no/en/about-bi/employees/department-of-data-science-and-analytics/fabian-andsem-harang/",
    "source": "BI profile: mathematics, machine learning and SURE-AI research"
  },
  {
    "id": 105,
    "name": "Astrid Marie Jorde Sandsør",
    "url": "https://www.uv.uio.no/isp/english/people/aca/amsandso/index.html",
    "source": "UiO profile: education and policy expertise, not evidence of direct AI specialisation"
  },
  {
    "id": 106,
    "name": "Ole-Christoffer Granmo",
    "url": "https://www.uia.no/english/about-uia/employees/oleg/",
    "source": "UiA profile: AI research and Tsetlin machines"
  },
  {
    "id": 107,
    "name": "Jon Atle Gulla",
    "url": "https://www.ntnu.no/ansatte/jon.atle.gulla",
    "source": "NTNU profile: AI research and NorwAI"
  },
  {
    "id": 108,
    "name": "Anders Kofod-Petersen",
    "url": "https://www.ntnu.no/ansatte/anderpe",
    "source": "NTNU profile: AI research and expertise"
  },
  {
    "id": 109,
    "name": "Pinar Øztürk",
    "url": "https://www.ntnu.no/ansatte/pinar",
    "source": "NTNU profile: AI research areas"
  },
  {
    "id": 110,
    "name": "Kiran Raja",
    "url": "https://www.ntnu.no/ansatte/kiran.raja",
    "source": "NTNU profile: research interests and AI applications"
  },
  {
    "id": 111,
    "name": "Heri Ramampiaro",
    "url": "https://www.ntnu.no/ansatte/heri",
    "source": "NTNU profile: research interests and AI expertise"
  },
  {
    "id": 114,
    "name": "Jianhua Zhang",
    "url": "https://www.oslomet.no/en/about/employee/jianhuaz/",
    "source": "OsloMet profile: AI research interests"
  },
  {
    "id": 115,
    "name": "Mehak Khan",
    "url": "https://www.hvl.no/en/employee/?user=Mehak.Khan",
    "source": "HVL profile: AI expertise and research"
  },
  {
    "id": 116,
    "name": "Atle Ottesen Søvik",
    "url": "https://mf.no/en/staff/atle-ottesen-sovik",
    "source": "MF staff profile: AI, ethics and philosophy; book: https://mf.no/forskning/vidunderlige-verden-ny-bok-om-etikk-og-filosofi-i-ki-tiden"
  },
  {
    "id": 117,
    "name": "Asle Eikrem",
    "url": "https://mf.no/en/staff/asle-eikrem",
    "source": "MF staff profile: ethics of AI; book: https://mf.no/forskning/vidunderlige-verden-ny-bok-om-etikk-og-filosofi-i-ki-tiden"
  },
  {
    "id": 118,
    "name": "Clemens Cavallin",
    "url": "https://www.nla.no/en/about-nla/find-employees/clemens-cavallin",
    "source": "NLA staff profile and publications on AI, trust and Christian imagination"
  },
  {
    "id": 119,
    "name": "Simon Simchai Hansen",
    "url": "https://www.oslomet.no/en/about/employee/sihan3308/",
    "source": "OsloMet profile; AI in religious education: https://www.oslomet.no/en/research/research-projects/ai-driven-exploration-interdisciplinary-projects-religious-education-kidu"
  },
  {
    "id": 120,
    "name": "Einar Duenger Bøhn",
    "url": "https://www.uia.no/om-uia/ansatte/einardb/",
    "source": "UiA staff profile lists The Moral Turing Test: a defense; artificial consciousness: https://www.uio.no/english/research/strategic-research-areas/life-science/norway-life-science-conference/oslo-life-science-2021/artificial-intelligence/"
  },
  {
    "id": 121,
    "name": "Anders Malthe-Sørenssen",
    "url": "https://www.mn.uio.no/fysikk/english/people/aca/malthe/",
    "source": "UiO profile: brain-inspired machine learning and AI in materials science"
  },
  {
    "id": 123,
    "name": "Yan Zhang",
    "url": "https://www.computer.org/profiles/yan-zhang",
    "source": "IEEE Computer Society individual profile; AI and federated learning evidence: https://www.simula.no/mobile-edge-computing"
  },
  {
    "id": 124,
    "name": "Lene Pettersen",
    "url": "https://www.uv.uio.no/iped/english/people/aca/lenejp/index.html",
    "source": "Individual institutional profile; AI evidence: https://www.uv.uio.no/iped/english/people/aca/lenejp/index.html"
  },
  {
    "id": 125,
    "name": "Inger Marie Hagen",
    "url": "https://www.oslomet.no/en/about/employee/imhagen/",
    "source": "Individual institutional profile; AI evidence: https://www.oslomet.no/en/about/employee/imhagen/"
  },
  {
    "id": 126,
    "name": "Christin Thea Wathne",
    "url": "https://www.oslomet.no/en/about/employee/wach/",
    "source": "Individual institutional profile; AI evidence: https://www.oslomet.no/en/about/employee/wach/"
  },
  {
    "id": 127,
    "name": "Petter Eilif de Lange",
    "url": "https://www.ntnu.edu/employees/petter.e.delange",
    "source": "Individual institutional profile; AI evidence: https://www.ntnu.edu/employees/petter.e.delange"
  },
  {
    "id": 128,
    "name": "Ranik Raaen Wahlstrøm",
    "url": "https://www.ntnu.edu/employees/ranik.raaen.wahlstrom",
    "source": "Individual institutional profile; AI evidence: https://www.ntnu.edu/employees/ranik.raaen.wahlstrom"
  },
  {
    "id": 129,
    "name": "Morten Risstad",
    "url": "https://www.ntnu.edu/employees/morten.risstad",
    "source": "Individual institutional profile; AI evidence: https://www.ntnu.edu/employees/morten.risstad"
  },
  {
    "id": 130,
    "name": "Johanne Jensen Skeie",
    "url": "https://www.forsvaret.no/en/research/staff/skeie-johanne-jensen",
    "source": "Individual institutional profile; AI evidence: https://www.forsvaret.no/en/research/staff/skeie-johanne-jensen"
  },
  {
    "id": 131,
    "name": "Rituka Jaiswal",
    "url": "https://www.ntnu.edu/employees/rituka.jaiswal",
    "source": "Individual institutional profile; AI evidence: https://www.ntnu.edu/employees/rituka.jaiswal"
  },
  {
    "id": 132,
    "name": "Xiangping Hu",
    "url": "https://www.ntnu.edu/employees/xiangph",
    "source": "Individual institutional profile; AI evidence: https://www.ntnu.edu/employees/xiangph"
  },
  {
    "id": 133,
    "name": "E. F. Haghish",
    "url": "https://www4.uib.no/en/find-employees/e-f.haghish",
    "source": "Individual institutional profile; AI evidence: https://www4.uib.no/en/find-employees/e-f.haghish"
  },
  {
    "id": 134,
    "name": "Torhild Tønnesen Haugnes",
    "url": "https://www.modum-bad.no/staff/torhild-tonnesen-haugnes/",
    "source": "Individual institutional profile; AI evidence: https://www.modum-bad.no/staff/torhild-tonnesen-haugnes/"
  },
  {
    "id": 135,
    "name": "Sjur Nørstebø Moshagen",
    "url": "https://uit.no/ansatte/person?p_document_id=248638",
    "source": "Individual institutional profile; AI evidence: https://www.tandfonline.com/doi/full/10.1080/08003831.2024.2410124"
  },
  {
    "id": 136,
    "name": "Ronny Paul",
    "url": "https://uit.no/ansatte/person?p_dimension_id=88131&p_document_id=738630",
    "source": "Individual institutional profile; AI evidence: https://doi.org/10.48550/arxiv.2405.05777"
  },
  {
    "id": 137,
    "name": "Kyrre Glette",
    "url": "https://mishmash.no/people/kyrre-glette/",
    "source": "Individual institutional profile; AI evidence: https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2020.00006/full"
  },
  {
    "id": 138,
    "name": "Stefan Pieter Sobolowski",
    "url": "https://bjerknes.uib.no/en/researchers/stefan-pieter-sobolowski",
    "source": "Bjerknes Centre profile: generative AI for local climate information and explainable AI for prediction and attribution"
  },
  {
    "id": 139,
    "name": "Daniel Nordgård",
    "url": "https://www.uia.no/english/about-uia/employees/danieln/",
    "source": "UiA profile: publications on AI in music industries; centre role: https://mishmash.no/people/daniel-nordgard/"
  },
  {
    "id": 140,
    "name": "Stian Kjeksrud",
    "url": "https://www.forsvaret.no/forskning/ansatte-FHS/kjeksrud-stian",
    "source": "FHS profile: hybrid warfare, AI and military education research"
  },
  {
    "id": 141,
    "name": "Ingebjørg Kåsen",
    "url": "https://www.ffi.no/aktuelt/podkaster/hvordan-kan-forsvaret-bruke-kunstig-intelligens",
    "source": "FFI person-specific interview: AI research leadership, defence-sector AI strategy and responsible AI at NATO; not an individual profile",
    "kind": "source"
  },
  {
    "id": 142,
    "name": "Çağrı Erdem",
    "url": "https://www.mn.uio.no/ifi/english/people/aca/cagrie/index.html",
    "source": "UiO individual profile: embodied interaction, human–AI co-creativity and AI in interactive music performance"
  },
  {
    "id": 143,
    "name": "Ingrid Eir Thorp Eythorsdottir",
    "url": "https://www.nih.no/english/about/employees/ieeythorsd/index.html",
    "source": "NIH individual profile: machine learning and physiological data in elite sport; NIH AI and sport symposium programme documents her contribution",
    "evidenceUrl": "https://www.nih.no/english/about/news-events/events/2025/symposium-on-artificial-intelligence-and-sport-inj.html"
  },
  {
    "id": 144,
    "name": "Dag Johansen",
    "url": "https://en.uit.no/ansatte/person?p_document_id=40982",
    "source": "UiT individual profile and publication list: Arctic HARE machine-learning system for cross-country skiers; AI in the soccer domain",
    "evidenceUrl": "https://hdl.handle.net/10037/33197"
  }
];
