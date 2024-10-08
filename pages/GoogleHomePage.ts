import {expect} from "@playwright/test";

export class GoogleHomePage {
    private logo = 'img[alt="Google"]';
    private searchBox = 'input[name="q"]';
    private firstResult = 'h3';
    private cookiesButton = 'button:has-text("Acceptér alle")';

    async navigateToHomePage(page) {
        await page.goto('https://www.google.com');
    }

    async handleCookiesPopup(page) {
        const cookiesButton = page.locator(this.cookiesButton);
        if (await cookiesButton.isVisible()) {
            await cookiesButton.click();
        }
    }

    async validateGoogleLogo(page) {
        const logo = page.locator(this.logo);
        await expect(logo).toBeVisible();
    }

    async validateSearchBox(page) {
        const searchBox = page.locator(this.searchBox);
        await expect(searchBox).toBeVisible();
    }

    async search(page, query) {
        const searchBox = page.locator(this.searchBox);
        await searchBox.fill(query);
        await searchBox.press('Enter');
    }

    async clickFirstSearchResult(page) {
        const firstResult = page.locator(this.firstResult).first();
        await expect(firstResult).toBeVisible();
        await firstResult.click();
    }
}