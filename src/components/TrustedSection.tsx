import React from 'react';

const TrustedSection = () => {
  return (
    <section className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blue blur effects */}
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-8 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 left-1/3 w-36 h-36 bg-blue-400/35 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-orange-500">Coaches and Educators</span> Across the World
          </h2>
        </div>
        
        <div className="flex justify-center relative z-10">
          <div className="relative">
            {/* Additional blue blur effects behind image */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -right-8 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 left-1/3 w-36 h-36 bg-blue-400/35 rounded-full blur-3xl"></div>
            
            <img 
              src="https://testbook.com/blog/wp-content/uploads/2025/07/map-1c79d59e.png" 
              alt="Trusted by Coaches and Educators Across the World" 
              className="w-full max-w-2xl h-auto rounded-lg relative z-10 shadow-2xl object-cover object-top"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;