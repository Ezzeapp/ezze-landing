import Link from "next/link";
import { Zap } from "lucide-react";
import { type Lang, tr } from "../lib/i18n";

interface ContactsConfig {
  telegram?: string;
  email?: string;
  instagram?: string;
  youtube?: string;
  phone?: string;
}

interface FooterProduct {
  slug: string;
  name: string;
}

export default function Footer({
  lang = "ru",
  contacts,
  products,
}: {
  lang?: Lang;
  contacts?: ContactsConfig;
  products?: FooterProduct[];
}) {
  const t = tr[lang];
  const telegram = contacts?.telegram || "https://t.me/ezzeapp";
  const email = contacts?.email;
  const instagram = contacts?.instagram;
  const youtube = contacts?.youtube;
  const phone = contacts?.phone;

  // Default product list если не передан (fallback)
  const productLinks: FooterProduct[] = products && products.length > 0
    ? products.slice(0, 6)
    : [
        { slug: "beauty",   name: "Ezze Beauty" },
        { slug: "workshop", name: "Ezze Workshop" },
        { slug: "clinic",   name: "Ezze Clinic" },
        { slug: "cleaning", name: "Ezze Cleaning" },
      ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Link href={`/?lang=${lang}`} className="inline-flex items-center gap-2 font-bold text-xl text-white mb-3 hover:text-indigo-400 transition-colors">
              <Zap size={20} />
              <span>Ezze</span>
            </Link>
            <p className="text-sm">{t.footer_tagline}</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3 text-sm">{t.footer_products}</h4>
            <ul className="space-y-2 text-sm">
              {productLinks.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}?lang=${lang}`} className="hover:text-white transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3 text-sm">{t.footer_company}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/?lang=${lang}#about`} className="hover:text-white transition-colors">{t.footer_about}</Link></li>
              <li><Link href={`/?lang=${lang}#pricing`} className="hover:text-white transition-colors">{t.footer_pricing}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3 text-sm">{t.footer_contacts}</h4>
            <ul className="space-y-2 text-sm">
              {telegram && (
                <li><a href={telegram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a></li>
              )}
              {instagram && (
                <li><a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              )}
              {youtube && (
                <li><a href={youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              )}
              {email && (
                <li><a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a></li>
              )}
              {phone && (
                <li><a href={`tel:${phone}`} className="hover:text-white transition-colors">{phone}</a></li>
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Ezze. {t.footer_rights}.
        </div>
      </div>
    </footer>
  );
}
