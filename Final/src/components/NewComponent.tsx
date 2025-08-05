import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, DollarSign, BookOpen, Briefcase, TrendingUp, Mic, Star, Edit, MessageCircle, User, Target } from 'lucide-react';

const NewComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const categories = [
    // Hub-and-spoke circular arrangement (12 o'clock position going clockwise)
    { name: 'Entrepreneurs', icon: Briefcase, color: 'bg-blue-500', position: 'md:top-[8%] md:left-[60%] md:transform md:-translate-x-1/2 top-[8%] left-[50%] transform -translate-x-1/2' },
    { name: 'Teachers', icon: BookOpen, color: 'bg-blue-500', position: 'md:top-[12%] md:right-[10%] top-[18%] right-[5%]' },
    { name: 'Coaches & Trainers', icon: Users, color: 'bg-orange-500', position: 'md:top-[25%] md:right-[-8%] top-[28%] right-[5%]' },
    { name: 'Health Experts', icon: Heart, color: 'bg-blue-500', position: 'md:top-1/2 md:right-[-3%] md:transform md:-translate-y-1/2 top-[38%] right-[5%]' },
    { name: 'Tarot Readers', icon: Star, color: 'bg-orange-500', position: 'md:bottom-[25%] md:right-[-2%] bottom-[48%] right-[5%]' },
    { name: 'Wealth Experts', icon: DollarSign, color: 'bg-blue-500', position: 'md:bottom-[12%] md:right-[10%] bottom-[58%] right-[5%]' },
    { name: 'Working Professionals', icon: Briefcase, color: 'bg-blue-500', position: 'md:bottom-[8%] md:left-[60%] md:transform md:-translate-x-1/2 bottom-[68%] left-[50%] transform -translate-x-1/2' },
    { name: 'Career Experts', icon: Briefcase, color: 'bg-orange-500', position: 'md:bottom-[12%] md:left-[30%] bottom-[58%] left-[5%]' },
    { name: 'Stock Market Experts', icon: TrendingUp, color: 'bg-orange-500', position: 'md:bottom-[25%] md:left-[18%] bottom-[48%] left-[5%]' },
    { name: 'Relationship Experts', icon: Heart, color: 'bg-blue-500', position: 'md:top-1/2 md:left-[15%] md:transform md:-translate-y-1/2 top-[38%] left-[5%]' },
    { name: 'Speakers', icon: Mic, color: 'bg-orange-500', position: 'md:top-[25%] md:left-[18%] top-[28%] left-[5%]' },
    { name: 'Bloggers', icon: Edit, color: 'bg-blue-500', position: 'md:top-[12%] md:left-[30%] top-[18%] left-[5%]' }
  ];

  // Auto-play functionality for mobile carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, categories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative">
          {/* Blue blur effects */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-8 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 left-1/3 w-36 h-36 bg-blue-400/35 rounded-full blur-3xl"></div>
          
          {/* Left side - Logo and Heading */}
          <div className="text-center relative z-10">
            <div className="mb-8 flex justify-center lg:justify-start">
              <img 
                src="/logo-animation2.gif" 
                alt="Coaches and Creators Club Logo" 
                className="h-32 md:h-40 w-auto"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
              Who is this Club <span style={{color: '#1540e7'}}>For?</span>
            </h2>
          </div>
          
          {/* Right side - Cards */}
          <div className="flex justify-center lg:justify-end relative z-10 mt-8">
            {/* Desktop: Grid layout */}
            <div className="hidden md:grid grid-cols-2 gap-4 max-w-2xl w-full">
              {categories.slice(0, 6).map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-800/40 backdrop-blur-sm border rounded-xl p-4 hover:transform hover:scale-105 transition-all duration-300" style={{borderColor: '#1540e7'}}>
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="text-white" size={16} />
                        </div>
                      </div>
                      <p className="text-base text-white font-medium">{category.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile: Carousel */}
            <div className="md:hidden w-full max-w-sm">
              <div className="relative overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -300, scale: 0.8 }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="w-full px-2"
                  >
                    {(() => {
                      const category = categories[currentSlide];
                      const IconComponent = category.icon;
                      return (
                        <div className="bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-800/40 backdrop-blur-sm border rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300" style={{borderColor: '#1540e7'}}>
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                                <IconComponent className="text-white" size={20} />
                              </div>
                            </div>
                            <p className="text-lg text-white font-medium">{category.name}</p>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel navigation dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {categories.map((_, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default NewComponent;
