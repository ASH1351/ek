import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import {
  X,
  Star,
  Heart,
  ShoppingBag,
  Zap,
  Phone,
  Truck,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Check,
  ArrowRight
} from 'lucide-react';
import { formatPrice, GoldSwoosh } from '../utils/formatters';

export const ProductDetailModal: React.FC = () => {
  const {
    activeProductModal,
    closeProductModal,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCheckoutOpen,
    openProductModal,
  } = useCart();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Standard Size');
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [pincodeVerified, setPincodeVerified] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<'desc' | 'materials' | 'shipping'>('desc');

  if (!activeProductModal) return null;
  const product = activeProductModal;
  const isFavorited = isInWishlist(product.id);

  // Cross-sell items
  const crossSellProducts = PRODUCTS.filter((p) =>
    product.crossSellIds?.includes(p.id)
  );

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize);
    closeProductModal();
    setIsCheckoutOpen(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Namaste Ek Omkar Uniq, I would like to enquire about purchasing "${product.name}" (${formatPrice(product.price)}). Could your royal concierge share more details?`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-8 flex items-center justify-center animate-[fadeIn_0.2s_ease-out]">
      <div className="relative w-full max-w-5xl bg-[#141412] border border-[#D4AF37]/35 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Floating Close Button */}
        <button
          onClick={closeProductModal}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-[#D4AF37]/40 text-[#F6F1E7] hover:text-[#F5D77A] hover:border-[#F5D77A] flex items-center justify-center transition-all duration-300 backdrop-blur-md"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* ── LEFT: IMAGE GALLERY ── */}
            <div className="lg:col-span-6 flex flex-col">
              {/* Main Active Image Display */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-black border border-[#D4AF37]/25 shadow-card-luxury group">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Wishlist Heart on top left */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-4 left-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md ${
                    isFavorited
                      ? 'bg-[#D4AF37] text-black shadow-gold-glow'
                      : 'bg-black/60 text-[#F6F1E7] border border-[#D4AF37]/30 hover:border-[#F5D77A]'
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-black' : ''}`} />
                </button>
              </div>

              {/* Thumbnails Row */}
              {product.images.length > 1 && (
                <div className="flex space-x-3 mt-4 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-black ${
                        activeImageIndex === idx
                          ? 'border-[#F5D77A] shadow-gold-glow'
                          : 'border-[#D4AF37]/25 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT: PRODUCT DETAILS & PURCHASE SUITE ── */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#D4AF37] mb-2">
                  <span className="font-semibold">{product.subcategory}</span>
                  <div className="flex items-center space-x-1.5">
                    <Star className="w-4 h-4 text-[#F5D77A] fill-[#F5D77A]" />
                    <span className="text-white font-medium">{product.rating.toFixed(1)}</span>
                    <span className="text-[#A8A18F]">({product.reviewCount} Connoisseur Reviews)</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                  {product.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#A8A18F] font-light mb-4">
                  {product.tagline}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline space-x-3 py-3 border-y border-[#D4AF37]/20 my-4">
                  <span className="font-serif text-2xl sm:text-3xl font-bold gold-text">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#A8A18F] line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-[10px] uppercase tracking-wider text-[#A8A18F]">
                    (Inclusive of all royal taxes & insured delivery)
                  </span>
                </div>

                {/* Size / Variant Selector (if relevant) */}
                <div className="mb-5">
                  <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-2 font-medium">
                    Select Dimensions / Fit
                  </label>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {['Bespoke Standard', 'Custom Fit (+3 Days)', 'Imperial Edition'].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3.5 py-2 rounded-lg border transition-all ${
                          selectedSize === sz
                            ? 'border-[#F5D77A] bg-[#1c1c18] text-[#F5D77A] shadow-gold-glow font-semibold'
                            : 'border-[#D4AF37]/25 bg-black/40 text-[#A8A18F] hover:text-white'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Action Buttons */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    {/* Quantity counter */}
                    <div className="flex items-center space-x-3 bg-black border border-[#D4AF37]/30 rounded-xl px-3 py-2.5">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-[#A8A18F] hover:text-[#F5D77A]"
                      >
                        -
                      </button>
                      <span className="font-mono text-sm text-white px-2">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-[#A8A18F] hover:text-[#F5D77A]"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Bag Button */}
                    <button
                      onClick={() => addToCart(product, quantity, selectedSize)}
                      className="flex-1 py-3.5 rounded-xl btn-gold-shimmer text-black font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-2 shadow-gold-glow cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4 text-black" />
                      <span>Add to Royal Bag</span>
                    </button>
                  </div>

                  {/* Buy Now Instant Checkout Button */}
                  <button
                    onClick={handleBuyNow}
                    className="w-full py-3.5 rounded-xl border border-[#D4AF37]/50 hover:border-[#F5D77A] bg-[#181815] text-[#F5D77A] font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-2 transition-all hover:shadow-gold-glow cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-[#F5D77A]" />
                    <span>Instant Royal Checkout</span>
                  </button>

                  {/* WhatsApp Enquiry Button */}
                  <a
                    href={`https://wa.me/919820012345?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#0e2417] border border-[#25D366]/40 text-[#25D366] hover:bg-[#133221] text-xs uppercase tracking-wider font-medium flex items-center justify-center space-x-2 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Enquire on WhatsApp with Concierge</span>
                  </a>
                </div>

                {/* Delivery Checker */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-[#D4AF37]/20 mb-6">
                  <div className="flex items-center space-x-2 text-xs text-[#F6F1E7] mb-2">
                    <Truck className="w-4 h-4 text-[#F5D77A]" />
                    <span>Estimated Royal Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Enter Destination Pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      maxLength={6}
                      className="px-3 py-1.5 rounded-lg bg-[#141412] border border-[#D4AF37]/30 text-white text-xs w-44 focus:outline-none focus:border-[#F5D77A]"
                    />
                    <button
                      onClick={() => setPincodeVerified(pincode.length >= 5)}
                      className="px-3 py-1.5 rounded-lg bg-[#181815] border border-[#D4AF37]/30 text-[10px] uppercase tracking-wider text-[#F5D77A]"
                    >
                      Check
                    </button>
                  </div>
                  {pincodeVerified && (
                    <p className="text-[11px] text-[#F5D77A] mt-2 flex items-center space-x-1">
                      <Check className="w-3.5 h-3.5 inline" />
                      <span>Complimentary insured delivery available in 2-4 business days.</span>
                    </p>
                  )}
                </div>

                {/* Accordions */}
                <div className="border-t border-[#D4AF37]/20 divide-y divide-[#D4AF37]/15 text-xs">
                  {/* Description Accordion */}
                  <div className="py-3">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === 'desc' ? 'materials' : 'desc')}
                      className="w-full flex items-center justify-between text-left text-white font-serif text-sm font-semibold tracking-wide"
                    >
                      <span>Heirloom Narrative & Craftsmanship</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#D4AF37] transition-transform ${
                          activeAccordion === 'desc' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeAccordion === 'desc' && (
                      <p className="mt-2 text-[#A8A18F] font-light leading-relaxed">
                        {product.description}
                      </p>
                    )}
                  </div>

                  {/* Materials & Care Accordion */}
                  <div className="py-3">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === 'materials' ? 'desc' : 'materials')}
                      className="w-full flex items-center justify-between text-left text-white font-serif text-sm font-semibold tracking-wide"
                    >
                      <span>Precious Materials & Care Protocol</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#D4AF37] transition-transform ${
                          activeAccordion === 'materials' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeAccordion === 'materials' && (
                      <div className="mt-2 space-y-2 text-[#A8A18F] font-light">
                        <div>
                          <strong className="text-white">Materials: </strong>
                          {product.materials.join(', ')}
                        </div>
                        {product.weight && (
                          <div>
                            <strong className="text-white">Approx Weight: </strong>
                            {product.weight}
                          </div>
                        )}
                        {product.dimensions && (
                          <div>
                            <strong className="text-white">Dimensions: </strong>
                            {product.dimensions}
                          </div>
                        )}
                        <div>
                          <strong className="text-white">Care Advice: </strong>
                          {product.careInstructions}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Shipping & Returns Accordion */}
                  <div className="py-3">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? 'desc' : 'shipping')}
                      className="w-full flex items-center justify-between text-left text-white font-serif text-sm font-semibold tracking-wide"
                    >
                      <span>Armored Transit & 7-Day Exchange</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#D4AF37] transition-transform ${
                          activeAccordion === 'shipping' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeAccordion === 'shipping' && (
                      <p className="mt-2 text-[#A8A18F] font-light leading-relaxed">
                        Every order is dispatched in an armored, tamper-evident container with full transit insurance. You enjoy a 7-day hassle-free doorstep exchange guarantee with complimentary reverse pick-up.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── COMPLETE THE LOOK CROSS-SELL ── */}
          {crossSellProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#D4AF37]/25">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#F5D77A]" />
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  Complete the Look & Sanctuary
                </h3>
              </div>
              <p className="text-xs text-[#A8A18F] font-light mb-6">
                Curated by our head stylist to complement your selection across jewellery and living pieces.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {crossSellProducts.map((cross) => (
                  <div
                    key={cross.id}
                    onClick={() => openProductModal(cross)}
                    className="flex items-center space-x-4 p-3.5 rounded-xl bg-black/40 border border-[#D4AF37]/20 hover:border-[#F5D77A] cursor-pointer group transition-all"
                  >
                    <img
                      src={cross.images[0]}
                      alt={cross.name}
                      className="w-16 h-16 rounded-lg object-cover border border-[#D4AF37]/20"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] uppercase tracking-wider text-[#D4AF37]">
                        {cross.subcategory}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-white group-hover:text-[#F5D77A] truncate">
                        {cross.name}
                      </h4>
                      <span className="font-serif text-xs font-bold text-[#F5D77A]">
                        {formatPrice(cross.price)}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── CLIENT REVIEWS SECTION ── */}
          <div className="mt-12 pt-8 border-t border-[#D4AF37]/25">
            <h3 className="font-serif text-xl font-bold text-white tracking-wide mb-6">
              Client Appraisals ({product.reviews.length})
            </h3>
            {product.reviews.length === 0 ? (
              <p className="text-xs text-[#A8A18F] font-light italic">
                Be the inaugural collector to review this bespoke creation upon delivery.
              </p>
            ) : (
              <div className="space-y-4">
                {product.reviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-xl bg-black/40 border border-[#D4AF37]/15">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-white">{rev.author}</span>
                      <span className="text-[10px] text-[#A8A18F]">{rev.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#F5D77A] fill-[#F5D77A]" />
                      ))}
                      {rev.verified && (
                        <span className="ml-2 text-[9px] uppercase tracking-wider text-[#D4AF37] bg-black px-2 py-0.5 rounded">
                          Verified Royal Patron
                        </span>
                      )}
                    </div>
                    <h5 className="font-serif font-bold text-sm text-[#F5D77A] mb-1">{rev.title}</h5>
                    <p className="text-xs text-[#A8A18F] font-light leading-relaxed">{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
