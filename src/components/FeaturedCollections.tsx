import React, { useRef } from 'react';
import { useCart } from '../context/CartContext';
import { FEATURED_COLLECTIONS } from '../data/products';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

export const FeaturedCollections: React.FC = () => {
  const { navigateTo } = useCart();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#161614] border-y border-[#D4AF37]/15 relative overflow-hidden">
      {/* Decorative Gold Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
              <span>Bespoke Curations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Featured Collections
            </h2>
            <p className="text-xs sm:text-sm text-[#A8A18F] mt-2 max-w-xl font-light">
              Limited-edition edits curated for regal ceremonies, festive celebrations, and quiet everyday elegance.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="hidden sm:flex items-center space-x-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-[#D4AF37]/30 hover:border-[#F5D77A] text-[#F6F1E7] hover:text-[#F5D77A] bg-[#111110] flex items-center justify-center transition-all duration-300 hover:shadow-gold-glow"
              aria-label="Previous collection"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-[#D4AF37]/30 hover:border-[#F5D77A] text-[#F6F1E7] hover:text-[#F5D77A] bg-[#111110] flex items-center justify-center transition-all duration-300 hover:shadow-gold-glow"
              aria-label="Next collection"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll-Snap Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FEATURED_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => navigateTo(col.category)}
              className="snap-start flex-shrink-0 w-[290px] sm:w-[350px] md:w-[380px] group rounded-2xl overflow-hidden glass-luxury border border-[#D4AF37]/25 hover:border-[#F5D77A] transition-all duration-500 cursor-pointer shadow-card-luxury flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181815] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] tracking-widest uppercase text-[#F5D77A]">
                  {col.itemCount}
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold block mb-1">
                    {col.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-bold group-hover:text-[#F5D77A] transition-colors mb-2">
                    {col.title}
                  </h3>
                  <p className="text-xs text-[#A8A18F] font-light leading-relaxed line-clamp-2">
                    {col.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#F6F1E7] group-hover:text-[#F5D77A]">
                  <span>Discover Edit</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
