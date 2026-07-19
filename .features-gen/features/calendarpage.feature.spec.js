// Generated from: features\calendarpage.feature
import { test } from "playwright-bdd";

test.describe('CRMCalendar', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('user successfully logged into the application', null, { page }); 
  });
  
  test('Verify Current Date', { tag: ['@CalendarScenario'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is in Calendar page', null, { page }); 
    await When('page displays the current date', null, { page }); 
    await Then('user returns back to Home page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\calendarpage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":22,"tags":["@CalendarScenario"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user successfully logged into the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given user is in Calendar page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When page displays the current date","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then user returns back to Home page","stepMatchArguments":[]}]},
]; // bdd-data-end