import { motion } from "framer-motion";
import { Home, Building2, Wrench, Zap, Droplets, BatteryCharging } from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Home, title: "Eraisikutele", desc: "Korterite ja kodude remont", detail: "Täisremont alates planeerimisest kuni võtmete üleandmiseni. Köögid, vannitoad, põrandad, seinad — kõik ühest kohast." },
  { icon: Building2, title: "Korteriühistutele", desc: "Usaldusväärne partner üldtöödeks", detail: "Fassaadid, trepikojad, katused ja tehnosüsteemid. Pikaajaline koostöö ja selge aruandlus." },
  { icon: Wrench, title: "Hooldus ja remont", desc: "Kiire reageerimine, selge suhtlus", detail: "Igapäevased remonditööd ja tehniline hooldus — kiirelt ja korralikult." },
  { icon: Zap, title: "Elektritööd", desc: "Paigaldus ja kooldus", detail: "Elektripaigaldised, valgustus, juhtmestik ja nõuetekohane dokumentatsioon." },
  { icon: Droplets, title: "Torutööd", desc: "Vee- ja kanalisatsioonitööd", detail: "Torustike paigaldus, remont ja hooldus. Kaasaegsed materjalid ja lahendused." },
  { icon: BatteryCharging, title: "Elektriautode laadimistaristu", desc: "Projekteerimine ja ehitus", detail: "EV-laadijate paigaldus kortermajadele ja äripindadele. Projektijuhtimine algusest lõpuni.", highlight: true },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="teenused" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Meie <span className="text-primary">teenused</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mb-16">
            Kõik ehitus- ja remonditööd ühest kohast — professionaalselt ja õigeaegselt.
          </p>
        </motion.div>

        <div className="space-y-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 rounded-xl cursor-pointer transition-all duration-300 ${
                service.highlight
                  ? "bg-primary/5 border border-primary/20 hover:bg-primary/10"
                  : "hover:bg-muted/60"
              }`}
            >
              {/* Number */}
              <span className="font-heading font-bold text-sm text-muted-foreground/40 md:w-8">
                0{i + 1}
              </span>

              {/* Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                hoveredIndex === i ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
              }`}>
                <service.icon size={22} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-heading font-bold text-lg md:text-xl text-foreground">
                    {service.title}
                  </h3>
                  {service.highlight && (
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                      Eriti oluline
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>

              {/* Expanded detail */}
              <motion.div
                initial={false}
                animate={{ 
                  opacity: hoveredIndex === i ? 1 : 0,
                  width: hoveredIndex === i ? "auto" : 0,
                }}
                className="hidden lg:block text-sm text-muted-foreground max-w-xs overflow-hidden"
              >
                {service.detail}
              </motion.div>

              {/* Arrow */}
              <motion.span
                animate={{ x: hoveredIndex === i ? 0 : -5, opacity: hoveredIndex === i ? 1 : 0 }}
                className="text-primary font-heading font-bold text-xl hidden md:block"
              >
                →
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
