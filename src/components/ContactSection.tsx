import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="kontakt" className="bg-foreground py-24 lg:py-32 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-background mb-4 leading-tight">
              {t("contact.title")}
              <br />
              <span className="text-primary">{t("contact.titleHighlight")}</span>
            </h2>
            <p className="text-background/60 text-lg mb-8">
              {t("contact.subtitle")}
            </p>
            <Link
              to="/kuesi-pakkumist"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-bold text-base hover:brightness-110 transition-all duration-300 hover:gap-3 group"
            >
              {t("contact.cta")}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { icon: Phone, href: "tel:+3725555123", text: "+372 5555 1234" },
              { icon: Mail, href: "mailto:info@saulproject.ee", text: "info@saulproject.ee" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="flex items-center gap-4 text-background/70 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-xl border border-background/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <item.icon size={18} />
                </div>
                <span className="text-lg font-medium">{item.text}</span>
              </a>
            ))}
            <div className="flex items-center gap-4 text-background/70">
              <div className="w-12 h-12 rounded-xl border border-background/20 flex items-center justify-center">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-lg font-medium block">Saul Project</span>
                <span className="text-background/50 text-sm">{t("contact.address")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
