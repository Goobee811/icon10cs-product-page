/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#dbeeff',
          200: '#bddfff',
          300: '#8eccff',
          400: '#59b0ff',
          500: '#3b93ff',
          600: '#1f73f5',
          700: '#165ce2',
          800: '#1849b7',
          900: '#1b3f8f',
        },
        secondary: {
          50: '#f0fdf5',
          100: '#dcfce9',
          200: '#b9f5d6',
          300: '#84ebbc',
          400: '#4cd999',
          500: '#27be7a',
          600: '#1c9d63',
          700: '#197c4f',
          800: '#186242',
          900: '#155139',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};