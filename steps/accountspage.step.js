import { createBdd } from 'playwright-bdd';
import { test, expect } from '@playwright/test';
import { Accountspage } from '../pages/accountspage.js';
import { Loginpage } from '../pages/loginpage.js';
import { readExcelData } from '../utils/excelHelper.js';

const excelFile = './test-data/TestDataCRM.xlsx';
const {Given, When, Then} = createBdd();


Given('user is in Create Account page', async ({ page }) => {
  const accountPage = new Accountspage(page);
  await accountPage.navigateToCreateAccount();
});

When ('user enters all required information and hit on Save', async ({ page }) => {
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
});

Then ('user should be redirected to the Account Overview page', async ({ page }) => {

  const accountPage = new Accountspage(page);
  await accountPage.saveAccountInformation();

});