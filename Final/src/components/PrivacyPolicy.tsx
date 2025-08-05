import React from 'react';
import { ArrowLeft, Mail, Globe, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-gray-300 mt-2">Last Updated: 1 August 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to coachesteachers.club. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              This website and platform are powered by Classplus, a trusted provider for education-focused digital infrastructure. By using our platform, you agree to the practices described in this Privacy Policy.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
              Information We Collect
            </h2>
            <div className="space-y-4 ml-11">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Personal Information:</h3>
                <p className="text-gray-300">Name, email address, phone number, location, and other information you voluntarily provide.</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Usage Data:</h3>
                <p className="text-gray-300">Pages visited, time spent, browser type, and device identifiers.</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Cookies & Tracking Technologies:</h3>
                <p className="text-gray-300">We use cookies to enhance your browsing experience and understand user behavior.</p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
              How We Use Your Information
            </h2>
            <div className="ml-11">
              <p className="text-gray-300 mb-3">Your data may be used to:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Deliver and improve our services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Communicate updates and offers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Personalize your experience</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Analyze user behavior for better content and services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Fulfill legal obligations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
              Sharing of Your Information
            </h2>
            <div className="ml-11">
              <p className="text-gray-300 mb-3">We do not sell your personal data. However, your information may be shared:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">With Classplus, which powers and maintains our platform infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">With third-party service providers who support our operations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">When required by law or to protect rights and safety</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
              Data Security
            </h2>
            <div className="ml-11">
              <p className="text-gray-300">
                We adopt standard security measures to protect your personal data. While we strive to use commercially acceptable means to protect your data, no method is 100% secure.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">5</span>
              Your Rights
            </h2>
            <div className="ml-11">
              <p className="text-gray-300 mb-3">You may have the right to:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Access or request deletion of your data</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Opt out of certain communications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Disable cookies via your browser settings</span>
                </li>
              </ul>
              <p className="text-gray-300">
                To exercise these rights, you can contact us at the details provided below.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">6</span>
              Children's Privacy
            </h2>
            <div className="ml-11">
              <p className="text-gray-300">
                Our services are not intended for children under the age of 13. We do not knowingly collect data from children without parental consent.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">7</span>
              Third-Party Links
            </h2>
            <div className="ml-11">
              <p className="text-gray-300">
                This site may contain links to third-party websites. We are not responsible for their content or privacy practices.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">8</span>
              Meta Platform (Facebook & Instagram) Use
            </h2>
            <div className="ml-11">
              <p className="text-gray-300">
                To facilitate login and advertising via Meta products (like Facebook and Instagram), we comply with Meta's data privacy requirements. Any data collected through Meta integrations will be handled as per this privacy policy and Meta's policies.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">9</span>
              Changes to This Privacy Policy
            </h2>
            <div className="ml-11">
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We encourage users to review this page periodically.
              </p>
            </div>
          </div>

          {/* Section 10 - Contact */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">10</span>
              Contact Us
            </h2>
            <div className="ml-11">
              <p className="text-gray-300 mb-4">
                If you have any questions or concerns regarding this policy, please contact us at:
              </p>
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <span className="text-white">performance.marketing@classplus.co</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="text-blue-400" size={20} />
                  <span className="text-white">coachesteachers.club</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-white">D8, Noida Office</span>
                </div>
              </div>
            </div>
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

export default PrivacyPolicy;