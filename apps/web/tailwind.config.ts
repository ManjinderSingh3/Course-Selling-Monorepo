import type { Config } from "tailwindcss";
import sharedConfig from "@course-selling-monorepo/tailwind-config/tailwind.config";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "../web/**/*.{ts,tsx}",
        "../../packages/ui/**/*.{ts,tsx}",
        "../../packages/utils/**/*.{ts,tsx}",
      ],
    },
  ],
};

export default config;
