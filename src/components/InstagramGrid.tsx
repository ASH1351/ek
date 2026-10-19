import React from 'react';
import { INSTAGRAM_POSTS } from '../data/products';
import { InstagramIcon } from '../utils/formatters';
import { Heart } from 'lucide-react';

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold mb-2">
          <InstagramIcon className="w-3.5 h-3.5 text-[#F5D77A]" />
          <span>The Royal Social Ledger</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Curated Moments with @EkOmkarUniq
        </h2>
        <p className="text-xs sm:text-sm text-[#A8A18F] mt-2 font-light">
          Follow our visual journey of royal heritage, atelier craftsmanship, and atmospheric home sanctums.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {INSTAGRAM_POSTS.map((post) => (
          <a
            key={post.id}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden aspect-square border border-[#D4AF37]/20 hover:border-[#F5D77A] transition-all duration-300 block bg-black"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-center">
              <div className="flex justify-end">
                <InstagramIcon className="w-4 h-4 text-[#F5D77A]" />
              </div>
              <div>
                <p className="text-[10px] text-white line-clamp-3 leading-snug font-light">
                  {post.caption}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-1.5 text-[#F5D77A] text-[10px]">
                <Heart className="w-3 h-3 fill-[#F5D77A]" />
                <span>{post.likes}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
