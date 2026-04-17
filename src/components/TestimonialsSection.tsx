import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    { quote: t("testimonials.t1"), name: t("testimonials.t1name"), role: t("testimonials.t1role") },
    { quote: t("testimonials.t2"), name: t("testimonials.t2name"), role: t("testimonials.t2role") },
    { quote: t("testimonials.t3"), name: t("testimonials.t3name"), role: t("testimonials.t3role") },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-3">
            {t("testimonials.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-muted/40 rounded-2xl p-7 border border-border hover:border-primary/20 transition-all duration-300 relative"
            >
              <Quote size={24} className="text-primary/20 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm">{item.quote}</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary text-sm">{item.name[0]}</span>
                </div>
                <div>
                  <cite className="not-italic font-heading font-bold text-foreground text-sm block">{item.name}</cite>
                  <p className="text-muted-foreground text-xs">{item.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
