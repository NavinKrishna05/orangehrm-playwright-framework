import { test } from '../fixtures/loginFixture.js';
import { PIMPage } from '../pages/PIMPage.js';
import users from '../test-data/users.json';

test('Add Employee', async ({ page, loginPage }) => {

    
    const pimPage = new PIMPage(page);

    await pimPage.enterPIMpage();
    await pimPage.enterEmployeePage();

    await pimPage.addEmployeeDetails(
        users.employeeDetails.firstName,
        users.employeeDetails.lastName
    );

    await pimPage.verifyEmployeeAdded(
        users.employeeDetails.firstName,
        users.employeeDetails.lastName
    );
});