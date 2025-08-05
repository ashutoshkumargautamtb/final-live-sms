import React from 'react';
import { ArrowLeft, Mail, Globe, MapPin, Shield, CheckCircle } from 'lucide-react';

const RefundPolicy = () => {
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
            Refund Policy
          </h1>
          <p className="text-gray-300 mt-2">Last Updated: 1 August 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mb-6">
            <Shield className="text-white" size={32} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Free Community Access
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            At coachesteachers.club, we are currently offering access to a free group with no paid product, subscription, or service offered through this website.
          </p>
        </div>

        {/* Policy Details */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            As a result:
          </h3>
          
          <div className="space-y-6">
            {/* No Payments */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mt-1">
                <CheckCircle className="text-white" size={20} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">There are no payments involved</h4>
                <p className="text-gray-300">Our community access is completely free with no charges or fees.</p>
              </div>
            </div>

            {/* No Refunds */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                <CheckCircle className="text-white" size={20} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">There is no product or service eligible for a refund</h4>
                <p className="text-gray-300">Since no payments are required, there are no refunds to process.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-700/50 rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Have Questions or Concerns?
          </h3>
          <p className="text-lg text-gray-300 text-center mb-8">
            If you believe there has been an issue or have further questions, feel free to contact us at:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-blue-800/30 rounded-2xl p-6 text-center hover:bg-blue-800/40 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-4 mx-auto">
                <Mail className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
              <a 
                href="mailto:performance.marketing@classplus.co"
                className="text-blue-400 hover:text-blue-300 transition-colors break-all"
              >
                performance.marketing@classplus.co
              </a>
            </div>

            {/* Website */}
            <div className="bg-purple-800/30 rounded-2xl p-6 text-center hover:bg-purple-800/40 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-xl mb-4 mx-auto">
                <Globe className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Website</h4>
              <a 
                href="https://coachesteachers.club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                coachesteachers.club
              </a>
            </div>

            {/* Office */}
            <div className="bg-green-800/30 rounded-2xl p-6 text-center hover:bg-green-800/40 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl mb-4 mx-auto">
                <MapPin className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Office</h4>
              <p className="text-green-400">D8, Noida Office</p>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 backdrop-blur-sm border border-orange-700/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Thank You!
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Thank you for being a part of our learning community
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">👑</span>
                <span>Join Our Community</span>
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

export default RefundPolicy;