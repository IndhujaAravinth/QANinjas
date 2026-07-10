// Generated from: features\loginpage.feature
import { test } from "playwright-bdd";

test.describe('CRMLogin', () => {

  test('Login loads successfully', { tag: ['@LoginScenario'] }, async ({ Given, When, Then, page }) => { 
    await Given('user opens the login page', null, { page }); 
    await When('user enters credentials and hit on login', null, { page }); 
    await Then('user is redirected to the Home page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\loginpage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@LoginScenario"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user opens the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user enters credentials and hit on login","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user is redirected to the Home page","stepMatchArguments":[]}]},
]; // bdd-data-end