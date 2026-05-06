"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Sparkles,
  Building2,
  Users,
  Calendar,
  Globe2,
  Moon,
  Check,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { type Lang } from "./lib/i18n";
import { tr } from "./lib/content";
import { MODULES, registerUrl, APP_URL } from "./lib/modules";
import type { ContentDict } from "./lib/content";

function HomeInner() {
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<Lang>("ru");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const sp = searchParams.get("lang") as Lang | null;
    const saved = localStorage.getItem("ezze_lang") as Lang | null;
    setLang(sp ?? saved ?? "ru");
  }, [searchParams]);

  const t = tr(lang);

  return (
    <main className="flex-1">
      <Hero t={t} />
      <Modules t={t} lang={lang} />
      <Features t={t} />
      <Pricing t={t} lang={lang} />
      <FAQ t={t} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <CTA t={t} />
    </main>
  );
}

function Hero({ t }: { t: ContentDict }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 to-transparent dark:from-indigo-950/30 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32 text-center">
        <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
          {t.hero_eyebrow}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t.hero_title_a}
          <br />
          <span className="text-indigo-600 dark:text-indigo-400">
            {t.hero_title_b}
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t.hero_subtitle}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <a
            href={registerUrl()}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            {t.hero_cta_primary}
            <ArrowRight size={16} />
          </a>
          <a
            href="#modules"
            className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            {t.hero_cta_secondary}
          </a>
        </div>
      </div>
    </section>
  );
}

function Modules({ t, lang: _lang }: { t: ContentDict; lang: Lang }) {
  return (
    <section id="modules" className="py-20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t.modules_title}
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            {t.modules_subtitle}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {MODULES.map((m) => {
            const Icon = m.icon;
            const titleKey = `module_${m.slug}_title` as keyof ContentDict;
            const descKey = `module_${m.slug}_desc` as keyof ContentDict;
            const available = m.status === "available";
            return (
              <div
                key={m.slug}
                className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              >
                <div
                  className="size-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: m.accent }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {t[titleKey]}
                  </h3>
                  <span
                    className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${
                      available
                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {available ? t.module_status_available : t.module_status_soon}
                  </span>
                </div>
                {m.release && !available && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                    {t.module_release}: {m.release}
                  </p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
                  {t[descKey]}
                </p>
                {available ? (
                  <a
                    href={registerUrl(undefined, m.slug)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all"
                  >
                    {t.module_open}
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-sm text-gray-400 dark:text-gray-600">
                    {t.module_notify}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Features({ t }: { t: ContentDict }) {
  const items = [
    { Icon: Building2, title: t.feat_multi_title, desc: t.feat_multi_desc },
    { Icon: Users, title: t.feat_roles_title, desc: t.feat_roles_desc },
    { Icon: Sparkles, title: t.feat_realtime_title, desc: t.feat_realtime_desc },
    { Icon: Calendar, title: t.feat_calendar_title, desc: t.feat_calendar_desc },
    { Icon: Globe2, title: t.feat_i18n_title, desc: t.feat_i18n_desc },
    { Icon: Moon, title: t.feat_dark_title, desc: t.feat_dark_desc },
  ];
  return (
    <section className="py-20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t.features_title}
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            {t.features_subtitle}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-6"
            >
              <Icon size={20} className="text-indigo-600 dark:text-indigo-400 mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ t, lang }: { t: ContentDict; lang: Lang }) {
  // Show pricing for the first available module by default (cleaning).
  const availableModules = MODULES.filter((m) => m.status === "available");
  const defaultModule = availableModules[0] ?? MODULES[0];
  const [activeSlug, setActiveSlug] = useState<string>(defaultModule.slug);
  const active = MODULES.find((m) => m.slug === activeSlug) ?? defaultModule;

  const formatPrice = (n: number) =>
    new Intl.NumberFormat(lang === "uz" ? "uz" : lang === "en" ? "en" : "ru").format(n);

  const planList = [
    {
      key: "free" as const,
      name: t.plan_free,
      price: active.plans.free.price,
      limits: active.plans.free.limits[lang],
      cta: t.plan_choose_free,
      ctaUrl: registerUrl("free", active.slug),
      highlight: false,
    },
    {
      key: "pro" as const,
      name: t.plan_pro,
      price: active.plans.pro.price,
      limits: active.plans.pro.limits[lang],
      cta: t.plan_choose_pro,
      ctaUrl: registerUrl("pro", active.slug),
      highlight: true,
    },
    {
      key: "business" as const,
      name: t.plan_business,
      price: active.plans.business.price,
      limits: active.plans.business.limits[lang],
      cta: t.plan_choose_business,
      ctaUrl: registerUrl("business", active.slug),
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t.pricing_title}
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            {t.pricing_subtitle}
          </p>
        </div>

        {/* Module selector */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <span className="text-sm text-gray-500 dark:text-gray-500">
            {t.pricing_for}:
          </span>
          {MODULES.map((m) => {
            const titleKey = `module_${m.slug}_title` as keyof ContentDict;
            return (
              <button
                key={m.slug}
                onClick={() => setActiveSlug(m.slug)}
                className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                  activeSlug === m.slug
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-700"
                }`}
              >
                {t[titleKey]}
                {m.status === "soon" && (
                  <span className="ml-1 text-[10px] uppercase opacity-60">
                    soon
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {planList.map((p) => (
            <div
              key={p.key}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                p.highlight
                  ? "border-indigo-500 dark:border-indigo-400 shadow-lg shadow-indigo-500/10"
                  : "border-gray-200 dark:border-gray-800"
              } bg-white dark:bg-gray-950`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-indigo-600 text-white px-3 py-1 rounded-full">
                  {t.plan_popular}
                </span>
              )}
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {p.name}
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {p.price === 0 ? "0" : formatPrice(p.price)}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {t.plan_currency}
                  {t.plan_per_month}
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 flex-1">
                <Check
                  size={14}
                  className="inline -mt-0.5 mr-1.5 text-emerald-500"
                />
                {p.limits}
              </p>
              <a
                href={p.ctaUrl}
                className={`mt-6 text-center text-sm font-semibold py-2.5 rounded-lg transition-colors ${
                  p.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({
  t,
  openFaq,
  setOpenFaq,
}: {
  t: ContentDict;
  openFaq: number | null;
  setOpenFaq: (n: number | null) => void;
}) {
  const items = [
    { q: t.faq_q1, a: t.faq_a1 },
    { q: t.faq_q2, a: t.faq_a2 },
    { q: t.faq_q3, a: t.faq_a3 },
    { q: t.faq_q4, a: t.faq_a4 },
    { q: t.faq_q5, a: t.faq_a5 },
  ];
  return (
    <section id="faq" className="py-20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-10">
          {t.faq_title}
        </h2>
        <div className="space-y-3">
          {items.map((item, idx) => {
            const open = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <button
                  onClick={() => setOpenFaq(open ? null : idx)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform text-gray-500 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA({ t }: { t: ContentDict }) {
  return (
    <section className="py-20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 px-6 py-12 md:px-12 md:py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">{t.cta_title}</h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            {t.cta_subtitle}
          </p>
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center gap-2 mt-7 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t.cta_button}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="flex-1" />}>
        <HomeInner />
      </Suspense>
      <Footer />
    </>
  );
}
