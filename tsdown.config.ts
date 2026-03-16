import type { UserConfig } from "tsdown";

const config: UserConfig = {
  dts: true,
  entry: "src/*.ts",
  exports: true,
  platform: "neutral",
};

export default config;
