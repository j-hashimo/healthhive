/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg-color': '#183454',
        'webmd-bg-color': '#C6CEDB',
      },
    },
  },
  plugins: [],
}
