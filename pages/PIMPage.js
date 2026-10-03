import { expect } from '@playwright/test';

export class PIMPage {

    constructor(page) {

        this.page = page;

        this.clickPIM = page.getByRole('link', { name: 'PIM' });
        this.verifyPIMPage = page.getByRole('heading', { name: 'PIM' });

        this.clickAddEmployee = page.getByRole('link', { name: 'Add Employee' });
        this.verifyEmployeeHeading = page.getByRole('heading', { name: 'Add Employee' });

        this.fillFirstName = page.getByRole('textbox', { name: 'First Name' });
        this.fillLastName = page.getByRole('textbox', { name: 'Last Name' });

        this.clickSave = page.getByRole('button', { name: 'Save' });

        this.verifySavedMessage = page.getByText('Successfully Saved');

        this.clickEmployeeList = page.getByRole('link', { name: 'Employee List' });

        this.employeeNameSearch = page.getByPlaceholder('Type for hints...').first();

        this.searchButton = page.getByRole('button', { name: 'Search' });

        this.deletebutton = page.getByRole('button', { name: 'Delete' }).first();
       
    }


async enterPIMpage() {
    await this.clickPIM.click();
    await expect(this.verifyPIMPage).toBeVisible();
}

async enterEmployeePage() {
    await this.clickAddEmployee.click();
    await expect(this.verifyEmployeeHeading).toBeVisible();  
}

async addEmployeeDetails(firstName ,lastName) {
    await this.fillFirstName.fill(firstName);
    await this.fillLastName.fill(lastName);
    await this.clickSave.click();
    await expect(this.verifySavedMessage).toBeVisible();
}

async verifyEmployeeAdded(firstName, lastName) {
    const employeeName = `${firstName} ${lastName}`;

    await expect(
        this.page.getByRole('heading', { name: employeeName })
    ).toBeVisible();
}

async enterEmployeeListPage() {
    await this.clickEmployeeList.click();
}

async searchEmployee(employeeName) {
    await this.employeeNameSearch.fill(employeeName);
    await this.searchButton.click();
    await this.page.waitForTimeout(3000);
}

async verifyEmployeeSearchResult(firstName, lastName) {
    const employeeRow = this.page.getByRole('row').filter({
        hasText: `${firstName} ${lastName}`
    }).first();

    await expect(employeeRow).toBeVisible({ timeout: 10000 });
}

async deleteEmployee(firstName, lastName) {
    const employeeRow = this.page.getByRole('row').filter({
        hasText: `${firstName} ${lastName}`
    }).first();

    await employeeRow.locator('button').last().click();
    await this.page.getByRole('button', { name: 'Yes' }).click();

}

async verifyEmployeeDeleted(firstName, lastName) {
    const employeeRow = this.page.getByRole('row').filter({
        hasText: `${firstName} ${lastName}`
    });

    await expect(employeeRow).toHaveCount(0);
}

}