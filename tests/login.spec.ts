import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// 1. Determine the environment (default to 'staging')
const envName = process.env.ENV || 'staging';

// 2. Dynamically load the user data based on the environment
// Ensure your file is at: config/staging/users.json
const userData = require(`../config/${envName}/users.json`);

// 3. Group the tests using describe to organize the report
test.describe(`Login Tests - Environment: ${envName}`, () => {

    for (const user of userData) {

        test(`User ID: ${user.id}`, async ({ page }) => {
            const loginPage = new LoginPage(page);

            // Navigate (Base URL is handled by playwright.config.ts)
            await loginPage.navigateToLoginPage();

            // Perform Login
            await loginPage.login(user.username, user.password);

            // Verify
            await loginPage.verifyMessage(user.expectedMessage);
        });
    }

});