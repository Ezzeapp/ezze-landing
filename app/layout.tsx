import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ezze — SaaS-платформа для сервисного бизнеса",
  description:
    "Клиенты, заказы, команда, расписание и аналитика — в одной системе. Запустите бизнес за 5 минут.",
  openGraph: {
    title: "Ezze — SaaS-платформа для сервисного бизнеса",
    description:
      "Управляйте записями, клиентами и командой с помощью Ezze",
    url: "https://ezze.site",
    siteName: "Ezze",
    locale: "ru_RU",
    type: "website",
  },
};

const themeScript = `(function(){
  try {
    if (localStorage.getItem('ezze_theme') === 'dark')
      document.documentElement.classList.add('dark');
  } catch(e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="h-full">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
