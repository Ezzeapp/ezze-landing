import type { LucideIcon } from "lucide-react";
import { Sparkles, Scissors, UtensilsCrossed, Boxes, Wrench, BedDouble } from "lucide-react";

export type ModuleStatus = "available" | "soon";
export type PlanTier = "free" | "pro" | "pro_plus" | "business";

export interface ModulePlan {
  price: number;
  limits: { ru: string; en: string; uz: string };
}

export interface AppModule {
  slug: "cleaning" | "beauty" | "rental" | "service_center" | "banket" | "hotel";
  status: ModuleStatus;
  accent: string;
  icon: LucideIcon;
  release?: string;
  plans: Record<PlanTier, ModulePlan>;
}

// Стандартные лимиты для cleaning/beauty/rental/service_center
// (унифицированы в миграции 0006_unify_plans_and_defaults).
const STANDARD_LIMITS = {
  free: {
    ru: "50 заказов/мес · 1 филиал · 2 сотрудника · 100 клиентов",
    en: "50 orders/mo · 1 branch · 2 staff · 100 clients",
    uz: "50 buyurtma/oy · 1 filial · 2 xodim · 100 mijoz",
  },
  pro: {
    ru: "500 заказов/мес · 3 филиала · 6 сотрудников · 3 000 клиентов",
    en: "500 orders/mo · 3 branches · 6 staff · 3,000 clients",
    uz: "500 buyurtma/oy · 3 filial · 6 xodim · 3 000 mijoz",
  },
  pro_plus: {
    ru: "2 000 заказов/мес · 8 филиалов · 35 сотрудников · 20 000 клиентов",
    en: "2,000 orders/mo · 8 branches · 35 staff · 20,000 clients",
    uz: "2 000 buyurtma/oy · 8 filial · 35 xodim · 20 000 mijoz",
  },
  business: {
    ru: "Безлимит · API · приоритетная поддержка",
    en: "Unlimited · API · priority support",
    uz: "Cheksiz · API · ustuvor qo'llab-quvvatlash",
  },
};

const STANDARD_PRICES = { free: 0, pro: 199000, pro_plus: 399000, business: 899000 };

function standardPlans(): AppModule["plans"] {
  return {
    free: { price: STANDARD_PRICES.free, limits: STANDARD_LIMITS.free },
    pro: { price: STANDARD_PRICES.pro, limits: STANDARD_LIMITS.pro },
    pro_plus: { price: STANDARD_PRICES.pro_plus, limits: STANDARD_LIMITS.pro_plus },
    business: { price: STANDARD_PRICES.business, limits: STANDARD_LIMITS.business },
  };
}

export const MODULES: AppModule[] = [
  {
    slug: "cleaning",
    status: "available",
    accent: "#0ea5e9",
    icon: Sparkles,
    plans: standardPlans(),
  },
  {
    slug: "beauty",
    status: "available",
    accent: "#ec4899",
    icon: Scissors,
    plans: standardPlans(),
  },
  {
    slug: "rental",
    status: "available",
    accent: "#f59e0b",
    icon: Boxes,
    plans: standardPlans(),
  },
  {
    slug: "service_center",
    status: "available",
    accent: "#3b82f6",
    icon: Wrench,
    plans: standardPlans(),
  },
  {
    slug: "banket",
    status: "available",
    accent: "#a855f7",
    icon: UtensilsCrossed,
    plans: {
      free: {
        price: 0,
        limits: {
          ru: "5 событий/мес · 1 зал · 3 сотрудника",
          en: "5 events/mo · 1 venue · 3 staff",
          uz: "5 tadbir/oy · 1 zal · 3 xodim",
        },
      },
      pro: {
        price: 490000,
        limits: {
          ru: "50 событий/мес · 2 зала · 10 сотрудников · sit-план · депозиты",
          en: "50 events/mo · 2 venues · 10 staff · seating plan · deposits",
          uz: "50 tadbir/oy · 2 zal · 10 xodim · joylashuv rejasi · depozitlar",
        },
      },
      pro_plus: {
        price: 790000,
        limits: {
          ru: "100 событий/мес · 4 зала · 20 сотрудников · меню по гостям",
          en: "100 events/mo · 4 venues · 20 staff · per-guest menu",
          uz: "100 tadbir/oy · 4 zal · 20 xodim · mehmonlar bo'yicha menyu",
        },
      },
      business: {
        price: 1490000,
        limits: {
          ru: "Безлимит · API · CRM-интеграции · приоритет",
          en: "Unlimited · API · CRM integrations · priority",
          uz: "Cheksiz · API · CRM integratsiyalar · ustuvorlik",
        },
      },
    },
  },
  {
    slug: "hotel",
    status: "available",
    accent: "#0F766E",
    icon: BedDouble,
    plans: {
      free: {
        price: 0,
        limits: {
          ru: "5 номеров · 30 броней/мес · 2 сотрудника",
          en: "5 rooms · 30 bookings/mo · 2 staff",
          uz: "5 xona · 30 bron/oy · 2 xodim",
        },
      },
      pro: {
        price: 199000,
        limits: {
          ru: "15 номеров · ∞ броней · 6 сотрудников · Tape Chart · Floorplan · Housekeeping",
          en: "15 rooms · ∞ bookings · 6 staff · Tape Chart · Floorplan · Housekeeping",
          uz: "15 xona · ∞ bron · 6 xodim · Tape Chart · Floorplan · Tozalash",
        },
      },
      pro_plus: {
        price: 399000,
        limits: {
          ru: "40 номеров · Group bookings · Dynamic pricing · МВД-отчёт OVIR · TG-ваучер",
          en: "40 rooms · Group bookings · Dynamic pricing · OVIR report · TG voucher",
          uz: "40 xona · Guruh bronlari · Dinamik narxlash · OVIR hisoboti · TG vaucher",
        },
      },
      business: {
        price: 699000,
        limits: {
          ru: "Безлимит номеров · API · Channel manager (скоро) · приоритетная поддержка",
          en: "Unlimited rooms · API · Channel manager (soon) · priority support",
          uz: "Cheksiz xona · API · Channel manager (tez orada) · ustuvor qo'llab-quvvatlash",
        },
      },
    },
  },
];
