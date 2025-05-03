
const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://demoblaze.com/');


  // Get the page title and log it
  const pageTitle = await page.title();
  console.log('Page Title is:', pageTitle);

  // Assertions
  expect(pageTitle).toBe('STORE');  // Ensure the title is correct (case-sensitive)
  expect(page.url()).toBe('https://demoblaze.com/');  // Correct the URL check

  // Close the page
  await page.close();
})
