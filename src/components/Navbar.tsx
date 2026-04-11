import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"ET" | "RU">("ET");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Teenused", href: "#teenused" },
    { label: "Meist", href: "#meist" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 text-xl font-heading font-bold tracking-tight">
            <span className="text-primary-foreground">Saul</span>
            <span className="text-primary">Project</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-1 text-sm text-primary-foreground/50">
              <button
                onClick={() => setLang("ET")}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === "ET" ? "text-primary-foreground" : "hover:text-primary-foreground/70"
                }`}
              >
                ET
              </button>
              <span>|</span>
              <button
                onClick={() => setLang("RU")}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === "RU" ? "text-primary-foreground" : "hover:text-primary-foreground/70"
                }`}
              >
                RU
              </button>
            </div>

            <a
              href="mailto:info@saulproject.ee"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 transition-all duration-200 hover:scale-105"
            >
              Küsi pakkumist
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary-foreground p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-lg pt-20 px-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-heading font-bold text-primary-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:info@saulproject.ee"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-semibold w-fit mt-4"
            >
              Küsi pakkumist
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
