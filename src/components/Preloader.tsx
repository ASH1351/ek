import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(65), 500);
    const timer2 = setTimeout(() => setProgress(100), 1200);
    const timer3 = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-[#111110] flex flex-col items-center justify-center transition-all duration-700 ease-out ${
        isFading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background radial gold glow */}
      <div className="absolute w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#B8860B]/10 via-[#F5D77A]/15 to-transparent blur-3xl pointer-events-none animate-pulse-subtle" />

      {/* Center Monogram & Brand Container */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Logo Image with Golden Aura */}
        <div className="relative mb-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-gold-glow border border-[#D4AF37]/40 relative bg-black flex items-center justify-center p-1 group">
            <img
              src="/eou-logo.png"
              alt="Ek Omkar Uniq EOU Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(245,215,122,0.4)]"
            />
            {/* Shimmer sweep line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5D77A]/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          </div>
        </div>

        {/* Brand Name Typography */}
        <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-bold text-white mb-1">
          <span className="gold-text">EK OMKAR</span>
        </h1>
        <div className="flex items-center space-x-3 text-xs sm:text-sm tracking-[0.45em] text-[#F5D77A] font-light uppercase my-2">
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span>U N I Q</span>
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        <p className="font-serif italic text-sm text-[#A8A18F] mt-2 tracking-wider">
          Timeless Luxury. For You & Your Home.
        </p>

        {/* Golden Animated Progress Bar */}
        <div className="w-48 sm:w-64 h-[2px] bg-[#1A1A17] mt-8 rounded-full overflow-hidden border border-[#D4AF37]/20 relative">
          <div
            className="h-full bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37] transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={() => {
            setIsFading(true);
            setTimeout(() => onComplete && onComplete(), 400);
          }}
          className="mt-6 text-[10px] tracking-[0.25em] uppercase text-[#A8A18F] hover:text-[#F5D77A] transition-colors duration-300 cursor-pointer"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
};
