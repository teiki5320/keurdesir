import { top10BineBine } from "./bine-bine";
import { top10Encens } from "./encens";
import { top10Karite } from "./karite";
import { top10TenuesCadeaux } from "./tenues-cadeaux";
import type { Top10 } from "./types";

/**
 * Les sélections « Top 10 », dans l'ordre des pastilles. Une sélection n'est publiée que lorsque ses 10 produits
 * existent dans le catalogue (src/lib/catalogue) : voir tests/top10.test.ts.
 */
export const TOP10S: Top10[] = [...top10BineBine, ...top10Encens, ...top10Karite, ...top10TenuesCadeaux];
