import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PRODUCTS } from "../lib/defaults";

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
  return {
    title: `${product.name} — Ezze`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section
          className={`bg-gradient-to-br ${product.color} py-24 px-4 text-white`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{product.icon}</div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>
              {product.comingSoon && (
                <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                  Скоро
                </span>
              )}
            </div>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {product.description}
            </p>
            {!product.comingSoon ? (
              <Link
                href={product.url}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-colors inline-block"
              >
                Открыть приложение
              </Link>
            ) : (
              <div className="bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-medium inline-block">
                Ожидается запуск в 2025 году
              </div>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Возможности
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">✓</div>
                  <div className="font-medium text-gray-800 text-sm">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back */}
        <section className="py-12 px-4 text-center">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ← Все продукты Ezze
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
