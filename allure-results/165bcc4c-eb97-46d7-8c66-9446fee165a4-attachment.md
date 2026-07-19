# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\calendarpage.feature.spec.js >> CRMCalendar >> Verify Current Date
- Location: .features-gen\features\calendarpage.feature.spec.js:10:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div.col-xs-10.text-center h3')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link [ref=e11] [cursor=pointer]:
              - /url: "#/home"
              - img [ref=e14]
        - list [ref=e18]:
          - listitem [ref=e19]:
            - generic [ref=e26]: Calendar
          - listitem [ref=e27]:
            - generic [ref=e34]: Accounts
          - listitem [ref=e35]:
            - generic [ref=e42]: Contacts
          - listitem [ref=e43]:
            - generic [ref=e50]: Opportunities
          - listitem [ref=e51]:
            - generic [ref=e58]: Leads
          - listitem [ref=e59]:
            - generic [ref=e66]: Quotes
          - listitem [ref=e67]:
            - generic [ref=e74]: Documents
        - list [ref=e77]:
          - listitem [ref=e78]:
            - generic [ref=e80]: More
      - generic [ref=e81]:
        - list [ref=e83]:
          - listitem [ref=e84]:
            - generic "Quick Create" [ref=e85] [cursor=pointer]:
              - img [ref=e88]
        - list [ref=e92]:
          - listitem [ref=e93]:
            - generic "Recently Viewed" [ref=e94] [cursor=pointer]:
              - img [ref=e97]
        - generic [ref=e104]:
          - textbox "Search" [ref=e105]:
            - /placeholder: Search...
          - button "Search" [ref=e107] [cursor=pointer]:
            - img [ref=e110]
      - list [ref=e117]:
        - listitem [ref=e118]:
          - img [ref=e122]
    - iframe [ref=e130]:
      
  - generic [ref=e132]:
    - generic [ref=e133]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e136] [cursor=pointer]:
      - text: Back To Top
      - img [ref=e139]
