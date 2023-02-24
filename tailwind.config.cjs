/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'Inter': ['Inter']
      },
      colors: {
        'red': '#F55A5A',
        'purple': '#2B283A',
        'gray': '#9B998E',
        'divider': '#F5F5F5',
        'white': '#FFFFFF'
      }
    },
  },
  plugins: [],
}
