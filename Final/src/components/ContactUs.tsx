import React from 'react';
import { ArrowLeft, Mail, Globe, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={goBack}
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Contact Us
          </h1>
          <p className="text-gray-300 mt-2">We're here to help you succeed</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
            <MessageCircle className="text-white" size={32} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            If you have any questions, suggestions, or concerns, we're here to help!
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-6 hover:border-blue-600/70 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-4 mx-auto">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-2">Email Us</h3>
            <p className="text-gray-300 text-center text-sm mb-4">Send us your queries</p>
            <a 
              href="mailto:performance.marketing@classplus.co"
              className="block text-blue-400 hover:text-blue-300 transition-colors text-center font-medium break-all"
            >
              performance.marketing@classplus.co
            </a>
          </div>

          {/* Website Card */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-700/50 rounded-2xl p-6 hover:border-purple-600/70 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-xl mb-4 mx-auto">
              <Globe className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-2">Visit Website</h3>
            <p className="text-gray-300 text-center text-sm mb-4">Explore our platform</p>
            <a 
              href="https://coachesteachers.club"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-purple-400 hover:text-purple-300 transition-colors text-center font-medium"
            >
              coachesteachers.club
            </a>
          </div>

          {/* Office Card */}
          <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-700/50 rounded-2xl p-6 hover:border-green-600/70 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl mb-4 mx-auto">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white text-center mb-2">Office Address</h3>
            <p className="text-gray-300 text-center text-sm mb-4">Visit us in person</p>
            <p className="text-green-400 text-center font-medium">
              D8, Noida Office
            </p>
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 backdrop-blur-sm border border-orange-700/30 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mb-6 mx-auto">
            <Clock className="text-white" size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Response Time</h3>
          <p className="text-lg text-gray-300 mb-2">
            We typically respond within <span className="text-orange-400 font-semibold">2–3 business days</span>
          </p>
          <p className="text-gray-400">
            Thank you for connecting with us!
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-gray-300 mb-6">
              Don't wait! Join thousands of successful coaches and creators today.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">👑</span>
                <span>Register & Join Now</span>
                <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold">FREE</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Coaches and Teachers Club. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;