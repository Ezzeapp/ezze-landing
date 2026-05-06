"use client";
import Link from "next/link";
import { Zap } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { type Lang } from "../lib/i18n";
import { tr, type ContentDict } from "../lib/content";
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
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-12 text-sm">
        <div className="space-y-3 md:col-span-5">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Zap size={20} className="text-violet-600 dark:text-violet-400" />
            Ezze
          </Link>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-sm">
            {t.footer_tagline}
          </p>
        </div>

        <div className="space-y-3 md:col-span-3">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100">
            {t.footer_modules}
          </div>
          <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
            {MODULES.map((m) => (
              <li key={m.slug}>
                <Link href={`/#modules`} className="hover:text-zinc-900 dark:hover:text-white transition">
                  {t[`module_${m.slug}_title` as keyof ContentDict]}
                  {m.status === "soon" && (
                    <span className="ml-2 text-[10px] uppercase text-zinc-400">soon</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 md:col-span-2">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100">
            {t.footer_company}
          </div>
          <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
            <li><Link href="/#faq" className="hover:text-zinc-900 dark:hover:text-white transition">{t.footer_about}</Link></li>
            <li><a href="mailto:hello@ezze.site" className="hover:text-zinc-900 dark:hover:text-white transition">{t.footer_contacts}</a></li>
          </ul>
        </div>

        <div className="space-y-3 md:col-span-2">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100">
            {t.footer_legal}
          </div>
          <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
            <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition">{t.footer_privacy}</Link></li>
            <li><Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition">{t.footer_terms}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-zinc-500 flex justify-between flex-wrap gap-2">
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
