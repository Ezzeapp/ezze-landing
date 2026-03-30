"use client";
import Link from "next/link";
import { Zap, Sun, Moon } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { type Lang, LANGS, LANG_LABELS, tr } from "../lib/i18n";

function HeaderInner() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<Lang>("ru");
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
    localStorage.setItem("ezze_lang", l);
    const p = new URLSearchParams(searchParams.toString());
    p.set("lang", l);
    router.push(`${pathname}?${p.toString()}`);
  }

  const t = tr[lang];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600 dark:text-indigo-400">
          <Zap size={22} />
          <span>Ezze</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <Link href={`/?lang=${lang}#products`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.nav_products}</Link>
          <Link href={`/?lang=${lang}#pricing`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.nav_pricing}</Link>
          <Link href={`/?lang=${lang}#about`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{t.nav_about}</Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <select
            value={lang}
            onChange={(e) => switchLang(e.target.value as Lang)}
            className="hidden sm:block text-xs px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-1"
          >
            {LANGS.map((l) => (
              <option key={l} value={l}>{LANG_LABELS[l]}</option>
            ))}
          </select>

          {/* Theme toggle */}
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-colors">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link href="https://pro.ezze.site"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ml-1">
            {t.login}
          </Link>
          <Link href="https://pro.ezze.site/register"
            className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            {t.start_free}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800 h-16" />
    }>
      <HeaderInner />
    </Suspense>
  );
}
