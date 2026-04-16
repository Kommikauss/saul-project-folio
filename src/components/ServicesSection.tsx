import { motion } from "framer-motion";
import { Home, Building2, Wrench, Zap, Droplets, BatteryCharging, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

import imgEraisikutele from "@/assets/service-eraisikutele.jpg";
import imgKorteruhistu from "@/assets/service-korteruhistu.jpg";
import imgHooldus from "@/assets/service-hooldus.jpg";
import imgElektri from "@/assets/service-elektri.jpg";
import imgTorutood from "@/assets/service-torutood.jpg";
import imgEv from "@/assets/service-ev.jpg";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Home, title: t("services.eraisikutele"), desc: t("services.eraisikuteleDesc"), detail: t("services.eraisikuteleDetail"), href: "/eraisikutele", img: imgEraisikutele },
    { icon: Building2, title: t("services.korteruhistutele"), desc: t("services.korteruhistuteleDesc"), detail: t("services.korteruhistuteleDetail"), href: "/korteruhistutele", img: imgKorteruhistu },
    { icon: Wrench, title: t("services.hooldus"), desc: t("services.hooldusDesc"), detail: t("services.hooldusDetail"), href: "/hooldus-ja-remont", img: imgHooldus },
    { icon: Zap, title: t("services.elektritood"), desc: t("services.elektritoodDesc"), detail: t("services.elektritoodDetail"), href: "/elektritood", img: imgElektri },
    { icon: Droplets, title: t("services.torutood"), desc: t("services.torutoodDesc"), detail: t("services.torutoodDetail"), href: "/torutood", img: imgTorutood },
    { icon: BatteryCharging, title: t("services.ev"), desc: t("services.evDesc"), detail: t("services.evDetail"), highlight: true, href: "/ev-laadimine", img: imgEv },
  ];

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
          <h2 className="font-heading font-semibold text-3xl md:text-5xl text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t("services.subtitle")}
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
            >
              <Link
                to={service.href}
                className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border block h-full ${
                  service.highlight
                    ? "border-primary/30 hover:border-primary/50 hover:shadow-lg"
                    : "border-border hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  {service.highlight && (
                    <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {t("services.new")}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      service.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}>
                      <service.icon size={18} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{service.desc}</p>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed mb-4">{service.detail}</p>

                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    {t("services.readMore")} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
