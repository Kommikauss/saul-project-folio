import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoSaul from "@/assets/logo_saul.png";

const Footer = () => (
  <footer className="bg-foreground border-t border-background/10 py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {/* Logo & tagline */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logoSaul} alt="Saul Project" className="h-8 brightness-0 invert" />
            <span className="text-xl font-heading font-bold">
              <span className="text-background">Saul</span>{" "}
              <span className="text-primary">Project</span>
            </span>
          </div>
          <p className="text-background/40 text-sm leading-relaxed">
            Usaldusväärne partner remondi- ja ehitustöödeks.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading font-bold text-background text-sm mb-4">Kiirlingid</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Teenused", href: "#teenused" },
              { label: "Erakurele", href: "#teenused" },
              { label: "Kontakt", href: "#kontakt" },
            ].map((link) => (
              <a key={link.href + link.label} href={link.href} className="text-background/50 text-sm hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-background text-sm mb-4">Kontakt</h4>
          <div className="flex flex-col gap-2 text-background/50 text-sm">
            <span>📞 +372 5555 1234</span>
            <span>✉️ info@saulproject.ee</span>
            <span>📍 Näidis 12, Tallinn, Estonia</span>
          </div>
          <div className="flex gap-3 mt-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/50 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-background/30 text-xs">
        <span>© 2024 Saul Project. Kõik õigused kaitstud.</span>
        <a href="#" className="hover:text-primary transition-colors">Privaatsustingimused</a>
      </div>
    </div>
  </footer>
);

export default Footer;
