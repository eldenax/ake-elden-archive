import { useEffect, useState } from "react";

const SCRIPT_ID = "google-translate-script";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

function setSelect(lang: string): boolean {
  const select = document.querySelector<HTMLSelectElement>(
    "select.goog-te-combo",
  );
  if (!select) return false;
  select.value = lang === "en" ? "" : lang;
  select.dispatchEvent(new Event("change"));
  return true;
}

function loadWidget(): Promise<void> {
  return new Promise((resolve) => {
    if (document.getElementById(SCRIPT_ID)) return resolve();
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "no,en",
          autoDisplay: false,
        },
        "google_translate_element",
      );
      resolve();
    };
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(s);
  });
}

export function LanguageToggle() {
  const [lang, setLang] = useState<"en" | "no">("en");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (document.cookie.includes("googtrans=/en/no")) setLang("no");
  }, []);

  const toggle = async () => {
    const next = lang === "en" ? "no" : "en";
    setBusy(true);
    await loadWidget();
    // widget select may take a tick to mount
    for (let i = 0; i < 40; i++) {
      if (setSelect(next)) break;
      await new Promise((r) => setTimeout(r, 100));
    }
    setLang(next);
    setBusy(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        disabled={busy}
        aria-label={
          lang === "en" ? "Oversett siden til norsk" : "Translate page to English"
        }
        className="notranslate shrink-0 rounded-md border border-input px-2.5 py-1 text-xs font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground disabled:opacity-50"
      >
        {lang === "en" ? "NO" : "EN"}
      </button>
      <div id="google_translate_element" className="hidden" />
    </>
  );
}
