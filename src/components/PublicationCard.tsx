import { Link } from "@tanstack/react-router";
import type { Capacity, Publication } from "../data/publications";
import { getTheme } from "../data/themes";
import { getConcept } from "../data/concepts";
import { edgesForPublication, pairKey } from "../data/concept-edges";

export const CAPACITY_LABEL: Record<Capacity, string> = {
  presupposed: "Presupposed",
  transformed: "Transformed",
  concealed: "Concealed",
};

export const CAPACITY_DESCRIPTION: Record<Capacity, string> = {
  presupposed:
    "Capacities that must already be in place for institutions and technologies to function: judgment, moral standing, responsibility, object constitution, answerability.",
  transformed:
    "Capacities that are reshaped when delegated to technological and institutional systems: practical wisdom, desire, creaturehood, friction, infrastructure.",
  concealed:
    "Capacities that are obscured, evacuated, or rendered unaddressable by automated systems: agency, exclusion, epistemic lag, invisible missions.",
};

export function PublicationCard({ p }: { p: Publication }) {
  const theme = getTheme(p.themeSlug);
  const concept = p.conceptSlug ? getConcept(p.conceptSlug) : undefined;
  const edges = edgesForPublication(p.title);
  return (
    <article className="border-t border-border pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-display text-lg leading-snug text-foreground md:text-xl">
          {p.title}
        </h3>
        <span className="flex flex-wrap items-center gap-2">
          {p.level && (
            <span className="inline-flex items-center rounded-sm border border-border bg-background px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Level {p.level}
            </span>
          )}
          <span className="inline-flex items-center rounded-sm border border-border bg-background px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {p.status}
          </span>
        </span>
      </div>

      <p className="mt-4 text-base leading-relaxed text-foreground/85">
        {p.contribution}
      </p>
      {p.caseNote && (
        <p className="mt-3 text-sm leading-relaxed text-foreground/75">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Case ·{" "}
          </span>
          {p.caseNote}
        </p>
      )}

      {p.paperSlug && (
        <p className="mt-4">
          <Link
            to="/papers/$slug"
            params={{ slug: p.paperSlug }}
            className="text-sm underline decoration-dotted underline-offset-4 text-foreground/85 hover:text-foreground"
          >
            Read the abstract & argument →
          </Link>
        </p>
      )}

      <dl className="mt-5 grid grid-cols-1 gap-y-2 text-sm sm:grid-cols-[8rem_1fr]">
        <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {p.doi || p.href ? "Journal" : "Status"}
        </dt>
        <dd className="text-foreground/85">
          {p.venue}
          {p.year ? ` · ${p.year}` : ""}
          {p.doi || p.href ? (
            <>
              {" · "}
              <a
                href={p.href ?? `https://doi.org/${p.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-4 hover:text-foreground"
              >
                {p.doi ? "DOI" : "Publisher"}
              </a>
            </>
          ) : null}
        </dd>

        {concept && (
          <>
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Concepts introduced
            </dt>
            <dd>
              <Link
                to="/concepts/$slug"
                params={{ slug: concept.slug }}
                className="underline decoration-dotted underline-offset-4 text-foreground/85 hover:text-foreground"
              >
                {concept.name}
              </Link>
            </dd>
          </>
        )}

        {theme && (
          <>
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Related theme
            </dt>
            <dd>
              <Link
                to="/inquiry/$slug"
                params={{ slug: theme.slug }}
                className="underline decoration-dotted underline-offset-4 text-foreground/85 hover:text-foreground"
              >
                {theme.short}
              </Link>
            </dd>
          </>
        )}

        {p.capacities && p.capacities.length > 0 && (
          <>
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Capacities
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {p.capacities.map((c) => (
                  <li key={c}>
                    <Link
                      to="/publications"
                      search={{ capacity: c }}
                      className="inline-flex items-center rounded-sm border border-border bg-background px-2 py-0.5 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      {CAPACITY_LABEL[c]}
                    </Link>
                  </li>
                ))}
              </ul>
            </dd>
          </>
        )}

        {edges.length > 0 && (
          <>
            <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Supporting connections
            </dt>
            <dd>
              <ul className="space-y-1.5">
                {edges.map((e) => {
                  const a = getConcept(e.a);
                  const b = getConcept(e.b);
                  if (!a || !b) return null;
                  const key = pairKey(e.a, e.b);
                  return (
                    <li key={key} className="leading-snug">
                      <Link
                        to="/concept-graph"
                        search={{ pair: key }}
                        hash={`pair-${key}`}
                        className="underline decoration-dotted underline-offset-4 text-foreground/85 hover:text-foreground"
                      >
                        {a.name}
                        <span className="mx-1.5 text-muted-foreground">×</span>
                        {b.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </dd>
          </>
        )}
      </dl>
    </article>
  );
}
