import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600">
          <span className="text-2xl">⚡</span>
          <span>Ezze</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/#products" className="hover:text-indigo-600 transition-colors">Продукты</Link>
          <Link href="/#pricing" className="hover:text-indigo-600 transition-colors">Тарифы</Link>
          <Link href="/#about" className="hover:text-indigo-600 transition-colors">О нас</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://pro.ezze.site"
            className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Войти
          </Link>
          <Link
            href="https://pro.ezze.site/register"
            className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Начать бесплатно
          </Link>
        </div>
      </div>
    </header>
  );
}
