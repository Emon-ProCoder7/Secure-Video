import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, Video, Link, Image } from 'lucide-react';

interface AddVideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (video: { title: string; url: string; thumbnail: string }) => void;
}

const AddVideoDialog: React.FC<AddVideoDialogProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && url && thumbnail) {
      onSubmit({ title, url, thumbnail });
      setTitle('');
      setUrl('');
      setThumbnail('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20 max-w-md">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-lg" />
        
        <DialogHeader className="relative z-10">
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center space-x-2">
            <Plus className="w-6 h-6 text-cyan-400" />
            <span>Add Premium Content</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative z-10 space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Video className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-300 text-sm">
              Add new password-protected content to your collection
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label className="text-cyan-400 font-semibold flex items-center space-x-2">
                <Video className="w-4 h-4" />
                <span>Content Title</span>
              </Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter content title..."
                className="bg-gray-800/50 border-cyan-400/30 text-white placeholder-gray-400 h-12"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-cyan-400 font-semibold flex items-center space-x-2">
                <Link className="w-4 h-4" />
                <span>Video/Drive URL</span>
              </Label>
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://youtube.com/... or https://drive.google.com/..."
                className="bg-gray-800/50 border-cyan-400/30 text-white placeholder-gray-400 h-12"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-cyan-400 font-semibold flex items-center space-x-2">
                <Image className="w-4 h-4" />
                <span>Thumbnail URL</span>
              </Label>
              <Input
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                placeholder="https://example.com/thumbnail.jpg"
                className="bg-gray-800/50 border-cyan-400/30 text-white placeholder-gray-400 h-12"
                required
              />
            </div>
            
            <div className="flex space-x-3">
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold transition-all duration-200 transform hover:scale-105"
              >
                Add Content
              </Button>
            </div>
          </form>
          
          <div className="text-center text-xs text-gray-500">
            🔐 All content will be password protected
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddVideoDialog;