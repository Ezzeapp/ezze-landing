// Legacy stub. The new homepage lives directly in app/page.tsx.
// Kept only so type-check doesn't fail on unrelated imports.

interface HomeContentProps {
  sections?: Record<string, unknown>;
  settings?: Record<string, unknown>;
}

export function HomeContent(_: HomeContentProps) {
  return null;
}
