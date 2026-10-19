import React from 'react';
import { useCart } from '../context/CartContext';
import { ArrowUpRight, Sparkles, Lamp } from 'lucide-react';

export const CategoryShowcase: React.FC = () => {
  const { navigateTo } = useCart();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold block mb-2">
          Curated Worlds
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Explore Our Dual Realms
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Category Card 1: Jewellery */}
        <div
          onClick={() => navigateTo('jewellery')}
          className="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] cursor-pointer border border-[#D4AF37]/25 hover:border-[#F5D77A]/70 transition-all duration-500 shadow-card-luxury hover:shadow-gold-glow-lg flex flex-col justify-end p-8 sm:p-10"
        >
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85"
            alt="Royal Jewellery Collection"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-1000 ease-out"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/50 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

          {/* Card Content */}
          <div className="relative z-10 flex flex-col">
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#F5D77A] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
              <span>Haute Joaillerie</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:text-[#F5D77A] transition-colors">
              The Jewellery Vault
            </h3>

            <p className="text-xs sm:text-sm text-[#A8A18F] max-w-md font-light leading-relaxed mb-6">
              Certified 22K/18K gold polki chokers, brilliant solitaire signet rings, Basra pearl jhumkas, and solid twisted kadas.
            </p>

            <div className="flex items-center justify-between border-t border-[#D4AF37]/30 pt-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#F6F1E7] group-hover:text-[#F5D77A] transition-colors font-semibold">
                Explore Jewellery Realm
              </span>
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-black/40 backdrop-blur-md flex items-center justify-center text-[#F5D77A] group-hover:bg-[#F5D77A] group-hover:text-black transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Card 2: Home Essentials */}
        <div
          onClick={() => navigateTo('home-essentials')}
          className="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] cursor-pointer border border-[#D4AF37]/25 hover:border-[#F5D77A]/70 transition-all duration-500 shadow-card-luxury hover:shadow-gold-glow-lg flex flex-col justify-end p-8 sm:p-10"
        >
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1200&q=85"
            alt="Artisanal Home Essentials"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-1000 ease-out"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/50 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

          {/* Card Content */}
          <div className="relative z-10 flex flex-col">
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#F5D77A] font-semibold mb-3">
              <Lamp className="w-3.5 h-3.5 text-[#F5D77A]" />
              <span>Sanctuary & Living</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:text-[#F5D77A] transition-colors">
              Home Essentials
            </h3>

            <p className="text-xs sm:text-sm text-[#A8A18F] max-w-md font-light leading-relaxed mb-6">
              Heavy hand-cast brass peacock urlis, Grasse-formulated oud candles, Spanish Nero Marquina marble serveware, and ceremonial pooja suites.
            </p>

            <div className="flex items-center justify-between border-t border-[#D4AF37]/30 pt-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#F6F1E7] group-hover:text-[#F5D77A] transition-colors font-semibold">
                Explore Home Sanctuaries
              </span>
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-black/40 backdrop-blur-md flex items-center justify-center text-[#F5D77A] group-hover:bg-[#F5D77A] group-hover:text-black transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
