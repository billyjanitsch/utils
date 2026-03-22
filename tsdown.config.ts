import type { UserConfig } from "tsdown";

const config: UserConfig = {
  dts: true,
  entry: "src/*.ts",
  exports: "ci-only",
  platform: "neutral",
};

export default config;
