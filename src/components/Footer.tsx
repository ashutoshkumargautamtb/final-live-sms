import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img 
              src="/logo-animation2.gif" 
              alt="Coaches and Creators Club Logo" 
              className="h-16 w-auto"
            />
            <p className="text-gray-400 text-sm">
              Join The #1 Community For Experts, Coaches & Creators
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
            <a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Refund Policy</a>
            <a href="/contact-us" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="bg-black h-20"></div>
    </footer>
  );
};

export default Footer;