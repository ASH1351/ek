import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { useCart } from '../context/CartContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ProductCategory } from '../types';

export const BestSellers: React.FC = () => {
  const { navigateTo } = useCart();
  const [filter, setFilter] = useState<'all' | ProductCategory>('all');

  const filteredProducts = PRODUCTS.filter((item) => {
    if (filter === 'all') return item.isBestseller || item.rating >= 4.9;
    return item.category === filter;
  }).slice(0, 8);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
            <span>Crown Favorites</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Best Sellers & Iconic Creations
          </h2>
          <p className="text-xs sm:text-sm text-[#A8A18F] mt-2 max-w-xl font-light">
            Treasured by connoisseurs across the globe for their unparalleled craftsmanship and heritage allure.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-2 mt-6 md:mt-0 p-1.5 rounded-xl bg-[#181815] border border-[#D4AF37]/20 self-start md:self-auto overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black font-semibold shadow-sm'
                : 'text-[#A8A18F] hover:text-white'
            }`}
          >
            All Icons
          </button>
          <button
            onClick={() => setFilter('jewellery')}
            className={`px-4 py-2 rounded-lg text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
              filter === 'jewellery'
                ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black font-semibold shadow-sm'
                : 'text-[#A8A18F] hover:text-white'
            }`}
          >
            Jewellery
          </button>
          <button
            onClick={() => setFilter('home-essentials')}
            className={`px-4 py-2 rounded-lg text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
              filter === 'home-essentials'
                ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black font-semibold shadow-sm'
                : 'text-[#A8A18F] hover:text-white'
            }`}
          >
            Home Décor
          </button>
        </div>
      </div>

      {/* Product Grid: 2 columns mobile, 3 tablet, 4 desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-14 text-center">
        <button
          onClick={() => navigateTo(filter === 'home-essentials' ? 'home-essentials' : 'jewellery')}
          className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-xl border border-[#D4AF37]/50 hover:border-[#F5D77A] text-[#F6F1E7] hover:text-[#F5D77A] bg-[#181815] transition-all duration-300 hover:shadow-gold-glow group text-xs uppercase tracking-[0.25em] font-semibold"
        >
          <span>View Entire Catalogue</span>
          <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
