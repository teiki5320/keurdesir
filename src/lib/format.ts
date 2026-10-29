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
