import{test}from'@playwright/test';
import{LoginPage}from'../pages/LoginPage';
import users from'../test-data/users.json';



test('Login with valid credentials',async({page})=>{
    const loginPage=new LoginPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login(
        users.validUser.username,
        users.validUser.password);

    await loginPage.verifyLoginSuccess();
});

