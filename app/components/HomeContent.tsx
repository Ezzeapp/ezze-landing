"use client";
import Link from "next/link";
import {
  Zap, Check, Smartphone, Gift, ChevronDown,
  Globe, Scissors, Shirt, WashingMachine, Stethoscope, Leaf, GraduationCap,
  CalendarDays, UtensilsCrossed, Building2, Car, Hammer,
  ShoppingBag, Heart, Dumbbell, Package, Truck, Camera,
  Music, Dog, Flower2, Wrench, Cpu, BookOpen, Coffee, Bike,
  Baby, Store, ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Suspense, useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, STATS } from "../lib/defaults";
import { getAppSettings } from "../lib/supabase";
import { SectionCTA } from "./sections/SectionCTA";
import { PricingOverview } from "./sections/PricingOverview";
import Footer from "./Footer";
import { type Lang, LANGS, tr } from "../lib/i18n";

const ICON_MAP: Record<string, LucideIcon> = {
  Globe, Scissors, Shirt, WashingMachine, Stethoscope, Leaf, GraduationCap,
  CalendarDays, UtensilsCrossed, Building2, Car, Hammer,
  ShoppingBag, Heart, Dumbbell, Package, Truck, Camera,
  Music, Dog, Flower2, Wrench, Cpu, BookOpen, Coffee, Bike,
  Baby, Store, ClipboardList, Zap,
};

function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Globe;
}

interface ProductConfigItem {
  slug: string;
  label: string;
  iconName: string;
  url: string;
  hidden: boolean;
  comingSoon: boolean;
  description?: string;
  color?: string;
  features?: string[];
}

interface AboutConfig {
  company_name?: string;
  tagline?: string;
  description?: string;
  founded_year?: string;
  story?: string;
}

interface ContactsConfig {
  phone?: string;
  phone2?: string;
  email?: string;
  address?: string;
  telegram?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  website?: string;
}

interface MainStats {
  items?: { value: string; label: string }[];
}

interface Props {
  sections: {
    hero?: Record<string, unknown>;
    stats?: Record<string, unknown>;
    pricing?: Record<string, unknown>;
    cta?: Record<string, unknown>;
  };
  settings?: Record<string, unknown>;
}

function HistoryBlock({ history }: { history: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-8 text-left max-w-2xl mx-auto">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors mx-auto"
      >
        {open ? "Скрыть историю компании" : "Читать историю компании"}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 text-left">
          {history}
        </div>
      )}
    </div>
  );
}

function HomeContentInner({ sections, settings: initialSettings }: Props) {
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<Lang>("ru");
  const [settings, setSettings] = useState<Record<string, unknown>>(initialSettings || {});

  useEffect(() => {
    const sp = searchParams.get("lang") as Lang | null;
    const saved = localStorage.getItem("ezze_lang") as Lang | null;
    setLang((LANGS.includes(sp as Lang) ? sp : LANGS.includes(saved as Lang) ? saved : "ru") as Lang);
  }, [searchParams]);

  useEffect(() => {
    const handler = (e: Event) => {
      const l = (e as CustomEvent<{ lang: Lang }>).detail?.lang;
      if (l && LANGS.includes(l)) setLang(l);
    };
    window.addEventListener("ezze_lang_change", handler);
    return () => window.removeEventListener("ezze_lang_change", handler);
  }, []);

  // Fetch fresh settings from Supabase at runtime (so changes from superadmin apply without rebuild)
  useEffect(() => {
    getAppSettings(["products_config", "about_config", "contacts_config"])
      .then((data) => { if (Object.keys(data).length > 0) setSettings(data); })
      .catch(() => {});
  }, []);

  // Скролл к якорю после перехода с другой страницы (например /beauty → /#products)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Небольшая задержка чтобы DOM успел отрендериться
      const t = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return () => clearTimeout(t);
    }
  }, []);

  const t = tr[lang];

  const statsContent = (sections.stats || {}) as MainStats;
  const aboutConfig = settings?.about_config as AboutConfig | undefined;
  const contactsConfig = settings?.contacts_config as ContactsConfig | undefined;

  const heroBadge = t.hero_badge;
  const ctaPrimary = t.hero_cta1;
  const ctaSecondary = t.hero_cta2;

  const stats =
    statsContent.items && statsContent.items.length > 0
      ? statsContent.items
      : STATS.map((s, i) => ({ value: s.value, label: t[`stat_label_${i}`] ?? s.label }));

  // Products grid: use products_config from DB if available, else hardcoded defaults
  const productList = useMemo(() => {
    const configList = settings?.products_config as ProductConfigItem[] | undefined;
    if (Array.isArray(configList) && configList.length > 0) {
      return configList
        .filter((c) => !c.hidden && c.slug !== "main")
        .map((c) => {
          const def = PRODUCTS.find((p) => p.slug === c.slug);
          return {
            slug: c.slug,
            name: c.label,
            description: c.description || def?.description || "",
            icon: getIcon(c.iconName),
            color: c.color || def?.color || "from-gray-500 to-gray-600",
            url: c.url,
            features: c.features?.length ? c.features : (def?.features || []),
            comingSoon: c.comingSoon,
          };
        });
    }
    return PRODUCTS;
  }, [settings?.products_config]);

  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Zap size={14} />
              <span>{heroBadge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.hero_title}{" "}
              <span className="text-indigo-600 dark:text-indigo-400">{t.hero_title_accent}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">{t.hero_subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://pro.ezze.site/register"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                {ctaPrimary}
              </Link>
              <Link
                href="#products"
                className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-700 px-8 py-4 rounded-xl text-lg font-medium hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
              >
                {ctaSecondary}
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800 py-12 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.products_title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">{t.products_subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productList.map((product) => {
                const Icon = product.icon;
                return (
                  <Link
                    key={product.slug}
                    href={`/${product.slug}`}
                    className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-600 hover:shadow-lg transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">{product.name}</h3>
                      {product.comingSoon && (
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">
                          {t.coming_soon}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
                    <ul className="space-y-1">
                      {product.features.map((f) => (
                        <li key={f} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                          <Check size={12} className="text-indigo-400 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing overview — у каждого продукта свои тарифы, на главной показываем сводку.
            Полные таблицы цен — на /[slug]#pricing. */}
        <PricingOverview productList={productList} lang={lang} />

        {/* About */}
        <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.about_title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              {aboutConfig?.description || t.about_subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Zap size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t.about_f1_title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t.about_f1_text}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t.about_f2_title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t.about_f2_text}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Gift size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t.about_f3_title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t.about_f3_text}</p>
              </div>
            </div>
            {aboutConfig?.founded_year && (
              <p className="mt-8 text-sm text-gray-400 dark:text-gray-600">
                {aboutConfig.company_name || "Ezze"} — {t.about_since || "с"} {aboutConfig.founded_year}
              </p>
            )}
            {aboutConfig?.story && <HistoryBlock history={aboutConfig.story} />}
          </div>
        </section>

        <SectionCTA
          content={sections.cta || {}}
          lang={lang}
          fallback={{
            title: t.cta_title,
            subtitle: t.cta_subtitle,
            button_text: t.cta_button,
            button_url: "https://pro.ezze.site/register",
          }}
        />
      </main>
      <Footer lang={lang} contacts={contactsConfig} />
    </>
  );
}

export function HomeContent({ sections, settings }: Props) {
  return (
    <Suspense fallback={<main className="flex-1" />}>
      <HomeContentInner sections={sections} settings={settings} />
    </Suspense>
  );
}
