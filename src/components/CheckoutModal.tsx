import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, ShieldCheck, CheckCircle2, CreditCard, QrCode, Building, Banknote, ArrowRight, Sparkles, Package } from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import confetti from 'canvas-confetti';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    discountAmount,
    promoCode,
    isGiftWrap,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [formData, setFormData] = useState({
    fullName: 'Princess Avantika',
    email: 'avantika.m@royalvault.in',
    phone: '+91 98200 88990',
    address: 'Flat 14A, Grand Imperial Towers, Worli Sea Face',
    pincode: '400018',
    city: 'Mumbai',
    state: 'Maharashtra',
    giftNote: 'With warm blessings on your sacred celebration.',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const grandTotal = cartSubtotal - discountAmount + (isGiftWrap ? 500 : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedOrder = `EOU-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderNumber(generatedOrder);
      setIsSubmitting(false);
      setIsCompleted(true);
      clearCart();

      // Trigger royal gold celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F5D77A', '#B8860B', '#ffffff'],
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex items-center justify-center animate-[fadeIn_0.2s_ease-out]">
      <div className="relative w-full max-w-4xl bg-[#141412] border border-[#D4AF37]/35 rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Top Header */}
        <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#111110]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg border border-[#D4AF37]/40 bg-black p-0.5">
              <img src="/eou-logo.png" alt="EOU" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                Royal Encrypted Checkout
              </h3>
              <span className="text-[10px] text-[#A8A18F] uppercase tracking-widest">
                256-Bit Bank Grade SSL Protection
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1.5 rounded-lg text-[#A8A18F] hover:text-white hover:bg-[#1A1A17] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Completed State */}
        {isCompleted ? (
          <div className="p-8 sm:p-14 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#181815] border-2 border-[#F5D77A] flex items-center justify-center text-[#F5D77A] shadow-gold-glow mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-2">
              Order Confirmed & Consecrated
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
              Thank You for Trusting Ek Omkar Uniq
            </h2>
            <p className="font-mono text-sm sm:text-base text-[#F5D77A] mb-4">
              Order Reference: <strong className="text-white">{orderNumber}</strong>
            </p>
            <p className="text-xs sm:text-sm text-[#A8A18F] max-w-lg font-light leading-relaxed mb-8">
              A bespoke notification and tracking link have been dispatched to <strong className="text-white">{formData.email}</strong>. Our royal master goldsmiths are preparing your insured unboxing experience.
            </p>

            <div className="p-4 rounded-xl bg-black/60 border border-[#D4AF37]/30 max-w-md w-full text-left text-xs space-y-2 mb-8">
              <div className="flex items-center space-x-2 text-[#F5D77A]">
                <Package className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider">Estimated Delivery</span>
              </div>
              <p className="text-[#A8A18F]">
                2 to 4 business days via Armored Insured Doorstep Courier to {formData.city}, {formData.pincode}.
              </p>
            </div>

            <button
              onClick={() => {
                setIsCheckoutOpen(false);
                setIsCompleted(false);
              }}
              className="px-8 py-3.5 rounded-xl btn-gold-shimmer text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-gold-glow"
            >
              Continue Exploring Collections
            </button>
          </div>
        ) : (
          /* Checkout Form & Order Summary Columns */
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Customer & Delivery Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[75vh]">
              <div>
                <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-3">
                  1. Royal Recipient & Shipping Address
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                      Phone (for insured delivery)
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                      Street Address / Suite
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                    />
                  </div>
                </div>
              </div>

              {/* Gift Note */}
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                  Complimentary Calligraphed Gift Card Message
                </label>
                <textarea
                  rows={2}
                  value={formData.giftNote}
                  onChange={(e) => setFormData({ ...formData, giftNote: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-black border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                />
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-3">
                  2. Select Payment Privilege
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center space-x-2.5 transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-[#F5D77A] bg-[#1c1c18] text-[#F5D77A] shadow-gold-glow'
                        : 'border-[#D4AF37]/25 bg-black/40 text-[#A8A18F]'
                    }`}
                  >
                    <QrCode className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Instant UPI / QR</div>
                      <div className="text-[10px] text-[#A8A18F]">GPay, PhonePe, Paytm</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center space-x-2.5 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#F5D77A] bg-[#1c1c18] text-[#F5D77A] shadow-gold-glow'
                        : 'border-[#D4AF37]/25 bg-black/40 text-[#A8A18F]'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Cards & Amex</div>
                      <div className="text-[10px] text-[#A8A18F]">Zero Surcharge</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center space-x-2.5 transition-all ${
                      paymentMethod === 'netbanking'
                        ? 'border-[#F5D77A] bg-[#1c1c18] text-[#F5D77A] shadow-gold-glow'
                        : 'border-[#D4AF37]/25 bg-black/40 text-[#A8A18F]'
                    }`}
                  >
                    <Building className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">NetBanking</div>
                      <div className="text-[10px] text-[#A8A18F]">50+ Indian Banks</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center space-x-2.5 transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#F5D77A] bg-[#1c1c18] text-[#F5D77A] shadow-gold-glow'
                        : 'border-[#D4AF37]/25 bg-black/40 text-[#A8A18F]'
                    }`}
                  >
                    <Banknote className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Cash on Delivery</div>
                      <div className="text-[10px] text-[#A8A18F]">Doorstep Verification</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Order Summary Sidebar */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#10100f] border-t lg:border-t-0 lg:border-l border-[#D4AF37]/25 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4">
                  Order Summary ({cart.length} Pieces)
                </h4>

                {/* Items preview */}
                <div className="space-y-3 max-h-56 overflow-y-auto pr-1 mb-6">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center space-x-3 text-xs">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-12 h-12 rounded object-cover border border-[#D4AF37]/20"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-medium truncate">{item.product.name}</div>
                        <div className="text-[10px] text-[#A8A18F]">Qty: {item.quantity}</div>
                      </div>
                      <div className="text-right font-serif font-bold text-[#F5D77A]">
                        {formatPrice(item.product.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing totals */}
                <div className="space-y-2 text-xs border-t border-[#D4AF37]/20 pt-4 text-[#A8A18F]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white">{formatPrice(cartSubtotal)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#F5D77A]">
                      <span>Privilege Discount ({promoCode})</span>
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
                    <span>Armored Courier</span>
                    <span className="text-[#F5D77A] font-medium">COMPLIMENTARY</span>
                  </div>
                  <div className="flex justify-between text-base font-serif font-bold text-white pt-3 border-t border-[#D4AF37]/30">
                    <span>Total Payable</span>
                    <span className="gold-text">{formatPrice(grandTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="mt-8 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl btn-gold-shimmer text-black font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-2 shadow-gold-glow cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Consecrating Order...</span>
                  ) : (
                    <>
                      <span>Complete Royal Order</span>
                      <ArrowRight className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>

                <div className="mt-4 flex items-center justify-center space-x-2 text-[10px] text-[#A8A18F]">
                  <ShieldCheck className="w-4 h-4 text-[#F5D77A]" />
                  <span>100% Insured Transit & Doorstep Seal Verification</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
