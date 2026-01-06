import { Page, Locator, expect } from "@playwright/test";

export class TyposPage {
    readonly page: Page;
    //define selectors
    readonly textArea1: Locator;

    constructor(page: Page) {
        this.page = page;
        //define selectors
        this.textArea1 = page.locator('//*[@id="content"]/div/p[1]');
    }

    async getTextFromTextArea1() {
        return this.textArea1.textContent();
    }
}