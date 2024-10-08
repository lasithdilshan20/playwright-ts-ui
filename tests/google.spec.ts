import { test } from '@playwright/test';
import { GoogleHomePage } from '../pages/GoogleHomePage';

// Page Object Model for Google Home Page
const googleHomePage = new GoogleHomePage();

test('Google home page UI validation and search Playwright', async ({ page }) => {
    // Navigate to Google home page
    await googleHomePage.navigateToHomePage(page);

    // Handle cookies popup if present
    await googleHomePage.handleCookiesPopup(page);

    // Validate that the Google logo is visible
    await googleHomePage.validateGoogleLogo(page);

    // Validate the search input box is present
    await googleHomePage.validateSearchBox(page);

    // Type 'Playwright' in the search box and press Enter
    await googleHomePage.search(page, 'Playwright');

    // Wait for search results to load and click the first result
    await googleHomePage.clickFirstSearchResult(page);
});