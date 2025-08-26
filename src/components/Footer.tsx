import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">GREAT EXCELLERS</h3>
                <p className="text-sm text-gray-300">CENTRE MOMBASA</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Providing quality holiday tuition for students across all levels. 
              We operate during school holidays to help students excel in their academics.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Clock className="h-4 w-4" />
              <span>Monday - Friday: 8:00 AM - 12:30 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/venues" className="text-gray-300 hover:text-blue-400 transition-colors">Venues</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-blue-400 transition-colors">Book Session</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-sm font-medium">Mr. Masime (General)</p>
                  <p className="text-gray-300">0726540892</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-sm font-medium">Venues</p>
                  <p className="text-gray-300">Mtwapa & Shanzu</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Great Excellers Centre Mombasa. All rights reserved.</p>
            <p className="text-sm mt-2">Empowering students to excel during holidays</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;