// Generated from: features\accountspage.feature
import { test } from "playwright-bdd";

test.describe('CRMAccounts', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('user successfully logged into the application', null, { page }); 
  });
  
  test('Account Creation', { tag: ['@AccountScenario'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is in Create Account page', null, { page }); 
    await When('user creates the account', null, { page }); 
    await Then('account should be created successfully', null, { page }); 
  });

  test('View Accounts', { tag: ['@AccountScenario'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is in View Accounts page', null, { page }); 
    await When('user searches and views the account', null, { page }); 
    await Then('user should be redirected to the Account Overview page', null, { page }); 
  });

  test('Sort Account Records', { tag: ['@AccountScenario'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is in View Accounts page', null, { page }); 
    await When('user sorts the account records', null, { page }); 
    await Then('account records should be sorted successfully', null, { page }); 
  });

  test('Search Account using Global Search', { tag: ['@AccountScenario'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is in Home page', null, { page }); 
    await When('user searches the account using global search', null, { page }); 
    await Then('user should be redirected to the Account Overview page', null, { page }); 
  });

  test('Duplicate Account', { tag: ['@AccountScenario'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is in Accounts Overview page', null, { page }); 
    await When('user duplicates the account', null, { page }); 
    await Then('duplicate account should be created successfully', null, { page }); 
  });

  test('Delete Account', { tag: ['@AccountScenario'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is in Accounts Overview page', null, { page }); 
    await When('user deletes the account', null, { page }); 
    await Then('account should be deleted successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\accountspage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@AccountScenario"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user successfully logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given user is in Create Account page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user creates the account","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then account should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":["@AccountScenario"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user successfully logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user is in View Accounts page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user searches and views the account","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the Account Overview page","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":["@AccountScenario"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user successfully logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given user is in View Accounts page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When user sorts the account records","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then account records should be sorted successfully","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":19,"tags":["@AccountScenario"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user successfully logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given user is in Home page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When user searches the account using global search","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the Account Overview page","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":23,"tags":["@AccountScenario"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user successfully logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given user is in Accounts Overview page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When user duplicates the account","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then duplicate account should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":27,"tags":["@AccountScenario"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user successfully logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given user is in Accounts Overview page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When user deletes the account","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then account should be deleted successfully","stepMatchArguments":[]}]},
]; // bdd-data-end