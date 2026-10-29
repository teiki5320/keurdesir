import { RUBRIQUES } from "@/lib/rubriques";

/** Menu principal (en-tête et menu mobile) : la boutique (tous les produits, par rubrique) et les Top 10. Choix de Jean du 29/10/2026. */
export const NAV = [
  { href: "/boutique", label: "Boutique" },
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
