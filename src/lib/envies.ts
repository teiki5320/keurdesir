"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * « Mes envies » : slugs des produits mis de côté, gardés dans le navigateur (sans compte).
 * Synchronisés entre les onglets et entre les composants de la page.
 */
const STORAGE_KEY = "keurdesir-envies-v1";
const EVENT = "keurdesir:envies";
const EMPTY: string[] = [];

let cacheRaw: string | null = null;
let cacheList: string[] = EMPTY;

function read(): string[] {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    /* stockage indisponible (navigation privée) */
  }
  if (raw === cacheRaw) return cacheList;
  cacheRaw = raw;
  try {
    const parsed = raw ? JSON.parse(raw) : [];
    cacheList = Array.isArray(parsed) ? parsed.filter((s): s is string => typeof s === "string") : EMPTY;
  } catch {
    cacheList = EMPTY;
  }
  return cacheList;
}

function write(next: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    return;
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  const onStorage = (e: StorageEvent) => e.key === STORAGE_KEY && onChange();
  window.addEventListener("storage", onStorage);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(EVENT, onChange);
  };
}

export function useEnvies() {
  const slugs = useSyncExternalStore(subscribe, read, () => EMPTY);
  const toggle = useCallback((slug: string) => {
    const current = read();
    write(current.includes(slug) ? current.filter((s) => s !== slug) : [slug, ...current]);
  }, []);
  /** Ajoute plusieurs produits (liste partagée), sans doublon. */
  const addAll = useCallback((add: string[]) => {
    const current = read();
    write([...current, ...add.filter((s) => !current.includes(s))]);
  }, []);
  return { slugs, has: (slug: string) => slugs.includes(slug), toggle, addAll };
}
