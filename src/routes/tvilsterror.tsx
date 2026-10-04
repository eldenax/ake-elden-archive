import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CORE_INSIGHT, INTRO, PATTERNS, SCENARIOS, type OptionKey } from "../data/tvilsterror";

const TITLE = "Tvilsterror — en test i reell dømmekraft | Dr. Åke Elden";
const DESCRIPTION =
  "Tvilsterror: ti scenarioer der svaralternativene selv er feller. En norskspråklig test i reell dømmekraft og kognitiv motstandskraft mot tvilsterror og realitetsmanipulasjon.";
const URL_SELF = "https://ake-elden-archive.lovable.app/tvilsterror";

export const Route = createFileRoute("/tvilsterror")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_SELF },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL_SELF }],
  }),
  component: TvilsterrorPage,
});

/** "R" = the participant rejected the framing instead of picking A, B or C. */
type Answer = OptionKey | "R";

const LINK_CLASS = "underline decoration-dotted underline-offset-4 hover:text-foreground";

function TvilsterrorPage() {
  // Answers live only in component state: nothing is stored or transmitted.
  const [answers, setAnswers] = useState<(Answer | null)[]>(() => SCENARIOS.map(() => null));
  const [step, setStep] = useState<"intro" | number | "result">("intro");

  const answered = answers.filter((a) => a !== null).length;

  // Bring the next scenario into view instead of leaving the reader mid-page.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0 });
  }, [step]);

  const choose = (index: number, a: Answer) =>
    setAnswers((prev) => prev.map((v, i) => (i === index ? a : v)));

  const restart = () => {
    setAnswers(SCENARIOS.map(() => null));
    setStep("intro");
  };

  return (
    <article lang="nb">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Test i reell dømmekraft og kognitiv motstandskraft
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
            Tvilsterror
          </h1>
          <p className="mt-8 font-display text-lg italic leading-relaxed text-foreground/80">
            Ti situasjoner. Tre alternativer i hver. Spørsmålet er ikke bare hva du ville gjort, men
            hva alternativene gjør med deg.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        {step === "intro" && <Intro onStart={() => setStep(0)} />}

        {typeof step === "number" && (
          <ScenarioStep
            index={step}
            answer={answers[step]}
            answered={answered}
            onChoose={(a) => choose(step, a)}
            onBack={() => setStep(step === 0 ? "intro" : step - 1)}
            onNext={() => setStep(step === SCENARIOS.length - 1 ? "result" : step + 1)}
          />
        )}

        {step === "result" && (
          <Result answers={answers} onRestart={restart} onGoTo={(i) => setStep(i)} />
        )}

        <Privacy />
      </div>
    </article>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <section>
      <h2 className="font-display text-2xl leading-snug text-foreground">Innledning</h2>
      {INTRO.map((p, i) => (
        <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Etter hvert valg får du se hvordan alternativene er konstruert, og hva det vil si å bevare
        dømmekraften i situasjonen. Testen tar omtrent ti minutter.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Dette er en refleksjonsøvelse, ikke et psykologisk måleinstrument. Svarene dine lagres ikke
        og sendes ikke noe sted (se{" "}
        <a href="#personvern" className={LINK_CLASS}>
          personvern
        </a>
        ).
      </p>
      <button
        type="button"
        onClick={onStart}
        className="mt-10 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Start testen
      </button>
    </section>
  );
}

function ScenarioStep({
  index,
  answer,
  answered,
  onChoose,
  onBack,
  onNext,
}: {
  index: number;
  answer: Answer | null;
  answered: number;
  onChoose: (a: Answer) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const s = SCENARIOS[index];
  const isLast = index === SCENARIOS.length - 1;

  return (
    <section aria-labelledby={`scenario-${s.id}`}>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Scenario {index + 1} av {SCENARIOS.length}
        </span>
        <span>{answered} besvart</span>
      </div>
      <div
        className="mt-2 h-1 w-full overflow-hidden rounded bg-muted"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={SCENARIOS.length}
        aria-valuenow={index + 1}
      >
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${((index + 1) / SCENARIOS.length) * 100}%` }}
        />
      </div>

      <h2
        id={`scenario-${s.id}`}
        className="mt-10 font-display text-2xl leading-snug text-foreground"
      >
        {index + 1}. {s.title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.scenario}</p>

      <fieldset className="mt-8 space-y-3" disabled={answer !== null}>
        <legend className="sr-only">Velg et alternativ</legend>
        {s.options.map((o) => {
          const selected = answer === o.key;
          return (
            <button
              key={o.key}
              type="button"
              onClick={() => onChoose(o.key)}
              aria-pressed={selected}
              className={`flex w-full gap-4 rounded-md border p-4 text-left text-sm leading-relaxed transition-colors ${
                selected
                  ? "border-foreground bg-muted"
                  : "border-border hover:border-foreground/40 hover:bg-muted/40 disabled:hover:border-border disabled:hover:bg-transparent"
              }`}
            >
              <span className="font-display text-base text-foreground">{o.key})</span>
              <span className="text-foreground/85">{o.text}</span>
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => onChoose("R")}
          aria-pressed={answer === "R"}
          className={`w-full rounded-md border border-dashed p-3 text-left text-xs transition-colors ${
            answer === "R"
              ? "border-foreground bg-muted text-foreground"
              : "border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          Ingen av alternativene holder – jeg avviser rammen.
        </button>
      </fieldset>

      {answer !== null && <Reveal index={index} answer={answer} />}

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Tilbake
        </button>
        {answer !== null && (
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {isLast ? "Se resultatet" : "Neste scenario"}
          </button>
        )}
      </div>
    </section>
  );
}

function Reveal({ index, answer }: { index: number; answer: Answer }) {
  const s = SCENARIOS[index];
  const chosen = s.options.find((o) => o.key === answer);

  return (
    <div className="mt-8 rounded-md border border-border bg-muted/30 p-6" aria-live="polite">
      {chosen ? (
        <p className="font-display text-lg leading-relaxed text-foreground">
          Du valgte {chosen.key}: {chosen.trap.label}. {chosen.trap.text}
        </p>
      ) : (
        <p className="font-display text-lg leading-relaxed text-foreground">
          Du avviste rammen. Alle tre alternativene er konstruert som feller.
        </p>
      )}

      <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Hvorfor alternativene er manipulering
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {s.options.map((o) => (
          <li key={o.key}>
            <span className="font-medium text-foreground">
              {o.key} – {o.trap.label}:
            </span>{" "}
            {o.trap.text}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Forklaring
      </p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/85">{s.explanation}</p>
    </div>
  );
}

function Result({
  answers,
  onRestart,
  onGoTo,
}: {
  answers: (Answer | null)[];
  onRestart: () => void;
  onGoTo: (index: number) => void;
}) {
  const count = (a: Answer) => answers.filter((x) => x === a).length;
  const rejected = count("R");
  const traps = (["A", "B", "C"] as const)
    .map((k) => ({ key: k, n: count(k) }))
    .filter((t) => t.n > 0)
    .sort((x, y) => y.n - x.n);
  const dominant = traps[0];

  return (
    <section>
      <h2 className="font-display text-2xl leading-snug text-foreground">Resultat</h2>
      <p className="mt-4 font-display text-lg leading-relaxed text-foreground">
        Du avviste rammen i {rejected} av {SCENARIOS.length} scenarioer.
      </p>

      {dominant && (
        <>
          <ul className="mt-6 space-y-1 text-sm text-muted-foreground">
            {traps.map((t) => (
              <li key={t.key}>
                {t.key} – {PATTERNS[t.key].label}: {t.n}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">
              Ditt hyppigste mønster: {PATTERNS[dominant.key].label}.
            </span>{" "}
            {PATTERNS[dominant.key].text}
          </p>
        </>
      )}

      <div className="mt-10 rounded-md border border-border bg-muted/30 p-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Kjerneinnsikt
        </p>
        <p className="mt-3 font-display text-lg leading-relaxed text-foreground">{CORE_INSIGHT}</p>
      </div>

      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
        Å avvise rammen er ikke i seg selv et fasitsvar. Poenget er å se at de oppstilte valgene
        ikke uttømmer mulighetene – og å kunne begrunne hva et bedre svar ville kreve. Gå tilbake
        til et scenario for å lese forklaringen på nytt:
      </p>
      <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-foreground/80">
        {SCENARIOS.map((s, i) => (
          <li key={s.id}>
            <button type="button" onClick={() => onGoTo(i)} className={LINK_CLASS}>
              {s.title}
            </button>
          </li>
        ))}
      </ol>

      <button
        type="button"
        onClick={onRestart}
        className="mt-10 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
      >
        Ta testen på nytt
      </button>

      <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
        Den siste forklaringen bygger på et skille som utdypes i{" "}
        <Link to="/research-premises" className={LINK_CLASS}>
          Research Premises
        </Link>
        : at en undersøkelse avsluttes, gir ikke i seg selv grunnlag for å si at spørsmålet er
        besvart.
      </p>
    </section>
  );
}

/**
 * Covers every point Sikt requires in information to participants
 * (behandlingsansvarlig, personvernombud, formål, lovlig grunnlag,
 * opplysninger, mottakere, lagringstid, rettigheter).
 */
const PRIVACY: { label: string; text: string }[] = [
  {
    label: "Behandlingsansvarlig",
    text: "NLA Høgskolen AS er ansvarlig for nettstedet og innholdet. Prosjektansvarlig er Åke Elden, akeeld@nla.no.",
  },
  {
    label: "Personvernombud",
    text: "Spørsmål om personvern kan rettes til personvernombudet ved NLA Høgskolen, se nla.no.",
  },
  {
    label: "Formål",
    text: "Testen inngår i forskningsprosjektet «Tvilsterror – dømmekraft under realitetsmanipulasjon» ved NLA Høgskolen. Denne nettversjonen er en refleksjons- og formidlingsversjon og lagrer ingen svar. Svar som brukes i forskningen, samles bare inn i en egen spørreundersøkelse i Nettskjema, med eget informasjonsskriv og samtykke.",
  },
  {
    label: "Hvilke opplysninger som behandles",
    text: "Ingen. Svarene dine finnes bare i nettleseren mens siden er åpen. De lagres ikke, sendes ikke til noen server og forsvinner når du lukker eller laster inn siden på nytt. Testen spør ikke om navn, alder eller andre bakgrunnsopplysninger.",
  },
  {
    label: "Lovlig grunnlag",
    text: "Fordi testen ikke samler inn eller lagrer personopplysninger, er det ikke behov for samtykke eller annet behandlingsgrunnlag etter personvernforordningen (GDPR) artikkel 6.",
  },
  {
    label: "Hvem som får tilgang",
    text: "Ingen, heller ikke prosjektansvarlig. Merk at nettstedet henter skrifttyper fra Google Fonts, og at Google Translate lastes inn bare hvis du selv slår på oversettelse. Da mottar Google teknisk informasjon som IP-adresse, slik det er vanlig ved bruk av slike tjenester.",
  },
  {
    label: "Hvor lenge opplysningene behandles",
    text: "Bare så lenge siden er åpen i nettleseren din.",
  },
  {
    label: "Dine rettigheter",
    text: "Du kan avbryte når som helst, uten å oppgi grunn. Siden ingen opplysninger om deg lagres, finnes det ingenting å be om innsyn i, få rettet eller slettet. Du har likevel alltid rett til å kontakte prosjektansvarlig eller personvernombudet og til å klage til Datatilsynet.",
  },
];

function Privacy() {
  return (
    <section id="personvern" className="mt-20 scroll-mt-24 border-t border-border pt-10">
      <h2 className="font-display text-xl leading-snug text-foreground">
        Personvern og informasjon om testen
      </h2>
      <dl className="mt-6 space-y-5">
        {PRIVACY.map((p) => (
          <div key={p.label}>
            <dt className="text-sm font-medium text-foreground">{p.label}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
