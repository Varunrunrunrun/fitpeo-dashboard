/** @type {import('tailwindcss').Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141316",
        secondary: "#1F2029",
        success: "#1A5047",
        error: "#583139",
      },
    },
  },
  plugins: [],
};
