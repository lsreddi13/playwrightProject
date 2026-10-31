import { test, expect, chromium } from '@playwright/test';


test('Login test', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    

    await page.goto('https://www.google.com');
// await page.pause();


  await expect(page).toHaveTitle(/Facebook/);
  await page.waitForTimeout(10000);
    // await browser.close();
});