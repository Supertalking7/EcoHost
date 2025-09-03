import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { GlampingSection } from "@/components/ui/glamping-section";
import { ContactSection } from "@/components/ui/contact-section";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <GlampingSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-foreground text-background py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-hero rounded-md"></div>
              <span className="text-lg font-bold">EcoConstruct</span>
            </div>
            <p className="text-sm opacity-80">
              © 2024 EcoConstruct. Tutti i diritti riservati. | P.IVA: 12345678901
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
