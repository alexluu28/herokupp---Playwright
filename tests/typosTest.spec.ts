import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TyposPage } from '../pages/TyposPage';

const envName = process.env.ENV || 'prod';


test('Navigate to Typos Page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.navigateToTyposPage();
    const typosPage = new TyposPage(page);
    await expect(typosPage.textArea1).toHaveText('This example demonstrates a typo being introduced. It does it randomly on each page load.');
});



