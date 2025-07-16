import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, ArrowLeft, CheckCircle } from 'lucide-react';

const BookAppointment = () => {
  const { doctorId } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    notes: '',
  });
  const [isBooked, setIsBooked] = useState(false);

  const doctors = {
    1: { name: 'Dr. Sarah Johnson', specialty: 'Cardiology' },
    2: { name: 'Dr. Michael Chen', specialty: 'Dermatology' },
    3: { name: 'Dr. Emily Davis', specialty: 'Pediatrics' },
    4: { name: 'Dr. Robert Wilson', specialty: 'Orthopedics' },
    5: { name: 'Dr. Lisa Anderson', specialty: 'Neurology' },
    6: { name: 'Dr. James Rodriguez', specialty: 'Oncology' },
  };

  const doctor = doctors[doctorId as keyof typeof doctors];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking process
    setTimeout(() => {
      setIsBooked(true);
    }, 1000);
  };

  if (!doctor) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor not found</h2>
          <Link to="/doctors" className="text-blue-600 hover:text-blue-700">
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  if (isBooked) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Booked!</h2>
          <p className="text-gray-600 mb-6">
            Your appointment with {doctor.name} has been successfully scheduled for {selectedDate} at {selectedTime}.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            You will receive a confirmation email shortly with all the details.
          </p>
          <div className="space-y-3">
            <Link
              to="/doctors"
              className="block w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Book Another Appointment
            </Link>
            <Link
              to="/"
              className="block w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/doctors"
            className="inline-flex items-center text-white hover:text-blue-200 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Doctors
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Book Appointment
          </h1>
          <p className="text-xl text-blue-100">
            Schedule your appointment with {doctor.name} - {doctor.specialty}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <User className="h-6 w-6 mr-3 text-blue-600" />
              Personal Information
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Visit *
                </label>
                <select
                  name="reason"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  value={formData.reason}
                  onChange={handleInputChange}
                >
                  <option value="">Select a reason</option>
                  <option value="consultation">General Consultation</option>
                  <option value="followup">Follow-up Visit</option>
                  <option value="checkup">Routine Check-up</option>
                  <option value="emergency">Emergency</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Any additional information or symptoms..."
                  value={formData.notes}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Date and Time Selection */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-blue-600" />
              Select Date & Time
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Available Time Slots *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && selectedTime && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Appointment Summary</h3>
                  <p className="text-blue-700 text-sm">
                    <strong>Doctor:</strong> {doctor.name}<br />
                    <strong>Date:</strong> {new Date(selectedDate).toLocaleDateString()}<br />
                    <strong>Time:</strong> {selectedTime}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.reason}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;