import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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
  <section className="py-24 lg:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">
          Mida kliendid ütlevad
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
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
            <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
              {t.quote}
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading font-bold text-primary text-sm">{t.name[0]}</span>
              </div>
              <div>
                <cite className="not-italic font-heading font-bold text-foreground text-sm block">
                  {t.name}
                </cite>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
