import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  videoUrl, 
  title = "Video Player",
  className = ""
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayClick = () => {
    setShowPlayButton(false);
    // For Jumpshare, we'll open in a new tab since iframe controls are limited
    window.open(videoUrl, '_blank');
  };

  const handleReload = () => {
    setHasError(false);
    setIsLoading(true);
    setShowPlayButton(true);
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  // Convert Jumpshare share URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes('jumpshare.com/s/')) {
      const id = url.split('/s/')[1];
      return `https://jumpshare.com/embed/${id}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className={`relative bg-black rounded-xl overflow-hidden group ${className}`}>
      {/* Video Container */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
        {/* Jumpshare iframe */}
        <iframe
          ref={iframeRef}
          src={embedUrl}
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          onLoad={() => {
            setIsLoading(false);
            setHasError(false);
          }}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          className="rounded-lg"
          title={title}
        />

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white text-sm">Loading video...</p>
            </div>
          </div>
        )}

        {/* Error Overlay */}
        {hasError && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20">
            <div className="text-center space-y-4">
              <div className="text-red-400 text-4xl mb-4">⚠️</div>
              <p className="text-white text-lg font-semibold">Unable to load video</p>
              <p className="text-gray-300 text-sm">Click below to watch in a new tab</p>
              <button
                onClick={() => window.open(videoUrl, '_blank')}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 mx-auto"
              >
                <Play size={16} />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        )}

        {/* Play Button Overlay */}
        {showPlayButton && !isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/20">
            <button
              onClick={handlePlayClick}
              className="w-20 h-20 bg-blue-600/90 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
            >
              <Play className="text-white ml-1" size={32} fill="currentColor" />
            </button>
          </div>
        )}

        {/* Fallback: Click anywhere to play */}
        {!isLoading && !hasError && (
          <div 
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={handlePlayClick}
          />
        )}
      </div>

      {/* Video Title */}
      {title && (
        <div className="absolute top-4 left-4 right-4 z-20">
          <h3 className="text-white font-semibold text-lg drop-shadow-lg">
            {title}
          </h3>
        </div>
      )}

      {/* Alternative: Direct link button */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          onClick={() => window.open(videoUrl, '_blank')}
          className="bg-black/70 hover:bg-black/90 text-white px-3 py-1 rounded text-sm transition-colors duration-200"
        >
          Open in New Tab
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;