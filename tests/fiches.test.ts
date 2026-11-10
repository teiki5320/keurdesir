/**
 * Fiches détaillées des produits (src/lib/fiches, règles docs/FICHES.md) : forme, longueur, liens, mots interdits.
 * Une fiche pas encore écrite n'est pas contrôlée : on peut publier lot par lot.
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { PRODUITS } from "../src/lib/catalogue/produits";
import { SLUGS as slugsBine } from "../src/lib/fiches/bine-bine";
import { SLUGS as slugsCoffrets } from "../src/lib/fiches/coffrets-cadeaux";
import { SLUGS as slugsEncensoirs } from "../src/lib/fiches/encensoirs";
import { SLUGS as slugsKarite } from "../src/lib/fiches/karite-soins";
import { SLUGS as slugsTenues } from "../src/lib/fiches/tenues-de-nuit";
import { SLUGS as slugsThiouraye } from "../src/lib/fiches/thiouraye-encens";
import { cheminsDuTexte, compterMots, getFiche, texteFiche } from "../src/lib/fiches";
import { MOTS_BLOQUANTS, trouverMots } from "../src/lib/mots-interdits";
import { PRIX_OU_NOTE, pagesInternes } from "./aide";

const publies = PRODUITS.filter((p) => p.isPublished);
const TOUS = [...slugsBine, ...slugsCoffrets, ...slugsEncensoirs, ...slugsKarite, ...slugsTenues, ...slugsThiouraye] as string[];
const pages = pagesInternes();

/** Mots du texte propre de la page : présentation, raisons, usage et fiche détaillée. */
function motsDePage(slug: string): number {
  const p = publies.find((x) => x.slug === slug)!;
  const f = getFiche(slug)!;
  return compterMots([p.resume, ...p.pourquoi, p.usage].join("\n\n")) + compterMots(texteFiche(f));
}

describe("Fiches détaillées", () => {
  it("les 6 listes couvrent exactement les produits publiés, sans doublon", () => {
    assert.equal(new Set(TOUS).size, TOUS.length);
    assert.deepEqual([...TOUS].sort(), publies.map((p) => p.slug).sort());
  });

  it("forme : 4 parties d'au moins 40 mots, 2 ou 3 questions qui finissent par « ? »", () => {
    const fautes: string[] = [];
    for (const slug of TOUS) {
      const f = getFiche(slug);
      if (!f) continue;
      for (const k of ["origine", "choisir", "entretien", "pourQui"] as const) if (compterMots(f[k]) < 40) fautes.push(`${slug} : partie « ${k} » trop courte (${compterMots(f[k])} mots)`);
      if (f.faq.length < 2 || f.faq.length > 3) fautes.push(`${slug} : ${f.faq.length} question(s)`);
      for (const q of f.faq) {
        if (!q.question.trim().endsWith("?")) fautes.push(`${slug} : question sans « ? » : ${q.question}`);
        if (compterMots(q.reponse) < 15) fautes.push(`${slug} : réponse trop courte : ${q.question}`);
      }
    }
    assert.deepEqual(fautes, []);
  });

  it("longueur : 500 à 720 mots de texte propre sur la page entière", () => {
    const fautes: string[] = [];
    for (const slug of TOUS) {
      if (!getFiche(slug)) continue;
      const n = motsDePage(slug);
      if (n < 500 || n > 720) fautes.push(`${slug} : ${n} mots (500 à 720 attendus)`);
    }
    assert.deepEqual(fautes, []);
  });

  it("liens internes : pages en ligne, pas de Markdown, ni prix ni note ni avis", () => {
    const fautes: string[] = [];
    for (const slug of TOUS) {
      const f = getFiche(slug);
      if (!f) continue;
      const brut = [f.origine, f.choisir, f.entretien, f.pourQui, ...f.faq.flatMap((q) => [q.question, q.reponse])].join("\n\n");
      for (const chemin of cheminsDuTexte(brut)) {
        if (!pages.has(chemin)) fautes.push(`${slug} : lien vers une page qui n'existe pas (ou pas encore publiée) : ${chemin}`);
        if (chemin === `/produit/${slug}`) fautes.push(`${slug} : lien vers sa propre fiche`);
      }
      const sansLiens = texteFiche(f);
      if (sansLiens.includes("\\")) fautes.push(`${slug} : antislash dans le texte (\\n mal écrit ?)`);
      if (/[*#_`]|^\s*[-•]\s/m.test(sansLiens)) fautes.push(`${slug} : Markdown interdit (gras, titres, listes)`);
      if (PRIX_OU_NOTE.test(sansLiens)) fautes.push(`${slug} : prix, note ou avis interdits`);
      if (/\bB0[0-9A-Z]{8}\b/.test(brut)) fautes.push(`${slug} : ASIN interdit dans le texte`);
    }
    assert.deepEqual(fautes, []);
  });

  it("aucun mot bloquant (règle absolue de contenu)", () => {
    const fautes = TOUS.flatMap((slug) => {
      const f = getFiche(slug);
      const mots = f ? trouverMots(JSON.stringify(f), MOTS_BLOQUANTS) : [];
      return mots.length ? [`${slug} : ${mots.join(", ")}`] : [];
    });
    assert.deepEqual(fautes, []);
  });
});
