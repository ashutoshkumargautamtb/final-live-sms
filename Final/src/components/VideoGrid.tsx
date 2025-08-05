import React from 'react';
import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const VideoGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const videos = [
    {
      title: "Creator Summit 2024",
      thumbnail: "https://img.youtube.com/vi/gKSQz2RY3nI/maxresdefault.jpg",
      duration: "12:45",
      videoUrl: "https://youtu.be/gKSQz2RY3nI"
    },
    {
      title: "Coach Networking Event",
      thumbnail: "https://blogmedia.testbook.com/blog/wp-content/uploads/2025/07/thumbnailjpg-cafe9551.jpg",
      duration: "8:32",
      videoUrl: "https://youtu.be/3glnuuaxFrY"
    }
  ];

  // Auto-play functionality for mobile carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, videos.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative">
      {/* Blue blur effects */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-12 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 left-1/4 w-36 h-36 bg-blue-400/35 rounded-full blur-3xl"></div>
      
      {/* Desktop: Grid layout */}
      <div className="hidden md:grid grid-cols-2 gap-6 relative z-10 max-w-2xl mx-auto">
        {videos.map((video, index) => (
          <a
            key={index}
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group w-full max-w-64 mx-auto block"
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-[9/16] bg-gray-900">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer" style={{backgroundColor: '#1540e7'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0f2db8'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1540e7'}>
                  <Play className="text-white ml-1" size={20} fill="currentColor" />
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Mobile: Carousel layout */}
      <div className="md:hidden relative z-10">
        {/* Carousel container */}
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {videos.map((video, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group w-full max-w-64 mx-auto block"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-[9/16] bg-gray-900">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer" style={{backgroundColor: '#1540e7'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0f2db8'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1540e7'}>
                        <Play className="text-white ml-1" size={20} fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel navigation dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {videos.map((_, index) => (
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

export default VideoGrid;