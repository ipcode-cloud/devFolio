/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #763CAC 2%,#320F85 20%, transparent 70%)',
        'custom-radial-card1': 'radial-gradient(#130428 2%,#251043 10%,#38126 2%,#261045 2%,#190634 2%,  transparent 70%)',
      },
    },
  },
  plugins: [],
}

