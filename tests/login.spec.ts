import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import userData from '../data/users.json'; // Importing the JSON data

// We iterate over the array in the JSON file
for (const user of userData) {

    test(`Login Test: ${user.id}`, async ({ page }) => {
        const loginPage = new LoginPage(page);

        // 1. Navigate to the site
        await loginPage.goto();

        // 2. Perform Login using data from JSON
        await loginPage.login(user.username, user.password);

        // 3. Verify the result matches our expected data
        await loginPage.verifyMessage(user.expectedMessage);
    });
}