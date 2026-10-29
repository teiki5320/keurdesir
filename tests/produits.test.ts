import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { PRODUITS } from "../src/lib/catalogue/produits";
import { isRubrique } from "../src/lib/rubriques";
import { titrePage } from "../src/lib/metadata";
import { DATE, PRIX_OU_NOTE, SLUG, phrases } from "./aide";

const publies = PRODUITS.filter((p) => p.isPublished);

describe("Catalogue des produits", () => {
  it("slugs uniques, en minuscules avec des tirets", () => {
    const slugs = PRODUITS.map((p) => p.slug);
    assert.equal(new Set(slugs).size, slugs.length);
    for (const s of slugs) assert.match(s, SLUG);
  });

  it("chaque produit est d'une des 7 rubriques du site", () => {
    for (const p of PRODUITS) assert.ok(isRubrique(p.rubrique), `${p.slug} : rubrique « ${p.rubrique} »`);
  });

  it("fiche complète : présentation de 3 à 5 phrases, 2 ou 3 raisons courtes, usage, boutiques", () => {
    for (const p of publies) {
      assert.ok(p.nom.trim() && p.type.trim(), p.slug);
      const n = phrases(p.resume);
      assert.ok(n >= 3 && n <= 5, `${p.slug} : présentation de ${n} phrase(s)`);
      assert.ok(p.pourquoi.length >= 2 && p.pourquoi.length <= 3, `${p.slug} : ${p.pourquoi.length} raison(s)`);
      for (const w of p.pourquoi) assert.ok(w.length <= 140, `${p.slug} : raison trop longue`);
      const u = phrases(p.usage);
      assert.ok(u >= 2 && u <= 4, `${p.slug} : usage de ${u} phrase(s)`);
      assert.ok(p.boutiques.length > 0, `${p.slug} : aucune boutique`);
      assert.equal(new Set(p.boutiques).size, p.boutiques.length, `${p.slug} : boutique en double`);
      assert.ok(p.recherche.trim(), `${p.slug} : mots de recherche vides`);
      assert.match(p.ajoute_le, DATE);
      assert.ok(titrePage(p.nom).length <= 60);
    }
  });

  it("ASIN et annonces Etsy : format valide et date de vérification", () => {
    for (const p of PRODUITS) {
      if (p.amazon) {
        assert.match(p.amazon.asin, /^[0-9A-Z]{10}$/, p.slug);
        assert.match(p.amazon.verifie_le, DATE, p.slug);
        assert.ok(p.boutiques.includes("amazon"), `${p.slug} : ASIN sans boutique Amazon`);
      }
      if (p.etsy) {
        assert.match(p.etsy.url, /^https:\/\/www\.etsy\.com\/(fr\/)?listing\/\d+/, p.slug);
        assert.match(p.etsy.verifie_le, DATE, p.slug);
        assert.ok(p.etsy.boutique.trim(), p.slug);
        assert.ok(p.boutiques.includes("etsy"), `${p.slug} : annonce Etsy sans boutique Etsy`);
      }
    }
  });

  it("aucun prix, aucune note ni aucun avis dans les textes", () => {
    for (const p of publies) {
      const texte = [p.resume, ...p.pourquoi, p.usage].join(" ");
      assert.doesNotMatch(texte, PRIX_OU_NOTE, p.slug);
    }
  });

  it("visuel local (public/produits) ou aucun", () => {
    for (const p of PRODUITS) if (p.image) assert.match(p.image, new RegExp(`^/produits/${p.slug}\\.webp$`), p.slug);
  });
});

describe("Relevé des ASIN (src/lib/catalogue/asins.json)", () => {
  it("chaque ASIN relevé vise un produit du catalogue, avec sa date et le titre lu sur Amazon", async () => {
    const asins = (await import("../src/lib/catalogue/asins.json", { with: { type: "json" } })).default as Record<string, { asin: string; verifie_le: string; titre: string }>;
    const slugs = new Set(PRODUITS.map((p) => p.slug));
    for (const [slug, a] of Object.entries(asins)) {
      assert.ok(slugs.has(slug), `${slug} : produit inconnu`);
      assert.match(a.asin, /^[0-9A-Z]{10}$/, slug);
      assert.match(a.verifie_le, DATE, slug);
      assert.ok(a.titre.trim(), `${slug} : titre Amazon manquant`);
    }
  });
});
