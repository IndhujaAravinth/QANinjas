// Generated from: features\accountspage.feature
import { test } from "playwright-bdd";

test.describe('CRMAccounts', () => {

  test.beforeEach('Background', async ({ Given, When, Then, page }, testInfo) => { if (testInfo.error) return;
    await Given('user opens the login page', null, { page }); 
    await When('user enters credentials and hit on login', null, { page }); 
    await Then('user is redirected to the Home page', null, { page }); 
  });
  
  test('Account Creation', { tag: ['@AccountsScenario'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is in Create Account page', null, { page }); 
    await When('user enters all required information and hit on Save', null, { page }); 
    await Then('user should be redirected to the Account Overview page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\accountspage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":9,"tags":["@AccountsScenario"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user opens the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user enters credentials and hit on login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user is redirected to the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given user is in Create Account page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When user enters all required information and hit on Save","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the Account Overview page","stepMatchArguments":[]}]},
]; // bdd-data-end