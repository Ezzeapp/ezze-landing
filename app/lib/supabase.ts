// No-op stub. The new landing is fully static; legacy components that
// still call getSections() / getAppSettings() get empty objects so they
// can compile but produce no content. They are not bundled in the new
// homepage anymore.

export interface LandingSection {
  id: string;
  product: string;
  section: string;
  lang: string;
  content: Record<string, unknown>;
  visible: boolean;
  sort: number;
}

export const supabase = null as unknown as never;

export async function getSections(
  _product: string,
  _lang = "ru"
): Promise<Record<string, Record<string, unknown>>> {
  return {};
}

export async function getAppSettings(
  _keys: string[],
  _product?: string
): Promise<Record<string, unknown>> {
  return {};
}

export async function getPlanPricesForProducts(
  _slugs: string[]
): Promise<Record<string, Record<string, number>>> {
  return {};
}
