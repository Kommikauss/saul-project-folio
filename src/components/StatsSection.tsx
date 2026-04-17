import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-5xl md:text-6xl text-primary-foreground">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: 50, suffix: "+", label: t("stats.clients"), icon: false },
    { value: 100, suffix: "+", label: t("stats.chargers"), icon: false },
    { value: 5, suffix: "+", label: t("stats.yearsExp"), icon: false },
    { value: 0, suffix: "", label: t("stats.euCompliant"), icon: true },
  ];

  return (
    <section className="py-12 lg:py-14 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-left flex items-center gap-4"
            >
              {stat.icon ? (
                <>
                  <svg className="w-12 h-12 text-primary-foreground/90 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-primary-foreground text-base font-medium leading-snug">{stat.label}</p>
                </>
              ) : (
                <div>
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <p className="text-primary-foreground/85 text-sm mt-1 font-medium">{stat.label}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
