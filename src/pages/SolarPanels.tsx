import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/ui/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Zap, TrendingUp, Shield, Leaf, Calculator, Battery, Globe, Home, TreePine, Coffee } from "lucide-react";
import parkingSolar from "@/assets/parking-solar.jpg";

function PannelliSolariContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={parkingSolar} 
            alt="Parcheggi fotovoltaici"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('services.solar.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              {t('services.solar.desc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {t('services.solar.feature1')}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {t('services.solar.feature2')}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {t('services.solar.feature3')}
              </Badge>
            </div>
            <Button size="lg" className="text-lg px-8 py-4">
              {t('contact.form.title')}
            </Button>
          </div>
        </div>
      </section>

      {/* Soluzioni Disponibili */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('solar.solutions.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('solar.solutions.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* SOLID 15V - 120 */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">SOLID 15V - 120</CardTitle>
                  <Badge variant="default">{t('solar.solutions.double.title')}</Badge>
                </div>
                <CardDescription className="text-base">
                  {t('solar.solutions.double.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.width')}:</span>
                      <span className="font-semibold">5447mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.depth')}:</span>
                      <span className="font-semibold">5302mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.power')}:</span>
                      <span className="font-semibold text-primary">5,55kW</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.snow')}:</span>
                      <span className="font-semibold">1.7 kN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.wind')}:</span>
                      <span className="font-semibold">27m/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.vehicles')}:</span>
                      <span className="font-semibold">{t('solar.solutions.specs.vehicles2')}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{t('solar.solutions.features.highPower')}</Badge>
                  <Badge variant="outline">{t('solar.solutions.features.double')}</Badge>
                  <Badge variant="outline">{t('solar.solutions.features.resistant')}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* SOLID 12V - 120 */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">SOLID 12V - 120</CardTitle>
                  <Badge variant="secondary">{t('solar.solutions.single.title')}</Badge>
                </div>
                <CardDescription className="text-base">
                  {t('solar.solutions.single.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.width')}:</span>
                      <span className="font-semibold">4370mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.depth')}:</span>
                      <span className="font-semibold">5294mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.power')}:</span>
                      <span className="font-semibold text-primary">4,44kW</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.snow')}:</span>
                      <span className="font-semibold">1.7 kN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.wind')}:</span>
                      <span className="font-semibold">27m/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.vehicles')}:</span>
                      <span className="font-semibold">{t('solar.solutions.specs.vehicles1')}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{t('solar.solutions.features.compact')}</Badge>
                  <Badge variant="outline">{t('solar.solutions.features.efficient')}</Badge>
                  <Badge variant="outline">{t('solar.solutions.features.versatile')}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Pergola Fotovoltaica */}
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{t('solar.solutions.pergola.title')}</CardTitle>
                  <Badge variant="outline">{t('solar.solutions.pergola.type')}</Badge>
                </div>
                <CardDescription className="text-base">
                  {t('solar.solutions.pergola.desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={parkingSolar} 
                    alt="Pergola fotovoltaica residenziale"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.pergola.specs.use')}:</span>
                      <span className="font-semibold">{t('solar.solutions.pergola.specs.useValue')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.specs.power')}:</span>
                      <span className="font-semibold text-primary">2-6kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.pergola.specs.dimensions')}:</span>
                      <span className="font-semibold">{t('solar.solutions.pergola.specs.dimensionsValue')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('solar.solutions.pergola.specs.style')}:</span>
                      <span className="font-semibold">{t('solar.solutions.pergola.specs.styleValue')}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{t('solar.solutions.pergola.features.residential')}</Badge>
                  <Badge variant="outline">{t('solar.solutions.pergola.features.design')}</Badge>
                  <Badge variant="outline">{t('solar.solutions.pergola.features.customizable')}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Veranda con Fotovoltaico - NUOVA SEZIONE */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t('solar.veranda.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('solar.veranda.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('solar.veranda.living.title')}</h3>
                    <p className="text-muted-foreground">{t('solar.veranda.living.desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <TreePine className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('solar.veranda.outdoor.title')}</h3>
                    <p className="text-muted-foreground">{t('solar.veranda.outdoor.desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('solar.veranda.comfort.title')}</h3>
                    <p className="text-muted-foreground">{t('solar.veranda.comfort.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={parkingSolar} 
                alt="Veranda con fotovoltaico"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('solar.benefits.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('solar.benefits.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('solar.benefits.energy.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('solar.benefits.energy.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('solar.benefits.protection.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('solar.benefits.protection.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('solar.benefits.roi.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('solar.benefits.roi.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('solar.benefits.environment.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('solar.benefits.environment.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('solar.benefits.savings.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('solar.benefits.savings.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('solar.benefits.warranty.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('solar.benefits.warranty.desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('solar.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('solar.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              {t('solar.cta.button1')}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              {t('solar.cta.button2')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PannelliSolari() {
  return (
    <LanguageProvider>
      <PannelliSolariContent />
    </LanguageProvider>
  );
}
