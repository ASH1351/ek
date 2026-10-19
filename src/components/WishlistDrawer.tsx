import React from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    navigateTo,
  } = useCart();

  if (!isWishlistOpen) return null;

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#141412] border-l border-[#D4AF37]/30 shadow-2xl flex flex-col animate-[slideLeft_0.3s_ease-out]">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#111110]">
            <div className="flex items-center space-x-2.5">
              <Heart className="w-5 h-5 text-[#F5D77A] fill-[#F5D77A]" />
              <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                Your Saved Vault
              </h3>
              <span className="text-xs text-[#D4AF37] px-2 py-0.5 rounded-full bg-black/60 border border-[#D4AF37]/30">
                {savedProducts.length} Saved
              </span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 rounded-lg text-[#A8A18F] hover:text-white hover:bg-[#1A1A17] transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {savedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#181815] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Heart className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif text-xl text-white font-medium mb-1">
                  Your Vault is Empty
                </h4>
                <p className="text-xs text-[#A8A18F] max-w-xs mb-6 font-light">
                  Click the heart icon on any jewel or home piece to save it to your private vault.
                </p>
                <button
                  onClick={() => {
                    setIsWishlistOpen(false);
                    navigateTo('jewellery');
                  }}
                  className="px-6 py-3 rounded-xl btn-gold-shimmer text-black text-xs uppercase tracking-[0.2em] font-semibold"
                >
                  Discover Jewels
                </button>
              </div>
            ) : (
              savedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex space-x-4 p-3.5 rounded-xl bg-[#181815] border border-[#D4AF37]/15 group hover:border-[#D4AF37]/40 transition-colors"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-[#D4AF37]/20">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm font-bold text-white line-clamp-1 pr-2">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#A8A18F] hover:text-red-400 transition-colors p-0.5"
                          title="Remove from vault"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37]">
                        {product.subcategory}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="font-serif text-sm font-bold text-[#F5D77A]">
                        {formatPrice(product.price)}
                      </span>

                      <button
                        onClick={() => {
                          addToCart(product, 1);
                        }}
                        className="px-3 py-1.5 rounded-lg btn-gold-shimmer text-black text-[10px] uppercase tracking-wider font-semibold flex items-center space-x-1"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
