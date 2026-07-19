import { expect } from '@playwright/test';
export class Accountspage

{
constructor(page)
{
    this.page=page;
}

async loginApplication(US, PW)
{
    await this.page.goto('https://suite8demo.suiteondemand.com/#/Login');
    //await this.page.waitForLoadState('networkidle');
    await this.page.locator('div').filter({ hasText: '*** Log In' }).nth(1).waitFor({ state: 'visible' });
    await this.page.locator('//input[@name="username"]').fill(US);
    await this.page.locator('//input[@name="password"]').fill(PW);
    await this.page.locator('//button[@id="login-button"]').click();
}

async navigateToCreateAccount()
{
    //await this.page.locator('a').filter({ hasText: /^Accounts$/ }).click();
    //await this.page.locator('a[href="#/accounts"]').click();
    //await this.page.getByText('Accounts', { exact: true }).click();
    await this.page.locator('a.top-nav-link.dropdown-toggle', { hasText: 'Accounts' }).click();
    await this.page.getByRole('link', { name: 'Create Account' }).click();
    await this.page.getByRole('tab', { name: 'OVERVIEW' }).waitFor({ state: 'visible' });
}

async enterAccountInformation(Accname, email, street, postalcode, billingcity, billingstate, billingcountry, desc)
{
      await this.page.getByRole('textbox').nth(1).fill(Accname);
      await this.page.locator('scrm-composite-field').getByRole('textbox').fill(email);
      await this.page.locator('scrm-group-field').filter({ hasText: 'Billing Street Billing Postal' }).locator('textarea').fill(street);
      await this.page.locator('input[type="text"]').nth(5).fill(postalcode);
      await this.page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_city > .d-flex > .flex-grow-1 > .form-control').fill(billingcity);
      await this.page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_state > .d-flex > .flex-grow-1 > .form-control').fill(billingstate);
      await this.page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_country > .d-flex > .flex-grow-1 > .form-control').fill(billingcountry);
      await this.page.locator('textarea').nth(2).fill(desc);
}

async saveAccountInformation()
{
    await this.page.getByRole('button', { name: 'Save' }).click();
    await this.page.getByRole('tab', { name: 'OVERVIEW' }).waitFor({ state: 'visible' });

}

async verifyAccountOverviewPage(accountName)
{
    await this.page.getByRole('tab', { name: 'OVERVIEW' }).waitFor({ state: 'visible' });
    
    //await this.page.locator('.tab-content').waitFor({state: 'visible'});
    if (accountName) {
      await expect(this.page.getByText(accountName).first()).toBeVisible();
    
    }
}

async navigateToViewAccount()

{
    await this.page.locator('a').filter({ hasText: /^Accounts$/ }).click();
    await this.page.getByRole('link', { name: 'View Accounts' }).click();
    await this.page.locator('div').filter({ hasText: 'Select All Select This Page' }).nth(4).waitFor({ state: 'visible' });

}

async searchAndViewAccount(accountName)
{
    //const row = this.page.locator('tr', { hasText: accountName });
    const row = this.page.locator('tr', { hasText: accountName });
    await row.locator('a', { hasText: accountName }).first().click();

       /* while (true) {
        const row = this.page.locator('tr').filter({ hasText: accountName });
        if (await row.count() > 0) {
            await row.locator('a', { hasText: accountName }).first().click();
            return;
        }
        const nextBtn = this.page.getByRole('button', { name: 'Next page' });
        if (await nextBtn.isDisabled()) break;
        await nextBtn.click();
        await this.page.waitForLoadState('networkidle');
    }
    throw new Error(`Account "${accountName}" not found in any page`); */
}

async searchAndViewAccount1(accountName)
{
   
    await this.page.locator('a').filter({ hasText: /^Accounts$/ }).click();
    await this.page.getByRole('link', { name: 'View Accounts' }).click();
    
    /*if (accountName) {
      await expect(this.page.getByText(accountName).first()).toBeVisible();
    }*/
    const row = this.page.locator('tr', { hasText: accountName });
    await row.locator('a', { hasText: accountName }).first().click();
    await this.page.getByRole('tab', { name: 'OVERVIEW' }).waitFor({ state: 'visible' });

    /*while (true) {
        const row = this.page.locator('tr').filter({ hasText: accountName });
        if (await row.count() > 0) {
            await row.locator('a', { hasText: accountName }).first().click();
            return;
        }
        const nextBtn = this.page.getByRole('button', { name: 'Next page' });
        if (await nextBtn.isDisabled()) break;
        await nextBtn.click();
        await this.page.waitForLoadState('networkidle');
    }
    throw new Error(`Account "${accountName}" not found in any page`); */
}




async sortAccountRecords()
{
    //await this.page.locator('a').filter({ hasText: /^Accounts$/ }).click();
    //await this.page.getByRole('link', { name: 'View Accounts' }).click();
    await this.page.locator('th', { hasText: 'Billing Country' }).click();   
    await this.page.waitForLoadState('networkidle');             
}

async verifySortedAccountRecords()
{
  //await this.page.locator('th', { hasText: 'City' }).click();
  //await this.page.waitForLoadState('networkidle');
  const values = await this.page.locator('tbody tr td:nth-child(5)').allTextContents();
  const cleaned = values.map(v => v.trim()).filter(v => v.length > 0);
  //const sorted = [...cleaned].sort((a, b) => b.localeCompare(a)); // descending
  const sorted = [...cleaned].sort((a, b) => a.localeCompare(b)); // ascending
  expect(cleaned).toEqual(sorted);
}

async navigateToHomePage()
{
    //await this.page.waitForLoadState('networkidle');
    //await this.page.locator("//div[@id='content']").waitFor({ state: 'visible' });
    await this.page.frameLocator('iframe').getByRole('link', { name: 'SUITECRM DASHBOARD' }).waitFor({ state: 'visible' });
}
async userPerformsGlobalSearch(accountName)
{
    //await this.page.getByRole('textbox', { name: 'Search' }).fill(accountName);
    //await this.page.getByRole('button', { name: 'Search' }).click();
    //await this.page.getByRole('link', { name: accountName }).first().click();

    await this.page.getByRole('textbox', { name: 'Search' }).fill(accountName);
    await this.page.getByRole('button', { name: 'Search' }).click();

    const frame = this.page.frameLocator('iframe');
    await frame.getByRole('link', { name: accountName }).first().click();

}

async duplicateAccount()
{
    //await this.page.getByRole('tab', { name: 'OVERVIEW' }).waitFor({ state: 'visible' });
    await this.page.locator('scrm-base-record-header').getByRole('button', { name: 'Actions' }).click();
    await this.page.locator('a').filter({ hasText: 'Duplicate' }).nth(1).click();
    await this.page.getByRole('button', { name: 'Save' }).click();
}

async deleteAccount()
{
    //await this.page.getByRole('tab', { name: 'OVERVIEW' }).waitFor({ state: 'visible' });
    await this.page.locator('scrm-base-record-header').getByRole('button', { name: 'Actions' }).click();
    await this.page.locator('a').filter({ hasText: 'Delete' }).click();
    await this.page.getByRole('button', { name: 'Proceed' }).click();
    

}

async verifyAccountDeletion()
{

   /* const blinkingText = this.page.locator("//*[contains(concat(' ', normalize-space(@class), ' '), ' blink ')]");
    await expect(blinkingText).toHaveText('Record deleted successfully'); */
    await this.page.locator('div').filter({ hasText: 'Select All Select This Page' }).nth(4).waitFor({ state: 'visible' });
}

}