
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-4 right-4 z-50 flex items-center space-x-2 bg-black/60 backdrop-blur-md rounded-lg px-3 py-2 border border-gray-800 transition-all duration-500 ${
        isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <span className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-white' : 'text-gray-400'}`}>
        EN
      </span>
      <Switch
        checked={language === 'es'}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-primary"
      />
      <span className={`text-sm font-medium transition-colors ${language === 'es' ? 'text-white' : 'text-gray-400'}`}>
        ES
      </span>
    </div>
  );
};

export default LanguageToggle;
