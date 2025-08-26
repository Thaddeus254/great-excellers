import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, BookOpen, Users, Award, MapPin, Phone, Clock } from 'lucide-react';
import PhotoCarousel from '../components/PhotoCarousel';
import CountdownTimer from '../components/CountdownTimer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const features = [
    {
      icon: BookOpen,
      title: 'All Subjects Covered',
      description: 'Comprehensive coverage including practical sessions for all academic levels'
    },
    {
      icon: Users,
      title: 'Expert Teachers',
      description: 'Qualified instructors dedicated to student excellence and academic success'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of helping students excel in their examinations'
    },
    {
      icon: MapPin,
      title: 'Convenient Locations',
      description: 'Multiple venues in Mtwapa and Shanzu for easy accessibility'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-emerald-600 flex items-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            GREAT EXCELLERS
            <span className="block text-3xl md:text-4xl font-light text-blue-200">
              CENTRE MOMBASA
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Excellence in Holiday Tuition for Primary, Junior & Senior School Students
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link
              to="/booking"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Your Session
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
              <h3 className="font-semibold mb-1">Schedule</h3>
              <p className="text-sm text-blue-100">Mon-Fri, 8AM-12:30PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
              <h3 className="font-semibold mb-1">Locations</h3>
              <p className="text-sm text-blue-100">Mtwapa & Shanzu</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
              <h3 className="font-semibold mb-1">Subjects</h3>
              <p className="text-sm text-blue-100">All Subjects + Practicals</p>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white hover:text-emerald-400 transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Great Excellers?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide quality holiday tuition that helps students excel in their academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Learning Environment</h2>
            <p className="text-xl text-gray-600">
              State-of-the-art facilities designed for optimal learning
            </p>
          </div>
          <PhotoCarousel />
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountdownTimer />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Excel This Holiday?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Join hundreds of students who have improved their grades with our expert tuition services
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/booking"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Your Session Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;