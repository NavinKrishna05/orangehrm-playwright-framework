import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import users from '../test-data/users.json';

export const test = base.extend({
    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginPage.usernameInput.waitFor();

        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );

        await loginPage.verifyLoginSuccess();

        await use(loginPage);
    }
});

export { expect } from '@playwright/test';