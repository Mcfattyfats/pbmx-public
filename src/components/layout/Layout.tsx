
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pb-20 pt-4 md:pt-20 md:pb-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
