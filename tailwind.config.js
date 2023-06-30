/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      screens: {
        // mobile: "600px",
        tablet: "900px",
        desktop: "1400px",
      },
    },
  },
  plugins: [],
}

