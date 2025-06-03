// import type { Config } from "tailwindcss";
// import typography from "@tailwindcss/typography";
// // import aspectRatio from '@tailwindcss/aspect-ratio'

// const config: Config = {
//   theme: {
//     extend: {},
//   },
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   plugins: [typography],
// };

// export default config;

/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
