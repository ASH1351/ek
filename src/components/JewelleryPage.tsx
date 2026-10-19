import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useCart } from '../context/CartContext';
import { JewellerySubcategory } from '../types';
import { SlidersHorizontal, Grid3X3, Grid2X2, Sparkles, X, ChevronDown } from 'lucide-react';
import { GoldSwoosh } from '../utils/formatters';

export const JewelleryPage: React.FC = () => {
  const { selectedSubcategoryFilter, setSelectedSubcategoryFilter } = useCart();
  const [selectedSubcat, setSelectedSubcat] = useState<string>(
    selectedSubcategoryFilter || 'All'
  );
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(3);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const subcategories: (string | JewellerySubcategory)[] = [
    'All',
    'Necklaces',
    'Earrings',
    'Rings',
    'Bangles',
    'Bracelets',
    'Sets',
  ];

  const filteredProducts = useMemo(() => {
    let items = PRODUCTS.filter((p) => p.category === 'jewellery');
    if (selectedSubcat !== 'All') {
      items = items.filter((p) => p.subcategory === selectedSubcat);
    }
    if (sortBy === 'price-low') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      items.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    }
    return items;
  }, [selectedSubcat, sortBy]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
          <span>Haute Joaillerie Archive</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
          Royal Jewellery Vault
        </h1>
        <div className="flex justify-center mb-4">
          <GoldSwoosh className="w-32 h-4" />
        </div>
        <p className="text-xs sm:text-sm text-[#A8A18F] font-light leading-relaxed">
          Masterpieces crafted in 22K and 18K solid gold, certified uncut polki diamonds, and hand-selected Zambian emeralds. Consecrated by generations of royal goldsmiths.
        </p>
      </div>

      {/* Subcategory Pills Bar (Desktop & Tablet) */}
      <div className="hidden sm:flex items-center justify-center flex-wrap gap-2 mb-10">
        {subcategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedSubcat(cat)}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
              selectedSubcat === cat
                ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black font-semibold shadow-gold-glow'
                : 'bg-[#181815] text-[#A8A18F] hover:text-white border border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filter & Sort Controls Row */}
      <div className="flex items-center justify-between py-4 border-y border-[#D4AF37]/20 mb-8 bg-[#141412]/60 px-4 rounded-xl">
        {/* Mobile Filter Trigger */}
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="sm:hidden flex items-center space-x-2 text-xs uppercase tracking-wider text-[#F5D77A]"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Categories ({selectedSubcat})</span>
        </button>

        <div className="hidden sm:block text-xs uppercase tracking-wider text-[#A8A18F]">
          Showing <strong className="text-white">{filteredProducts.length}</strong> Royal Jewels
        </div>

        {/* Right side: Sort Dropdown & Grid View Toggle */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-[#A8A18F] hidden md:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-black border border-[#D4AF37]/30 text-white rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#F5D77A]"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Connoisseur Rating</option>
            </select>
          </div>

          {/* Desktop Grid Switcher */}
          <div className="hidden lg:flex items-center space-x-1 bg-black border border-[#D4AF37]/30 rounded-lg p-1">
            <button
              onClick={() => setGridCols(2)}
              className={`p-1 rounded ${gridCols === 2 ? 'bg-[#D4AF37] text-black' : 'text-[#A8A18F]'}`}
              title="2 Columns"
            >
              <Grid2X2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setGridCols(3)}
              className={`p-1 rounded ${gridCols === 3 ? 'bg-[#D4AF37] text-black' : 'text-[#A8A18F]'}`}
              title="3 Columns"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 glass-luxury rounded-2xl border border-[#D4AF37]/20 p-8">
          <p className="font-serif text-xl text-white mb-2">No jewels found in this subcategory.</p>
          <p className="text-xs text-[#A8A18F] mb-6">Explore our other collections or speak with a concierge.</p>
          <button
            onClick={() => setSelectedSubcat('All')}
            className="px-6 py-2.5 rounded-xl btn-gold-shimmer text-black text-xs uppercase tracking-wider font-semibold"
          >
            Show All Jewels
          </button>
        </div>
      ) : (
        <div
          className={`grid gap-4 sm:gap-6 lg:gap-8 ${
            gridCols === 2
              ? 'grid-cols-2'
              : gridCols === 3
              ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3'
              : 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }`}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* ── MOBILE FILTER DRAWER ── */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm sm:hidden flex flex-col justify-end">
          <div className="bg-[#141412] border-t border-[#D4AF37]/40 rounded-t-3xl p-6 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20 mb-4">
              <span className="font-serif text-lg font-bold text-white">Filter Jewellery</span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-[#A8A18F] hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-2">
              {subcategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedSubcat(cat);
                    setMobileFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-medium flex items-center justify-between ${
                    selectedSubcat === cat
                      ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black font-semibold'
                      : 'bg-[#181815] text-[#A8A18F]'
                  }`}
                >
                  <span>{cat}</span>
                  {selectedSubcat === cat && <span>✓</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
