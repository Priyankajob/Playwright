
const { test, expect } = require('@playwright/test');
test('Home Page', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://demoblaze.com/');
  
    // Get the page title and log it
    const pageTitle = await page.title();
    console.log('Page Title is:', pageTitle);
  
    // Assertions
    expect(pageTitle).toBe('STORE');  // Ensure the title is correct (case-sensitive)
    expect(page.url()).toBe('https://demoblaze.com/'); 
    await page.click('id=login2');
    await page.locator('input#loginusername').fill('priyanka');
    await page.locator('input#loginpassword').fill('priyanka');
    await page.click("//button[normalize-space()='Log in']");
   const logoutlink = await page.locator("//a[normalize-space()='Log out']");
 //  await expect(logoutlink).toBeVisible();
   await expect(logoutlink).toBeVisible({ timeout: 10000 }); 
   await logoutlink.click();
     
    await page.close();
  })