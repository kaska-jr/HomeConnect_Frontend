/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        homeOrange: "#FF7E00",
        homeGray: "#9DA1A8",
        homeAgentBg: "#F4F5F5",
        homeBlue: "#0B2749",
        homeLightBlue: "#4959EE",
        homeBlue2: "#0D99FF",
        primary: "#0B2749",
      },
    },
  },
  plugins: [],
};
