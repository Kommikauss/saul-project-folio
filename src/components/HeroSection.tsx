import { motion } from "framer-motion";
import { MapPin, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const badges = [
    { icon: MapPin, text: t("hero.badge1") },
    { icon: Clock, text: t("hero.badge2") },
    { icon: Shield, text: t("hero.badge3") },
  ];

  return (
    <section className="relative min-h-[60vh] flex items-center bg-background overflow-hidden pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 py-8 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight mb-6 text-foreground">
                {t("hero.title1")}{" "}
                <span className="text-primary">{t("hero.title2")}</span> {t("hero.title3")}{" "}
                <span className="text-primary">{t("hero.title4")}</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                to="/pakkumine"
                className="bg-foreground text-background px-8 py-4 rounded-lg font-heading font-bold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("hero.cta")}
              </Link>
              <a
                href="tel:+3725555123"
                className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold text-base hover:bg-foreground hover:text-background transition-all duration-300"
              >
                {t("hero.call")}: +372 5555 1234
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <badge.icon size={14} className="text-primary" />
                  </div>
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/4]">
              <img src={heroBg} alt={t("hero.title1")} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-xl p-5 border border-border"
            >
              <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <span className="font-heading font-extrabold text-3xl text-primary">200+</span>
                <p className="text-sm text-muted-foreground font-medium">{t("hero.projects")}</p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl shadow-xl px-4 py-3"
            >
              <motion.div animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <span className="font-heading font-bold text-sm">8+ {t("hero.years")}</span>
                <p className="text-xs text-primary-foreground/80">{t("hero.experience")}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
    </section>
  );
};

export default HeroSection;
