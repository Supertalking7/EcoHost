import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import glampingPod from "@/assets/glamping-pod.jpg";
import glampingResort from "@/assets/glamping-resort.jpg";

export function GlampingSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: "🏕️",
      title: t('glamping.feature1')
    },
    {
      icon: "⚡",
      title: t('glamping.feature2')
    },
    {
      icon: "🛏️",
      title: t('glamping.feature3')
    },
    {
      icon: "🌿",
      title: t('glamping.feature4')
    }
  ];

  return (
    <section id="glamping" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('glamping.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('glamping.subtitle')}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-elegant">
          <img 
            src={glampingResort} 
            alt="Glamping Resort"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-center lg:text-left">
            <Button 
              size="lg"
              className="bg-gradient-hero hover:opacity-90 text-white shadow-glow"
            >
              {t('glamping.cta')}
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={glampingPod} 
              alt="Glamping Pod"
              className="w-full rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-solar/20 to-nature/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}