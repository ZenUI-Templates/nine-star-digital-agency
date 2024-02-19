/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandColor: "#ec6528",
        textColor: "#343a40"
      },
    },
  },
  plugins: [],
}