import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { todayInParis } from "../src/lib/conseils/article";
import { readLedger } from "../src/lib/lastmod";
import { DATE } from "./aide";

describe("Registre des dates du plan du site (src/lib/lastmod.json)", () => {
  it("dates valides et jamais dans le futur", () => {
    const today = todayInParis();
    for (const [cle, { h, d }] of Object.entries(readLedger())) {
      assert.match(h, /^[0-9a-f]{16}$/, cle);
      assert.match(d, DATE, cle);
      assert.ok(d <= today, `${cle} : ${d} dans le futur`);
    }
  });
});
