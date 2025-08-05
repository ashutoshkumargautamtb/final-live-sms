import React, { useState, useEffect } from 'react';

const FixedBottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bottom bar right after header section
      const scrollPosition = window.scrollY;
      const headerHeight = 80; // Approximate header height
      
      setIsVisible(scrollPosition >= headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg border-t border-blue-400/30 safe-area-inset-bottom">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-2 sm:px-4">
        {/* Left side - Logo (hidden on mobile) */}
        <div className="hidden md:block py-1 flex-shrink-0">
          <img 
            src="/logo-animation2.gif" 
            alt="Coaches and Creators Club Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>
        
        {/* Content - responsive layout */}
        <div className="flex items-center flex-1 md:flex-none px-1 sm:px-2 md:px-0 min-w-0">
          <div className="text-white font-medium text-xs sm:text-sm md:text-base leading-tight truncate">
            Launchpad to Your Biggest Chapter Yet!
          </div>
        </div>
        
        {/* Right side - CTA button (optimized for mobile) */}
        <div className="py-2 flex-shrink-0">
          <button 
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 font-semibold px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full hover:bg-gray-100 hover:shadow-md transition-all duration-200 text-xs sm:text-sm md:text-base shadow-sm whitespace-nowrap"
          >
            <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2">
              <span className="text-yellow-500 text-xs sm:text-sm md:text-sm">👑</span>
              <span className="hidden sm:inline">Become A Member</span>
              <span className="sm:hidden">Join</span>
              <span className="bg-yellow-400 text-black text-xs px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded-full font-bold">FREE</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedBottomBar;