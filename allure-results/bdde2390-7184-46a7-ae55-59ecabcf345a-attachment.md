# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\calendarpage.feature.spec.js >> CRMCalendar >> Verify Current Date
- Location: .features-gen\features\calendarpage.feature.spec.js:10:3

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div').filter({ hasText: '*** Log In' }).nth(1) to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e25]:
    - list [ref=e27]:
      - listitem [ref=e28]
  - generic [ref=e33]: © Supercharged by SuiteCRM © Powered By SugarCRM
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | export class Accountspage
  3   | 
  4   | {
  5   | constructor(page)
  6   | {
  7   |     this.page=page;
  8   | }
  9   | 
  10  | async loginApplication(US, PW)
  11  | {
  12  |     await this.page.goto('https://suite8demo.suiteondemand.com/#/Login');
  13  |     //await this.page.waitForLoadState('networkidle');
> 14  |     await this.page.locator('div').filter({ hasText: '*** Log In' }).nth(1).waitFor({ state: 'visible' });
      |                                                                             ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  15  |     await this.page.locator('//input[@name="username"]').fill(US);
  16  |     await this.page.locator('//input[@name="password"]').fill(PW);
  17  |     await this.page.locator('//button[@id="login-button"]').click();
  18  | }
  19  | 
  20  | async navigateToCreateAccount()
  21  | {
  22  |     //await this.page.locator('a').filter({ hasText: /^Accounts$/ }).click();
  23  |     //await this.page.locator('a[href="#/accounts"]').click();
  24  |     //await this.page.getByText('Accounts', { exact: true }).click();
  25  |     await this.page.locator('a.top-nav-link.dropdown-toggle', { hasText: 'Accounts' }).click();
  26  |     await this.page.getByRole('link', { name: 'Create Account' }).click();
  27  |     await this.page.getByRole('tab', { name: 'OVERVIEW' }).waitFor({ state: 'visible' });
  28  | }
  29  | 
  30  | async enterAccountInformation(Accname, email, street, postalcode, billingcity, billingstate, billingcountry, desc)
  31  | {
  32  |       await this.page.getByRole('textbox').nth(1).fill(Accname);
  33  |       await this.page.locator('scrm-composite-field').getByRole('textbox').fill(email);
  34  |       await this.page.locator('scrm-group-field').filter({ hasText: 'Billing Street Billing Postal' }).locator('textarea').fill(street);
  35  |       await this.page.locator('input[type="text"]').nth(5).fill(postalcode);
  36  |       await this.page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_city > .d-flex > .flex-grow-1 > .form-control').fill(billingcity);
  37  |       await this.page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_state > .d-flex > .flex-grow-1 > .form-control').fill(billingstate);
  38  |       await this.page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_country > .d-flex > .flex-grow-1 > .form-control').fill(billingcountry);
  39  |       await this.page.locator('textarea').nth(2).fill(desc);
  40  | }
  41  | 
  42  | async saveAccountInformation()
  43  | {
  44  |     await this.page.getByRole('button', { name: 'Save' }).click();
  45  |     await this.page.getByRole('tab', { name: 'OVERVIEW' }).waitFor({ state: 'visible' });
  46  | 
  47  | }
  48  | 
  49  | async verifyAccountOverviewPage(accountName)
  50  | {
  51  |     await this.page.getByRole('tab', { name: 'OVERVIEW' }).waitFor({ state: 'visible' });
  52  |     
  53  |     //await this.page.locator('.tab-content').waitFor({state: 'visible'});
  54  |     if (accountName) {
  55  |       await expect(this.page.getByText(accountName).first()).toBeVisible();
  56  |     
  57  |     }
  58  | }
  59  | 
  60  | async navigateToViewAccount()
  61  | 
  62  | {
  63  |     await this.page.locator('a').filter({ hasText: /^Accounts$/ }).click();
  64  |     await this.page.getByRole('link', { name: 'View Accounts' }).click();
  65  |     await this.page.locator('div').filter({ hasText: 'Select All Select This Page' }).nth(4).waitFor({ state: 'visible' });
  66  | 
  67  | }
  68  | 
  69  | async searchAndViewAccount(accountName)
  70  | {
  71  |     //const row = this.page.locator('tr', { hasText: accountName });
  72  |     const row = this.page.locator('tr', { hasText: accountName });
  73  |     await row.locator('a', { hasText: accountName }).first().click();
  74  | 
  75  |        /* while (true) {
  76  |         const row = this.page.locator('tr').filter({ hasText: accountName });
  77  |         if (await row.count() > 0) {
  78  |             await row.locator('a', { hasText: accountName }).first().click();
  79  |             return;
  80  |         }
  81  |         const nextBtn = this.page.getByRole('button', { name: 'Next page' });
  82  |         if (await nextBtn.isDisabled()) break;
  83  |         await nextBtn.click();
  84  |         await this.page.waitForLoadState('networkidle');
  85  |     }
  86  |     throw new Error(`Account "${accountName}" not found in any page`); */
  87  | }
  88  | 
  89  | async searchAndViewAccount1(accountName)
  90  | {
  91  |    
  92  |     await this.page.locator('a').filter({ hasText: /^Accounts$/ }).click();
  93  |     await this.page.getByRole('link', { name: 'View Accounts' }).click();
  94  |     
  95  |     /*if (accountName) {
  96  |       await expect(this.page.getByText(accountName).first()).toBeVisible();
  97  |     }*/
  98  |     const row = this.page.locator('tr', { hasText: accountName });
  99  |     await row.locator('a', { hasText: accountName }).first().click();
  100 |     await this.page.getByRole('tab', { name: 'OVERVIEW' }).waitFor({ state: 'visible' });
  101 | 
  102 |     /*while (true) {
  103 |         const row = this.page.locator('tr').filter({ hasText: accountName });
  104 |         if (await row.count() > 0) {
  105 |             await row.locator('a', { hasText: accountName }).first().click();
  106 |             return;
  107 |         }
  108 |         const nextBtn = this.page.getByRole('button', { name: 'Next page' });
  109 |         if (await nextBtn.isDisabled()) break;
  110 |         await nextBtn.click();
  111 |         await this.page.waitForLoadState('networkidle');
  112 |     }
  113 |     throw new Error(`Account "${accountName}" not found in any page`); */
  114 | }
```