/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richBlack: '#111110',
        charcoal: '#1A1A17',
        cardBg: '#181815',
        primaryGold: '#D4AF37',
        lightGold: '#F5D77A',
        antiqueGold: '#B8860B',
        softIvory: '#F6F1E7',
        warmGrey: '#A8A18F',
        darkMuted: '#242420',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B8860B 0%, #F5D77A 50%, #D4AF37 75%, #B8860B 100%)',
        'gold-gradient-horizontal': 'linear-gradient(90deg, #B8860B 0%, #F5D77A 50%, #D4AF37 100%)',
        'gold-sheen': 'linear-gradient(105deg, transparent 20%, rgba(245, 215, 122, 0.4) 50%, transparent 80%)',
        'dark-vignette': 'radial-gradient(circle at center, rgba(26,26,23,0.6) 0%, rgba(17,17,16,0.98) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 45px -5px rgba(245, 215, 122, 0.45)',
        'gold-border': '0 0 0 1px rgba(212, 175, 55, 0.3)',
        'card-luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(212, 175, 55, 0.15)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
