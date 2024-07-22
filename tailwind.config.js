/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#CDD5E0',
        gray: '#4A5567',
        darkgray: '#364153',
        grayblue: '#20293A',
        blue: '#3662E3',
        darkblue: '#1D1B48',
        midnight: '#111729',
      },
    },
  },
  plugins: [],
};
