/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors :{
        'BrandCol' :'#FF6500',
        'NonBrand' :'#A594F9'
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        center: true,
      },
      fontFamily:{
        "Capital" :["Ga Maamli", 'sans-serif'],
        "SmallFont":["Yuji Mai", 'serif'],
        "Logofont" :["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
}