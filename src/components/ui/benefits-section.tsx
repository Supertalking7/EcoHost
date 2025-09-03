import { useLanguage } from "@/contexts/LanguageContext";

export function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: "🌱",
      title: t('benefits.eco.title'),
      description: t('benefits.eco.desc')
    },
    {
      icon: "⚡",
      title: t('benefits.energy.title'),
      description: t('benefits.energy.desc')
    },
    {
      icon: "🏗️",
      title: t('benefits.speed.title'),
      description: t('benefits.speed.desc')
    },
    {
      icon: "💰",
      title: t('benefits.investment.title'),
      description: t('benefits.investment.desc')
    },
    {
      icon: "🔧",
      title: t('benefits.maintenance.title'),
      description: t('benefits.maintenance.desc')
    },
    {
      icon: "📱",
      title: t('benefits.smart.title'),
      description: t('benefits.smart.desc')
    }
  ];

  return (
    <section id="vantaggi" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('benefits.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}