/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "980px",
      xl: "1440px",
      maxsm: { max: "479px" },
      maxxs1: { max: "320px" },
      maxxs2: { max: "375px" },
      maxxs3: { max: "425px" },
      minxs: { min: "320px" },
      minxs2: { min: "375px" },
      minsm: { min: "425px" },
    },
    extend: {
      backgroundImage: {
        brainPic: "url('/brainBackground.jpg')",
      },
      colors: {
        grayBackground: "#333333",
      },
    },
  },
  plugins: [],
};
