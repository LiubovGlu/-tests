import { test, expect } from '@playwright/test';
import { checkAboutGame, checkConf, checkForDesign, login } from './helpers';

test('checking game design', async ({ page }) => {

    await login(page);

    await page.locator('text=Game Design').click();// Click "Game Design"
    await expect(page.url()).toContain('game/design');

    //Checking elements of the page
    await checkConf(page, 'Default'); //Checking default configurations
    await expect(page.locator('text="Fonts"')).toBeVisible();
    await expect(page.locator('.MuiBox-root')
        .filter({ has: page.locator('.MuiTypography-root') })
        .filter({ has: page.locator('text="Upload Font"') })
        .last())
        .toBeVisible();

    await expect(page.locator('text="Colors"')).toBeVisible();
    await expect(page.locator('.MuiButton-root') //Checking "clear all" button
        .filter({ has: page.locator('text="Clear All"') }))
        .toBeVisible();

    //Çhecking Colors
    await checkForDesign(page, 'Main Color', 'button[type="button"]');
    await checkForDesign(page, 'Accent Color', 'button[type="button"]');
    await checkForDesign(page, 'Text Color', 'button[type="button"]');
    await checkForDesign(page, 'Button Color', 'button[type="button"]');

    //Checking Game Design
    await expect(page.locator('h4:has-text("Game Design")')).toBeVisible();

    await checkForDesign(page, 'Game Title Image', 'div[type="image"]');
    await checkForDesign(page, 'Frame Image', 'div[type="image"]');
    await checkForDesign(page, 'Parachute Prize Image', 'div[type="image"]');
    await checkForDesign(page, 'No Prize Won Image', 'div[type="image"]');

    //Checking Sponsr Images
    await expect(page.locator('h4:has-text("Sponsor Images")')).toBeVisible();

    await checkForDesign(page, 'Sponsor Logo', 'div[type="image"]');
    await checkForDesign(page, 'Team Logo', 'div[type="image"]');

    //Checking About Game
    await expect(page.locator('h4:has-text("About Game")')).toBeVisible();

    await checkAboutGame(page, 'Background:');
    await checkAboutGame(page, 'How To Play:');
    await checkAboutGame(page, 'Splash Screen');

    await expect(page.locator('text="Preview"')).toBeVisible();
    await expect(page.locator('text="Views"')).toBeVisible();
});