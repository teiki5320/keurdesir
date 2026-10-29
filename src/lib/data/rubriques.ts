import "server-only";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { renderConseil } from "./conseils";

/** Guide d'une rubrique (content/rubriques/<slug>.md, parties en « ## »), en HTML ; null s'il n'est pas encore écrit. */
export function getGuideRubrique(slug: string): string | null {
  const file = join(process.cwd(), "content", "rubriques", `${slug}.md`);
  return existsSync(file) ? renderConseil(readFileSync(file, "utf8").trim()) : null;
}
