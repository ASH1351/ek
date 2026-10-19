import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { GoldSwoosh } from '../utils/formatters';

export const Hero: React.FC = () => {
  const { navigateTo } = useCart();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#111110]">
      {/* ── CINEMATIC SPLIT BACKGROUND WITH MOODY LUXURY IMAGERY ── */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 opacity-35 lg:opacity-45 pointer-events-none select-none">
        {/* Left Side: Jewellery (Gold, Polki, Velvet) */}
        <div className="relative h-full w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=85"
            alt="Royal Jewellery by Ek Omkar Uniq"
            className="w-full h-full object-cover scale-105 animate-[floatSlow_12s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111110] via-[#111110]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-transparent to-[#111110]" />
        </div>

        {/* Right Side: Home Décor (Brass Urli, Marble, Ambient Warmth) */}
        <div className="relative h-full w-full overflow-hidden hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=1400&q=85"
            alt="Artisanal Home Essentials by Ek Omkar Uniq"
            className="w-full h-full object-cover scale-105 animate-[floatSlow_12s_ease-in-out_infinite_reverse]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#111110] via-[#111110]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-transparent to-[#111110]" />
        </div>
      </div>

      {/* Center Golden Light Burst and Shimmer Vignette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] bg-gradient-to-r from-[#B8860B]/20 via-[#F5D77A]/15 to-[#B8860B]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Shimmer Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-[#F5D77A] blur-[1px] animate-twinkle" />
        <div className="absolute top-1/3 right-[18%] w-2.5 h-2.5 rounded-full bg-[#D4AF37] blur-[1px] animate-twinkle [animation-delay:1.2s]" />
        <div className="absolute bottom-1/4 left-[28%] w-1.5 h-1.5 rounded-full bg-[#F5D77A] blur-[1px] animate-twinkle [animation-delay:2s]" />
        <div className="absolute bottom-1/3 right-[22%] w-2 h-2 rounded-full bg-[#D4AF37] blur-[1px] animate-twinkle [animation-delay:0.7s]" />
      </div>

      {/* ── HERO CONTENT CONTAINER ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Royal Crest / Monogram Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-luxury border border-[#D4AF37]/30 mb-6 shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#F6F1E7]">
            Haute Joaillerie & Artisanal Living
          </span>
          <Gem className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        {/* Main Title with Fluid Clamped Scale */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl">
          Timeless Luxury.{' '}
          <span className="gold-text block sm:inline mt-1 sm:mt-0">
            For You & Your Home.
          </span>
        </h1>

        {/* Animated Central Swoosh Motif merging Jewellery and Home */}
        <div className="my-5 flex items-center justify-center space-x-4">
          <span className="hidden sm:inline-block h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <GoldSwoosh className="w-36 sm:w-56 h-4 sm:h-5 filter drop-shadow-[0_0_10px_rgba(245,215,122,0.6)]" />
          <span className="hidden sm:inline-block h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#A8A18F] max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
          Ek Omkar Uniq crafts heirloom jewellery in certified gold and polki, accompanied by bespoke home essentials hand-cast in sacred brass and sculpted marble.
        </p>

        {/* Two Luxury CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          {/* Shop Jewellery CTA (Gold filled shimmer) */}
          <button
            onClick={() => navigateTo('jewellery')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl btn-gold-shimmer font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-3 shadow-gold-glow group cursor-pointer"
          >
            <span>Shop Jewellery</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          {/* Explore Home Essentials CTA (Gold outline glass) */}
          <button
            onClick={() => navigateTo('home-essentials')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#D4AF37]/50 hover:border-[#F5D77A] text-[#F6F1E7] hover:text-[#F5D77A] bg-[#1A1A17]/70 backdrop-blur-md font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-gold-glow group cursor-pointer"
          >
            <span>Explore Home Essentials</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-[#D4AF37]/15 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 text-[#A8A18F] text-[11px] sm:text-xs">
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#F5D77A]" />
            <span className="tracking-wider">BIS Hallmarked 22K/18K</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#F5D77A]" />
            <span className="tracking-wider">Generational Artisans</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="tracking-wider">Insured Doorstep Transit</span>
          </div>
        </div>
      </div>
    </section>
  );
};
