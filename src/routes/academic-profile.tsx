import { createFileRoute, Link } from "@tanstack/react-router";
import { PUBLICATIONS } from "../data/publications";

const TITLE = "Academic Profile — Dr. Åke Elden";
const DESCRIPTION =
  "Academic profile of Dr. Åke Elden: Researcher and Research Advisor at NLA University College, Oslo. Philosophy of technology, social epistemology, and theological-anthropology — role, fields, indicators, and verified scholarly records.";
const URL_SELF = "https://akeelden.com/academic-profile";

const PROFILES: { name: string; href: string; note?: string }[] = [
  { name: "ORCID", href: "https://orcid.org/0009-0003-0965-7666", note: "0009-0003-0965-7666" },
  { name: "PhilPeople", href: "https://philpeople.org/profiles/aake-elden" },
  { name: "PhilPapers", href: "https://philpapers.org/s/Aake%20Elden" },
  {
    name: "NVA — Nasjonalt vitenarkiv",
    href: "https://nva.sikt.no/research-profile/57416",
    note: "Authoritative Norwegian record used to verify all metadata on this site",
  },
  {
    name: "Wikidata",
    href: "https://www.wikidata.org/wiki/Q101208302",
    note: "Q101208302 — includes the NVA person identifier",
  },
];

const FIELDS = [
  {
    name: "Philosophy of technology",
    note: "How technological and institutional systems reorganise the conditions of judgment, answerability, and action.",
  },
  {
    name: "Social epistemology",
    note: "Inferential license, explanatory entitlement, and the provenance of institutional knowledge claims.",
  },
  {
    name: "Theological-Anthropology",
    note: "Creaturehood, formation, and moral agency under conditions of optimisation and automation.",
  },
];

const EARLIER_WORK = [
  {
    period: "Clinical research",
    role: "Rheumatology and diagnostic imaging",
    note: "Work in the PREMIER programme on imaging evidence in rheumatoid arthritis: what a diagnostic signal can be taken to establish, and where reading it outruns what it supports.",
  },
  {
    period: "Experimental psychology",
    role: "Behavioural science · UiT The Arctic University of Norway",
    note: "Prepulse inhibition, dissociative conditions, and behavioural measurement — paradigms built entirely around whether a measured response licenses the inference drawn from it.",
  },
  {
    period: "Technology leadership",
    role: "Applied and industry settings",
    note: "Building and running systems whose outputs were treated as grounds for institutional decisions.",
  },
];

const TRAJECTORY: { domain: string; qualifier?: string; note: string }[] = [
  {
    domain: "Cognitive & Empirical Foundations",
    qualifier: "Dr.psychol.",
    note: "My early background in psychophysiology and cognitive psychology focused on automatic versus controlled information processing, sensorimotor gating, and metacognition. This provided an empirical baseline for understanding the biological and psychological architecture of human attention, habituation, and judgment.",
  },
  {
    domain: "Regulated Infrastructures & Institutional Reality",
    note: "Over two decades of experience within highly regulated pharmaceutical environments, clinical governance, and national innovation ecosystems provided direct, first-hand insight into how decision-making is structured, constrained, and automated within complex institutional infrastructures.",
  },
  {
    domain: "Philosophical & Theological Synthesis",
    note: "My work in philosophy of technology, social epistemology, and theological anthropology integrates these empirical and institutional insights. It examines how contemporary algorithmic systems, generative AI, and predictive models do not merely support human decisions, but act as second-order mediations that subtly alter the very preconditions of moral imputability, responsive agency, and human formation. This work proceeds in dialogue with contemporary scholarship in philosophy of technology and social epistemology.",
  },
];

const EXPERIENCE = [
  {
    period: "Present",
    role: "Researcher and Research Advisor",
    org: "NLA University College, Oslo",
    note: "Research development and advisory work alongside an independent research programme in philosophy of technology and theological-anthropology.",
  },
  {
    period: "Present",
    role: "Managing Director and Chair",
    org: "Eccelude AS, Stabekk",
    note: "Registered research and development company; the vehicle for applied and commissioned work.",
  },
  {
    period: "Applied research",
    role: "Research contexts",
    org: "TrialTact · ClaimBuilder.ai",
    note: "Applied settings in which the programme's philosophical problems — institutional judgment, provenance, and answerability — become observable under load.",
  },
];


