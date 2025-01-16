/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      rotate: {
        '-7': '-7deg',
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
};
