// Backward-compat shim. The new homepage uses lib/modules.ts directly;
// this file is kept only because legacy components ([slug]/page.tsx,
// HomeContent.tsx, etc.) still import PRODUCTS / STATS. Those legacy
// pages are not part of the new build target.

import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";
import { MODULES } from "./modules";

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

export const PRODUCTS: Product[] = MODULES.map((m) => ({
  slug: m.slug,
  name: m.slug,
  description: "",
  icon: m.icon ?? Sparkles,
  iconName: m.iconName ?? "Sparkles",
  color: m.accent,
  url: "https://app.ezze.site",
  features: [],
  comingSoon: m.status === "soon",
}));

export const STATS: { label: string; value: string }[] = [];
