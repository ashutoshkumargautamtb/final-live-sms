import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black relative overflow-hidden pt-4">
      <div className="absolute inset-0 bg-gradient-to-l from-[#1540e7]/30 via-[#1540e7]/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative z-10">
          <div className="flex items-center">
            <img 
              src="/logo-animation2.gif" 
              alt="Coaches and Creators Club Logo" 
              className="h-40 w-auto"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
              <a href="#stories" className="text-gray-300 hover:text-white transition-colors duration-200">Stories</a>
              <a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a>
              <a href="#review" className="text-gray-300 hover:text-white transition-colors duration-200">Our Review</a>
            </nav>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900 rounded-lg mt-2 relative z-10">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
              <a href="#stories" className="block px-3 py-2 text-gray-300 hover:text-white">Stories</a>
              <a href="#blog" className="block px-3 py-2 text-gray-300 hover:text-white">Blog</a>
              <a href="#review" className="block px-3 py-2 text-gray-300 hover:text-white">Our Review</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;