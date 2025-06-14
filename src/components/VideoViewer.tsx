import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoViewerProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    id: string;
    title: string;
    url: string;
    thumbnail: string;
  };
}

const VideoViewer: React.FC<VideoViewerProps> = ({ isOpen, onClose, video }) => {
  const isYouTube = video.url.includes('youtube.com') || video.url.includes('youtu.be');
  const isGoogleDrive = video.url.includes('drive.google.com');
  
  const getEmbedUrl = (url: string) => {
    if (isYouTube) {
      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
      return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
    }
    return url;
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20 p-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-lg" />
        
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-6 border-b border-cyan-400/30">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {video.title}
            </h2>
            <div className="flex items-center space-x-2 mt-2">
              <div className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-bold text-white">
                🔓 UNLOCKED
              </div>
              <div className="px-2 py-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full text-xs font-bold text-black">
                ₿ PREMIUM
              </div>
            </div>
          </div>
          
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex-1 p-6">
          {isYouTube ? (
            <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={getEmbedUrl(video.url)}
                className="w-full h-full"
                allowFullScreen
                title={video.title}
              />
            </div>
          ) : isGoogleDrive ? (
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <ExternalLink className="w-12 h-12 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Google Drive Content</h3>
                <p className="text-gray-300 mb-6">Click below to access your premium content</p>
                <Button
                  onClick={() => window.open(video.url, '_blank')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Open in Google Drive</span>
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <ExternalLink className="w-12 h-12 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">External Content</h3>
                <p className="text-gray-300 mb-6">Click below to access your premium content</p>
                <Button
                  onClick={() => window.open(video.url, '_blank')}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Open Link</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoViewer;