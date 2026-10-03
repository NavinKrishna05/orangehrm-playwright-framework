import{test,expect}from'@playwright/test';
import{LoginPage}from'../pages/LoginPage';
import{DashboardPage}from'../pages/DashboardPage';
import users from'../test-data/users.json';

test('Logout after successful login',async({page})=>{
    const loginPage=new LoginPage(page);
    const dashboardPage=new DashboardPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login(
        users.validUser.username,
        users.validUser.password);
    await loginPage.verifyLoginSuccess();
    
    await dashboardPage.logout();
    await dashboardPage.verifyLogoutSuccess();
});