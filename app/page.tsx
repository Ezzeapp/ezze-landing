import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PRODUCTS, STATS } from "./lib/defaults";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span>⚡</span>
              <span>Экосистема для вашего бизнеса</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Цифровые инструменты{" "}
              <span className="text-indigo-600">для любого бизнеса</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Управляйте записями, клиентами и командой. Для мастеров красоты,
              клиник, мастерских, ферм и не только.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://pro.ezze.site/register"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Начать бесплатно
              </Link>
              <Link
                href="#products"
                className="bg-white text-indigo-600 border border-indigo-200 px-8 py-4 rounded-xl text-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                Смотреть продукты
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white border-y border-gray-100 py-12 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-indigo-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Продукты Ezze
              </h2>
              <p className="text-lg text-gray-600">
                Одна экосистема — решения для разных видов бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <Link
                  key={product.slug}
                  href={`/${product.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-2xl mb-4`}
                  >
                    {product.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900">{product.name}</h3>
                    {product.comingSoon && (
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                        Скоро
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-1">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs text-gray-500 flex items-center gap-1.5"
                      >
                        <span className="text-indigo-400">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-indigo-600 py-20 px-4 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Бесплатный тариф навсегда. Никаких кредитных карт.
            </p>
            <Link
              href="https://pro.ezze.site/register"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-50 transition-colors inline-block"
            >
              Создать аккаунт бесплатно
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
