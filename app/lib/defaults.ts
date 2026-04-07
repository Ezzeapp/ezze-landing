import { Scissors, Shirt, Stethoscope, Leaf, GraduationCap, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Product {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
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
    icon: Scissors,
    color: "from-pink-500 to-purple-600",
    url: "https://pro.ezze.site",
    features: ["Онлайн-запись", "Клиентская база", "Расписание", "Статистика"],
  },
  {
    slug: "workshop",
    name: "Ezze Workshop",
    description: "Управление химчисткой, ателье, ремонтными мастерскими",
    icon: Shirt,
    color: "from-blue-500 to-cyan-600",
    url: "https://workshop.ezze.site",
    features: ["Приём заказов", "Трекинг статуса", "SMS-уведомления", "Склад"],
    comingSoon: true,
  },
  {
    slug: "clinic",
    name: "Ezze Clinic",
    description: "Медицинские клиники, лаборатории и аптеки",
    icon: Stethoscope,
    color: "from-green-500 to-teal-600",
    url: "https://clinic.ezze.site",
    features: ["Электронная карта", "Запись к врачу", "Лаборатория", "Аптека"],
    comingSoon: true,
  },
  {
    slug: "farm",
    name: "Ezze Farm",
    description: "Управление сельскохозяйственным бизнесом",
    icon: Leaf,
    color: "from-yellow-500 to-orange-600",
    url: "https://farm.ezze.site",
    features: ["Учёт урожая", "Склад", "Продажи", "Аналитика"],
    comingSoon: true,
  },
  {
    slug: "edu",
    name: "Ezze Edu",
    description: "Учебные центры, школы и онлайн-курсы",
    icon: GraduationCap,
    color: "from-indigo-500 to-blue-600",
    url: "https://edu.ezze.site",
    features: ["Расписание", "Ученики", "Оплата", "Прогресс"],
    comingSoon: true,
  },
  {
    slug: "food",
    name: "Ezze Food",
    description: "Кафе, рестораны и службы доставки еды",
    icon: UtensilsCrossed,
    color: "from-red-500 to-orange-600",
    url: "https://food.ezze.site",
    features: ["Меню", "Заказы", "Доставка", "Столики"],
    comingSoon: true,
  },
];

export const STATS = [
  { value: "5 000+", label: "Мастеров и специалистов" },
  { value: "50 000+", label: "Записей в месяц" },
  { value: "6", label: "Языков интерфейса" },
  { value: "6", label: "Продуктов в экосистеме" },
];
