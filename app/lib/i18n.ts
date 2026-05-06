export type Lang = "ru" | "en" | "uz";

export const LANGS: Lang[] = ["ru", "en", "uz"];

export const LANG_LABELS: Record<Lang, string> = {
  ru: "RU",
  en: "EN",
  uz: "UZ",
};

export const LANG_NAMES: Record<Lang, string> = {
  ru: "Русский",
  en: "English",
  uz: "O'zbekcha",
};

// Legacy `tr` Record kept only so dead-code components (HomeContent.tsx,
// sections/*, BackLink.tsx) still type-check. New homepage uses tr(lang)
// from ./content.ts. Empty strings here are fine — legacy components are
// not imported by the new app/page.tsx and never render.
export const tr: Record<Lang, Record<string, string>> = {
  ru: new Proxy({}, { get: () => "" }) as Record<string, string>,
  en: new Proxy({}, { get: () => "" }) as Record<string, string>,
  uz: new Proxy({}, { get: () => "" }) as Record<string, string>,
};
