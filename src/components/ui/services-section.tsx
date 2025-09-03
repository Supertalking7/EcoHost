import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import parkingSolar from "@/assets/parking-solar.jpg";
import constructionProcess from "@/assets/construction-process.jpg";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.prefab.title'),
      description: t('services.prefab.desc'),
      features: [
        t('services.prefab.feature1'),
        t('services.prefab.feature2'),
        t('services.prefab.feature3'),
        t('services.prefab.feature4')
      ],
      image: constructionProcess
    },
    {
      title: t('services.parking.title'),
      description: t('services.parking.desc'),
      features: [
        t('services.parking.feature1'),
        t('services.parking.feature2'),
        t('services.parking.feature3'),
        t('services.parking.feature4')
      ],
      image: parkingSolar
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

        <div className="grid lg:grid-cols-2 gap-12">
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
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {t('services.button')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}