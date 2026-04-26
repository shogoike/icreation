import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF1F5',
          100: '#D3DAE3',
          200: '#9BA9BC',
          300: '#5C7191',
          400: '#28466A',
          500: '#0B2A4A',
          600: '#091F38',
          700: '#071C33',
          800: '#040F1D'
        },
        accent: {
          100: '#FBE4DA',
          200: '#F4C0AB',
          300: '#EE9D7E',
          400: '#EC8862',
          500: '#E96F45',
          600: '#D95D35',
          700: '#A8442A'
        },
        cream: '#F8F2EA',
        offwhite: '#FCFAF7',
        ink: '#102033',
        muted: '#6B7280'
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'system-ui', 'sans-serif'],
        display: ['var(--font-zen)', 'var(--font-noto)', 'sans-serif'],
        mincho: ['var(--font-mincho)', 'serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif']
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        floaty: 'floaty 4s ease-in-out infinite',
        shine: 'shine 3s linear infinite'
      },
      boxShadow: {
        soft: '0 1px 0 rgba(11,42,74,0.04), 0 8px 24px -16px rgba(11,42,74,0.20)',
        warm: '0 1px 0 rgba(217,93,53,0.10), 0 10px 28px -16px rgba(217,93,53,0.40)',
        card: '0 1px 0 rgba(11,42,74,0.04)',
        none: 'none'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};
export default config;
