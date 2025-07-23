
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: string;
}

interface LanguageContextType {
  language: 'en' | 'es';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<'en' | 'es', Translations> = {
  en: {
    // Navigation - Desktop
    'nav.home': 'Home',
    'nav.openPlay': 'Open Play',
    'nav.coaching': 'Coaching',
    'nav.reserve': 'Reserve',
    'nav.myBookings': 'My Bookings',
    'nav.account': 'Account',
    
    // Navigation - Mobile
    'nav.mobile.home': 'Home',
    'nav.mobile.openPlay': 'Play',
    'nav.mobile.coaching': 'Coaching',
    'nav.mobile.reserve': 'Reserve',
    'nav.mobile.myBookings': 'Bookings',
    'nav.mobile.account': 'Account',
    
    // Home page
    'home.welcome': 'Welcome to',
    'home.subtitle': 'Premium pickleball courts, expert coaching, and vibrant community play. Book your next game in seconds.',
    'home.openPlay.title': 'Open Play',
    'home.openPlay.description': 'Join scheduled sessions with players of all skill levels',
    'home.coaching.title': 'Coaching',
    'home.coaching.description': 'Private lessons and group clinics with certified pros',
    'home.reserve.title': 'Court Reservation',
    'home.reserve.description': 'Book private court time for you and your group',
    'home.todayAtPbmx': 'Today at PBMX',
    
    // Open Play page
    'openPlay.title': 'Open Play Sessions',
    'openPlay.subtitle': 'Join other players for fun, competitive games at all skill levels',
    'openPlay.available': 'Available Sessions',
    'openPlay.capacity': 'Capacity',
    'openPlay.book': 'Book Session',
    'openPlay.full': 'Session Full',
    
    // Other pages
    'coaching.title': 'Coaching Programs',
    'reserve.title': 'Court Reservations',
    'myBookings.title': 'My Bookings',
    'login.title': 'Sign In',
    'register.title': 'Create Account',
  },
  es: {
    // Navigation - Desktop
    'nav.home': 'Inicio',
    'nav.openPlay': 'Juego Abierto',
    'nav.coaching': 'Entrenamiento',
    'nav.reserve': 'Reservar',
    'nav.myBookings': 'Mis Reservas',
    'nav.account': 'Cuenta',
    
    // Navigation - Mobile
    'nav.mobile.home': 'Inicio',
    'nav.mobile.openPlay': 'Juego',
    'nav.mobile.coaching': 'Entreno',
    'nav.mobile.reserve': 'Reservar',
    'nav.mobile.myBookings': 'Reservas',
    'nav.mobile.account': 'Cuenta',
    
    // Home page
    'home.welcome': 'Bienvenido a',
    'home.subtitle': 'Canchas premium de pickleball, entrenamiento experto y juego comunitario vibrante. Reserva tu próximo juego en segundos.',
    'home.openPlay.title': 'Juego Abierto',
    'home.openPlay.description': 'Únete a sesiones programadas con jugadores de todos los niveles',
    'home.coaching.title': 'Entrenamiento',
    'home.coaching.description': 'Lecciones privadas y clínicas grupales con profesionales certificados',
    'home.reserve.title': 'Reserva de Cancha',
    'home.reserve.description': 'Reserva tiempo privado de cancha para ti y tu grupo',
    'home.todayAtPbmx': 'Hoy en PBMX',
    
    // Open Play page
    'openPlay.title': 'Sesiones de Juego Abierto',
    'openPlay.subtitle': 'Únete a otros jugadores para juegos divertidos y competitivos en todos los niveles',
    'openPlay.available': 'Sesiones Disponibles',
    'openPlay.capacity': 'Capacidad',
    'openPlay.book': 'Reservar Sesión',
    'openPlay.full': 'Sesión Llena',
    
    // Other pages
    'coaching.title': 'Programas de Entrenamiento',
    'reserve.title': 'Reservas de Cancha',
    'myBookings.title': 'Mis Reservas',
    'login.title': 'Iniciar Sesión',
    'register.title': 'Crear Cuenta',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
