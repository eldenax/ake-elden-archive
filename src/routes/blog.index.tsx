import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "../data/blog";

const TITLE = "Notes — Dr. Åke Elden";
const DESCRIPTION =
  "Essays and notes from the research programme on judgment, responsibility, and human formation under conditions of artificial intelligence.";
const URL_SELF = "https://ake-elden-archive.lovable.app/blog";

export const Route = createFileRoute("/blog/")({
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
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Notes
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Essays and working notes
          </h1>
          <p className="mt-6 font-display text-lg italic leading-relaxed text-foreground/80">
            Shorter pieces that connect the concepts, publications, and applied
            work of the programme.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <ul className="space-y-10">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug} className="border-b border-border pb-10 last:border-0">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · {post.readingTime}
              </p>
              <h2 className="mt-3 font-display text-2xl leading-snug text-foreground">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="underline decoration-dotted underline-offset-4 hover:text-foreground/70"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {post.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
