import { test } from '../fixtures/loginFixture.js';
import { PIMPage } from '../pages/PIMPage.js';
import users from '../test-data/users.json';

test('Search Employee', async ({page , loginPage}) => {

   
    const pimPage = new PIMPage(page);

    await pimPage.enterPIMpage();

    await pimPage.enterEmployeeListPage();

    await pimPage.searchEmployee(
        `${users.employeeDetails.firstName} ${users.employeeDetails.lastName}`
    );

    await page.screenshot({ path: 'search-result.png', fullPage: true });


    await pimPage.verifyEmployeeSearchResult(
        users.employeeDetails.firstName,
        users.employeeDetails.lastName
    );
});