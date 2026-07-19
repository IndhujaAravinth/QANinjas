import { createBdd } from 'playwright-bdd';
import { Accountspage } from '../pages/accountspage.js';
import { readExcelData } from '../utils/excelHelper.js';

const excelFile = './test-data/TestDataCRM.xlsx';
const {Given, When, Then} = createBdd();

// Account Creation Scenario
Given('user is in Create Account page', async ({ page }) => {
  const accountPage = new Accountspage(page);
  await accountPage.navigateToCreateAccount();
});

When('user creates the account', async ({ page }) => {
  const testData = readExcelData(excelFile, 'Sheet1');
  console.log('Excel Data:', testData);
  const accname1 = testData[0].accountname;
  const email1 = testData[0].email;
  const billingstreet1 = testData[0].billingstreet;
  const billingpostalcode1 = testData[0].billingpostalcode;
  const billingcity1 = testData[0].billingcity;
  const billingstate1 = testData[0].billingstate;
  const billingcountry1 = testData[0].billingcountry;
  const desc1 = testData[0].desc;
  const accountPage = new Accountspage(page);
  await accountPage.enterAccountInformation(accname1, email1, billingstreet1, billingpostalcode1, billingcity1, billingstate1, billingcountry1, desc1);
  await accountPage.saveAccountInformation();
});

Then('account should be created successfully', async ({ page }) => {
  const accountPage = new Accountspage(page);
 const testData = readExcelData(excelFile, 'Sheet1');
  console.log('Excel Data:', testData);
  const accname1 = testData[0].accountname;
  await accountPage.verifyAccountOverviewPage(accname1);
});

// View Accounts Scenario
Given('user is in View Accounts page', async ({ page }) => {
  const accountPage = new Accountspage(page);
  await accountPage.navigateToViewAccount();
});

When('user searches and views the account', async ({ page }) => {
  const accountPage = new Accountspage(page);
  const testData = readExcelData(excelFile, 'Sheet1');
  console.log('Excel Data:', testData);
  const accname1 = testData[0].accountname;
  await accountPage.searchAndViewAccount(accname1);
});

Then('user should be redirected to the Account Overview page', async ({ page }) => {
  const accountPage = new Accountspage(page);
  /*const testData = readExcelData(excelFile, 'Sheet1');
  console.log('Excel Data:', testData);
  const accname1 = testData[0].accountname;*/
  await accountPage.verifyAccountOverviewPage();
});

// Sort Scenario
When('user sorts the account records', async ({ page }) => {
  const accountPage = new Accountspage(page);
  await accountPage.sortAccountRecords();
});

Then('account records should be sorted successfully', async ({ page }) => {
  const accountPage = new Accountspage(page);
  await accountPage.verifySortedAccountRecords();
});

// Global Search Scenario
Given('user is in Home page', async ({ page }) => {
  const accountPage = new Accountspage(page);
  await accountPage.navigateToHomePage();
});

When('user searches the account using global search', async ({ page }) => {
  const accountPage = new Accountspage(page);
  const testData = readExcelData(excelFile, 'Sheet1');
  console.log('Excel Data:', testData);
  const accname1 = testData[0].accountname;
  await accountPage.userPerformsGlobalSearch(accname1);
});

Given('user successfully logged into the application', async ({ page }) => {
  const testData = readExcelData(excelFile, 'Sheet1');
  console.log('Excel Data:', testData);
  const username1 = testData[0].username;
  const password1 = testData[0].password;
  const accountPage = new Accountspage(page);
  await accountPage.loginApplication(username1, password1);
});

Given('user is in Accounts Overview page', async ({ page }) => {
  const accountPage = new Accountspage(page);
  const testData = readExcelData(excelFile, 'Sheet1');
  console.log('Excel Data:', testData);
  const accname1 = testData[0].accountname;
  await accountPage.searchAndViewAccount1(accname1);
  await accountPage.verifyAccountOverviewPage();
});


When ('user duplicates the account', async ({ page }) => {
  const accountPage = new Accountspage(page);
  await accountPage.duplicateAccount();
});

Then ('duplicate account should be created successfully', async ({ page }) => {
  const accountPage = new Accountspage(page);
  /*const testData = readExcelData(excelFile, 'Sheet1');
  console.log('Excel Data:', testData);
  const accname1 = testData[0].accountname;*/
  await accountPage.verifyAccountOverviewPage();
});

When ('user deletes the account', async ({ page }) => {
  const accountPage = new Accountspage(page);
  await accountPage.deleteAccount();

});

Then ('account should be deleted successfully', async ({ page }) => {
  const accountPage = new Accountspage(page);
  await accountPage.verifyAccountDeletion();

});
