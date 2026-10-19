import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Gift, Tag } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    promoCode,
    discountAmount,
    applyPromoCode,
    isGiftWrap,
    setIsGiftWrap,
    setIsCheckoutOpen,
    navigateTo,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const FREE_SHIPPING_THRESHOLD = 50000;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);

  const grandTotal = cartSubtotal - discountAmount + (isGiftWrap ? 500 : 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#141412] border-l border-[#D4AF37]/30 shadow-2xl flex flex-col animate-[slideLeft_0.3s_ease-out]">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#111110]">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag className="w-5 h-5 text-[#F5D77A]" />
              <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                Your Royal Bag
              </h3>
              <span className="text-xs text-[#D4AF37] px-2 py-0.5 rounded-full bg-black/60 border border-[#D4AF37]/30">
                {cart.reduce((s, i) => s + i.quantity, 0)} Items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-[#A8A18F] hover:text-white hover:bg-[#1A1A17] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Tracker */}
          <div className="px-6 py-3.5 bg-[#181815] border-b border-[#D4AF37]/15">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-[#A8A18F] font-light">
                {remainingForFreeShipping === 0 ? (
                  <span className="text-[#F5D77A] font-semibold flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 inline mr-1" />
                    Complimentary Armored Courier Unlocked!
                  </span>
                ) : (
                  <>
                    Add <strong className="text-white">{formatPrice(remainingForFreeShipping)}</strong> for Complimentary Insured Courier
                  </>
                )}
              </span>
              <span className="text-[10px] text-[#D4AF37] font-mono">
                {Math.round(progressToFreeShipping)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-[#D4AF37]/20">
              <div
                className="h-full bg-gradient-to-r from-[#B8860B] via-[#F5D77A] to-[#D4AF37] transition-all duration-500 ease-out"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#181815] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif text-xl text-white font-medium mb-1">
                  Your Royal Bag is Empty
                </h4>
                <p className="text-xs text-[#A8A18F] max-w-xs mb-6 font-light">
                  Explore our royal jewelry vaults and artisanal home collections to add bespoke pieces.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('jewellery');
                  }}
                  className="px-6 py-3 rounded-xl btn-gold-shimmer text-black text-xs uppercase tracking-[0.2em] font-semibold"
                >
                  Explore Jewellery
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex space-x-4 p-3 rounded-xl bg-[#181815] border border-[#D4AF37]/15 group hover:border-[#D4AF37]/40 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-black flex-shrink-0 border border-[#D4AF37]/20">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm font-bold text-white line-clamp-1 pr-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#A8A18F] hover:text-red-400 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block">
                        {item.product.subcategory}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center space-x-2 bg-black/60 border border-[#D4AF37]/30 rounded-lg px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="text-[#A8A18F] hover:text-[#F5D77A] p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono text-white px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="text-[#A8A18F] hover:text-[#F5D77A] p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif text-sm font-bold text-[#F5D77A]">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Calculations */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 bg-[#111110] border-t border-[#D4AF37]/25 space-y-4">
              {/* Promo Code Input */}
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder="Privilege Code (try: ROYAL10)"
                    className="w-full px-3 py-2 pl-8 rounded-lg bg-black border border-[#D4AF37]/30 text-white placeholder-[#A8A18F]/50 text-xs tracking-wider focus:outline-none focus:border-[#F5D77A] uppercase"
                  />
                  <Tag className="w-3.5 h-3.5 text-[#D4AF37] absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
                <button
                  onClick={() => {
                    applyPromoCode(inputCode);
                    setInputCode('');
                  }}
                  className="px-4 py-2 rounded-lg bg-[#181815] hover:bg-[#242420] text-[#F5D77A] border border-[#D4AF37]/40 text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Apply
                </button>
              </div>

              {/* Gift Wrap Toggle */}
              <div
                onClick={() => setIsGiftWrap(!isGiftWrap)}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#181815] border border-[#D4AF37]/20 cursor-pointer hover:border-[#D4AF37]/40 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4 text-[#F5D77A]" />
                  <span className="text-xs text-[#F6F1E7]">Bespoke Velvet Box & Wax Seal Card</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] text-[#A8A18F]">₹500</span>
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center ${
                      isGiftWrap
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold text-[10px]'
                        : 'border-[#A8A18F]'
                    }`}
                  >
                    {isGiftWrap ? '✓' : ''}
                  </div>
                </div>
              </div>

              {/* Cost Summary Breakdown */}
              <div className="space-y-1.5 text-xs text-[#A8A18F] pt-2 border-t border-[#D4AF37]/15">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="text-white font-medium">{formatPrice(cartSubtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#F5D77A]">
                    <span>Royal Privilege ({promoCode})</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                {isGiftWrap && (
                  <div className="flex justify-between">
                    <span>Heirloom Gift Packaging</span>
                    <span className="text-white">₹500</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Armored Insured Shipping</span>
                  <span className="text-[#F5D77A] font-semibold">
                    {remainingForFreeShipping === 0 ? 'COMPLIMENTARY' : '₹1,200'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-serif font-bold text-white pt-2 border-t border-[#D4AF37]/20">
                  <span>Grand Total</span>
                  <span className="gold-text">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* Checkout Trigger Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-4 rounded-xl btn-gold-shimmer text-black font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-2 shadow-gold-glow cursor-pointer"
              >
                <span>Proceed to Royal Checkout</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
