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

export default function Footer({ lang = "ru", contacts }: { lang?: Lang; contacts?: ContactsConfig }) {
  const t = tr[lang];
  const telegram = contacts?.telegram || "https://t.me/ezzeapp";
  const email = contacts?.email;
  const instagram = contacts?.instagram;
  const youtube = contacts?.youtube;
  const phone = contacts?.phone;

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <Zap size={20} />
              <span>Ezze</span>
            </div>
            <p className="text-sm">{t.footer_tagline}</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3 text-sm">{t.footer_products}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/beauty?lang=${lang}`} className="hover:text-white transition-colors">Ezze Beauty</Link></li>
              <li><Link href={`/workshop?lang=${lang}`} className="hover:text-white transition-colors">Ezze Workshop</Link></li>
              <li><Link href={`/clinic?lang=${lang}`} className="hover:text-white transition-colors">Ezze Clinic</Link></li>
              <li><Link href={`/farm?lang=${lang}`} className="hover:text-white transition-colors">Ezze Farm</Link></li>
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
