"use client";

import { useEnvies } from "@/lib/envies";

/** Nombre de produits dans la liste d'envies (en-tête). */
export function EnviesCount() {
  const { slugs } = useEnvies();
  if (slugs.length === 0) return null;
  return <span className="ml-2 rounded-full bg-accent px-2.5 py-0.5 font-sans text-xs font-semibold text-paper not-italic">{slugs.length}</span>;
}
