import { motion } from "framer-motion";
import { Home, Building2, Wrench, Zap, Droplets, BatteryCharging, ArrowRight } from "lucide-react";

const services = [
  { icon: Home, title: "Eraisikutele", desc: "Korterite ja kodude remont", detail: "Täielik või osaline remont — planeerimisest viimistluseni." },
  { icon: Building2, title: "Korteriühistutele", desc: "Usaldusväärne partner üldtöödeks", detail: "Fassaadid, trepikojad, katused ja tehnosüsteemid." },
  { icon: Wrench, title: "Hooldus ja remont", desc: "Kiire reageerimine, selge suhtlus", detail: "Igapäevased remonditööd ja tehniline hooldus." },
  { icon: Zap, title: "Elektritööd", desc: "Paigaldus ja hooldus", detail: "Elektripaigaldised, valgustus ja juhtmestik." },
  { icon: Droplets, title: "Torutööd", desc: "Vee- ja kanalisatsioonitööd", detail: "Torustike paigaldus, remont ja hooldus." },
  { icon: BatteryCharging, title: "EV laadimistaristu", desc: "Projekteerimine ja ehitus", detail: "Laadijate paigaldus kortermajadele ja äripindadele.", highlight: true },
];

const ServicesSection = () => {
  return (
    <section id="teenused" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4">
            Meie teenused
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Kõik ehitus- ja remonditööd ühest kohast — professionaalselt ja õigeaegselt.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group relative rounded-2xl p-7 cursor-pointer transition-all duration-300 border ${
                service.highlight
                  ? "bg-primary/5 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  : "bg-background border-border hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {service.highlight && (
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Eriti oluline
                </span>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                service.highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
              }`}>
                <service.icon size={22} />
              </div>

              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">{service.desc}</p>
              <p className="text-muted-foreground/70 text-sm leading-relaxed mb-4">{service.detail}</p>

              <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                Loe lähemalt <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
