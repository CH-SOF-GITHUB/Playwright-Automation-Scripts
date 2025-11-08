import { PlaywrightTestConfig } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testMatch: ["tests/recorded.test.ts"],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "on"
  },
  retries: 2,
  timeout: 60000,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/report.json"
      }
    ],
    [
      "html",
      {
        open: "never"
      }
    ]
  ]
};

export default config;
