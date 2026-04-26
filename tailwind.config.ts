import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 旧 brand/accent はコンパクトに残置（互換用）
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
        // ★ 新 ポップ・コミカル パレット
        pop: {
          red: '#E81E2C',       // 年収重視派の主色
          'red-dark': '#B5121F',
          blue: '#1F4FE5',      // 働き方重視派の主色
          'blue-dark': '#0F2F9C',
          yellow: '#FFD400',    // ハイライト・スタンプ
          'yellow-dark': '#E6A800',
          cream: '#FFF7E1',
          paper: '#FFFBF1',
          ink: '#1A1A1A',
          'ink-soft': '#2B2B2B'
        },
        cream: '#F8F2EA',
        offwhite: '#FCFAF7',
        ink: '#102033',
        muted: '#6B7280'
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'system-ui', 'sans-serif'],
        display: ['var(--font-zen)', 'var(--font-noto)', 'sans-serif'],
        pop: ['var(--font-pop)', 'var(--font-zen)', 'sans-serif'],
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
        },
        wobble: {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        jiggle: {
          '0%,100%': { transform: 'scale(1) rotate(-2deg)' },
          '50%': { transform: 'scale(1.05) rotate(2deg)' }
        },
        'pop-in': {
          '0%': { transform: 'scale(0) rotate(-12deg)', opacity: '0' },
          '70%': { transform: 'scale(1.12) rotate(4deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0)', opacity: '1' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'bounce-pop': {
          '0%,100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-6px)' }
        },
        sparkle: {
          '0%,100%': { transform: 'scale(0.7) rotate(0deg)', opacity: '0.4' },
          '50%': { transform: 'scale(1.1) rotate(180deg)', opacity: '1' }
        }
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        floaty: 'floaty 4s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
        wobble: 'wobble 1.6s ease-in-out infinite',
        jiggle: 'jiggle 0.9s ease-in-out infinite',
        'pop-in': 'pop-in 0.55s cubic-bezier(0.34,1.56,0.64,1) both',
        'spin-slow': 'spin-slow 14s linear infinite',
        'bounce-pop': 'bounce-pop 1.4s ease-in-out infinite',
        sparkle: 'sparkle 1.8s ease-in-out infinite'
      },
      boxShadow: {
        soft: '0 1px 0 rgba(11,42,74,0.04), 0 8px 24px -16px rgba(11,42,74,0.20)',
        warm: '0 1px 0 rgba(217,93,53,0.10), 0 10px 28px -16px rgba(217,93,53,0.40)',
        card: '0 1px 0 rgba(11,42,74,0.04)',
        // ★ コミカル用 マンガ風の太い影
        comic: '4px 4px 0 0 #1A1A1A',
        'comic-lg': '6px 6px 0 0 #1A1A1A',
        'comic-red': '4px 4px 0 0 #E81E2C',
        'comic-blue': '4px 4px 0 0 #1F4FE5',
        none: 'none'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      rotate: {
        '-1': '-1deg',
        '-2': '-2deg',
        '-3': '-3deg',
        '-4': '-4deg'
      }
    }
  },
  plugins: []
};
export default config;
