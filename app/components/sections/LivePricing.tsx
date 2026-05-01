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

interface Props {
  content: Record<string, unknown>;
  lang?: Lang;
  /** slug продукта — например "beauty", "cleaning". Если не указан — фетч без фильтра. */
  product?: string;
}

const PRICE_KEYS = ["free", "pro", "enterprise"] as const;

interface BuiltPlan {
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAppSettings(["plan_prices", "plan_names", "plan_features"], product)
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
  if (!hasContentPlans && planPrices) {
    const t = tr[lang];
    const builtPlans: BuiltPlan[] = PRICE_KEYS
      .filter((k) => planPrices[k] !== undefined)
      .map((k, i) => {
        const name = (planNames && planNames[k]) || (k === "free" ? "Free" : k === "pro" ? "Pro" : "Enterprise");
        const features = (planFeatures && Array.isArray(planFeatures[k])) ? planFeatures[k] : [];
        return {
          name,
          price: formatPrice(planPrices[k]),
          period: "мес",
          features,
          highlighted: i === 1,
          cta_text: t.hero_cta1,
          cta_url: product ? `https://app.ezze.site/register?product=${product}` : "https://app.ezze.site/register",
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
