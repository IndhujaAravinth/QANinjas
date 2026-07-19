import { expect } from '@playwright/test';
export class Calendarpage

{
constructor(page)
{
    this.page=page;
}

async navigateToScheduleMeeting()
{
    await this.page.locator('a').filter({ hasText: 'Calendar' }).click();
    await this.page.getByRole('link', { name: 'Schedule Meeting' }).click();
    await this.page.locator('iframe').contentFrame().getByText('OVERVIEW').waitFor({ state: 'visible' });
}

async inputMeetingDetails(subject, startdate, starthr, startmin, enddate, endhr, endmin, meetingdesc, contactfname, contactlname, contactemail)
{
    const pad = (v) => String(v).padStart(2, '0');
    await this.page.locator('iframe').contentFrame().locator('#name').fill(subject);
    await this.page.locator('iframe').contentFrame().locator('#date_start_date').fill(startdate);
    await this.page.locator('iframe').contentFrame().locator('#date_start_hours').selectOption(pad(starthr));
    await this.page.locator('iframe').contentFrame().locator('#date_start_minutes').selectOption(pad(startmin));
    await this.page.locator('iframe').contentFrame().locator('#date_end_date').fill(enddate);
    await this.page.locator('iframe').contentFrame().locator('#date_end_hours').selectOption(pad(endhr));
    await this.page.locator('iframe').contentFrame().locator('#date_end_minutes').selectOption(pad(endmin));
    await this.page.locator('iframe').contentFrame().locator('#description').fill(meetingdesc);
    await this.page.locator('iframe').contentFrame().getByRole('button', { name: 'As Contact' }).click();
    await this.page.locator('iframe').contentFrame().locator('input[name="first_name"]').fill(contactfname);
    await this.page.locator('iframe').contentFrame().locator('input[name="last_name"]').fill(contactlname);
    await this.page.locator('iframe').contentFrame().locator('input[name="email1"]').fill(contactemail);
    await this.page.locator('iframe').contentFrame().getByRole('button', { name: 'Create & Add' }).click();
    await this.page.locator('iframe').contentFrame().getByRole('button', { name: 'Save', description: 'Save [Alt+a]' }).click();
}

async verifyMeetingOverviewPage()
{
    await this.page.locator('iframe').contentFrame().getByText('OVERVIEW').waitFor({ state: 'visible' });

}

async navigateToScheduleCall()
{
    await this.page.locator('a').filter({ hasText: 'Calendar' }).click();
    await this.page.getByRole('link', { name: 'Schedule Call' }).click();
    await this.page.locator('iframe').contentFrame().getByText('OVERVIEW').waitFor({ state: 'visible' });
}

async inputCallDetails(subject, startdate, starthr, startmin, duration, calldesc, inviteesfname, inviteeslname,inviteesemail )
{
    const pad = (v) => String(v).padStart(2, '0');
    await this.page.locator('iframe').contentFrame().locator('#name').fill(subject);
    await this.page.locator('iframe').contentFrame().locator('#date_start_date').fill(startdate);
    await this.page.locator('iframe').contentFrame().locator('#date_start_hours').first().selectOption(pad(starthr));
    await this.page.locator('iframe').contentFrame().locator('#date_start_minutes').selectOption(pad(startmin));
    await this.page.locator('iframe').contentFrame().locator('#duration_minutes').selectOption(pad(duration));
    await this.page.locator('iframe').contentFrame().locator('#description').fill(calldesc);
    await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'First Name:' }).fill(inviteesfname);
    await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Last Name:' }).fill(inviteeslname);
    await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Email:' }).fill(inviteesemail);
    await this.page.locator('iframe').contentFrame().getByRole('button', { name: 'Save', description: 'Save [Alt+a]' }).click()
}


async verifyCallOverviewPage()
{
    await this.page.locator('iframe').contentFrame().getByText('Calls').waitFor({ state: 'visible' });

}

async navigateToCreateTaskPage()
{
     
    await this.page.locator('a').filter({ hasText: 'Calendar' }).click();
    await this.page.getByRole('link', { name: 'Create Task' }).click();
    await this.page.locator('div').filter({ hasText: /^TASK OVERVIEWOTHER$/ }).waitFor({ state: 'visible' });
}

async inputTaskDetails(subject, substartdate, subduedate, priority, taskdesc, taskstatus, taskaccount, enteranitem)
{

    const pad = (v) => String(v).padStart(2, '0');
    await this.page.getByRole('tabpanel', { name: 'TASK OVERVIEW' }).locator('input[type="text"]').fill(subject);
    await this.page.getByRole('tabpanel', { name: 'TASK OVERVIEW' }).locator('input[type="text"]').fill(substartdate);
    await this.page.getByRole('textbox', { name: 'yyyy-mm-dd hh:mm' }).nth(1).fill(subduedate);
    await this.page.locator('scrm-dropdownenum-edit').filter({ hasText: 'High Medium Low' }).getByRole('combobox').selectOption(pad(priority));
    await this.page.locator('textarea').fill(taskdesc);
    await this.page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Not Started In Progress' }).getByRole('combobox').selectOption(pad(taskstatus));
    await this.page.locator('scrm-group-field select').selectOption(pad(taskaccount));
    await this.page.getByRole('button', { name: 'Save' }).click();


}

async verifyTaskOverviewPage()
{
    await this.page.locator('div').filter({ hasText: /^TASK OVERVIEWOTHER$/ }).waitFor({ state: 'visible' });

}

async navigateToTodayPage()
{
    await this.page.locator('a').filter({ hasText: 'Calendar' }).click();
    await this.page.getByRole('link', { name: 'Today' }).click();
    await this.page.locator('iframe').contentFrame().getByText('Day Week Month Shared Month').waitFor({ state: 'visible' });
}

async verifyCurrentDate()
{
    const today = new Date();

const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
const year = today.getFullYear();
const month = today.toLocaleDateString('en-US', { month: 'long' });
const day = today.getDate();

const expectedDate = `${weekday} ${year} ${month} ${day}`;

const dateLocator = this.page.locator('div.col-xs-10.text-center h3');

await dateLocator.waitFor({state: 'visible',timeout: 15000});

const actualDate = await dateLocator.textContent();

//const actualDate = await this.page.locator('div.col-xs-10.text-center h3').textContent({timeout: 15000});

console.log("Expected:", expectedDate);
console.log("Actual:", actualDate.trim());

expect(actualDate.trim()).toBe(expectedDate);
}

async returnToHomePage()
{

    await this.page.getByRole('link').click();
    await this.page.frameLocator('iframe').getByRole('link', { name: 'SUITECRM DASHBOARD' }).waitFor({ state: 'visible' });
}


}