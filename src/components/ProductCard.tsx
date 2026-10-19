import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Heart, Eye, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    openProductModal,
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useCart();

  const [isHovered, setIsHovered] = useState(false);
  const isFavorited = isInWishlist(product.id);

  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || primaryImage;

  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-[#181815] border border-[#D4AF37]/20 hover:border-[#F5D77A]/70 transition-all duration-500 shadow-card-luxury hover:shadow-gold-glow flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── IMAGE WRAPPER WITH HOVER SWAP ── */}
      <div
        onClick={() => openProductModal(product)}
        className="relative aspect-square sm:aspect-[4/5] w-full overflow-hidden bg-black cursor-pointer"
      >
        {/* Primary Image */}
        <img
          src={primaryImage}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />

        {/* Secondary Image for Hover Swap */}
        <img
          src={secondaryImage}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          loading="lazy"
        />

        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181815]/90 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges (Bestseller, Limited, New) */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isBestseller && (
            <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#B8860B] to-[#F5D77A] text-black text-[9px] uppercase font-bold tracking-[0.2em] shadow-sm">
              Bestseller
            </span>
          )}
          {product.isLimitedEdition && (
            <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/60 text-[#F5D77A] text-[9px] uppercase font-semibold tracking-[0.15em]">
              Vault Edition
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 rounded-full bg-[#1A1A17]/90 border border-[#F5D77A]/40 text-[#F6F1E7] text-[9px] uppercase font-semibold tracking-[0.15em]">
              New Arrival
            </span>
          )}
        </div>

        {/* Top Right Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md ${
            isFavorited
              ? 'bg-[#D4AF37] text-black shadow-gold-glow'
              : 'bg-black/60 text-[#F6F1E7] hover:text-[#F5D77A] border border-[#D4AF37]/30 hover:border-[#F5D77A]'
          }`}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-black' : ''}`} />
        </button>

        {/* Quick View Button (desktop hover reveal, or visible button on mobile) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openProductModal(product);
          }}
          className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] py-2.5 rounded-lg bg-black/85 backdrop-blur-md border border-[#D4AF37]/50 text-white text-[11px] uppercase tracking-[0.2em] font-medium items-center justify-center space-x-2 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:border-[#F5D77A] hover:text-[#F5D77A] shadow-card-luxury"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>
      </div>

      {/* ── CARD INFORMATION ── */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Subcategory & Rating row */}
          <div className="flex items-center justify-between text-[10px] tracking-wider uppercase text-[#A8A18F] mb-1.5">
            <span className="text-[#D4AF37] font-medium">{product.subcategory}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-[#F5D77A] fill-[#F5D77A]" />
              <span className="text-white font-medium">{product.rating.toFixed(1)}</span>
              <span className="text-[#A8A18F]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => openProductModal(product)}
            className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#F5D77A] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-[11px] text-[#A8A18F] line-clamp-1 mt-1 font-light">
            {product.tagline}
          </p>
        </div>

        {/* Price and Add to Bag */}
        <div className="mt-4 pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold text-[#F6F1E7]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-[#A8A18F] line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg btn-gold-shimmer text-black font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.2em] flex items-center space-x-1.5 shadow-sm active:scale-95 transition-transform"
            aria-label={`Add ${product.name} to bag`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
