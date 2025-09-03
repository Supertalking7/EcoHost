import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contatti" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>{t('contact.form.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder={t('contact.form.name')} />
                <Input placeholder={t('contact.form.surname')} />
              </div>
              <Input placeholder={t('contact.form.email')} type="email" />
              <Input placeholder={t('contact.form.phone')} type="tel" />
              <select className="w-full p-3 border border-border rounded-md bg-background">
                <option>{t('contact.form.service')}</option>
                <option>{t('contact.form.service.prefab')}</option>
                <option>{t('contact.form.service.parking')}</option>
                <option>{t('contact.form.service.glamping')}</option>
                <option>{t('contact.form.service.all')}</option>
              </select>
              <Textarea 
                placeholder={t('contact.form.message')} 
                className="min-h-[120px]"
              />
              <Button 
                size="lg" 
                className="w-full bg-gradient-hero hover:opacity-90 text-white"
              >
                {t('contact.form.submit')}
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <p className="font-medium">{t('contact.info.address')}</p>
                      <p className="text-muted-foreground">Via delle Costruzioni 123, Milano</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="font-medium">{t('contact.info.phone')}</p>
                      <p className="text-muted-foreground">+39 02 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      ✉️
                    </div>
                    <div>
                      <p className="font-medium">{t('contact.info.email')}</p>
                      <p className="text-muted-foreground">info@ecoconstruct.it</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t('contact.hours.title')}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t('contact.hours.weekdays')}</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.saturday')}</span>
                    <span>9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.sunday')}</span>
                    <span>{t('contact.hours.closed')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}