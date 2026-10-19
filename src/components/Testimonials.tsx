import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#141412] border-y border-[#D4AF37]/15 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B8860B]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
          <span>Voices of Connoisseurs</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
          Treasured by Royalty & Collectors
        </h2>

        {/* Testimonial Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl glass-luxury border border-[#D4AF37]/30 shadow-card-luxury">
          <Quote className="w-12 h-12 text-[#D4AF37]/25 mx-auto mb-6" />

          {/* Gold Stars */}
          <div className="flex justify-center items-center space-x-1.5 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#F5D77A] fill-[#F5D77A]" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-white font-light italic leading-relaxed mb-8">
            "{current.quote}"
          </p>

          {/* Author Details */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#F5D77A] tracking-wide">
              {current.author}
            </h4>
            <p className="text-xs text-[#A8A18F] uppercase tracking-widest mt-0.5">
              {current.location}
            </p>
            <div className="mt-2 inline-block px-3 py-1 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[10px] text-[#D4AF37] tracking-wider uppercase">
              Acquired: {current.item}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#D4AF37]/15">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-[#D4AF37]/30 hover:border-[#F5D77A] text-[#F6F1E7] hover:text-[#F5D77A] transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#F5D77A]'
                      : 'w-2 bg-[#A8A18F]/40 hover:bg-[#A8A18F]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-full border border-[#D4AF37]/30 hover:border-[#F5D77A] text-[#F6F1E7] hover:text-[#F5D77A] transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
