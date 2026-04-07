import {
  Scissors, Shirt, Stethoscope, Leaf, GraduationCap,
  UtensilsCrossed, CalendarDays, Building2, Car, Hammer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Product {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  iconName: string;
  color: string;
  url: string;
  features: string[];
  comingSoon?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    slug: "beauty",
    name: "Ezze Beauty",
    description: "Платформа для мастеров красоты, тренеров и самозанятых специалистов",
    icon: Scissors, iconName: "Scissors",
    color: "from-pink-500 to-purple-600",
    url: "https://pro.ezze.site",
    features: ["Онлайн-запись", "Клиентская база", "Расписание", "Статистика"],
  },
  {
    slug: "workshop",
    name: "Ezze Workshop",
    description: "Управление химчисткой, ателье, ремонтными мастерскими",
    icon: Shirt, iconName: "Shirt",
    color: "from-blue-500 to-cyan-600",
    url: "https://workshop.ezze.site",
    features: ["Приём заказов", "Трекинг статуса", "SMS-уведомления", "Склад"],
    comingSoon: true,
  },
  {
    slug: "clinic",
    name: "Ezze Clinic",
    description: "Медицинские клиники, лаборатории и аптеки",
    icon: Stethoscope, iconName: "Stethoscope",
    color: "from-green-500 to-teal-600",
    url: "https://clinic.ezze.site",
    features: ["Электронная карта", "Запись к врачу", "Лаборатория", "Аптека"],
    comingSoon: true,
  },
  {
    slug: "farm",
    name: "Ezze Farm",
    description: "Управление сельскохозяйственным бизнесом",
    icon: Leaf, iconName: "Leaf",
    color: "from-yellow-500 to-orange-600",
    url: "https://farm.ezze.site",
    features: ["Учёт урожая", "Склад", "Продажи", "Аналитика"],
    comingSoon: true,
  },
  {
    slug: "edu",
    name: "Ezze Edu",
    description: "Учебные центры, школы и онлайн-курсы",
    icon: GraduationCap, iconName: "GraduationCap",
    color: "from-indigo-500 to-blue-600",
    url: "https://edu.ezze.site",
    features: ["Расписание", "Ученики", "Оплата", "Прогресс"],
    comingSoon: true,
  },
  {
    slug: "food",
    name: "Ezze Food",
    description: "Кафе, рестораны и службы доставки еды",
    icon: UtensilsCrossed, iconName: "UtensilsCrossed",
    color: "from-red-500 to-orange-600",
    url: "https://food.ezze.site",
    features: ["Меню", "Заказы", "Доставка", "Столики"],
    comingSoon: true,
  },
  {
    slug: "event",
    name: "Ezze Event",
    description: "Мероприятия, организация событий и концертов",
    icon: CalendarDays, iconName: "CalendarDays",
    color: "from-violet-500 to-purple-600",
    url: "https://event.ezze.site",
    features: ["Расписание", "Бронирование", "Гости", "Уведомления"],
    comingSoon: true,
  },
  {
    slug: "hotel",
    name: "Ezze Hotel",
    description: "Управление гостиницами, хостелами и апартаментами",
    icon: Building2, iconName: "Building2",
    color: "from-sky-500 to-blue-600",
    url: "https://hotel.ezze.site",
    features: ["Бронирование", "Управление номерами", "Клиенты", "Аналитика"],
    comingSoon: true,
  },
  {
    slug: "transport",
    name: "Ezze Transport",
    description: "Автопарки, службы такси и грузоперевозок",
    icon: Car, iconName: "Car",
    color: "from-amber-500 to-orange-600",
    url: "https://transport.ezze.site",
    features: ["Маршруты", "Водители", "Заказы", "GPS"],
    comingSoon: true,
  },
  {
    slug: "build",
    name: "Ezze Build",
    description: "Строительные компании и ремонтные бригады",
    icon: Hammer, iconName: "Hammer",
    color: "from-stone-500 to-gray-600",
    url: "https://build.ezze.site",
    features: ["Проекты", "Сметы", "Материалы", "Команда"],
    comingSoon: true,
  },
];

export const STATS = [
  { value: "5 000+", label: "Мастеров и специалистов" },
  { value: "50 000+", label: "Записей в месяц" },
  { value: "9", label: "Языков интерфейса" },
  { value: "10", label: "Продуктов в экосистеме" },
];
