import React from 'react';
import { useCart } from '../context/CartContext';
import { GoldSwoosh } from '../utils/formatters';
import { Sparkles, ArrowRight } from 'lucide-react';

export const BrandStory: React.FC = () => {
  const { navigateTo } = useCart();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Visual Collage of Artisan Mastery */}
        <div className="lg:col-span-6 relative">
          {/* Main Large Visual */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#D4AF37]/30 shadow-card-luxury group">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85"
              alt="Artisan crafting Ek Omkar Uniq royal jewellery"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-luxury border border-[#D4AF37]/30">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#F5D77A] font-semibold block mb-0.5">
                The Heritage Atelier
              </span>
              <p className="font-serif italic text-sm text-white">
                "Where gold becomes prayer, and brass preserves the sacred flame."
              </p>
            </div>
          </div>

          {/* Secondary Floating Accent Card */}
          <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 rounded-xl overflow-hidden glass-luxury border border-[#D4AF37]/40 shadow-gold-glow p-4 z-20">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-black border border-[#D4AF37]/50 flex items-center justify-center p-0.5">
                <img src="/eou-logo.png" alt="EOU" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-serif font-bold text-xs text-white">Ek Omkar Uniq</span>
                <span className="text-[8px] uppercase tracking-widest text-[#D4AF37] block">Est. Royal Archive</span>
              </div>
            </div>
            <p className="text-[10px] text-[#A8A18F] leading-tight">
              Honoring 4th-generation royal goldsmith lineages and Vedic metalcraft.
            </p>
          </div>
        </div>

        {/* Right Side: Editorial Philosophy */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
            <span>The EOU Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-4">
            One Divine Essence,{' '}
            <span className="gold-text">Uniquely Expressed.</span>
          </h2>

          <div className="mb-6">
            <GoldSwoosh className="w-36 h-4" />
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#A8A18F] font-light leading-relaxed">
            <p>
              At <strong className="text-white font-medium">Ek Omkar Uniq (EOU)</strong>, we believe true luxury is spiritual: it is an elevation of consciousness through beauty that outlives generations. Inspired by the supreme oneness of the universe, our creations honor the symmetry between adornment for the self and sacred elegance for the sanctuary of home.
            </p>
            <p>
              Every uncut polki diamond is individually selected for character and fire; every 22K gold bangle is forged by hands whose ancestors adorned royal courts; every brass urli is cast to anchor peace and prosperity within modern architectural residences.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 my-8 pt-6 border-t border-[#D4AF37]/20">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold gold-text block">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-[#A8A18F]">Hallmark Certified</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold gold-text block">60+ Hrs</span>
              <span className="text-[10px] uppercase tracking-wider text-[#A8A18F]">Artisan Time Per Jewel</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold gold-text block">4 Generations</span>
              <span className="text-[10px] uppercase tracking-wider text-[#A8A18F]">Master Goldsmiths</span>
            </div>
          </div>

          <div>
            <button
              onClick={() => navigateTo('about')}
              className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-xl btn-gold-shimmer text-black font-semibold text-xs uppercase tracking-[0.25em] group shadow-gold-glow cursor-pointer"
            >
              <span>Explore Our Heritage Story</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
