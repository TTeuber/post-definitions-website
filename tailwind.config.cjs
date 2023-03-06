/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blue': {
          DEFAULT: '#255A77',
          50: '#BBD9EA',
          100: '#ACD1E5',
          200: '#8DC0DB',
          300: '#6DAED2',
          400: '#4E9DC8',
          500: '#3889B5',
          600: '#2F7296',
          700: '#255A77',
          800: '#1B4258',
          900: '#122B39'
        },
        'orange': {
          DEFAULT: '#BC4D33',
          50: '#ECC4BA',
          100: '#E8B6AA',
          200: '#DF9A8A',
          300: '#D77F6A',
          400: '#CE634A',
          500: '#BC4D33',
          600: '#9C402A',
          700: '#7C3322',
          800: '#5C2619',
          900: '#3C1810'
        },
        'gold': {
          DEFAULT: '#BC7D33',
          50: '#ECD5BA',
          100: '#E8CCAA',
          200: '#DFB88A',
          300: '#D7A56A',
          400: '#CE914A',
          500: '#BC7D33',
          600: '#9C682A',
          700: '#7C5222',
          800: '#5C3D19',
          900: '#3C2810'
        },
        'yellow': {
          DEFAULT: '#BC9833',
          50: '#ECDFBA',
          100: '#E8D8AA',
          200: '#DFC98A',
          300: '#D7BA6A',
          400: '#CEAB4A',
          500: '#BC9833',
          600: '#9C7E2A',
          700: '#7C6422',
          800: '#5C4A19',
          900: '#3C3010'
        },
      }
    },
  },
  plugins: [],
};

module.exports = config;
