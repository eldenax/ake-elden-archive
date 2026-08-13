import { createFileRoute, Link } from "@tanstack/react-router";
import { PUBLICATIONS } from "../data/publications";

const TITLE = "Academic Profile — Dr. Åke Elden";
const DESCRIPTION =
  "Academic profile of Dr. Åke Elden: Research Advisor at NLA University College, Oslo. Philosophy of technology, social epistemology, and theological anthropology — role, fields, indicators, and verified scholarly records.";
const URL_SELF = "https://ake-elden-archive.lovable.app/academic-profile";

const PROFILES: { name: string; href: string; note?: string }[] = [
  { name: "ORCID", href: "https://orcid.org/0009-0003-0965-7666", note: "0009-0003-0965-7666" },
  { name: "PhilPeople", href: "https://philpeople.org/profiles/aake-elden" },
  { name: "PhilPapers", href: "https://philpapers.org/s/Aake%20Elden" },
  {
    name: "NVA — Nasjonalt vitenarkiv",
    href: "https://nva.sikt.no/research-profile/57416",
    note: "Authoritative Norwegian record used to verify all metadata on this site",
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
    name: "Theological anthropology",
    note: "Creaturehood, formation, and moral agency under conditions of optimisation and automation.",
  },
];

const EXPERIENCE = [
  {
    period: "Present",
    role: "Research Advisor",
    org: "NLA University College, Oslo",
    note: "Research development and advisory work alongside an independent research programme in philosophy of technology and theological anthropology.",
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
            jobTitle: "Research Advisor",
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
            Philosopher of technology, social epistemology, and theological
            anthropology · Research Advisor at NLA University College, Oslo
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
                Peer-reviewed articles (2026)
              </dt>
              <dd className="mt-2 font-display text-3xl text-foreground">{TOTAL}</dd>
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
            Source: NVA (Nasjonalt vitenarkiv), verified August 2026. Channel
            levels follow the Norwegian register (HK-dir).
          </p>
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
                Research Advisor, NLA University College, Oslo, Norway.
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
