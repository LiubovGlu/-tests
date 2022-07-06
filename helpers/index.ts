import { expect, Page } from "@playwright/test";

export async function checkForInput(page: Page, label: string, inputSelector: string = 'input[type="number"]') {

    await expect(page.locator('.MuiBox-root')
        .filter({ has: page.locator(`text="${label}"`) })
        .filter({ has: page.locator(inputSelector) })
        .last())
        .toBeVisible();
}

export async function login(page: Page) {
    await page.goto('https://autotest.developdxp.com/games/air-drop/admin/');
    // Check all elements of the page
    await expect(page.locator('div.MuiBox-root')).toBeVisible(); //"Transported labs"
    await expect(page.locator('text="Sign In"')).toBeVisible();
    await expect(page.locator('text="Sign in and start managing your Games!"')).toBeVisible();
    await expect(page.locator('text="Remember me"')).toBeVisible();
    await expect(page.locator('input.PrivateSwitchBase-input')).toBeVisible(); //Switch button near to the "remember me"
    await expect(page.locator('text="Forgot password?"')).toBeVisible();

    // Click input[type="text"]
    await page.locator('input[type="text"]').click();

    // Fill input[type="text"]
    await page.locator('input[type="text"]').fill('autotest');

    // Click input[type="password"]
    await page.locator('input[type="password"]').click();

    // Fill input[type="password"]
    await page.locator('input[type="password"]').fill('acgNy85h');

    // Click text=Login
    await page.locator('text=Login').click();
    await page.waitForNavigation();
    // Check URl to be right
    await expect(page.url()).toContain('game/settings');
    // Check all elements of the page
    await expect(page.locator('text="Configurations"')).toBeVisible();
}

export function getConfLocator(page: Page, label: string) {
    return page.locator('.MuiBox-root')
        .filter({ has: page.locator(`text="${label}"`) })
        .filter({ has: page.locator('text="Game Design"') })
        .last();
}

export async function checkConf(page: Page, label: string) {
    const confLocator = getConfLocator(page, label);
    await expect(confLocator).toBeVisible();
    await expect(confLocator.locator('text="Game Design"')).toBeVisible();
    await expect(confLocator.locator('text="Game Settings"')).toBeVisible();
    await expect(confLocator.locator('text="Add Banner"')).toBeVisible();
    await expect(confLocator.locator('text="Prizing"')).toBeVisible();
    await expect(confLocator.locator('text="Analytics"')).toBeVisible();
}
export async function checkForDesign(page: Page, label: string, inputSelector: string) {
    await expect(page.locator(`text=${label}`)).toBeVisible();
    await expect(page.locator('.MuiBox-root')
        .filter({ has: page.locator(`text=${label}`) })
        .last()
        .locator(inputSelector))
        .toBeVisible();
}
export async function checkAboutGame(page: Page, label: string) {
    await expect(page.locator('.MuiBox-root')
        .filter({ has: page.locator(`text=${label}`) })
        .locator('text="Image"')
        .last())
        .toBeVisible();
    await expect(page.locator('.MuiBox-root')
        .filter({ has: page.locator(`text=${label}`) })
        .locator('text="Video"')
        .last())
        .toBeVisible();
    await expect(page.locator('.MuiBox-root')
        .filter({ has: page.locator(`text=${label}`) })
        .locator('input[value="image"]')
        .last())
        .toBeVisible();
    await expect(page.locator('.MuiBox-root')
        .filter({ has: page.locator(`text=${label}`) })
        .locator('input[value="video"]')
        .last())
        .toBeVisible();
    await expect(page.locator('.MuiBox-root')
        .filter({ has: page.locator(`text=${label}`) })
        .locator('div[type="image"]')
        .last())
        .toBeVisible();
}