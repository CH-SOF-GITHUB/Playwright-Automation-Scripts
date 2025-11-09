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
  testMatch: ["tests/alert.select.dropdown.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "on"
  },
  /*Timeout for each test in milliseconds. Defaults to 30 seconds.
    This is a base timeout for all tests. In addition, each test can configure its own timeout with test. setTimeout(timeout) .*/
  timeout: 70 * 1000,
  retries: 0,
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
