import { createBdd } from 'playwright-bdd';
import { Loginpage } from '../pages/loginpage.js';
import { readExcelData } from '../utils/excelHelper.js';
import logger from '../utils/logger.js';

const excelFile = './test-data/TestDataCRM.xlsx';
const {Given, When, Then} = createBdd();

Given('user opens the login page', async ({ page }) => {
  const loginPage = new Loginpage(page);
  logger.info("Opening Login Page");
  await loginPage.launchSuiteCRM();
});

When ('user enters credentials and hit on login', async ({ page }) => {
  const testData = readExcelData(excelFile, 'Sheet1');
  console.log('Excel Data:', testData);
  const username1 = testData[0].username;
  const password1 = testData[0].password;
  const loginPage = new Loginpage(page);
  await loginPage.enterCredentials(username1, password1);
});


Then ('user is redirected to the Home page', async ({ page }) => {
    const loginPage = new Loginpage(page);
    await loginPage.verifyHomePage();
});


