
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Calendar, Clock, MapPin, Users, X } from 'lucide-react';

const MyBookings = () => {
  // Mock booking data - will be replaced with real Supabase data
  const upcomingBookings = [
    {
      id: 1,
      type: 'Open Play',
      title: 'Evening Open Play',
      date: '2024-01-25',
      time: '6:00 PM - 8:00 PM',
      location: 'Courts 1-4',
      price: 25,
      status: 'confirmed',
      players: 18,
      maxPlayers: 20
    },
    {
      id: 2,
      type: 'Court Reservation',
      title: 'Court 2 Reservation',
      date: '2024-01-27',
      time: '2:00 PM - 3:00 PM',
      location: 'Court 2 (Premium)',
      price: 80,
      status: 'confirmed',
      players: 2,
      maxPlayers: 4
    },
    {
      id: 3,
      type: 'Coaching',
      title: 'Private Lesson with Sarah Johnson',
      date: '2024-01-28',
      time: '10:00 AM - 11:00 AM',
      location: 'Court 1',
      price: 80,
      status: 'confirmed'
    }
  ];

  const pastBookings = [
    {
      id: 4,
      type: 'Open Play',
      title: 'Morning Open Play',
      date: '2024-01-20',
      time: '8:00 AM - 10:00 AM',
      location: 'Courts 1-4',
      price: 25,
      status: 'completed'
    },
    {
      id: 5,
      type: 'Court Reservation',
      title: 'Court 3 Reservation',
      date: '2024-01-18',
      time: '7:00 PM - 8:30 PM',
      location: 'Court 3 (Standard)',
      price: 60,
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-400 bg-green-400/10';
      case 'completed':
        return 'text-gray-400 bg-gray-400/10';
      case 'cancelled':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Open Play':
        return <Users className="w-5 h-5" />;
      case 'Court Reservation':
        return <Calendar className="w-5 h-5" />;
      case 'Coaching':
        return <Clock className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const handleCancelBooking = (bookingId: number) => {
    // Will implement actual cancellation logic with Supabase
    console.log('Cancelling booking:', bookingId);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-white mb-2">My Bookings</h1>
          <p className="text-gray-400">Manage your reservations and sessions</p>
        </div>

        {/* Upcoming Bookings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 animate-slide-up">Upcoming</h2>
          
          {upcomingBookings.length > 0 ? (
            <div className="space-y-4">
              {upcomingBookings.map((booking, index) => (
                <div 
                  key={booking.id}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg mr-3">
                          {getTypeIcon(booking.type)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{booking.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-400 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(booking.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{booking.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{booking.location}</span>
                        </div>
                      </div>

                      {booking.players && booking.maxPlayers && (
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400">
                            {booking.players}/{booking.maxPlayers} players
                          </span>
                          <div className="capacity-bar w-24">
                            <div 
                              className="capacity-fill"
                              style={{ width: `${(booking.players / booking.maxPlayers) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">${booking.price}</div>
                        <div className="text-xs text-gray-400">total paid</div>
                      </div>
                      
                      <button 
                        onClick={() => handleCancelBooking(booking.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors duration-200"
                        title="Cancel booking"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No Upcoming Bookings</h3>
              <p className="text-gray-400 mb-6">Ready to get back on the court?</p>
              <button className="px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200">
                Book a Session
              </button>
            </div>
          )}
        </section>

        {/* Past Bookings */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '400ms' }}>Past Bookings</h2>
          
          <div className="space-y-4">
            {pastBookings.map((booking, index) => (
              <div 
                key={booking.id}
                className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-gray-700/50 animate-slide-up"
                style={{ animationDelay: `${500 + (index * 100)}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-gray-700/50 rounded-lg mr-3">
                        {getTypeIcon(booking.type)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-300">{booking.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(booking.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{booking.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right mt-4 md:mt-0">
                    <div className="text-lg font-bold text-gray-400">${booking.price}</div>
                    <div className="text-xs text-gray-500">total paid</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MyBookings;
