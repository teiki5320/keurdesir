const longDate = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** « 2026-09-28 » → « 28 septembre 2026 ». */
export function formatDate(iso: string): string {
  return longDate.format(new Date(`${iso}T12:00:00Z`));
}

/** Espaces insécables françaises avant « ? ! : ; » et à l'intérieur des guillemets. */
export function typo(text: string): string {
  return text
    .replace(/\s+([?!:;»])/g, " $1")
    .replace(/«\s+/g, "« ");
}

/**
 * Texte d'introduction coupé après sa première phrase : le début s'affiche en haut de la page, juste avant les produits,
 * la suite plus bas, avec les explications. Une première phrase trop courte (moins de 60 caractères) garde la suivante.
 */
export function premierePhrase(text: string): [string, string] {
  const re = /[.!?…](?=\s+[A-ZÀ-ÖØ-Þ«])/g;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    if (m.index + 1 >= 60) return [text.slice(0, m.index + 1).trim(), text.slice(m.index + 1).trim()];
  }
  return [text.trim(), ""];
}
