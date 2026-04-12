import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.4 && !dismissed) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-foreground/95 backdrop-blur-md border border-background/10 rounded-2xl px-6 py-3 flex items-center gap-4 shadow-2xl"
        >
          <span className="text-background text-sm font-medium hidden sm:block">
            Soovid pakkumist?
          </span>
          <a
            href="mailto:info@saulproject.ee"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition-all inline-flex items-center gap-1.5"
          >
            Küsi pakkumist <ArrowRight size={14} />
          </a>
          <button
            onClick={() => { setDismissed(true); setVisible(false); }}
            className="text-background/40 hover:text-background transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
