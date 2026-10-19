import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronDown, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { GoldSwoosh } from '../utils/formatters';

export const ContactPage: React.FC = () => {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Jewellery Commission',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast(
      'Message Received',
      'Our Senior Concierge will contact you within 4 business hours.',
      'gold'
    );
  };

  const faqs = [
    {
      q: 'How are Ek Omkar Uniq jewellery pieces certified for authenticity?',
      a: 'Every piece of jewellery is strictly 22K or 18K solid gold and bears the official Bureau of Indian Standards (BIS) Hallmark with laser-inscribed HUID. All solitaires and polki diamonds above 0.3ct include independent certification from IGI or GIA.',
    },
    {
      q: 'Can I commission a bespoke bridal suite or customize an existing design?',
      a: 'Yes, our atelier specializes in bespoke commissions. You may share reference concepts or schedule a private virtual consultation with our Head Jeweller to design a one-of-a-kind heirloom.',
    },
    {
      q: 'What is the shipping timeline and how is transit insured?',
      a: 'All orders are dispatched via armored logistics partners (such as Sequel Global & Blue Dart Apex) in tamper-evident security chests. Domestic delivery is typically completed within 2 to 4 business days. International insured shipments take 5 to 7 days.',
    },
    {
      q: 'What is the 7-day exchange and lifetime buyback policy?',
      a: 'We offer an unconditional 7-day doorstep exchange on all unworn items in their original security seal. Furthermore, every gold jewellery piece is eligible for our lifetime upgrade and buyback program based on prevailing gold market rates.',
    },
    {
      q: 'How should I care for my solid brass urlis and scented oud candles?',
      a: 'Our solid brass home essentials are coated with a protective lacquer to maintain their golden luster. Simply dust with a soft cotton cloth. For scented candles, trim the organic cotton wick to 5mm before each lighting and allow a full melt pool to form.',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
          <span>Atelier Concierge</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
          Contact Our Royal Concierge
        </h1>
        <div className="flex justify-center mb-4">
          <GoldSwoosh className="w-32 h-4" />
        </div>
        <p className="text-xs sm:text-sm text-[#A8A18F] font-light leading-relaxed">
          Whether you seek a bespoke wedding trousseau consultation, home styling advice, or order assistance, our senior connoisseurs are at your service.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-luxury border border-[#D4AF37]/30 shadow-card-luxury">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Dispatch a Royal Enquiry
          </h3>
          <p className="text-xs text-[#A8A18F] font-light mb-6">
            Kindly complete the details below. Our concierge team will reach out with utmost discretion.
          </p>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-black/60 border border-[#D4AF37]/40 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#F5D77A] mx-auto mb-3" />
              <h4 className="font-serif text-xl font-bold text-white mb-1">
                Enquiry Consecrated
              </h4>
              <p className="text-xs text-[#A8A18F] font-light">
                Thank you, {formData.name}. A senior client liaison will contact you via {formData.email} or WhatsApp shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maharani Gayatri Devi"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 12345"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                    Nature of Enquiry
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                  >
                    <option value="Jewellery Commission">Bespoke Jewellery Commission</option>
                    <option value="Home Sanctum Decor">Home Décor & Brass Consultation</option>
                    <option value="Wedding Trouseeau">Wedding / Festive Gifting (Bulk)</option>
                    <option value="Order Status">Order Status & Armored Transit</option>
                    <option value="Salon Appointment">Flagship Salon Appointment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#A8A18F] block mb-1">
                  Message / Special Requirements
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your preferred metals, gemstones, timeline, or styling..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-white text-xs focus:outline-none focus:border-[#F5D77A]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl btn-gold-shimmer text-black font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-2 shadow-gold-glow cursor-pointer"
              >
                <Send className="w-4 h-4 text-black" />
                <span>Submit to Senior Liaison</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Atelier Addresses & WhatsApp Direct */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="p-8 rounded-3xl bg-[#161614] border border-[#D4AF37]/25 space-y-6">
            <h4 className="font-serif text-xl font-bold text-white mb-2">
              Salons & Flagship Locations
            </h4>

            <div className="flex items-start space-x-3 text-xs text-[#A8A18F]">
              <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-serif text-sm">Mumbai Flagship Salon</strong>
                Suite 108, Heritage Boulevard, Kala Ghoda, Fort, Mumbai 400001
              </div>
            </div>

            <div className="flex items-start space-x-3 text-xs text-[#A8A18F]">
              <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-serif text-sm">New Delhi Heritage Suite</strong>
                42, The Grand Promenade, Chanakyapuri, New Delhi 110021
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs text-[#A8A18F]">
              <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <div>
                <strong className="text-white block">Salon Timings</strong>
                Monday to Saturday: 11:00 AM – 8:00 PM (By Private Appointment)
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs text-[#A8A18F]">
              <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <div>
                <strong className="text-white block">Concierge Hotline</strong>
                +91 98200 12345 / +91 22 2849 0000
              </div>
            </div>
          </div>

          {/* Instant WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0c2415] to-[#141412] border border-[#25D366]/40 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-black flex items-center justify-center">
                <MessageSquare className="w-5 h-5 fill-black" />
              </div>
              <div>
                <span className="font-serif font-bold text-white text-sm block">Instant WhatsApp Concierge</span>
                <span className="text-[11px] text-[#A8A18F]">Live chat with royal jewellery advisors</span>
              </div>
            </div>
            <a
              href="https://wa.me/919820012345?text=Namaste%20Ek%20Omkar%20Uniq,%20I%20would%20like%20to%20connect%20with%20a%20concierge."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#25D366] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#20b858] transition-colors"
            >
              Chat
            </a>
          </div>
        </div>
      </div>

      {/* ── LUXURY ACCORDION FAQS ── */}
      <div className="max-w-4xl mx-auto pt-10 border-t border-[#D4AF37]/25">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-1">
            Questions & Protocols
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Inquiries
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#161614] border border-[#D4AF37]/20 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-serif text-base sm:text-lg font-medium text-white hover:text-[#F5D77A] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[#A8A18F] font-light leading-relaxed border-t border-[#D4AF37]/10 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
