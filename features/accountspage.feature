@AccountScenario
Feature: CRMAccounts

Background:
  Given user successfully logged into the application

Scenario: Account Creation
  Given user is in Create Account page
  When user creates the account
  Then account should be created successfully
Scenario: View Accounts
  Given user is in View Accounts page
  When user searches and views the account
  Then user should be redirected to the Account Overview page
Scenario: Sort Account Records
  Given user is in View Accounts page
  When user sorts the account records
  Then account records should be sorted successfully
Scenario: Search Account using Global Search
  Given user is in Home page
  When user searches the account using global search
  Then user should be redirected to the Account Overview page
Scenario: Duplicate Account
  Given user is in Accounts Overview page
  When user duplicates the account
  Then duplicate account should be created successfully
Scenario: Delete Account
  Given user is in Accounts Overview page
  When user deletes the account
  Then account should be deleted successfully
