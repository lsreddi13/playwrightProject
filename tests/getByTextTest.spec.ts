import { test, expect} from '@playwright/test';

//
test('getByTest   locator testing', async ({page}) => {
//open browser and navigate to the below url
await page.goto('https://www.qapractice.com/practice-login-form');

const emailID = "user@premiumbank.com";
const pwd = "Bank@123";

const emailInputBox = await page.locator('//input[@id="login-email"]');
const pwdInputBox = await page.getByPlaceholder("Enter your password");
const rememberMe = await page.getByLabel("Remember me");
const singinBtn = await page.locator("#login-submit");
const successMsg = await page.getByText("Login Successful! Welcome to Premium Banking.").first();;

//type, clear,
emailInputBox.fill(emailID);

await page.waitForTimeout(500);
pwdInputBox.fill(pwd);

await page.waitForTimeout(500);
//verify button name, click, isenalbed/ disabled ?
rememberMe.click();

await page.waitForTimeout(500);
singinBtn.click();
singinBtn.clear();
singinBtn.dblclick();
singinBtn.pressSequentially("fada");
singinBtn.check
singinBtn.uncheck

await page.waitForTimeout(500);

//get by text
// console.log(await page.getByText("").isVisible());

const successmsgIsDisplayed = successMsg.isVisible();
console.log("+++++++++++++"+successmsgIsDisplayed);
//assertion
// expect(successMsg).toBeVisible(); 

//radio - selected / not selected, click

//check box 


});


