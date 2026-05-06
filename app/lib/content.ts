import type { Lang } from "./i18n";

export interface ContentDict {
  // Header
  nav_modules: string;
  nav_pricing: string;
  nav_about: string;
  login: string;
  start_free: string;

  // Hero
  hero_eyebrow: string;
  hero_title_a: string;
  hero_title_b: string;
  hero_subtitle: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;

  // Modules
  modules_title: string;
  modules_subtitle: string;
  module_status_available: string;
  module_status_soon: string;
  module_release: string;
  module_open: string;
  module_notify: string;
  module_cleaning_title: string;
  module_cleaning_desc: string;
  module_beauty_title: string;
  module_beauty_desc: string;
  module_banket_title: string;
  module_banket_desc: string;

  // Features
  features_title: string;
  features_subtitle: string;
  feat_multi_title: string;
  feat_multi_desc: string;
  feat_roles_title: string;
  feat_roles_desc: string;
  feat_realtime_title: string;
  feat_realtime_desc: string;
  feat_calendar_title: string;
  feat_calendar_desc: string;
  feat_i18n_title: string;
  feat_i18n_desc: string;
  feat_dark_title: string;
  feat_dark_desc: string;

  // Pricing
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

  // FAQ
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
  footer_about: string;
  footer_contacts: string;
  footer_privacy: string;
  footer_terms: string;
  footer_rights: string;
}

