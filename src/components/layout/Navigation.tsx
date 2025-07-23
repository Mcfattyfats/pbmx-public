
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, GraduationCap, Calendar, BookOpen, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import LanguageToggle from './LanguageToggle';

const Navigation = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const navItems = [
    { 
      href: '/', 
      icon: Home, 
      label: isMobile ? t('nav.mobile.home') : t('nav.home')
    },
    { 
      href: '/open-play', 
      icon: Users, 
      label: isMobile ? t('nav.mobile.openPlay') : t('nav.openPlay')
    },
    { 
      href: '/coaching', 
      icon: GraduationCap, 
      label: isMobile ? t('nav.mobile.coaching') : t('nav.coaching')
    },
    { 
      href: '/reserve', 
      icon: Calendar, 
      label: isMobile ? t('nav.mobile.reserve') : t('nav.reserve')
    },
    { 
      href: '/my-bookings', 
      icon: BookOpen, 
      label: isMobile ? t('nav.mobile.myBookings') : t('nav.myBookings')
    },
    { 
      href: '/login', 
      icon: User, 
      label: isMobile ? t('nav.mobile.account') : t('nav.account')
    },
  ];

  return (
    <>
      <LanguageToggle />
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-t border-gray-800 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between md:justify-start md:space-x-8">
            {/* Logo - only visible on desktop */}
            <div className="hidden md:flex items-center space-x-2 py-4">
              <span className="text-xl font-bold text-white">PBMX</span>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center justify-around w-full md:w-auto md:space-x-6 py-2 md:py-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex flex-col md:flex-row items-center justify-center space-y-0.5 md:space-y-0 md:space-x-2 px-1 md:px-2 py-2 rounded-lg transition-all duration-200 min-w-0 flex-1 md:flex-initial",
                      isActive 
                        ? "text-primary bg-primary/10" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <Icon className={cn(
                      "w-5 h-5 transition-all duration-200 flex-shrink-0",
                      isActive && "animate-scale-in"
                    )} />
                    <span className="text-xs md:text-sm font-medium text-center leading-tight truncate">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
