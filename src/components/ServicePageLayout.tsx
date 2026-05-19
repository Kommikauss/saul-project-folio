import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Clock, MessageSquare, Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";
import { useLanguage } from "@/i18n/LanguageContext";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  image?: string;
}

interface WhyItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  breadcrumb: string;
  services: ServiceItem[];
  servicesIntro: string;
  whyItems: WhyItem[];
  ctaTitle: string;
  ctaSubtitle: string;
}

const ServicePageLayout = ({
  title,
  subtitle,
  heroImage,
  breadcrumb,
  services,
  servicesIntro,
  whyItems,
  ctaTitle,
  ctaSubtitle,
}: ServicePageLayoutProps) => {
  const { t } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home size={14} />
              {t("servicePages.home")}
            </Link>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium">{breadcrumb}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-background pb-8 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="py-4 lg:py-8"
            >
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6 text-foreground">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/pakkumine"
                  className="bg-foreground text-background px-8 py-4 rounded-lg font-heading font-bold text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t("servicePages.cta")}
                </Link>
                <a
                  href="tel:+3725555123"
                  className="border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-heading font-semibold text-base hover:bg-foreground hover:text-background transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Phone size={16} />
                  +372 5555 1234
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock size={14} className="text-primary" />
                  </div>
                  <span className="font-medium">{t("servicePages.yearsExperience")}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare size={14} className="text-primary" />
                  </div>
                  <span className="font-medium">{t("servicePages.clearComm")}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={heroImage} alt={title} className="w-full h-full object-cover" width={1280} height={960} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-foreground mb-4">
              {t("servicePages.ourServices")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{servicesIntro}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-background rounded-2xl border border-border p-7 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <s.icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-foreground mb-4">
              {t("servicePages.whyUs")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("servicePages.whyUsSubtitle")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {whyItems.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-background rounded-2xl border border-border p-7 pb-8 text-center hover:shadow-lg transition-all duration-300 overflow-visible"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <w.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-loose">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-background mb-2">
              {ctaTitle}
            </h2>
            <p className="text-background/60">{ctaSubtitle}</p>
          </div>
          <Link
            to="/pakkumine"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-all inline-flex items-center gap-2 whitespace-nowrap"
          >
            {t("servicePages.cta")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </>
  );
};

export default ServicePageLayout;
