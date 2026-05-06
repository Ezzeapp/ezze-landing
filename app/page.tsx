"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Globe2,
  MapPin,
  Moon,
  Phone,
  Sparkles,
  User,
  Users,
  Zap,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { type Lang, registerUrl, APP_URL } from "./lib/i18n";
import { tr, type ContentDict } from "./lib/content";
import { MODULES } from "./lib/modules";

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
      <Hero t={t} lang={lang} />
      <Modules t={t} />
      <Features t={t} />
      <Pricing t={t} lang={lang} />
      <FAQ t={t} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <CTA t={t} />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Hero — 2-col with product mockup                                    */
/* ------------------------------------------------------------------ */
function Hero({ t }: { t: ContentDict; lang: Lang }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/60 via-white to-white dark:from-violet-950/20 dark:via-zinc-950 dark:to-zinc-950 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/40 dark:via-violet-700/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 mb-6">
            <span className="size-1.5 rounded-full bg-violet-500" />
            {t.hero_eyebrow}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.hero_title_a}
            <br />
            <span className="text-violet-600 dark:text-violet-400">
              {t.hero_title_b}
            </span>
            .
          </h1>

          <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400 max-w-md">
            {t.hero_subtitle}
          </p>

          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <a
              href={registerUrl()}
              className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition shadow-md shadow-zinc-900/10 dark:shadow-white/10"
            >
              {t.hero_cta_primary}
              <ArrowRight size={16} />
            </a>
            <a
              href="#modules"
              className="text-zinc-700 dark:text-zinc-300 px-5 py-2.5 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            >
              {t.hero_cta_secondary} →
            </a>
          </div>

          <p className="mt-5 text-sm text-zinc-500">{t.hero_subnote}</p>

          <div className="mt-10 flex items-center gap-8 text-xs text-zinc-500 dark:text-zinc-500">
            <div>
              <strong className="block text-2xl font-bold text-zinc-900 dark:text-white">99.9%</strong>
              uptime
            </div>
            <div>
              <strong className="block text-2xl font-bold text-zinc-900 dark:text-white">5 мин</strong>
              запуск
            </div>
            <div>
              <strong className="block text-2xl font-bold text-zinc-900 dark:text-white">3</strong>
              языка
            </div>
          </div>
        </div>

        <ProductMockup t={t} />
      </div>
    </section>
  );
}

