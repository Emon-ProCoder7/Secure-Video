import React, { useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  videoId: string;
  videoTitle: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ videoId, videoTitle }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const shareUrl = `${window.location.origin}/shared/${videoId}`;
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Share link has been copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually",
        variant: "destructive",
      });
    }
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:text-white"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-cyan-400/30">
        <DialogHeader>
          <DialogTitle className="text-white">Share Video: {videoTitle}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-gray-300 text-sm">
            Share this link with others. They will need the access code to view the video.
          </p>
          <div className="flex space-x-2">
            <Input
              value={shareUrl}
              readOnly
              className="bg-gray-800 border-gray-600 text-white"
            />
            <Button
              onClick={handleCopy}
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareButton;