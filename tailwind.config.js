/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'victor': "url('/src/assets/two.jpg')",
      }
    },
  },
  plugins: [],
};
