import React from 'react';
import PopMaxLogo from './PopMaxLogo';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white py-6 px-4 shadow-2xl border-b border-cyan-400/30">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
      
      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <PopMaxLogo className="transform hover:scale-110 transition-transform duration-300" />
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Gifting Tribe
            </h1>
            <p className="text-sm text-gray-300 font-mono">Web3 • Crypto • Community</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-black font-bold text-sm animate-pulse">
            🚀 LIVE
          </div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />
    </header>
  );
};

export default Header;