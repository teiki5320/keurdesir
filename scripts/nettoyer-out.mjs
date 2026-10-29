/**
 * Lancé après `next build` : retire de out/ les pages factices « aucun » des listes encore vides
 * (produits, articles, Top 10 ; voir src/lib/vide.ts). L'export statique exige au moins une page par route :
 * ces pages ne servent qu'à le satisfaire et ne doivent pas être publiées.
 */
import { existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const out = join(process.cwd(), "out");
let retirees = 0;
for (const dossier of ["produit", "conseils", "top-10"]) {
  const dir = join(out, dossier);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir)) {
    if (f === "aucun" || f.startsWith("aucun.")) {
      rmSync(join(dir, f), { recursive: true, force: true });
      retirees++;
    }
  }
}
console.log(`Pages factices retirées de out/ : ${retirees}.`);
