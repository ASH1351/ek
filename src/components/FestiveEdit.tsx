import React from 'react';
import { useCart } from '../context/CartContext';
import { Gift, Sparkles, ArrowRight, PhoneCall } from 'lucide-react';
import { GoldSwoosh } from '../utils/formatters';

export const FestiveEdit: React.FC = () => {
  const { navigateTo } = useCart();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 bg-[#161614] shadow-card-luxury p-8 sm:p-12 lg:p-16">
        {/* Background Ambient Imagery */}
        <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
          <img
            src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=1400&q=85"
            alt="Diwali and Wedding Festive Edit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111110] via-[#111110]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-transparent to-transparent" />
        </div>

        {/* Golden Ornamental Corner Accents */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/80 border border-[#D4AF37]/50 text-[#F5D77A] text-[10px] uppercase tracking-[0.3em] font-semibold mb-4">
            <Gift className="w-3.5 h-3.5" />
            <span>Festive & Wedding Gifting</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            The Royal Festive & <span className="gold-text">Wedding Suite</span>
          </h2>

          <GoldSwoosh className="w-28 h-3 mb-6" />

          <p className="text-xs sm:text-sm text-[#A8A18F] font-light leading-relaxed mb-8">
            Celebrate Diwali, sacred Griha Pravesh housewarmings, and milestone nuptials with bespoke gift sets combining 22K heirloom jewelry with hand-carved solid brass urlis and French-poured Cambodian oud diffusers.
          </p>

          {/* Privilege Code Box */}
          <div className="inline-flex items-center space-x-4 p-3.5 rounded-xl bg-black/70 border border-[#D4AF37]/40 mb-8 backdrop-blur-md">
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase tracking-widest text-[#A8A18F]">Complimentary Festive Privilege</span>
              <span className="font-mono text-sm font-bold text-[#F5D77A] tracking-wider">FESTIVE15</span>
            </div>
            <span className="text-xs text-[#F6F1E7] border-l border-[#D4AF37]/30 pl-4 font-light">
              15% privilege on all curated festive chests
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => navigateTo('collections')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl btn-gold-shimmer text-black font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-3 shadow-gold-glow cursor-pointer"
            >
              <span>Explore Festive Sets</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#D4AF37]/40 hover:border-[#F5D77A] bg-black/50 text-[#F6F1E7] hover:text-[#F5D77A] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Wedding Concierge Booking</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
