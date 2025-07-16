import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, Star, Calendar } from 'lucide-react';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15 years',
      rating: 4.9,
      reviews: 127,
      location: 'New York',
      availableToday: true,
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=500',
      qualifications: ['MD from Harvard', 'Board Certified Cardiologist'],
      specializations: ['Heart Surgery', 'Cardiovascular Disease', 'Preventive Cardiology'],
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Dermatology',
      experience: '12 years',
      rating: 4.8,
      reviews: 89,
      location: 'Los Angeles',
      availableToday: false,
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=500',
      qualifications: ['MD from Stanford', 'Dermatology Residency'],
      specializations: ['Skin Cancer', 'Cosmetic Dermatology', 'Pediatric Dermatology'],
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialty: 'Pediatrics',
      experience: '10 years',
      rating: 4.9,
      reviews: 156,
      location: 'Chicago',
      availableToday: true,
      image: 'https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=500',
      qualifications: ['MD from Johns Hopkins', 'Pediatric Residency'],
      specializations: ['Child Development', 'Immunizations', 'Adolescent Medicine'],
    },
    {
      id: 4,
      name: 'Dr. Robert Wilson',
      specialty: 'Orthopedics',
      experience: '18 years',
      rating: 4.7,
      reviews: 203,
      location: 'Miami',
      availableToday: true,
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=500',
      qualifications: ['MD from Yale', 'Orthopedic Surgery Fellowship'],
      specializations: ['Joint Replacement', 'Sports Medicine', 'Spine Surgery'],
    },
    {
      id: 5,
      name: 'Dr. Lisa Anderson',
      specialty: 'Neurology',
      experience: '14 years',
      rating: 4.8,
      reviews: 98,
      location: 'Boston',
      availableToday: false,
      image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=500',
      qualifications: ['MD from Columbia', 'Neurology Fellowship'],
      specializations: ['Epilepsy', 'Stroke Treatment', 'Headache Disorders'],
    },
    {
      id: 6,
      name: 'Dr. James Rodriguez',
      specialty: 'Oncology',
      experience: '16 years',
      rating: 4.9,
      reviews: 145,
      location: 'Houston',
      availableToday: true,
      image: 'https://images.pexels.com/photos/5452252/pexels-photo-5452252.jpeg?auto=compress&cs=tinysrgb&w=500',
      qualifications: ['MD from UCSF', 'Oncology Fellowship'],
      specializations: ['Cancer Treatment', 'Chemotherapy', 'Radiation Therapy'],
    },
  ];

  const specialties = ['All', 'Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics', 'Neurology', 'Oncology'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === '' || selectedSpecialty === 'All' || 
                            doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Doctor
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with our experienced medical professionals and book your appointment today.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search doctors or specialties..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>
                  {specialty === 'All' ? 'All Specialties' : specialty}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {doctor.availableToday && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Available Today
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
                      <span className="text-sm text-gray-500">({doctor.reviews})</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="font-medium">{doctor.specialty}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-3" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-3" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {doctor.specializations.slice(0, 2).map((spec, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                      {doctor.specializations.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{doctor.specializations.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    to={`/book/${doctor.id}`}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 group"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-4">No doctors found matching your criteria.</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSpecialty('');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Doctors;