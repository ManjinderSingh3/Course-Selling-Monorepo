// import type { Config } from "tailwindcss";
// import sharedConfig from '@course-selling-monorepo/tailwind-config/tailwind.config';

// const config: Pick<Config, "presets"> = {
//   presets: [
//     {
//       ...sharedConfig,
//       content: [
//         "./app/**/*.{js,ts,jsx,tsx}",
//         "./pages/**/*.{ts,tsx}",
//         "./components/**/*.{ts,tsx}",
//         "./src/**/*.{ts,tsx}",
//       ],
//     },
//   ],
// };

//export default config;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",

//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

import type { Config } from "tailwindcss";
import sharedConfig from "@course-selling-monorepo/tailwind-config/tailwind.config";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
      ],
    },
  ],
};

export default config;