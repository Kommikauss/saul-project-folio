import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logoSaul from "@/assets/logo_saul_new.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark border-t border-background/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-3">
              <img src={logoSaul} alt="Saul Project" className="h-9 brightness-0 invert" />
            </div>
            <p className="text-background/40 text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background text-sm mb-4">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-2">
              <a href="/#teenused" className="text-background/50 text-sm hover:text-primary transition-colors">
                {t("footer.services")}
              </a>
              <a href="/#miks-meie" className="text-background/50 text-sm hover:text-primary transition-colors">
                {t("footer.about")}
              </a>
              <a href="/#kontakt" className="text-background/50 text-sm hover:text-primary transition-colors">
                {t("footer.contact")}
              </a>
              <Link to="/pakkumine" className="text-background/50 text-sm hover:text-primary transition-colors">
                {t("footer.quote")}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background text-sm mb-4">{t("footer.contactTitle")}</h4>
            <div className="flex flex-col gap-2 text-background/50 text-sm">
              <span>📞 +372 5555 1234</span>
              <span>✉️ info@saulproject.ee</span>
            </div>
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/50 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-background/30 text-xs">
          <span>© 2024 Saul Project. {t("footer.rights")}</span>
          <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
