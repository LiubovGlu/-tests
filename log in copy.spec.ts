import { test, expect } from '@playwright/test';
import { checkForInput, login } from './helpers';

test('log in', async ({ page }) => {
  await login(page); //Function to login and check configurations

  await expect(page.locator('svg[data-testid="AddBoxIcon"]')).toBeVisible(); //"Plus" button near the configurations

  await expect(page.locator('text="Default"')).toBeVisible();
  await expect(page.locator('text="Start"')).toBeVisible(); //"Start" button near to the "default"
  await expect(page.locator('svg[data-testid="MobileScreenShareIcon"]')).toBeVisible(); //Blue icon
  await expect(page.locator('svg[data-testid="ExpandLessIcon"]')).toBeVisible(); //Yellow icon

  await expect(page.locator('text="Game Design"')).toBeVisible();
  await expect(page.locator('p:has-text("Game Settings")')).toBeVisible();
  await expect(page.locator('text="Add Banner"')).toBeVisible();
  await expect(page.locator('text="Prizing"')).toBeVisible();
  await expect(page.locator('text="Analytics"')).toBeVisible();

  await expect(page.locator('text="Sign Up"')).toBeVisible();

  await expect(page.locator('h4:has-text("Game Settings")')).toBeVisible;

  await checkForInput(page, "Total Rewards"); //Checking text "total plays" and input space under it

  await checkForInput(page, 'Total Rewards Per Day'); //Checking text "total plays per day" and input space under it

  await expect(page.locator('text="Duration Time"')).toBeVisible();
  await checkForInput(page, "Hours");
  await checkForInput(page, "Minutes");
  await checkForInput(page, "Seconds");

  await checkForInput(page, 'Stand By Message', 'textarea[placeholder="This is stand by message"]');

  await expect(page.locator('text="Display Menu"')).toBeVisible();
  await expect(page.locator('text="Alignment of Menu on the App Screen"')).toBeVisible();
  await expect(page.locator('text="Top"')).toBeVisible();
  await expect(page.locator('svg[data-testid="AlignVerticalBottomIcon"]')).toBeVisible();
  await expect(page.locator('text="Bottom"')).toBeVisible();
  await expect(page.locator('svg[data-testid="AlignVerticalTopIcon"]')).toBeVisible();

  await expect(page.locator('text="Settings"')).toBeVisible();
  await checkForInput(page, 'Ending Game Message', 'textarea[placeholder="Type message"]');
  await checkForInput(page, 'Selection Message', 'textarea[placeholder="Type message"]');
  await expect(page.locator('text="Entry Screen"')).toBeVisible();
  await page.locator('div[role="button"]:has-text("Choose the screen")').click();   // Click div[role="button"]:has-text("Choose the screen")
  await expect(page.locator('ul[role="listbox"]')).toBeVisible();

  await expect(page.locator('text="Preview"')).toBeVisible();
  await expect(page.locator('text="Views"')).toBeVisible();
});