export const content: Record<Lang, ContentDict> = {
  ru: {
    nav_modules: "Модули",
    nav_pricing: "Тарифы",
    nav_about: "О нас",
    login: "Войти",
    start_free: "Начать бесплатно",

    hero_eyebrow: "Один аккаунт — один бизнес — все инструменты",
    hero_title_a: "SaaS-платформа",
    hero_title_b: "для сервисного бизнеса",
    hero_subtitle:
      "Клиенты, заказы, команда, расписание и аналитика — в одной системе. Запустите за 5 минут, без программистов.",
    hero_cta_primary: "Попробовать бесплатно",
    hero_cta_secondary: "Посмотреть модули",

    modules_title: "Модули",
    modules_subtitle:
      "Платформа собирается под ваш бизнес. Подключайте только то, что нужно.",
    module_status_available: "Доступен",
    module_status_soon: "Скоро",
    module_release: "Релиз",
    module_open: "Открыть",
    module_notify: "Сообщить о запуске",
    module_cleaning_title: "Клининг",
    module_cleaning_desc:
      "Заказы на уборку, выезды, услуги по часам и площади, привязка клиентов и команды.",
    module_beauty_title: "Бьюти",
    module_beauty_desc:
      "Запись клиентов к мастерам, расписание, длительность услуг, онлайн-бронь.",
    module_banket_title: "Банкеты",
    module_banket_desc:
      "События, гости, площадки, депозиты, многодневные бронирования.",

    features_title: "Что внутри",
    features_subtitle: "Готовые механизмы вместо самописных костылей.",
    feat_multi_title: "Несколько бизнесов в одном аккаунте",
    feat_multi_desc:
      "Управляйте филиалами или разными бизнесами — переключение в один клик.",
    feat_roles_title: "Роли и права",
    feat_roles_desc:
      "Владелец, администратор, менеджер, сотрудник — каждый видит только своё.",
    feat_realtime_title: "Realtime-обновления",
    feat_realtime_desc:
      "Изменения видны команде мгновенно, без F5. На любом устройстве.",
    feat_calendar_title: "Календарь и drag-and-drop",
    feat_calendar_desc:
      "Смотрите загрузку по неделям и месяцам, переносите заказы мышкой.",
    feat_i18n_title: "RU · EN · UZ",
    feat_i18n_desc:
      "Три языка из коробки — переключайтесь на лету, клиенты видят на своём.",
    feat_dark_title: "Тёмная тема",
    feat_dark_desc:
      "Светлая или тёмная — выбирает каждый сотрудник под свои глаза.",

    pricing_title: "Тарифы",
    pricing_subtitle: "Платите только за активный модуль. Отключайте в любой момент.",
    pricing_for: "Тарифы для модуля",
    plan_free: "Free",
    plan_pro: "Pro",
    plan_business: "Business",
    plan_per_month: "/мес",
    plan_currency: "сум",
    plan_choose_free: "Начать бесплатно",
    plan_choose_pro: "Выбрать Pro",
    plan_choose_business: "Выбрать Business",
    plan_popular: "Популярный",

    faq_title: "Частые вопросы",
    faq_q1: "Сколько стоит начать?",
    faq_a1:
      "Бесплатный тариф без срока действия. Платите только когда вырастет нагрузка и понадобятся лимиты Pro.",
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
      "Веб-версия адаптирована под телефон. Нативные приложения iOS/Android — в планах на 2027.",

    cta_title: "Запустите бизнес за 5 минут",
    cta_subtitle:
      "Регистрация бесплатна. Кредитная карта не нужна.",
    cta_button: "Создать аккаунт",

    footer_tagline: "Платформа для сервисного бизнеса",
    footer_modules: "Модули",
    footer_company: "Компания",
    footer_about: "О нас",
    footer_contacts: "Контакты",
    footer_privacy: "Конфиденциальность",
    footer_terms: "Условия",
    footer_rights: "Все права защищены",
  },

  en: {
    nav_modules: "Modules",
    nav_pricing: "Pricing",
    nav_about: "About",
    login: "Sign in",
    start_free: "Start free",

    hero_eyebrow: "One account — one business — every tool",
    hero_title_a: "SaaS platform",
    hero_title_b: "for service businesses",
    hero_subtitle:
      "Clients, orders, team, schedule and analytics — in one system. Launch in 5 minutes, no devs needed.",
    hero_cta_primary: "Start free",
    hero_cta_secondary: "See modules",

    modules_title: "Modules",
    modules_subtitle:
      "The platform shapes around your business. Enable only what you need.",
    module_status_available: "Available",
    module_status_soon: "Soon",
    module_release: "Release",
    module_open: "Open",
    module_notify: "Notify me on launch",
    module_cleaning_title: "Cleaning",
    module_cleaning_desc:
      "On-site cleaning orders, hourly and per-sqm services, clients and team binding.",
    module_beauty_title: "Beauty",
    module_beauty_desc:
      "Client bookings with stylists, schedule, service durations, online booking.",
    module_banket_title: "Banquets",
    module_banket_desc:
      "Events, guests, venues, deposits, multi-day bookings.",

    features_title: "What's inside",
    features_subtitle: "Ready-made tools instead of in-house duct tape.",
    feat_multi_title: "Multiple businesses in one account",
    feat_multi_desc:
      "Manage branches or separate businesses — switch in one click.",
    feat_roles_title: "Roles and permissions",
    feat_roles_desc:
      "Owner, admin, manager, employee — each sees only what they should.",
    feat_realtime_title: "Realtime updates",
    feat_realtime_desc:
      "Your team sees changes instantly, no refresh. On any device.",
    feat_calendar_title: "Calendar with drag-and-drop",
    feat_calendar_desc:
      "See weekly / monthly load and reschedule orders with your mouse.",
    feat_i18n_title: "RU · EN · UZ",
    feat_i18n_desc:
      "Three languages out of the box — switch live, clients see their own.",
    feat_dark_title: "Dark mode",
    feat_dark_desc:
      "Light or dark — every staff member picks what's easy on their eyes.",

    pricing_title: "Pricing",
    pricing_subtitle: "Pay only for the modules you use. Cancel any time.",
    pricing_for: "Plans for module",
    plan_free: "Free",
    plan_pro: "Pro",
    plan_business: "Business",
    plan_per_month: "/mo",
    plan_currency: "UZS",
    plan_choose_free: "Start free",
    plan_choose_pro: "Choose Pro",
    plan_choose_business: "Choose Business",
    plan_popular: "Popular",

    faq_title: "FAQ",
    faq_q1: "How much to start?",
    faq_a1:
      "The Free plan never expires. Upgrade to Pro only when you outgrow the limits.",
    faq_q2: "Can I cancel any time?",
    faq_a2:
      "Yes. Switch plans in one click in settings — no emails or calls needed.",
    faq_q3: "Where is the data stored?",
    faq_a3:
      "Servers in the US (us-east-1) over TLS, organizations isolated at the DB level via row-level security.",
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
    footer_about: "About",
    footer_contacts: "Contact",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_rights: "All rights reserved",
  },

  uz: {
    nav_modules: "Modullar",
    nav_pricing: "Tariflar",
    nav_about: "Biz haqimizda",
    login: "Kirish",
    start_free: "Bepul boshlash",

    hero_eyebrow: "Bitta akkaunt — bitta biznes — barcha vositalar",
    hero_title_a: "SaaS platforma",
    hero_title_b: "xizmat ko'rsatish biznesi uchun",
    hero_subtitle:
      "Mijozlar, buyurtmalar, jamoa, jadval va tahlil — bir tizimda. 5 daqiqada ishga tushiring.",
    hero_cta_primary: "Bepul boshlash",
    hero_cta_secondary: "Modullarni ko'rish",

    modules_title: "Modullar",
    modules_subtitle:
      "Platforma sizning bizmesingizga moslashadi. Faqat keraklisini ulang.",
    module_status_available: "Mavjud",
    module_status_soon: "Tez orada",
    module_release: "Reliz",
    module_open: "Ochish",
    module_notify: "Ishga tushgani haqida xabar berish",
    module_cleaning_title: "Tozalash",
    module_cleaning_desc:
      "Tozalash buyurtmalari, soatbay/m² xizmatlar, mijoz va jamoa bog'lanishi.",
    module_beauty_title: "Goʻzallik",
    module_beauty_desc:
      "Mijozlarni ustalarga yozish, jadval, xizmat davomiyligi, onlayn-bron.",
    module_banket_title: "Banketlar",
    module_banket_desc:
      "Tadbirlar, mehmonlar, zallar, depozitlar, ko'p kunlik bronlash.",

    features_title: "Ichida nima bor",
    features_subtitle: "Tayyor mexanizmlar — qo'lda yozilgan kostillar o'rnida.",
    feat_multi_title: "Bitta akkauntda bir nechta biznes",
    feat_multi_desc:
      "Filiallar yoki turli bizneslarni boshqaring — bir bosish bilan almashtirib turing.",
    feat_roles_title: "Rollar va huquqlar",
    feat_roles_desc:
      "Egasi, admin, menejer, xodim — har biri faqat o'ziga tegishlisini ko'radi.",
    feat_realtime_title: "Realtime yangilanishlar",
    feat_realtime_desc:
      "Jamoa o'zgarishlarni darhol ko'radi, F5 kerak emas.",
    feat_calendar_title: "Kalendar + drag-and-drop",
    feat_calendar_desc:
      "Hafta/oy bo'yicha yuklamani ko'ring, buyurtmalarni sichqoncha bilan ko'chiring.",
    feat_i18n_title: "RU · EN · UZ",
    feat_i18n_desc:
      "Uch til darhol — istalgan vaqtda almashtirish, mijozlar o'z tilida ko'radi.",
    feat_dark_title: "Tungi rejim",
    feat_dark_desc:
      "Yorug' yoki tungi — har bir xodim o'ziga moslab tanlaydi.",

    pricing_title: "Tariflar",
    pricing_subtitle: "Faqat ishlatadigan modul uchun to'lang. Istalgan vaqtda bekor qiling.",
    pricing_for: "Modul tariflari",
    plan_free: "Free",
    plan_pro: "Pro",
    plan_business: "Business",
    plan_per_month: "/oy",
    plan_currency: "soʻm",
    plan_choose_free: "Bepul boshlash",
    plan_choose_pro: "Pro tanlash",
    plan_choose_business: "Business tanlash",
    plan_popular: "Mashhur",

    faq_title: "Tez-tez beriladigan savollar",
    faq_q1: "Boshlash qancha turadi?",
    faq_a1:
      "Bepul tarifning muddati yo'q. Faqat limitlardan oshganda Pro ga o'tasiz.",
    faq_q2: "Istalgan vaqtda bekor qilsa bo'ladimi?",
    faq_a2:
      "Ha. Tarif sozlamalardan bir bosishda o'zgaradi.",
    faq_q3: "Ma'lumotlar qayerda saqlanadi?",
    faq_a3:
      "Serverlar AQSh (us-east-1), TLS himoyasi, tashkilotlar ma'lumotlar bazasi darajasida ajratilgan.",
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
