import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, Search, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { EXPERT_CATEGORIES, EXPERT_PEOPLE, METHOD_CAVEAT, filterExperts, profileSearchUrl } from "../data/ai-directory";
import { PUBLIC_PROFILE_LINKS } from "../data/ai-profile-links";

const TITLE = "AI Expertise in Norway — Research, Practice and Society | Åke Elden";
const DESCRIPTION = `Search ${EXPERT_PEOPLE.length} professionals across ${EXPERT_CATEGORIES.length} AI-related fields, in Norway and with Norwegian connections. An editorial selection with caveats, not a ranking or an approved expert register.`;
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
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Editorial directory · Updated 7 November 2026</p>
        <h1 className="mt-4 font-display text-3xl leading-tight tracking-normal text-foreground sm:text-4xl">AI Expertise in Norway</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{EXPERT_PEOPLE.length} professionals across {EXPERT_CATEGORIES.length} fields. Research, practice and society — in Norway and with Norwegian connections.</p>
        <Button asChild variant="link" className="mt-3 h-auto p-0 text-sm text-muted-foreground"><Link to="/editor-ai">Editorial research</Link></Button>
        <div className="mt-8 border-l-2 border-foreground/40 pl-5">
          <h2 className="font-sans text-sm font-semibold tracking-normal">Disclaimer and methodological caveat</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{METHOD_CAVEAT}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The directory combines an initial submitted selection with additions drawn from public professional sources. Not all entries have been fully rechecked. A profile link does not confirm a current role, expert qualifications or consent. Inclusion does not imply endorsement by the people listed.</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">This directory is provided for general information only, not as a certification, recommendation or guarantee of expertise or suitability for a particular task. It is not exhaustive, and information may be incomplete or outdated. Please verify current affiliations and relevant qualifications directly before relying on an entry.</p>
          <a href="#expert-criteria" className="mt-3 inline-block text-sm underline underline-offset-4">Expert criteria ↓</a>
          <a href="#metodeforbehold" className="ml-4 mt-3 inline-block text-sm underline underline-offset-4">All caveats and sources ↓</a>
        </div>
      </header>

      <section id="expert-criteria" aria-labelledby="expert-criteria-title" className="mt-10 max-w-3xl scroll-mt-24 border-t border-border pt-6">
        <h2 id="expert-criteria-title" className="font-display text-2xl tracking-normal text-foreground">What counts as AI expertise here?</h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground/85">An expert has demonstrable, field-specific knowledge or practical competence relevant to artificial intelligence. Expertise may be technical, scientific, legal, ethical, educational, theological or organisational; it is not a claim of competence in every area of AI.</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/85">The following editorial criteria guide review of existing entries and new nominations:</p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground/85">
          <li><strong>Documented AI relevance.</strong> Public evidence must connect the person’s work directly to AI, its development, application, governance or societal consequences. A neighbouring discipline alone is not enough.</li>
          <li><strong>Substantive contribution.</strong> Evidence should show relevant research publications, technical systems or implementations, professional practice, policy or standards work, or sustained legal, ethical or educational analysis of AI.</li>
          <li><strong>Verifiable evidence.</strong> Sources should identify the individual and their contribution, such as institutional profiles, publications or documented projects. A job title, LinkedIn profile, media visibility or self-description alone does not establish expertise.</li>
          <li><strong>Clear scope and current information.</strong> Each review should identify the specific area of expertise, check the reported affiliation and distinguish current activity from earlier contributions.</li>
          <li><strong>Equal treatment.</strong> The same evidence standard applies to all entries, including the editor. Seniority, popularity and personal connections are not substitutes for documented competence.</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">These are review criteria, not a certification already awarded to everyone listed. Individual evidence reviews are not yet complete. People working in adjacent fields should be understood as AI-related professionals unless their specific AI expertise is documented.</p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/85">To nominate someone or suggest a correction, use <a href="/contact" className="underline underline-offset-4">the contact page</a>. Please include their name, relevant field and public sources documenting their work. Nominations are reviewed against the same criteria and do not guarantee inclusion.</p>
      </section>

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
              <option value="">All {EXPERT_CATEGORIES.length} fields</option>
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
                      <div className="flex flex-col items-start gap-3">
                      <a href={profile?.url ?? profileSearchUrl(person)} target="_blank" rel="noopener noreferrer" aria-label={`${profile?.kind === "source" ? "Open public source for" : profile ? "Open public profile for" : "Search for a public profile for"} ${person.name}`} className="inline-flex items-center gap-2 text-sm text-foreground underline decoration-dotted underline-offset-4 hover:text-muted-foreground">
                        {profile?.kind === "source" ? "Public source" : profile ? "Public profile" : "Search for profile"}<ExternalLink aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                      </a>
                      {profile?.evidenceUrl && <a href={profile.evidenceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open AI evidence for ${person.name}`} className="inline-flex items-center gap-2 text-sm text-foreground underline decoration-dotted underline-offset-4 hover:text-muted-foreground">AI evidence<ExternalLink aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /></a>}
                      </div>
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
            <p className="mt-3">This directory is an independent editorial initiative developed by Åke Elden. Its purpose is to highlight the breadth of Norwegian expertise in artificial intelligence, from technical research and implementation to ethics, philosophy, theology and religion, law, health, education and the social sciences.</p>
            <p className="mt-3">The selection draws on publicly available information about professional activities, publications and documented expertise. The list is not a ranking, and inclusion does not mean that the person has approved or endorsed the project.</p>
            <p className="mt-3">We aim to keep the information accurate and up to date. Reports of factual errors, updates or objections can be sent to the editor via <a href="/contact" className="underline underline-offset-4">the website’s contact page</a>.</p>
          </div>
          <h2 className="font-display text-2xl tracking-normal text-foreground">Sources and quality assurance</h2>
          <p>The categories are editorial. The safety category also includes researchers with expertise in related areas of cybersecurity, while the strategy and public-sector categories include people with implementation or policy expertise. The entries do not all represent the same depth of expertise in technical AI research. Norwegian connections may include nationality or research collaboration; inclusion does not necessarily mean a person is currently based in Norway.</p>
          <p>The AI and theology/religion field covers documented work on AI in relation to theological anthropology, religious belief and practice, ethics, and religious education. It does not imply technical AI expertise. A background in theology or religious studies alone is not sufficient for inclusion in this field; related expertise without documented AI work is identified separately.</p>
          <p>The working-life, finance, defence, climate, mental-health, smaller-language and art/music fields identify specific applications or consequences of AI, not interchangeable qualifications. Defence-policy analysis is distinct from cybersecurity engineering; mental-health AI research does not imply clinical qualifications or validated therapy; language technology includes both neural and rule-based approaches. Entries describe the documented contribution rather than competence across the entire field.</p>
          <p>The AI and sport field covers documented machine-learning, computer-vision and data-analysis contributions to sport. Inclusion does not imply clinical qualifications, validated injury prediction, guaranteed performance improvements or endorsement by athletes or sporting organisations.</p>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">Reported source basis</h3>
            <p className="mt-3">The initial selection draws largely on the organisations listed below and their published expert and researcher directories. Complete source addresses and individual evidence records are not yet available for every entry.</p>
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
            <h3 className="font-sans text-base font-semibold tracking-normal">Verification status</h3>
            <p className="mt-3">This is not a validated national expert register. Full validation requires checks of current institutional affiliation, specific evidence of each person’s AI expertise, and consent to publication of profiles and contact information. These checks have not been completed for every entry, and approval by the people listed has not been documented.</p>
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">A field is not the same as a type of expertise</h3>
            <p className="mt-3">AI-related expertise takes several forms. These distinctions help readers understand its scope; they are not yet individually verified labels attached to each person:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>F – Scientific research and publications</li>
              <li>T – Technical development and implementation</li>
              <li>S – Strategy, governance and organisational leadership</li>
              <li>J – Legal, ethical and social-scientific analysis</li>
            </ul>
            <p className="mt-4">Media visibility and organisational positions are not, on their own, evidence of expertise in any of these areas.</p>
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">Review, nominations and corrections</h3>
            <p className="mt-3">Individual profile review is a priority. Some entries represent adjacent disciplines, and the available evidence does not establish an equally clear AI specialisation for everyone listed. Readers should take this limitation into account when using the directory.</p>
            <p className="mt-3">Nominations, factual corrections, updated sources and objections are welcome via <a href="/contact" className="underline underline-offset-4">the contact page</a>. Evidence-based review helps broaden the selection and makes editorial decisions open to scrutiny.</p>
            <p className="mt-3">Profile links in the initial selection were checked on 4 November 2026; sources for the latest additions were reviewed on 7 November 2026. These are source-review dates, not confirmation that every person’s expertise or affiliation has been fully verified.</p>
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">Editorial transparency</h3>
            <p className="mt-3">Åke Elden develops and edits this directory and is also included in it. His entry is subject to the same evidence and review criteria as every other entry. Inclusion is an editorial decision, not an independent accreditation or an endorsement by the people listed.</p>
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">Conclusion</h3>
            <p className="mt-3">The directory is a standing part of akeelden.com and will be kept and developed further. The aim is for it to grow, over time, into a national reference resource for Norwegian expertise in artificial intelligence.</p>
            <p className="mt-3">That role is earned, not assumed: it depends on the individual quality assurance, openness to nominations and corrections, and regular updates described above. Until those steps are completed, this page should be read as an editorial preliminary selection.</p>
            <p className="mt-3">The project also touches one of the site’s own research themes in practice: who is granted epistemic authority, on what grounds, and who decides who is counted as an expert?</p>
          </div>
        </div>
      </section>
    </article>
  );
}