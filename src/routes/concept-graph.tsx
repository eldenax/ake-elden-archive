import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { CONCEPTS } from "../data/concepts";
import { PUBLICATIONS, type Capacity } from "../data/publications";
import { CONCEPT_EDGES as EDGES, pairKey, type ConceptEdge } from "../data/concept-edges";

const CAPACITIES: { slug: Capacity; label: string; blurb: string }[] = [
  {
    slug: "presupposed",
    label: "Presupposed",
    blurb: "Capacities the programme assumes must already be in place.",
  },
  {
    slug: "transformed",
    label: "Transformed",
    blurb: "Capacities reshaped by the infrastructures under study.",
  },
  {
    slug: "concealed",
    label: "Concealed",
    blurb: "Capacities that automated systems tend to hide from view.",
  },
];


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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("concept-graph:reduce-motion");
    if (stored !== null) {
      setReduceMotion(stored === "1");
      return;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  const toggleReduceMotion = () => {
    setReduceMotion((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "concept-graph:reduce-motion",
          next ? "1" : "0",
        );
      }
      return next;
    });
  };

  const [focusMode, setFocusMode] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("concept-graph:focus-mode");
    if (stored !== null) setFocusMode(stored === "1");
  }, []);
  const toggleFocusMode = () => {
    setFocusMode((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "concept-graph:focus-mode",
          next ? "1" : "0",
        );
      }
      return next;
    });
  };

  const svgRef = useRef<SVGSVGElement | null>(null);


  const [traceCapacities, setTraceCapacities] = useState<Capacity[]>([]);
  const [traceStep, setTraceStep] = useState(0);
  const [tracePlaying, setTracePlaying] = useState(false);

  const traceOrders = useMemo(() => {
    const result = new Map<Capacity, number[]>();
    for (const cap of traceCapacities) {
      const titles = new Set(
        PUBLICATIONS.filter((p) => p.capacities?.includes(cap)).map(
          (p) => p.title,
        ),
      );
      const matching = EDGES.map((e, i) => ({ e, i })).filter(({ e }) =>
        e.publications.some((t) => titles.has(t)),
      );
      if (matching.length === 0) {
        result.set(cap, []);
        continue;
      }
      const adj = new Map<string, { idx: number; other: string }[]>();
      for (const { e, i } of matching) {
        if (!adj.has(e.a)) adj.set(e.a, []);
        if (!adj.has(e.b)) adj.set(e.b, []);
        adj.get(e.a)!.push({ idx: i, other: e.b });
        adj.get(e.b)!.push({ idx: i, other: e.a });
      }
      const order: number[] = [];
      const usedEdges = new Set<number>();
      const seen = new Set<string>();
      const start = [...adj.entries()].sort(
        (a, b) => b[1].length - a[1].length,
      )[0][0];
      const queue: string[] = [start];
      seen.add(start);
      while (usedEdges.size < matching.length) {
        if (queue.length === 0) {
          const next = matching.find(({ i }) => !usedEdges.has(i));
          if (!next) break;
          queue.push(next.e.a);
          seen.add(next.e.a);
        }
        const node = queue.shift()!;
        for (const { idx, other } of adj.get(node) ?? []) {
          if (usedEdges.has(idx)) continue;
          usedEdges.add(idx);
          order.push(idx);
          if (!seen.has(other)) {
            seen.add(other);
            queue.push(other);
          }
        }
      }
      result.set(cap, order);
    }
    return result;
  }, [traceCapacities]);

  // Interleave capacity orders so both traces advance in parallel.
  const traceSteps = useMemo(() => {
    const steps: { cap: Capacity; idx: number }[] = [];
    const lists = traceCapacities.map((c) => traceOrders.get(c) ?? []);
    const maxLen = Math.max(0, ...lists.map((l) => l.length));
    for (let i = 0; i < maxLen; i++) {
      for (let c = 0; c < traceCapacities.length; c++) {
        if (i < lists[c].length) {
          steps.push({ cap: traceCapacities[c], idx: lists[c][i] });
        }
      }
    }
    return steps;
  }, [traceCapacities, traceOrders]);

  const toggleCapacity = (cap: Capacity) => {
    setCopied(false);
    if (search.pair) navigate({ search: {}, replace: true });
    setTraceCapacities((prev) => {
      if (prev.includes(cap)) return prev.filter((c) => c !== cap);
      if (prev.length >= 2) return [prev[1], cap];
      return [...prev, cap];
    });
    setTraceStep(0);
    setTracePlaying(true);
  };

  const removeCapacity = (cap: Capacity) => {
    if (search.pair) navigate({ search: {}, replace: true });
    setTraceCapacities((prev) => {
      const next = prev.filter((c) => c !== cap);
      if (next.length === 0) {
        setTraceStep(0);
        setTracePlaying(false);
      }
      return next;
    });
  };


  const clearTrace = () => {
    setTraceCapacities([]);
    setTraceStep(0);
    setTracePlaying(false);
  };

  useEffect(() => {
    if (!tracePlaying) return;
    if (traceStep >= traceSteps.length) {
      setTracePlaying(false);
      return;
    }
    const delay = reduceMotion ? 350 : 700;
    const t = setTimeout(() => setTraceStep((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [tracePlaying, traceStep, traceSteps.length, reduceMotion]);

  const revealedByCap = useMemo(() => {
    const map = new Map<Capacity, Set<number>>();
    for (const cap of traceCapacities) map.set(cap, new Set());
    for (let s = 0; s < Math.min(traceStep, traceSteps.length); s++) {
      const { cap, idx } = traceSteps[s];
      map.get(cap)?.add(idx);
    }
    return map;
  }, [traceCapacities, traceSteps, traceStep]);

  const edgeReveal = useMemo(() => {
    // For each edge, which of the selected capacities have revealed it so far.
    const map = new Map<number, Capacity[]>();
    for (const [cap, set] of revealedByCap.entries()) {
      for (const idx of set) {
        if (!map.has(idx)) map.set(idx, []);
        map.get(idx)!.push(cap);
      }
    }
    return map;
  }, [revealedByCap]);

  const revealedNodes = useMemo(() => {
    const s = new Set<string>();
    edgeReveal.forEach((_caps, i) => {
      s.add(EDGES[i].a);
      s.add(EDGES[i].b);
    });
    return s;
  }, [edgeReveal]);

  const currentTraceStep =
    traceStep > 0 && traceStep <= traceSteps.length
      ? traceSteps[traceStep - 1]
      : null;
  const currentTraceEdge = currentTraceStep?.idx ?? null;
  const tracingActive = traceCapacities.length > 0;

  const active = findEdgeIndexByPair(search.pair);



  const setActive = (i: number | null) => {
    setCopied(false);
    if (tracingActive) clearTrace();
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

  // Compute a target transform that zooms into the current traced edge.
  const focusTransform = useMemo(() => {
    if (!focusMode || !tracingActive || currentTraceEdge === null) return null;
    const e = EDGES[currentTraceEdge];
    const p1 = positions.get(e.a);
    const p2 = positions.get(e.b);
    if (!p1 || !p2) return null;
    const cx = (p1.x + p2.x) / 2;
    const cy = (p1.y + p2.y) / 2;
    const dx = Math.abs(p1.x - p2.x);
    const dy = Math.abs(p1.y - p2.y);
    // Target frame size in viewBox units (viewBox is 800x680).
    const frameW = Math.max(dx + 260, 340);
    const frameH = Math.max(dy + 200, 260);
    const scale = Math.min(800 / frameW, 680 / frameH, 2.4);
    const tx = 400 - cx * scale;
    const ty = 340 - cy * scale;
    return { scale, tx, ty };
  }, [focusMode, tracingActive, currentTraceEdge, positions]);

  // Scroll the graph into view when the focused step changes.
  useEffect(() => {
    if (!focusMode || !tracingActive || currentTraceEdge === null) return;
    if (!svgRef.current) return;
    svgRef.current.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  }, [focusMode, tracingActive, currentTraceEdge, reduceMotion]);



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
          <div className="mb-6 grid gap-6 border border-border bg-secondary/30 p-5 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                How to read this diagram
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
                <li className="flex items-start gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="mt-0.5 shrink-0">
                    <circle cx="11" cy="11" r="6" className="fill-background stroke-foreground" strokeWidth={1.5} />
                  </svg>
                  <span>
                    <strong className="font-medium text-foreground">Nodes</strong> are the load-bearing concepts of the programme. Hover a node to see its tagline; click through for the full concept page.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="mt-0.5 shrink-0">
                    <line x1="2" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" className="text-muted-foreground" />
                  </svg>
                  <span>
                    <strong className="font-medium text-foreground">Edges</strong> mark supporting relationships between two concepts. Hover an edge for its one-line note; click it to reveal the works that develop that connection.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="mt-0.5 shrink-0">
                    <circle cx="11" cy="11" r="6" className="fill-foreground" />
                  </svg>
                  <span>
                    A <strong className="font-medium text-foreground">selected edge</strong> highlights its two endpoints and dims the rest — a way to trace a single relationship in isolation.
                  </span>
                </li>
              </ul>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Path styles
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
                <li className="flex items-start gap-3">
                  <svg width="34" height="14" viewBox="0 0 34 14" aria-hidden="true" className="mt-1 shrink-0">
                    <line x1="2" y1="7" x2="32" y2="7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-foreground" />
                  </svg>
                  <span>
                    <strong className="font-medium text-foreground">Path 1</strong> — solid line. The first capacity you pick lights up edges cited by its works.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="34" height="14" viewBox="0 0 34 14" aria-hidden="true" className="mt-1 shrink-0">
                    <line x1="2" y1="7" x2="32" y2="7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeDasharray="5 4" className="text-foreground" />
                  </svg>
                  <span>
                    <strong className="font-medium text-foreground">Path 2</strong> — dashed line. Add a second capacity to run it alongside Path 1; both advance step by step.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="34" height="14" viewBox="0 0 34 14" aria-hidden="true" className="mt-1 shrink-0">
                    <line x1="2" y1="7" x2="32" y2="7" stroke="currentColor" strokeWidth={7} strokeLinecap="round" className="text-foreground/40" />
                    <line x1="2" y1="7" x2="32" y2="7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-foreground" />
                    <line x1="2" y1="7" x2="32" y2="7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeDasharray="5 4" className="text-foreground" />
                  </svg>
                  <span>
                    <strong className="font-medium text-foreground">Overlap</strong> — a soft halo behind the solid and dashed strokes. It marks edges cited by works from <em>both</em> capacities: the places where the two paths meet on the same connection.
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Tracing a capacity? Open{" "}
                <Link to="/publications" search={{ capacity: "presupposed" }} className="text-foreground underline decoration-dotted underline-offset-4 hover:no-underline">presupposed</Link>,{" "}
                <Link to="/publications" search={{ capacity: "transformed" }} className="text-foreground underline decoration-dotted underline-offset-4 hover:no-underline">transformed</Link>, or{" "}
                <Link to="/publications" search={{ capacity: "concealed" }} className="text-foreground underline decoration-dotted underline-offset-4 hover:no-underline">concealed</Link>{" "}
                in the archive, then return here and follow the edges cited by those works.
              </p>

            </div>
            <label className="inline-flex cursor-pointer items-center gap-2 self-start text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground md:justify-self-end">
              <input
                type="checkbox"
                checked={reduceMotion}
                onChange={toggleReduceMotion}
                className="h-3.5 w-3.5 accent-foreground"
                aria-label="Reduce motion in the concept graph"
              />
              Reduce motion
            </label>
          </div>

          <div className="mb-6 border border-border bg-background p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Path tracing
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  Pick one or two capacities. The graph highlights each path
                  one step at a time — and marks the connections where the two
                  overlap.
                </p>
              </div>
              {tracingActive ? (
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.15em]">
                  <span className="text-muted-foreground">
                    Step {Math.min(traceStep, traceSteps.length)} /{" "}
                    {traceSteps.length}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setTracePlaying((p) => {
                        if (traceStep >= traceSteps.length) {
                          setTraceStep(0);
                          return true;
                        }
                        return !p;
                      })
                    }
                    className="rounded-sm border border-border bg-background px-3 py-1.5 font-medium text-foreground hover:border-foreground"
                  >
                    {traceStep >= traceSteps.length
                      ? "Replay"
                      : tracePlaying
                        ? "Pause"
                        : "Play"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTracePlaying(false);
                      setTraceStep((s) =>
                        Math.min(s + 1, traceSteps.length),
                      );
                    }}
                    disabled={traceStep >= traceSteps.length}
                    className="rounded-sm border border-border bg-background px-3 py-1.5 font-medium text-foreground hover:border-foreground disabled:opacity-40"
                  >
                    Step
                  </button>
                  <button
                    type="button"
                    onClick={clearTrace}
                    className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    Clear
                  </button>
                </div>
              ) : null}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {CAPACITIES.map((c) => {
                const pos = traceCapacities.indexOf(c.slug);
                const isOn = pos >= 0;
                const style =
                  pos === 0
                    ? "border-foreground bg-foreground text-background"
                    : pos === 1
                      ? "border-foreground bg-background text-foreground [background-image:repeating-linear-gradient(135deg,transparent_0_6px,currentColor_6px_7px)]"
                      : "border-border bg-background text-foreground hover:border-foreground";
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => toggleCapacity(c.slug)}
                    className={`rounded-sm border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${style}`}
                    aria-pressed={isOn}
                  >
                    {isOn ? `Path ${pos + 1}: ${c.label}` : `Trace ${c.label}`}
                  </button>
                );
              })}
            </div>
            {tracingActive ? (
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <svg width="28" height="6" aria-hidden="true">
                    <line x1="0" y1="3" x2="28" y2="3" stroke="currentColor" strokeWidth={2.5} className="text-foreground" />
                  </svg>
                  Path 1 — solid
                </span>
                {traceCapacities.length > 1 ? (
                  <>
                    <span className="inline-flex items-center gap-2">
                      <svg width="28" height="6" aria-hidden="true">
                        <line x1="0" y1="3" x2="28" y2="3" stroke="currentColor" strokeWidth={2.5} strokeDasharray="4 3" className="text-foreground" />
                      </svg>
                      Path 2 — dashed
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <svg width="28" height="10" aria-hidden="true">
                        <line x1="0" y1="3" x2="28" y2="3" stroke="currentColor" strokeWidth={2} className="text-foreground" />
                        <line x1="0" y1="7" x2="28" y2="7" stroke="currentColor" strokeWidth={2} strokeDasharray="4 3" className="text-foreground" />
                      </svg>
                      Overlap — double
                    </span>
                  </>
                ) : null}
              </div>
            ) : null}
          </div>


          <div className="overflow-x-auto">

            <svg
              ref={svgRef}
              viewBox="0 0 800 680"
              className={`mx-auto block h-auto w-full max-w-4xl ${reduceMotion ? "motion-reduced" : ""}`}
              role="img"
              aria-label="Concept relationship diagram"
            >
              <g
                style={{
                  transform: focusTransform
                    ? `translate(${focusTransform.tx}px, ${focusTransform.ty}px) scale(${focusTransform.scale})`
                    : "translate(0px, 0px) scale(1)",
                  transformOrigin: "0 0",
                  transition: reduceMotion
                    ? "none"
                    : "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >

              {/* Halo behind the active or currently-traced edge */}
              {(() => {
                const haloIdx =
                  tracingActive ? currentTraceEdge : active;
                if (haloIdx === null || haloIdx === undefined) return null;
                const e = EDGES[haloIdx];
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
                if (tracingActive) {
                  const caps = edgeReveal.get(i) ?? [];
                  const isCurrent = currentTraceEdge === i;
                  if (caps.length === 0 && !isCurrent) {
                    return (
                      <line
                        key={`edge-${i}`}
                        x1={p1.x}
                        y1={p1.y}
                        x2={p2.x}
                        y2={p2.y}
                        stroke="currentColor"
                        strokeWidth={1}
                        strokeLinecap="round"
                        className="text-border transition-all"
                      />
                    );
                  }
                  const isOverlap = caps.length >= 2;
                  const showSolid = caps.includes(traceCapacities[0]);
                  const showDashed =
                    traceCapacities.length > 1 &&
                    caps.includes(traceCapacities[1]);
                  return (
                    <g key={`edge-${i}`} className="transition-all">
                      {showSolid ? (
                        <line
                          x1={p1.x}
                          y1={p1.y}
                          x2={p2.x}
                          y2={p2.y}
                          stroke="currentColor"
                          strokeWidth={isOverlap ? 2 : isCurrent ? 2.5 : 2}
                          strokeLinecap="round"
                          className={`text-foreground ${isCurrent && !showDashed ? "edge-active" : ""}`}
                        />
                      ) : null}
                      {showDashed ? (
                        <line
                          x1={p1.x}
                          y1={p1.y}
                          x2={p2.x}
                          y2={p2.y}
                          stroke="currentColor"
                          strokeWidth={isOverlap ? 2 : isCurrent ? 2.5 : 2}
                          strokeLinecap="round"
                          strokeDasharray="5 4"
                          className={`text-foreground ${isCurrent && !showSolid ? "edge-active" : ""}`}
                        />
                      ) : null}
                      {isOverlap ? (
                        <line
                          x1={p1.x}
                          y1={p1.y}
                          x2={p2.x}
                          y2={p2.y}
                          stroke="currentColor"
                          strokeWidth={7}
                          strokeLinecap="round"
                          className={`edge-halo pointer-events-none text-foreground/40 ${isCurrent ? "edge-active" : ""}`}
                        />
                      ) : null}
                    </g>
                  );
                }
                const isActive = active === i;
                const isDim = active !== null && !isActive;
                const cls = `cursor-pointer transition-all ${
                  isActive
                    ? "edge-active text-foreground"
                    : isDim
                      ? "text-border"
                      : "text-muted-foreground/50 hover:text-foreground"
                }`;
                const sw = isActive ? 2.5 : 1;
                return (
                  <line
                    key={`edge-${i}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke="currentColor"
                    strokeWidth={sw}
                    strokeLinecap="round"
                    className={cls}
                    onClick={() => setActive(active === i ? null : i)}
                  />
                );
              })}


              {EDGES.map((e, i) => {
                const p1 = positions.get(e.a)!;
                const p2 = positions.get(e.b)!;
                const nameA = positions.get(e.a)!.name;
                const nameB = positions.get(e.b)!.name;
                return (
                  <line
                    key={`hit-${i}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke="transparent"
                    strokeWidth={14}
                    className={tracingActive ? "" : "cursor-pointer"}
                    onClick={
                      tracingActive
                        ? undefined
                        : () => setActive(active === i ? null : i)
                    }
                  >
                    <title>{`${nameA} × ${nameB} — ${e.note} (click to see supporting works)`}</title>
                  </line>
                );
              })}


              {layout.map((p) => {
                let filled = false;
                let dimmed = false;
                if (tracingActive) {
                  filled = revealedNodes.has(p.slug);
                  dimmed = !filled;
                } else {
                  const isConnected = !!(
                    activeEdge &&
                    (activeEdge.a === p.slug || activeEdge.b === p.slug)
                  );
                  filled = isConnected;
                  dimmed = active !== null && !isConnected;
                }
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
                const concept = CONCEPTS.find((c) => c.slug === p.slug);
                const tip = concept
                  ? `${concept.name} — ${concept.tagline}`
                  : p.name;
                return (
                  <g
                    key={p.slug}
                    className={`transition-opacity ${dimmed ? "opacity-40" : ""}`}
                  >
                    <title>{tip}</title>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={9}
                      className={
                        filled
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
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={16}
                      fill="transparent"
                      className="cursor-help"
                    />
                  </g>
                );

              })}

              {/* Floating label at midpoint of the active or traced edge */}
              {(() => {
                const idx =
                  tracingActive ? currentTraceEdge : active;
                if (idx === null || idx === undefined) return null;
                const edge = EDGES[idx];
                const p1 = positions.get(edge.a)!;
                const p2 = positions.get(edge.b)!;
                const mx = (p1.x + p2.x) / 2;
                const my = (p1.y + p2.y) / 2;
                const label = tracingActive
                  ? currentTraceStep
                    ? `Path ${traceCapacities.indexOf(currentTraceStep.cap) + 1} · ${currentTraceStep.cap}`
                    : "Tracing"
                  : "Supporting relationship";

                const padX = 12;
                const charW = 6.2;
                const w = Math.round(label.length * charW) + padX * 2;
                const h = 26;
                return (
                  <g
                    key={`label-${idx}-${tracingActive ? "t" : "a"}`}
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
              </g>
            </svg>

          </div>

          <div className="mt-10 border-t border-border pt-8">
            {tracingActive ? (
              <TracePanel
                capacities={traceCapacities}
                orders={traceOrders}
                steps={traceSteps}
                step={traceStep}
                onJump={(i) => {
                  setTracePlaying(false);
                  setTraceStep(i);
                }}
                onClear={clearTrace}
                onRemoveCapacity={removeCapacity}

              />

            ) : activeEdge ? (
              <ActiveEdgePanel
                edge={activeEdge}
                onCopyLink={handleCopyLink}
                copied={copied}
                onClear={() => setActive(null)}
              />
            ) : (
              <div className="text-center text-sm text-muted-foreground">
                Select a line in the diagram — or a connection below — to reveal
                its supporting publications and a shareable link. Or trace a
                capacity to watch its path unfold.
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

function TracePanel({
  capacities,
  orders,
  steps,
  step,
  onJump,
  onClear,
  onRemoveCapacity,
}: {
  capacities: Capacity[];
  orders: Map<Capacity, number[]>;
  steps: { cap: Capacity; idx: number }[];
  step: number;
  onJump: (i: number) => void;
  onClear: () => void;
  onRemoveCapacity: (cap: Capacity) => void;
}) {
  const done = step >= steps.length;
  // Compute overlap edges: appear in every selected capacity's order.
  const overlap =
    capacities.length > 1
      ? (orders.get(capacities[0]) ?? []).filter((idx) =>
          capacities.slice(1).every((c) => (orders.get(c) ?? []).includes(idx)),
        )
      : [];

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Tracing {capacities.length > 1 ? "capacities" : "capacity"}
          </p>
          <ul className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
            {capacities.map((c, i) => {
              const label = CAPACITIES.find((cc) => cc.slug === c)?.label ?? c;
              return (
                <li
                  key={c}
                  className="inline-flex items-center gap-2 border border-border bg-secondary/40 py-1 pl-3 pr-1"
                >
                  <span className="font-display text-base text-foreground">
                    Path {i + 1}
                    <span className="mx-2 text-muted-foreground">·</span>
                    {label}
                  </span>
                  <button
                    type="button"
                    onClick={() => onRemoveCapacity(c)}
                    aria-label={`Remove Path ${i + 1} (${label})`}
                    className="ml-1 flex h-6 w-6 items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background"
                    title={`Remove Path ${i + 1}`}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                      <line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                      <line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="text-xs uppercase tracking-[0.15em] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          End trace
        </button>
      </div>


      {capacities.length > 0 ? (
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <svg width="28" height="10" viewBox="0 0 28 10" aria-hidden="true">
              <line x1="1" y1="5" x2="27" y2="5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-foreground" />
            </svg>
            <span>Path 1 — solid</span>
          </span>
          {capacities.length > 1 ? (
            <span className="inline-flex items-center gap-2">
              <svg width="28" height="10" viewBox="0 0 28 10" aria-hidden="true">
                <line x1="1" y1="5" x2="27" y2="5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeDasharray="5 4" className="text-foreground" />
              </svg>
              <span>Path 2 — dashed</span>
            </span>
          ) : null}
          {overlap.length > 0 ? (
            <span className="inline-flex items-center gap-2">
              <svg width="28" height="12" viewBox="0 0 28 12" aria-hidden="true">
                <line x1="1" y1="6" x2="27" y2="6" stroke="currentColor" strokeWidth={7} strokeLinecap="round" className="text-foreground/40" />
                <line x1="1" y1="6" x2="27" y2="6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="text-foreground" />
                <line x1="1" y1="6" x2="27" y2="6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeDasharray="5 4" className="text-foreground" />
              </svg>
              <span>Overlap — halo behind both strokes; edge cited by works from both capacities.</span>
            </span>
          ) : null}
        </div>
      ) : null}

      <p className="mt-3 text-sm text-muted-foreground">
        {steps.length === 0
          ? "No connections cite works tagged with the selected capacities yet."
          : done
            ? `Full paths revealed — ${steps.length} step${steps.length === 1 ? "" : "s"} across ${capacities.length} ${capacities.length === 1 ? "capacity" : "capacities"}.`
            : `Revealing step ${Math.min(step, steps.length)} of ${steps.length}.`}
      </p>


      {overlap.length > 0 ? (
        <div className="mt-6 border border-foreground/60 bg-secondary/40 p-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground">
            Overlap — {overlap.length} shared{" "}
            {overlap.length === 1 ? "connection" : "connections"}
          </p>
          <ul className="mt-3 space-y-2">
            {overlap.map((edgeIdx) => {
              const e = EDGES[edgeIdx];
              const a = CONCEPTS.find((c) => c.slug === e.a)?.name ?? e.a;
              const b = CONCEPTS.find((c) => c.slug === e.b)?.name ?? e.b;
              return (
                <li key={edgeIdx} className="text-sm">
                  <span className="font-display text-foreground">
                    {a} × {b}
                  </span>
                  <span className="text-muted-foreground"> — {e.note}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {steps.length > 0 ? (
        <ol className="mt-6 space-y-3">
          {steps.map(({ cap, idx: edgeIdx }, pos) => {
            const e = EDGES[edgeIdx];
            const a = CONCEPTS.find((c) => c.slug === e.a)?.name ?? e.a;
            const b = CONCEPTS.find((c) => c.slug === e.b)?.name ?? e.b;
            const revealed = pos < step;
            const current = pos === step - 1;
            const pathIndex = capacities.indexOf(cap);
            const isOverlap = overlap.includes(edgeIdx);
            return (
              <li key={`${pos}-${edgeIdx}`}>
                <button
                  type="button"
                  onClick={() => onJump(pos + 1)}
                  className={`w-full border-l-2 pl-4 text-left transition-colors ${
                    current
                      ? "border-foreground"
                      : revealed
                        ? "border-foreground/40 hover:border-foreground"
                        : "border-border opacity-50 hover:opacity-80"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    Step {pos + 1} · Path {pathIndex + 1} —{" "}
                    {CAPACITIES.find((c) => c.slug === cap)?.label ?? cap}
                    {isOverlap ? (
                      <span className="ml-2 rounded-sm border border-foreground/60 bg-background px-1.5 py-0.5 text-[10px] tracking-[0.15em] text-foreground">
                        Overlap
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1 font-display text-base text-foreground">
                    {a}
                    <span className="mx-2 text-muted-foreground">×</span>
                    {b}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.note}
                  </p>
                </button>
              </li>
            );
          })}
        </ol>
      ) : null}
    </div>

  );
}

