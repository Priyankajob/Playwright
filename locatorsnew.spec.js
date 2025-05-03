import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    // Click the login button
    await page.locator('id=login2').click();

    // Fill in login form
    await page.locator('#loginusername').fill('Priyanka');
    await page.locator("input[id='loginpassword']").fill('Priyanka');

    // Click the 'Log in' button
    await page.locator('//button[text()="Log in"]').click();

    // Check if the logout link is visible after login
    const logoutLink = page.locator('id=logout2');
    await expect(logoutLink).toBeVisible();
});
