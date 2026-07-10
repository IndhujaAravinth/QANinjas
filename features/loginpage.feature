@LoginScenario
Feature: CRMLogin

Scenario: Login loads successfully
  Given user opens the login page
  When user enters credentials and hit on login
  Then user is redirected to the Home page
