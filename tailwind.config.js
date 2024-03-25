/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#524A4E",
        primary2: "#FF5C8D",
        primary3: "#FDEFF4",
        primary4: "#F4EEA9",
      },
    },
  },
  plugins: [],
};
