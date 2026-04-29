"use client";
/**
 * LivePricing — клиентский компонент тарифов.
 *
 * Архитектура:
 *   app_settings (UNIQUE product,key) → plan_prices / plan_names per-product
 *   landing_sections.{product}.pricing → структура блока (фичи, кнопки, описание)
 *
 * При указании product: фетчит plan_prices/plan_names именно для этого продукта.
 * Без product: тянет общие (legacy) — но на главной такой блок мы больше не рендерим,
 * вместо него — компонент PricingOverview (карточки по продуктам).
 */
import { useEffect, useState } from "react";
import { SectionPricing } from "./SectionPricing";
import { getAppSettings } from "../../lib/supabase";
import type { Lang } from "../../lib/i18n";

interface Props {
  content: Record<string, unknown>;
  lang?: Lang;
  /** slug продукта — например "beauty", "cleaning". Если не указан — фетч без фильтра. */
  product?: string;
}

export function LivePricing({ content, lang = "ru", product }: Props) {
  const [planPrices, setPlanPrices] = useState<Record<string, number> | undefined>(undefined);
  const [planNames, setPlanNames] = useState<Record<string, string> | undefined>(undefined);

  useEffect(() => {
    getAppSettings(["plan_prices", "plan_names"], product)
      .then((data) => {
        if (data.plan_prices && typeof data.plan_prices === "object") {
          setPlanPrices(data.plan_prices as Record<string, number>);
        }
        if (data.plan_names && typeof data.plan_names === "object") {
          setPlanNames(data.plan_names as Record<string, string>);
        }
      })
      .catch(() => {});
  }, [product]);

  return <SectionPricing content={content} lang={lang} planPrices={planPrices} planNames={planNames} />;
}
