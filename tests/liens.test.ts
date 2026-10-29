import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { PRODUITS } from "../src/lib/catalogue/produits";
import { AMAZON_TAG, AMAZON_TAGS, AWIN_AFFID, AWIN_ETSY_MID, amazonUrl, etsyUrl, liensMarchands } from "../src/lib/liens";

const base = { boutiques: ["amazon", "etsy"] as Array<"amazon" | "etsy">, amazon: null, etsy: null, recherche: "bine bine perles de taille" };

describe("Liens Amazon", () => {
  it("l'identifiant de suivi de Keur Désir est keurdesir-21 sur tous les emplacements", () => {
    assert.equal(process.env.NEXT_PUBLIC_AMAZON_TAG ? AMAZON_TAG : "keurdesir-21", AMAZON_TAG);
    for (const tag of Object.values(AMAZON_TAGS)) assert.match(tag, /^[a-z0-9-]+-21$/);
  });

  it("fiche Amazon si l'ASIN est vérifié, recherche sinon, toujours avec le tag", () => {
    assert.equal(amazonUrl({ ...base, amazon: { asin: "B0ABCDEF12", verifie_le: "2026-10-29" } }, "fiche"), `https://www.amazon.fr/dp/B0ABCDEF12?tag=${AMAZON_TAGS.fiche}`);
    const recherche = new URL(amazonUrl(base, "top"));
    assert.equal(recherche.pathname, "/s");
    assert.equal(recherche.searchParams.get("k"), "bine bine perles de taille");
    assert.equal(recherche.searchParams.get("tag"), AMAZON_TAGS.top);
  });
});

describe("Liens Etsy (Awin)", () => {
  it("aucun bouton Etsy tant que les identifiants Awin ne sont pas réglés", () => {
    if (AWIN_AFFID && AWIN_ETSY_MID) return;
    assert.equal(etsyUrl(base), null);
    assert.deepEqual(liensMarchands(base, "fiche").map((l) => l.boutique), ["amazon"]);
  });

  it("un produit vendu sur Etsy impose des identifiants Awin réglés", () => {
    const etsy = PRODUITS.filter((p) => p.isPublished && p.boutiques.includes("etsy"));
    if (etsy.length === 0) return;
    assert.ok(AWIN_AFFID && AWIN_ETSY_MID, `${etsy.length} produit(s) Etsy sans identifiants Awin (src/lib/liens.ts)`);
    for (const p of etsy) {
      const u = new URL(etsyUrl(p)!);
      assert.equal(u.hostname, "www.awin1.com");
      assert.ok(new URL(u.searchParams.get("ued")!).hostname.endsWith("etsy.com"), p.slug);
    }
  });
});
