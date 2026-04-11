import { Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center gap-1 text-xl font-heading font-bold mb-2">
            <span className="text-primary-foreground">Saul</span>
            <span className="text-primary">Project</span>
          </div>
          <p className="text-primary-foreground/40 text-sm max-w-xs">
            Usaldusväärne partner remondi- ja ehitustöödeks
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/50">
          <a href="#teenused" className="hover:text-primary transition-colors">Teenused</a>
          <a href="#meist" className="hover:text-primary transition-colors">Meist</a>
          <a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a>
          <a href="#" className="hover:text-primary transition-colors">Privaatsustingimused</a>
        </div>

        <div className="flex gap-3">
          <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/50 hover:border-primary hover:text-primary transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/50 hover:border-primary hover:text-primary transition-colors">
            <Instagram size={16} />
          </a>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-primary-foreground/30 text-xs">
        © 2025 Saul Project. Kõik õigused kaitstud.
      </div>
    </div>
  </footer>
);

export default Footer;
