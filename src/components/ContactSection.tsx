import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="kontakt" className="bg-dark py-24 lg:py-32 grain-overlay">
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
            Vajad pakkumist
            <br />
            <span className="text-primary">või nõu?</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-10">
            Võta ühendust — vastame 24 tunni jooksul.
          </p>
          <a
            href="mailto:info@saulproject.ee"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-all duration-200 hover:scale-105"
          >
            Küsi pakkumist
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <a href="tel:+3725555123" className="flex items-center gap-4 text-primary-foreground/70 hover:text-primary transition-colors group">
            <div className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center group-hover:border-primary transition-colors">
              <Phone size={18} />
            </div>
            <span className="text-lg">+372 5555 1234</span>
          </a>
          <a href="mailto:info@saulproject.ee" className="flex items-center gap-4 text-primary-foreground/70 hover:text-primary transition-colors group">
            <div className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center group-hover:border-primary transition-colors">
              <Mail size={18} />
            </div>
            <span className="text-lg">info@saulproject.ee</span>
          </a>
          <div className="flex items-center gap-4 text-primary-foreground/70">
            <div className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center">
              <MapPin size={18} />
            </div>
            <span className="text-lg">Tallinn, Estonia</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
