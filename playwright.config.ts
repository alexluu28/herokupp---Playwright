import { defineConfig, devices } from '@playwright/test';
// @ts-ignore
import dotenv from 'dotenv';
// @ts-ignore
import path from 'path';

/**
 * Read environment variables from file.
 * We look for an environment variable named 'ENV' (e.g., ENV=staging).
 * If not found, we default to .env.staging or just .env
 */
const envName = process.env.ENV || 'staging'; // Default to staging if not specified
const envPath = path.resolve(__dirname, `.env.${envName}`);

// Load the config
dotenv.config({ path: envPath });

console.log(`Loading config from: ${envPath}`);

export default defineConfig({
  use: {
    // This allows you to use relative paths in your Page Objects
    // It grabs the URL from the loaded .env file
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});