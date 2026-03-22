import type { ViteUserConfig } from "vitest/config";

const config: ViteUserConfig = {
  test: {
    include: ["tests/**/*.test.ts"],
  },
};

export default config;
