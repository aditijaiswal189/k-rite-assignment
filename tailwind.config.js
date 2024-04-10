/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: "23fr, 22fr, 12fr, 13fr, 13fr, 12fr, 5fr",
      },
    },
  },
  plugins: [],
};
