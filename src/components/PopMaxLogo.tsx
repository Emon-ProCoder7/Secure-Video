import React from 'react';

const PopMaxLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative z-10">
        <svg width="120" height="40" viewBox="0 0 120 40" className="drop-shadow-lg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="50%" stopColor="#f7931e" />
              <stop offset="100%" stopColor="#ffcd3c" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <text 
            x="10" 
            y="28" 
            fontSize="24" 
            fontWeight="bold" 
            fill="url(#logoGradient)" 
            filter="url(#glow)"
            className="font-mono"
          >
            PopMax
          </text>
          <circle cx="105" cy="20" r="8" fill="url(#logoGradient)" className="animate-pulse" />
          <text x="101" y="25" fontSize="12" fill="white" fontWeight="bold">₿</text>
        </svg>
      </div>
    </div>
  );
};

export default PopMaxLogo;