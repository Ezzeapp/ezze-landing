# CLAUDE.md — ezze-landing

> Главный сайт **https://ezze.site**. Next.js 16 static (Turbopack), GitHub Actions деплой.

## Что это

Маркетинговый лендинг SaaS-платформы **Ezze**. Сам продукт (app.ezze.site) живёт
в соседнем репо `c:\Projects\Claude\app-ezze\` — это разные проекты, но
лендинг показывает **тарифы и фичи app-ezze**, поэтому он должен быть
синхронизирован с реальным состоянием продукта.

## Стек

- Next.js 16 (App Router) + Turbopack
- TypeScript
- Tailwind v4
- lucide-react (иконки)
- Деплой: GitHub Actions → rsync на VPS (`72.62.119.187`)
- Триггер: push в `master`

## Источник данных — НЕ ИЗМЕНЯТЬ ЗДЕСЬ

**Тарифы (цены, лимиты) и фичи продукта канонически живут в БД app-ezze,
конфигурируются миграциями.** Лендинг — только зеркало.

| Что | Где канон |
|---|---|
| Цены планов | `c:\Projects\Claude\app-ezze\supabase\migrations\*plans*.sql` |
| Лимиты планов | `c:\Projects\Claude\app-ezze\supabase\migrations\20260515000002_plans_tune.sql`, `20260515000004_plans_pricing_tune.sql`, `20260515000005_plans_team_limits.sql` |
| Фичи планов | `20260515000003_plans_feature_defaults_repair.sql`, `20260514000077_extended_plan_features.sql` |
| Унификация прайса между продуктами | `20260520000001_unify_plan_prices.sql`, `20260520000006_unify_plans_and_defaults.sql` |
| Pro+ тариф | `20260507000026_add_pro_plus_tier.sql` |
| Список продуктов | `c:\Projects\Claude\app-ezze\CLAUDE.md` (раздел "Текущий статус") |

При расхождении лендинга и БД — **БД источник истины**. Обновляйте файлы лендинга:

- `app/lib/modules.ts` — список модулей + цены + лимиты по тирам (5 модулей × 4 тира)
- `app/lib/content.ts` — i18n словарь (RU/EN/UZ), включая названия модулей, описания, FAQ
- `app/page.tsx` — структура лендинга (Hero / Modules / Features / Pricing / FAQ / CTA)

## Актуальное состояние (на 2026-05-20)

5 модулей, все available:

| Slug | Название | Иконка | Accent |
|---|---|---|---|
| `cleaning` | Клининг | Sparkles | `#0ea5e9` |
| `beauty` | Бьюти | Scissors | `#ec4899` |
| `rental` | Аренда | Boxes | `#f59e0b` |
| `service_center` | Сервис-центр | Wrench | `#3b82f6` |
| `banket` | Банкеты | UtensilsCrossed | `#a855f7` |

4 тарифа. Цены в `сум/мес`:

| Тир | cleaning/beauty/rental/svc | banket |
|---|---|---|
| Free | 0 | 0 |
| Pro | 199 000 | 490 000 |
| Pro+ | 399 000 | 790 000 |
| Business | 899 000 | 1 490 000 |

## Структура

```
app/
├── page.tsx              — единая страница со всеми секциями
├── layout.tsx            — root layout
├── globals.css           — Tailwind + темная тема
├── components/
│   ├── Header.tsx        — sticky шапка + переключатель языка + тема
│   └── Footer.tsx        — футер
└── lib/
    ├── i18n.ts           — Lang type + LANGS + APP_URL + registerUrl()
    ├── content.ts        — словарь RU/EN/UZ
    └── modules.ts        — данные модулей + тарифов
```

## Локальный запуск

```powershell
cd c:\Projects\Claude\ezze-landing
npx next dev -p 3001
```

Порт **3001** обязательно — `5173` занят соседним app-ezze.

## Деплой

```powershell
git add . ; git commit -m "..." ; git push origin master
```

GitHub Actions сам подхватит, ~1 минута до раскатки.

## Ловушки

- **Branch `master`, не `main`** (как у app-ezze) — это исторически так
- **Все ContentDict ключи обязательны в 3 языках** — TS поломается если пропустить
- **`<Suspense>` обёртка** вокруг `HomeInner` нужна для `useSearchParams()` — без неё next build падает
- **`features` в `MODULES`** — лимиты лучше не дублировать пословно из БД, использовать обобщённый формат
  ("Безлимит · API · приоритет"), потому что строки в БД (lim`its` jsonb) и тексты лендинга — разные форматы
