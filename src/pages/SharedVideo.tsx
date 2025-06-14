import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Lock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import CryptoBackground from '@/components/CryptoBackground';
import FloatingCoins from '@/components/FloatingCoins';
import PopMaxLogo from '@/components/PopMaxLogo';
import { supabase } from '@/lib/supabase';

const SharedVideo: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [video, setVideo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  const CORRECT_PASSWORD = 'p0pm@X#6677';
  
  useEffect(() => {
    const loadVideo = async () => {
      if (!videoId) return;
      
      try {
        const { data, error } = await supabase
          .from('videos')
          .select('*')
          .eq('id', videoId)
          .single();
        
        if (error) throw error;
        setVideo(data);
      } catch (error) {
        console.error('Error loading video:', error);
        // Fallback to mock data
        const mockVideos: Record<string, any> = {
          '1': {
            id: '1',
            title: 'Crypto Trading Masterclass',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop'
          },
          '2': {
            id: '2', 
            title: 'Bitcoin Investment Strategy',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&h=300&fit=crop'
          }
        };
        if (mockVideos[videoId]) {
          setVideo(mockVideos[videoId]);
        }
      } finally {
        setLoading(false);
      }
    };
    
    loadVideo();
  }, [videoId]);
  
  const handlePasswordSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Access granted!",
        description: "You can now watch the video",
      });
    } else {
      toast({
        title: "Access denied",
        description: "Incorrect access code",
        variant: "destructive",
      });
    }
  };
  
  const getEmbedUrl = (url: string) => {
    const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
    if (isYouTube) {
      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
      return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
    }
    return url;
  };
  
  const isYouTube = video?.url && (video.url.includes('youtube.com') || video.url.includes('youtu.be'));
  const isGoogleDrive = video?.url && video.url.includes('drive.google.com');
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  if (!video) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 flex items-center justify-center">
        <Card className="bg-gray-800 border-red-500">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Video Not Found</h2>
            <p className="text-gray-300">The requested video could not be found.</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 relative overflow-hidden">
      <CryptoBackground />
      <FloatingCoins />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <PopMaxLogo />
        </div>
        
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto">
            <Card className="bg-gray-800/90 border-cyan-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-white flex items-center justify-center space-x-2">
                  <Lock className="w-6 h-6 text-cyan-400" />
                  <span>Access Required</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Enter the access code to watch this video
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Input
                    type="password"
                    placeholder="Enter access code"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                  />
                  <Button
                    onClick={handlePasswordSubmit}
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
                  >
                    Access Video
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800/90 border-cyan-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold text-white mb-4 text-center">{video.title}</h1>
                
                {isYouTube ? (
                  <div className="aspect-video">
                    <iframe
                      src={getEmbedUrl(video.url)}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                ) : isGoogleDrive ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-6">
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
                  <div className="flex flex-col items-center justify-center py-12 space-y-6">
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
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default SharedVideo;