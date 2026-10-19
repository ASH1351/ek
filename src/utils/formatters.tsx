import React from 'react';

export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const GoldSwoosh: React.FC<{ className?: string }> = ({ className = 'w-24 h-3' }) => {
  return (
    <svg
      viewBox="0 0 160 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M2 12C35 4 70 3 100 8C125 12 145 15 158 5C140 16 110 18 80 14C45 9 20 15 2 12Z"
        fill="url(#swoosh-gold-grad)"
      />
      <defs>
        <linearGradient id="swoosh-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="40%" stopColor="#F5D77A" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};
