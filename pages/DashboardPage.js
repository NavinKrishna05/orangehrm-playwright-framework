import { expect } from '@playwright/test';
export class DashboardPage {

    constructor(page) {
        this.page = page;
        this.userDropdown = page.locator('.oxd-userdropdown-name');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutButton.click();
    }

    async verifyLogoutSuccess() {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }


}