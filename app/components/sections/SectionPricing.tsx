import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingContent {
  title?: string;
  plans?: Plan[];
}

interface Props {
  content: Record<string, unknown>;
}

export function SectionPricing({ content }: Props) {
  const c = content as PricingContent;
  const title = c.title || "Тарифы";
  const plans = c.plans;

  if (!plans || plans.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border-2 ${
                plan.highlighted
                  ? "border-indigo-500 bg-indigo-600 text-white"
                  : "border-gray-200 bg-white text-gray-900"
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-semibold text-indigo-200 uppercase tracking-wide mb-3">
                  Популярный
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className={`text-sm ${plan.highlighted ? "text-indigo-200" : "text-gray-500"}`}>
                    / {plan.period}
                  </span>
                )}
              </div>
              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check
                      size={16}
                      className={`shrink-0 ${plan.highlighted ? "text-indigo-200" : "text-indigo-500"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
