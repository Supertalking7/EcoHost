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
              <div className="w-6 h-6 bg-gradient-hero rounded-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  <path d="M12 8l-4 2v6l4 2 4-2V10l-4-2z" fill="white"/>
                </svg>
              </div>
              <span className="text-lg font-bold">Solar Build</span>
            </div>
            <p className="text-sm opacity-80">
              © 2024 Solar Build. Tutti i diritti riservati. | P.IVA: 12345678901
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
