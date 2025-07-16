import React from 'react';
import { Award, Users, Clock, Heart, Target, Shield, Stethoscope } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Patients Served', value: '50,000+' },
    { icon: Award, label: 'Expert Doctors', value: '100+' },
    { icon: Clock, label: 'Years of Service', value: '25+' },
    { icon: Heart, label: 'Success Rate', value: '99%' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and understanding, ensuring comfort throughout their healthcare journey.',
    },
    {
      icon: Shield,
      title: 'Medical Excellence',
      description: 'Our commitment to the highest standards of medical practice ensures optimal outcomes for all our patients.',
    },
    {
      icon: Target,
      title: 'Patient-Centered',
      description: 'Every decision we make is guided by what is best for our patients and their individual needs.',
    },
    {
      icon: Stethoscope,
      title: 'Advanced Technology',
      description: 'We utilize cutting-edge medical technology and innovative treatments to provide the best possible care.',
    },
  ];

  const team = [
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Leading our medical team with 20+ years of experience in healthcare administration.',
    },
    {
      name: 'Dr. David Kim',
      role: 'Director of Surgery',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specialist in minimally invasive surgical procedures with expertise in robotic surgery.',
    },
    {
      name: 'Dr. Jennifer Walsh',
      role: 'Head of Emergency Medicine',
      image: 'https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Emergency medicine specialist ensuring 24/7 critical care services.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About MediCare+
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            For over 25 years, we've been dedicated to providing exceptional healthcare services 
            with compassion, innovation, and excellence at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide comprehensive, compassionate, and cutting-edge healthcare services 
                that improve the quality of life for our patients and communities. We are 
                committed to excellence in medical care, research, and education.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to be the leading healthcare provider, recognized for our 
                innovation, quality of care, and commitment to making healthcare accessible 
                to everyone.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3952245/pexels-photo-3952245.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical team"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of patients for quality healthcare.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <stat.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals leading our medical center.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern medical facility"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Facilities
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our modern medical center is equipped with the latest technology and 
                designed to provide a comfortable, healing environment for our patients.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Advanced diagnostic imaging equipment
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Modern surgical suites with robotic assistance
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Comfortable patient rooms and waiting areas
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  24/7 emergency and critical care units
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Excellence in Healthcare
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust us with their health and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/doctors"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Find a Doctor
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;