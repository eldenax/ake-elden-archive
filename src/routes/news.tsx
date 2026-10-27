import { createFileRoute } from "@tanstack/react-router";
import {
  PUBLICATIONS,
  JOURNAL_ARTICLES,
  PREPRINTS,
} from "../data/publications";
import { RecordFigures } from "../components/RecordFigures";
import { PreprintNotice } from "../components/PreprintNotice";

const TITLE = "News — Dr. Åke Elden";
const DESCRIPTION =
  "Updates on research output, forthcoming publications, and programme developments.";
const URL_SELF = "https://akeelden.com/news";

const TOTAL = PUBLICATIONS.length;
const ARTICLES = JOURNAL_ARTICLES.length;
const PREPRINT_COUNT = PREPRINTS.length;
const LEVEL_2 = JOURNAL_ARTICLES.filter((p) => p.level === "2").length;

const ITEMS = [
  {
    date: "2026",
    heading: "Research output (2026)",
    body: [
      `In 2026, ${TOTAL} items entered the publication record: ${ARTICLES} peer-reviewed journal articles published online or formally accepted, and ${PREPRINT_COUNT} preprint.`,
      `The publications span philosophy of science, theology, AI ethics, behavioural science, health communication, and heritage studies, with ${LEVEL_2} appearing in Norwegian Register Level 2 journals.`,
      "Together, they develop a research programme on agency, judgment, responsibility, scientific inference, and human formation under conditions of artificial intelligence.",
    ],
  },
];

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL_SELF }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url: URL_SELF,
          name: TITLE,
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            News
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Updates from the research programme
          </h1>
          <RecordFigures />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 space-y-12">
          {ITEMS.map((item) => (
            <article key={item.heading} className="border-t border-border pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {item.date}
              </p>
              <h2 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
                {item.heading}
              </h2>
              <div className="mt-5 space-y-4">
                {item.body.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
          <PreprintNotice />
        </div>
      </section>
    </div>
  );
}
