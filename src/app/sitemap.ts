import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { siteConfig } from "@/lib/config";
import { getConseils } from "@/lib/data/conseils";
import { getProduits } from "@/lib/data/produits";
import { getMaintenance } from "@/lib/data/settings";
import { getTop10s } from "@/lib/data/top10";
import { currentHashes, readLedger } from "@/lib/lastmod";
import { LEXIQUE } from "@/lib/lexique";
import { RUBRIQUES } from "@/lib/rubriques";

export const dynamic = "force-static";

/** Jour du dernier commit (date de repli d'une page changée dont le registre n'est pas encore à jour), sinon aujourd'hui. */
function commitDay(): string {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs"], { encoding: "utf8" }).trim() || new Date().toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

/** Dernière mise à jour des pages légales et de la page « À propos ». */
const LEGAL_UPDATED = "2026-10-29";
/** Premier jour du site : date minimale des pages. */
const DEBUT = "2026-10-29";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Site en maintenance : rien à indexer.
  if (getMaintenance().enabled) return [];
  const base = siteConfig.url;
  const produits = getProduits();
  const conseils = getConseils();
  const tops = getTop10s();
  const hashes = await currentHashes();
  const ledger = readLedger();
  const fallback = commitDay();
  const changed = (key: string, added: string) => {
    const known = ledger[key];
    const d = known && known.h === hashes[key] ? known.d : fallback;
    return d > added ? d : added;
  };
  const day = (d: string) => new Date(`${d}T00:00:00Z`);
  const latest = (dates: string[]) => dates.reduce((a, b) => (b > a ? b : a), DEBUT);
  const produitDay = new Map(produits.map((p) => [p.slug, changed(`produit/${p.slug}`, p.ajoute_le)]));
  const conseilDay = new Map(conseils.map((c) => [c.slug, changed(`conseils/${c.slug}`, c.date)]));
  const topDay = new Map(tops.map((t) => [t.slug, changed(`top-10/${t.slug}`, t.updated)]));
  const lastConseil = latest([...conseilDay.values()]);
  const lastTop = latest([...topDay.values()]);
  const page = (path: string, d: string, changeFrequency: "weekly" | "monthly" | "yearly", priority: number) => ({ url: `${base}${path}`, lastModified: day(d), changeFrequency, priority });

  return [
    page("", latest([lastConseil, lastTop, ...produitDay.values()]), "weekly", 1),
    page("/boutique", latest([...produitDay.values()]), "weekly", 0.9),
    ...RUBRIQUES.map((r) => page(`/${r.slug}`, latest([changed(r.slug, DEBUT), ...conseils.filter((c) => c.rubrique === r.slug).map((c) => conseilDay.get(c.slug)!)]), "weekly", 0.9)),
    // Listes encore vides : en noindex, donc absentes du plan du site.
    ...(conseils.length ? [page("/conseils", lastConseil, "weekly", 0.8)] : []),
    ...(tops.length ? [page("/top-10", lastTop, "weekly", 0.8)] : []),
    ...(LEXIQUE.length ? [page("/lexique", DEBUT, "monthly", 0.5)] : []),
    page("/a-propos", LEGAL_UPDATED, "yearly", 0.4),
    ...["/conditions", "/mentions-legales", "/confidentialite"].map((path) => page(path, LEGAL_UPDATED, "yearly", 0.3)),
    ...tops.map((t) => page(`/top-10/${t.slug}`, topDay.get(t.slug)!, "monthly", 0.8)),
    ...produits.map((p) => page(`/produit/${p.slug}`, produitDay.get(p.slug)!, "monthly", 0.7)),
    ...conseils.map((c) => page(`/conseils/${c.slug}`, conseilDay.get(c.slug)!, "monthly", 0.7)),
  ];
}
