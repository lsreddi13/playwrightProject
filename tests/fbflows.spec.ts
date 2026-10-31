import { test, expect } from '@playwright/test';

test('fb title', async ({ page }) => {
  await page.goto('http://www.fb.com/');

  // verify fb title
  await expect(page).toHaveTitle(/Facebook/);

  await page.locator('#_R_c9l6neappb6amH1_').fill("sasidhar@gmail.com");

  await page.locator('#_R_cdl6neappb6amH1_').fill("dddddd");

  //what type of actions we can do for button
  // Enable / disable
  //get the button name/text/value
  //click button

  //input 
  // validate placeholder text
  //enter text
  //remove the existing text and enter new text / clear old value and enter new value
  //validate the entered value
  //input value validation error/ warning message when the input value reach the max value


  // WebElement - find locator 






  //what await
  //what is page
  //what is async


});
