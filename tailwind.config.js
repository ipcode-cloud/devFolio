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
        'custom-radial1': 'radial-gradient(circle, #763CAC 2%,#320F85 40%, transparent 60%)',
      },
    },
  },
  plugins: [],
}

