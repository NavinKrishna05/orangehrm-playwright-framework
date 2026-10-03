import { test } from '../fixtures/loginFixture.js';

import { PIMPage } from '../pages/PIMPage.js';
import users from '../test-data/users.json';

test('Delete Employee', async ({ page, loginPage }) => {

    const pimPage = new PIMPage(page);

    await pimPage.enterPIMpage();

    await pimPage.enterEmployeeListPage();

    await pimPage.searchEmployee(
        `${users.employeeDetails.firstName} ${users.employeeDetails.lastName}`
    );

    await pimPage.deleteEmployee(
        users.employeeDetails.firstName,
        users.employeeDetails.lastName
    );

    await pimPage.verifyEmployeeDeleted(
        users.employeeDetails.firstName,
        users.employeeDetails.lastName
    );
});