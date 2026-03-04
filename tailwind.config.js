/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00FFFF',
          magenta: '#FF00FF',
          amber: '#FFC107',
        },
      },
      spacing: {
        '18': '4.5rem',
        '36': '9rem',
        '72': '18rem',
      },
      animation: {
        breathe: 'breathe 3s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};