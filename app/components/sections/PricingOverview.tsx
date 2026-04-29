"use client";
/**
 * PricingOverview — компактная сводка тарифов на главной (ezze.site/).
 *
 * Зачем: общий блок Pricing на главной не имел смысла, потому что у каждого
 * продукта свои plan_prices в app_settings (UNIQUE product,key). Здесь
 * показываем по карточке на продукт с минимальной ценой ("от X сум/мес")
 * и кнопкой → /[slug]#pricing с полным сравнением.
 *
 * Источник цен: getPlanPricesForProducts(slugs) — один запрос на все продукты.
 */
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getPlanPricesForProducts } from "../../lib/supabase";
import { type Lang, tr } from "../../lib/i18n";

interface ProductLite {
  slug: string;
  name: string;
  icon: LucideIcon;
  color: string;
  comingSoon?: boolean;
}

interface Props {
  productList: ProductLite[];
  lang: Lang;
}

function lowestNonFreePrice(prices: Record<string, number> | undefined): number | null {
  if (!prices) return null;
  const candidates = ["pro", "enterprise"]
    .map((k) => prices[k])
    .filter((v): v is number => typeof v === "number" && v > 0);
  if (candidates.length === 0) return null;
  return Math.min(...candidates);
}

export function PricingOverview({ productList, lang }: Props) {
  const t = tr[lang];
  const [pricesByProduct, setPricesByProduct] = useState<Record<string, Record<string, number>>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slugs = productList.map((p) => p.slug);
    getPlanPricesForProducts(slugs)
      .then((data) => {
        setPricesByProduct(data);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, [productList]);

  return (
    <section id="pricing" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {t.pricing_overview_title}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t.pricing_overview_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productList.map((product) => {
            const Icon = product.icon;
            const prices = pricesByProduct[product.slug];
            const min = lowestNonFreePrice(prices);
            const priceLabel = !loaded
              ? "…"
              : min === null
                ? t.pricing_overview_free
                : `${t.pricing_overview_from} ${min.toLocaleString("ru-RU")} ${t.pricing_overview_per_month}`;
            const priceClass = min === null && loaded
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-gray-900 dark:text-white";

            return (
              <Link
                key={product.slug}
                href={`/${product.slug}#pricing`}
                className="group flex items-center gap-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md transition-all"
              >
                <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                      {product.name}
                    </h3>
                    {product.comingSoon && (
                      <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-1.5 py-0.5 rounded-full">
                        {t.coming_soon}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm font-medium ${priceClass}`}>{priceLabel}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all"
                />
              </Link>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8">
          {t.pricing_free_note}
        </p>
      </div>
    </section>
  );
}
