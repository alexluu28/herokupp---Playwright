import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly typosLink: Locator;


    constructor(page: Page) {
        this.page = page;
        //define selectors
        this.typosLink = page.locator('//a[@href="/typos"]');
    }

    async navigate() {
        // Playwright automatically prepends the baseURL from config
        // So this becomes: https://the-internet.herokuapp.com/
        await this.page.goto('/');
    }

    async navigateToTyposPage() {
        await this.typosLink.click();
    }
}


