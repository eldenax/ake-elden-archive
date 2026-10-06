#!/usr/bin/env node
/**
 * Builds the print-ready QR card used on the survey landing page.
 *
 * Outputs (committed to the repo, served from public/):
 *   public/survey-qr-card.svg   vector original
 *   public/survey-qr-card.png   rasterised at A6 / 300 dpi (1240 x 1754)
 *
 * The card encodes the canonical survey address, so it keeps working even if
 * the landing page behind it changes.
 *
 * Usage:
 *   bun run make:survey-qr
 *   SURVEY_URL=https://akeelden.com/survey bun run make:survey-qr
 */

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import QRCode from "qrcode";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SURVEY_URL = process.env.SURVEY_URL ?? "https://akeelden.com/survey";
const KICKER = "Research questionnaire";
const TITLE_LINES = ["Being Seen in", "the Age of AI"];
const CAPTION = "Scan to take the survey";
const ADDRESS = SURVEY_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
const FOOTER = "Åke Elden";

// --- Card geometry -----------------------------------------------------------

const W = 900;
const H = 1273; // A6 proportions (1 : 1.414)

const INK = "#0F0F0E";
const MUTED = "#4B4A44";
const PAPER = "#FFFFFF";

const QR_SIZE = 500;
const QR_X = (W - QR_SIZE) / 2;
const QR_Y = 358;

const DISPLAY = "'Libre Baskerville', 'DejaVu Serif', Georgia, serif";
const SANS = "'IBM Plex Sans', 'DejaVu Sans', Helvetica, sans-serif";

// --- QR ----------------------------------------------------------------------

const qrSvg = await QRCode.toString(SURVEY_URL, {
  type: "svg",
  errorCorrectionLevel: "Q", // 25% recovery: survives photocopying and creases
  margin: 1,
  width: QR_SIZE,
  color: { dark: INK, light: PAPER },
});

// Re-home the generated QR inside the card as a nested <svg> so it can be
// positioned without re-implementing the module grid.
const qrInner = qrSvg
  .replace(/^<svg[^>]*>/, "")
  .replace(/<\/svg>\s*$/, "");
const qrViewBox = qrSvg.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 31 31";

const qrBlock = `<svg x="${QR_X}" y="${QR_Y}" width="${QR_SIZE}" height="${QR_SIZE}" viewBox="${qrViewBox}" shape-rendering="crispEdges" preserveAspectRatio="none">${qrInner}</svg>`;

// --- Card --------------------------------------------------------------------

const center = (y, text, opts) => {
  const {
    family = DISPLAY,
    size = 40,
    weight = 400,
    fill = INK,
    spacing = 0,
    style = "normal",
  } = opts;
  return `<text x="${W / 2}" y="${y}" text-anchor="middle" font-family="${family}" font-size="${size}" font-weight="${weight}" font-style="${style}" fill="${fill}"${spacing ? ` letter-spacing="${spacing}"` : ""}>${text}</text>`;
};

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  <rect x="26" y="26" width="${W - 52}" height="${H - 52}" fill="none" stroke="${INK}" stroke-opacity="0.28" stroke-width="1.5"/>

  ${center(140, KICKER.toUpperCase(), { family: SANS, size: 21, weight: 500, fill: MUTED, spacing: 5.5 })}

  ${center(238, TITLE_LINES[0], { size: 54 })}
  ${center(304, TITLE_LINES[1], { size: 54 })}

  ${qrBlock}

  ${center(QR_Y + QR_SIZE + 96, CAPTION, { size: 39 })}

  <line x1="300" y1="${QR_Y + QR_SIZE + 148}" x2="600" y2="${QR_Y + QR_SIZE + 148}" stroke="${INK}" stroke-opacity="0.28" stroke-width="1.5"/>

  ${center(QR_Y + QR_SIZE + 214, ADDRESS, { family: SANS, size: 33, weight: 500, spacing: 1.5 })}
  ${center(H - 84, FOOTER, { size: 27, style: "italic", fill: MUTED })}
</svg>
`;

writeFileSync(resolve(ROOT, "public/survey-qr-card.svg"), svg);

const png = await sharp(Buffer.from(svg))
  .resize(1240, 1754, { fit: "fill" })
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(resolve(ROOT, "public/survey-qr-card.png"), png);

console.log(`✓ ${SURVEY_URL}`);
console.log("  public/survey-qr-card.svg");
console.log(`  public/survey-qr-card.png (${(png.length / 1024).toFixed(0)} kB)`);
