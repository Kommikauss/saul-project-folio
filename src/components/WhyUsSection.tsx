import { motion } from "framer-motion";

const values = [
  {
    num: "01",
    title: "Peame kinni tähtaegadest",
    desc: "Iga projekt algab selge ajaplaaniga. Meie meeskond jälgib iga etappi ja hoiab teid kursis — ilma üllatusteta.",
  },
  {
    num: "02",
    title: "Suhtleme selgelt ja ausalt",
    desc: "Teil on alati üks kontaktisik, kes vastab kiiresti ja räägib arusaadavalt. Mitte ehituskeelt, vaid inimkeelt.",
  },
  {
    num: "03",
    title: "Töötame puhtalt ja ausalt",
    desc: "Meie objektid on korrektse tööõhkkonnaga. Tööpäeva lõpus on ruum puhas ja järgmine samm kokku lepitud.",
  },
];

const WhyUsSection = () => (
  <section id="meist" className="py-24 lg:py-32 bg-background overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-foreground mb-20"
      >
        Miks <span className="text-primary">meie?</span>
      </motion.h2>

      <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-16">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative"
          >
            <span className="font-heading font-extrabold text-7xl lg:text-8xl text-primary/10 absolute -top-8 -left-2 select-none">
              {v.num}
            </span>
            <div className="relative">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4">
                {v.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
