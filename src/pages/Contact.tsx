import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Mail, Users } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contacts = [
    {
      title: 'General Inquiries',
      name: 'Mr. Masime',
      role: 'General Coordinator',
      phone: '0726540892',
      whatsapp: 'https://wa.me/254726540892',
      description: 'For general information, course inquiries, and guidance',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Mtwapa Centre',
      name: 'Md. Hanna',
      role: 'Venue Coordinator',
      phone: '0750680423',
      whatsapp: 'https://wa.me/254750680423',
      description: 'Bookings and inquiries for Mtwapa venue',
      icon: MapPin,
      color: 'emerald'
    },
    {
      title: 'Shanzu Centre',
      name: 'Md. Norah',
      role: 'Venue Coordinator',
      phone: '0718379933',
      whatsapp: 'https://wa.me/254718379933',
      description: 'Bookings and inquiries for Shanzu venue',
      icon: MapPin,
      color: 'amber'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team for inquiries, bookings, and support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Choose the appropriate contact based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r from-${contact.color}-500 to-${contact.color}-600 p-6`}>
                  <div className="flex items-center space-x-3">
                    <contact.icon className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{contact.title}</h3>
                      <p className="text-white/80">{contact.role}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{contact.name}</h4>
                    <p className="text-gray-600">{contact.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700 font-medium">{contact.phone}</span>
                    </div>

                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-colors"
                    >
                      <MessageCircle className="h-5 w-5 inline mr-2" />
                      Contact via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operating Hours</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">8:00 AM - 12:30 PM</p>
            </div>

            <div className="text-center">
              <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Venues</h3>
              <p className="text-gray-600">Mtwapa Centre</p>
              <p className="text-gray-600">Shanzu Centre</p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Target Students</h3>
              <p className="text-gray-600">Primary to Senior</p>
              <p className="text-gray-600">School Levels</p>
            </div>

            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">Within 30 minutes</p>
              <p className="text-gray-600">during operating hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                When do holiday sessions start?
              </h3>
              <p className="text-gray-600">
                We begin operations on the first Monday after schools close for holidays, following 
                the Ministry of Education calendar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I register my child?
              </h3>
              <p className="text-gray-600">
                Use our booking form or contact the venue coordinators directly via WhatsApp. 
                They will guide you through the registration process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you assist with national exam registration?
              </h3>
              <p className="text-gray-600">
                Yes, we provide assistance with KCPE, KCSE, and other national exam registrations. 
                Contact our coordinators for more details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are your fees?
              </h3>
              <p className="text-gray-600">
                Our fees are pocket-friendly and vary by level and subjects. Contact our coordinators 
                for detailed pricing information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Contact us today to secure your child's spot in our upcoming holiday program
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/booking"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/254726540892"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;