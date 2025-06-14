import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, Video, Link, Image } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface AddVideoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const AddVideoDialog: React.FC<AddVideoDialogProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title && url && thumbnail) {
      setIsLoading(true);
      try {
        const { error } = await supabase
          .from('videos')
          .insert([{ title, url, thumbnail }]);
        
        if (error) throw error;
        
        toast({
          title: "Success!",
          description: "Video added successfully",
        });
        
        setTitle('');
        setUrl('');
        setThumbnail('');
        onSubmit();
        onClose();
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to add video",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
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
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold transition-all duration-200 transform hover:scale-105"
                disabled={isLoading}
              >
                {isLoading ? 'Adding...' : 'Add Content'}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddVideoDialog;