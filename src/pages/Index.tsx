
import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import HeroCard from '@/components/home/HeroCard';
import TodayAtPBMX from '@/components/home/TodayAtPBMX';
import LoadingScreen from '@/components/loading/LoadingScreen';
import { useLanguage } from '@/contexts/LanguageContext';
import { gsap } from 'gsap';

const Index = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // Animate main content fade in
    gsap.fromTo('.main-content', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <Layout>
      <div className="main-content container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('home.welcome')}{' '}
            <span className="text-white relative inline-block animate-glow">
              PBMX
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
        </div>

        {/* Hero Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <HeroCard
            title={t('home.openPlay.title')}
            description={t('home.openPlay.description')}
            href="/open-play"
            icon={Users}
            delay={100}
          />
          <HeroCard
            title={t('home.coaching.title')}
            description={t('home.coaching.description')}
            href="/coaching"
            icon={GraduationCap}
            delay={200}
          />
          <HeroCard
            title={t('home.reserve.title')}
            description={t('home.reserve.description')}
            href="/reserve"
            icon={Calendar}
            delay={300}
          />
        </div>

        {/* Today's Sessions */}
        <TodayAtPBMX />
      </div>
    </Layout>
  );
};

export default Index;
