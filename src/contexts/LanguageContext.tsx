import React, { createContext, useContext, useState } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  it: {
    // Navigation
    'nav.services': 'Servizi',
    'nav.benefits': 'Vantaggi', 
    'nav.glamping': 'Glamping',
    'nav.projects': 'Progetti',
    'nav.contact': 'Contatti',
    
    // Hero Section
    'hero.title1': 'Costruzioni',
    'hero.title2': 'Sostenibili',
    'hero.subtitle': 'Realizziamo case prefabbricate innovative e parcheggi con fotovoltaico. Soluzioni eco-sostenibili per un futuro migliore.',
    'hero.cta1': 'Scopri i Nostri Progetti',
    'hero.cta2': 'Richiedi Preventivo',
    
    // Services
    'services.title': 'I Nostri Servizi',
    'services.subtitle': 'Soluzioni innovative per costruzioni sostenibili e produzione di energia rinnovabile',
    'services.prefab.title': 'Case Prefabbricate',
    'services.prefab.desc': 'Abitazioni moderne personalizzate, realizzate in poche settimane e montate in pochi giorni con materiali eco-sostenibili.',
    'services.prefab.feature1': 'Realizzazione in 3-4 settimane',
    'services.prefab.feature2': 'Montaggio in 2-3 giorni',
    'services.prefab.feature3': 'Materiali eco-compatibili',
    'services.prefab.feature4': 'Design personalizzabile',
    'services.parking.title': 'Parcheggi Fotovoltaici',
    'services.parking.desc': 'Strutture di parcheggio integrate con sistemi fotovoltaici per la produzione di energia pulita.',
    'services.parking.feature1': 'Produzione energia rinnovabile',
    'services.parking.feature2': 'Protezione veicoli',
    'services.parking.feature3': 'ROI garantito',
    'services.parking.feature4': 'Manutenzione minima',
    'services.button': 'Scopri di più',
    
    // Glamping
    'glamping.title': 'Glamping Eco-Luxury',
    'glamping.subtitle': 'Strutture glamping uniche che coniugano comfort e sostenibilità per esperienze indimenticabili',
    'glamping.feature1': 'Design eco-luxury personalizzato',
    'glamping.feature2': 'Installazione rapida',
    'glamping.feature3': 'Comfort alberghiero',
    'glamping.feature4': 'Impatto ambientale zero',
    'glamping.cta': 'Esplora le Soluzioni Glamping',
    
    // Benefits
    'benefits.title': 'Perché Scegliere le Nostre Soluzioni',
    'benefits.subtitle': 'Vantaggi concreti per il tuo investimento e per l\'ambiente',
    'benefits.eco.title': 'Eco-Sostenibile',
    'benefits.eco.desc': 'Materiali riciclabili e processi a basso impatto ambientale',
    'benefits.energy.title': 'Efficienza Energetica',
    'benefits.energy.desc': 'Sistemi avanzati per il risparmio energetico e la produzione di energia pulita',
    'benefits.speed.title': 'Tempi Ridotti',
    'benefits.speed.desc': 'Realizzazione in 3-4 settimane, montaggio in 2-3 giorni',
    'benefits.investment.title': 'Investimento Sicuro',
    'benefits.investment.desc': 'ROI garantito e riduzione dei costi operativi nel lungo termine',
    'benefits.maintenance.title': 'Manutenzione Minima',
    'benefits.maintenance.desc': 'Materiali durevoli e sistemi progettati per durare nel tempo',
    'benefits.smart.title': 'Tecnologia Smart',
    'benefits.smart.desc': 'Sistemi di monitoraggio e controllo intelligenti integrati',
    
    // Contact
    'contact.title': 'Contattaci',
    'contact.subtitle': 'Pronti a realizzare il tuo progetto sostenibile? Richiedi un preventivo gratuito',
    'contact.form.title': 'Richiedi Informazioni',
    'contact.form.name': 'Nome',
    'contact.form.surname': 'Cognome',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefono',
    'contact.form.service': 'Seleziona servizio di interesse',
    'contact.form.service.prefab': 'Case Prefabbricate',
    'contact.form.service.parking': 'Parcheggi Fotovoltaici',
    'contact.form.service.glamping': 'Glamping',
    'contact.form.service.all': 'Tutti i servizi',
    'contact.form.message': 'Descrivi il tuo progetto...',
    'contact.form.submit': 'Invia Richiesta',
    'contact.info.title': 'Informazioni di Contatto',
    'contact.info.address': 'Sede Operativa',
    'contact.info.phone': 'Telefono',
    'contact.info.email': 'Email',
    'contact.hours.title': 'Orari di Apertura',
    'contact.hours.weekdays': 'Lunedì - Venerdì',
    'contact.hours.saturday': 'Sabato',
    'contact.hours.sunday': 'Domenica',
    'contact.hours.closed': 'Chiuso',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.benefits': 'Benefits',
    'nav.glamping': 'Glamping',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title1': 'Sustainable',
    'hero.title2': 'Construction',
    'hero.subtitle': 'We create innovative prefabricated houses and photovoltaic parking structures. Eco-sustainable solutions for a better future.',
    'hero.cta1': 'Discover Our Projects',
    'hero.cta2': 'Request Quote',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Innovative solutions for sustainable construction and renewable energy production',
    'services.prefab.title': 'Prefabricated Houses',
    'services.prefab.desc': 'Custom modern homes, built in just a few weeks and assembled in just a few days with eco-sustainable materials.',
    'services.prefab.feature1': 'Built in 3-4 weeks',
    'services.prefab.feature2': 'Assembled in 2-3 days',
    'services.prefab.feature3': 'Eco-compatible materials',
    'services.prefab.feature4': 'Customizable design',
    'services.parking.title': 'Photovoltaic Parking',
    'services.parking.desc': 'Parking structures integrated with photovoltaic systems for clean energy production.',
    'services.parking.feature1': 'Renewable energy production',
    'services.parking.feature2': 'Vehicle protection',
    'services.parking.feature3': 'Guaranteed ROI',
    'services.parking.feature4': 'Minimal maintenance',
    'services.button': 'Learn more',
    
    // Glamping
    'glamping.title': 'Eco-Luxury Glamping',
    'glamping.subtitle': 'Unique glamping structures that combine comfort and sustainability for unforgettable experiences',
    'glamping.feature1': 'Custom eco-luxury design',
    'glamping.feature2': 'Quick installation',
    'glamping.feature3': 'Hotel-level comfort',
    'glamping.feature4': 'Zero environmental impact',
    'glamping.cta': 'Explore Glamping Solutions',
    
    // Benefits
    'benefits.title': 'Why Choose Our Solutions',
    'benefits.subtitle': 'Concrete benefits for your investment and the environment',
    'benefits.eco.title': 'Eco-Sustainable',
    'benefits.eco.desc': 'Recyclable materials and low environmental impact processes',
    'benefits.energy.title': 'Energy Efficiency',
    'benefits.energy.desc': 'Advanced systems for energy saving and clean energy production',
    'benefits.speed.title': 'Reduced Time',
    'benefits.speed.desc': 'Built in 3-4 weeks, assembled in 2-3 days',
    'benefits.investment.title': 'Safe Investment',
    'benefits.investment.desc': 'Guaranteed ROI and reduced operating costs in the long term',
    'benefits.maintenance.title': 'Minimal Maintenance',
    'benefits.maintenance.desc': 'Durable materials and systems designed to last over time',
    'benefits.smart.title': 'Smart Technology',
    'benefits.smart.desc': 'Integrated intelligent monitoring and control systems',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to realize your sustainable project? Request a free quote',
    'contact.form.title': 'Request Information',
    'contact.form.name': 'First Name',
    'contact.form.surname': 'Last Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Select service of interest',
    'contact.form.service.prefab': 'Prefabricated Houses',
    'contact.form.service.parking': 'Photovoltaic Parking',
    'contact.form.service.glamping': 'Glamping',
    'contact.form.service.all': 'All services',
    'contact.form.message': 'Describe your project...',
    'contact.form.submit': 'Send Request',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Headquarters',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.hours.title': 'Opening Hours',
    'contact.hours.weekdays': 'Monday - Friday',
    'contact.hours.saturday': 'Saturday',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.closed': 'Closed',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['it']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}