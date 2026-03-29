-- Landing sections: content management for ezze.site
CREATE TABLE IF NOT EXISTS landing_sections (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product     TEXT NOT NULL,  -- 'main' | 'beauty' | 'workshop' | 'clinic' | 'farm' | ...
  section     TEXT NOT NULL,  -- 'hero' | 'features' | 'pricing' | 'reviews' | 'faq' | 'cta' | 'meta'
  lang        TEXT NOT NULL DEFAULT 'ru',  -- 'ru' | 'uz' | 'en'
  content     JSONB NOT NULL DEFAULT '{}',
  visible     BOOLEAN DEFAULT true,
  sort        INTEGER DEFAULT 0,
  updated_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (product, section, lang)
);

-- RLS
ALTER TABLE landing_sections ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "landing_sections_public_read"
  ON landing_sections FOR SELECT
  USING (visible = true);

-- Admin write
CREATE POLICY "landing_sections_admin_write"
  ON landing_sections FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.role = 'admin'
    )
  );

-- Seed: default content for main page
INSERT INTO landing_sections (product, section, lang, content, sort) VALUES
('main', 'hero', 'ru', '{
  "title": "Цифровые инструменты для любого бизнеса",
  "subtitle": "Управляйте записями, клиентами и командой с помощью Ezze",
  "cta_primary": {"text": "Начать бесплатно", "url": "https://pro.ezze.site/register"},
  "cta_secondary": {"text": "Смотреть продукты", "url": "#products"}
}', 0),
('main', 'hero', 'uz', '{
  "title": "Har qanday biznes uchun raqamli vositalar",
  "subtitle": "Ezze yordamida yozuvlar, mijozlar va jamoangizni boshqaring",
  "cta_primary": {"text": "Bepul boshlash", "url": "https://pro.ezze.site/register"},
  "cta_secondary": {"text": "Mahsulotlarni ko''rish", "url": "#products"}
}', 0),
('main', 'hero', 'en', '{
  "title": "Digital tools for any business",
  "subtitle": "Manage bookings, clients and your team with Ezze",
  "cta_primary": {"text": "Start for free", "url": "https://pro.ezze.site/register"},
  "cta_secondary": {"text": "View products", "url": "#products"}
}', 0),
('beauty', 'hero', 'ru', '{
  "title": "Ezze Beauty",
  "subtitle": "Платформа для мастеров красоты, тренеров и самозанятых специалистов",
  "cta": {"text": "Открыть приложение", "url": "https://pro.ezze.site"}
}', 0)
ON CONFLICT (product, section, lang) DO NOTHING;
