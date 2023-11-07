/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      1500: "1500px",
      1500: "1400px",
      1300: "1300px",
      1200: "1200px",
      1100: "1100px",
      1000: "1000px",
      900: "900px",
      800: "800px",
      770: "770px",
      700: "700px",
      600: "600px",
      500: "500px",
      400: "400px",
      300: "300px",
    },
    boxShadow: {
      boxShadowHome: "0 0px 12px  hsl(158, 98%, 43%)",
      boxShadowHeader: "0 0px 5px  rgba(255,255,255,.5)",
    },
    extend: {
      colors: {
        firstColor: "hsl(219, 69%, 56%)",
        firstColorAlt: "hsl(219, 69%, 52%)",
        titleColor: "hsl(219, 8%, 95%)",
        textColor: "hsl(219, 8%, 75%)",
        textColorLight: "hsl(219, 4%, 55%)",
        whiteColor: "#fff",
        bodyColor: "hsl(219, 4%, 4%)",
        containerColor: "hsl(219, 4%, 7%)",
        navList: "hsla(0, 0%, 100%,.1)",
        btnHome: "hsl(158, 89%, 30%)",
      },
    },
    fontFamily: {
      bodyFont: ["Exo", "sans-serif"],
    },
    keyframes: {
      shadow: {
        "0% ": { boxShadowHome: "0 0px 12px  hsl(158, 98%, 43%)" },
        "50%": { boxShadowHome: "0 0px  24px  hsl(158, 98%, 43%)" },
      },
    },
    animation: {
      shadows: "shadow 1s liner ease-in-out infinite",
    },
  },
  plugins: [],
};
