export class Loginpage
{
constructor(page)
{
    this.page=page;
}

async launchSuiteCRM()
{
    await this.page.goto('https://suite8demo.suiteondemand.com/#/Login');
}

async enterCredentials(US, PW)
{

    await this.page.locator('//input[@name="username"]').fill(US);
    await this.page.locator('//input[@name="password"]').fill(PW);
    await this.page.locator('//button[@id="login-button"]').click();
}

async verifyHomePage()
{
    await this.page.frameLocator('iframe').getByRole('link', { name: 'SUITECRM DASHBOARD' }).waitFor({ state: 'visible' });
}


}