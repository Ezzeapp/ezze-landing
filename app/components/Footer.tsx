import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <Zap size={20} />
              <span>Ezze</span>
            </div>
            <p className="text-sm">
              Цифровые инструменты для малого и среднего бизнеса
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 text-sm">Продукты</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/beauty" className="hover:text-white transition-colors">Ezze Beauty</Link></li>
              <li><Link href="/workshop" className="hover:text-white transition-colors">Ezze Workshop</Link></li>
              <li><Link href="/clinic" className="hover:text-white transition-colors">Ezze Clinic</Link></li>
              <li><Link href="/farm" className="hover:text-white transition-colors">Ezze Farm</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 text-sm">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Тарифы</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3 text-sm">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://t.me/ezzeapp" className="hover:text-white transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Ezze. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
