import Link from "next/link";
import { type Lang, tr } from "../../lib/i18n";

interface CTAContent {
  title?: string;
  subtitle?: string;
  button_text?: string;
  button_url?: string;
}

interface Props {
  content: Record<string, unknown>;
  lang?: Lang;
  fallback?: {
    title?: string;
    subtitle?: string;
    button_text?: string;
    button_url?: string;
  };
}

export function SectionCTA({ content, lang = "ru", fallback }: Props) {
  const c = content as CTAContent;
  const t = tr[lang];
  const title = c.title || fallback?.title || t.cta_title;
  const subtitle = c.subtitle || fallback?.subtitle || t.cta_subtitle;
  const buttonText = c.button_text || fallback?.button_text || t.cta_button;
  const buttonUrl = c.button_url || fallback?.button_url || "https://pro.ezze.site/register";

  return (
    <section className="bg-indigo-600 py-20 px-4 text-center text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-indigo-100 text-lg mb-8">{subtitle}</p>
        <Link
          href={buttonUrl}
          className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-50 transition-colors inline-block"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
