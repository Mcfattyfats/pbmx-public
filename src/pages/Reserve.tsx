
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Reserve = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedCourt, setSelectedCourt] = useState('all');

  // Mock court data
  const courts = [
    { id: 1, name: 'Court 1', type: 'Premium' },
    { id: 2, name: 'Court 2', type: 'Premium' },
    { id: 3, name: 'Court 3', type: 'Standard' },
    { id: 4, name: 'Court 4', type: 'Standard' },
  ];

  // Generate time slots (30-minute intervals from 6 AM to 10 PM)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour < 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const displayTime = new Date(`2000-01-01 ${time}`).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        slots.push({ time, displayTime });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Mock availability data
  const getSlotStatus = (courtId: number, time: string) => {
    // Simulate some booked slots
    const bookedSlots = [
      { court: 1, time: '08:00' },
      { court: 1, time: '08:30' },
      { court: 2, time: '18:00' },
      { court: 2, time: '18:30' },
      { court: 3, time: '12:00' },
    ];
    
    return bookedSlots.some(slot => slot.court === courtId && slot.time === time) ? 'booked' : 'available';
  };

  const filteredCourts = selectedCourt === 'all' ? courts : courts.filter(court => court.id === parseInt(selectedCourt));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-white mb-2">Court Reservation</h1>
          <p className="text-gray-400">Book your private court time</p>
        </div>

        {/* Filters */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 mb-8 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Select Court
              </label>
              <select
                value={selectedCourt}
                onChange={(e) => setSelectedCourt(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none"
              >
                <option value="all">All Courts</option>
                {courts.map(court => (
                  <option key={court.id} value={court.id.toString()}>
                    {court.name} ({court.type})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Reservation Grid */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Available Time Slots</h2>
            <p className="text-gray-400 text-sm">
              {new Date(selectedDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Header */}
              <div className="grid grid-cols-5 gap-2 mb-4">
                <div className="text-sm font-medium text-gray-400 p-2">Time</div>
                {filteredCourts.map(court => (
                  <div key={court.id} className="text-sm font-medium text-gray-300 p-2 text-center">
                    <div>{court.name}</div>
                    <div className="text-xs text-gray-500">{court.type}</div>
                  </div>
                ))}
              </div>

              {/* Time slots */}
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {timeSlots.map((slot, index) => (
                  <div key={slot.time} className="grid grid-cols-5 gap-2" style={{ animationDelay: `${300 + (index * 20)}ms` }}>
                    <div className="text-sm text-gray-400 p-2 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {slot.displayTime}
                    </div>
                    {filteredCourts.map(court => {
                      const status = getSlotStatus(court.id, slot.time);
                      return (
                        <button
                          key={`${court.id}-${slot.time}`}
                          className={`p-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            status === 'available'
                              ? 'bg-gray-700 hover:bg-primary hover:text-black border border-gray-600 hover:border-primary'
                              : 'bg-red-900/30 text-red-400 border border-red-800 cursor-not-allowed'
                          }`}
                          disabled={status === 'booked'}
                        >
                          {status === 'available' ? '$40' : 'Booked'}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-700 border border-gray-600 rounded mr-2"></div>
                  <span className="text-gray-400">Available ($40/30min)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-900/30 border border-red-800 rounded mr-2"></div>
                  <span className="text-gray-400">Booked</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400">
                <Users className="w-4 h-4 mr-1" />
                <span>Up to 4 players per court</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reserve;
