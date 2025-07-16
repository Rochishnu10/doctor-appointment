import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Award, Heart, ArrowRight, Star, CheckCircle } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Happy Patients', value: '10,000+' },
    { icon: Award, label: 'Expert Doctors', value: '50+' },
    { icon: Clock, label: 'Years Experience', value: '15+' },
    { icon: Heart, label: 'Success Rate', value: '98%' },
  ];

  const features = [
    {
      title: 'Expert Medical Care',
      description: 'Our team of experienced doctors provides comprehensive healthcare services.',
      icon: Award,
    },
    {
      title: 'Easy Appointment Booking',
      description: 'Book appointments online with our user-friendly scheduling system.',
      icon: Clock,
    },
    {
      title: 'Patient-Centered Approach',
      description: 'We prioritize your comfort and well-being in every interaction.',
      icon: Heart,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Excellent service and professional staff. Dr. Smith was very thorough and caring.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      text: 'The online booking system is so convenient. Highly recommend this clinic!',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      text: 'Outstanding medical care. The doctors really listen and provide great treatment.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Health is Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
                Priority
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience world-class healthcare with our team of expert doctors. 
              Book your appointment today and take the first step towards better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/doctors"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute bottom-20 left-10 hidden lg:block animate-float">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white">
            <CheckCircle className="h-8 w-8 mb-2 text-green-400" />
            <p className="text-sm font-medium">24/7 Emergency Care</p>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-10 hidden lg:block animate-float-delayed">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white">
            <Star className="h-8 w-8 mb-2 text-yellow-400" />
            <p className="text-sm font-medium">5-Star Rated</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MediCare+
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive healthcare services with a focus on quality, convenience, and patient satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Read testimonials from our satisfied patients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait. Book an appointment with our expert doctors today and get the care you deserve.
          </p>
          <Link
            to="/doctors"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl space-x-2"
          >
            <span>Book Your Appointment</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;