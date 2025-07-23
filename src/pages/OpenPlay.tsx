
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Clock, Users, MapPin, Star } from 'lucide-react';

const OpenPlay = () => {
  // Mock data - will be replaced with real Supabase data
  const sessions = [
    {
      id: 1,
      title: 'Morning Open Play',
      time: '8:00 AM - 10:00 AM',
      date: 'Today',
      level: 'All Levels',
      capacity: { current: 12, max: 20 },
      location: 'Courts 1-4',
      price: 25,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Lunch Break Session',
      time: '12:00 PM - 1:30 PM',
      date: 'Today',
      level: 'Beginner-Intermediate',
      capacity: { current: 8, max: 16 },
      location: 'Courts 1-2',
      price: 20,
      rating: 4.9
    },
    {
      id: 3,
      title: 'Evening Open Play',
      time: '6:00 PM - 8:00 PM',
      date: 'Today',
      level: 'All Levels',
      capacity: { current: 15, max: 20 },
      location: 'Courts 1-4',
      price: 25,
      rating: 4.7
    },
    {
      id: 4,
      title: 'Advanced Night Session',
      time: '8:30 PM - 10:00 PM',
      date: 'Today',
      level: 'Advanced (4.0+)',
      capacity: { current: 6, max: 12 },
      location: 'Courts 1-2',
      price: 30,
      rating: 4.9
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-white mb-2">Open Play Sessions</h1>
          <p className="text-gray-400">Drop in and play with our community</p>
        </div>

        <div className="grid gap-6">
          {sessions.map((session, index) => {
            const capacityPercentage = (session.capacity.current / session.capacity.max) * 100;
            const isNearFull = capacityPercentage > 80;
            
            return (
              <div 
                key={session.id}
                className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-white mr-3">
                        {session.title}
                      </h3>
                      <div className="flex items-center text-primary">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="text-sm font-medium">{session.rating}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{session.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{session.level}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-300">
                          {session.capacity.current}/{session.capacity.max} players
                        </span>
                        {isNearFull && (
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                            Almost Full
                          </span>
                        )}
                      </div>
                      <div className="capacity-bar flex-1 max-w-32">
                        <div 
                          className="capacity-fill"
                          style={{ width: `${capacityPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">${session.price}</div>
                      <div className="text-xs text-gray-400">per person</div>
                    </div>
                    <button 
                      className="px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={session.capacity.current >= session.capacity.max}
                    >
                      {session.capacity.current >= session.capacity.max ? 'Full' : 'Book Now'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {sessions.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Sessions Available</h3>
            <p className="text-gray-400">Check back later for upcoming open play sessions</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OpenPlay;
