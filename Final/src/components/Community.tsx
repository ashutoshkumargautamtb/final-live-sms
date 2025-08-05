import React from 'react';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span style={{color: '#1540e7'}}>Community</span>
            </h2>
          </div>
          
          <div className="flex justify-center lg:justify-end relative">
            {/* Blue blur effects behind image */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -right-8 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 left-1/3 w-36 h-36 bg-blue-400/35 rounded-full blur-3xl"></div>
            
            <img 
              src="https://ik.imagekit.io/85zjhg33fu/Artboard%203@4x.webp?updatedAt=1752942057405" 
              alt="Join Our Community" 
              className="w-full max-w-lg h-auto rounded-lg relative z-10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;