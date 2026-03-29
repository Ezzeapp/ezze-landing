import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  const { data } = await supabase
    .from("landing_sections")
    .select("section, content")
    .eq("product", product)
    .eq("lang", lang)
    .eq("visible", true)
    .order("sort");

  if (!data) return {};
  return Object.fromEntries(data.map((r) => [r.section, r.content]));
}
