interface FAQItem {
  question: string;
  answer: string;
}

interface FAQContent {
  title?: string;
  items?: FAQItem[];
}

interface Props {
  content: Record<string, unknown>;
}

export function SectionFAQ({ content }: Props) {
  const c = content as FAQContent;
  const title = c.title || "Частые вопросы";
  const items = c.items;

  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{title}</h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.question}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
