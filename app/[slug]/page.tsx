import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PRODUCTS } from "../lib/defaults";
import { getSections, getAppSettings } from "../lib/supabase";
import { SectionHero } from "../components/sections/SectionHero";
import { SectionFeatures } from "../components/sections/SectionFeatures";
import { LivePricing } from "../components/sections/LivePricing";
import { SectionReviews } from "../components/sections/SectionReviews";
import { SectionFAQ } from "../components/sections/SectionFAQ";
import { SectionCTA } from "../components/sections/SectionCTA";
import BackLink from "../components/BackLink";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  const sections = await getSections(slug, "ru");
  const meta = sections.meta as { title?: string; description?: string; keywords?: string } | undefined;

  return {
    title: meta?.title || `${product.name} — Ezze`,
    description: meta?.description || product.description,
    ...(meta?.keywords ? { keywords: meta.keywords } : {}),
  };
}

interface ProductConfigItem {
  slug: string;
  label: string;
  hidden?: boolean;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const [sections, settings] = await Promise.all([
    getSections(slug, "ru"),
    getAppSettings(["products_config", "contacts_config"]),
  ]);

  const contactsConfig = settings?.contacts_config as { telegram?: string; email?: string; phone?: string; instagram?: string; youtube?: string } | undefined;
  const productsConfig = settings?.products_config as ProductConfigItem[] | undefined;
  const footerProducts = (productsConfig || [])
    .filter((p) => !p.hidden && p.slug !== "main")
    .map((p) => ({ slug: p.slug, name: p.label }));

  return (
    <>
      <Header product={slug} />
      <main className="flex-1">
        <SectionHero
          content={sections.hero || {}}
          fallback={{
            slug: product.slug,
            title: product.name,
            subtitle: product.description,
            color: product.color,
            url: product.url,
            icon: product.icon,
            comingSoon: product.comingSoon,
          }}
        />

        <SectionFeatures
          content={sections.features || {}}
          fallbackItems={product.features}
        />

        <LivePricing content={sections.pricing || {}} product={slug} />

        <SectionReviews content={sections.reviews || {}} />

        <SectionFAQ content={sections.faq || {}} />

        <SectionCTA content={sections.cta || {}} />

        {/* Back — client component reads lang from URL */}
        <section className="py-12 px-4 text-center bg-white dark:bg-gray-950">
          <BackLink />
        </section>
      </main>
      <Footer contacts={contactsConfig} products={footerProducts} />
    </>
  );
}
