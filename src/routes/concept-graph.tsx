import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CONCEPTS } from "../data/concepts";
import { PUBLICATIONS } from "../data/publications";
import { CONCEPT_EDGES as EDGES, pairKey, type ConceptEdge } from "../data/concept-edges";

const TITLE = "Concept Relationship Graph — Dr. Åke Elden";
const DESCRIPTION =
  "An interactive map of the research programme's core concepts and the publications that support each connection between them.";
const URL_SELF = "https://ake-elden-archive.lovable.app/concept-graph";

type GraphSearch = { pair?: string };

export const Route = createFileRoute("/concept-graph")({
  validateSearch: (search: Record<string, unknown>): GraphSearch => {
    const raw = search.pair;
    return typeof raw === "string" && raw.length > 0 ? { pair: raw } : {};
  },
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

type Edge = ConceptEdge;

function findEdgeIndexByPair(pair: string | undefined): number | null {
  if (!pair) return null;
  const idx = EDGES.findIndex((e) => pairKey(e.a, e.b) === pair);
  return idx === -1 ? null : idx;
}

function ConceptGraph() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const [copied, setCopied] = useState(false);

  const active = findEdgeIndexByPair(search.pair);

  const setActive = (i: number | null) => {
    setCopied(false);
    if (i === null) {
      navigate({ search: {}, replace: false });
      return;
    }
    const e = EDGES[i];
    navigate({ search: { pair: pairKey(e.a, e.b) }, replace: false });
  };

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

  const handleCopyLink = async () => {
    if (typeof window === "undefined") return;
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

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
            Click a connection to see the works that develop it. Each
            connection has a shareable link you can copy or bookmark.
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
              {/* Halo behind the active edge */}
              {active !== null && (() => {
                const e = EDGES[active];
                const p1 = positions.get(e.a)!;
                const p2 = positions.get(e.b)!;
                return (
                  <line
                    key="active-halo"
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke="currentColor"
                    strokeLinecap="round"
                    className="edge-halo pointer-events-none text-foreground"
                  />
                );
              })()}

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
                    strokeLinecap="round"
                    className={`cursor-pointer transition-all ${
                      isActive
                        ? "edge-active text-foreground"
                        : isDim
                          ? "text-border"
                          : "text-muted-foreground/50 hover:text-foreground"
                    }`}
                    onClick={() => setActive(isActive ? null : i)}
                  />
                );
              })}

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

              {/* Floating label at midpoint of the active edge */}
              {activeEdge && (() => {
                const p1 = positions.get(activeEdge.a)!;
                const p2 = positions.get(activeEdge.b)!;
                const mx = (p1.x + p2.x) / 2;
                const my = (p1.y + p2.y) / 2;
                const label = "Supporting relationship";
                const padX = 12;
                const padY = 6;
                const charW = 6.2;
                const w = Math.round(label.length * charW) + padX * 2;
                const h = 26;
                return (
                  <g
                    key={`label-${active}`}
                    className="edge-label pointer-events-none"
                  >
                    <rect
                      x={mx - w / 2}
                      y={my - h / 2}
                      width={w}
                      height={h}
                      rx={4}
                      className="fill-background stroke-foreground"
                      strokeWidth={1}
                    />
                    <text
                      x={mx}
                      y={my + 4}
                      textAnchor="middle"
                      className="fill-foreground"
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            {activeEdge ? (
              <ActiveEdgePanel
                edge={activeEdge}
                onCopyLink={handleCopyLink}
                copied={copied}
                onClear={() => setActive(null)}
              />
            ) : (
              <div className="text-center text-sm text-muted-foreground">
                Select a line in the diagram — or a connection below — to reveal
                its supporting publications and a shareable link.
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
          <p className="mt-2 text-sm text-muted-foreground">
            Each entry links directly to that pair — copy the URL to share a
            specific connection.
          </p>
          <ol className="mt-8 space-y-6">
            {EDGES.map((e, i) => {
              const a = positions.get(e.a)!;
              const b = positions.get(e.b)!;
              const key = pairKey(e.a, e.b);
              const isActive = active === i;
              return (
                <li
                  key={i}
                  id={`pair-${key}`}
                  className={`border-l-2 pl-5 transition-colors ${
                    isActive
                      ? "border-foreground"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  <Link
                    to="/concept-graph"
                    search={{ pair: key }}
                    className="text-left"
                  >
                    <p className="font-display text-lg text-foreground">
                      {a.name}
                      <span className="mx-2 text-muted-foreground">×</span>
                      {b.name}
                    </p>
                  </Link>
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

function ActiveEdgePanel({
  edge,
  onCopyLink,
  copied,
  onClear,
}: {
  edge: Edge;
  onCopyLink: () => void;
  copied: boolean;
  onClear: () => void;
}) {
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

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onCopyLink}
          className="inline-flex items-center rounded-sm border border-border bg-background px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-foreground hover:border-foreground"
        >
          {copied ? "Link copied" : "Copy link to this connection"}
        </button>
        <button
          type="button"
          onClick={onClear}
          className="text-xs uppercase tracking-[0.15em] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Clear selection
        </button>
      </div>

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
