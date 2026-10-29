"use client";

import { useEnvies } from "@/lib/envies";

/** Nombre de produits dans la liste d'envies (en-tête). */
export function EnviesCount() {
  const { slugs } = useEnvies();
  if (slugs.length === 0) return null;
  return <span className="ml-2 rounded-full bg-accent px-2.5 py-0.5 font-sans text-xs font-semibold tracking-normal text-paper not-italic [animation:kd-beat_0.6s_ease-out]">{slugs.length}</span>;
}
