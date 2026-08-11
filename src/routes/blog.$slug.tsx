import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getBlogPost, BLOG_POSTS } from "../data/blog";
import { getConcept } from "../data/concepts";

const BASE = "https://ake-elden-archive.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    const post = loaderData ?? BLOG_POSTS[0];
    const url = `${BASE}/blog/${post.slug}`;
    const title = `${post.title} — Dr. Åke Elden`;
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: title },
        { property: "og:description", content: post.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            url,
            author: { "@type": "Person", name: "Åke Elden" },
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  return (
    <article>
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <Link
            to="/blog"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground underline decoration-dotted underline-offset-4 hover:text-foreground"
          >
            Notes
          </Link>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readingTime}
          </p>
          <p className="mt-8 font-display text-lg italic leading-relaxed text-foreground/80">
            {post.lede}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        {post.sections.map((section) => (
          <section key={section.heading} className="mb-14">
            <h2 className="font-display text-2xl leading-snug text-foreground">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {section.concepts && section.concepts.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {section.concepts.map((slug) => {
                  const concept = getConcept(slug);
                  if (!concept) return null;
                  return (
                    <Link
                      key={slug}
                      to="/concepts/$slug"
                      params={{ slug }}
                      className="rounded-sm border border-border px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {concept.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </section>
        ))}

        <div className="border-t border-border pt-10">
          {post.closing.map((p, i) => (
            <p key={i} className="mt-4 font-display text-lg leading-relaxed text-foreground/85">
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              to="/concepts"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              All concepts
            </Link>
            <Link
              to="/concept-graph"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              Research map
            </Link>
            <Link
              to="/publications"
              className="underline decoration-dotted underline-offset-4 hover:text-foreground"
            >
              Publications
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
