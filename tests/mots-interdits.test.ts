/**
 * Règle absolue de contenu (docs/REDACTION.md) : aucun mot bloquant dans les textes du site.
 * Les mots « à surveiller » sont seulement signalés (avertissement dans la sortie du test).
 */
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { PRODUITS } from "../src/lib/catalogue/produits";
import { LEXIQUE } from "../src/lib/lexique";
import { MOTS_A_SURVEILLER, MOTS_BLOQUANTS, trouverMots } from "../src/lib/mots-interdits";
import { RUBRIQUES } from "../src/lib/rubriques";
import { TOP10S } from "../src/lib/top10/sujets";
import { racine } from "./aide";

/** Tous les textes publiés ou programmés, avec leur origine. */
function textesDuSite(): Array<{ source: string; texte: string }> {
  const dir = join(racine, "content", "conseils");
  const guides = join(racine, "content", "rubriques");
  return [
    ...readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => ({ source: `content/conseils/${f}`, texte: readFileSync(join(dir, f), "utf8") })),
    ...readdirSync(guides).filter((f) => f.endsWith(".md")).map((f) => ({ source: `content/rubriques/${f}`, texte: readFileSync(join(guides, f), "utf8") })),
    ...PRODUITS.map((p) => ({ source: `produit ${p.slug}`, texte: JSON.stringify(p) })),
    ...TOP10S.map((t) => ({ source: `top 10 ${t.slug}`, texte: JSON.stringify(t) })),
    ...RUBRIQUES.map((r) => ({ source: `rubrique ${r.slug}`, texte: JSON.stringify(r) })),
    ...LEXIQUE.map((m) => ({ source: `lexique ${m.mot}`, texte: JSON.stringify(m) })),
    // Pages écrites dans le code (accueil, À propos, pages légales…).
    ...pagesDuCode(join(racine, "src", "app")).map((f) => ({ source: f.slice(racine.length + 1), texte: readFileSync(f, "utf8") })),
  ];
}

function pagesDuCode(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? pagesDuCode(join(dir, e.name)) : e.name.endsWith(".tsx") ? [join(dir, e.name)] : []));
}

describe("Mots interdits", () => {
  it("la recherche ignore accents et majuscules, sur des mots entiers", () => {
    assert.deepEqual(trouverMots("Un texte ÉROTIQUE", MOTS_BLOQUANTS), ["erotique"]);
    assert.deepEqual(trouverMots("Une éducation sexuelle", MOTS_BLOQUANTS), ["sexuelle"]);
    assert.deepEqual(trouverMots("Un lubrifiant", MOTS_BLOQUANTS), ["lubrifiant"]);
    assert.deepEqual(trouverMots("Des produits pour adultes", MOTS_BLOQUANTS), ["pour adultes"]);
    assert.deepEqual(trouverMots("Essex, sexagénaire, la sensualité, la séduction, le bien-être", MOTS_BLOQUANTS), []);
    assert.deepEqual(trouverMots("Une ambiance intime", MOTS_A_SURVEILLER), ["intime"]);
  });

  it("aucun mot bloquant dans les textes du site", () => {
    const fautes = textesDuSite().flatMap(({ source, texte }) => {
      const mots = trouverMots(texte, MOTS_BLOQUANTS);
      return mots.length ? [`${source} : ${mots.join(", ")}`] : [];
    });
    assert.deepEqual(fautes, []);
  });

  it("mots à surveiller : relire les phrases signalées", () => {
    for (const { source, texte } of textesDuSite()) {
      const mots = trouverMots(texte, MOTS_A_SURVEILLER);
      if (mots.length) console.warn(`À relire — ${source} : ${mots.join(", ")}`);
    }
  });
});
