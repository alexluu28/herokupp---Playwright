import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly flashMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // Defining selectors
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]'); // or .radius
        this.flashMessage = page.locator('#flash');
    }

    async navigateToLoginPage() {
        await this.page.goto('/login');
    }

    async login(username: string, pass: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

    // Helper to verify the flash message text
    async verifyMessage(expectedText: string) {
        await expect(this.flashMessage).toContainText(expectedText);
    }
}