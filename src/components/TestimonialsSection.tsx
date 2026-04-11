import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Saul Project tegi meie korteri remondi kiiresti ja kvaliteetselt. Suhtlus oli algusest lõpuni selge ja meeldiv.",
    name: "Katrin M.",
    role: "Korteri omanik, Tallinn",
  },
  {
    quote: "Usaldusväärne partner meie korteriühistule. Trepikoja remont sai tehtud tähtaegselt ja eelarve piires.",
    name: "Andres L.",
    role: "KÜ esimees, Mustamäe",
  },
  {
    quote: "EV-laadija paigaldus sujus probleemideta. Professionaalne meeskond, kes teab, mida teeb.",
    name: "Maria K.",
    role: "Äriklient, Tallinn",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 lg:py-32 bg-muted/40">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-16"
      >
        Mida kliendid ütlevad
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative"
          >
            <span className="text-primary/20 text-6xl font-heading font-bold absolute -top-4 -left-2 select-none">"</span>
            <p className="text-foreground/80 leading-relaxed mb-6 relative">
              {t.quote}
            </p>
            <footer>
              <cite className="not-italic font-heading font-bold text-foreground text-sm">
                {t.name}
              </cite>
              <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
