/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg-color': '#183454',
        'webmd-bg-color': '#f9f9fc',
        'button-color': '#0878bf',
      },
      width: {
        '22': '93px',
        '90': '360px',
      }
    },
  },
  plugins: [],
}
