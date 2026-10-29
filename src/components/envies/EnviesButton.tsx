"use client";

import { Heart } from "lucide-react";
import { useEnvies } from "@/lib/envies";

/** « Ajouter à mes envies » / « Dans mes envies ». */
export function EnviesButton({ slug, compact = false, className = "" }: { slug: string; compact?: boolean; className?: string }) {
  const { has, toggle } = useEnvies();
  const dedans = has(slug);
  const label = dedans ? "Dans mes envies" : "Ajouter à mes envies";
  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={dedans}
      aria-label={compact ? label : undefined}
      title={compact ? label : undefined}
      className={
        compact
          ? `flex size-11 items-center justify-center rounded-full bg-paper/80 backdrop-blur transition hover:text-accent ${dedans ? "text-accent" : "text-ink"} ${className}`
          : `btn-secondary min-h-11 ${dedans ? "border-accent text-accent" : ""} ${className}`
      }
    >
      <Heart className={`size-4 ${dedans ? "fill-current" : ""}`} aria-hidden />
      {!compact && label}
    </button>
  );
}
