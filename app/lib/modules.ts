import type { LucideIcon } from "lucide-react";
import { Sparkles, Scissors, UtensilsCrossed } from "lucide-react";

export type ModuleStatus = "available" | "soon";

export interface ModulePlan {
  price: number;
  limits: { ru: string; en: string; uz: string };
}

export interface AppModule {
  slug: "cleaning" | "beauty" | "banket";
  status: ModuleStatus;
  accent: string;
  icon: LucideIcon;
  release?: string;
  plans: {
    free: ModulePlan;
    pro: ModulePlan;
    business: ModulePlan;
  };
}

export const MODULES: AppModule[] = [
  {
    slug: "cleaning",
    status: "available",
    accent: "#0ea5e9",
    icon: Sparkles,
    plans: {
      free: {
        price: 0,
        limits: {
          ru: "20 заказов/мес · 1 филиал · 3 сотрудника",
          en: "20 orders/mo · 1 branch · 3 staff",
          uz: "20 buyurtma/oy · 1 filial · 3 xodim",
        },
      },
      pro: {
        price: 290000,
        limits: {
          ru: "500 заказов/мес · 5 филиалов · 20 сотрудников",
          en: "500 orders/mo · 5 branches · 20 staff",
          uz: "500 buyurtma/oy · 5 filial · 20 xodim",
        },
      },
      business: {
        price: 990000,
        limits: {
          ru: "Без лимитов · API · приоритет поддержки",
          en: "Unlimited · API · priority support",
          uz: "Cheksiz · API · ustuvor qo'llab-quvvatlash",
        },
      },
    },
  },
  {
    slug: "beauty",
    status: "soon",
    accent: "#ec4899",
    icon: Scissors,
    release: "Q3 2026",
    plans: {
      free: {
        price: 0,
        limits: {
          ru: "30 записей/мес · 2 мастера",
          en: "30 bookings/mo · 2 staff",
          uz: "30 yozuv/oy · 2 usta",
        },
      },
      pro: {
        price: 290000,
        limits: {
          ru: "Без лимитов · мастер-расписание · онлайн-запись",
          en: "Unlimited · staff scheduling · online booking",
          uz: "Cheksiz · usta jadvali · onlayn yozuv",
        },
      },
      business: {
        price: 990000,
        limits: {
          ru: "Несколько салонов · API · депозиты",
          en: "Multi-salon · API · deposits",
          uz: "Bir necha salon · API · depozitlar",
        },
      },
    },
  },
  {
    slug: "banket",
    status: "soon",
    accent: "#a855f7",
    icon: UtensilsCrossed,
    release: "Q4 2026",
    plans: {
      free: {
        price: 0,
        limits: {
          ru: "5 событий/мес · 1 площадка",
          en: "5 events/mo · 1 venue",
          uz: "5 tadbir/oy · 1 zal",
        },
      },
      pro: {
        price: 490000,
        limits: {
          ru: "Без лимитов · sit-план · депозиты",
          en: "Unlimited · seating plan · deposits",
          uz: "Cheksiz · joylashuv rejasi · depozitlar",
        },
      },
      business: {
        price: 1490000,
        limits: {
          ru: "Несколько площадок · API · CRM-интеграции",
          en: "Multi-venue · API · CRM integrations",
          uz: "Bir necha zal · API · CRM integratsiyalari",
        },
      },
    },
  },
];
