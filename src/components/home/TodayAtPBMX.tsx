
import React from 'react';
import { Clock, Users, MapPin } from 'lucide-react';

const TodayAtPBMX = () => {
  // Mock data - will be replaced with real data from Supabase
  const upcomingSessions = [
    {
      id: 1,
      type: 'Open Play',
      time: '6:00 PM',
      duration: '2 hours',
      capacity: { current: 12, max: 20 },
      location: 'Courts 1-4',
      price: 25
    },
    {
      id: 2,
      type: 'Advanced Open Play',
      time: '8:30 PM',
      duration: '1.5 hours',
      capacity: { current: 8, max: 16 },
      location: 'Courts 1-2',
      price: 30
    }
  ];

  return (
    <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></span>
        Today at PBMX
      </h2>
      
      <div className="space-y-4">
        {upcomingSessions.map((session, index) => {
          const capacityPercentage = (session.capacity.current / session.capacity.max) * 100;
          
          return (
            <div 
              key={session.id} 
              className="bg-gradient-to-r from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700 hover:border-primary/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${700 + (index * 100)}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{session.type}</h3>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{session.time} • {session.duration}</span>
                    <MapPin className="w-4 h-4 ml-3 mr-1" />
                    <span>{session.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-primary">${session.price}</div>
                  <div className="text-xs text-gray-400">per person</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">
                    {session.capacity.current}/{session.capacity.max} players
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="capacity-bar w-24">
                    <div 
                      className="capacity-fill"
                      style={{ width: `${capacityPercentage}%` }}
                    ></div>
                  </div>
                  <button className="px-4 py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {upcomingSessions.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-400">No sessions scheduled for today</p>
        </div>
      )}
    </div>
  );
};

export default TodayAtPBMX;
