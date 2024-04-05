/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#EE9AE5',
        blue: '#010851',
        purple: '#9A7AF1',
        grey: '#707070',
      },
    },
  },
  plugins: [],
};
