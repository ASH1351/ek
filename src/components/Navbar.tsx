import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { PageView } from '../types';

export const Navbar: React.FC = () => {
  const {
    cartTotalCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    activePageView,
    navigateTo,
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'jewellery' | 'home-essentials' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page: PageView; hasMega?: 'jewellery' | 'home-essentials' }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Jewellery', page: 'jewellery', hasMega: 'jewellery' },
    { name: 'Home Essentials', page: 'home-essentials', hasMega: 'home-essentials' },
    { name: 'Collections', page: 'collections' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  const jewelleryCategories = [
    { name: 'Necklaces & Chokers', filter: 'Necklaces', count: '18 Pieces' },
    { name: 'Royal Earrings & Jhumkas', filter: 'Earrings', count: '24 Pieces' },
    { name: 'Solitaire & Statement Rings', filter: 'Rings', count: '16 Pieces' },
    { name: 'Heritage Kadas & Bangles', filter: 'Bangles', count: '12 Pieces' },
    { name: 'Diamond Tennis Bracelets', filter: 'Bracelets', count: '9 Pieces' },
    { name: 'Bridal Suites & Sets', filter: 'Sets', count: '7 Pieces' },
  ];

  const homeCategories = [
    { name: 'Artisanal Brass Urlis & Diyas', filter: 'Festive & Pooja Essentials', count: '14 Pieces' },
    { name: 'Oud & Amber Scented Candles', filter: 'Candles & Diffusers', count: '11 Pieces' },
    { name: 'Marble & Brass Inlay Serveware', filter: 'Serveware', count: '8 Pieces' },
    { name: 'Bespoke Wall Sculptures', filter: 'Wall Art', count: '6 Pieces' },
    { name: 'Handcrafted Valet & Gifting', filter: 'Gifting', count: '10 Pieces' },
    { name: 'Sacred Temple Décor', filter: 'Décor', count: '15 Pieces' },
  ];

  return (
    <>
      {/* Top Privilege Bar */}
      <div className="bg-[#0b0b0a] border-b border-[#D4AF37]/20 py-2 px-4 text-center text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#A8A18F] relative z-50 overflow-hidden">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="w-3 h-3 text-[#F5D77A] animate-twinkle" />
          <span>Complimentary Royal Insured Delivery Worldwide</span>
          <span className="hidden md:inline text-[#D4AF37]">|</span>
          <span className="hidden md:inline text-[#F5D77A]">Privilege Code: <strong>ROYAL10</strong> For 10% Off</span>
          <Sparkles className="w-3 h-3 text-[#F5D77A] animate-twinkle" />
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-card-luxury py-3'
            : 'bg-[#111110]/80 backdrop-blur-md border-b border-[#D4AF37]/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-[#F6F1E7] hover:text-[#F5D77A] transition-colors focus:outline-none"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo & Monogram */}
            <div
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-[#D4AF37]/40 bg-black p-0.5 flex items-center justify-center group-hover:border-[#F5D77A] transition-all duration-300">
                <img
                  src="/eou-logo.png"
                  alt="Ek Omkar Uniq"
                  className="w-full h-full object-contain filter group-hover:brightness-110"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.18em] leading-tight text-white group-hover:text-[#F5D77A] transition-colors">
                  EK OMKAR
                </span>
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] font-medium leading-none">
                  U N I Q
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((item) => (
                <div
                  key={item.name}
                  className="relative group py-2"
                  onMouseEnter={() => {
                    if (item.hasMega) setActiveMegaMenu(item.hasMega);
                    else setActiveMegaMenu(null);
                  }}
                >
                  <button
                    onClick={() => {
                      navigateTo(item.page);
                      setActiveMegaMenu(null);
                    }}
                    className={`flex items-center space-x-1 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                      activePageView === item.page
                        ? 'text-[#F5D77A] font-semibold'
                        : 'text-[#F6F1E7]/80 hover:text-[#F5D77A]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasMega && (
                      <ChevronDown className="w-3.5 h-3.5 text-[#A8A18F] group-hover:text-[#F5D77A] transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </button>

                  {/* Active indicator dot */}
                  {activePageView === item.page && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F5D77A] shadow-[0_0_8px_#F5D77A]" />
                  )}
                </div>
              ))}
            </nav>

            {/* Right Action Icons (Search, Wishlist, Cart) */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-[#F6F1E7]/90 hover:text-[#F5D77A] transition-colors focus:outline-none relative"
                aria-label="Search collection"
                title="Search collection"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="p-2 text-[#F6F1E7]/90 hover:text-[#F5D77A] transition-colors focus:outline-none relative"
                aria-label="View saved pieces"
                title="View saved pieces"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#B8860B] text-black text-[10px] font-bold rounded-full flex items-center justify-center border border-black shadow-[0_0_6px_#D4AF37]">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Bag Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-[#F6F1E7]/90 hover:text-[#F5D77A] transition-colors focus:outline-none relative"
                aria-label="View shopping bag"
                title="View shopping bag"
              >
                <ShoppingBag className="w-5 h-5 text-[#F5D77A]" />
                {cartTotalCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-r from-[#B8860B] to-[#F5D77A] text-black text-[10px] font-bold rounded-full flex items-center justify-center border border-black">
                    {cartTotalCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP MEGA MENUS ── */}
        {activeMegaMenu === 'jewellery' && (
          <div
            onMouseLeave={() => setActiveMegaMenu(null)}
            className="hidden lg:block absolute top-full left-0 w-full bg-[#141412] border-b border-[#D4AF37]/30 shadow-[0_25px_50px_rgba(0,0,0,0.85)] py-8 transition-all animate-[fadeIn_0.2s_ease-out]"
          >
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8">
              <div className="col-span-3 border-r border-[#D4AF37]/15 pr-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold block mb-2">
                  Haute Joaillerie
                </span>
                <h3 className="font-serif text-2xl text-white font-bold leading-tight mb-2">
                  The Royal Vault
                </h3>
                <p className="text-xs text-[#A8A18F] leading-relaxed mb-4">
                  Every jewel is handcrafted in certified 22K or 18K gold, celebrating royal heritage and timeless elegance.
                </p>
                <button
                  onClick={() => {
                    navigateTo('jewellery');
                    setActiveMegaMenu(null);
                  }}
                  className="flex items-center text-xs uppercase tracking-[0.2em] text-[#F5D77A] hover:text-white transition-colors group"
                >
                  <span>View All Jewellery</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Subcategories */}
              <div className="col-span-5 grid grid-cols-2 gap-4">
                {jewelleryCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => {
                      navigateTo('jewellery', cat.filter);
                      setActiveMegaMenu(null);
                    }}
                    className="text-left p-3 rounded-lg hover:bg-[#1A1A17] border border-transparent hover:border-[#D4AF37]/20 transition-all group"
                  >
                    <div className="text-sm font-medium text-[#F6F1E7] group-hover:text-[#F5D77A] transition-colors">
                      {cat.name}
                    </div>
                    <div className="text-[11px] text-[#A8A18F] mt-0.5">{cat.count}</div>
                  </button>
                ))}
              </div>

              {/* Featured Visual Spotlight */}
              <div className="col-span-4 pl-4">
                <div
                  onClick={() => {
                    navigateTo('jewellery', 'Necklaces');
                    setActiveMegaMenu(null);
                  }}
                  className="relative rounded-xl overflow-hidden aspect-[16/10] group cursor-pointer border border-[#D4AF37]/30 shadow-card-luxury"
                >
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80"
                    alt="The Empress Noor Choker"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#F5D77A]">Spotlight Edit</span>
                    <span className="font-serif text-lg text-white font-semibold">The Empress Noor Choker</span>
                    <span className="text-xs text-[#D4AF37] mt-0.5">Explore 22K Polki Suite &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeMegaMenu === 'home-essentials' && (
          <div
            onMouseLeave={() => setActiveMegaMenu(null)}
            className="hidden lg:block absolute top-full left-0 w-full bg-[#141412] border-b border-[#D4AF37]/30 shadow-[0_25px_50px_rgba(0,0,0,0.85)] py-8 transition-all animate-[fadeIn_0.2s_ease-out]"
          >
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8">
              <div className="col-span-3 border-r border-[#D4AF37]/15 pr-6">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold block mb-2">
                  Artisanal Living
                </span>
                <h3 className="font-serif text-2xl text-white font-bold leading-tight mb-2">
                  Sanctuary of Light
                </h3>
                <p className="text-xs text-[#A8A18F] leading-relaxed mb-4">
                  Elevate everyday spaces with heavy solid brass urlis, Cambodian oud scents, and Spanish Nero Marquina marble.
                </p>
                <button
                  onClick={() => {
                    navigateTo('home-essentials');
                    setActiveMegaMenu(null);
                  }}
                  className="flex items-center text-xs uppercase tracking-[0.2em] text-[#F5D77A] hover:text-white transition-colors group"
                >
                  <span>Explore All Home Pieces</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Subcategories */}
              <div className="col-span-5 grid grid-cols-2 gap-4">
                {homeCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => {
                      navigateTo('home-essentials', cat.filter);
                      setActiveMegaMenu(null);
                    }}
                    className="text-left p-3 rounded-lg hover:bg-[#1A1A17] border border-transparent hover:border-[#D4AF37]/20 transition-all group"
                  >
                    <div className="text-sm font-medium text-[#F6F1E7] group-hover:text-[#F5D77A] transition-colors">
                      {cat.name}
                    </div>
                    <div className="text-[11px] text-[#A8A18F] mt-0.5">{cat.count}</div>
                  </button>
                ))}
              </div>

              {/* Featured Visual Spotlight */}
              <div className="col-span-4 pl-4">
                <div
                  onClick={() => {
                    navigateTo('home-essentials', 'Festive & Pooja Essentials');
                    setActiveMegaMenu(null);
                  }}
                  className="relative rounded-xl overflow-hidden aspect-[16/10] group cursor-pointer border border-[#D4AF37]/30 shadow-card-luxury"
                >
                  <img
                    src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=700&q=80"
                    alt="Mayura Golden Brass Urli"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-5">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#F5D77A]">Artisanal Brass</span>
                    <span className="font-serif text-lg text-white font-semibold">Mayura Brass Urli & Diya</span>
                    <span className="text-xs text-[#D4AF37] mt-0.5">Explore Festive Curation &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── MOBILE FULL-SCREEN MENU OVERLAY ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#111110] flex flex-col p-6 animate-[fadeIn_0.3s_ease-out] overflow-y-auto">
          {/* Top Bar with Logo and Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#D4AF37]/50 bg-black p-0.5">
                <img src="/eou-logo.png" alt="Ek Omkar Uniq" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-serif text-lg font-bold tracking-widest text-white">EK OMKAR</div>
                <div className="text-[8px] tracking-[0.35em] text-[#D4AF37]">U N I Q</div>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#A8A18F] hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Navigation Links with Staggered Visual Elegance */}
          <div className="flex flex-col space-y-5 my-8">
            {navLinks.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => {
                  navigateTo(item.page);
                  setMobileMenuOpen(false);
                }}
                className="text-left font-serif text-2xl font-light tracking-wider py-2 flex items-center justify-between border-b border-[#1A1A17] group"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span className={activePageView === item.page ? 'gold-text font-semibold' : 'text-[#F6F1E7]'}>
                  {item.name}
                </span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          {/* Popular Categories Shortcut */}
          <div className="my-4 pt-4 border-t border-[#D4AF37]/15">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold block mb-3">
              Featured Curation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => {
                  navigateTo('jewellery', 'Necklaces');
                  setMobileMenuOpen(false);
                }}
                className="text-left p-2.5 rounded bg-[#181815] text-[#A8A18F] hover:text-[#F5D77A]"
              >
                Royal Polki
              </button>
              <button
                onClick={() => {
                  navigateTo('jewellery', 'Rings');
                  setMobileMenuOpen(false);
                }}
                className="text-left p-2.5 rounded bg-[#181815] text-[#A8A18F] hover:text-[#F5D77A]"
              >
                Solitaires
              </button>
              <button
                onClick={() => {
                  navigateTo('home-essentials', 'Festive & Pooja Essentials');
                  setMobileMenuOpen(false);
                }}
                className="text-left p-2.5 rounded bg-[#181815] text-[#A8A18F] hover:text-[#F5D77A]"
              >
                Artisanal Urlis
              </button>
              <button
                onClick={() => {
                  navigateTo('home-essentials', 'Candles & Diffusers');
                  setMobileMenuOpen(false);
                }}
                className="text-left p-2.5 rounded bg-[#181815] text-[#A8A18F] hover:text-[#F5D77A]"
              >
                Oud Candles
              </button>
            </div>
          </div>

          {/* Concierge & Contact footer in mobile drawer */}
          <div className="mt-auto pt-6 border-t border-[#D4AF37]/20 text-xs text-[#A8A18F]">
            <p className="tracking-widest uppercase text-[10px] text-[#F5D77A] mb-1 font-semibold">
              Royal Concierge Desk
            </p>
            <p className="text-white">+91 98200 12345 | concierge@ekomkaruniq.com</p>
            <p className="text-[11px] text-[#A8A18F] mt-1">Heritage Boulevard, Flagship Salon</p>
          </div>
        </div>
      )}
    </>
  );
};
