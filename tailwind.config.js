/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        python: {
          blue: '#3776AB',
          yellow: '#FFD43B',
        },
      },
      backgroundImage: {
        'python-gradient': 'linear-gradient(90deg, #3776AB, #FFD43B)',
      },
    },
  },
  plugins: [],
}