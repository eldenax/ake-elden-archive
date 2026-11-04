import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink, Search, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { EXPERT_CATEGORIES, EXPERT_PEOPLE, METHOD_CAVEAT, filterExperts, profileSearchUrl } from "../data/ai-directory";
import { PUBLIC_PROFILE_LINKS } from "../data/ai-profile-links";

const TITLE = "100 KI-fagpersoner i Norge — redaksjonell oversikt | Åke Elden";
const DESCRIPTION = "Søk blant 100 fagpersoner i 15 KI-relaterte fagkategorier. Et redaksjonelt bruttoutvalg med metodeforbehold, ikke en rangering eller et godkjent ekspertregister.";
const URL_SELF = "https://akeelden.com/ki-oversikt";
const INSTITUTIONS = [...new Set(EXPERT_PEOPLE.map((p) => p.institution))].sort((a, b) => a.localeCompare(b, "nb"));
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
    <article lang="nb" className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Redaksjonelt bruttoutvalg · 4. november 2026</p>
        <h1 className="mt-4 font-display text-3xl leading-tight tracking-normal text-foreground sm:text-4xl">100 KI-fagpersoner i Norge</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">100 fagpersoner, 15 fagkategorier. Forskning, teknologi, jus, samfunn og praktisk anvendelse.</p>
        <div className="mt-8 border-l-2 border-foreground/40 pl-5">
          <h2 className="font-sans text-sm font-semibold tracking-normal">Viktig metodeforbehold</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{METHOD_CAVEAT.replace("Viktig metodeforbehold: ", "")}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Navn, tilknytning og fagbeskrivelser er gjengitt fra det innsendte utvalget, ikke fullstendig kontrollert på nytt. En profillenke bekrefter ikke nåværende rolle, ekspertkvalifikasjoner eller samtykke. Oppføringene innebærer ingen tilslutning fra personene.</p>
          <a href="#metodeforbehold" className="mt-3 inline-block text-sm underline underline-offset-4">Alle forbehold og kildegrunnlag ↓</a>
        </div>
      </header>

      <section aria-label="Søk i oversikten" className="mt-10 border-y border-border py-6">
        <div className="grid items-end gap-4 md:grid-cols-[2fr_1.4fr_1fr]">
          <div>
            <label htmlFor="expert-search" className="mb-2 block text-sm font-medium">Søk i listen</label>
            <div className="relative">
              <Search aria-hidden="true" className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input id="expert-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Navn, fagområde eller tilknytning" className="h-11 pl-10" />
            </div>
          </div>
          <div>
            <label htmlFor="expert-category" className="mb-2 block text-sm font-medium">Fagkategori</label>
            <select id="expert-category" value={category} onChange={(e) => setCategory(e.target.value)} className={SELECT_CLASS}>
              <option value="">Alle 15 fagkategorier</option>
              {EXPERT_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="expert-institution" className="mb-2 block text-sm font-medium">Oppgitt tilknytning</label>
            <select id="expert-institution" value={institution} onChange={(e) => setInstitution(e.target.value)} className={SELECT_CLASS}>
              <option value="">Alle tilknytninger</option>
              {INSTITUTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 flex min-h-9 flex-wrap items-center justify-between gap-3">
          <p role="status" aria-live="polite" className="text-sm text-muted-foreground">{people.length} av {EXPERT_PEOPLE.length} oppføringer</p>
          {hasFilters && <Button variant="ghost" size="sm" onClick={() => { setQuery(""); setCategory(""); setInstitution(""); }}><X className="h-4 w-4" />Nullstill</Button>}
        </div>
        <noscript><p className="mt-3 text-sm text-muted-foreground">Søk krever JavaScript. Hele listen og alle lenkene er tilgjengelige nedenfor.</p></noscript>
      </section>

      <div className="mt-8">
        {people.length === 0 && <p className="py-10 text-muted-foreground">Ingen oppføringer samsvarer med søket.</p>}
        {EXPERT_CATEGORIES.map((c) => {
          const group = people.filter((p) => p.category === c);
          if (!group.length) return null;
          return (
            <section key={c} className="mb-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-foreground/30 pb-4">
                <h2 className="font-display text-xl leading-snug tracking-normal text-foreground">{c}</h2>
                <span className="text-sm text-muted-foreground">{group.length} oppføringer</span>
              </div>
              <ul className="divide-y divide-border">
                {group.map((person) => {
                  const profile = PUBLIC_PROFILE_LINKS.find((p) => p.id === person.id);
                  return (
                    <li key={person.id} className="grid gap-3 py-5 sm:grid-cols-[1.2fr_1.2fr_auto] sm:items-center sm:gap-6">
                      <div><h3 className="font-sans text-base font-semibold tracking-normal text-foreground">{person.name}</h3><p className="mt-1 text-sm text-muted-foreground">{person.institution}</p></div>
                      <p className="text-sm leading-relaxed text-foreground/85">{person.expertise}</p>
                      <a href={profile?.url ?? profileSearchUrl(person)} target="_blank" rel="noopener noreferrer" aria-label={`${profile ? "Åpne offentlig profil for" : "Søk etter offentlig profil for"} ${person.name}`} className="inline-flex items-center gap-2 text-sm text-foreground underline decoration-dotted underline-offset-4 hover:text-muted-foreground">
                        {profile ? "Offentlig profil" : "Søk etter profil"}<ExternalLink aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
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
          <h2 className="font-display text-2xl tracking-normal text-foreground">Kildegrunnlag og kvalitetssikring</h2>
          <p>Kategoriseringen er redaksjonell. I særlig sikkerhetskategorien inngår også forskere med ekspertise i tilgrensende cybersikkerhet, og i strategi- og offentlig-sektor-kategoriene inngår personer med implementerings- eller policykompetanse. Det innebærer ikke at alle 100 har samme dybde i teknisk KI-forskning.</p>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">Oppgitt kildegrunnlag</h3>
            <p className="mt-3">Innsendt tekst oppgir at utvalget i hovedsak er forankret i disse fagmiljøenes egne publiserte ekspert- og forskeroversikter. De opprinnelige kildereferansene inneholder ikke fullstendige nettadresser og utgjør ikke dokumentasjon for hver enkelt oppføring her.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Universitetet i Bergen — tverrfaglige KI-eksperter innen informatikk, helse, etikk og samfunn.</li>
              <li>Visual Intelligence — maskinlæring, bildeanalyse og forklarbar KI.</li>
              <li>Universitetet i Oslo, Institutt for informatikk — KI, robotikk, ansvarlig teknologi og informasjonssystemer.</li>
              <li>UiT Norges arktiske universitet — maskinlæring, autonomi, språkteknologi og regulering.</li>
              <li>Centre for Artificial Intelligence Research (CAIR), UiA — anvendt KI, intelligente systemer og robotikk.</li>
              <li>SINTEF — industriell KI, maskinlæring og teknologianvendelse.</li>
              <li>Simula — KI, datavitenskap, helseteknologi og cybersikkerhet.</li>
              <li>TRUST – Norwegian Centre for Trustworthy AI — KI-regulering, ansvarlighet og tverrfaglig forskning.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">Før dette kan bli et nasjonalt ekspertregister</h3>
            <p className="mt-3">Før denne oversikten publiseres som «Norges 100 KI-eksperter», bør den gjennomgå tre kontroller: oppdatert institusjonstilknytning, konkret dokumentasjon av hver persons KI-kompetanse og samtykke til publisering av profiler og kontaktinformasjon. Innsendt tekst viser til den danske «AI-ekspertlisten» av Jonathan Løw og oppgir at den har innhentet godkjenning fra de oppførte ekspertene. Tilsvarende godkjenning er ikke dokumentert for denne listen.</p>
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold tracking-normal">Fagkategori er ikke det samme som type ekspertise</h3>
            <p className="mt-3">Innsendt tekst anbefaler å vise type ekspertise separat. Følgende skille er bevart som et forslag, ikke som validerte merkelapper for personene:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>F – Vitenskapelig forskning og publikasjoner</li>
              <li>T – Teknisk utvikling og implementering</li>
              <li>S – Strategi, styring og organisasjonsledelse</li>
              <li>J – Juridisk, etisk og samfunnsvitenskapelig analyse</li>
            </ul>
            <p className="mt-4">Dette vil gjøre listen mer presis og redusere risikoen for at mediesynlighet eller organisatoriske stillinger forveksles med dokumentert faglig ekspertise.</p>
          </div>
          <p>Et viktig neste steg er å etablere personprofiler med lenker til ORCID, NVA, Google Scholar eller institusjonssider og et kort, etterprøvbart grunnlag for inkludering. Da kan dette utvikles fra et bruttoutvalg til et faktisk nasjonalt ekspertregister.</p>
          <p className="text-muted-foreground">«Offentlig profil» viser til en funnet personlig fagprofil. «Søk etter profil» er et navnebasert nettsøk, ikke en bekreftet profiladresse. Ingen private kontaktopplysninger er lagt til.</p>
        </div>
      </section>
    </article>
  );
}