import React from 'react';
import { useCart } from '../context/CartContext';
import { Home, Sparkles, Lamp, Heart, ShoppingBag } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const {
    activePageView,
    navigateTo,
    wishlist,
    cartTotalCount,
    setIsWishlistOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#111110]/95 backdrop-blur-xl border-t border-[#D4AF37]/25 px-2 py-2 lg:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.8)] pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
      <div className="grid grid-cols-5 items-center text-center">
        {/* Home */}
        <button
          onClick={() => navigateTo('home')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activePageView === 'home' ? 'text-[#F5D77A]' : 'text-[#A8A18F]'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[9px] uppercase tracking-wider">Home</span>
        </button>

        {/* Jewellery */}
        <button
          onClick={() => navigateTo('jewellery')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activePageView === 'jewellery' ? 'text-[#F5D77A]' : 'text-[#A8A18F]'
          }`}
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span className="text-[9px] uppercase tracking-wider">Jewels</span>
        </button>

        {/* Home Essentials */}
        <button
          onClick={() => navigateTo('home-essentials')}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activePageView === 'home-essentials' ? 'text-[#F5D77A]' : 'text-[#A8A18F]'
          }`}
        >
          <Lamp className="w-5 h-5 mb-0.5" />
          <span className="text-[9px] uppercase tracking-wider">Living</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={() => setIsWishlistOpen(true)}
          className="flex flex-col items-center justify-center py-1 text-[#A8A18F] hover:text-[#F5D77A] relative transition-colors"
        >
          <div className="relative">
            <Heart className="w-5 h-5 mb-0.5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 w-3.5 h-3.5 bg-[#B8860B] text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </div>
          <span className="text-[9px] uppercase tracking-wider">Vault</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center py-1 text-[#A8A18F] hover:text-[#F5D77A] relative transition-colors"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 mb-0.5 text-[#F5D77A]" />
            {cartTotalCount > 0 && (
              <span className="absolute -top-1 -right-2 w-3.5 h-3.5 bg-gradient-to-r from-[#B8860B] to-[#F5D77A] text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartTotalCount}
              </span>
            )}
          </div>
          <span className="text-[9px] uppercase tracking-wider text-[#F5D77A] font-semibold">Bag</span>
        </button>
      </div>
    </nav>
  );
};
