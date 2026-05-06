"use client";
import Link from "next/link";
import { Zap } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { type Lang } from "../lib/i18n";
import { tr } from "../lib/content";
import { MODULES } from "../lib/modules";

function FooterInner() {
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<Lang>("ru");

  useEffect(() => {
    const sp = searchParams.get("lang") as Lang | null;
    const saved = localStorage.getItem("ezze_lang") as Lang | null;
    setLang(sp ?? saved ?? "ru");
  }, [searchParams]);

  const t = tr(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div className="space-y-3 md:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-indigo-600 dark:text-indigo-400"
          >
            <Zap size={22} />
            Ezze
          </Link>
          <p className="text-gray-600 dark:text-gray-400 max-w-sm">
            {t.footer_tagline}
          </p>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-gray-900 dark:text-gray-100">
            {t.footer_modules}
          </div>
          <ul className="space-y-1.5 text-gray-600 dark:text-gray-400">
            {MODULES.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/#modules`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {t[`module_${m.slug}_title` as keyof typeof t]}
                  {m.status === "soon" && (
                    <span className="ml-2 text-[10px] uppercase text-gray-400">
                      soon
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <div className="font-semibold text-gray-900 dark:text-gray-100">
            {t.footer_company}
          </div>
          <ul className="space-y-1.5 text-gray-600 dark:text-gray-400">
            <li>
              <Link
                href="/#faq"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {t.footer_about}
              </Link>
            </li>
            <li>
              <a
                href="mailto:hello@ezze.site"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {t.footer_contacts}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-500 dark:text-gray-500 flex justify-between flex-wrap gap-2">
          <span>© {year} Ezze. {t.footer_rights}.</span>
          <span>hello@ezze.site</span>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <Suspense fallback={<div className="h-32" />}>
      <FooterInner />
    </Suspense>
  );
}
