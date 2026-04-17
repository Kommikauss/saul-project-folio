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

  const featured = [
    {
      icon: Building2,
      title: t("services.korteruhistutele"),
      desc: t("services.korteruhistuteleDesc"),
      bullets: [
        t("services.korteruhistuteleDetail"),
      ],
      href: "/korteruhistutele",
      img: imgKorteruhistu,
    },
    {
      icon: BatteryCharging,
      title: "Taristuse projekteerimine ja ehitamine",
      desc: t("services.evDesc"),
      bullets: [
        t("services.evDetail"),
      ],
      href: "/ev-laadimine",
      img: imgEv,
      highlight: true,
    },
  ];

  const services = [
    { icon: Home, title: t("services.eraisikutele"), desc: t("services.eraisikuteleDesc"), detail: t("services.eraisikuteleDetail"), href: "/eraisikutele", img: imgEraisikutele },
    { icon: Wrench, title: t("services.hooldus"), desc: t("services.hooldusDesc"), detail: t("services.hooldusDetail"), href: "/hooldus-ja-remont", img: imgHooldus },
    { icon: Zap, title: t("services.elektritood"), desc: t("services.elektritoodDesc"), detail: t("services.elektritoodDetail"), href: "/elektritood", img: imgElektri },
    { icon: Droplets, title: t("services.torutood"), desc: t("services.torutoodDesc"), detail: t("services.torutoodDetail"), href: "/torutood", img: imgTorutood },
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

        {/* Featured cards — large, side by side */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featured.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={item.href}
                className="group relative flex flex-col md:flex-row rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card h-full"
              >
                <div className="relative md:w-1/2 h-48 md:h-auto overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.highlight ? "object-left" : ""}`}
                  />
                  {item.highlight && (
                    <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {t("services.new")}
                    </span>
                  )}
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  {item.bullets.map((b, j) => (
                    <p key={j} className="text-muted-foreground/70 text-sm leading-relaxed mb-1">• {b}</p>
                  ))}
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:translate-x-1 transition-transform duration-300">
                    {t("services.readMore")} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Smaller service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border border-border hover:border-primary/30 hover:shadow-lg block h-full"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>
                <div className="p-5 bg-card">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon size={16} />
                    </div>
                    <h3 className="font-heading font-semibold text-base text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{service.desc}</p>
                  <p className="text-muted-foreground/70 text-xs leading-relaxed">{service.detail}</p>
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
