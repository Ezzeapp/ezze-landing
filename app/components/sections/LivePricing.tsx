"use client";
/**
 * LivePricing — умный клиентский компонент тарифов.
 *
 * Архитектура цен:
 *   app_settings.plan_prices  →  единый источник цен для всей платформы
 *   landing_sections.*.pricing  →  структура блока (название, фичи, кнопки, описание)
 *
 * LivePricing фетчит plan_prices сам при монтировании и перетирает цены
 * из JSON-контента. Работает везде: главная, /beauty, /clinic, etc.
 */
import { useEffect, useState } from "react";
import { SectionPricing } from "./SectionPricing";
import { getAppSettings } from "../../lib/supabase";
import type { Lang } from "../../lib/i18n";

interface Props {
  content: Record<string, unknown>;
  lang?: Lang;
}

export function LivePricing({ content, lang = "ru" }: Props) {
  const [planPrices, setPlanPrices] = useState<Record<string, number> | undefined>(undefined);
  const [planNames, setPlanNames] = useState<Record<string, string> | undefined>(undefined);

  useEffect(() => {
    getAppSettings(["plan_prices", "plan_names"])
      .then((data) => {
        if (data.plan_prices && typeof data.plan_prices === "object") {
          setPlanPrices(data.plan_prices as Record<string, number>);
        }
        if (data.plan_names && typeof data.plan_names === "object") {
          setPlanNames(data.plan_names as Record<string, string>);
        }
      })
      .catch(() => {});
  }, []);

  return <SectionPricing content={content} lang={lang} planPrices={planPrices} planNames={planNames} />;
}
