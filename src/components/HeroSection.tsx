import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-background overflow-hidden pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: text */}
          <div className="lg:col-span-5 py-8 lg:py-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight mb-5 text-foreground"
            >
              {t("hero.title1")} {t("hero.title2")} {t("hero.title3")} {t("hero.title4")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base lg:text-lg text-muted-foreground max-w-md mb-7 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <Link
                to="/pakkumine"
                className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium text-sm hover:bg-secondary transition-all duration-200"
              >
                {t("hero.cta")}
              </Link>
              <a
                href="tel:+3725555123"
                className="border-2 border-border text-foreground px-7 py-3.5 rounded-lg font-medium text-sm hover:border-primary hover:text-primary transition-all duration-200"
              >
                {t("hero.call")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-muted/60 rounded-full px-4 py-2 text-sm text-foreground/80"
            >
              <MapPin size={14} className="text-primary" />
              <span className="font-medium">{t("hero.badgeCombined")}</span>
            </motion.div>
          </div>

          {/* Right: large image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-[16/11]">
              <img
                src={heroBg}
                alt={t("hero.title1")}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
