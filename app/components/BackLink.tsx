"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { type Lang, LANGS, tr } from "../lib/i18n";

function BackLinkInner() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("lang") as Lang | null;
  const lang: Lang = langParam && LANGS.includes(langParam) ? langParam : "ru";
  const t = tr[lang];

  return (
    <Link
      href={`/?lang=${lang}`}
      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
    >
      {t.back_products}
    </Link>
  );
}

export default function BackLink() {
  return (
    <Suspense fallback={
      <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
        ← Ezze
      </Link>
    }>
      <BackLinkInner />
    </Suspense>
  );
}
