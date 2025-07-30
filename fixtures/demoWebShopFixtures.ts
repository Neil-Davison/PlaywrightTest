import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/demoWebShop_Login";
import yaml from 'js-yaml';   //new
import fs from 'fs';          //new

const testData = yaml.load(                                                                                   //new
  fs.readFileSync('C:\\Users\\NeilDavison\\OneDrive - Elysium Digital\\Documents\\testData.yaml', 'utf8')     //new
) as any;                                                                                                     //new

export const test = baseTest.extend<{
  authenticateLoginPage: LoginPage,
  authenticateLogoutPage: LoginPage
}>({
  authenticateLoginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    // ********************************************************************************
    // ******** Launch the app and use the supplied user credentials to login. ********
    // ********************************************************************************

    // Fire the app URL into a browser and maximize the screen.
    await loginPage.launchDemoWebshop(testData.URLs.base);

    // Click on the 'Login' button to open the login screen, check the welcome message.
    await loginPage.openLoginPage();

    // Enter a valid User Name.
    //await loginPage.enterUserName('Test02.shopper@dws.com');
    await loginPage.enterUserName(testData.login.username);

    // Enter a valid password.
    await loginPage.enterPassword(testData.login.password);

    // Ensure the 'Remember Me' checkbox is checked.
    await loginPage.checkRememberMe();

    // Click the 'Log In' submit button and ensure that the 'Products' page is launched.
    await loginPage.clickLoginSubmit();

    // Return the authenticated Login page for use in the test.
    await use(loginPage);

  }

});
