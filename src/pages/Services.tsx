import React, { useEffect } from 'react';
import { BookOpen, Users, Clock, Award, CheckCircle, Beaker } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const targetLevels = [
    {
      title: 'Primary School',
      description: 'Foundation building for young learners',
      subjects: ['Mathematics', 'English', 'Kiswahili', 'Science', 'Social Studies'],
      icon: '🎒'
    },
    {
      title: 'Junior School',
      description: 'Strengthening core concepts',
      subjects: ['Mathematics', 'English', 'Kiswahili', 'Science', 'Geography', 'History'],
      icon: '📚'
    },
    {
      title: 'High School',
      description: 'Advanced learning and exam preparation',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Kiswahili'],
      icon: '🎓'
    },
    {
      title: 'Senior School',
      description: 'Comprehensive exam preparation',
      subjects: ['All KCSE Subjects', 'Practical Sciences', 'Language Arts', 'Humanities'],
      icon: '🏆'
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'All Subjects Covered',
      description: 'Comprehensive coverage of curriculum subjects for all levels'
    },
    {
      icon: Beaker,
      title: 'Practical Sessions',
      description: 'Hands-on laboratory sessions for science subjects'
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Personalized attention with optimal teacher-student ratios'
    },
    {
      icon: Award,
      title: 'Exam Preparation',
      description: 'Specialized coaching for national examinations'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Comprehensive holiday tuition services designed to help students excel at every academic level
            </p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">
              Quality education services tailored to meet diverse learning needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Target Students</h2>
            <p className="text-xl text-gray-600">
              We cater to students across all academic levels with specialized programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetLevels.map((level, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{level.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.title}</h3>
                    <p className="text-gray-600 mb-4">{level.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.subjects.map((subject, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Schedule */}
            <div className="bg-gradient-to-br from-purple-50 to-green-50 p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Class Schedule</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Days:</span>
                  <span className="text-gray-600">Monday to Friday</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Time:</span>
                  <span className="text-gray-600">8:00 AM - 12:30 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Duration:</span>
                  <span className="text-gray-600">Entire Holiday Period</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Start Date:</span>
                  <span className="text-gray-600">First Monday After School Closure</span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Pricing</h3>
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Pocket Friendly</div>
                  <p className="text-gray-600 mb-4">
                    Quality education at affordable rates for all families
                  </p>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Competitive rates for all levels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Flexible payment options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    No hidden charges
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Value for money guarantee
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Contact us for detailed pricing information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">
              Extra support services to ensure comprehensive student development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">National Exam Registration</h3>
              <p className="text-gray-600">
                We assist students with registration for KCPE, KCSE, and other national examinations
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Study Groups</h3>
              <p className="text-gray-600">
                Organized study groups for collaborative learning and peer support
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Assessment</h3>
              <p className="text-gray-600">
                Regular assessments and progress reports to track student improvement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;