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
    },
    extend: {
      backgroundImage: {
        brainPic: "url('/brainBackground.jpg')",
      },
      colors: {
        grayBackground: "hsl(0, 0%, 20%)",
      },
    },
  },
  plugins: [],
};
