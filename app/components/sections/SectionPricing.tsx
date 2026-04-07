import Link from "next/link";
import { Check, Zap } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period?: string;
  subtitle?: string;
  features: string[];
  highlighted?: boolean;
  cta_text?: string;
  cta_url?: string;
  badge?: string;
}

interface PricingContent {
  title?: string;
  subtitle?: string;
  plans?: Plan[];
}

interface Props {
  content: Record<string, unknown>;
}

export function SectionPricing({ content }: Props) {
  const c = content as PricingContent;
  const title    = c.title    || "Тарифы";
  const subtitle = c.subtitle || "";
  const plans    = c.plans;

  if (!plans || plans.length === 0) return null;

  return (
    <section id="pricing" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col border-2 transition-shadow ${
                plan.highlighted
                  ? "border-indigo-500 bg-indigo-600 text-white shadow-xl shadow-indigo-500/20"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {(plan.badge || plan.highlighted) && (
                <div className={`text-xs font-semibold uppercase tracking-wide mb-3 ${
                  plan.highlighted ? "text-indigo-200" : "text-indigo-500 dark:text-indigo-400"
                }`}>
                  {plan.badge || "Популярный"}
                </div>
              )}

              {/* Name */}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              {plan.subtitle && (
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
                  {plan.subtitle}
                </p>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className={`text-sm ${plan.highlighted ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
                    / {plan.period}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${plan.highlighted ? "text-indigo-200" : "text-indigo-500 dark:text-indigo-400"}`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.cta_url || "https://pro.ezze.site/register"}
                className={`w-full text-center py-3 px-6 rounded-xl font-medium text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                }`}
              >
                {plan.cta_text || "Начать бесплатно"}
              </Link>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8 flex items-center justify-center gap-1.5">
          <Zap size={13} className="text-indigo-400" />
          Бесплатный тариф доступен без кредитной карты
        </p>
      </div>
    </section>
  );
}
