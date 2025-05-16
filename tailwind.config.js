/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
import tailwindPlugin from "@tailwindcss/typography";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        title: ["49px", { lineHeight: "120%", letterSpacing: "0%" }],

        h1: ["35px", { lineHeight: "120%", letterSpacing: "-0.04em" }],

        h2: ["28px", { lineHeight: "120%", letterSpacing: "-0.04em" }],

        body: ["20px", { lineHeight: "120%", letterSpacing: "-0.04em" }],

        button: ["16px", { lineHeight: "120%", letterSpacing: "-0.04em" }],

        link: ["14px", { lineHeight: "120%", letterSpacing: "-0.04em" }],

        caption1: ["13px", { lineHeight: "120%", letterSpacing: "-0.04em" }],

        caption2: ["13px", { lineHeight: "120%", letterSpacing: "-0.04em" }],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      colors: {
        primary: {
          base: "#7B0A25",
          background: "#E4CED3",
          border: "#D2AD86",
          hover: "#64081E",
          pressed: "#500618",
        },
        secondary: {
          base: "#160207",
          background: "#3C2C30",
          border: "#635659",
          hover: "#8A8083",
          pressed: "#81AAAC",
        },
        neutral: {
          pressedGray: "#D0CCCD",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [tailwindPlugin],
};
