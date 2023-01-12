/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstColorSecond: "#6e57e0",
        titleColor: "hsl(250, 8%, 95%)",
        textColor: "#bcbac4",
        inputColor: "hsl(250, 29%, 16%)",
        bodyColor: "hsl(250, 28%, 12%)",
        containerColor: "hsl(250, 29%, 16%)",
        /* color: white; */
        scrollBarColor: "hsl(250, 12%, 48%)",
        scrollThumbColor: "hsl(250, 12%, 36%)",
      },
    },
  },
  plugins: [],
};
