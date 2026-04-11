import { motion } from "framer-motion";
import { MapPin, Clock, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const headlineWords = ["Usaldusväärne", "partner", "remondi-", "ja", "ehitustöödeks"];
  const orangeWords = new Set(["partner", "ehitustöödeks"]);

  const badges = [
    { icon: MapPin, text: "Üle Eesti" },
    { icon: Clock, text: "24h vastus" },
    { icon: CheckCircle, text: "200+ projekti" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Remont ja ehitustööd"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          {/* Headline with word-by-word reveal */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: "easeOut" }}
                className={`inline-block mr-[0.3em] ${
                  orangeWords.has(word) ? "text-primary" : "text-primary-foreground"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed"
          >
            Korterid, korteriühistud ja tehnilised lahendused — töötame korralikult, selgelt ja õigeaegselt.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="mailto:info@saulproject.ee"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-bold text-base hover:brightness-110 transition-all duration-200 hover:scale-105"
            >
              Küsi pakkumist
            </a>
            <a
              href="tel:+3725555123"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-base hover:bg-primary-foreground/10 transition-all duration-200"
            >
              Helista
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-wrap gap-6 text-primary-foreground/50 text-sm"
          >
            {badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <badge.icon size={16} className="text-primary" />
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
