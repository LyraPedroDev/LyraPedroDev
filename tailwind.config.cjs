/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyber: {
          dark: '#090A0F',
          card: 'rgba(15, 17, 26, 0.65)',
          purple: '#7C3AED',
          blue: '#06B6D4',
          glow: 'rgba(124, 58, 237, 0.15)',
          pink: '#FF006E',
          cyan: '#00D9FF',
          yellow: '#FFB600',
        },
      },
    },
  },
  plugins: [],
};
