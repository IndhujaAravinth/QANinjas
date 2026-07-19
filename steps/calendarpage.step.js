import { createBdd } from 'playwright-bdd';
import { Calendarpage } from '../pages/calendarpage.js';
import { readExcelData } from '../utils/excelHelper.js';

const excelFile = './test-data/TestDataCRM.xlsx';
const {Given, When, Then} = createBdd();

Given ('user is in Schedule Meeting page', async ({ page }) => {
    const calendarPage = new Calendarpage(page);
    await calendarPage.navigateToScheduleMeeting();
    });

When('user inputs meeting details and saves meeting', async ({ page }) => {
    const calendarPage = new Calendarpage(page);
    const testData = readExcelData(excelFile, 'Sheet1');
    console.log('Excel Data:', testData);
    const subject1 = testData[0].meetingsubject;
    const startdate1 = testData[0].meetingstartdate;
    const starthr1 = testData[0].meetingstarthr;
    const startmin1 = testData[0].meetingstartmin;
    const enddate1 = testData[0].meetingenddate;
    const endhr1 = testData[0].meetingendhr;
    const endmin1 = testData[0].meetingendmin;
    const meetingdesc1 = testData[0].meetingdesc;
    const contactfname1 = testData[0].meetingcontactfname;
    const contactlname1 = testData[0].meetingcontactlname;
    const contactemail1 = testData[0].meetingcontactemail;
    await calendarPage.inputMeetingDetails(subject1, startdate1, starthr1, startmin1, 
        enddate1, endhr1, endmin1, meetingdesc1, contactfname1, contactlname1, contactemail1 );

    });

Then('user is in Meeting Overview page', async ({ page }) => {
  const calendarPage = new Calendarpage(page);
  await calendarPage.verifyMeetingOverviewPage();
});

Given ('user is in Schedule Call page', async ({ page }) => {
    const calendarPage = new Calendarpage(page);
    await calendarPage.navigateToScheduleCall();
    });

When('user inputs Call details and saves Call', async ({ page }) => {
    const calendarPage = new Calendarpage(page);
    const testData = readExcelData(excelFile, 'Sheet1');
    console.log('Excel Data:', testData);
    const subject1 = testData[0].callsubject;
    const startdate1 = testData[0].callstartdate;
    const starthr1 = testData[0].callstarthr;
    const startmin1 = testData[0].callstartmin;
    const duration1 = testData[0].callduration;
    const desc1 = testData[0].calldesc;
    const inviteesfname1 = testData[0].callinviteesfname;
    const inviteeslname1 = testData[0].callinviteeslname;
    const inviteesemail1 = testData[0].callinviteesemail;
    await calendarPage.inputCallDetails(subject1, startdate1, starthr1, startmin1, duration1, desc1, inviteesfname1, inviteeslname1,inviteesemail1 );
});

Then('user is in Calls Overview page', async ({ page }) => {
  const calendarPage = new Calendarpage(page);
  await calendarPage.verifyCallOverviewPage();
});

Given ('user is in Create Task page', async ({ page }) => {
    const calendarPage = new Calendarpage(page);
    await calendarPage.navigateToCreateTaskPage();
    });

When('user inputs Task details and saves task', async ({ page }) => {
    const calendarPage = new Calendarpage(page);
    const testData = readExcelData(excelFile, 'Sheet1');
    console.log('Excel Data:', testData);
    const tasksubject1 = testData[0].tasksubject;
    const taskstartdate1 = testData[0].taskstartdate;
    const taskduedate1 = testData[0].taskduedate;
    const taskpriority1 = testData[0].taskpriority;
    const taskdesc1 = testData[0].taskdesc;
    const taskstatus1 = testData[0].taskstatus;
    const taskaccount1 = testData[0].taskaccount;

    await calendarPage.inputTaskDetails(tasksubject1,taskstartdate1, taskduedate1, taskpriority1, taskdesc1, taskstatus1, taskaccount1);


});

Then('user is in Task Overview page', async ({ page }) => {
  const calendarPage = new Calendarpage(page);
  await calendarPage.verifyTaskOverviewPage();
});

Given ('user is in Calendar page', async ({ page }) => {
    const calendarPage = new Calendarpage(page);
    await calendarPage.navigateToTodayPage();
    });

When('page displays the current date', async ({ page }) => {

    const calendarPage = new Calendarpage(page);
    await calendarPage.verifyCurrentDate();

});

Then('user returns back to Home page', async ({ page }) => {
  const calendarPage = new Calendarpage(page);
  await calendarPage.returnToHomePage();
});