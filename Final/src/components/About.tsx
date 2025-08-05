import React from 'react';
import { CheckCircle, TrendingUp, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-4 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              One <span className="golden-glitter">Golden Pass</span> for Everything !
            </h2>
            <p className="text-lg text-gray-300 mb-8">
            <span className="text-lg text-white mb-8">
              Access to Top Coaches & Creators in Country & Become a part of Creators Bootcamp
            </span>
          </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            {/* Blue blur effects behind image */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 -right-8 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 left-1/3 w-36 h-36 bg-blue-400/35 rounded-full blur-3xl"></div>
              
            <img 
              src="https://blogmedia.testbook.com/blog/wp-content/uploads/2025/07/id-card-in-mobile-5f6a4c26.png" 
              alt="ID Card in Mobile" 
              className="w-full max-w-lg h-auto rounded-lg relative z-10 preload-image"
              loading="lazy"
              decoding="async"
            />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
    </section>
  );
};

export default About;