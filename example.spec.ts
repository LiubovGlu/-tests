import { test, expect } from '@playwright/test';
test.describe('New Todo', () => {
    test('basic test', async ({ page }) => {
        await page.goto('https://www.google.com/');
        await page.type('input[type="text"]', 'youtube');
        await page.press('input[type="text"]', 'Enter');
        await page.waitForNavigation();
        const locator = page.locator('text=YouTube');
        await locator.hover();
        await locator.click();
        //await page.click()
        //const title = page.locator('.main-wrapper .hero__title.heroTitle_ohkl');
        //await expect(title).toContainText('apps');
    })
})
