export class Accountspage
{
constructor(page)
{
    this.page=page;
}

async navigateToCreateAccount()
{
    await this.page.locator('a').filter({ hasText: /^Accounts$/ }).click();
    await this.page.getByRole('link', { name: 'Create Account' }).click();
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

}

}
