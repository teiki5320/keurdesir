/**
 * Images de marque, à partir du logo de Jean (docs/logos/keurdesir-logo-fond-blanc.png), à relancer à la main :
 *   node scripts/marque.mjs
 * Le fond blanc est rendu transparent (remplissage depuis les bords, les dents blanches restent opaques).
 * → public/brand/keurdesir-logo.webp (logo complet, pied de page), public/brand/keurdesir-embleme.webp (lèvres, en-tête),
 *   public/brand/keurdesir-logo.png (données structurées), public/brand/keurdesir-partage.jpg (1200 × 630),
 *   src/app/icon.png (512 px) et src/app/apple-icon.png (180 px).
 */
import sharp from "sharp";

const SOURCE = "docs/logos/keurdesir-logo-fond-blanc.png";
const CREME = "#f7f0e6";

/** Logo sur fond transparent : les pixels clairs reliés au bord deviennent transparents (fondu sur les contours). */
async function detourer() {
  const { data, info } = await sharp(SOURCE).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const clair = (i) => Math.min(data[i * 4], data[i * 4 + 1], data[i * 4 + 2]);
  const vu = new Uint8Array(w * h);
  const pile = [];
  for (let x = 0; x < w; x++) pile.push(x, (h - 1) * w + x);
  for (let y = 0; y < h; y++) pile.push(y * w, y * w + w - 1);
  while (pile.length) {
    const i = pile.pop();
    if (vu[i] || clair(i) < 200) continue;
    vu[i] = 1;
    // Presque blanc : transparent ; gris clair des contours : à demi transparent.
    data[i * 4 + 3] = Math.round(Math.max(0, Math.min(255, ((245 - clair(i)) / 45) * 255)));
    const x = i % w;
    if (x > 0) pile.push(i - 1);
    if (x < w - 1) pile.push(i + 1);
    if (i >= w) pile.push(i - w);
    if (i < w * (h - 1)) pile.push(i + w);
  }
  // Sous les lèvres (le nom « Keur Désir ») : le blanc enfermé dans les lettres (creux du D, du é, du R…) devient
  // transparent lui aussi ; sinon il ressort en taches blanches sur fond sombre. Les dents, plus haut, restent opaques.
  for (let i = Math.round(h * 0.676) * w; i < w * h; i++) {
    if (vu[i] || clair(i) < 200) continue;
    data[i * 4 + 3] = Math.round(Math.max(0, Math.min(255, ((245 - clair(i)) / 45) * 255)));
  }
  return sharp(data, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
}

/** Garde seulement la tache qui part du centre de l'image (les lèvres) : les morceaux de lettres coupés disparaissent. */
async function garderLePlusGrand(png) {
  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const garde = new Uint8Array(w * h);
  const pile = [Math.floor(h / 2) * w + Math.floor(w / 2)];
  while (pile.length) {
    const i = pile.pop();
    if (garde[i] || data[i * 4 + 3] < 200) continue;
    garde[i] = 1;
    const x = i % w;
    if (x > 0) pile.push(i - 1);
    if (x < w - 1) pile.push(i + 1);
    if (i >= w) pile.push(i - w);
    if (i < w * (h - 1)) pile.push(i + w);
  }
  for (let i = 0; i < w * h; i++) if (!garde[i]) data[i * 4 + 3] = 0;
  return sharp(data, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
}

const logo = await detourer();
const { width, height } = await sharp(logo).metadata();
// Lèvres seules : la partie haute du logo, coupée juste sous la lèvre inférieure (68 % de la hauteur, mesuré sur le logo).
const coupe = Math.round(height * 0.676);
const haut = await sharp(logo).extract({ left: 0, top: 0, width, height: coupe }).png().toBuffer();
const levres = await sharp(await garderLePlusGrand(haut)).trim({ threshold: 1 }).png().toBuffer();

await sharp(logo).trim({ threshold: 1 }).resize({ width: 480 }).webp({ quality: 88 }).toFile("public/brand/keurdesir-logo.webp");
await sharp(logo).trim({ threshold: 1 }).resize({ width: 512 }).png().toFile("public/brand/keurdesir-logo.png");
await sharp(levres).resize({ height: 96 }).webp({ quality: 88 }).toFile("public/brand/keurdesir-embleme.webp");

const carre = async (taille, marge) => {
  const l = await sharp(levres).resize({ width: taille - 2 * marge }).png().toBuffer();
  return sharp({ create: { width: taille, height: taille, channels: 4, background: CREME } }).composite([{ input: l, gravity: "center" }]).png();
};
await (await carre(512, 40)).toFile("src/app/icon.png");
await (await carre(180, 14)).toFile("src/app/apple-icon.png");

const pourPartage = await sharp(logo).trim({ threshold: 1 }).resize({ height: 540 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: CREME } })
  .composite([{ input: pourPartage, gravity: "center" }])
  .jpeg({ quality: 88 })
  .toFile("public/brand/keurdesir-partage.jpg");
console.log("Images de marque créées.");
