import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Calendar, User, BookOpen, Clock, MessageCircle } from 'lucide-react';

const Booking = () => {
  const [selectedVenue, setSelectedVenue] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    studentLevel: '',
    subjects: '',
    preferredTime: '',
    specialRequests: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const venues = [
    {
      name: 'Mtwapa Centre',
      coordinator: 'Md. Hanna',
      phone: '0750680423',
      whatsapp: '254750680423',
      location: 'Mtwapa, Kilifi County'
    },
    {
      name: 'Shanzu Centre',
      coordinator: 'Md. Norah',
      phone: '0718379933',
      whatsapp: '254718379933',
      location: 'Shanzu, Mombasa County'
    }
  ];

  const studentLevels = [
    'Primary School (Grade 1- Grade 6)',
    'Junior School (Grade 7- Grade 9)',
    'Senior School',
    '844 system (Form 2-4)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    const selectedVenueData = venues.find(v => v.name === selectedVenue);
    if (!selectedVenueData) return '';

    const message = `Hello ${selectedVenueData.coordinator},

I would like to book a holiday tuition session at ${selectedVenue}.

*Student Details:*
- Student Name: ${formData.studentName}
- Parent/Guardian: ${formData.parentName}
- Phone: ${formData.phone}
- Academic Level: ${formData.studentLevel}
- Subjects Interested: ${formData.subjects}
- Preferred Time: ${formData.preferredTime}

${formData.specialRequests ? `*Special Requests:*\n${formData.specialRequests}` : ''}

Thank you for your assistance.`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedVenueData = venues.find(v => v.name === selectedVenue);
    if (!selectedVenueData) return;

    const whatsappUrl = `https://wa.me/${selectedVenueData.whatsapp}?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = selectedVenue && formData.studentName && formData.parentName && formData.phone && formData.studentLevel;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Book Your Session</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Reserve your spot for the upcoming holiday tuition program
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Session Booking Form</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll connect you with your preferred venue coordinator via WhatsApp
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Venue Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    Select Venue *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {venues.map((venue) => (
                      <div
                        key={venue.name}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          selectedVenue === venue.name
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedVenue(venue.name)}
                      >
                        <div className="flex items-center mb-2">
                          <input
                            type="radio"
                            id={venue.name}
                            name="venue"
                            value={venue.name}
                            checked={selectedVenue === venue.name}
                            onChange={() => setSelectedVenue(venue.name)}
                            className="mr-3"
                          />
                          <label htmlFor={venue.name} className="font-semibold text-gray-900 cursor-pointer">
                            {venue.name}
                          </label>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{venue.location}</p>
                        <p className="text-sm text-gray-600">
                          <Phone className="h-3 w-3 inline mr-1" />
                          {venue.coordinator} - {venue.phone}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-1" />
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter student's full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-1" />
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Enter parent/guardian name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="0712345678"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <BookOpen className="h-4 w-4 inline mr-1" />
                      Student Level *
                    </label>
                    <select
                      name="studentLevel"
                      value={formData.studentLevel}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      required
                    >
                      <option value="">Select level</option>
                      {studentLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <BookOpen className="h-4 w-4 inline mr-1" />
                      Subjects of Interest
                    </label>
                    <input
                      type="text"
                      name="subjects"
                      value={formData.subjects}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="e.g., Mathematics, Sciences, English"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Select preferred time</option>
                      <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                      <option value="10:30 AM - 12:30 PM">10:30 AM - 12:30 PM</option>
                      <option value="Full Session (8:00 AM - 12:30 PM)">Full Session (8:00 AM - 12:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Questions
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Any special requirements, questions about the program, or additional information..."
                  />
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageCircle className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-purple-900">Next Steps</h3>
                  </div>
                  <p className="text-purple-800 text-sm">
                    After clicking "Book Session", you'll be redirected to WhatsApp to complete your booking 
                    with the venue coordinator. They will provide additional details about schedules, fees, 
                    and confirm your registration.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isFormValid
                      ? 'bg-green-500 hover:bg-green-600 text-white hover:scale-[1.02]'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <MessageCircle className="h-5 w-5 inline mr-2" />
                  Book Session via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Sessions run Monday to Friday during school holidays, starting the first Monday after closure
              </p>
            </div>

            <div className="text-center">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
              <p className="text-gray-600">
                Get immediate confirmation and detailed information via WhatsApp from venue coordinators
              </p>
            </div>

            <div className="text-center">
              <BookOpen className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exam Registration</h3>
              <p className="text-gray-600">
                We also assist with national exam registration - ask your coordinator for details
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;