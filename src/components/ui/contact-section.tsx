import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactModal } from "./contact-modal";

export function ContactSection() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contatti" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Hai bisogno di aiuto?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Contattaci per una consulenza gratuita o per richiedere un preventivo personalizzato
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 text-white px-8 py-4 text-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Contattaci Ora
            </Button>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-elegant p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                📍
              </div>
              <h4 className="font-semibold mb-2">Indirizzo</h4>
              <p className="text-muted-foreground">Via del Glicine 3, Biancavilla</p>
            </Card>

            <Card className="shadow-elegant p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                📞
              </div>
              <h4 className="font-semibold mb-2">Telefono</h4>
              <p className="text-muted-foreground">+393923633730</p>
            </Card>

            <Card className="shadow-elegant p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                ✉️
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-muted-foreground">info@ecoconstruct.it</p>
            </Card>
          </div>
        </div>

        {/* Contact Modal */}
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  );
}