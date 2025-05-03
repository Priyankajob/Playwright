const { test, expect } = require('@playwright/test');
test('Locate Multipleemements', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
   await page.waitForLoadState('networkidle');
   const pagelinks = await page.$$('a');
    for(const link of pagelinks)
    {
      const linktest=  await link.textContent();
      console.log(linktest)
    } 
   page.waitForSelector('#tbodyid h4 > a');
    const prodlink = await page.$$('#tbodyid h4 > a');
    for(const productlink of prodlink)
        {
            const prodlinktext = await productlink.textContent();
            console.log(prodlinktext)
        }
    





})