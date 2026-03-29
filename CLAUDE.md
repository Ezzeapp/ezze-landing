# ezze-landing

Маркетинговый лендинг экосистемы Ezze.

## Стек
Next.js 16 + TypeScript + Tailwind CSS + Lucide React
`output: 'export'` (статический HTML/CSS/JS), `trailingSlash: true`

## Репо и деплой
- Репо: `git@github.com:Ezzeapp/ezze-landing.git`
- URL: `https://ezze.site`
- VPS: `/var/www/ezze-landing/`
- Деплой: `npm run build` → `scp -r out/* root@72.62.119.187:/var/www/ezze-landing/`
- ⚠️ GitHub Actions SCP иногда даёт i/o timeout — деплоить вручную через scp

## Ключевые файлы
```
app/
  page.tsx              — главная страница (Hero, Stats, Products, CTA)
  [slug]/page.tsx       — страница продукта (generateStaticParams)
  components/
    Header.tsx          — шапка с Zap логотипом
    Footer.tsx          — подвал
  lib/
    defaults.ts         — PRODUCTS (LucideIcon refs), STATS
    supabase.ts         — getSections(product, lang)
supabase/migrations/
  001_landing_sections.sql — таблица landing_sections
```

## Таблица landing_sections
```sql
(id, product TEXT, section TEXT, lang TEXT, content JSONB, visible BOOL, sort INT)
UNIQUE (product, section, lang)
```
Продукты: `main beauty workshop clinic farm edu event food hotel transport build`
Секции: `hero features pricing reviews faq cta meta`
Языки: `ru uz en`

## Иконки
Все иконки — `lucide-react`. НЕ использовать эмодзи.
- Бренд: `Zap` | Beauty: `Scissors` | Workshop: `Shirt` | Clinic: `Stethoscope`
- Farm: `Leaf` | Edu: `GraduationCap` | Food: `UtensilsCrossed`

## Паттерн иконок в компонентах
```tsx
const Icon = product.icon; // LucideIcon
<Icon size={24} className="text-white" />
```

## Переменные окружения
```
NEXT_PUBLIC_SUPABASE_URL=https://ezze.site
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```
