import { test, expect} from '@playwright/test';

//
test('css selector locator testing', async ({page}) => {
//open browser and navigate to the below url
await page.goto('https://www.qapractice.com/practice-login-form');

//enter user name
await page.locator("#login-email").fill("qa");

//xpath - //input[@data-testid="login-password"]

//--- xpath syntax //tagname[@attributename = "attributevalue"]


//css - [data-testid="login-password"]
// ---css syntax [attributename="attributevalue"]

//enter password
await page.locator("[data-testid='login-password']").fill("qa12345");
await expect(page).toHaveTitle(/sasi/);
await page.waitForTimeout(10000);

//css
//xpath
//getbyrole
//getbytestid
//getbyText
//getByLabel
//getByPlaceholder

});


