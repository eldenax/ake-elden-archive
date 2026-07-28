import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CONCEPTS } from "../data/concepts";
import { PUBLICATIONS } from "../data/publications";

const TITLE = "Concept Relationship Graph — Dr. Åke Elden";
const DESCRIPTION =
  "An interactive map of the research programme's core concepts and the publications that support each connection between them.";
const URL_SELF = "https://ake-elden-archive.lovable.app/concept-graph";

export const Route = createFileRoute("/concept-graph")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: URL_SELF }],
  }),
  component: ConceptGraph,
});

// Edges: pairs of concept slugs with the working papers / articles that
// substantiate the connection. Publication titles here match entries in
// src/data/publications.ts so we can render live cross-links.
type Edge = { a: string; b: string; publications: string[]; note: string };

const EDGES: Edge[] = [
  {
    a: "inferential-license",
    b: "judgment-gap",
    note: "Overreached inference is the mechanism by which the judgment gap opens.",
    publications: [
      "LLM experiments and inferential license",
      "The Locus of Answerability",
      "Design–Inference Alignment",
    ],
  },
  {
    a: "judgment-gap",
    b: "second-order-provenance",
    note: "Closing the gap requires provenance not of data but of the orderings that make outputs decisive.",
    publications: [
      "The Locus of Answerability",
      "Second-Order Provenance",
      "Answerability on the Record",
    ],
  },
  {
    a: "second-order-provenance",
    b: "epistemic-infrastructure",
    note: "Normative orderings are sustained by — and inherited from — epistemic infrastructure.",
    publications: [
      "Second-Order Provenance",
      "AI as epistemic infrastructure",
    ],
  },
  {
    a: "inferential-license",
    b: "epistemic-infrastructure",
    note: "License to infer is granted, revoked, and audited by the surrounding epistemic infrastructure.",
    publications: [
      "LLM experiments and inferential license",
      "AI as epistemic infrastructure",
      "Design–Inference Alignment",
    ],
  },
  {
    a: "partition-thesis",
    b: "ethical-disclosure",
    note: "Standing does not by itself disclose a claim; disclosure is the prior condition of ordering.",
    publications: [
      "Standing Is Not an Ordering",
      "Predictive AI and Second-Personal Exclusion",
    ],
  },
  {
    a: "ethical-disclosure",
    b: "judgment-gap",
    note: "Where disclosure is foreclosed, no judgment can arise — the gap is total.",
    publications: [
      "The Diffuse Void",
      "When Responsibility Fails to Arise",
    ],
  },
  {
    a: "partition-thesis",
    b: "second-order-provenance",
    note: "Ordering disputes are second-order disputes; standing does not settle them.",
    publications: [
      "Standing Is Not an Ordering",
      "Second-Order Provenance",
    ],
  },
  {
    a: "comparative-entitlement-formation",
    b: "post-mimetic-relationality",
    note: "Entitlement forms out of comparison once mimetic relations are infrastructurally routed.",
    publications: [
      "Comparative Desire and Social Violence",
      "The Platforming of Desire",
    ],
  },
  {
    a: "post-mimetic-relationality",
    b: "epistemic-infrastructure",
    note: "Post-mimetic relations are held in place by the same infrastructures that constitute knowledge.",
    publications: [
      "The Platforming of Desire",
      "Media as infrastructure",
    ],
  },
  {
    a: "comparative-entitlement-formation",
    b: "ethical-disclosure",
    note: "Platform grievance forecloses the disclosure of the other as an addressable party.",
    publications: [
      "Comparative Desire and Social Violence",
      "Predictive AI and Second-Personal Exclusion",
    ],
  },
  {
    a: "systemic-friction",
    b: "judgment-gap",
    note: "Removing friction removes the temporal room in which judgment could be exercised.",
    publications: [
      "Systemic friction",
      "Institutional inversion",
    ],
  },
  {
    a: "systemic-friction",
    b: "epistemic-infrastructure",
    note: "Friction is a load-bearing feature of epistemic infrastructure, not an inefficiency.",
    publications: [
      "Systemic friction",
      "Administrative expertise as epistemic lag",
    ],
  },
];

