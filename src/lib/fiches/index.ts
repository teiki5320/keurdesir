import type { FicheLongue, FicheQuestion } from "../types";
import { fiches as bineBine } from "./bine-bine";
import { fiches as coffretsCadeaux } from "./coffrets-cadeaux";
import { fiches as encensoirs } from "./encensoirs";
import { fiches as kariteSoins } from "./karite-soins";
import { fiches as tenuesDeNuit } from "./tenues-de-nuit";
import { fiches as thiourayeEncens } from "./thiouraye-encens";

/** Fiches détaillées de tous les produits, par slug (docs/FICHES.md). Un produit sans fiche n'affiche rien de plus. */
const FICHES: Record<string, FicheLongue | undefined> = {
  ...bineBine,
  ...coffretsCadeaux,
  ...encensoirs,
  ...kariteSoins,
  ...tenuesDeNuit,
  ...thiourayeEncens,
};

export function getFiche(slug: string): FicheLongue | null {
  return FICHES[slug] ?? null;
}

export interface PartieFiche {
  id: string;
  titre: string;
  texte: string;
}

/** Parties d'une fiche, dans l'ordre d'affichage. */
export function partiesFiche(f: FicheLongue): PartieFiche[] {
  return [
    { id: "fiche-origine", titre: "Origine et tradition", texte: f.origine },
    { id: "fiche-choisir", titre: "Comment bien le choisir", texte: f.choisir },
    { id: "fiche-entretien", titre: "Entretien et conservation", texte: f.entretien },
    { id: "fiche-pour-qui", titre: "Pour qui, pour quelle occasion", texte: f.pourQui },
  ];
}

const LIEN = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** Texte sans la syntaxe des liens (données FAQPage, comptage des mots). */
export const texteSimple = (t: string) => t.replace(LIEN, "$1");

/** Chemins des liens internes d'un texte. */
export const cheminsDuTexte = (t: string) => [...t.matchAll(LIEN)].map((m) => m[2]);

/** Texte découpé en morceaux de texte et en liens internes, pour l'affichage. */
export function morceaux(t: string): Array<string | { text: string; href: string }> {
  const out: Array<string | { text: string; href: string }> = [];
  let fin = 0;
  for (const m of t.matchAll(LIEN)) {
    if (m.index > fin) out.push(t.slice(fin, m.index));
    out.push({ text: m[1], href: m[2] });
    fin = m.index + m[0].length;
  }
  if (fin < t.length) out.push(t.slice(fin));
  return out;
}

/** Tout le texte d'une fiche, sans la syntaxe des liens (FAQ comprise). */
export function texteFiche(f: FicheLongue): string {
  const faq = f.faq.flatMap((q: FicheQuestion) => [q.question, q.reponse]);
  return texteSimple([f.origine, f.choisir, f.entretien, f.pourQui, ...faq].join("\n\n"));
}

export const compterMots = (s: string) => texteSimple(s).trim().split(/\s+/).filter(Boolean).length;
