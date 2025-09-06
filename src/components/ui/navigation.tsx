import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className={cn("fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b", className)}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-md flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              <path d="M12 8l-4 2v6l4 2 4-2V10l-4-2z" fill="white"/>
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Solar Build
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#servizi" className="text-foreground hover:text-primary transition-colors">
            {t('nav.services')}
          </a>
          <a href="#vantaggi" className="text-foreground hover:text-primary transition-colors">
            {t('nav.benefits')}
          </a>

          <a href="#contatti" className="text-foreground hover:text-primary transition-colors">
            {t('nav.contact')}
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Button
              variant={language === 'it' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('it')}
              className="text-xs px-2 h-8"
            >
              IT
            </Button>
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('en')}
              className="text-xs px-2 h-8"
            >
              EN
            </Button>
          </div>
          
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}