import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Mail, Sparkles, Check } from 'lucide-react';
import { GoldSwoosh } from '../utils/formatters';

export const Newsletter: React.FC = () => {
  const { showToast } = useCart();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Invalid Email', 'Please provide a valid royal email address.', 'info');
      return;
    }
    setIsSubscribed(true);
    showToast(
      'Welcome to the Circle',
      'You are now enrolled in the Ek Omkar Uniq Connoisseurs Circle.',
      'gold'
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden glass-luxury border border-[#D4AF37]/35 p-8 sm:p-14 text-center shadow-card-luxury">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#F5D77A]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D77A]" />
            <span>Private Invitations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Join the Connoisseurs Circle
          </h2>

          <div className="flex justify-center mb-4">
            <GoldSwoosh className="w-28 h-3" />
          </div>

          <p className="text-xs sm:text-sm text-[#A8A18F] font-light leading-relaxed mb-8">
            Receive private vault previews, invitations to secret seasonal trunk shows, and bespoke complimentary gold cleaning privileges directly to your inbox.
          </p>

          {isSubscribed ? (
            <div className="p-4 rounded-xl bg-black/60 border border-[#D4AF37]/50 inline-flex items-center space-x-3 text-[#F5D77A]">
              <Check className="w-5 h-5 text-[#F5D77A]" />
              <span className="text-xs tracking-wider uppercase font-semibold">
                Privilege Enrolled. Check your inbox for your inaugural dispatch.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your private email..."
                  className="w-full px-5 py-3.5 pl-11 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-white placeholder-[#A8A18F]/60 text-xs tracking-wide focus:outline-none focus:border-[#F5D77A] focus:ring-1 focus:ring-[#F5D77A]/50 transition-all"
                  required
                />
                <Mail className="w-4 h-4 text-[#D4AF37] absolute left-4 top-1/2 -translate-y-1/2" />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl btn-gold-shimmer text-black font-semibold text-xs uppercase tracking-[0.2em] whitespace-nowrap shadow-gold-glow cursor-pointer"
              >
                Enroll
              </button>
            </form>
          )}

          <p className="text-[10px] text-[#A8A18F]/70 tracking-wider uppercase mt-4">
            We honor privacy with discretion. Zero spam. Unsubscribe at any moment.
          </p>
        </div>
      </div>
    </section>
  );
};
