export default {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        kraft: {
          50: '#FBF5E7',
          100: '#F4EAD2',
          200: '#E9DAB6',
          300: '#DBC493',
          400: '#C7A970',
        },
        ink: '#241C16',
        barn: '#9E3B26',
        rust: '#C4632F',
        mustard: '#E3A72F',
        moss: '#6E8B4B',
        denim: '#35566B',
        dusk: {
          900: '#121A22',
          800: '#1B2530',
          700: '#26333F',
          600: '#33434F',
        },
      },
      fontFamily: {
        display: ['Rye', 'serif'],
        type: ['"Special Elite"', 'monospace'],
        body: ['Bitter', 'Georgia', 'serif'],
      },
      boxShadow: {
        sign: '4px 6px 0 rgba(36,28,22,0.28)',
        peg: '0 6px 14px rgba(36,28,22,0.25)',
      },
    },
  },
  plugins: [],
}
