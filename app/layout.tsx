import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ezze — цифровые инструменты для бизнеса",
  description:
    "Экосистема приложений для самозанятых специалистов, клиник, мастерских и других видов бизнеса",
  openGraph: {
    title: "Ezze — цифровые инструменты для бизнеса",
    description: "Управляйте записями, клиентами и командой с помощью Ezze",
    url: "https://ezze.site",
    siteName: "Ezze",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
