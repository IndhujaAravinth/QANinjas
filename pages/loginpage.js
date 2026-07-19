import logger from '../utils/logger.js';
export class Loginpage
{
constructor(page)
{
    this.page=page;
}

async launchSuiteCRM()
{
    await this.page.goto('https://suite8demo.suiteondemand.com/#/Login');
    await this.page.locator('div').filter({ hasText: '*** Log In' }).nth(1).waitFor({ state: 'visible' });

}

async enterCredentials(US, PW)
{
    logger.info("Enter username and password");
    await this.page.locator('//input[@name="username"]').fill(US);
    await this.page.locator('//input[@name="password"]').fill(PW);
    logger.info('Clicking Login button');
    await this.page.locator('//button[@id="login-button"]').click();
    logger.info('Login successful');
    await this.page.frameLocator('iframe').getByRole('link', { name: 'SUITECRM DASHBOARD' }).waitFor({ state: 'visible' });
}

async verifyHomePage()
{
    await this.page.frameLocator('iframe').getByRole('link', { name: 'SUITECRM DASHBOARD' }).waitFor({ state: 'visible' });
}


}