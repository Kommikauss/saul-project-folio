import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoSaul from "@/assets/logo_saul_transparent.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"ET" | "EN" | "RU">("ET");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Teenused", href: "#teenused" },
    { label: "Korteriühistutele", href: "#korteruhistu" },
    { label: "Meist", href: "#meist" },
    { label: "Kontakt", href: "#kontakt" },
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
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src={logoSaul} alt="Saul Project" className="h-8 lg:h-10" />
            <span className="text-xl font-heading font-bold tracking-tight">
              <span className="text-foreground">Saul</span>{" "}
              <span className="text-primary">Project</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <div className="flex items-center gap-1 text-sm text-muted-foreground border border-border rounded-full px-2 py-1">
              {(["ET", "EN", "RU"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 rounded-full transition-all text-xs font-medium ${
                    lang === l ? "bg-foreground text-background" : "hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="mailto:info@saulproject.ee"
              className="bg-foreground text-background px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Küsi pakkumist
            </a>
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
            <motion.a
              href="mailto:info@saulproject.ee"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-foreground text-background px-6 py-3 rounded-lg text-lg font-semibold w-fit mt-4"
            >
              Küsi pakkumist
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
