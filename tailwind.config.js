/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B3478',
          50: '#E8EDF5',
          100: '#C5D0E6',
          200: '#9BAFD3',
          300: '#718EBF',
          400: '#4A73B0',
          500: '#2F6FD6',
          600: '#0B3478',
          700: '#092B63',
          800: '#07224E',
          900: '#051939',
        },
        accent: {
          DEFAULT: '#FF7A00',
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA026',
          500: '#FF7A00',
          600: '#E56A00',
          700: '#CC5B00',
          800: '#B34B00',
          900: '#993C00',
        },
        surface: {
          DEFAULT: '#F7F8FA',
          dark: '#2E3440',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
