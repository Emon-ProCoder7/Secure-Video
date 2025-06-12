import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, Shield, Zap } from 'lucide-react';

interface PasswordDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (password: string) => void;
  error?: string;
}

const PasswordDialog: React.FC<PasswordDialogProps> = ({ isOpen, onClose, onSubmit, error }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-gray-900 to-black border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20 max-w-md">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-lg" />
        
        <DialogHeader className="relative z-10">
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center space-x-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span>Access Required</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative z-10 space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <span className="text-2xl">🔐</span>
            </div>
            <p className="text-gray-300 text-sm">
              Enter the access code to unlock premium content
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter access code..."
                className="bg-gray-800/50 border-cyan-400/30 text-white placeholder-gray-400 pr-12 h-12 text-center font-mono tracking-wider"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            {error && (
              <div className="text-red-400 text-sm text-center bg-red-900/20 border border-red-400/30 rounded-lg p-2">
                {error}
              </div>
            )}
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Unlock Content</span>
            </Button>
          </form>
          
          <div className="text-center text-xs text-gray-500">
            🚀 Powered by PopMax Security
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordDialog;