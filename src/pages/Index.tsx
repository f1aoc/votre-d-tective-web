import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import FooterCTA from "@/components/FooterCTA";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <CTASection />
      <ProcessSection />
      <TestimonialsSection />
      <ResourcesSection />
      <FooterCTA />
      <Chatbot />
    </div>
  );
};

export default Index;
