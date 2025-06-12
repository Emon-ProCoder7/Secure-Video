import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Play, ExternalLink } from 'lucide-react';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    isUnlocked: boolean;
  };
  onUnlock: (id: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onUnlock }) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardContent className="p-0 relative">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Lock/Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            {video.isUnlocked ? (
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            ) : (
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform animate-pulse">
                <Lock className="w-8 h-8 text-white" />
              </div>
            )}
          </div>
          
          {/* Crypto Badge */}
          <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-bold text-white">
            ₿ PREMIUM
          </div>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800">
          <h3 className="font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {video.title}
          </h3>
          
          <button
            onClick={() => onUnlock(video.id)}
            className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            {video.isUnlocked ? (
              <>
                <ExternalLink className="w-4 h-4" />
                <span>Watch Now</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Unlock Video</span>
              </>
            )}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;