import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/ui/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Leaf, Home, Zap, Shield, Truck, MapPin, Users } from "lucide-react";
import heroHouse from "@/assets/hero-house.jpg";
import constructionProcess from "@/assets/construction-process.jpg";

function CasePrefabbricateContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroHouse} 
            alt="Case prefabbricate moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('services.prefab.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              {t('services.prefab.desc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {t('services.prefab.feature1')}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {t('services.prefab.feature2')}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {t('services.prefab.feature3')}
              </Badge>
            </div>
            <Button size="lg" className="text-lg px-8 py-4">
              {t('contact.form.title')}
            </Button>
          </div>
        </div>
      </section>

      {/* Caratteristiche Principali */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('prefab.characteristics.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('prefab.characteristics.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('prefab.characteristics.speed.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('prefab.characteristics.speed.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('prefab.characteristics.materials.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('prefab.characteristics.materials.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('prefab.characteristics.design.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('prefab.characteristics.design.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('prefab.characteristics.efficiency.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('prefab.characteristics.efficiency.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('prefab.characteristics.durability.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('prefab.characteristics.durability.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('prefab.characteristics.compliance.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('prefab.characteristics.compliance.desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Prefabbricate su Ruote - NUOVA SEZIONE */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t('prefab.wheels.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('prefab.wheels.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('prefab.wheels.mobility.title')}</h3>
                    <p className="text-muted-foreground">{t('prefab.wheels.mobility.desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('prefab.wheels.flexibility.title')}</h3>
                    <p className="text-muted-foreground">{t('prefab.wheels.flexibility.desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('prefab.wheels.versatility.title')}</h3>
                    <p className="text-muted-foreground">{t('prefab.wheels.versatility.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={constructionProcess} 
                alt="Case prefabbricate su ruote"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Processo di Costruzione */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t('prefab.process.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('prefab.process.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('prefab.process.step1.title')}</h3>
                    <p className="text-muted-foreground">{t('prefab.process.step1.desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('prefab.process.step2.title')}</h3>
                    <p className="text-muted-foreground">{t('prefab.process.step2.desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('prefab.process.step3.title')}</h3>
                    <p className="text-muted-foreground">{t('prefab.process.step3.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={constructionProcess} 
                alt="Processo di costruzione"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi Ambientali */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('prefab.environment.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('prefab.environment.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t('prefab.environment.emissions.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('prefab.environment.emissions.desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{t('prefab.environment.emissions.point1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{t('prefab.environment.emissions.point2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{t('prefab.environment.emissions.point3')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t('prefab.environment.standards.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('prefab.environment.standards.desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{t('prefab.environment.standards.point1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{t('prefab.environment.standards.point2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{t('prefab.environment.standards.point3')}</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('prefab.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('prefab.cta.subtitle')}
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            {t('prefab.cta.button')}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default function CasePrefabbricate() {
  return (
    <LanguageProvider>
      <CasePrefabbricateContent />
    </LanguageProvider>
  );
}
