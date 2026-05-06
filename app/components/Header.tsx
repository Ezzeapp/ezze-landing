"use client";
import Link from "next/link";
import { Zap, Sun, Moon, ChevronDown } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type Lang, LANGS, LANG_LABELS, LANG_NAMES, APP_URL } from "../lib/i18n";
import { tr } from "../lib/content";

function HeaderInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<Lang>("ru");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const sp = searchParams.get("lang") as Lang | null;
    const saved = localStorage.getItem("ezze_lang") as Lang | null;
    setLang(sp ?? saved ?? "ru");
  }, [searchParams]);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("ezze_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("ezze_theme", "light");
    }
  }

  function switchLang(l: Lang) {
    setLang(l);
    setLangOpen(false);
    localStorage.setItem("ezze_lang", l);
    const p = new URLSearchParams(searchParams.toString());
    p.set("lang", l);
    router.push(`${pathname}?${p.toString()}`);
  }

  function anchor(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const t = tr(lang);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <Zap size={20} className="text-violet-600 dark:text-violet-400" />
          <span>Ezze</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/#features" onClick={(e) => anchor(e, "features")} className="hover:text-zinc-900 dark:hover:text-white transition">
            {t.nav_features}
          </Link>
          <Link href="/#modules" onClick={(e) => anchor(e, "modules")} className="hover:text-zinc-900 dark:hover:text-white transition">
            {t.nav_modules}
          </Link>
          <Link href="/#pricing" onClick={(e) => anchor(e, "pricing")} className="hover:text-zinc-900 dark:hover:text-white transition">
            {t.nav_pricing}
          </Link>
          <Link href="/#faq" onClick={(e) => anchor(e, "faq")} className="hover:text-zinc-900 dark:hover:text-white transition">
            {t.nav_faq}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-semibold hover:border-violet-300 dark:hover:border-violet-700 transition"
            >
              {LANG_LABELS[lang]}
              <ChevronDown size={11} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-full mt-1.5 w-48 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-lg z-50 py-1 overflow-hidden">
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLang(l)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition text-left ${
                        l === lang
                          ? "bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300"
                          : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
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

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 transition"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href={`${APP_URL}/login`}
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition px-2"
          >
            {t.login}
          </a>
          <a
            href={`${APP_URL}/register`}
            className="text-sm bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition shadow-sm"
          >
            {t.start_free}
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense
      fallback={
        <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
              <Zap size={20} className="text-violet-600 dark:text-violet-400" />
              <span>Ezze</span>
            </Link>
          </div>
        </header>
      }
    >
      <HeaderInner />
    </Suspense>
  );
}
