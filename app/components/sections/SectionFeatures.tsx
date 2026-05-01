import { Check } from "lucide-react";

interface FeatureItem {
  title: string;
  description?: string;
}

interface FeaturesContent {
  title?: string;
  items?: FeatureItem[];
}

interface Props {
  content: Record<string, unknown>;
  fallbackItems?: string[];
}

export function SectionFeatures({ content, fallbackItems }: Props) {
  const c = content as FeaturesContent;
  const title = c.title || "Возможности";

  // items из БД или fallback (массив строк → FeatureItem)
  const items: FeatureItem[] =
    c.items && c.items.length > 0
      ? c.items
      : (fallbackItems || []).map((f) => ({ title: f }));

  if (items.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center border border-transparent dark:border-gray-800">
              <div className="flex justify-center mb-3">
                <Check size={28} className="text-indigo-500 dark:text-indigo-400" />
              </div>
              <div className="font-medium text-gray-800 dark:text-gray-100 text-sm">{item.title}</div>
              {item.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
