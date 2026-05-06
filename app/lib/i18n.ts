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

export const APP_URL = "https://app.ezze.site";

export function registerUrl(plan?: string, product?: string) {
  const p = new URLSearchParams();
  if (plan) p.set("plan", plan);
  if (product) p.set("product", product);
  const qs = p.toString();
  return `${APP_URL}/register${qs ? `?${qs}` : ""}`;
}
