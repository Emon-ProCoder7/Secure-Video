import React from 'react';

const FloatingCoins: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Bitcoin Coin */}
      <div className="absolute top-20 left-10 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
          <span className="text-white font-bold text-lg">₿</span>
        </div>
      </div>
      
      {/* Ethereum Coin */}
      <div className="absolute top-40 right-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
          <span className="text-white font-bold text-sm">Ξ</span>
        </div>
      </div>
      
      {/* Generic Coin 1 */}
      <div className="absolute bottom-32 left-1/4 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg transform rotate-45">
          <span className="text-white font-bold text-xs">$</span>
        </div>
      </div>
      
      {/* Generic Coin 2 */}
      <div className="absolute top-60 left-3/4 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>
        <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center shadow-lg transform -rotate-45">
          <span className="text-white font-bold text-xs">◊</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingCoins;