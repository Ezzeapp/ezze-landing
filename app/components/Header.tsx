"use client";
import Link from "next/link";
import { Zap, Sun, Moon, ChevronDown } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { type Lang, LANGS, LANG_LABELS, LANG_NAMES, tr } from "../lib/i18n";
import { PRODUCTS } from "../lib/defaults";

interface HeaderProps {
  /** slug продукта на /[slug] странице — определяет URL кнопок «Войти» / «Начать» */
  product?: string;
}

function HeaderInner({ product }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<Lang>("ru");
  const [langOpen, setLangOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const theme = localStorage.getItem("ezze_theme");
    setIsDark(theme === "dark");
    if (theme === "dark") document.documentElement.classList.add("dark");
    const sp = searchParams.get("lang") as Lang | null;
    const saved = localStorage.getItem("ezze_lang") as Lang | null;
    setLang(sp ?? saved ?? "ru");
  }, [searchParams]);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    const cl = document.documentElement.classList;
    if (next) { cl.add("dark"); localStorage.setItem("ezze_theme", "dark"); }
    else { cl.remove("dark"); localStorage.setItem("ezze_theme", "light"); }
  }

  function switchLang(l: Lang) {
    setLang(l);
    setLangOpen(false);
    localStorage.setItem("ezze_lang", l);
    window.dispatchEvent(new CustomEvent("ezze_lang_change", { detail: { lang: l } }));
    const p = new URLSearchParams(searchParams.toString());
    p.set("lang", l);
    router.push(`${pathname}?${p.toString()}`);
  }

  const t = tr[lang];

  // Определяем URL кнопок:
  // - на /[slug] — Войти на сайт продукта (productUrl), Начать → productUrl/register напрямую
  // - на главной — обе ведут к #products, т.к. app.ezze.site без выбора продукта = Beauty
  const productInfo = product ? PRODUCTS.find((p) => p.slug === product) : null;
  const loginUrl = productInfo?.url || `/?lang=${lang}#products`;
  const registerUrl = productInfo
    ? `${productInfo.url}/register`
    : `/?lang=${lang}#products`;
  const isOnHome = pathname === "/";
  const loginIsAnchor = !productInfo;
  const registerIsAnchor = !productInfo;

  function handleAnchor(e: React.MouseEvent<HTMLAnchorElement>, anchor: string) {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
    // На других страницах — обычный переход на /?lang=...#anchor,
    // HomeContent сам докрутит после mount
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => {
            // На главной — клик по логотипу скроллит вверх (плавно), без перезагрузки
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="relative z-[60] flex items-center gap-2 font-bold text-xl text-indigo-600 dark:text-indigo-400"
        >
          <Zap size={22} />
          <span>Ezze</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <Link href={`/?lang=${lang}#products`} onClick={(e) => handleAnchor(e, "products")} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.nav_products}</Link>
          <Link href={`/?lang=${lang}#pricing`}  onClick={(e) => handleAnchor(e, "pricing")}  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.nav_pricing}</Link>
          <Link href={`/?lang=${lang}#about`}    onClick={(e) => handleAnchor(e, "about")}    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.nav_about}</Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative hidden sm:block mr-1">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-bold cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
            >
              {LANG_LABELS[lang]}
              <ChevronDown size={11} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <>
                {/* Backdrop — z-30 чтобы не перекрывал Logo / Войти / Начать (z-60) */}
                <div className="fixed inset-0 z-30" onClick={() => setLangOpen(false)} />
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-1.5 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-50 py-1 overflow-hidden">
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLang(l)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors text-left ${
                        l === lang
                          ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span className="font-bold text-xs w-7 shrink-0">{LANG_LABELS[l]}</span>
                      <span>{LANG_NAMES[l]}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Theme toggle */}
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-colors">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link href={loginUrl}
            onClick={(e) => { if (isOnHome && loginIsAnchor) handleAnchor(e, "products"); }}
            className="relative z-[60] text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ml-1">
            {t.login}
          </Link>
          <Link href={registerUrl}
            onClick={(e) => { if (isOnHome && registerIsAnchor) handleAnchor(e, "products"); }}
            className="relative z-[60] text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            {t.start_free}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Header({ product }: HeaderProps = {}) {
  return (
    <Suspense fallback={
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="relative z-[60] flex items-center gap-2 font-bold text-xl text-indigo-600 dark:text-indigo-400">
            <Zap size={22} />
            <span>Ezze</span>
          </Link>
        </div>
      </header>
    }>
      <HeaderInner product={product} />
    </Suspense>
  );
}
