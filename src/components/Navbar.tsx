import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoSaul from "@/assets/logo_saul_new.png";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = typeof window !== "undefined" && window.location.pathname === "/";

  const navLinks = [
    { label: t("nav.services"), href: isHome ? "#teenused" : "/#teenused" },
    { label: t("nav.projects"), href: isHome ? "#projektid" : "/#projektid" },
    { label: t("nav.about"), href: isHome ? "#meist" : "/#meist" },
    { label: t("nav.contact"), href: isHome ? "#kontakt" : "/#kontakt" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
            : "bg-background/95 backdrop-blur-sm border-b border-border/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <Menu size={22} className="text-primary" strokeWidth={2.5} />
            <img src={logoSaul} alt="Saul Project" className="h-8 lg:h-10" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isInternal = link.href.startsWith("/") && !link.href.includes("#");
              const baseClass = "text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 relative group";
              return isInternal ? (
                <Link key={link.href} to={link.href} className={baseClass}>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={baseClass}>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {(["ET", "RU"] as const).map((l, i) => (
                <span key={l} className="flex items-center gap-2">
                  <button
                    onClick={() => setLang(l)}
                    className={`transition-all text-sm font-medium ${
                      lang === l ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l}
                  </button>
                  {i === 0 && <span className="text-border">|</span>}
                </span>
              ))}
            </div>

            <Link
              to="/pakkumine"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-all duration-200"
            >
              {t("nav.cta")}
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background pt-20 px-8 flex flex-col gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors border-b border-border pb-4"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/pakkumine"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-medium w-fit mt-4 inline-block"
              >
                {t("nav.cta")}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
