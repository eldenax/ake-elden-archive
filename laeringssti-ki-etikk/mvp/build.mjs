// Bygger PDF-er av læringsstien:
//   laeringssti-mvp.pdf      – hele modulen slik studenten ser den, pluss lærerens design-dokument som vedlegg
//   design-dokument.pdf      – design-dokumentet alene
//   refleksjonsnotat-utkast.pdf
// Kjør: npm install && node build.mjs   (krever Chromium, se CHROME under)
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { marked } from "marked";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const CHROME = process.env.CHROME ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";

const MODULE = [
  ["00-start-her.html", "Side", "Merk som ferdig"],
  ["01-dag1-hvorfor.html", "Side", "Merk som ferdig"],
  ["02-dag2-tre-briller.html", "Side", "Merk som ferdig"],
  ["03-dag3-ansvar-og-agens.html", "Side", "Merk som ferdig"],
  ["04-diskusjon-medforfatter.html", "Diskusjon", "Bidra"],
  ["05-dag4-annotering.html", "Oppgave (studentmerknad)", "Lever inn"],
  ["06-ki-bruk-kompasset.html", "Side", "Merk som ferdig"],
  ["07-quiz-intro.html", "Quiz", "Oppnå minst 70 %"],
  ["08-dag5-ki-erklaering.html", "Oppgave + rubrikk + hverandrevurdering", "Lever inn"],
  ["09-avslutning.html", "Side", "Merk som ferdig"],
];
const TITLES = {
  "07-quiz-intro.html": "Sjekk forståelsen (quiz)",
};

const css = `
  @page { size: A4; margin: 18mm 16mm; }
  * { box-sizing: border-box; }
  body { font: 10.5pt/1.5 "DejaVu Sans", system-ui, sans-serif; color: #1f2328; margin: 0; }
  h1, h2, h3, h4 { line-height: 1.25; }
  h1 { font-family: "DejaVu Serif", serif; font-size: 22pt; margin: 0 0 8px; }
  table { border-collapse: collapse; width: 100%; margin: 8px 0 12px; font-size: 9.5pt; }
  th, td { border: 1px solid #d9d6cc; padding: 5px 7px; text-align: left; vertical-align: top; }
  th { background: #eef2f6; }
  caption { text-align: left; font-weight: 600; padding-bottom: 4px; }
  a { color: #2f5d8a; }
  img { max-width: 100%; }
  code, pre { font-family: "DejaVu Sans Mono", monospace; font-size: 8.5pt; }
  pre { background: #f3f2ee; padding: 8px; white-space: pre-wrap; }
  blockquote { margin: 8px 0; padding: 4px 12px; border-left: 3px solid #d9d6cc; color: #333; }
  .ph { background: #fff3c4; padding: 0 3px; border-radius: 3px; font-size: 9pt; }
  .cover { page-break-after: always; }
  .cover .meta td { border: 0; padding: 2px 8px 2px 0; }
  .canvas-page { page-break-before: always; }
  .canvas-bar { display: flex; justify-content: space-between; font-size: 8.5pt; color: #5b616b;
    border-bottom: 1px solid #d9d6cc; padding-bottom: 4px; margin-bottom: 10px; }
  .canvas-bar .req { background: #e3ecf5; color: #2f5d8a; padding: 1px 8px; border-radius: 999px; }
  /* Tilnærming av DesignPlus «flat sections» */
  .dp-header { background: #1f3a56; color: #fff; padding: 14px 18px; border-radius: 6px 6px 0 0; }
  .dp-heading { margin: 0; font-size: 16pt; }
  .dp-header-pre { display: block; font-size: 9pt; letter-spacing: 2px; text-transform: uppercase; color: #9fc3e8; font-weight: 400; }
  .dp-content-block { padding: 6px 4px; border-bottom: 1px solid #ecebe6; }
  .dp-content-block h3 { color: #1f3a56; border-bottom: 2px solid #f0a500; display: inline-block; padding-bottom: 2px; }
  .dp-icon { display: none; }
  .dp-callout { border-left: 4px solid #2f5d8a; background: #eef3f8; padding: 6px 12px; margin: 10px 0; border-radius: 4px; }
  .dp-callout-type-success { border-color: #3a7d55; background: #edf6f0; }
  .dp-callout-type-warning { border-color: #b37a00; background: #fbf4e3; }
  .dp-callout h4 { margin: 4px 0; }
  .dp-column-container .row { display: flex; gap: 10px; }
  .dp-column-container .row > div { flex: 1; }
  .embed { border: 2px dashed #8aa6c1; background: #f4f7fa; padding: 14px; margin: 8px 0; text-align: center; color: #2f5d8a; border-radius: 6px; font-size: 9.5pt; }
  .embed strong { display: block; font-size: 10.5pt; }
  details > summary { font-weight: 600; }
  .modlist { list-style: none; padding: 0; }
  .modlist li { display: flex; justify-content: space-between; border: 1px solid #d9d6cc; border-top: 0; padding: 7px 10px; }
  .modlist li:first-child { border-top: 1px solid #d9d6cc; }
  .modlist .type { color: #5b616b; font-size: 9pt; }
  .modhead { background: #eef2f6; border: 1px solid #d9d6cc; padding: 8px 10px; font-weight: 700; margin-top: 10px; }
  .doc { page-break-before: always; }
  .doc h2 { page-break-after: avoid; border-bottom: 1px solid #d9d6cc; padding-bottom: 3px; margin-top: 22px; }
  .doc tr, .doc blockquote { page-break-inside: avoid; }
`;

