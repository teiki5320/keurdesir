import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { isRubrique } from "../src/lib/rubriques";
import { liensInternes, pagesInternes, racine } from "./aide";

const dir = join(racine, "content", "rubriques");
const guides = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".md")) : [];
const mots = (t: string) => t.replace(/[#*_>\[\]()]/g, " ").split(/\s+/).filter(Boolean).length;

describe("Guides des rubriques (content/rubriques)", () => {
  it("un guide par rubrique existante, sans titre h1, en 2 à 5 parties", () => {
    for (const f of guides) {
      const slug = f.replace(/\.md$/, "");
      assert.ok(isRubrique(slug), `${f} : rubrique inconnue`);
      const texte = readFileSync(join(dir, f), "utf8");
      assert.doesNotMatch(texte, /^#\s/m, `${f} : pas de titre « # » (le h1 est le nom de la rubrique)`);
      const parties = (texte.match(/^##\s/gm) ?? []).length;
      assert.ok(parties >= 2 && parties <= 5, `${f} : ${parties} partie(s)`);
    }
  });

  it("300 à 700 mots, liens internes valides", () => {
    const pages = pagesInternes();
    for (const f of guides) {
      const texte = readFileSync(join(dir, f), "utf8");
      const n = mots(texte);
      assert.ok(n >= 300 && n <= 700, `${f} : ${n} mots`);
      for (const l of liensInternes(texte)) assert.ok(pages.has(l), `${f} : lien « ${l} » introuvable`);
    }
  });
});
