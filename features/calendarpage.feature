@CalendarScenario
Feature: CRMCalendar

Background:
  Given user successfully logged into the application

Scenario: Schedule Meeting
  Given user is in Schedule Meeting page
  When user inputs meeting details and saves meeting
  Then user is in Meeting Overview page

Scenario: Schedule Call
  Given user is in Schedule Call page
  When user inputs Call details and saves Call
  Then user is in Calls Overview page

Scenario: Create Task
  Given user is in Create Task page
  When user inputs Task details and saves task
  Then user is in Task Overview page

Scenario: Verify Current Date
  Given user is in Calendar page
  When page displays the current date
  Then user returns back to Home page

