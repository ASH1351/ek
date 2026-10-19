import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const message = encodeURIComponent(
    'Namaste Ek Omkar Uniq Concierge, I would like to enquire about your fine jewellery & home collections.'
  );

  return (
    <div
      className="fixed bottom-20 lg:bottom-8 right-5 z-40 flex items-center group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on Desktop */}
      <div
        className={`hidden sm:flex items-center space-x-2 mr-3 px-3.5 py-2 rounded-xl bg-black/90 border border-[#D4AF37]/50 shadow-gold-glow text-white text-xs tracking-wider transition-all duration-300 pointer-events-none backdrop-blur-md ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
        <span className="font-serif font-medium">Chat with Royal Concierge</span>
      </div>

      {/* Floating Emerald Button with Gold Ring Glow */}
      <a
        href={`https://wa.me/919820012345?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.4)] border border-[#D4AF37]/60 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer relative"
        aria-label="WhatsApp Concierge"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent" />
        {/* Subtle ping ring */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366] opacity-40 animate-ping pointer-events-none" />
      </a>
    </div>
  );
};
