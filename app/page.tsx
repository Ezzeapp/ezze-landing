import Header from "./components/Header";
import { getSections } from "./lib/supabase";
import { HomeContent } from "./components/HomeContent";

export default async function HomePage() {
  const sections = await getSections("main", "ru");
  return (
    <>
      <Header />
      <HomeContent sections={sections} />
    </>
  );
}
