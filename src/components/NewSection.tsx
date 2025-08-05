import React from 'react';

const NewSection = () => {
  return (
    <section className="py-12 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left relative z-30">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-7">
              Helped Scale Businesses For <span style={{color: '#1540e7'}}>Top 500 Creators & Coaches in India</span>
            </h2>
            <p className="text-xl text-white">
              Get Access to 1:1 Mentorship from Him!
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex flex-col items-center lg:items-end">
              {/* Blue blur effects behind image */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 -right-8 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 left-1/3 w-36 h-36 bg-blue-400/35 rounded-full blur-3xl"></div>
              
              {/* Background GIF - positioned behind the main image */}
              <div className="absolute inset-0 flex justify-center items-start z-0">
                <img 
                  src="https://cdn.testbook.com/1753950151304-PhotoCollage-ezgif.com-video-to-gif-converter%20%281%29.gif/1753950153.gif" 
                  alt="Pranay Background Animation" 
                  className="w-full max-w-xl h-auto rounded-lg opacity-20"
                />
              </div>
              
              <img 
                src="https://cdn.testbook.com/1753957191177-Pranay.png/1753957192.png" 
                alt="Pranay" 
                className="w-full max-w-xl h-auto rounded-lg relative z-30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Black gradient overlay covering the whole section from below */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
    </section>
  );
};

export default NewSection;