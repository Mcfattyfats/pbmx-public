
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

const HeroCard: React.FC<HeroCardProps> = ({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  className,
  delay = 0 
}) => {
  return (
    <Link 
      to={href}
      className={cn(
        "group block p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 card-hover animate-slide-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
