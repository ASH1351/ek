import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, openProductModal } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const quickTerms = ['Polki', 'Solitaire', 'Brass Urli', 'Oud Candle', 'Kada', 'Jhumka', 'Diwali'];

  const results = query.trim()
    ? PRODUCTS.filter((p) => {
        const text = `${p.name} ${p.tagline} ${p.subcategory} ${p.category} ${p.materials.join(' ')} ${p.occasion?.join(' ')}`.toLowerCase();
        return text.includes(query.toLowerCase());
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-12 animate-[fadeIn_0.2s_ease-out]">
      <div className="max-w-3xl mx-auto">
        {/* Top Close Bar */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 rounded-full bg-[#181815] border border-[#D4AF37]/30 text-[#A8A18F] hover:text-white transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Box */}
        <div className="relative mb-6">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search polki chokers, solitaires, brass urlis, candles..."
            className="w-full px-6 py-5 pl-14 rounded-2xl bg-[#141412] border border-[#D4AF37]/40 text-white placeholder-[#A8A18F]/60 font-serif text-lg sm:text-xl focus:outline-none focus:border-[#F5D77A] focus:shadow-gold-glow transition-all"
          />
          <Search className="w-6 h-6 text-[#D4AF37] absolute left-5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex items-center flex-wrap gap-2 mb-8">
          <span className="text-[10px] uppercase tracking-wider text-[#A8A18F] mr-1">Popular:</span>
          {quickTerms.map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-3 py-1 rounded-full bg-[#181815] hover:bg-[#22221d] border border-[#D4AF37]/25 text-[#F5D77A] text-xs transition-colors"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results */}
        {query.trim() && (
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] mb-2">
              Found {results.length} royal creations matching "{query}"
            </div>

            {results.length === 0 ? (
              <div className="p-8 rounded-xl bg-[#181815] border border-[#D4AF37]/20 text-center">
                <p className="text-sm text-[#A8A18F]">No bespoke pieces found for "{query}".</p>
                <p className="text-xs text-[#D4AF37] mt-1">Try searching by metal, gemstone, or room.</p>
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    openProductModal(product);
                  }}
                  className="flex items-center space-x-4 p-3.5 rounded-xl bg-[#181815] border border-[#D4AF37]/20 hover:border-[#F5D77A] cursor-pointer group transition-all"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-[#D4AF37]/20">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase tracking-widest text-[#D4AF37]">
                      {product.subcategory}
                    </span>
                    <h4 className="font-serif text-base font-bold text-white group-hover:text-[#F5D77A] transition-colors truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#A8A18F] truncate">{product.tagline}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-serif text-sm font-bold text-[#F5D77A] block">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-[10px] text-[#A8A18F] group-hover:text-white flex items-center justify-end mt-1">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
