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

// Dynamic favicon — reads platform_favicon_color from app_settings (Supabase)
// Caches in localStorage so the correct color shows instantly on subsequent visits
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://ezze.site";
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const faviconScript = `(function(){
  var DEFAULT_COLOR = '#6366f1';
  function makeFavicon(color) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">'
      + '<rect width="32" height="32" rx="8" fill="' + color + '"/>'
      + '<polygon points="17.3,2.7 4,18.7 16,18.7 14.7,29.3 28,13.3 16,13.3" fill="white"/>'
      + '</svg>';
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
  }
  function setFavicon(color) {
    try {
      var links = document.querySelectorAll('link[rel="icon"]');
      links.forEach(function(l){ l.parentNode && l.parentNode.removeChild(l); });
      var link = document.createElement('link');
      link.rel = 'icon'; link.type = 'image/svg+xml';
      link.href = makeFavicon(color);
      document.head.appendChild(link);
    } catch(e){}
  }
  var cached = '';
  try { cached = localStorage.getItem('ezze_favicon_color') || ''; } catch(e){}
  document.addEventListener('DOMContentLoaded', function(){
    setFavicon(cached || DEFAULT_COLOR);
    // Fetch latest from Supabase in background
    var url = '${SUPABASE_URL}';
    var key = '${ANON_KEY}';
    if (!key) return;
    fetch(url + '/rest/v1/app_settings?key=eq.platform_favicon_color&select=value&limit=1', {
      headers: { 'apikey': key, 'Authorization': 'Bearer ' + key }
    }).then(function(r){ return r.json(); }).then(function(d){
      var color = d && d[0] && d[0].value ? d[0].value : DEFAULT_COLOR;
      try { localStorage.setItem('ezze_favicon_color', color); } catch(e){}
      setFavicon(color);
    }).catch(function(){});
  });
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: faviconScript }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