function placeholders(html) {
  return html.replace(/\[\[(SETT INN|CHECK):([^\]]*)\]\]/g, (_, k, t) => `<span class="ph">[${k}:${t}]</span>`);
}

function canvasPage(file) {
  let html = readFileSync(resolve(root, "canvas-html", file), "utf8");
  const firstComment = html.match(/<!--\s*CANVAS-[A-ZÆØÅ]+:\s*«([^»]+)»/);
  const title = TITLES[file] ?? (firstComment ? firstComment[1] : file);
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  html = html.replace(/src="\[\[SETT INN: Canvas-filsti til bilder\/banner\.png\]\]"/, `src="${pathToFileURL(resolve(root, "bilder/banner.png"))}"`);
  html = html.replace(/<iframe[^>]*src="([^"]*)"[^>]*title="([^"]*)"[^>]*><\/iframe>/g, (_, src, t) => {
    if (src.includes("ki-kompass.html")) {
      return `<img src="${pathToFileURL(resolve(root, "bilder/ki-kompass-demo.png"))}" alt="Skjermbilde av KI-bruk-kompasset med eksempeldata" style="border:1px solid #d9d6cc;border-radius:6px;width:68%;display:block;margin:0 auto">`;
    }
    return `<div class="embed"><strong>Innebygd: ${t}</strong>${src.startsWith("[[") ? "Lenke settes inn når innholdet er laget" : src}</div>`;
  });
  html = html.replace(/<details>/g, "<details open>");
  return { title, html: placeholders(html) };
}

function page(body, title) {
  return `<!doctype html><html lang="nb"><head><meta charset="utf-8"><title>${title}</title><style>${css}</style></head><body>${body}</body></html>`;
}

function md(file) {
  return placeholders(marked.parse(readFileSync(resolve(root, file), "utf8")));
}

function pdf(htmlFile, pdfFile) {
  execFileSync(CHROME, ["--headless", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer",
    `--print-to-pdf=${pdfFile}`, pathToFileURL(htmlFile).href], { stdio: "ignore" });
  if (!existsSync(pdfFile)) throw new Error(`PDF ble ikke laget: ${pdfFile}`);
  console.log("Skrev", pdfFile);
}

// --- MVP ---
const pages = MODULE.map(([f, type, req]) => ({ ...canvasPage(f), type, req }));
const cover = `
<section class="cover">
  <img src="${pathToFileURL(resolve(root, "bilder/banner.png"))}" alt="Banner: Etikk og kunstig intelligens i forskning">
  <h1 style="margin-top:18px">Etikk og kunstig intelligens i forskerpraksis</h1>
  <p style="font-size:12pt;color:#5b616b;margin-top:0">MVP av digital læringssti i Canvas · arbeidskrav i UH-ped</p>
  <table class="meta">
    <tr><td><strong>Format</strong></td><td>Nettbasert modul, asynkron, én uke (ca. 9 timer)</td></tr>
    <tr><td><strong>Målgruppe</strong></td><td>Ph.d.-kandidater</td></tr>
    <tr><td><strong>Pedagogisk ramme</strong></td><td>Konstruktiv linjeinnretting og Community of Inquiry</td></tr>
    <tr><td><strong>Sluttprodukt</strong></td><td>Etisk begrunnet KI-erklæring for egen avhandling, med hverandrevurdering</td></tr>
  </table>
  <p>Del 1 viser modulen slik studenten møter den i Canvas, side for side. Innebygd innhold (H5P, Panopto, Mentimeter, YouTube) er vist som rammer. Gule merker er plassholdere. Del 2 er lærerens design-dokument med manus, quiz og rubrikker.</p>
  <div class="modhead">Modul: Etikk og KI i forskerpraksis</div>
  <ul class="modlist">
    ${pages.map((p) => `<li><span>${p.title}<br><span class="type">${p.type}</span></span><span class="type">☐ ${p.req}</span></li>`).join("")}
  </ul>
</section>`;
const body = cover + pages.map((p, i) => `
<section class="canvas-page">
  <div class="canvas-bar"><span>Del 1 · Element ${i + 1} av ${pages.length} · ${p.type}</span><span class="req">Krav: ${p.req}</span></div>
  ${p.type.startsWith("Quiz") ? `<h2>${p.title}</h2>` : ""}
  ${p.html}
</section>`).join("") + `<section class="doc"><p style="color:#5b616b">Del 2 · Lærerens design-dokument</p>${md("design-dokument.md")}</section>`;

const mvpHtml = resolve(here, "laeringssti-mvp.html");
writeFileSync(mvpHtml, page(body, "Etikk og KI i forskerpraksis – MVP"));
pdf(mvpHtml, resolve(root, "laeringssti-mvp.pdf"));

// --- Enkeltdokumenter ---
for (const [mdFile, out] of [["design-dokument.md", "design-dokument.pdf"], ["refleksjonsnotat-utkast.md", "refleksjonsnotat-utkast.pdf"]]) {
  const tmp = resolve(here, out.replace(".pdf", ".html"));
  writeFileSync(tmp, page(`<div>${md(mdFile)}</div>`, out));
  pdf(tmp, resolve(root, out));
}
