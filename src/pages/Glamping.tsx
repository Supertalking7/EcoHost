import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/ui/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Zap, Clock, Star, Shield, CheckCircle, Heart } from "lucide-react";
import glampingPod from "@/assets/glamping-pod.jpg";
import glampingResort from "@/assets/glamping-resort.jpg";

function GlampingContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={glampingResort} 
            alt="Glamping eco-luxury resort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('glamping.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              {t('glamping.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {t('glamping.feature1')}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {t('glamping.feature2')}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {t('glamping.feature3')}
              </Badge>
            </div>
            <Button size="lg" className="text-lg px-8 py-4">
              {t('contact.form.title')}
            </Button>
          </div>
        </div>
      </section>

      {/* Tipologie di Strutture */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('glamping.solutions.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('glamping.solutions.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pod Glamping */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={glampingPod} 
                  alt="Pod glamping eco-luxury"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('glamping.solutions.pod.title')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('glamping.solutions.pod.desc')}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.surface')}:</span>
                      <span className="font-semibold">25-35 m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.guests')}:</span>
                      <span className="font-semibold">{t('glamping.solutions.specs.guests2')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.bathroom')}:</span>
                      <span className="font-semibold">{t('glamping.solutions.specs.bathroomValue')}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.kitchen')}:</span>
                      <span className="font-semibold">{t('glamping.solutions.specs.kitchenValue')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.climate')}:</span>
                      <span className="font-semibold">{t('glamping.solutions.specs.climateValue')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.terrace')}:</span>
                      <span className="font-semibold">{t('glamping.solutions.specs.terraceValue')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Suite Glamping */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={glampingResort} 
                  alt="Suite glamping resort"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('glamping.solutions.suite.title')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('glamping.solutions.suite.desc')}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.surface')}:</span>
                      <span className="font-semibold">45-65 m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.guests')}:</span>
                      <span className="font-semibold">{t('glamping.solutions.specs.guests4')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.rooms')}:</span>
                      <span className="font-semibold">{t('glamping.solutions.specs.roomsValue')}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.kitchen')}:</span>
                      <span className="font-semibold">{t('glamping.solutions.specs.kitchenComplete')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.living')}:</span>
                      <span className="font-semibold">{t('glamping.solutions.specs.livingValue')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('glamping.solutions.specs.terrace')}:</span>
                      <span className="font-semibold">{t('glamping.solutions.specs.terracePanoramic')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caratteristiche Premium */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('glamping.features.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('glamping.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('glamping.features.sustainable.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('glamping.features.sustainable.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('glamping.features.comfort.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('glamping.features.comfort.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('glamping.features.energy.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('glamping.features.energy.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('glamping.features.installation.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('glamping.features.installation.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('glamping.features.experience.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('glamping.features.experience.desc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('glamping.features.safety.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t('glamping.features.safety.desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI e Business Model */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t('glamping.roi.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('glamping.roi.subtitle')}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">€</div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('glamping.roi.premium.title')}</h3>
                    <p className="text-muted-foreground">{t('glamping.roi.premium.desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">%</div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('glamping.roi.occupancy.title')}</h3>
                    <p className="text-muted-foreground">{t('glamping.roi.occupancy.desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">↗</div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('glamping.roi.return.title')}</h3>
                    <p className="text-muted-foreground">{t('glamping.roi.return.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">
                {t('glamping.roi.advantages.title')}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>{t('glamping.roi.advantages.point1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>{t('glamping.roi.advantages.point2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>{t('glamping.roi.advantages.point3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>{t('glamping.roi.advantages.point4')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>{t('glamping.roi.advantages.point5')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('glamping.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('glamping.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              {t('glamping.cta.button1')}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              {t('glamping.cta.button2')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Glamping() {
  return (
    <LanguageProvider>
      <GlampingContent />
    </LanguageProvider>
  );
}
