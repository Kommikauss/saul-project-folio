import { motion } from "framer-motion";
import { Home, Building2, Wrench, Zap, Droplets, BatteryCharging, ClipboardList, Hammer, Plug, FileCheck, Settings, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

import imgEraisikutele from "@/assets/service-eraisikutele.jpg";
import imgKorteruhistu from "@/assets/service-korteruhistu.jpg";
import imgHooldus from "@/assets/service-hooldus.jpg";
import imgElektri from "@/assets/service-elektri.jpg";
import imgTorutood from "@/assets/service-torutood.jpg";
import imgEv from "@/assets/service-ev-new.jpg";

const ServicesSection = () => {
  const { t } = useLanguage();

  const featured = [
    {
      icon: Building2,
      title: t("services.korteruhistutele"),
      desc: t("services.korteruhistuteleDesc"),
      bullets: [
        { icon: Building2, text: t("services.bullet_uhistu") },
        { icon: ClipboardList, text: t("services.bullet_projekt") },
        { icon: Settings, text: t("services.bullet_hooldus") },
        { icon: ShieldCheck, text: t("services.bullet_koostoo") },
      ],
      href: "/korteruhistutele",
      img: imgKorteruhistu,
      cta: t("services.ctaSolutions"),
    },
    {
      icon: BatteryCharging,
      title: t("services.infraTitle"),
      desc: t("services.infraDesc"),
      bullets: [
        { icon: FileCheck, text: t("services.bullet_kooskolastus") },
        { icon: Hammer, text: t("services.bullet_ehitus") },
        { icon: Plug, text: t("services.bullet_uhendamine") },
      ],
      href: "/ev-laadimine",
      img: imgEv,
      highlight: true,
      cta: t("services.ctaServices"),
    },
  ];

  const services = [
    { icon: Home, title: t("services.eraisikutele"), desc: t("services.eraisikuteleDesc"), detail: t("services.eraisikuteleDetail"), href: "/eraisikutele", img: imgEraisikutele },
    { icon: Wrench, title: t("services.hooldus"), desc: t("services.hooldusDesc"), detail: t("services.hooldusDetail"), href: "/hooldus-ja-remont", img: imgHooldus },
    { icon: Zap, title: t("services.elektritood"), desc: t("services.elektritoodDesc"), detail: t("services.elektritoodDetail"), href: "/elektritood", img: imgElektri },
    { icon: Droplets, title: t("services.torutood"), desc: t("services.torutoodDesc"), detail: t("services.torutoodDetail"), href: "/torutood", img: imgTorutood },
  ];

  return (
    <section id="teenused" className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading font-semibold text-2xl md:text-4xl text-foreground mb-3">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Featured cards — large, side by side */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {featured.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className="relative flex flex-col rounded-xl overflow-hidden border border-border bg-card h-full"
              >
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className={`w-full h-full object-cover object-center`}
                  />
                  {item.highlight && (
                    <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {t("services.new")}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <ul className="space-y-2.5 flex-1">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-3 text-foreground/80 text-sm">
                        <span className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-primary shrink-0">
                          <b.icon size={14} />
                        </span>
                        {b.text}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={item.href}
                    className="mt-5 block w-full text-center bg-primary text-primary-foreground py-2.5 rounded-lg font-medium text-sm hover:bg-secondary transition-colors duration-200"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Smaller service cards grid — illustrative only, not clickable */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div
                className="relative rounded-xl overflow-hidden border border-border block h-full"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>
                <div className="p-5 bg-card">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-muted text-foreground">
                      <service.icon size={16} />
                    </div>
                    <h3 className="font-heading font-semibold text-base text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-1">{service.desc}</p>
                  <p className="text-muted-foreground/70 text-xs leading-relaxed">{service.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
