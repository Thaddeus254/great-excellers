import React, { useEffect } from 'react';
import { Target, Eye, Heart, Users, BookOpen, Award } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Great Excellers Centre</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Dedicated to nurturing academic excellence during school holidays since our inception
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                Great Excellers Centre Mombasa is a premier holiday tuition institution dedicated to 
                providing quality education during school holidays. We specialize in offering comprehensive 
                academic support to students from primary to senior school levels.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our center operates exclusively during school holidays, following the Ministry of Education 
                calendar. We resume operations on the first Monday after schools close and continue throughout 
                the entire holiday period, ensuring students maintain their academic momentum.
              </p>
              <p className="text-lg text-gray-600">
                With strategically located venues in Mtwapa and Shanzu, we provide accessible and convenient 
                learning environments that cater to students across the coastal region.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                alt="Students learning"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6 mx-auto">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To provide exceptional holiday tuition that empowers students to excel academically, 
                bridging learning gaps and reinforcing key concepts through innovative teaching methods 
                and personalized attention.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be the leading holiday tuition center in the coastal region, recognized for excellence 
                in education, student success, and transformative learning experiences that prepare 
                students for academic excellence.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-6 mx-auto">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Excellence in education</li>
                <li>• Integrity and transparency</li>
                <li>• Student-centered approach</li>
                <li>• Affordable quality education</li>
                <li>• Continuous improvement</li>
                <li>• Community partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Special</h2>
            <p className="text-xl text-gray-600">
              Our unique approach to holiday tuition sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-purple-50 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600">
                Qualified and experienced teachers who understand student needs and learning patterns
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-50 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                All subjects covered including practical sessions tailored to each academic level
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-50 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-yellow-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Track record of helping students improve their grades and academic performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Commitment to Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Academic Excellence</h3>
              <p className="text-yellow-100">
                We are committed to maintaining the highest standards of education, ensuring every 
                student receives the support they need to excel in their studies.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Accessible Education</h3>
              <p className="text-yellow-100">
                Our pocket-friendly charges ensure that quality education is accessible to all families, 
                because every child deserves the opportunity to excel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;