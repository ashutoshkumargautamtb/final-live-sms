import React from 'react';
import { Users, TrendingUp, Calendar, Building, Award, Network } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Access to Premium Offline Events",
      description: "Join exclusive networking events and workshops with industry leaders",
      icon: Users,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Growth BootCamp Every Week",
      description: "Weekly intensive sessions to accelerate your business growth",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Consultancy with Top Coaches",
      description: "One-on-one guidance from successful coaches and mentors",
      icon: Calendar,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Complimentary Access to Newsletter",
      description: "Stay updated with industry insights and exclusive content",
      icon: Building,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Win Awards and Recognition",
      description: "Get recognized for your achievements in the community",
      icon: Award,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Network that Helps You Grow",
      description: "Connect with like-minded professionals and expand your reach",
      icon: Network,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Join <span style={{color: '#1540e7'}}>Fastest</span> Growing Creators & Coach Club
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock exclusive benefits and accelerate your journey to success
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Split Layout with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Additional Content */}
          <div className="relative z-10">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-800/50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose Our <span style={{color: '#1540e7'}}>Community?</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Connect with 10,000+ active creators and coaches</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Access proven strategies that generate real results</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Get mentorship from industry-leading experts</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8">
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">👑</span>
                    <span>Register & Join Now</span>
                    <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold">FREE</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end relative z-10">
            <div className="relative">
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-bounce opacity-80" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce opacity-80" style={{animationDelay: '1s'}}></div>
              
              {/* Main image with enhanced styling */}
            <img 
              src="https://ik.imagekit.io/85zjhg33fu/SG.png?updatedAt=1752919034348" 
              alt="Features illustration" 
              className="w-full max-w-2xl h-auto relative z-10 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 preload-image"
              loading="lazy"
              decoding="async"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;