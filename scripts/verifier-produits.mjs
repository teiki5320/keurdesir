// Vérification des fiches Amazon des produits (à lancer sur le Mac, pas sur GitHub : Amazon bloque souvent les serveurs).
// Modèle : Keurbook (scripts/verifier-produits.mjs).
// Pour chaque produit avec un ASIN (src/lib/catalogue/produits.ts), la page amazon.fr/dp/<ASIN> est ouverte dans Chrome :
// le rapport dit si le bouton « Ajouter au panier » est présent. Rien n'est écrit : on reporte à la main
// la date de vérification (amazon.verifie_le), ou on remet amazon à null si le produit n'est plus vendu.
//
// Usage : npm run verifier-produits
//         npm run verifier-produits -- --ids slug1,slug2
// Chrome : CHROMIUM_PATH=/chemin/vers/chrome (par défaut, Google Chrome sur macOS).
import { chromium } from "playwright";
import { PRODUITS } from "../src/lib/catalogue/produits.ts";

const chrome = process.env.CHROMIUM_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const iIds = process.argv.indexOf("--ids");
const ids = iIds > -1 ? new Set(String(process.argv[iIds + 1] || "").split(",").filter(Boolean)) : null;
const aVerifier = PRODUITS.filter((p) => p.amazon && (!ids || ids.has(p.slug)));

if (aVerifier.length === 0) {
  console.log("Aucun produit avec ASIN à vérifier.");
  process.exit(0);
}

const navigateur = await chromium.launch({ executablePath: chrome, headless: true });
const page = await navigateur.newPage({ locale: "fr-FR" });
for (const p of aVerifier) {
  await page.goto(`https://www.amazon.fr/dp/${p.amazon.asin}`, { waitUntil: "domcontentloaded" });
  const achat = await page.locator("#add-to-cart-button").count();
  console.log(`${achat ? "✓" : "✗"} ${p.slug} (${p.amazon.asin}) : ${achat ? "en vente" : "pas de bouton d'achat"}`);
  await page.waitForTimeout(3000 + Math.random() * 3000);
}
await navigateur.close();
