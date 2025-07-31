import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: '#A7C7E7',
        pastelPink: '#F7C1D9',
        pastelYellow: '#FFF6B7',
        cartoonBlack: '#22223B',
        cartoonWhite: '#F8F8FF',
      },
      borderRadius: {
        cartoon: '2rem',
      },
      fontFamily: {
        cartoon: [
          'Comic Neue',
          'var(--font-cartoon)',
          'cursive',
          'sans-serif',
        ],
      },
      boxShadow: {
        cartoon: '0 4px 24px 0 rgba(0,0,0,0.10)',
      },
      keyframes: {
        bouncey: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        bouncey: 'bouncey 1.2s infinite',
        fadeIn: 'fadeIn 0.7s ease-in',
        fadeOut: 'fadeOut 0.7s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
