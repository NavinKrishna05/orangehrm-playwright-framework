import { test } from '../fixtures/loginFixture.js';
import { PIMPage } from '../pages/PIMPage.js';
import users from '../test-data/users.json';

test('Search Employee', async ({ page, loginPage }) => {

    // Create PIM page object
    const pimPage = new PIMPage(page);

    // Create a unique ID for every test run
    const uniqueId = Date.now();

    // Create a unique employee name
    const firstName = `${users.employeeDetails.firstName}${uniqueId}`;
    const lastName = users.employeeDetails.lastName;

    // Navigate to PIM page
    await pimPage.enterPIMpage();

    // Navigate to Add Employee page
    await pimPage.enterEmployeePage();

    // Enter employee details and save the employee
    await pimPage.addEmployeeDetails(
        firstName,
        lastName
    );

    // Verify that the employee was successfully added
    await pimPage.verifyEmployeeAdded(
        firstName,
        lastName
    );

    // Navigate to Employee List page
    await pimPage.enterEmployeeListPage();

    // Search for the newly created employee
    await pimPage.searchEmployee(
        `${firstName} ${lastName}`
    );

    // Verify that the employee appears in the search result
    await pimPage.verifyEmployeeSearchResult(
        firstName,
        lastName
    );
});