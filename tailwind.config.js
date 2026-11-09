/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          midnight: '#07111F',
          navy: '#0B1F3A',
          cobalt: '#1264FF',
          cyan: '#19C3FF',
          softWhite: '#F5F8FC',
          darkText: '#111827',
          amber: '#F5A623',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        md: '0.375rem',
      },
      boxShadow: {
        'premium': '0 20px 50px -12px rgba(7, 17, 31, 0.12)',
        'premium-dark': '0 24px 60px -12px rgba(0, 0, 0, 0.45)',
        'glow-cobalt': '0 0 32px -4px rgba(18, 100, 255, 0.45)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        'route-dash': {
          '0%': { strokeDashoffset: '240' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'route-dash': 'route-dash 8s linear infinite',
      },
    },
  },
  plugins: [],
};
