import Header from "./components/Header";
import { getSections, getAppSettings } from "./lib/supabase";
import { HomeContent } from "./components/HomeContent";

export default async function HomePage() {
  const [sections, settings] = await Promise.all([
    getSections("main", "ru"),
    getAppSettings(["products_config", "about_config", "contacts_config"]),
  ]);
  return (
    <>
      <Header />
      <HomeContent sections={sections} settings={settings} />
    </>
  );
}
