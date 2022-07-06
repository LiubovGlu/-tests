import { test, expect } from '@playwright/test';

test('', async ({ page }) => {

  // Click #app >> text=Delete >> nth=0
  await page.locator('#app >> text=Delete').first().click();

  // Click button:has-text("Delete") >> nth=1
  await page.locator('button:has-text("Delete")').nth(1).click();

  // Click p:has-text("Delete") >> nth=0
  await page.locator('p:has-text("Delete")').first().click();

  // Click button:has-text("Delete") >> nth=1
  await page.locator('button:has-text("Delete")').nth(1).click();

  // Click #app >> text=Delete
  await page.locator('#app >> text=Delete').click();

  // Click text=Delete >> nth=4
  await page.locator('text=Delete').nth(4).click();

});