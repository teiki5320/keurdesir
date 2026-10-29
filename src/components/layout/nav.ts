import { RUBRIQUES } from "@/lib/rubriques";

/** Menu principal (en-tête) : les rubriques les plus visitées, puis les Top 10. */
export const NAV = [
  { href: "/djongue", label: "Le djongué" },
  { href: "/bine-bine", label: "Bine-bine" },
  { href: "/thiouraye-encens", label: "Encens" },
  { href: "/karite-soins", label: "Soins" },
  { href: "/coffrets-cadeaux", label: "Cadeaux" },
  { href: "/top-10", label: "Top 10" },
] as const;

/** Toutes les rubriques (pied de page, menu mobile). */
export const RUBRIQUES_NAV = RUBRIQUES.map((r) => ({ href: `/${r.slug}`, label: r.nom }));

/** Pages secondaires (pied de page, menu mobile). */
export const SECONDARY_NAV = [
  { href: "/conseils", label: "Tous les articles" },
  { href: "/lexique", label: "Lexique" },
  { href: "/a-propos", label: "À propos" },
] as const;
