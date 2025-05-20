/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        glass: "rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
}
