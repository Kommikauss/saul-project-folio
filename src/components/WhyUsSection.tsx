import { motion } from "framer-motion";
import { CheckCircle, MessageSquare, Sparkles, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhyUsSection = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Clock, title: t("whyUs.deadlines"), desc: t("whyUs.deadlinesDesc") },
    { icon: MessageSquare, title: t("whyUs.communication"), desc: t("whyUs.communicationDesc") },
    { icon: Sparkles, title: t("whyUs.clean"), desc: t("whyUs.cleanDesc") },
    { icon: CheckCircle, title: t("whyUs.team"), desc: t("whyUs.teamDesc") },
  ];

  return (
    <section id="meist" className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4">
            {t("whyUs.title")} <span className="text-primary">{t("whyUs.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            {t("whyUs.subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl border border-border p-7 pb-8 text-center hover:shadow-lg transition-all duration-300 group overflow-visible"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors"
              >
                <v.icon size={24} className="text-primary" />
              </motion.div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-loose">
                {v.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
