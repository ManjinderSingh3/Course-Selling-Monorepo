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
