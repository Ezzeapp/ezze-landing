interface ReviewItem {
  author: string;
  role?: string;
  text: string;
  rating?: number;
}

interface ReviewsContent {
  title?: string;
  items?: ReviewItem[];
}

interface Props {
  content: Record<string, unknown>;
}

export function SectionReviews({ content }: Props) {
  const c = content as ReviewsContent;
  const title = c.title || "Отзывы";
  const items = c.items;

  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-transparent dark:border-gray-800">
              {item.rating && (
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span
                      key={j}
                      className={`text-lg ${j < item.rating! ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{item.text}</p>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">{item.author}</div>
                {item.role && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">{item.role}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
