import React from 'react';
import { useCart } from '../context/CartContext';
import { GoldSwoosh, InstagramIcon } from '../utils/formatters';
import { Phone, Mail, MapPin, ShieldCheck, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useCart();

  return (
    <footer className="bg-[#0c0c0b] border-t border-[#D4AF37]/25 text-[#A8A18F] pt-16 pb-28 lg:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#D4AF37]/15">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-3 cursor-pointer group mb-4"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#D4AF37]/50 bg-black p-0.5 group-hover:border-[#F5D77A] transition-colors">
                <img src="/eou-logo.png" alt="Ek Omkar Uniq" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl font-bold tracking-[0.18em] text-white group-hover:text-[#F5D77A] transition-colors">
                  EK OMKAR
                </span>
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] font-medium">
                  U N I Q
                </span>
              </div>
            </div>

            <GoldSwoosh className="w-32 h-3 mb-4" />

            <p className="text-xs text-[#A8A18F] font-light leading-relaxed max-w-sm mb-6">
              A luxury house founded on the sacred geometry of timeless beauty. Master handcrafted 22K/18K jewellery and artisanal home sanctum essentials for those who cherish royal heritage.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#181815] border border-[#D4AF37]/30 hover:border-[#F5D77A] text-[#F6F1E7] hover:text-[#F5D77A] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919820012345"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#181815] border border-[#D4AF37]/30 hover:border-[#F5D77A] text-[#F6F1E7] hover:text-[#F5D77A] flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:concierge@ekomkaruniq.com"
                className="w-9 h-9 rounded-full bg-[#181815] border border-[#D4AF37]/30 hover:border-[#F5D77A] text-[#F6F1E7] hover:text-[#F5D77A] flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Jewellery Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold text-[#F6F1E7] uppercase tracking-[0.2em] mb-4">
              Haute Joaillerie
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <button
                  onClick={() => navigateTo('jewellery', 'Necklaces')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Polki Chokers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('jewellery', 'Earrings')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Royal Jhumkas
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('jewellery', 'Rings')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Solitaire Signets
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('jewellery', 'Bangles')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Solid Gold Kadas
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('jewellery', 'Bracelets')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Diamond Tennis Lines
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('jewellery', 'Sets')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Bridal Suites
                </button>
              </li>
            </ul>
          </div>

          {/* Home Essentials Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-[#F6F1E7] uppercase tracking-[0.2em] mb-4">
              Home Essentials
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <button
                  onClick={() => navigateTo('home-essentials', 'Festive & Pooja Essentials')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Artisanal Brass Urlis & Diyas
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home-essentials', 'Candles & Diffusers')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Cambodian Oud Candles
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home-essentials', 'Serveware')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Nero Marquina Serveware
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home-essentials', 'Wall Art')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Bespoke Wall Sconces
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home-essentials', 'Gifting')}
                  className="hover:text-[#F5D77A] transition-colors"
                >
                  Italian Leather Valet Trunks
                </button>
              </li>
            </ul>
          </div>

          {/* Atelier Concierge Column */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-[#F6F1E7] uppercase tracking-[0.2em] mb-4">
              The Flagship Atelier
            </h4>
            <div className="space-y-3 text-xs font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Suite 108, Heritage Boulevard, Kala Ghoda, Mumbai 400001</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>+91 98200 12345 (Concierge Desk)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>concierge@ekomkaruniq.com</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#D4AF37]/15 flex items-center space-x-4 text-[11px]">
              <div className="flex items-center space-x-1.5 text-[#F5D77A]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>BIS Hallmarked</span>
              </div>
              <div className="flex items-center space-x-1.5 text-[#F5D77A]">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>IGI Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Security */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-light space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-[#A8A18F]">
            <span>&copy; {new Date().getFullYear()} EK OMKAR UNIQ (EOU). All Royal Rights Reserved.</span>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-wider text-[#A8A18F] mr-2">Encrypted Checkout:</span>
            <span className="px-2 py-0.5 rounded bg-[#181815] border border-[#D4AF37]/20 text-[10px] text-white">UPI</span>
            <span className="px-2 py-0.5 rounded bg-[#181815] border border-[#D4AF37]/20 text-[10px] text-white">Visa</span>
            <span className="px-2 py-0.5 rounded bg-[#181815] border border-[#D4AF37]/20 text-[10px] text-white">MasterCard</span>
            <span className="px-2 py-0.5 rounded bg-[#181815] border border-[#D4AF37]/20 text-[10px] text-white">Amex</span>
            <span className="px-2 py-0.5 rounded bg-[#181815] border border-[#D4AF37]/20 text-[10px] text-white">NetBanking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
