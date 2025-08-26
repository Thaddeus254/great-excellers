import React, { useEffect } from 'react';
import { MapPin, Phone, Clock, Car, Users } from 'lucide-react';

const Venues = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const venues = [
    {
      name: 'Mtwapa Centre',
      location: 'Mtwapa, Kilifi County',
      coordinator: 'Md. Hanna',
      phone: '0750680423',
      whatsapp: 'https://wa.me/254750680423',
      features: [
        'Modern classrooms',
        'Science laboratory',
        'Computer lab access',
        'Library facilities'
      ],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg'
    },
    {
      name: 'Shanzu Centre',
      location: 'Shanzu, Mombasa County',
      coordinator: 'Md. Norah',
      phone: '0718379933',
      whatsapp: 'https://wa.me/254718379933',
      features: [
        'Digital learning aids',
        'Practical lab sessions',
        'Resource center',
        'Easy accessibility'
      ],
      image: 'https://images.pexels.com/photos/5427645/pexels-photo-5427645.jpeg'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Venues</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Strategically located learning centers providing convenient access to quality education
            </p>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {venues.map((venue, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{venue.name}</h3>
                  </div>
                </div>

                <div className="p-8">
                  {/* Location */}
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{venue.location}</span>
                  </div>

                  {/* Coordinator */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Venue Coordinator</h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-700 font-medium">{venue.coordinator}</p>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          <span>{venue.phone}</span>
                        </div>
                      </div>
                      <a
                        href={venue.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Facilities & Features</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {venue.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Session Button */}
                  <a
                    href={venue.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
                  >
                    Book Session at {venue.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">General Information</h2>
            <p className="text-xl text-gray-600">
              Important details about our venues and operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Operating Hours</h3>
              <p className="text-gray-600 mb-2">Monday to Friday</p>
              <p className="text-lg font-medium text-blue-600">8:00 AM - 12:30 PM</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Class Sizes</h3>
              <p className="text-gray-600 mb-2">Optimal learning environment</p>
              <p className="text-lg font-medium text-emerald-600">Small Class Sizes</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Car className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600 mb-2">Easy to reach locations</p>
              <p className="text-lg font-medium text-amber-600">Parking Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing a Venue?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Contact our general coordinator for guidance on the best venue for your needs
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Mr. Masime - General Coordinator</h3>
            <p className="text-emerald-100 mb-4">Phone: 0726540892</p>
            <a
              href="https://wa.me/254726540892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Venues;