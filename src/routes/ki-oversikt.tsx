import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, Search, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { EXPERT_CATEGORIES, EXPERT_PEOPLE, METHOD_CAVEAT, filterExperts, profileSearchUrl } from "../data/ai-directory";
import { PUBLIC_PROFILE_LINKS } from "../data/ai-profile-links";

const TITLE = "100 AI Professionals in Norway — Editorial Directory | Åke Elden";
const DESCRIPTION = "Search 100 professionals across 15 AI-related fields. An editorial preliminary selection with methodological caveats, not a ranking or an approved expert register.";
const URL_SELF = "https://akeelden.com/ki-oversikt";
const INSTITUTIONS = [...new Set(EXPERT_PEOPLE.map((p) => p.institution))].sort((a, b) => a.localeCompare(b, "en"));
const SELECT_CLASS = "h-11 w-full min-w-0 rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

export const Route = createFileRoute("/ki-oversikt")({
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
  component: AiDirectory,
});

function AiDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [institution, setInstitution] = useState("");
  const people = filterExperts(query, category, institution);
  const hasFilters = Boolean(query || category || institution);

  return (
    <article lang="en" className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Editorial preliminary selection · 4 November 2026</p>
        <h1 className="mt-4 font-display text-3xl leading-tight tracking-normal text-foreground sm:text-4xl">100 AI Professionals in Norway</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">100 professionals, 15 fields. Research, technology, law, society and practical applications.</p>
        <div className="mt-8 border-l-2 border-foreground/40 pl-5">
          <h2 className="font-sans text-sm font-semibold tracking-normal">Disclaimer and methodological caveat</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{METHOD_CAVEAT}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Names, affiliations and expertise descriptions are reproduced from the submitted selection and have not been fully rechecked. A profile link does not confirm a current role, expert qualifications or consent. Inclusion does not imply endorsement by the people listed.</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">This directory is provided for general information only, not as a certification, recommendation or guarantee of expertise or suitability for a particular task. It is not exhaustive, and information may be incomplete or outdated. Please verify current affiliations and relevant qualifications directly before relying on an entry.</p>
          <a href="#metodeforbehold" className="mt-3 inline-block text-sm underline underline-offset-4">All caveats and sources ↓</a>
        </div>
      </header>

      <section aria-label="Search the directory" className="mt-10 border-y border-border py-6">
        <div className="grid items-end gap-4 md:grid-cols-[2fr_1.4fr_1fr]">
          <div>
            <label htmlFor="expert-search" className="mb-2 block text-sm font-medium">Search the list</label>
            <div className="relative">
              <Search aria-hidden="true" className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input id="expert-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Name, expertise or affiliation" className="h-11 pl-10" />
            </div>
          </div>
          <div>
            <label htmlFor="expert-category" className="mb-2 block text-sm font-medium">Field</label>
            <select id="expert-category" value={category} onChange={(e) => setCategory(e.target.value)} className={SELECT_CLASS}>
              <option value="">All 15 fields</option>
              {EXPERT_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="expert-institution" className="mb-2 block text-sm font-medium">Reported affiliation</label>
            <select id="expert-institution" value={institution} onChange={(e) => setInstitution(e.target.value)} className={SELECT_CLASS}>
              <option value="">All affiliations</option>
              {INSTITUTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 flex min-h-9 flex-wrap items-center justify-between gap-3">
          <p role="status" aria-live="polite" className="text-sm text-muted-foreground">{people.length} of {EXPERT_PEOPLE.length} entries</p>
          {hasFilters && <Button variant="ghost" size="sm" onClick={() => { setQuery(""); setCategory(""); setInstitution(""); }}><X className="h-4 w-4" />Reset</Button>}
        </div>
        <noscript><p className="mt-3 text-sm text-muted-foreground">Search requires JavaScript. The full list and all links are available below.</p></noscript>
      </section>

      <div className="mt-8">
        {people.length === 0 && <p className="py-10 text-muted-foreground">No entries match your search.</p>}
        {EXPERT_CATEGORIES.map((c) => {
          const group = people.filter((p) => p.category === c);
          if (!group.length) return null;
          return (
            <section key={c} className="mb-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-foreground/30 pb-4">
                <h2 className="font-display text-xl leading-snug tracking-normal text-foreground">{c}</h2>
                <span className="text-sm text-muted-foreground">{group.length} entries</span>
              </div>
              <ul className="divide-y divide-border">
                {group.map((person) => {
                  const profile = PUBLIC_PROFILE_LINKS.find((p) => p.id === person.id);
                  return (
                    <li key={person.id} className="grid gap-3 py-5 sm:grid-cols-[1.2fr_1.2fr_auto] sm:items-center sm:gap-6">
                      <div><h3 className="font-sans text-base font-semibold tracking-normal text-foreground">{person.name}</h3><p className="mt-1 text-sm text-muted-foreground">{person.institution}</p></div>
                      <p className="text-sm leading-relaxed text-foreground/85">{person.expertise}</p>
                      <a href={profile?.url ?? profileSearchUrl(person)} target="_blank" rel="noopener noreferrer" aria-label={`${profile ? "Open public profile for" : "Search for a public profile for"} ${person.name}`} className="inline-flex items-center gap-2 text-sm text-foreground underline decoration-dotted underline-offset-4 hover:text-muted-foreground">
                        {profile ? "Public profile" : "Search for profile"}<ExternalLink aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <section id="metodeforbehold" className="scroll-mt-24 border-t border-border pt-10">
        <div className="max-w-3xl space-y-8 text-sm leading-relaxed text-foreground/85">
          <div>
            <h2 className="font-display text-2xl tracking-normal text-foreground">About the AI professionals directory</h2>
            <p className="mt-3">This directory is an independent editorial initiative developed by Åke Elden. Its purpose is to highlight the breadth of Norwegian expertise in artificial intelligence, from technical research and implementation to ethics, philosophy, law, health, education and the social sciences.</p>
            <p className="mt-3">The selection draws on publicly available information about professional activities, publications and documented expertise. The list is not a ranking, and inclusion does not mean that the person has approved or endorsed the project.</p>
            <p className="mt-3">We aim to keep the information accurate and up to date. Reports of factual errors, updates or objections can be sent to the editor via <a href="/contact" className="underline underline-offset-4">the website’s contact page</a>.</p>
          </div>
          <h2 className="font-display text-2xl tracking-normal text-foreground">Sources and quality assurance</h2>
          <p>The categories are editorial. The safety category also includes researchers with expertise in related areas of cybersecurity, while the strategy and public-sector categories include people with implementation or policy expertise. This does not mean that all 100 have the same depth of expertise in technical AI research.</p>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">Reported source basis</h3>
            <p className="mt-3">The submitted text states that the selection is largely based on these organisations’ own published expert and researcher directories. The original source references do not include complete web addresses and do not provide documentation for each individual entry here.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>University of Bergen — interdisciplinary AI expertise in computer science, health, ethics and society.</li>
              <li>Visual Intelligence — machine learning, image analysis and explainable AI.</li>
              <li>University of Oslo, Department of Informatics — AI, robotics, responsible technology and information systems.</li>
              <li>UiT The Arctic University of Norway — machine learning, autonomy, language technology and regulation.</li>
              <li>Centre for Artificial Intelligence Research (CAIR), UiA — applied AI, intelligent systems and robotics.</li>
              <li>SINTEF — industrial AI, machine learning and technology applications.</li>
              <li>Simula — AI, data science, health technology and cybersecurity.</li>
              <li>TRUST – Norwegian Centre for Trustworthy AI — AI regulation, accountability and interdisciplinary research.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">Before this can become a national expert register</h3>
            <p className="mt-3">Before this directory is presented as “Norway’s 100 AI experts”, it should undergo three checks: current institutional affiliation, specific documentation of each person’s AI expertise, and consent to publication of profiles and contact information. The submitted text refers to the Danish “AI expert list” by Jonathan Løw and states that it obtained approval from its listed experts. Equivalent approval has not been documented for this list.</p>
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">A field is not the same as a type of expertise</h3>
            <p className="mt-3">The submitted text recommends showing types of expertise separately. The following distinction is retained as a proposal, not as validated labels for individuals:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>F – Scientific research and publications</li>
              <li>T – Technical development and implementation</li>
              <li>S – Strategy, governance and organisational leadership</li>
              <li>J – Legal, ethical and social-scientific analysis</li>
            </ul>
            <p className="mt-4">This would make the list more precise and reduce the risk of confusing media visibility or organisational positions with documented professional expertise.</p>
          </div>
          <p>An important next step is to establish individual profiles with links to ORCID, NVA, Google Scholar or institutional pages, together with a brief, verifiable basis for inclusion. This could allow a preliminary selection to develop into an actual national expert register.</p>
          <p className="text-muted-foreground">“Public profile” links to a located individual professional profile. “Search for profile” is a name-based web search, not a confirmed profile address. No private contact details have been added.</p>
        </div>
      </section>
    </article>
  );
}