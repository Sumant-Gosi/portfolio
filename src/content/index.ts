import { de } from "./de";
import { en } from "./en";
import type { Dictionary, Locale } from "./types";

export const locales: readonly Locale[] = ["en", "de"];
export const defaultLocale: Locale = "en";

// Language names are shown in their own language, so they are not translated.
export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
};

const dictionaries: Record<Locale, Dictionary> = { en, de };

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
