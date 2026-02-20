/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Paths to your project's source files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#9333EA",
        tomato: "#FF6347", // Adding tomato color
        white: "#FFFFFF",
        black: "#000000",
        yellow: "#C79F00",
        red: "#DC0404",
        background: {
          light: "#F9FAFB", // light background color
          gray100: "#EEEEEE", // lighter gray
          dark: "#1F2937", // dark background color
          danger: "#DC0404", //red background
          gold: "#C79F00", // golden yellow background
          yellow_shade: "#846900BA", // shades of yellow
          footer_black: "#3C3E3E",
        },
      },
      fontFamily: {
        school: ["schoolbook", "sans-serif"],
        body: ["inter", "sans-serif"], // Using inter font for body text
        heading: ["lato", "sans-serif"], // Using lato font for heading text and sub heading
      },
      spacing: {
        128: "32rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: "1.875rem", // Default for phones
              "@screen sm": { fontSize: "2.25rem" }, // Tablets
              "@screen md": { fontSize: "3rem" }, // Desktops
            },
            h2: {
              fontSize: "1.5rem",
              "@screen sm": { fontSize: "2rem" },
              "@screen md": { fontSize: "2.5rem" },
            },
            h3: {
              fontSize: "1.25rem",
              "@screen sm": { fontSize: "1.75rem" },
              "@screen md": { fontSize: "2rem" },
            },
            h4: {
              fontSize: "1.125rem",
              "@screen sm": { fontSize: "1.5rem" },
              "@screen md": { fontSize: "1.75rem" },
            },
            h5: {
              fontSize: "1rem",
              "@screen sm": { fontSize: "1.25rem" },
              "@screen md": { fontSize: "1.5rem" },
            },
            h6: {
              fontSize: "0.875rem",
              "@screen sm": { fontSize: "1rem" },
              "@screen md": { fontSize: "1.25rem" },
            },
            p: {
              fontSize: "0.875rem", // Default paragraph size
              "@screen sm": { fontSize: "1rem" },
              "@screen md": { fontSize: "1.125rem" },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"), // Adding DaisyUI plugin
  ],
  daisyui: {
    themes: ["light", "dark"], // DaisyUI themes
  },
};
