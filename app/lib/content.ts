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

  // Trust strip
  trust_label: string;

  // Stats
  stat_orders: string;
  stat_orgs: string;
  stat_uptime: string;
  stat_languages: string;

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
  module_banket_title: string;
  module_banket_desc: string;
  module_banket_meta: string;

  // Features (bento)
  features_eyebrow: string;
  features_title: string;
  features_subtitle: string;
  feat_realtime_title: string;
  feat_realtime_desc: string;
  feat_calendar_title: string;
  feat_calendar_desc: string;
  feat_roles_title: string;
  feat_roles_desc: string;
  feat_multi_title: string;
  feat_multi_desc: string;
  feat_i18n_title: string;
  feat_i18n_desc: string;
  feat_dark_title: string;
  feat_dark_desc: string;

  // Pricing
  pricing_eyebrow: string;
  pricing_title: string;
  pricing_subtitle: string;
  pricing_for: string;
  plan_free: string;
  plan_pro: string;
  plan_business: string;
  plan_per_month: string;
  plan_currency: string;
  plan_choose_free: string;
  plan_choose_pro: string;
  plan_choose_business: string;
  plan_popular: string;
  plan_includes: string;

  // FAQ
  faq_eyebrow: string;
  faq_title: string;
  faq_q1: string;
  faq_a1: string;
  faq_q2: string;
  faq_a2: string;
  faq_q3: string;
  faq_a3: string;
  faq_q4: string;
  faq_a4: string;
  faq_q5: string;
  faq_a5: string;

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
      "Клиенты, заказы, расписание и команда — в одной системе. Запустите за 5 минут.",
    hero_cta_primary: "Попробовать бесплатно",
    hero_cta_secondary: "Посмотреть модули",
    hero_subnote: "Без карты · Free-план без срока действия",

    trust_label: "Подходит для",

    stat_orders: "заказов в день обрабатывает один аккаунт",
    stat_orgs: "филиалов в одной оргe — без доплат",
    stat_uptime: "uptime инфраструктуры",
    stat_languages: "языка из коробки",

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
      "Заказы на уборку, выезды, услуги по часам и площади, привязка клиентов и команды.",
    module_cleaning_meta: "Уборка квартир · Офисы · Сухая чистка · Химчистка",
    module_beauty_title: "Бьюти",
    module_beauty_desc:
      "Запись клиентов к мастерам, расписание, длительность услуг, онлайн-бронь.",
    module_beauty_meta: "Салоны · Барбершопы · Косметология · Ногти",
    module_banket_title: "Банкеты",
    module_banket_desc:
      "События, гости, площадки, депозиты, многодневные бронирования.",
    module_banket_meta: "Рестораны · Залы торжеств · Корпоративы · Свадьбы",

    features_eyebrow: "Что внутри",
    features_title: "Готовые механизмы — без костылей",
    features_subtitle: "Каждая функция продумана и работает с первого дня.",
    feat_realtime_title: "Реальное время",
    feat_realtime_desc:
      "Изменения видны команде мгновенно, без F5. На любом устройстве.",
    feat_calendar_title: "Календарь с drag-and-drop",
    feat_calendar_desc:
      "Просмотр загрузки по неделям и месяцам, перенос заказов мышкой.",
    feat_roles_title: "Роли и права",
    feat_roles_desc:
      "Владелец, админ, менеджер, сотрудник — каждый видит только своё.",
    feat_multi_title: "Несколько бизнесов",
    feat_multi_desc:
      "Управляйте филиалами или разными бизнесами — переключение в один клик.",
    feat_i18n_title: "Три языка",
    feat_i18n_desc:
      "RU · EN · UZ из коробки. Клиент видит интерфейс на своём.",
    feat_dark_title: "Тёмная тема",
    feat_dark_desc:
      "Светлая или тёмная — каждый сотрудник выбирает под свои глаза.",

    pricing_eyebrow: "Тарифы",
    pricing_title: "Прозрачно. Без сюрпризов.",
    pricing_subtitle: "Платите только за активные модули. Отключайте в любой момент.",
    pricing_for: "Тарифы для модуля",
    plan_free: "Free",
    plan_pro: "Pro",
    plan_business: "Business",
    plan_per_month: "/мес",
    plan_currency: "сум",
    plan_choose_free: "Начать бесплатно",
    plan_choose_pro: "Выбрать Pro",
    plan_choose_business: "Связаться",
    plan_popular: "Популярный",
    plan_includes: "Включено",

    faq_eyebrow: "FAQ",
    faq_title: "Частые вопросы",
    faq_q1: "Сколько стоит начать?",
    faq_a1:
      "Бесплатный тариф без срока действия. Платите только когда нужны лимиты Pro.",
    faq_q2: "Можно ли отказаться в любой момент?",
    faq_a2:
      "Да. Тариф меняется в один клик в настройках, без писем и звонков.",
    faq_q3: "Где хранятся данные?",
    faq_a3:
      "Серверы в США (us-east-1) с TLS, изоляция организаций на уровне БД через row-level security.",
    faq_q4: "Есть ли API?",
    faq_a4:
      "Да, на тарифе Business доступен полный REST API для интеграций с CRM, телефонией и т.д.",
    faq_q5: "А мобильное приложение?",
    faq_a5:
      "Веб-версия адаптирована под телефон. Нативные iOS/Android — в планах на 2027.",

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
      "Clients, orders, schedule and team — in one system. Launch in 5 minutes.",
    hero_cta_primary: "Start free",
    hero_cta_secondary: "See modules",
    hero_subnote: "No card · Free plan never expires",

    trust_label: "Built for",

    stat_orders: "orders/day handled by a single account",
    stat_orgs: "branches in one org — no extra fees",
    stat_uptime: "infra uptime",
    stat_languages: "languages out of the box",

    modules_eyebrow: "Modules",
    modules_title: "Platform shapes around your business",
    modules_subtitle: "Enable only what you need. Pay only for active modules.",
    module_status_available: "Available",
    module_status_soon: "Soon",
    module_release: "Release",
    module_open: "Open",
    module_notify: "Notify me on launch",
    module_cleaning_title: "Cleaning",
    module_cleaning_desc:
      "On-site cleaning orders, hourly and per-sqm services, clients and team binding.",
    module_cleaning_meta: "Apartments · Offices · Dry cleaning · Carpets",
    module_beauty_title: "Beauty",
    module_beauty_desc:
      "Client bookings with stylists, schedule, service durations, online booking.",
    module_beauty_meta: "Salons · Barbershops · Cosmetology · Nails",
    module_banket_title: "Banquets",
    module_banket_desc: "Events, guests, venues, deposits, multi-day bookings.",
    module_banket_meta: "Restaurants · Halls · Corporate · Weddings",

    features_eyebrow: "What's inside",
    features_title: "Ready-made — no in-house duct tape",
    features_subtitle: "Every feature is thought through and works on day one.",
    feat_realtime_title: "Realtime",
    feat_realtime_desc:
      "Your team sees changes instantly, no refresh. On any device.",
    feat_calendar_title: "Calendar with drag-and-drop",
    feat_calendar_desc:
      "See weekly / monthly load and reschedule orders with your mouse.",
    feat_roles_title: "Roles & permissions",
    feat_roles_desc:
      "Owner, admin, manager, employee — each sees only what they should.",
    feat_multi_title: "Multiple businesses",
    feat_multi_desc:
      "Manage branches or separate businesses — switch in one click.",
    feat_i18n_title: "Three languages",
    feat_i18n_desc: "RU · EN · UZ out of the box. Clients see their own.",
    feat_dark_title: "Dark mode",
    feat_dark_desc:
      "Light or dark — every staff member picks what's easy on their eyes.",

    pricing_eyebrow: "Pricing",
    pricing_title: "Transparent. No surprises.",
    pricing_subtitle: "Pay only for active modules. Cancel any time.",
    pricing_for: "Plans for module",
    plan_free: "Free",
    plan_pro: "Pro",
    plan_business: "Business",
    plan_per_month: "/mo",
    plan_currency: "UZS",
    plan_choose_free: "Start free",
    plan_choose_pro: "Choose Pro",
    plan_choose_business: "Contact us",
    plan_popular: "Popular",
    plan_includes: "Included",

    faq_eyebrow: "FAQ",
    faq_title: "Frequently asked",
    faq_q1: "How much to start?",
    faq_a1:
      "The Free plan never expires. Upgrade to Pro only when you outgrow the limits.",
    faq_q2: "Can I cancel any time?",
    faq_a2: "Yes. Switch plans in one click, no emails or calls needed.",
    faq_q3: "Where is the data stored?",
    faq_a3:
      "Servers in the US (us-east-1) over TLS, orgs isolated via row-level security.",
    faq_q4: "Is there an API?",
    faq_a4:
      "Yes — the Business plan includes a full REST API for CRM, telephony and other integrations.",
    faq_q5: "Mobile app?",
    faq_a5:
      "The web version is mobile-friendly. Native iOS/Android apps are planned for 2027.",

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
      "Mijozlar, buyurtmalar, jadval va jamoa — bitta tizimda. 5 daqiqada ishga tushiring.",
    hero_cta_primary: "Bepul boshlash",
    hero_cta_secondary: "Modullarni ko'rish",
    hero_subnote: "Kartasiz · Free plan muddatsiz",

    trust_label: "Kim uchun",

    stat_orders: "buyurtma kuniga bitta akkaunt orqali",
    stat_orgs: "filial bir tashkilotda — qo'shimcha to'lovsiz",
    stat_uptime: "infrastruktura uptime",
    stat_languages: "til darhol",

    modules_eyebrow: "Modullar",
    modules_title: "Platforma sizning biznesingizga moslashadi",
    modules_subtitle:
      "Faqat keraklisini ulang. Faqat faol modullar uchun to'lang.",
    module_status_available: "Mavjud",
    module_status_soon: "Tez orada",
    module_release: "Reliz",
    module_open: "Ochish",
    module_notify: "Ishga tushgani haqida xabar berish",
    module_cleaning_title: "Tozalash",
    module_cleaning_desc:
      "Tozalash buyurtmalari, soatbay/m² xizmatlar, mijoz va jamoa bog'lanishi.",
    module_cleaning_meta: "Kvartiralar · Ofislar · Quruq tozalash · Gilamlar",
    module_beauty_title: "Go'zallik",
    module_beauty_desc:
      "Mijozlarni ustalarga yozish, jadval, xizmat davomiyligi, onlayn-bron.",
    module_beauty_meta: "Salonlar · Barbershop · Kosmetologiya · Manikür",
    module_banket_title: "Banketlar",
    module_banket_desc:
      "Tadbirlar, mehmonlar, zallar, depozitlar, ko'p kunlik bronlash.",
    module_banket_meta: "Restoranlar · Zallar · Korporativ · To'ylar",

    features_eyebrow: "Ichida nima bor",
    features_title: "Tayyor mexanizmlar — kostilsiz",
    features_subtitle: "Har bir funksiya o'ylab chiqilgan va birinchi kundan ishlaydi.",
    feat_realtime_title: "Realtime",
    feat_realtime_desc:
      "Jamoa o'zgarishlarni darhol ko'radi, F5 kerak emas.",
    feat_calendar_title: "Kalendar + drag-and-drop",
    feat_calendar_desc:
      "Hafta/oy bo'yicha yuklamani ko'ring, buyurtmalarni sichqoncha bilan ko'chiring.",
    feat_roles_title: "Rollar va huquqlar",
    feat_roles_desc:
      "Egasi, admin, menejer, xodim — har biri faqat o'ziga tegishlisini ko'radi.",
    feat_multi_title: "Bir nechta biznes",
    feat_multi_desc:
      "Filiallar yoki turli bizneslarni boshqaring — bir bosish bilan almashtiring.",
    feat_i18n_title: "Uch til",
    feat_i18n_desc:
      "RU · EN · UZ darhol. Mijoz o'z tilida ko'radi.",
    feat_dark_title: "Tungi rejim",
    feat_dark_desc:
      "Yorug' yoki tungi — har bir xodim o'ziga moslab tanlaydi.",

    pricing_eyebrow: "Tariflar",
    pricing_title: "Shaffof. Sürpriznosa.",
    pricing_subtitle: "Faqat faol modullar uchun to'lang. Istalgan vaqtda bekor qiling.",
    pricing_for: "Modul tariflari",
    plan_free: "Free",
    plan_pro: "Pro",
    plan_business: "Business",
    plan_per_month: "/oy",
    plan_currency: "so'm",
    plan_choose_free: "Bepul boshlash",
    plan_choose_pro: "Pro tanlash",
    plan_choose_business: "Bog'lanish",
    plan_popular: "Mashhur",
    plan_includes: "Kiritilgan",

    faq_eyebrow: "FAQ",
    faq_title: "Tez-tez beriladigan savollar",
    faq_q1: "Boshlash qancha turadi?",
    faq_a1:
      "Bepul tarifning muddati yo'q. Faqat limitlardan oshganda Pro ga o'tasiz.",
    faq_q2: "Istalgan vaqtda bekor qilsa bo'ladimi?",
    faq_a2: "Ha. Tarif sozlamalardan bir bosishda o'zgaradi.",
    faq_q3: "Ma'lumotlar qayerda saqlanadi?",
    faq_a3:
      "Serverlar AQSh (us-east-1), TLS, tashkilotlar ma'lumotlar bazasi darajasida ajratilgan.",
    faq_q4: "API bormi?",
    faq_a4:
      "Ha, Business tarifida CRM va boshqa integratsiyalar uchun to'liq REST API.",
    faq_q5: "Mobil ilova?",
    faq_a5:
      "Veb-versiya telefonga moslashgan. Native iOS/Android — 2027 yil rejasida.",

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
