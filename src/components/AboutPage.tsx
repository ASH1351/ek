import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles, Crown, ShieldCheck, Gem, Award, ArrowRight } from 'lucide-react';
import { GoldSwoosh } from '../utils/formatters';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useCart();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
          <span>The Heritage & Monogram</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
          The Story of Ek Omkar Uniq
        </h1>
        <div className="flex justify-center mb-4">
          <GoldSwoosh className="w-32 h-4" />
        </div>
        <p className="text-xs sm:text-sm text-[#A8A18F] font-light leading-relaxed">
          Royal, timeless, spiritual-yet-modern, exclusive, handcrafted luxury.
        </p>
      </div>

      {/* Monogram Brand Mark Breakdown */}
      <div className="p-8 sm:p-14 rounded-3xl glass-luxury border border-[#D4AF37]/35 shadow-card-luxury mb-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-black border-2 border-[#D4AF37]/50 shadow-gold-glow flex items-center justify-center p-4 relative group">
              <img
                src="/eou-logo.png"
                alt="Ek Omkar Uniq EOU Royal Monogram"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(245,215,122,0.5)]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5D77A]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#A8A18F] font-light leading-relaxed">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
              Sacred Geometry of the Crest
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              The "EOU" Monogram & The Golden Swoosh
            </h3>
            <p>
              The royal insignia of <strong className="text-white">Ek Omkar Uniq</strong> carries deep spiritual reverence blended with haute joaillerie sophistication. The monogram intertwines the letters <strong>E, O, and U</strong>, united by an unbroken golden swoosh that sweeps through the E and curves gracefully around the O.
            </p>
            <p>
              This curving swoosh represents the timeless flow of divine energy — the primordial sound and creative breath that unites adornment of the human body with the sanctity of the home.
            </p>
            <p>
              Anchoring the crest, <strong>"EK OMKAR"</strong> stands in high-contrast royal serif capitals, while <strong>"UNIQ"</strong> is set in wide-spaced thin capitals flanked by two razor-thin gold lines, symbolizing balance, poise, and discerning individuality.
            </p>
          </div>
        </div>
      </div>

      {/* Three Pillars of the Atelier */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-8 rounded-2xl bg-[#161614] border border-[#D4AF37]/25 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-black border border-[#D4AF37]/35 flex items-center justify-center text-[#F5D77A] mb-5">
              <Crown className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-white mb-2">Generational Lineage</h4>
            <p className="text-xs text-[#A8A18F] font-light leading-relaxed">
              Our goldsmith gharanas trace their lineage back over 120 years to royal court artisans of Rajasthan and Punjab, practicing authentic jadau, kundan setting, and lost-wax brass sculpting.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-[#161614] border border-[#D4AF37]/25 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-black border border-[#D4AF37]/35 flex items-center justify-center text-[#F5D77A] mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-white mb-2">Certified Purity</h4>
            <p className="text-xs text-[#A8A18F] font-light leading-relaxed">
              Every single piece of jewellery bears the government BIS hallmark with laser-inscribed HUID numbers. Our diamonds and polki are certified by premier gemological institutes (IGI, GIA).
            </p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-[#161614] border border-[#D4AF37]/25 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-black border border-[#D4AF37]/35 flex items-center justify-center text-[#F5D77A] mb-5">
              <Gem className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-white mb-2">Sacred Sanctums</h4>
            <p className="text-xs text-[#A8A18F] font-light leading-relaxed">
              We extend our craft beyond the body into living spaces. Our solid brass urlis and Cambodian oud diffusers bring meditative stillness and golden warmth to modern residences.
            </p>
          </div>
        </div>
      </div>

      {/* Flagship Salon CTA */}
      <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-[#181815] via-[#1c1c18] to-[#181815] border border-[#D4AF37]/30 shadow-card-luxury">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
          Experience the Flagship Salon
        </h3>
        <p className="text-xs sm:text-sm text-[#A8A18F] max-w-md mx-auto mb-6 font-light">
          Book a private viewing appointment with our master gemologists in Mumbai or New Delhi.
        </p>
        <button
          onClick={() => navigateTo('contact')}
          className="px-8 py-3.5 rounded-xl btn-gold-shimmer text-black font-semibold text-xs uppercase tracking-[0.2em] inline-flex items-center space-x-2 shadow-gold-glow cursor-pointer"
        >
          <span>Schedule Private Viewing</span>
          <ArrowRight className="w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
};