function ConceptGraph() {
  const [active, setActive] = useState<number | null>(null);

  const layout = useMemo(() => {
    const n = CONCEPTS.length;
    const cx = 400;
    const cy = 340;
    const r = 260;
    return CONCEPTS.map((c, i) => {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      return {
        slug: c.slug,
        name: c.name,
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
      };
    });
  }, []);

  const positions = useMemo(() => {
    const map = new Map<string, { x: number; y: number; name: string }>();
    layout.forEach((p) => map.set(p.slug, p));
    return map;
  }, [layout]);

  const activeEdge = active !== null ? EDGES[active] : null;

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Concept Graph
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            How the concepts hold together
          </h1>
          <p className="mt-6 font-display text-lg italic leading-relaxed text-foreground/80">
            The programme is not a list of separate concepts. Each concept is
            developed against — and through — the others. The lines below mark
            the load-bearing connections; each is supported by specific
            publications.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Click a connection to see the works that develop it.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <div className="overflow-x-auto">
            <svg
              viewBox="0 0 800 680"
              className="mx-auto block h-auto w-full max-w-4xl"
              role="img"
              aria-label="Concept relationship diagram"
            >
              {/* edges */}
              {EDGES.map((e, i) => {
                const p1 = positions.get(e.a)!;
                const p2 = positions.get(e.b)!;
                const isActive = active === i;
                const isDim = active !== null && !isActive;
                return (
                  <line
                    key={`edge-${i}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke="currentColor"
                    strokeWidth={isActive ? 2.5 : 1}
                    className={`cursor-pointer transition-all ${
                      isActive
                        ? "text-foreground"
                        : isDim
                          ? "text-border"
                          : "text-muted-foreground/50 hover:text-foreground"
                    }`}
                    onClick={() => setActive(isActive ? null : i)}
                  />
                );
              })}

              {/* invisible thicker hit-areas for easier clicking */}
              {EDGES.map((e, i) => {
                const p1 = positions.get(e.a)!;
                const p2 = positions.get(e.b)!;
                return (
                  <line
                    key={`hit-${i}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke="transparent"
                    strokeWidth={14}
                    className="cursor-pointer"
                    onClick={() => setActive(active === i ? null : i)}
                  />
                );
              })}

              {/* nodes */}
              {layout.map((p) => {
                const isConnected =
                  activeEdge &&
                  (activeEdge.a === p.slug || activeEdge.b === p.slug);
                const isDim = active !== null && !isConnected;
                const words = p.name.split(" ");
                const lines: string[] = [];
                let current = "";
                for (const w of words) {
                  if ((current + " " + w).trim().length > 14) {
                    lines.push(current.trim());
                    current = w;
                  } else {
                    current = (current + " " + w).trim();
                  }
                }
                if (current) lines.push(current);
                return (
                  <g key={p.slug} className={isDim ? "opacity-40" : ""}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={9}
                      className={
                        isConnected
                          ? "fill-foreground"
                          : "fill-background stroke-foreground"
                      }
                      strokeWidth={1.5}
                    />
                    <text
                      x={p.x}
                      y={p.y + 26}
                      textAnchor="middle"
                      className="fill-foreground font-display"
                      style={{ fontSize: 13 }}
                    >
                      {lines.map((line, li) => (
                        <tspan key={li} x={p.x} dy={li === 0 ? 0 : 15}>
                          {line}
                        </tspan>
                      ))}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            {activeEdge ? (
              <ActiveEdgePanel edge={activeEdge} />
            ) : (
              <div className="text-center text-sm text-muted-foreground">
                Select a line in the diagram to reveal the connection and its
                supporting publications.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <h2 className="font-display text-2xl text-foreground">
            All connections
          </h2>
          <ol className="mt-8 space-y-6">
            {EDGES.map((e, i) => {
              const a = positions.get(e.a)!;
              const b = positions.get(e.b)!;
              return (
                <li
                  key={i}
                  className="border-l-2 border-border pl-5 transition-colors hover:border-foreground"
                >
                  <button
                    onClick={() => setActive(i)}
                    className="text-left"
                  >
                    <p className="font-display text-lg text-foreground">
                      {a.name}
                      <span className="mx-2 text-muted-foreground">×</span>
                      {b.name}
                    </p>
                  </button>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {e.note}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {e.publications.length} supporting{" "}
                    {e.publications.length === 1 ? "work" : "works"}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
}

function ActiveEdgePanel({ edge }: { edge: Edge }) {
  const conceptA = CONCEPTS.find((c) => c.slug === edge.a)!;
  const conceptB = CONCEPTS.find((c) => c.slug === edge.b)!;
  const pubs = edge.publications.map((title) => ({
    title,
    entry: PUBLICATIONS.find((p) => p.title === title),
  }));

  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <Link
          to="/concepts/$slug"
          params={{ slug: conceptA.slug }}
          className="font-display text-xl text-foreground underline-offset-4 hover:underline"
        >
          {conceptA.name}
        </Link>
        <span className="text-muted-foreground">×</span>
        <Link
          to="/concepts/$slug"
          params={{ slug: conceptB.slug }}
          className="font-display text-xl text-foreground underline-offset-4 hover:underline"
        >
          {conceptB.name}
        </Link>
      </div>
      <p className="mt-4 font-display text-base italic leading-relaxed text-foreground/80">
        {edge.note}
      </p>
      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Supporting publications
        </p>
        <ul className="mt-3 space-y-3">
          {pubs.map(({ title, entry }) => (
            <li key={title} className="border-t border-border pt-3">
              <p className="font-display text-base text-foreground">{title}</p>
              {entry ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.status}
                  {entry.year ? ` · ${entry.year}` : ""} — {entry.contribution}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
