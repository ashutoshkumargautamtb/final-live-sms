import React from 'react';
import { useState, useEffect } from 'react';
import { Users, TrendingUp, Calendar, Building } from 'lucide-react';

const FeatureCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      title: "Access to Premium Offline Events",
      icon: Users
    },
    {
      title: "Growth BootCamp Every Week!",
      icon: TrendingUp
    },
    {
      title: "Consultancy with Top Coaches",
      icon: Calendar
    },
    {
      title: "Complimentary Access to Newsletter",
      icon: Building
    },
    {
      title: "Win Awards and Recognition",
      icon: Users
    },
    {
      title: "Network that helps your grow",
      icon: Building
    }
  ];

  // Auto-play functionality for mobile carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative max-w-4xl">
      {/* Blue blur effects */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/60 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-8 w-40 h-40 bg-blue-600/50 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 left-1/3 w-36 h-36 bg-blue-400/55 rounded-full blur-3xl"></div>
      
      {/* Desktop: Grid layout */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-800/40 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 rounded-3xl p-6 relative overflow-hidden aspect-square flex flex-col justify-between transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-50 z-10">
            <div className="flex justify-end">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <feature.icon className="text-white" size={20} />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Carousel layout */}
      <div className="md:hidden">
        {/* Carousel container */}
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-800/40 rounded-3xl p-4 relative overflow-hidden aspect-square flex flex-col justify-between transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-50 z-10 mx-auto max-w-xs h-64 w-64">
                  <div className="flex justify-center mb-1">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <feature.icon className="text-white" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <h3 className="text-xl font-bold text-white leading-tight text-center w-full">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel navigation dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-500 w-6' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;