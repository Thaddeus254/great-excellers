import React, { useEffect } from 'react';
import { Star, Quote, Users, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: 'Mrs. Sarah Mwangi',
      role: 'Parent - Mtwapa',
      student: 'Kevin (Form 3)',
      rating: 5,
      image: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg',
      text: 'Great Excellers transformed my son\'s academic performance. Kevin\'s grades improved significantly after just one holiday session. The teachers are dedicated and the practical sessions really helped him understand chemistry concepts better.',
      subject: 'Chemistry & Mathematics'
    },
    {
      name: 'Mr. James Otieno',
      role: 'Parent - Shanzu',
      student: 'Grace (Class 8)',
      rating: 5,
      image: 'https://images.pexels.com/photos/5220074/pexels-photo-5220074.jpeg',
      text: 'My daughter Grace was struggling with mathematics, but after attending the holiday program at Shanzu center, she gained confidence and improved her problem-solving skills. The teachers are patient and very supportive.',
      subject: 'Mathematics & Science'
    },
    {
      name: 'Mrs. Fatuma Hassan',
      role: 'Parent - Mtwapa',
      student: 'Ali (Form 4)',
      rating: 5,
      image: 'https://images.pexels.com/photos/8867481/pexels-photo-8867481.jpeg',
      text: 'Ali was preparing for his KCSE exams and the comprehensive revision program at Great Excellers was exactly what he needed. The mock exams and personalized attention helped him achieve excellent results.',
      subject: 'KCSE Preparation'
    },
    {
      name: 'Mr. David Kimani',
      role: 'Parent - Shanzu',
      student: 'Mary & John (Twins - Class 7)',
      rating: 5,
      image: 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg',
      text: 'Both my twins attended the holiday program and I was impressed by the individual attention they received. The pocket-friendly fees made it possible for both children to benefit from quality education.',
      subject: 'All Subjects'
    },
    {
      name: 'Mrs. Aisha Mohammed',
      role: 'Parent - Mtwapa',
      student: 'Omar (Form 2)',
      rating: 5,
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
      text: 'Omar was weak in English and Kiswahili, but the language teachers at Great Excellers helped him improve dramatically. The small class sizes ensure every student gets the attention they need.',
      subject: 'Languages'
    },
    {
      name: 'Mr. Peter Wanjiku',
      role: 'Parent - Shanzu',
      student: 'Jane (Class 6)',
      rating: 5,
      image: 'https://images.pexels.com/photos/6624993/pexels-photo-6624993.jpeg',
      text: 'Jane always looked forward to the holiday sessions. The teachers make learning fun and engaging. Her overall academic performance has improved and she\'s more confident in class now.',
      subject: 'Primary Curriculum'
    }
  ];

  const stats = [
    { icon: Users, label: 'Happy Families', value: '500+' },
    { icon: TrendingUp, label: 'Grade Improvement', value: '85%' },
    { icon: Star, label: 'Satisfaction Rate', value: '98%' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Parent Testimonials</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hear from parents whose children have excelled with our holiday tuition programs
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from families who trust Great Excellers Centre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>

                {/* Subject */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {testimonial.subject}
                  </span>
                </div>

                {/* Parent Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-emerald-600 font-medium">{testimonial.student}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Academic achievements that make us proud
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Outstanding Results</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Grade Improvement</h4>
                    <p className="text-gray-600">85% of students show significant grade improvement</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">KCSE Success</h4>
                    <p className="text-gray-600">Many students achieve their target grades in national exams</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Confidence Building</h4>
                    <p className="text-gray-600">Students report increased confidence and motivation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                alt="Students celebrating success"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Celebrating Excellence</h4>
                <p className="text-blue-100">Every student success is our achievement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Give your child the opportunity to excel with our proven holiday tuition programs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/booking"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Book a Session
            </a>
            <a
              href="https://wa.me/254726540892"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;