```

# Test source

```ts
  19  |     const pad = (v) => String(v).padStart(2, '0');
  20  |     await this.page.locator('iframe').contentFrame().locator('#name').fill(subject);
  21  |     await this.page.locator('iframe').contentFrame().locator('#date_start_date').fill(startdate);
  22  |     await this.page.locator('iframe').contentFrame().locator('#date_start_hours').selectOption(pad(starthr));
  23  |     await this.page.locator('iframe').contentFrame().locator('#date_start_minutes').selectOption(pad(startmin));
  24  |     await this.page.locator('iframe').contentFrame().locator('#date_end_date').fill(enddate);
  25  |     await this.page.locator('iframe').contentFrame().locator('#date_end_hours').selectOption(pad(endhr));
  26  |     await this.page.locator('iframe').contentFrame().locator('#date_end_minutes').selectOption(pad(endmin));
  27  |     await this.page.locator('iframe').contentFrame().locator('#description').fill(meetingdesc);
  28  |     await this.page.locator('iframe').contentFrame().getByRole('button', { name: 'As Contact' }).click();
  29  |     await this.page.locator('iframe').contentFrame().locator('input[name="first_name"]').fill(contactfname);
  30  |     await this.page.locator('iframe').contentFrame().locator('input[name="last_name"]').fill(contactlname);
  31  |     await this.page.locator('iframe').contentFrame().locator('input[name="email1"]').fill(contactemail);
  32  |     await this.page.locator('iframe').contentFrame().getByRole('button', { name: 'Create & Add' }).click();
  33  |     await this.page.locator('iframe').contentFrame().getByRole('button', { name: 'Save', description: 'Save [Alt+a]' }).click();
  34  | }
  35  | 
  36  | async verifyMeetingOverviewPage()
  37  | {
  38  |     await this.page.locator('iframe').contentFrame().getByText('OVERVIEW').waitFor({ state: 'visible' });
  39  | 
  40  | }
  41  | 
  42  | async navigateToScheduleCall()
  43  | {
  44  |     await this.page.locator('a').filter({ hasText: 'Calendar' }).click();
  45  |     await this.page.getByRole('link', { name: 'Schedule Call' }).click();
  46  |     await this.page.locator('iframe').contentFrame().getByText('OVERVIEW').waitFor({ state: 'visible' });
  47  | }
  48  | 
  49  | async inputCallDetails(subject, startdate, starthr, startmin, duration, calldesc, inviteesfname, inviteeslname,inviteesemail )
  50  | {
  51  |     const pad = (v) => String(v).padStart(2, '0');
  52  |     await this.page.locator('iframe').contentFrame().locator('#name').fill(subject);
  53  |     await this.page.locator('iframe').contentFrame().locator('#date_start_date').fill(startdate);
  54  |     await this.page.locator('iframe').contentFrame().locator('#date_start_hours').first().selectOption(pad(starthr));
  55  |     await this.page.locator('iframe').contentFrame().locator('#date_start_minutes').selectOption(pad(startmin));
  56  |     await this.page.locator('iframe').contentFrame().locator('#duration_minutes').selectOption(pad(duration));
  57  |     await this.page.locator('iframe').contentFrame().locator('#description').fill(calldesc);
  58  |     await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'First Name:' }).fill(inviteesfname);
  59  |     await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Last Name:' }).fill(inviteeslname);
  60  |     await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Email:' }).fill(inviteesemail);
  61  |     await this.page.locator('iframe').contentFrame().getByRole('button', { name: 'Save', description: 'Save [Alt+a]' }).click()
  62  | }
  63  | 
  64  | 
  65  | async verifyCallOverviewPage()
  66  | {
  67  |     await this.page.locator('iframe').contentFrame().getByText('Calls').waitFor({ state: 'visible' });
  68  | 
  69  | }
  70  | 
  71  | async navigateToCreateTaskPage()
  72  | {
  73  |      
  74  |     await this.page.locator('a').filter({ hasText: 'Calendar' }).click();
  75  |     await this.page.getByRole('link', { name: 'Create Task' }).click();
  76  |     await this.page.locator('div').filter({ hasText: /^TASK OVERVIEWOTHER$/ }).waitFor({ state: 'visible' });
  77  | }
  78  | 
  79  | async inputTaskDetails(subject, substartdate, subduedate, priority, taskdesc, taskstatus, taskaccount, enteranitem)
  80  | {
  81  | 
  82  |     const pad = (v) => String(v).padStart(2, '0');
  83  |     await this.page.getByRole('tabpanel', { name: 'TASK OVERVIEW' }).locator('input[type="text"]').fill(subject);
  84  |     await this.page.getByRole('tabpanel', { name: 'TASK OVERVIEW' }).locator('input[type="text"]').fill(substartdate);
  85  |     await this.page.getByRole('textbox', { name: 'yyyy-mm-dd hh:mm' }).nth(1).fill(subduedate);
  86  |     await this.page.locator('scrm-dropdownenum-edit').filter({ hasText: 'High Medium Low' }).getByRole('combobox').selectOption(pad(priority));
  87  |     await this.page.locator('textarea').fill(taskdesc);
  88  |     await this.page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Not Started In Progress' }).getByRole('combobox').selectOption(pad(taskstatus));
  89  |     await this.page.locator('scrm-group-field select').selectOption(pad(taskaccount));
  90  |     await this.page.getByRole('button', { name: 'Save' }).click();
  91  | 
  92  | 
  93  | }
  94  | 
  95  | async verifyTaskOverviewPage()
  96  | {
  97  |     await this.page.locator('div').filter({ hasText: /^TASK OVERVIEWOTHER$/ }).waitFor({ state: 'visible' });
  98  | 
  99  | }
  100 | 
  101 | async navigateToTodayPage()
  102 | {
  103 |     await this.page.locator('a').filter({ hasText: 'Calendar' }).click();
  104 |     await this.page.getByRole('link', { name: 'Today' }).click();
  105 |     await this.page.locator('iframe').contentFrame().getByText('Day Week Month Shared Month').waitFor({ state: 'visible' });
  106 | }
  107 | 
  108 | async verifyCurrentDate()
  109 | {
  110 |     const today = new Date();
  111 | 
  112 | const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
  113 | const year = today.getFullYear();
  114 | const month = today.toLocaleDateString('en-US', { month: 'long' });
  115 | const day = today.getDate();
  116 | 
  117 | const expectedDate = `${weekday} ${year} ${month} ${day}`;
  118 | 
> 119 | const actualDate = await this.page.locator('div.col-xs-10.text-center h3').textContent();
      |                                                                            ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  120 | 
  121 | console.log("Expected:", expectedDate);
  122 | console.log("Actual:", actualDate);
  123 | 
  124 | expect(actualDate.trim()).toBe(expectedDate);
  125 | }
  126 | 
  127 | async returnToHomePage()
  128 | {
  129 | 
  130 |     await this.page.getByRole('link').click();
  131 |     await this.page.frameLocator('iframe').getByRole('link', { name: 'SUITECRM DASHBOARD' }).waitFor({ state: 'visible' });
  132 | }
  133 | 
  134 | 
  135 | }
```