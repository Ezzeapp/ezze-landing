import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as unknown as ReturnType<typeof createClient>;

export interface LandingSection {
  id: string;
  product: string;
  section: string;
  lang: string;
  content: Record<string, unknown>;
  visible: boolean;
  sort: number;
}

export async function getSections(
  product: string,
  lang = "ru"
): Promise<Record<string, Record<string, unknown>>> {
  try {
    if (!supabase) return {};
    const { data, error } = await supabase
      .from("landing_sections")
      .select("section, content")
      .eq("product", product)
      .eq("lang", lang)
      .eq("visible", true)
      .order("sort");

    if (error || !data) return {};
    return Object.fromEntries(data.map((r) => [r.section, r.content]));
  } catch {
    return {};
  }
}

/**
 * @param keys     ключи app_settings
 * @param product  если указан — фильтр по product (для per-product настроек: plan_prices, plan_names и т.д.)
 *                 Без product вернутся все строки с этими ключами (legacy / "main" / неоднозначно).
 */
export async function getAppSettings(
  keys: string[],
  product?: string
): Promise<Record<string, unknown>> {
  try {
    if (!supabase) return {};
    let query = supabase
      .from("app_settings")
      .select("key, value")
      .in("key", keys);
    if (product) query = query.eq("product", product);
    const { data } = await query;
    if (!data) return {};
    const result: Record<string, unknown> = {};
    for (const row of data) {
      try {
        result[row.key] = typeof row.value === "string" ? JSON.parse(row.value) : row.value;
      } catch {
        result[row.key] = row.value;
      }
    }
    return result;
  } catch {
    return {};
  }
}

/**
 * Достаёт plan_prices сразу для нескольких продуктов одним запросом.
 * Возвращает map: slug → { free?, pro?, enterprise? }
 */
export async function getPlanPricesForProducts(
  slugs: string[]
): Promise<Record<string, Record<string, number>>> {
  try {
    if (!supabase || slugs.length === 0) return {};
    const { data } = await supabase
      .from("app_settings")
      .select("product, key, value")
      .eq("key", "plan_prices")
      .in("product", slugs);
    if (!data) return {};
    const result: Record<string, Record<string, number>> = {};
    for (const row of data as { product: string; key: string; value: unknown }[]) {
      try {
        const parsed = typeof row.value === "string" ? JSON.parse(row.value) : row.value;
        if (parsed && typeof parsed === "object") {
          result[row.product] = parsed as Record<string, number>;
        }
      } catch {
        /* ignore */
      }
    }
    return result;
  } catch {
    return {};
  }
}
