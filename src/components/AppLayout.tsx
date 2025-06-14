import React, { useState } from 'react';
import Header from './Header';
import VideoCard from './VideoCard';
import PasswordDialog from './PasswordDialog';
import VideoViewer from './VideoViewer';
import AddVideoDialog from './AddVideoDialog';
import FloatingCoins from './FloatingCoins';
import CryptoBackground from './CryptoBackground';
import { Button } from '@/components/ui/button';
import { Plus, Sparkles } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  isUnlocked: boolean;
}

const AppLayout: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: '1',
      title: 'Bitcoin Basics: Web3 Revolution',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400',
      isUnlocked: false
    },
    {
      id: '2', 
      title: 'PopMax Strategy Guide',
      url: 'https://drive.google.com/file/d/example',
      thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400',
      isUnlocked: false
    }
  ]);
  
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showVideoViewer, setShowVideoViewer] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isAddingContent, setIsAddingContent] = useState(false);
  
  const PASSWORD = 'p0pm@X#6677';
  
  const handleUnlock = (videoId: string) => {
    const video = videos.find(v => v.id === videoId);
    if (video?.isUnlocked) {
      setSelectedVideo(videoId);
      setShowVideoViewer(true);
    } else {
      setCurrentVideoId(videoId);
      setIsAddingContent(false);
      setShowPasswordDialog(true);
    }
  };
  
  const handleAddContentClick = () => {
    setIsAddingContent(true);
    setCurrentVideoId(null);
    setShowPasswordDialog(true);
  };
  
  const handlePasswordSubmit = (password: string) => {
    if (password === PASSWORD) {
      if (isAddingContent) {
        setShowAddDialog(true);
      } else if (currentVideoId) {
        setVideos(prev => prev.map(v => 
          v.id === currentVideoId ? { ...v, isUnlocked: true } : v
        ));
        setSelectedVideo(currentVideoId);
        setShowVideoViewer(true);
      }
      setShowPasswordDialog(false);
      setPasswordError('');
      setCurrentVideoId(null);
      setIsAddingContent(false);
    } else {
      setPasswordError('Invalid access code. Please try again.');
    }
  };
  
  const handleAddVideo = (videoData: { title: string; url: string; thumbnail: string }) => {
    const newVideo: Video = {
      id: Date.now().toString(),
      ...videoData,
      isUnlocked: false
    };
    setVideos(prev => [...prev, newVideo]);
    setShowAddDialog(false);
  };
  
  const selectedVideoData = videos.find(v => v.id === selectedVideo);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white relative overflow-hidden">
      <CryptoBackground />
      <FloatingCoins />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              🚀 Premium Crypto Content
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Unlock exclusive Web3, Bitcoin, and PopMax content with your access code
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-400 font-mono">Secured by blockchain technology</span>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <Button
              onClick={handleAddContentClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg shadow-cyan-400/20"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Content</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map(video => (
              <VideoCard
                key={video.id}
                video={video}
                onUnlock={handleUnlock}
              />
            ))}
          </div>
        </main>
      </div>
      
      <PasswordDialog
        isOpen={showPasswordDialog}
        onClose={() => {
          setShowPasswordDialog(false);
          setPasswordError('');
          setCurrentVideoId(null);
          setIsAddingContent(false);
        }}
        onSubmit={handlePasswordSubmit}
        error={passwordError}
      />
      
      <AddVideoDialog
        isOpen={showAddDialog}
        onClose={() => setShowAddDialog(false)}
        onSubmit={handleAddVideo}
      />
      
      {selectedVideoData && (
        <VideoViewer
          isOpen={showVideoViewer}
          onClose={() => {
            setShowVideoViewer(false);
            setSelectedVideo(null);
          }}
          video={selectedVideoData}
        />
      )}
    </div>
  );
};

export default AppLayout;