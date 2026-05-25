import type { Lang } from "./i18n";

export interface ContentDict {
  // Header
  nav_features: string;
  nav_modules: string;
  nav_pricing: string;
  nav_faq: string;
  login: string;
  start_free: string;

  // Hero
  hero_eyebrow: string;
  hero_title_a: string;
  hero_title_b: string;
  hero_subtitle: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  hero_subnote: string;
  hero_stat_uptime: string;
  hero_stat_launch: string;
  hero_stat_languages: string;
  hero_stat_modules: string;

  // Modules
  modules_eyebrow: string;
  modules_title: string;
  modules_subtitle: string;
  module_status_available: string;
  module_status_soon: string;
  module_release: string;
  module_open: string;
  module_notify: string;
  module_cleaning_title: string;
  module_cleaning_desc: string;
  module_cleaning_meta: string;
  module_beauty_title: string;
  module_beauty_desc: string;
  module_beauty_meta: string;
  module_rental_title: string;
  module_rental_desc: string;
  module_rental_meta: string;
  module_service_center_title: string;
  module_service_center_desc: string;
  module_service_center_meta: string;
  module_banket_title: string;
  module_banket_desc: string;
  module_banket_meta: string;
  module_hotel_title: string;
  module_hotel_desc: string;
  module_hotel_meta: string;

  // Features (bento)
  features_eyebrow: string;
  features_title: string;
  features_subtitle: string;
  feat_realtime_title: string;
  feat_realtime_desc: string;
  feat_telegram_title: string;
  feat_telegram_desc: string;
  feat_booking_title: string;
  feat_booking_desc: string;
  feat_finance_title: string;
  feat_finance_desc: string;
  feat_pricing_title: string;
  feat_pricing_desc: string;
  feat_inventory_title: string;
  feat_inventory_desc: string;
  feat_payroll_title: string;
  feat_payroll_desc: string;
  feat_roles_title: string;
  feat_roles_desc: string;
  feat_multi_title: string;
  feat_multi_desc: string;
  feat_i18n_title: string;
  feat_i18n_desc: string;

  // Pricing
  pricing_eyebrow: string;
  pricing_title: string;
  pricing_subtitle: string;
  pricing_for: string;
  plan_free: string;
  plan_pro: string;
  plan_pro_plus: string;
  plan_business: string;
  plan_per_month: string;
  plan_currency: string;
  plan_choose_free: string;
  plan_choose_pro: string;
  plan_choose_pro_plus: string;
  plan_choose_business: string;
  plan_popular: string;
  plan_includes: string;

  // FAQ
  faq_eyebrow: string;
  faq_title: string;
  faq_q1: string; faq_a1: string;
  faq_q2: string; faq_a2: string;
  faq_q3: string; faq_a3: string;
  faq_q4: string; faq_a4: string;
  faq_q5: string; faq_a5: string;
  faq_q6: string; faq_a6: string;
  faq_q7: string; faq_a7: string;

  // CTA
  cta_title: string;
  cta_subtitle: string;
  cta_button: string;

  // Footer
  footer_tagline: string;
  footer_modules: string;
  footer_company: string;
  footer_legal: string;
  footer_about: string;
  footer_contacts: string;
  footer_privacy: string;
  footer_terms: string;
  footer_rights: string;
}

export const content: Record<Lang, ContentDict> = {
  ru: {
    nav_features: "Возможности",
    nav_modules: "Модули",
    nav_pricing: "Тарифы",
    nav_faq: "Вопросы",
    login: "Войти",
    start_free: "Начать бесплатно",

    hero_eyebrow: "SaaS-платформа для сервисного бизнеса",
    hero_title_a: "Управляйте бизнесом",
    hero_title_b: "без хаоса",
    hero_subtitle:
      "Клиенты, заказы, расписание, склад и команда — в одной системе. 5 модулей под разные бизнесы. Запустите за 5 минут.",
    hero_cta_primary: "Попробовать бесплатно",
    hero_cta_secondary: "Посмотреть модули",
    hero_subnote: "Без карты · Free-план без срока действия",
    hero_stat_uptime: "uptime",
    hero_stat_launch: "запуск",
    hero_stat_languages: "языка",
    hero_stat_modules: "модулей",

    modules_eyebrow: "Модули",
    modules_title: "Платформа собирается под ваш бизнес",
    modules_subtitle: "Подключайте только то, что нужно. Платите за активные.",
    module_status_available: "Доступен",
    module_status_soon: "Скоро",
    module_release: "Релиз",
    module_open: "Открыть",
    module_notify: "Сообщить о запуске",

    module_cleaning_title: "Клининг",
    module_cleaning_desc:
      "Заказы на уборку, химчистка по весу/категориям, мойка окон, постремонтная — 5 бизнес-профилей с каталогом услуг.",
    module_cleaning_meta: "Уборка квартир · Химчистка · Окна · Постремонтная · Кожа/мех",

    module_beauty_title: "Бьюти",
    module_beauty_desc:
      "Запись клиентов к мастерам, расписание с перерывами, длительность услуг, online-бронь через публичную ссылку.",
    module_beauty_meta: "Салоны · Барбершопы · Косметология · Ногти · Брови",

    module_rental_title: "Аренда",
    module_rental_desc:
      "Прокат с депозитами и просрочкой. Conflict-trigger по количеству экземпляров, авто-расчёт суммы за дни.",
    module_rental_meta: "Авто · Дроны · Электроника · Костюмы · Спорт-инвентарь",

    module_service_center_title: "Сервис-центр",
    module_service_center_desc:
      "Приёмка устройств с пайплайном статусов (диагностика → запчасти → ремонт → выдача), история, фото.",
    module_service_center_meta: "Телефоны · Ноутбуки · Авто · Бытовая техника",

    module_banket_title: "Банкеты",
    module_banket_desc:
      "События, гости, площадки, депозиты, многодневные бронирования, меню на гостя, sit-план.",
    module_banket_meta: "Рестораны · Залы торжеств · Корпоративы · Свадьбы",

    module_hotel_title: "Гостиница",
    module_hotel_desc:
      "PMS для мини-отелей и гестхаузов. Tape Chart на месяц вперёд, drag-n-drop переселения, план этажа, групповые брони, МВД-отчёт OVIR, dynamic pricing. Фиксированная цена за весь отель — не платите за каждый номер.",
    module_hotel_meta: "Гестхаузы · Мини-отели · Бутик-отели · Апартаменты",

    features_eyebrow: "Что внутри",
    features_title: "Готовые механизмы — не нужно собирать",
    features_subtitle:
      "Не CRM-конструктор, а готовый продукт. Каждая функция работает с первого дня.",

    feat_realtime_title: "Реальное время",
    feat_realtime_desc:
      "Изменения видны команде мгновенно, без F5. Заказ принят на ресепшене — он уже в смартфоне у мастера.",
    feat_telegram_title: "Telegram-бот",
    feat_telegram_desc:
      "OTP-логин, push-уведомления клиенту (~1 сек), inline-кнопки cancel/rate, привязка номера, отправка квитанции картинкой.",
    feat_booking_title: "Онлайн-запись",
    feat_booking_desc:
      "Публичная страница /p/ваш-бренд: клиент сам выбирает услугу, мастера и время. Без логина, с rate-limit.",
    feat_finance_title: "Финансы и лояльность",
    feat_finance_desc:
      "Multi-payment (Click/наличные/карта), промокоды с лимитом использований, бонусная программа с настраиваемым % начисления.",
    feat_pricing_title: "Pricing engine",
    feat_pricing_desc:
      "Единый движок: скидки по дате/периоду/дню недели, надбавки за срочность, доставка с адресом и тарифом. Live-preview в форме заказа.",
    feat_inventory_title: "Склад и расходники",
    feat_inventory_desc:
      "Автосписание расходников при completed-заказе, low-stock алерты в Telegram, immutable-история движений, привязка к услугам.",
    feat_payroll_title: "Зарплаты",
    feat_payroll_desc:
      "3 типа ставок (фикс / % от заказа / % от услуг), авто-начисления при завершении, выплаты одной кнопкой, отчёт по периодам.",
    feat_roles_title: "Роли и права",
    feat_roles_desc: "Владелец / админ / менеджер / сотрудник — RLS, каждый видит только своё.",
    feat_multi_title: "Несколько бизнесов",
    feat_multi_desc: "Филиалы или отдельные бизнесы — переключение в один клик.",
    feat_i18n_title: "3 языка · тёмная тема",
    feat_i18n_desc: "RU · EN · UZ из коробки. Светлая или тёмная — на выбор сотрудника.",

    pricing_eyebrow: "Тарифы",
    pricing_title: "Прозрачно. Без сюрпризов.",
    pricing_subtitle: "Платите только за активные модули. Меняйте тариф в один клик.",
    pricing_for: "Тарифы для модуля",
    plan_free: "Free",
    plan_pro: "Pro",
    plan_pro_plus: "Pro+",
    plan_business: "Business",
    plan_per_month: "/мес",
    plan_currency: "сум",
    plan_choose_free: "Начать бесплатно",
    plan_choose_pro: "Выбрать Pro",
    plan_choose_pro_plus: "Выбрать Pro+",
    plan_choose_business: "Связаться",
    plan_popular: "Популярный",
    plan_includes: "Включено",

    faq_eyebrow: "FAQ",
    faq_title: "Частые вопросы",
    faq_q1: "Сколько стоит начать?",
    faq_a1:
      "Бесплатный тариф без срока действия — 50 заказов в месяц, 1 филиал, 2 сотрудника. Платите только когда нужны лимиты Pro.",
    faq_q2: "Можно ли отказаться в любой момент?",
    faq_a2: "Да. Тариф меняется в один клик в настройках, без писем и звонков.",
    faq_q3: "Чем отличается Pro от Pro+?",
    faq_a3:
      "Pro закрывает потребности студии до 6 человек. Pro+ — для растущей сети: 35 сотрудников, 8 филиалов, branch-метки, AI-помощник, цены по филиалам.",
    faq_q4: "Где хранятся данные?",
    faq_a4:
      "Self-hosted Supabase на нашей инфраструктуре, TLS, изоляция организаций на уровне БД через row-level security.",
    faq_q5: "Как принимать оплату?",
    faq_a5:
      "Click для Узбекистана встроен. Также вручную: наличные, карта, перевод — multi-payment с разными статусами.",
    faq_q6: "А мобильное приложение?",
    faq_a6:
      "Веб-версия полностью адаптирована под телефон, работает в браузере смартфона. Telegram-бот закрывает push-уведомления.",
    faq_q7: "Есть ли API?",
    faq_a7:
      "Да, на тарифе Business доступен полный REST API для интеграций с CRM, телефонией, 1С.",

    cta_title: "Запустите бизнес за 5 минут",
    cta_subtitle: "Регистрация бесплатна. Карта не нужна.",
    cta_button: "Создать аккаунт",

    footer_tagline: "Платформа для сервисного бизнеса",
    footer_modules: "Модули",
    footer_company: "Компания",
    footer_legal: "Юридическое",
    footer_about: "О нас",
    footer_contacts: "Контакты",
    footer_privacy: "Конфиденциальность",
    footer_terms: "Условия",
    footer_rights: "Все права защищены",
  },

  en: {
    nav_features: "Features",
    nav_modules: "Modules",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    login: "Sign in",
    start_free: "Start free",

    hero_eyebrow: "SaaS platform for service businesses",
    hero_title_a: "Run your business",
    hero_title_b: "without the chaos",
    hero_subtitle:
      "Clients, orders, schedule, inventory and team — in one system. 5 modules for different businesses. Launch in 5 minutes.",
    hero_cta_primary: "Start free",
    hero_cta_secondary: "See modules",
    hero_subnote: "No card · Free plan never expires",
    hero_stat_uptime: "uptime",
    hero_stat_launch: "to launch",
    hero_stat_languages: "languages",
    hero_stat_modules: "modules",

    modules_eyebrow: "Modules",
    modules_title: "The platform shapes around your business",
    modules_subtitle: "Enable only what you need. Pay only for active modules.",
    module_status_available: "Available",
    module_status_soon: "Soon",
    module_release: "Release",
    module_open: "Open",
    module_notify: "Notify me on launch",

    module_cleaning_title: "Cleaning",
    module_cleaning_desc:
      "Cleaning orders, dry-clean by weight/category, window-wash, post-renovation — 5 business profiles with a service catalog.",
    module_cleaning_meta: "Apartments · Dry cleaning · Windows · Post-renovation · Leather/fur",

    module_beauty_title: "Beauty",
    module_beauty_desc:
      "Client bookings with stylists, schedules with breaks, service durations, online booking via public link.",
    module_beauty_meta: "Salons · Barbershops · Cosmetology · Nails · Brows",

    module_rental_title: "Rental",
    module_rental_desc:
      "Rental with deposits and late fees. Conflict-trigger by item quantity, auto-calculated total by days.",
    module_rental_meta: "Cars · Drones · Electronics · Costumes · Sports gear",

    module_service_center_title: "Service center",
    module_service_center_desc:
      "Device intake with a status pipeline (diagnostics → parts → repair → handover), history, photos.",
    module_service_center_meta: "Phones · Laptops · Cars · Appliances",

    module_banket_title: "Banquets",
    module_banket_desc:
      "Events, guests, venues, deposits, multi-day bookings, per-guest menu, seating plan.",
    module_banket_meta: "Restaurants · Halls · Corporate · Weddings",

    module_hotel_title: "Hotel",
    module_hotel_desc:
      "PMS for mini-hotels and guesthouses. 30-day Tape Chart, drag-n-drop relocations, floor plan, group bookings, OVIR report, dynamic pricing. Flat price for the whole hotel — no per-room fees.",
    module_hotel_meta: "Guesthouses · Mini-hotels · Boutique · Apartments",

    features_eyebrow: "What's inside",
    features_title: "Built-in — no in-house duct tape",
    features_subtitle:
      "Not a CRM construction kit, but a finished product. Every feature works on day one.",

    feat_realtime_title: "Realtime",
    feat_realtime_desc:
      "Your team sees changes instantly, no refresh. Order accepted at the front desk shows up on the technician's phone right away.",
    feat_telegram_title: "Telegram bot",
    feat_telegram_desc:
      "OTP login, client push notifications (~1s), inline cancel/rate buttons, phone-number binding, receipts as images.",
    feat_booking_title: "Online booking",
    feat_booking_desc:
      "Public page /p/your-brand: the client picks service, staff and time. No login, rate-limited.",
    feat_finance_title: "Finance & loyalty",
    feat_finance_desc:
      "Multi-payment (Click/cash/card), promo codes with usage limit, bonus program with adjustable accrual %.",
    feat_pricing_title: "Pricing engine",
    feat_pricing_desc:
      "One engine: discounts by date/range/weekday, surcharges for urgency, delivery with address and tariff. Live preview in the order form.",
    feat_inventory_title: "Inventory & consumables",
    feat_inventory_desc:
      "Auto-deduct on completed orders, low-stock Telegram alerts, immutable movement history, service-to-consumable binding.",
    feat_payroll_title: "Payroll",
    feat_payroll_desc:
      "3 rate types (fixed / % of order / % of services), auto-accrual on completion, bulk payout, period reports.",
    feat_roles_title: "Roles & permissions",
    feat_roles_desc: "Owner / admin / manager / employee — RLS, each sees only what they should.",
    feat_multi_title: "Multiple businesses",
    feat_multi_desc: "Manage branches or separate businesses — switch in one click.",
    feat_i18n_title: "3 languages · dark mode",
    feat_i18n_desc: "RU · EN · UZ out of the box. Light or dark — each user picks.",

    pricing_eyebrow: "Pricing",
    pricing_title: "Transparent. No surprises.",
    pricing_subtitle: "Pay only for active modules. Switch any time in one click.",
    pricing_for: "Plans for module",
    plan_free: "Free",
    plan_pro: "Pro",
    plan_pro_plus: "Pro+",
    plan_business: "Business",
    plan_per_month: "/mo",
    plan_currency: "UZS",
    plan_choose_free: "Start free",
    plan_choose_pro: "Choose Pro",
    plan_choose_pro_plus: "Choose Pro+",
    plan_choose_business: "Contact us",
    plan_popular: "Popular",
    plan_includes: "Included",

    faq_eyebrow: "FAQ",
    faq_title: "Frequently asked",
    faq_q1: "How much does it cost to start?",
    faq_a1:
      "Free plan never expires — 50 orders/mo, 1 branch, 2 staff. Upgrade to Pro only when you outgrow the limits.",
    faq_q2: "Can I cancel any time?",
    faq_a2: "Yes. Switch plans in one click, no emails or calls needed.",
    faq_q3: "What's the difference between Pro and Pro+?",
    faq_a3:
      "Pro covers a studio with up to 6 staff. Pro+ — for a growing chain: 35 staff, 8 branches, branch labels, AI assistant, per-branch pricing.",
    faq_q4: "Where is the data stored?",
    faq_a4:
      "Self-hosted Supabase on our infrastructure, TLS, organizations isolated at the DB level via row-level security.",
    faq_q5: "How do I accept payments?",
    faq_a5:
      "Click for Uzbekistan is built-in. Plus manual: cash, card, transfer — multi-payment with status tracking.",
    faq_q6: "Mobile app?",
    faq_a6:
      "The web version is fully mobile-friendly. The Telegram bot covers push notifications.",
    faq_q7: "Is there an API?",
    faq_a7:
      "Yes — the Business plan includes a full REST API for CRM, telephony and other integrations.",

    cta_title: "Launch your business in 5 minutes",
    cta_subtitle: "Free to register. No credit card required.",
    cta_button: "Create account",

    footer_tagline: "SaaS platform for service businesses",
    footer_modules: "Modules",
    footer_company: "Company",
    footer_legal: "Legal",
    footer_about: "About",
    footer_contacts: "Contact",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_rights: "All rights reserved",
  },

  uz: {
    nav_features: "Imkoniyatlar",
    nav_modules: "Modullar",
    nav_pricing: "Tariflar",
    nav_faq: "Savollar",
    login: "Kirish",
    start_free: "Bepul boshlash",

    hero_eyebrow: "Xizmat ko'rsatish biznesi uchun SaaS platforma",
    hero_title_a: "Biznesingizni boshqaring",
    hero_title_b: "tartibsizliksiz",
    hero_subtitle:
      "Mijozlar, buyurtmalar, jadval, ombor va jamoa — bitta tizimda. 5 ta modul har xil bizneslar uchun. 5 daqiqada ishga tushiring.",
    hero_cta_primary: "Bepul boshlash",
    hero_cta_secondary: "Modullarni ko'rish",
    hero_subnote: "Kartasiz · Free plan muddatsiz",
    hero_stat_uptime: "uptime",
    hero_stat_launch: "ishga tushirish",
    hero_stat_languages: "til",
    hero_stat_modules: "modul",

    modules_eyebrow: "Modullar",
    modules_title: "Platforma sizning biznesingizga moslashadi",
    modules_subtitle: "Faqat keraklisini ulang. Faqat faol modullar uchun to'lang.",
    module_status_available: "Mavjud",
    module_status_soon: "Tez orada",
    module_release: "Reliz",
    module_open: "Ochish",
    module_notify: "Ishga tushgani haqida xabar berish",

    module_cleaning_title: "Tozalash",
    module_cleaning_desc:
      "Tozalash buyurtmalari, og'irlik bo'yicha kimyoviy tozalash, oyna yuvish, ta'mirdan keyingi — 5 ta biznes profili va xizmatlar katalogi.",
    module_cleaning_meta: "Kvartiralar · Kimyoviy · Oynalar · Ta'mirdan keyin · Charm/mo'yna",

    module_beauty_title: "Go'zallik",
    module_beauty_desc:
      "Mijozlarni ustalarga yozish, tanaffusli jadval, xizmat davomiyligi, omma uchun havola orqali onlayn yozuv.",
    module_beauty_meta: "Salonlar · Barbershop · Kosmetologiya · Manikür · Qoshlar",

    module_rental_title: "Ijara",
    module_rental_desc:
      "Depozit va kechikish to'lovlari bilan ijara. Nusxalar soni bo'yicha conflict-trigger, kunlar bo'yicha avtomatik hisob.",
    module_rental_meta: "Avto · Dronlar · Elektronika · Kostyumlar · Sport jihozlari",

    module_service_center_title: "Servis markazi",
    module_service_center_desc:
      "Qurilmalarni qabul qilish, holatlar pipeline (diagnostika → ehtiyot qism → ta'mir → topshirish), tarix, fotosuratlar.",
    module_service_center_meta: "Telefonlar · Noutbuklar · Avto · Maishiy texnika",

    module_banket_title: "Banketlar",
    module_banket_desc:
      "Tadbirlar, mehmonlar, zallar, depozitlar, ko'p kunlik bronlash, mehmon bo'yicha menyu, joylashuv rejasi.",
    module_banket_meta: "Restoranlar · Zallar · Korporativ · To'ylar",

    module_hotel_title: "Mehmonxona",
    module_hotel_desc:
      "Mini-mehmonxonalar va gestxauslar uchun PMS. 30-kunlik Tape Chart, drag-n-drop ko'chirish, qavat rejasi, guruh bronlari, OVIR hisoboti, dinamik narxlash. Butun mehmonxona uchun qat'iy narx — har bir xona uchun to'lamaysiz.",
    module_hotel_meta: "Gestxauslar · Mini-mehmonxonalar · Butik · Apartments",

    features_eyebrow: "Ichida nima bor",
    features_title: "Tayyor mexanizmlar — yig'ish kerak emas",
    features_subtitle:
      "CRM-konstruktor emas, tayyor mahsulot. Har bir funksiya birinchi kundan ishlaydi.",

    feat_realtime_title: "Realtime",
    feat_realtime_desc:
      "Jamoa o'zgarishlarni darhol ko'radi, F5 kerak emas. Resepshenda qabul qilingan buyurtma usta telefonida zudlik bilan paydo bo'ladi.",
    feat_telegram_title: "Telegram bot",
    feat_telegram_desc:
      "OTP-login, mijozga push (~1 soniya), inline tugmalar cancel/rate, raqam bog'lash, rasm sifatida kvitansiya yuborish.",
    feat_booking_title: "Onlayn yozuv",
    feat_booking_desc:
      "Omma uchun sahifa /p/brendingiz: mijoz xizmat, usta va vaqtni o'zi tanlaydi. Loginsiz, rate-limit bilan.",
    feat_finance_title: "Moliya va loyalty",
    feat_finance_desc:
      "Multi-payment (Click/naqd/karta), foydalanish chegarali promokodlar, sozlanadigan % bilan bonus dasturi.",
    feat_pricing_title: "Narx-engine",
    feat_pricing_desc:
      "Yagona dvigatel: sana/davr/hafta kuni bo'yicha chegirmalar, shoshilinch uchun qo'shimcha to'lov, manzil va tarif bilan yetkazib berish. Buyurtma shaklida live-preview.",
    feat_inventory_title: "Ombor va sarflanadiganlar",
    feat_inventory_desc:
      "Completed buyurtmada avto-yechib tashlash, low-stock Telegram alertlari, immutable harakat tarixi, xizmatga bog'lash.",
    feat_payroll_title: "Maoshlar",
    feat_payroll_desc:
      "3 stavka turi (fiks / buyurtmadan % / xizmatlardan %), tugatishda avto-hisoblash, bir tugma bilan to'lov, davr bo'yicha hisobot.",
    feat_roles_title: "Rollar va huquqlar",
    feat_roles_desc: "Egasi / admin / menejer / xodim — RLS, har biri o'ziniki ko'radi.",
    feat_multi_title: "Bir nechta biznes",
    feat_multi_desc: "Filiallar yoki turli bizneslarni boshqaring — bir bosish bilan almashtiring.",
    feat_i18n_title: "3 til · tungi rejim",
    feat_i18n_desc: "RU · EN · UZ darhol. Yorug' yoki tungi — xodim o'zi tanlaydi.",

    pricing_eyebrow: "Tariflar",
    pricing_title: "Shaffof. Hech qanday sürpriz yo'q.",
    pricing_subtitle: "Faqat faol modullar uchun to'lang. Istalgan vaqtda bir bosishda almashtiring.",
    pricing_for: "Modul tariflari",
    plan_free: "Free",
    plan_pro: "Pro",
    plan_pro_plus: "Pro+",
    plan_business: "Business",
    plan_per_month: "/oy",
    plan_currency: "so'm",
    plan_choose_free: "Bepul boshlash",
    plan_choose_pro: "Pro tanlash",
    plan_choose_pro_plus: "Pro+ tanlash",
    plan_choose_business: "Bog'lanish",
    plan_popular: "Mashhur",
    plan_includes: "Kiritilgan",

    faq_eyebrow: "FAQ",
    faq_title: "Tez-tez beriladigan savollar",
    faq_q1: "Boshlash qancha turadi?",
    faq_a1:
      "Bepul tarifning muddati yo'q — 50 buyurtma/oy, 1 filial, 2 xodim. Faqat limitlardan oshganda Pro ga o'tasiz.",
    faq_q2: "Istalgan vaqtda bekor qilsa bo'ladimi?",
    faq_a2: "Ha. Tarif sozlamalardan bir bosishda o'zgaradi.",
    faq_q3: "Pro va Pro+ farqi nima?",
    faq_a3:
      "Pro 6 xodimgacha bo'lgan studiyani qoplaydi. Pro+ — o'sayotgan tarmoq uchun: 35 xodim, 8 filial, filial yorliqlari, AI-yordamchi, filial bo'yicha narxlar.",
    faq_q4: "Ma'lumotlar qayerda saqlanadi?",
    faq_a4:
      "O'z infratuzilmamizdagi self-hosted Supabase, TLS, tashkilotlar ma'lumotlar bazasi darajasida row-level security orqali ajratilgan.",
    faq_q5: "To'lovni qanday qabul qilaman?",
    faq_a5:
      "O'zbekiston uchun Click ichida. Shuningdek qo'lda: naqd, karta, o'tkazma — turli statusli multi-payment.",
    faq_q6: "Mobil ilova bormi?",
    faq_a6:
      "Veb-versiya to'liq mobilga moslashgan. Telegram bot push bildirishnomalarni qoplaydi.",
    faq_q7: "API bormi?",
    faq_a7:
      "Ha, Business tarifida CRM, telefoniya va boshqa integratsiyalar uchun to'liq REST API.",

    cta_title: "Biznesingizni 5 daqiqada ishga tushiring",
    cta_subtitle: "Ro'yxatdan o'tish bepul. Karta talab qilinmaydi.",
    cta_button: "Akkaunt yaratish",

    footer_tagline: "Xizmat ko'rsatish biznesi uchun SaaS platforma",
    footer_modules: "Modullar",
    footer_company: "Kompaniya",
    footer_legal: "Huquqiy",
    footer_about: "Biz haqimizda",
    footer_contacts: "Aloqa",
    footer_privacy: "Maxfiylik",
    footer_terms: "Shartlar",
    footer_rights: "Barcha huquqlar himoyalangan",
  },
};

export function tr(lang: Lang): ContentDict {
  return content[lang] ?? content.ru;
}
