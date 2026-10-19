import React from 'react';
import { FEATURED_COLLECTIONS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import { GoldSwoosh } from '../utils/formatters';

export const CollectionsPage: React.FC = () => {
  const { navigateTo } = useCart();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
          <span>Curated Anthology</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
          The Bespoke Collections
        </h1>
        <div className="flex justify-center mb-4">
          <GoldSwoosh className="w-32 h-4" />
        </div>
        <p className="text-xs sm:text-sm text-[#A8A18F] font-light leading-relaxed">
          Conceptualized as royal suites, each collection unites jewelry pieces and atmospheric home sanctums around a singular poetic theme.
        </p>
      </div>

      {/* Collections Stack */}
      <div className="space-y-12">
        {FEATURED_COLLECTIONS.map((col, idx) => (
          <div
            key={col.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-3xl glass-luxury border border-[#D4AF37]/30 shadow-card-luxury ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Frame */}
            <div className={`lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] bg-black border border-[#D4AF37]/25 group ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000"
              />
            </div>

            {/* Content Info */}
            <div className={`lg:col-span-6 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-2 block">
                {col.subtitle}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                {col.title}
              </h2>
              <GoldSwoosh className="w-24 h-3 mb-4" />
              <p className="text-xs sm:text-sm text-[#A8A18F] font-light leading-relaxed mb-6">
                {col.description}
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-black/60 border border-[#D4AF37]/30 text-xs text-[#F5D77A]">
                  {col.itemCount}
                </span>
                <span className="text-xs text-[#A8A18F]">
                  Category: <strong className="text-white capitalize">{col.category.replace('-', ' ')}</strong>
                </span>
              </div>

              <div>
                <button
                  onClick={() => navigateTo(col.category)}
                  className="px-7 py-3.5 rounded-xl btn-gold-shimmer text-black font-semibold text-xs uppercase tracking-[0.2em] inline-flex items-center space-x-2 shadow-gold-glow cursor-pointer"
                >
                  <span>Explore {col.title}</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
