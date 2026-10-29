/**
 * Images de marque provisoires (en attendant le logo définitif), créées à la main :
 *   node scripts/marque.mjs
 * → public/brand/keurdesir-partage.jpg (1200 × 630), public/brand/keurdesir-logo.png (512 px),
 *   src/app/icon.png (512 px) et src/app/apple-icon.png (180 px).
 */
import sharp from "sharp";

const CREME = "#f7f0e6";
const GRENAT = "#8f2a3e";
const ENCRE = "#2b1d1a";
const OR = "#a67a2c";

const partage = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${CREME}"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="${OR}" stroke-width="2"/>
  <text x="600" y="300" text-anchor="middle" font-family="Georgia, serif" font-size="130" fill="${ENCRE}">Keur <tspan fill="${GRENAT}" font-style="italic">Désir</tspan></text>
  <text x="600" y="390" text-anchor="middle" font-family="Georgia, serif" font-size="44" fill="${ENCRE}" font-style="italic">Le guide du djongué</text>
</svg>`;

const embleme = (taille) => `<svg xmlns="http://www.w3.org/2000/svg" width="${taille}" height="${taille}" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="${GRENAT}"/>
  <text x="256" y="340" text-anchor="middle" font-family="Georgia, serif" font-size="250" fill="${CREME}">K<tspan font-style="italic">d</tspan></text>
</svg>`;

await sharp(Buffer.from(partage)).jpeg({ quality: 88 }).toFile("public/brand/keurdesir-partage.jpg");
await sharp(Buffer.from(embleme(512))).png().toFile("public/brand/keurdesir-logo.png");
await sharp(Buffer.from(embleme(512))).png().toFile("src/app/icon.png");
await sharp(Buffer.from(embleme(512))).resize(180).png().toFile("src/app/apple-icon.png");
console.log("Images de marque créées.");
