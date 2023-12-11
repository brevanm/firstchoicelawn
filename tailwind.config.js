/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import taos from "taos/plugin";
import flowbite from "flowbite/plugin";

export default {
  relative: true,
  transform: (content) => content.replace(/taos:/g, ""),
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "fcll-green": "#54784A",
      },
    },
  },
  plugins: [taos, flowbite],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
