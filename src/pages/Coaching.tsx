
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Star, Clock, Users, Award } from 'lucide-react';

const Coaching = () => {
  // Mock coaching options - will be dynamic later
  const coaches = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Head Pro & Certified Instructor',
      rating: 4.9,
      experience: '8 years',
      specialties: ['Beginners', 'Tournament Prep', 'Strategy'],
      price: 80,
      image: '/placeholder.svg',
      availability: 'Available this week'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      title: 'Advanced Skills Coach',
      rating: 4.8,
      experience: '6 years',
      specialties: ['Advanced Techniques', 'Power Play', 'Conditioning'],
      price: 75,
      image: '/placeholder.svg',
      availability: 'Next available: Tomorrow'
    },
    {
      id: 3,
      name: 'Emma Chen',
      title: 'Youth & Development Coach',
      rating: 4.9,
      experience: '5 years',
      specialties: ['Youth Training', 'Fundamentals', 'Group Clinics'],
      price: 70,
      image: '/placeholder.svg',
      availability: 'Available this week'
    }
  ];

  const groupPrograms = [
    {
      id: 1,
      title: 'Beginner Bootcamp',
      description: '4-week intensive program for new players',
      duration: '1 hour sessions',
      frequency: '2x per week',
      maxStudents: 8,
      price: 120,
      nextStart: 'Next Monday'
    },
    {
      id: 2,
      title: 'Advanced Strategy Clinic',
      description: 'Master court positioning and game tactics',
      duration: '1.5 hour sessions',
      frequency: '1x per week',
      maxStudents: 6,
      price: 100,
      nextStart: 'This Thursday'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-white mb-2">Coaching & Lessons</h1>
          <p className="text-gray-400">Elevate your game with expert instruction</p>
        </div>

        {/* Private Coaching */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 animate-slide-up">Private Coaching</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((coach, index) => (
              <div 
                key={coach.id}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-16 h-16 rounded-full bg-gray-700 mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{coach.name}</h3>
                    <p className="text-sm text-gray-400">{coach.title}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="font-medium">{coach.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Award className="w-4 h-4 mr-1" />
                      <span>{coach.experience}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {coach.specialties.map((specialty) => (
                        <span 
                          key={specialty}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-gray-400">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {coach.availability}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-primary">${coach.price}</div>
                    <div className="text-xs text-gray-400">per hour</div>
                  </div>
                  <button className="px-4 py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105">
                    Book Lesson
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Group Programs */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '400ms' }}>Group Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {groupPrograms.map((program, index) => (
              <div 
                key={program.id}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 card-hover animate-slide-up"
                style={{ animationDelay: `${500 + (index * 100)}ms` }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{program.title}</h3>
                <p className="text-gray-400 mb-4">{program.description}</p>

                <div className="space-y-2 text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{program.duration} • {program.frequency}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Max {program.maxStudents} students</span>
                  </div>
                  <div className="flex items-center text-primary">
                    <Award className="w-4 h-4 mr-2" />
                    <span>Starts {program.nextStart}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-primary">${program.price}</div>
                    <div className="text-xs text-gray-400">full program</div>
                  </div>
                  <button className="px-4 py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105">
                    Join Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Coaching;
