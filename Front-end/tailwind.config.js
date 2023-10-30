/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      width: {
        W80: "80rem",
        W55: "55rem",
        W60: "60rem",
      }
    ,
    height: {
      H45: "45rem",
    
    }
    },
  },
  plugins: [],
};
