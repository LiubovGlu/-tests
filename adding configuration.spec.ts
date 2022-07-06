import { test, expect } from '@playwright/test';
import { checkConf, getConfLocator, login } from './helpers';

test('adding configuration', async ({ page }) => {
    await login(page);

    await checkConf(page, 'Default');
    

    await page.locator('li button').click();  // Click "+" button
    await page.locator('text=New Configuration​ >> input[type="text"]').click();// Click text=New Configuration​ >> input[type="text"]
    await page.locator('text=New Configuration​ >> input[type="text"]').fill('Number 1');// Fill text=New Configuration​ >> input[type="text"]
    await page.locator('button:has-text("ADD")').click();// Click button "ADD"
    await checkConf(page, 'Number 1');

    

    await page.locator('li button').click(); // Click "+" button
    await page.locator('text=New Configuration​ >> input[type="text"]').click();  // Click text=New Configuration​ >> input[type="text"]
    await page.locator('text=New Configuration​ >> input[type="text"]').fill('Number 2');// Fill text=New Configuration​ >> input[type="text"]
    await page.locator('button:has-text("ADD")').click(); // Click button "ADD"
    await checkConf(page, 'Number 2');


    await page.locator('li button').click();// Click "+" button
    await page.locator('text=New Configuration​ >> input[type="text"]').click();// Click text=New Configuration​ >> input[type="text"]
    await page.locator('text=New Configuration​ >> input[type="text"]').fill('Number 3'); // Fill text=New Configuration​ >> input[type="text"]
    await page.locator('button:has-text("ADD")').click();// Click button "ADD"
    await checkConf(page, 'Number 3');

  
    await getConfLocator(page, 'Number 1').locator('text=Delete').first().click();
    await expect(page.locator('text="Are you sure that you want to delete this configuration?"').nth(1)).toBeVisible();
    await page.locator('button:has-text("Delete")').nth(1).click();
    await expect(page.locator('.MuiBox-root')
    .filter({ has: page.locator('text="Number 1"') })
    .last())
    .not.toBeVisible();

    await getConfLocator(page, 'Number 2').locator('text=Delete').first().click();
    await expect(page.locator('text="Are you sure that you want to delete this configuration?"').nth(1)).toBeVisible();
    await page.locator('button:has-text("Delete")').nth(1).click();
    await expect(page.locator('.MuiBox-root')
    .filter({ has: page.locator('text="Number 2"') })
    .last())
    .not.toBeVisible();

    await getConfLocator(page, 'Number 3').locator('text=Delete').first().click();
    await expect(page.locator('text="Are you sure that you want to delete this configuration?"').nth(1)).toBeVisible();
    await page.locator('div:nth-child(7) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > button:nth-child(2)').click();
    await expect(page.locator('text="Are you sure that you want to delete this configuration?"').nth(1)).not.toBeVisible();

    await getConfLocator(page, 'Number 3').locator('text=Delete').first().click();
    await expect(page.locator('text="Are you sure that you want to delete this configuration?"').nth(1)).toBeVisible();
    await page.locator('text=Delete').nth(4).click();
    await expect(page.locator('.MuiBox-root')
    .filter({ has: page.locator('text="Number 3"') })
    .last())
    .not.toBeVisible();

})
