import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { DESCRIPTION_MAX, DESCRIPTION_MIN, isPublished, parseConseil, splitAtMiddleSection, todayInParis } from "../src/lib/conseils/article";
import { PRODUITS } from "../src/lib/catalogue/produits";
import { titrePage } from "../src/lib/metadata";
import { DATE, SLUG, liensInternes, pagesInternes, tousLesConseils } from "./aide";

const conseils = tousLesConseils();
const produits = new Set(PRODUITS.filter((p) => p.isPublished).map((p) => p.slug));

describe("Articles (content/conseils)", () => {
  it("slug, question, description et date de parution", () => {
    for (const c of conseils) {
      assert.match(c.slug, SLUG);
      assert.ok(c.title.endsWith("?"), `${c.slug} : le titre est une question`);
      assert.ok(titrePage(c.title).length <= 60, `${c.slug} : titre trop long`);
      assert.ok(c.description.length >= DESCRIPTION_MIN && c.description.length <= DESCRIPTION_MAX, `${c.slug} : description de ${c.description.length} caractères`);
      assert.match(c.date, DATE, c.slug);
      // Trois articles par semaine : lundi, mercredi ou vendredi.
      assert.ok([1, 3, 5].includes(new Date(`${c.date}T12:00:00Z`).getUTCDay()), `${c.slug} : ${c.date} n'est ni un lundi, ni un mercredi, ni un vendredi`);
      assert.ok(c.resume.trim() && c.body.trim(), `${c.slug} : résumé ou texte vide`);
    }
  });

  it("produits cités existants, liens internes valides à la date de l'article", () => {
    for (const c of conseils) {
      for (const p of c.produits) assert.ok(produits.has(p), `${c.slug} : produit « ${p} » inconnu`);
      const pages = pagesInternes(c.date);
      for (const l of liensInternes(c.body)) assert.ok(pages.has(l), `${c.slug} : lien « ${l} » introuvable le ${c.date}`);
    }
  });

  it("un article programmé n'est publié qu'à sa date, à l'heure de Paris", () => {
    assert.equal(isPublished({ date: "2026-11-02" }, "2026-11-01"), false);
    assert.equal(isPublished({ date: "2026-11-02" }, "2026-11-02"), true);
    assert.equal(isPublished({ date: "" }, "2026-11-02"), false);
    // 23 h 30 UTC le 1er novembre = 0 h 30 le 2 novembre à Paris.
    assert.equal(todayInParis(new Date("2026-11-01T23:30:00Z")), "2026-11-02");
  });

  it("lecture de l'en-tête et rubrique obligatoire", () => {
    const c = parseConseil("essai", "---\ntitle: Quoi ?\ndescription: d\ndate: 2026-11-02\nrubrique: djongue\nresume: r\nproduits: a, b\n---\n## Partie\nTexte");
    assert.deepEqual(c.produits, ["a", "b"]);
    assert.equal(c.rubrique, "djongue");
    assert.throws(() => parseConseil("x", "---\nrubrique: inconnue\n---\n"));
  });

  it("annonce au milieu seulement à partir de 3 parties", () => {
    assert.deepEqual(splitAtMiddleSection("<h2>a</h2><h2>b</h2>"), ["<h2>a</h2><h2>b</h2>", ""]);
    const [a, b] = splitAtMiddleSection("<h2>a</h2>1<h2>b</h2>2<h2>c</h2>3");
    assert.equal(a, "<h2>a</h2>1");
    assert.equal(b, "<h2>b</h2>2<h2>c</h2>3");
  });
});
