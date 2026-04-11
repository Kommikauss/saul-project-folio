import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CustomCursor from "@/components/CustomCursor";

const Index = () => (
  <>
    <CustomCursor />
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
