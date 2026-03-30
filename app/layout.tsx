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

// Dynamic color + favicon — reads platform_color from app_settings (Supabase)
// Caches in localStorage so the correct color shows instantly on subsequent visits
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://ezze.site";
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const platformScript = `(function(){
  // Theme — apply immediately to prevent flash
  try { if (localStorage.getItem('ezze_theme') === 'dark') document.documentElement.classList.add('dark'); } catch(e){}

  var DEFAULT_COLOR = '#6366f1';
  var DEFAULT_SHADES = {50:'#eef2ff',100:'#e0e7ff',300:'#a5b4fc',500:'#6366f1',600:'#4f46e5',700:'#4338ca'};

  function applyColor(shades) {
    var el = document.documentElement;
    // Override Tailwind v4 indigo CSS variables (keys are always strings after JSON.parse)
    if (shades['50'])  el.style.setProperty('--color-indigo-50',  shades['50']);
    if (shades['100']) el.style.setProperty('--color-indigo-100', shades['100']);
    if (shades['300']) el.style.setProperty('--color-indigo-300', shades['300']);
    if (shades['500']) el.style.setProperty('--color-indigo-500', shades['500']);
    if (shades['600']) el.style.setProperty('--color-indigo-600', shades['600']);
    if (shades['700']) el.style.setProperty('--color-indigo-700', shades['700']);
    if (shades['500']) el.style.setProperty('--primary', shades['500']);
  }

  function makeFavicon(color) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">'
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

  // Apply from cache immediately (before DOMContentLoaded)
  var cached = null;
  try { var s = localStorage.getItem('ezze_platform_color'); if(s) cached = JSON.parse(s); } catch(e){}
  if (cached) applyColor(cached);

  document.addEventListener('DOMContentLoaded', function(){
    applyColor(cached || DEFAULT_SHADES);
    setFavicon((cached && (cached[500] || cached['500'])) || DEFAULT_COLOR);

    // Fetch latest from Supabase in background
    var url = '${SUPABASE_URL}';
    var key = '${ANON_KEY}';
    if (!key) return;
    fetch(url + '/rest/v1/app_settings?key=eq.platform_color&select=value&limit=1', {
      headers: { 'apikey': key, 'Authorization': 'Bearer ' + key }
    }).then(function(r){ return r.json(); }).then(function(d){
      var raw = d && d[0] && d[0].value;
      var shades = DEFAULT_SHADES;
      if (raw) {
        try {
          // value is TEXT in DB — REST API may return it as string or object
          shades = (typeof raw === 'string') ? JSON.parse(raw) : raw;
        } catch(e) {}
      }
      try { localStorage.setItem('ezze_platform_color', JSON.stringify(shades)); } catch(e){}
      applyColor(shades);
      setFavicon(shades['500'] || DEFAULT_COLOR);
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
        <script dangerouslySetInnerHTML={{ __html: platformScript }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
