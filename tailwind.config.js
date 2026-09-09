/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14171F',
        paper: '#FAFAF8',
        indigo: {
          50: '#EEEDFC',
          100: '#DAD7F8',
          400: '#5B4FE0',
          500: '#4338CA',
          600: '#3730A9',
          700: '#2B2585',
        },
        violet: {
          400: '#8B76FF',
          500: '#7C5CFC',
        },
        amber: {
          400: '#F5A623',
          500: '#E0921A',
        },
        slate: {
          50: '#F7F7F9',
          100: '#EEEEF2',
          200: '#E1E1E8',
          300: '#C7C7D3',
          400: '#9797A8',
          500: '#6C6C7E',
          600: '#4D4D5C',
          700: '#33333F',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20,23,31,0.04), 0 8px 24px rgba(20,23,31,0.06)',
        card: '0 1px 2px rgba(20,23,31,0.04), 0 4px 12px rgba(20,23,31,0.05)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
