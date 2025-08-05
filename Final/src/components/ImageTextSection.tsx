import React from 'react';
import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const ImageTextSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div className="relative">
            {/* Blue blur effects behind left content */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-12 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 left-1/4 w-36 h-36 bg-blue-400/35 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-center md:text-left block">Special Sessions with <span style={{color: '#1540e7'}}>Mahatma Ji</span> <span style={{color: '#1540e7'}}>Technical</span></span>
            </h2>
          </div>
          
          {/* Right side - Image with floating elements */}
          <div className="mt-4 flex justify-center relative">
            <div className="relative w-full max-w-48 sm:max-w-56 md:max-w-64 lg:max-w-72 xl:max-w-80">
              {!isVideoPlaying ? (
                /* Video Thumbnail with Play Button */
                <div 
                  onClick={handlePlayVideo}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl"
                >
                  <img 
                    src="https://blogmedia.testbook.com/blog/wp-content/uploads/2025/07/artboard-3@4x-d626810b.webp" 
                    alt="Special Session Video Thumbnail" 
                    className="w-full h-auto aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: 'center top' }}
                  />
                  
                  {/* Enhanced play button overlay with scroll-based animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Multiple animated rings */}
                      <div 
                        className="absolute inset-0 bg-blue-600/40 rounded-full animate-ping"
                        style={{
                          transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.2})`,
                          animationDelay: '0s'
                        }}
                      ></div>
                      <div 
                        className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping"
                        style={{
                          transform: `scale(${1.2 + Math.sin(scrollY * 0.015) * 0.3})`,
                          animationDelay: '0.5s'
                        }}
                      ></div>
                      <div 
                        className="absolute inset-0 bg-blue-400/20 rounded-full animate-ping"
                        style={{
                          transform: `scale(${1.4 + Math.sin(scrollY * 0.02) * 0.4})`,
                          animationDelay: '1s'
                        }}
                      ></div>
                      
                      {/* Main play button with scroll-based rotation */}
                      <div 
                        className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-500 group-hover:scale-125 border-2 sm:border-3 md:border-4 border-white/20"
                        style={{
                          transform: `rotate(${scrollY * 0.1}deg) scale(${1 + Math.sin(scrollY * 0.005) * 0.1})`
                        }}
                      >
                        {/* Glowing inner circle */}
                        <div className="absolute inset-2 bg-white/10 rounded-full animate-pulse"></div>
                        
                        {/* Play arrow with enhanced animation */}
                        <div 
                          className="ml-1 text-white transform group-hover:scale-150 transition-transform duration-500 relative z-10"
                          style={{
                            transform: `scale(${1 + Math.sin(scrollY * 0.008) * 0.2})`
                          }}
                        >
                          <Play size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="currentColor" />
                        </div>
                        
                        {/* Sparkle effects */}
                        <div 
                          className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-ping"
                          style={{
                            animationDelay: `${Math.sin(scrollY * 0.01)}s`
                          }}
                        ></div>
                        <div 
                          className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-ping"
                          style={{
                            animationDelay: `${Math.sin(scrollY * 0.012) + 0.5}s`
                          }}
                        ></div>
                        <div 
                          className="absolute top-0 left-0 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-ping"
                          style={{
                            animationDelay: `${Math.sin(scrollY * 0.015) + 1}s`
                          }}
                        ></div>
                      </div>
                      
                      {/* Floating text with scroll animation */}
                      <div 
                        className="absolute -bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs sm:text-sm animate-bounce"
                        style={{
                          transform: `translateX(-50%) translateY(${Math.sin(scrollY * 0.01) * 5}px)`
                        }}
                      >
                        ▶ PLAY NOW
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements around the video */}
                  <div 
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 bg-red-500 rounded-full animate-bounce opacity-80"
                    style={{
                      animationDelay: `${Math.sin(scrollY * 0.008)}s`,
                      transform: `translateY(${Math.sin(scrollY * 0.01 + 1) * 10}px)`
                    }}
                  >
                    <div className="w-full h-full bg-white rounded-full animate-ping"></div>
                  </div>
                  
                  <div 
                    className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-bounce opacity-80"
                    style={{
                      animationDelay: `${Math.sin(scrollY * 0.012) + 0.5}s`,
                      transform: `translateY(${Math.sin(scrollY * 0.015 + 2) * 8}px)`
                    }}
                  >
                    <div className="w-full h-full bg-white rounded-full animate-ping"></div>
                  </div>
                  
                  <div 
                    className="absolute top-1/2 left-1 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-bounce opacity-80"
                    style={{
                      animationDelay: `${Math.sin(scrollY * 0.01) + 1}s`,
                      transform: `translateY(${Math.sin(scrollY * 0.02 + 3) * 12}px)`
                    }}
                  >
                    <div className="w-full h-full bg-white rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Enhanced video label with scroll effect */}
                  <div 
                    className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg border border-white/20"
                    style={{
                      transform: `translateX(-50%) scale(${1 + Math.sin(scrollY * 0.005) * 0.05})`
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>Watch Special Session</span>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Inline Video Player */
                <div className="relative w-full rounded-2xl overflow-hidden bg-black">
                  <video 
                    controls
                    autoPlay
                    className="w-full h-auto aspect-[3/4] rounded-2xl"
                    poster="https://blogmedia.testbook.com/blog/wp-content/uploads/2025/07/artboard-3@4x-d626810b.webp"
                  >
                    <source src="https://cdn.testbook.com/1753972789939-MJT_Reel_Final.mp4/1753972792.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Close button to go back to thumbnail */}
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10 text-xs sm:text-sm"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;