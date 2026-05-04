"use client";
/**
 * LivePricing — клиентский компонент тарифов.
 *
 * Архитектура:
 *   app_settings (UNIQUE product,key) → plan_prices / plan_names / plan_features per-product
 *   landing_sections.{product}.pricing → опциональная структура блока (заголовок, кнопки, описание)
 *
 * Если в landing_sections нет plans — собираем их сами из app_settings:
 *   plan_prices.free / pro / enterprise → цены
 *   plan_names.free / pro / enterprise → названия
 *   plan_features.free / pro / enterprise → массивы фич
 */
import { useEffect, useState } from "react";
import { SectionPricing } from "./SectionPricing";
import { getAppSettings } from "../../lib/supabase";
import { type Lang, tr } from "../../lib/i18n";
import { PRODUCTS } from "../../lib/defaults";

interface Props {
  content: Record<string, unknown>;
  lang?: Lang;
  /** slug продукта — например "beauty", "cleaning". Если не указан — фетч без фильтра. */
  product?: string;
}

// Ключи тарифов в БД (free + pro + enterprise=Business). Free в admin не сохраняется в plan_prices,
// поэтому ниже мы достраиваем его в planPrices с ценой 0, иначе сдвигались бы названия и цены.
const PRICE_KEYS = ["free", "pro", "enterprise"] as const;
type PriceKey = typeof PRICE_KEYS[number];

interface BuiltPlan {
  key: PriceKey;
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  cta_text?: string;
  cta_url?: string;
}

function formatPrice(n: number): string {
  if (n === 0) return "0";
  return n.toLocaleString("ru-RU") + " сум";
}

export function LivePricing({ content, lang = "ru", product }: Props) {
  const [planPrices, setPlanPrices] = useState<Record<string, number> | undefined>(undefined);
  const [planNames, setPlanNames] = useState<Record<string, string> | undefined>(undefined);
  const [planFeatures, setPlanFeatures] = useState<Record<string, string[]> | undefined>(undefined);
  const [planActive, setPlanActive] = useState<Record<string, boolean> | undefined>(undefined);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAppSettings(["plan_prices", "plan_names", "plan_features", "plan_active"], product)
      .then((data) => {
        if (data.plan_prices && typeof data.plan_prices === "object") {
          setPlanPrices(data.plan_prices as Record<string, number>);
        }
        if (data.plan_names && typeof data.plan_names === "object") {
          setPlanNames(data.plan_names as Record<string, string>);
        }
        if (data.plan_features && typeof data.plan_features === "object") {
          setPlanFeatures(data.plan_features as Record<string, string[]>);
        }
        if (data.plan_active && typeof data.plan_active === "object") {
          setPlanActive(data.plan_active as Record<string, boolean>);
        }
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, [product]);

  // Если в content нет plans — строим из app_settings
  const c = content as { plans?: BuiltPlan[]; title?: string; subtitle?: string };
  const hasContentPlans = Array.isArray(c.plans) && c.plans.length > 0;

  // Ждём загрузки настроек если в content нет plans (чтобы не моргать пустотой)
  if (!hasContentPlans && !loaded) {
    return null;
  }

  let mergedContent = content;
  if (!hasContentPlans) {
    const t = tr[lang];
    // Free всегда 0 (в admin не сохраняется в plan_prices); добавляем явно чтобы не выпадал
    const prices: Record<string, number> = { free: 0, ...(planPrices || {}) };
    // Регистрация прямо в кабинете продукта; на главной (без product) — к гриду продуктов
    const productInfo = product ? PRODUCTS.find((p) => p.slug === product) : null;
    const ctaUrl = productInfo ? `${productInfo.url}/register` : `/?lang=${lang}#products`;
    const builtPlans: BuiltPlan[] = PRICE_KEYS
      .filter((k) => prices[k] !== undefined)
      .filter((k) => !planActive || planActive[k] !== false)
      .map((k) => {
        const name = (planNames && planNames[k]) || (k === "free" ? "Free" : k === "pro" ? "Pro" : "Business");
        const features = (planFeatures && Array.isArray(planFeatures[k])) ? planFeatures[k] : [];
        return {
          key: k,
          name,
          price: formatPrice(prices[k]),
          period: "мес",
          features,
          highlighted: k === "pro",
          cta_text: t.hero_cta1,
          cta_url: ctaUrl,
        };
      });

    if (builtPlans.length > 0) {
      mergedContent = {
        ...content,
        title: c.title || tr[lang].pricing_title,
        plans: builtPlans,
      };
    }
  }

  return <SectionPricing content={mergedContent} lang={lang} planPrices={planPrices} planNames={planNames} />;
}
