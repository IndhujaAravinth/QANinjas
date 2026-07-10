@AccountsScenario
Feature: CRMAccounts

Background:
  Given user opens the login page
  When user enters credentials and hit on login
  Then user is redirected to the Home page

Scenario: Account Creation
  Given user is in Create Account page
  When user enters all required information and hit on Save
  Then user should be redirected to the Account Overview page

Scenario: Search and View Accounts
  Given user is in View Account page
  When user searches the Account
  Then user should be redirected to the Account Overview page

