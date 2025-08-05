import React from 'react';
import { Users, Trophy, Star } from 'lucide-react';

const CommunityBenefits = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Exclusive Community Access',
      description: 'Connect with like-minded creators and coaches in our private community'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Proven Success Framework',
      description: 'Access our battle-tested strategies that have helped thousands succeed'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Mentorship & Support',
      description: 'Get guidance from industry experts and successful entrepreneurs'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-800/40 backdrop-blur-sm border rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300" style={{borderColor: '#1540e7'}}>
          <div className="text-blue-500 mb-4">
            {benefit.icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            {benefit.title}
          </h3>
          <p className="text-white">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommunityBenefits;