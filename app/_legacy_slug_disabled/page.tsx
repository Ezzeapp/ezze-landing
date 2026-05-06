import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Reserved for future per-module pages. Empty list = none generated.
  return [];
}

export default async function Page() {
  notFound();
}
