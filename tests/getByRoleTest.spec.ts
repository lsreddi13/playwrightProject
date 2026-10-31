import { test, expect} from '@playwright/test';

//
test('getbyrole   locator testing', async ({page}) => {
//open browser and navigate to the below url
await page.goto('https://www.qapractice.com/practice-login-form');

//enter user name
await page.getByRole('checkbox', {name: "asdf"});



await page.locator("[data-testid='login-password']").fill("qa12345");


});


