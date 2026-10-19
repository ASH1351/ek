import React from 'react';
import { Crown, Sparkles, Gift, ShieldCheck, RefreshCw } from 'lucide-react';
import { GoldSwoosh } from '../utils/formatters';

export const BrandDifference: React.FC = () => {
  const pillars = [
    {
      icon: Crown,
      title: 'Hallmarked 22K & 18K',
      description: 'Certified purity with government BIS hallmark and individual gemological certificates.',
    },
    {
      icon: Sparkles,
      title: 'Handcrafted Heritage',
      description: 'Generational artisans dedicating 60+ hours per piece using royal lost-wax & polki techniques.',
    },
    {
      icon: Gift,
      title: 'Velvet Jewel Packaging',
      description: 'Presented in bespoke midnight-black suede chests with wax stamp seals and satin ribbons.',
    },
    {
      icon: ShieldCheck,
      title: '100% Insured Transit',
      description: 'Every domestic and global order is dispatched via armored, fully insured door-to-door courier.',
    },
    {
      icon: RefreshCw,
      title: '7-Day Concierge Exchange',
      description: 'Effortless door-to-door exchange assistance with complimentary pick-up and lifetime buyback.',
    },
  ];

  return (
    <section className="py-16 bg-[#161614] border-y border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold block mb-1">
            Uncompromising Standards
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            The EOU Difference
          </h2>
          <div className="flex justify-center mt-2">
            <GoldSwoosh className="w-28 h-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[#1A1A17] transition-all duration-300 border border-transparent hover:border-[#D4AF37]/20 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#F5D77A] mb-4 group-hover:border-[#F5D77A] group-hover:shadow-gold-glow transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#F5D77A] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#A8A18F] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