export const Route = createFileRoute("/academic-profile")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL_SELF }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: URL_SELF,
          name: TITLE,
          description: DESCRIPTION,
          mainEntity: {
            "@type": "Person",
            name: "Åke Elden",
            honorificPrefix: "Dr.",
            jobTitle: "Researcher and Research Advisor",
            identifier: "https://orcid.org/0009-0003-0965-7666",
            knowsAbout: FIELDS.map((f) => f.name),
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: "NLA University College",
              url: "https://www.nla.no/",
            },
            sameAs: PROFILES.map((p) => p.href),
          },
        }),
      },
    ],
  }),
  component: AcademicProfilePage,
});

const LEVEL_2 = PUBLICATIONS.filter((p) => p.level === "2").length;
const TOTAL = PUBLICATIONS.length;
const ARTICLES = PUBLICATIONS.filter((p) => p.kind !== "preprint").length;
const PREPRINT_COUNT = PUBLICATIONS.filter((p) => p.kind === "preprint").length;

const SIGNATURE_CORPUS = [
  {
    rank: 1,
    title:
      "Comparative Desire and Social Violence: Mimetic Structure, Inequity, and the Scapegoat Dynamic",
    venue: "Philosophy & Social Criticism",
    rationale:
      "Why can another person's advantage feel like an injustice to us? This paper examines how comparing ourselves with others can shape what we believe we deserve. It traces how that sense of unfairness can turn into resentment and blame directed at vulnerable people who did not cause it.",
  },
  {
    rank: 2,
    title:
      "From Phronesis to Pronoia: Algorithmic Mediation and the Theological Displacement of Practical Wisdom",
    venue: "Studies in Christian Ethics",
    rationale:
      "Practical wisdom means judging what a particular situation calls for, rather than simply following a rule. This paper asks what changes when predictive systems anticipate our needs and organise our options before we deliberate. It explores how this shift can reduce the space for human judgment, even before a moral choice is made.",
  },
  {
    rank: 3,
    title:
      "Creaturehood Under Conditions of Optimization: AI and the Externalization of Moral Formation",
    venue: "Studies in Christian Ethics",
    rationale:
      "Are we people whose lives are received and shaped through relationships, or projects to be continually improved? Drawing on the theological idea of creaturehood, this paper examines what happens when AI systems take over practices through which people develop morally. The question is not only whether technology improves our choices, but how it changes who we become.",
  },
  {
    rank: 4,
    title:
      "Action Without Acts: The Institutional Production of Action and the Doctrinal Conditions of Responsibility",
    venue: "Neue Zeitschrift für Systematische Theologie und Religionsphilosophie",
    rationale:
      "How can someone be held responsible when a harmful outcome cannot be traced to a clear act? This paper examines institutions in which automated processes organise decisions without producing the identifiable human action that familiar accounts of responsibility assume. It asks what this means for theological understandings of wrongdoing, judgment, and moral agency.",
  },
  {
    rank: 5,
    title:
      "The Gifted Subject: Kenosis, Phenomenology, and the Constitution of Responsive Agency",
    venue: "Studia Theologica",
    rationale:
      "Being able to act does not have to mean being entirely self-made or independent of others. This paper develops an account of human agency grounded in receiving and responding: to other people, to the world, and to what we have not chosen. It explores how openness to others can make meaningful action possible, rather than weaken it.",
  },
].map((item) => {
  const match = PUBLICATIONS.find((p) => p.title === item.title);
  return { ...item, href: match?.href, level: match?.level, paperSlug: match?.paperSlug };
});

