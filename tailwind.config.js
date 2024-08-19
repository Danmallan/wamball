module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF8F0',
          100: '#FAF0DE',
          200: '#F4DEB0',
          300: '#EDCB82',
          400: '#E6B954',
          500: '#D09C2C',
          600: '#AF8225',
          700: '#8B6D3B',  // Dark gold (original)
          800: '#6A531D',
          900: '#483A15',
        },
        navy: {
          50: '#E6E7EB',
          100: '#C1C4D1',
          200: '#9A9FB6',
          300: '#737B9C',
          400: '#4C5682',
          500: '#2D3356',
          600: '#1E2344',
          700: '#141831',
          800: '#0A0F27',  // Deep Navy (original)
          900: '#05071A',
        },
        cream: {
          50: '#FEFCF9',
          100: '#FDF9F2',
          200: '#FBF3E5',
          300: '#F9EDD8',
          400: '#F7E7CB',
          500: '#F7EBD3',  // Cream (original)
          600: '#F0D9A9',
          700: '#E8C67F',
          800: '#E0B355',
          900: '#D8A02B',
        },
        burgundy: {
          50: '#F9E5EC',
          100: '#F0BFD1',
          200: '#E695B5',
          300: '#DB6A99',
          400: '#D1407D',
          500: '#A52F5E',
          600: '#8A2751',
          700: '#6D1E3D',  // Rich Burgundy (original)
          800: '#51162E',
          900: '#350E1E',
        },
      },
    },
  },
  plugins: [],
}