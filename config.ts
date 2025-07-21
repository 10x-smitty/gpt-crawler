import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://crawlee.dev/js/docs/next/quick-start",
  match: "https://crawlee.dev/js/docs/next/**",
  maxPagesToCrawl: 500,
  outputFileName: "output/crawlee.json",
  maxTokens: 2000000,
};
