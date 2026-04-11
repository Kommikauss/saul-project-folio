import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 200, suffix: "+", label: "Lõpetatud projekti" },
  { value: 8, suffix: "+", label: "Aastat kogemust" },
  { value: 24, suffix: "h", label: "Vastamisaeg" },
  { value: 100, suffix: "%", label: "Rahulolev klient" },
];

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
    <span ref={ref} className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-primary-foreground">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="bg-dark-forest py-20 lg:py-24 grain-overlay">
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-primary-foreground/50 text-sm mt-2 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
