import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { suivantsEnBoucle } from "../src/lib/boucle";
import { couperTexte, titrePage } from "../src/lib/metadata";
import { RUBRIQUES } from "../src/lib/rubriques";
import { LEXIQUE } from "../src/lib/lexique";
import { typo } from "../src/lib/format";

describe("Titres et descriptions", () => {
  it("le titre est coupé en fin de mot avec « … »", () => {
    assert.equal(couperTexte("Un titre court", 60), "Un titre court");
    const long = couperTexte("Comment choisir ses premières perles de taille quand on n'en a jamais porté ?", 40);
    assert.ok(long.length <= 40 && long.endsWith("…"));
  });

  it("suffixe « | Keur Désir » seulement s'il tient en 60 caractères", () => {
    assert.equal(titrePage("Bine-bine et baya"), "Bine-bine et baya | Keur Désir");
    assert.ok(titrePage("x".repeat(55)).length <= 60);
  });

  it("7 rubriques : titres de 60 caractères au plus, descriptions de 70 à 160", () => {
    assert.equal(RUBRIQUES.length, 7);
    for (const r of RUBRIQUES) {
      assert.ok(titrePage(r.nom).length <= 60, r.slug);
      assert.ok(r.description.length >= 70 && r.description.length <= 160, `${r.slug} : ${r.description.length} caractères`);
      assert.ok(r.chapo.length >= 120, `${r.slug} : chapô trop court`);
    }
  });

  it("lexique : mots uniques, définitions courtes", () => {
    assert.equal(new Set(LEXIQUE.map((m) => m.mot.toLowerCase())).size, LEXIQUE.length);
    for (const m of LEXIQUE) assert.ok(m.definition.length >= 40 && m.definition.length <= 400, m.mot);
  });

  it("espaces insécables françaises", () => {
    assert.equal(typo("Pourquoi ? « Oui »"), "Pourquoi ? « Oui »");
  });

  it("chaque élément reçoit des liens en boucle", () => {
    assert.deepEqual(suivantsEnBoucle([1, 2, 3, 4], (x) => x === 3, 2), [4, 1]);
  });
});
