import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";


const Index = () => (
  <>
    <SEO
      title="Saul Project | Remondi- ja ehitustööd Eestis"
      description="Saul Project – usaldusväärne partner remondi-, elektri-, toru- ja hooldustöödeks. Teenindame eraisikuid ja korteriühistuid üle Eesti."
      path="/"
      keywords="remont, ehitus, elektritööd, torutööd, hooldus, korteriühistu, EV laadimine, Eesti"
    />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <StatsSection />
    <WhyUsSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <FloatingCTA />
  </>
);

export default Index;