function AcademicProfilePage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Academic profile
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Åke Elden, PhD
          </h1>
          <p className="mt-4 font-display text-lg italic leading-snug text-foreground/85">
            Philosopher of technology, social epistemology, and{" "}
            <span className="whitespace-nowrap">theological-anthropology</span>{" "}
            · Researcher and Research Advisor at NLA University College, Oslo
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">
            I work on the conditions under which judgment, responsibility, and
            explanation remain possible — and on what happens to those
            conditions when institutional and technological systems reorganise
            them. Artificial intelligence enters as a diagnostic context rather
            than as the object of study.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/cv"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Full CV (printable)
            </Link>
            <a
              href="https://orcid.org/0009-0003-0965-7666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              ORCID 0009-0003-0965-7666
            </a>
          </div>

          <RecordFigures />
        </div>
      </section>

      {/* Role, discipline, fields */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Position and discipline
          </p>
          <dl className="mt-8 space-y-6 text-base leading-relaxed">
            <div>
              <dt className="text-sm font-medium text-foreground">
                Current role
              </dt>
              <dd className="mt-1 text-foreground/85">
                Researcher and Research Advisor, NLA University College, Oslo, Norway.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-foreground">Doctorate</dt>
              <dd className="mt-1 text-foreground/85">
                PhD in psychology (psychophysiology), with subsequent research
                concentrated in philosophy of technology and theology.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-foreground">
                Principal research fields
              </dt>
              <dd className="mt-3 space-y-3">
                {FIELDS.map((f) => (
                  <p key={f.name} className="text-foreground/85">
                    <span className="font-medium text-foreground">
                      {f.name}.
                    </span>{" "}
                    {f.note}
                  </p>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Intellectual biography */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Intellectual biography
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            From measurement to the conditions of judgment
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
            <p>
              My early work was empirical: measuring how bodies and minds
              respond under controlled conditions. What stayed with me from
              that period was not the data but the problem behind it — what an
              instrument must presuppose before its readings mean anything at
              all.
            </p>
            <p>
              That question migrated. In institutional and technological
              settings, the same structure recurs: procedures produce outputs
              that look like judgments, while the conditions that would make
              them answerable judgments are quietly removed. The present
              programme formalises this as a set of philosophical problems —
              inferential license, the judgment gap, second-order provenance,
              epistemic infrastructure — rather than as a critique of any
              particular technology.
            </p>
            <p>
              Theology enters not as commentary but as a source of
              anthropological precision: doctrines of creaturehood, formation,
              and answerability describe what a human agent is supposed to be
              before any system attempts to substitute for one.
            </p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            The full programme is set out on the{" "}
            <Link
              to="/inquiry"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              research programme
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* Interdisciplinary trajectory */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Interdisciplinary trajectory
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            An Interdisciplinary Trajectory
          </h2>
          <p className="mt-2 font-display text-lg italic leading-snug text-foreground/85">
            From Cognitive Mechanisms to Algorithmic Governance
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            Across different projects and disciplines, my work returns to a
            central question: the antecedent and constitutive conditions under
            which human judgment, agency, and responsibility become possible —
            and how technological and institutional architectures reorganize
            those conditions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            This trajectory spans three complementary domains:
          </p>
          <ul className="mt-10 space-y-8">
            {TRAJECTORY.map((t) => (
              <li key={t.domain} className="border-t border-border pt-6">
                <p className="font-display text-lg text-foreground">
                  {t.domain}
                  {t.qualifier && (
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      ({t.qualifier})
                    </span>
                  )}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  {t.note}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-foreground/85">
            Rather than a series of disparate fields, these stages represent a
            unified inquiry: moving from the micro-mechanisms of cognition,
            through the macro-structures of institutional governance, to the
            normative and philosophical conditions of human life under
            automated mediation.
          </p>
        </div>
      </section>

      {/* Signature corpus */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Selected publications
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            Five papers on human life, technology, and responsibility
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            These papers explore how our relationships, institutions, and technologies
            shape what we want, how we judge, and what we can take responsibility for.
          </p>
          <ol className="mt-10 space-y-10">
            {SIGNATURE_CORPUS.map((item) => (
              <li
                key={item.title}
                className="relative border-t border-border pt-6"
              >
                <span
                  aria-hidden
                  className="absolute -top-3 left-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-xs font-medium text-background"
                >
                  {item.rank}
                </span>
                <p className="pl-9 font-display text-lg leading-snug text-foreground">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted underline-offset-4 hover:text-muted-foreground"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </p>
                <p className="mt-1 pl-9 text-sm text-muted-foreground">
                  {item.venue}
                  {item.level && (
                    <span className="ml-2 inline-flex items-center rounded-sm border border-border px-1.5 py-0.5 text-xs">
                      Level {item.level}
                    </span>
                  )}
                </p>
                <p className="mt-4 pl-9 text-sm leading-relaxed text-foreground/85">
                  {item.rationale}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <PreprintNotice />
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            The full peer-reviewed record is on the{" "}
            <Link
              to="/publications"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              publications
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* Indicators */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Selected indicators
          </p>
          <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
            <div className="bg-background p-6">
              <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Publications (2026)
              </dt>
              <dd className="mt-2 font-display text-3xl text-foreground">
                {TOTAL}
                <span className="mt-1 block font-sans text-xs font-normal normal-case text-muted-foreground">
                  {ARTICLES} peer-reviewed articles + {PREPRINT_COUNT} preprint
                </span>
              </dd>
            </div>
            <div className="bg-background p-6">
              <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Level 2 channels
              </dt>
              <dd className="mt-2 font-display text-3xl text-foreground">{LEVEL_2}</dd>
            </div>
            <div className="bg-background p-6">
              <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Citations / h-index
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Not yet reported. The 2026 corpus is too recent for a
                meaningful citation window.
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-muted-foreground">
            Source: NVA (Nasjonalt vitenarkiv), verified October 2026. The{" "}
            {TOTAL} items are {ARTICLES} peer-reviewed journal articles and{" "}
            {PREPRINT_COUNT} preprint. Channel levels follow the Norwegian
            register (HK-dir).
          </p>
        </div>
      </section>

      {/* Earlier research and continuity */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Earlier research
          </p>
          <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
            One question, several disciplines
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            Before the present programme, my work ran through clinical
            rheumatology, experimental psychology, and technology leadership.
            The continuity is a single question: under what conditions can a
            signal carry the inference someone draws from it? That is the same
            problem in a prepulse-inhibition paradigm, in a diagnostic image,
            and in what I now call inferential license.
          </p>
          <ul className="mt-10 space-y-8">
            {EARLIER_WORK.map((e) => (
              <li key={e.role} className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {e.period}
                </p>
                <p className="mt-2 font-display text-lg text-foreground">
                  {e.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {e.note}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Public writing from this transition includes an opinion essay on
            synthetic authority in university governance, published in Inside
            Higher Ed on 10 February 2026, where the byline still describes the
            behavioural-science background above.
          </p>
        </div>
      </section>


      {/* Experience */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Professional and academic experience
          </p>
          <ul className="mt-8 space-y-8">
            {EXPERIENCE.map((e) => (
              <li key={e.role + e.org} className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {e.period}
                </p>
                <p className="mt-2 font-display text-lg text-foreground">
                  {e.role} · {e.org}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {e.note}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Teaching, supervision, and funding records are listed in the{" "}
            <Link
              to="/cv"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              full CV
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Verified records */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Verified records
            </p>
            <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
              Where the full record is maintained
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              ORCID is the canonical identifier; NVA is the authoritative
              Norwegian record against which the publication metadata on this
              site is verified. Only profiles with a confirmed personal record
              are listed.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROFILES.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between gap-4 rounded-md border border-border bg-background px-5 py-4 transition-colors hover:border-foreground"
                >
                  <span>
                    <span className="block font-display text-base text-foreground">
                      {p.name}
                    </span>
                    {p.note && (
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {p.note}
                      </span>
                    )}
                  </span>
                  <span
                    aria-hidden
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
