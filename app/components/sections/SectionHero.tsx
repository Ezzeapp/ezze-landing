import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { type Lang, tr } from "../../lib/i18n";

interface HeroContent {
  title?: string;
  subtitle?: string;
  badge?: string;
  cta_text?: string;
  cta_url?: string;
}

interface Props {
  content: Record<string, unknown>;
  lang?: Lang;
  fallback: {
    title: string;
    subtitle: string;
    color: string;
    url: string;
    icon: LucideIcon;
    comingSoon?: boolean;
  };
}

export function SectionHero({ content, lang = "ru", fallback }: Props) {
  const c = content as HeroContent;
  const t = tr[lang];
  const title = c.title || fallback.title;
  const subtitle = c.subtitle || fallback.subtitle;
  const ctaText = c.cta_text || t.open_app;
  const ctaUrl = c.cta_url || fallback.url;
  const badge = c.badge;
  const Icon = fallback.icon;

  return (
    <section className={`bg-gradient-to-br ${fallback.color} py-24 px-4 text-white`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-3xl bg-white/20 flex items-center justify-center">
            <Icon size={56} className="text-white" />
          </div>
        </div>
        {badge && (
          <div className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full mb-4">
            {badge}
          </div>
        )}
        <div className="flex items-center justify-center gap-3 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          {fallback.comingSoon && (
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              {t.coming_soon}
            </span>
          )}
        </div>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">{subtitle}</p>
        {!fallback.comingSoon ? (
          <Link
            href={ctaUrl}
            className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-colors inline-block"
          >
            {ctaText}
          </Link>
        ) : (
          <div className="bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-medium inline-block">
            {t.awaiting_launch}
          </div>
        )}
      </div>
    </section>
  );
}
