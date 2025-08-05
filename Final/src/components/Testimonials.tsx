import React from 'react';
import VideoPlayer from './VideoPlayer';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real moments, Real connections, <span style={{color: '#1540e7'}}>Real impact</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Here's a glimpse of what went down at our offline events
          </p>
        </div>
        
        {/* Single Embedded Video */}
        <div className="flex justify-center mb-12">
          <div className="relative max-w-2xl w-full">
            {/* Blue blur effects */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -right-8 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 left-1/3 w-36 h-36 bg-blue-400/35 rounded-full blur-3xl"></div>
            
            {/* Video Player */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
              <video 
                controls
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                poster="https://ik.imagekit.io/85zjhg33fu/coaches.png?updatedAt=1753098599993"
              >
                <source src="https://cdn.testbook.com/1753793284102-Events%20by%20Teachers%20and%20Coaches%20Club%20%281%29.mp4/1753793287.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg" 
            style={{backgroundColor: '#1540e7'}} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0f2db8'} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1540e7'}
          >
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">👑</span>
              <span>Register & Join Now</span>
              <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold">FREE</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;