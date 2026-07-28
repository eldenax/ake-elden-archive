# Rebranding: from disciplines to a unified research programme

Reorganize the site so it reads as one philosopher working on a bounded set of problems — not as someone publishing across "AI ethics / theology / organization / health."

## New site order (top nav)

1. Home
2. Research Programme (main page)
3. Research Themes (the six problem areas)
4. Concepts
5. Publications
6. Projects
7. Academic Profile
8. News
9. Contact

## The six research themes (replace current groupings everywhere)

1. **Judgment, Answerability and Institutional Reason** — Standing Is Not an Ordering, The Locus of Answerability, Answerability on the Record, Second-Order Provenance, ClaimBuilder.ai; concepts: inferential license, judgment gap, institutional closure, provenance of normative orderings.
2. **Normativity, Moral Standing and Ethical Disclosure** — Standing Is Not an Ordering, When Responsibility Fails to Arise, The Diffuse Void, The Ontological Organization of Normativity, Predictive AI and Second-Personal Exclusion. (Floridi paper reframed as a general study of standing vs. ordering, with information ethics as maximal test case — not a "Floridi critique".)
3. **Formation, Agency and the Human Subject** — Creaturehood Under Conditions of Optimization, From Phronesis to Pronoia, The Gifted Subject, Action Without Acts, Algorithmic Habitus and the Invisible Mission, Algorithmic Formation and the Mimetic Self, Epistemic Automation and the Deformation of the Human. (Replaces "AI and theology".)
4. **Desire, Comparison and Social Relations** — Comparative Desire and Social Violence, The Platforming of Desire; concepts: comparative entitlement formation, post-mimetic relationality, infrastructural valuation, salience.
5. **Explanation, Object Constitution and Philosophy of Science** — Conceptual Inflation and Explanatory Entitlement, Mapping Epistemic Instability, Design–Inference Alignment, object constitution project, Markov-model ontology work, LLM experiments and inferential license.
6. **Institutions, Infrastructure and Technological Mediation** — AI as epistemic infrastructure, institutional inversion, systemic friction, organic API theory, administrative expertise as epistemic lag; applied projects TrialTact and ClaimBuilder.ai kept visually distinct as diagnostic contexts.

## Keep / Rewrite / Remove / Move

**Keep**
- Design system (Paper & Ink, Libre Baskerville + IBM Plex Sans, editorial layout).
- SEO/JSON-LD infra, sitemap/robots/CI checks.
- CV page, printable concept pages, footer with NLA + profiles.
- Existing concept infrastructure (`src/data/concepts.ts`, dynamic `/concepts/$slug`).

**Rewrite**
- Home hero + intro copy: drop "AI ethics, theology, organization, health" framing; use the new "coherent set of philosophical problems" language.
- Research Programme page: reorganize around the six themes; replace current three-programme grouping.
- Publications page: switch from journal-list framing to per-publication cards (title, journal, status, one-sentence contribution, theme tag, link to article, link to related concept).
- Concept index framing sentence to match the new theme structure.

**Remove**
- "AI governance" / "responsible AI" style category framings.
- "I work at the intersection of AI, ethics, theology and organization" and similar generic multi-domain phrasings.
- Presentation of the Floridi paper as a "Floridi critique".
- Discipline-labeled thematic sections on Working Papers ("Philosophy of Science / AI / Technology and Society") — merged into the six themes.

**Move**
- Working-papers entries reclassified under the six themes (no separate discipline sections).
- Applied tech (TrialTact, ClaimBuilder.ai) moved to a new **Projects** page, cross-linked from themes 1 and 6 as diagnostic contexts.
- "Recent work has examined" bullets on Publications folded into theme intros.

## New concept pages to add

`comparative-entitlement-formation`, `post-mimetic-relationality`, `partition-thesis`, `ethical-disclosure`, `judgment-gap`, `second-order-provenance`, `systemic-friction`. (Existing: inferential license, epistemic infrastructure — keep and align copy.)

## New copy anchors (used verbatim)

- Programme statement: *"My research is organized around a coherent set of philosophical problems concerning judgment, responsibility, explanation, institutional reason, normativity, and human formation. Different disciplines and technologies provide contexts in which these problems become visible and can be studied."*
- Positioning: *"I study the background conditions that make judgment, responsibility, explanation, and moral agency possible, and how technological and institutional systems reorganize or remove those conditions."*
- AI framing: *"Artificial intelligence is one important diagnostic context within my research. It reveals transformations in judgment, responsibility, explanation, institutional authority, and formation that are also relevant beyond AI."*

## File-level changes

- `src/routes/__root.tsx` — new nav order (add Themes, Projects, Academic Profile, News); footer unchanged.
- `src/routes/index.tsx` — new hero copy + six-theme grid replacing "Research Areas".
- `src/routes/research.tsx` — becomes Research Programme overview; link out to Themes.
- `src/routes/themes.tsx` + `src/routes/themes.$slug.tsx` (new) — one page per theme with description, works, concepts, projects.
- `src/data/themes.ts` (new) — source of truth: theme → works, concepts, projects.
- `src/data/publications.ts` (new) — per-publication records with theme + concept links.
- `src/routes/publications.tsx` — render per-publication cards grouped/filterable by theme.
- `src/routes/projects.tsx` (new) — TrialTact, ClaimBuilder.ai as diagnostic contexts.
- `src/routes/academic-profile.tsx` (new) — profiles list moved out of Publications.
- `src/routes/news.tsx` (new) — 2026 research output note + future updates.
- `src/routes/working-papers.tsx` — re-sort entries under the six themes (or fold into Themes and remove).
- `src/data/concepts.ts` — add seven new concepts; align existing copy.
- `src/routes/sitemap[.]xml.ts` — add all new routes (+ theme slugs).
- SEO head() on every new route; run `check:seo`, `check:sitemap`, `check:robots`.

## Open questions before I build

1. Keep `/working-papers` as a page (re-sorted under the six themes), or fold entirely into `/themes/$slug`?
2. For **News**: just the 2026 research-output paragraph you sent earlier, or a running list going forward?
3. Publications: do you have per-paper journal + status + one-sentence contribution data for me to use, or should I draft placeholders you'll edit?
4. Should each theme page live at `/themes/$slug` (new) or replace the current `/research` sub-structure?
