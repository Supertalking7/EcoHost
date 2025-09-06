import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import parkingSolar from "@/assets/parking-solar.jpg";
import constructionProcess from "@/assets/construction-process.jpg";
import glampingResort from "@/assets/glamping-resort.jpg";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: "Case Prefabbricate",
      description: "Costruzioni moderne, sostenibili e personalizzate per il tuo futuro. Tempi rapidi e qualità garantita.",
      features: [
        "Costruzione in 30-60 giorni",
        "Materiali eco-compatibili",
        "Personalizzazione completa",
        "Risparmio energetico -40%"
      ],
      image: constructionProcess,
      link: "/case-prefabbricate"
    },
    {
      title: "Pannelli Solari",
      description: "Energia pulita e rinnovabile per un futuro sostenibile. Riduzione bollette e impatto ambientale zero.",
      features: [
        "Riduzione bolletta -80%",
        "Garanzia 25 anni",
        "Sistemi di accumulo",
        "Colonnine di ricarica EV"
      ],
      image: parkingSolar,
      link: "/pannelli-solari"
    },
    {
      title: "Glamping Resort",
      description: "L'esperienza di campeggio più lussuosa e confortevole che tu abbia mai provato.",
      features: [
        "Strutture uniche e confortevoli",
        "Servizio premium 5 stelle",
        "Location esclusiva nella natura",
        "Attività e divertimenti inclusi"
      ],
      image: glampingResort,
      link: "/glamping"
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={service.link} className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Scopri di Più
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}