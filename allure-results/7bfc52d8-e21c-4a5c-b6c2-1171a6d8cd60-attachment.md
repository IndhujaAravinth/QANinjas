# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\loginpage.feature.spec.js >> CRMLogin >> Login loads successfully
- Location: .features-gen\features\loginpage.feature.spec.js:6:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe').contentFrame().getByRole('link', { name: 'SUITECRM DASHBOARD' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e25]:
      - generic [ref=e26]:
        - list [ref=e29]:
          - listitem [ref=e30]:
            - link [ref=e31] [cursor=pointer]:
              - /url: "#/home"
              - img [ref=e34]
        - list
      - generic [ref=e38]:
        - list [ref=e40]:
          - listitem [ref=e41]:
            - generic "Quick Create" [ref=e42] [cursor=pointer]:
              - img [ref=e45]
        - list [ref=e49]:
          - listitem [ref=e50]:
            - generic "Recently Viewed" [ref=e51] [cursor=pointer]:
              - img [ref=e54]
        - generic [ref=e61]:
          - textbox "Search" [ref=e62]:
            - /placeholder: Search...
          - button "Search" [ref=e64] [cursor=pointer]:
            - img [ref=e67]
      - list [ref=e74]:
        - listitem [ref=e75]:
          - img [ref=e79]
    - generic [ref=e93]:
      - generic [ref=e94]:
        - generic:
          - generic:
            - img
        - textbox "Username" [ref=e95]: will
      - generic [ref=e96]:
        - generic:
          - generic:
            - img:
              - generic:
                - generic: "***"
        - textbox "Password" [ref=e97]: will
      - button "Log In" [disabled] [ref=e98]
  - generic [ref=e100]:
    - generic [ref=e101]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e104] [cursor=pointer]:
      - text: Back To Top
      - img [ref=e107]
```

# Test source

```ts
  1  | import logger from '../utils/logger.js';
  2  | export class Loginpage
  3  | {
  4  | constructor(page)
  5  | {
  6  |     this.page=page;
  7  | }
  8  | 
  9  | async launchSuiteCRM()
  10 | {
  11 |     await this.page.goto('https://suite8demo.suiteondemand.com/#/Login');
  12 |     await this.page.locator('div').filter({ hasText: '*** Log In' }).nth(1).waitFor({ state: 'visible' });
  13 | 
  14 | }
  15 | 
  16 | async enterCredentials(US, PW)
  17 | {
  18 |     logger.info("Enter username and password");
  19 |     await this.page.locator('//input[@name="username"]').fill(US);
  20 |     await this.page.locator('//input[@name="password"]').fill(PW);
  21 |     logger.info('Clicking Login button');
  22 |     await this.page.locator('//button[@id="login-button"]').click();
  23 |     logger.info('Login successful');
> 24 |     await this.page.frameLocator('iframe').getByRole('link', { name: 'SUITECRM DASHBOARD' }).waitFor({ state: 'visible' });
     |                                                                                              ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  25 | }
  26 | 
  27 | async verifyHomePage()
  28 | {
  29 |     await this.page.frameLocator('iframe').getByRole('link', { name: 'SUITECRM DASHBOARD' }).waitFor({ state: 'visible' });
  30 | }
  31 | 
  32 | 
  33 | }
```