function ProductMockup({ t: _t }: { t: ContentDict }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-tr from-violet-200/40 via-fuchsia-200/30 to-indigo-200/40 dark:from-violet-900/30 dark:via-fuchsia-900/20 dark:to-indigo-900/30 blur-2xl rounded-3xl pointer-events-none" />
      <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl shadow-violet-500/10 dark:shadow-violet-500/20 overflow-hidden transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-100 dark:border-zinc-900">
          <span className="size-2.5 rounded-full bg-rose-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs text-zinc-400 dark:text-zinc-600">
            app.ezze.site/orders
          </span>
        </div>
        {/* content */}
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Иван Иванов
              </div>
              <div className="text-xs text-zinc-500 flex items-center gap-1">
                <Calendar size={11} />
                14:30
                <MapPin size={11} className="ml-1" />
                Чиланзар, 12-3
              </div>
            </div>
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
              Выполнен
            </span>
            <span className="text-sm font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
              250 000
            </span>
          </div>
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/50">
            <span className="size-1.5 rounded-full bg-amber-500" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Анна Соколова
              </div>
              <div className="text-xs text-zinc-500 flex items-center gap-1">
                <Calendar size={11} />
                16:00
                <User size={11} className="ml-1" />
                Иван П.
              </div>
            </div>
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
              В работе
            </span>
            <span className="text-sm font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
              120 000
            </span>
          </div>
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50">
            <span className="size-1.5 rounded-full bg-blue-500" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Петр Кузнецов
              </div>
              <div className="text-xs text-zinc-500 flex items-center gap-1">
                <Calendar size={11} />
                18:15
                <Phone size={11} className="ml-1" />
                +998 90 …
              </div>
            </div>
            <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
              Запланирован
            </span>
            <span className="text-sm font-semibold tabular-nums text-zinc-900 dark:text-zinc-100">
              80 000
            </span>
          </div>
          <div className="flex justify-between pt-3 border-t border-zinc-100 dark:border-zinc-900 text-sm">
            <span className="text-zinc-500">Сегодня · 3 заказа</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              450 000 сум
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Modules — 3 soft-shadow cards                                       */
/* ------------------------------------------------------------------ */
function Modules({ t }: { t: ContentDict }) {
  return (
    <section
      id="modules"
      className="relative py-20 border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold mb-3">
            {t.modules_eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.modules_title}
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            {t.modules_subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {MODULES.map((m) => {
            const Icon = m.icon;
            const titleKey = `module_${m.slug}_title` as keyof ContentDict;
            const descKey = `module_${m.slug}_desc` as keyof ContentDict;
            const metaKey = `module_${m.slug}_meta` as keyof ContentDict;
            const available = m.status === "available";
            return (
              <div
                key={m.slug}
                className={`relative rounded-2xl border bg-white dark:bg-zinc-950 p-6 transition ${
                  available
                    ? "border-zinc-200 dark:border-zinc-800 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-0.5"
                    : "border-zinc-200 dark:border-zinc-800 opacity-90"
                }`}
                style={{ ["--accent" as string]: m.accent }}
              >
                <div
                  className="size-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: m.accent }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {t[titleKey]}
                  </h3>
                  <span
                    className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${
                      available
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
                        : "bg-zinc-100 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-500"
                    }`}
                  >
                    {available
                      ? t.module_status_available
                      : `${t.module_status_soon} · ${m.release}`}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  {t[descKey]}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 mb-5">
                  {t[metaKey]}
                </p>
                {available ? (
                  <a
                    href={registerUrl(undefined, m.slug)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:gap-2 transition-all"
                  >
                    {t.module_open}
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-sm text-zinc-400 dark:text-zinc-600">
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

/* ------------------------------------------------------------------ */
/* Features — bento grid                                               */
/* ------------------------------------------------------------------ */
function Features({ t }: { t: ContentDict }) {
  const featureCard = (
    Icon: typeof Sparkles,
    title: string,
    desc: string,
    extra = ""
  ) => (
    <div
      className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 transition hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-black/20 hover:-translate-y-0.5 ${extra}`}
    >
      <div className="size-9 rounded-lg bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4">
        <Icon size={18} />
      </div>
      <h3 className="font-semibold text-zinc-900 dark:text-white mb-1.5">
        {title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );

  return (
    <section
      id="features"
      className="py-20 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold mb-3">
            {t.features_eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.features_title}
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            {t.features_subtitle}
          </p>
        </div>

        {/* Bento — 12 col grid, mixed sizes */}
        <div className="grid md:grid-cols-12 gap-4">
          {/* Big feature: Realtime — spans 2 rows on the left */}
          <div className="md:col-span-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-7 relative overflow-hidden hover:shadow-xl hover:shadow-violet-500/10 transition">
            <div className="absolute -right-8 -top-8 size-40 rounded-full bg-gradient-to-br from-violet-200/60 to-fuchsia-200/60 dark:from-violet-800/30 dark:to-fuchsia-800/30 blur-2xl pointer-events-none" />
            <div className="size-10 rounded-lg bg-violet-600 text-white flex items-center justify-center mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              {t.feat_realtime_title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mb-6">
              {t.feat_realtime_desc}
            </p>
            {/* mini live demo */}
            <div className="space-y-1.5 max-w-sm">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-xs">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                  Иван П. изменил статус заказа
                </span>
                <span className="ml-auto text-zinc-400">сейчас</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-xs">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                  Новый заказ от Анны С.
                </span>
                <span className="ml-auto text-zinc-400">2с назад</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-xs opacity-60">
                <span className="size-1.5 rounded-full bg-zinc-400" />
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                  Перенесён заказ #142
                </span>
                <span className="ml-auto text-zinc-400">5с</span>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="md:col-span-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-7 hover:shadow-lg transition">
            <div className="size-10 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-950/40 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center mb-4">
              <Calendar size={20} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
              {t.feat_calendar_title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {t.feat_calendar_desc}
            </p>
            <div className="mt-5 grid grid-cols-7 gap-1 text-[10px]">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded flex items-end justify-center pb-1 ${
                    i === 3
                      ? "bg-violet-500 text-white"
                      : i === 1 || i === 5
                      ? "bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400"
                      : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500"
                  }`}
                >
                  {i + 4}
                </div>
              ))}
            </div>
          </div>

          {featureCard(Users, t.feat_roles_title, t.feat_roles_desc, "md:col-span-4")}
          {featureCard(Sparkles, t.feat_multi_title, t.feat_multi_desc, "md:col-span-4")}
          {featureCard(Globe2, t.feat_i18n_title, t.feat_i18n_desc, "md:col-span-4")}
          {featureCard(Moon, t.feat_dark_title, t.feat_dark_desc, "md:col-span-12")}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing — module switcher + 3 plans                                  */
/* ------------------------------------------------------------------ */
function Pricing({ t, lang }: { t: ContentDict; lang: Lang }) {
  const available = MODULES.filter((m) => m.status === "available");
  const fallback = available[0] ?? MODULES[0];
  const [activeSlug, setActiveSlug] = useState<string>(fallback.slug);
  const active = MODULES.find((m) => m.slug === activeSlug) ?? fallback;

  const fmt = (n: number) =>
    new Intl.NumberFormat(lang === "uz" ? "uz" : lang === "en" ? "en" : "ru").format(n);

  const plans = [
    {
      key: "free" as const,
      name: t.plan_free,
      price: active.plans.free.price,
      limits: active.plans.free.limits[lang],
      cta: t.plan_choose_free,
      url: registerUrl("free", active.slug),
      popular: false,
    },
    {
      key: "pro" as const,
      name: t.plan_pro,
      price: active.plans.pro.price,
      limits: active.plans.pro.limits[lang],
      cta: t.plan_choose_pro,
      url: registerUrl("pro", active.slug),
      popular: true,
    },
    {
      key: "business" as const,
      name: t.plan_business,
      price: active.plans.business.price,
      limits: active.plans.business.limits[lang],
      cta: t.plan_choose_business,
      url: registerUrl("business", active.slug),
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold mb-3">
            {t.pricing_eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.pricing_title}
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            {t.pricing_subtitle}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <span className="text-sm text-zinc-500 mr-1">
            {t.pricing_for}:
          </span>
          {MODULES.map((m) => {
            const titleKey = `module_${m.slug}_title` as keyof ContentDict;
            const sel = activeSlug === m.slug;
            return (
              <button
                key={m.slug}
                onClick={() => setActiveSlug(m.slug)}
                className={`text-sm px-3 py-1.5 rounded-lg border transition ${
                  sel
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white shadow"
                    : "border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-violet-300 dark:hover:border-violet-700"
                }`}
              >
                {t[titleKey]}
                {m.status === "soon" && (
                  <span className="ml-1.5 text-[10px] uppercase opacity-60">soon</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.key}
              className={`relative rounded-2xl p-7 flex flex-col bg-white dark:bg-zinc-950 transition ${
                p.popular
                  ? "border-2 border-violet-500 dark:border-violet-400 shadow-xl shadow-violet-500/15"
                  : "border border-zinc-200 dark:border-zinc-800 hover:shadow-lg"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-violet-600 text-white px-3 py-1 rounded-full shadow-md">
                  {t.plan_popular}
                </span>
              )}
              <div className="text-lg font-semibold text-zinc-900 dark:text-white">
                {p.name}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold tabular-nums text-zinc-900 dark:text-white">
                  {p.price === 0 ? "0" : fmt(p.price)}
                </span>
                <span className="text-sm text-zinc-500">
                  {t.plan_currency}
                  {t.plan_per_month}
                </span>
              </div>
              <div className="mt-5 mb-6 flex-1">
                <div className="text-xs uppercase tracking-wide text-zinc-500 mb-2">
                  {t.plan_includes}
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                  <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                  {p.limits}
                </p>
              </div>
              <a
                href={p.url}
                className={`text-center text-sm font-semibold py-3 rounded-lg transition ${
                  p.popular
                    ? "bg-violet-600 text-white hover:bg-violet-700 shadow-md"
                    : "border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900"
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

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */
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
    <section id="faq" className="py-20 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold mb-3">
            {t.faq_eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.faq_title}
          </h2>
        </div>
        <div className="space-y-3">
          {items.map((item, idx) => {
            const open = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border bg-white dark:bg-zinc-950 transition ${
                  open
                    ? "border-violet-300 dark:border-violet-700 shadow-md"
                    : "border-zinc-200 dark:border-zinc-800"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(open ? null : idx)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform text-zinc-500 ${
                      open ? "rotate-180 text-violet-500" : ""
                    }`}
                  />
                </button>
                {open && (
                  <div className="px-5 pb-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
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

/* ------------------------------------------------------------------ */
/* CTA                                                                  */
/* ------------------------------------------------------------------ */
function CTA({ t }: { t: ContentDict }) {
  return (
    <section className="py-20 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-600 px-6 py-14 md:px-12 md:py-16 text-center text-white shadow-2xl shadow-violet-500/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur mb-5">
              <Zap size={12} />
              5 минут до первого заказа
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t.cta_title}
            </h2>
            <p className="mt-3 text-violet-100 max-w-xl mx-auto">
              {t.cta_subtitle}
            </p>
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center gap-2 mt-7 bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-100 transition shadow-lg"
            >
              {t.cta_button}
              <ArrowRight size={16} />
            </a>
          </div>
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
