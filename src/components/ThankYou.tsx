import React from 'react';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  const joinWhatsAppGroup = () => {
    window.open('https://whatsapp.com/channel/0029Vb6J3YdGJP8HdxKR0x0G', '_blank');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#1540e7]/30 via-[#1540e7]/20 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#1540e7]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1540e7]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-12 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thanks for <span className="golden-glitter">Registering!</span>
          </h1>

          {/* Welcome Message */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Welcome to the Coaches and Creators Club community! You're now part of India's fastest growing creators & coaches club.
          </p>

          {/* WhatsApp Channel Info */}
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Join Our Exclusive WhatsApp Channel
            </h3>
            <p className="text-gray-300 mb-6">
              Get exclusive updates, networking opportunities, and connect with like-minded creators and coaches.
            </p>
            
            {/* CTA Button */}
            <button
              onClick={joinWhatsAppGroup}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join Group Now
            </button>
          </div>

          {/* Additional Info */}
          <div className="space-y-4 text-gray-400">
            <p className="text-sm">
              You'll receive further instructions and community guidelines via email.
            </p>
            <p className="text-sm">
              Questions? Contact us at support@coachesandcreatorsclub.com
            </p>
          </div>

          {/* Back to Home Link */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <button
              onClick={() => window.location.href = '/'}
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;