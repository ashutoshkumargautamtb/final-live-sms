import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '10,000+',
      label: 'Active Members'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative">
          {/* Blue blur effects */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-8 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 left-1/3 w-36 h-36 bg-blue-400/35 rounded-full blur-3xl"></div>
          
          {/* Left side - Heading */}
          <div className="text-center lg:text-left relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Don't Join <span style={{color: '#1540e7'}}>If</span>
            </h2>
          </div>
          
          {/* Right side - Card */}
          <div className="flex justify-center lg:justify-end relative z-10 mt-8">
            <div className="space-y-4 max-w-6xl w-full">
              <div className="bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-800/40 backdrop-blur-sm border rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300" style={{borderColor: '#1540e7'}}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://ik.imagekit.io/85zjhg33fu/Stop-sign-icon-notifications-that-do-not-do-anything-on-transparent-background-PNG.png?updatedAt=1753101036195" 
                      alt="Stop sign" 
                      className="w-12 h-12"
                    />
                  </div>
                  <p className="text-lg text-white">If you don't want to grow business online</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-800/40 backdrop-blur-sm border rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300" style={{borderColor: '#1540e7'}}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://ik.imagekit.io/85zjhg33fu/Stop-sign-icon-notifications-that-do-not-do-anything-on-transparent-background-PNG.png?updatedAt=1753101036195" 
                      alt="Stop sign" 
                      className="w-12 h-12"
                    />
                  </div>
                  <p className="text-lg text-white">If you are not looking to grow revenue from webinar and courses</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-800/40 backdrop-blur-sm border rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300" style={{borderColor: '#1540e7'}}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://ik.imagekit.io/85zjhg33fu/Stop-sign-icon-notifications-that-do-not-do-anything-on-transparent-background-PNG.png?updatedAt=1753101036195" 
                      alt="Stop sign" 
                      className="w-12 h-12"
                    />
                  </div>
                  <p className="text-lg text-white">If you are not serious about owning actions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;