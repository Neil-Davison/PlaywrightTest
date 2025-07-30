import { expect, Locator, Page, } from "@playwright/test";
export class LoginPage {

    // Declarations.
    private page: Page;
    private loginOpenButton: Locator;
    private userName: Locator;
    private password: Locator;
    private clickLoginButton: Locator;
    private clickLogoutButton: Locator;
    private rememberMeCheckbox: Locator;
    private appURL: string;

    // Instantiations.
    constructor(page: Page) {

        this.page = page;
        this.loginOpenButton = page.locator('.ico-login');
        this.userName = page.getByRole('textbox', { name: 'Email'});
        this.password = page.getByRole('textbox', { name: 'Password'});
        this.clickLoginButton = page.locator('.login-button');
        this.clickLogoutButton = page.getByText('Log out');
        this.rememberMeCheckbox = page.locator('#RememberMe');
        //this.appURL = ('https://demowebshop.tricentis.com/');

    }

    // Methods.
    async launchDemoWebshop(base: string) {
        // Enter the app URL and check that it is successfully launched.
        await this.page.goto(base);
        await expect(this.page.getByText("Welcome to our store")).toBeVisible({timeout: 5000});

        // Maximize the page.
        await this.page.setViewportSize({width: 1914, height: 1034});
    }

    async openLoginPage() {
        await this.loginOpenButton.click();
        await expect(this.page.getByText("Please Sign In")).toBeVisible({timeout: 2000});
    }

    async enterUserName(userName: string) {
        await this.userName.fill(userName);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }
    
    async clickLoginSubmit() {
        await this.clickLoginButton.click();
    }

    async checkRememberMe() {
        await this.rememberMeCheckbox.check({timeout: 5000});
        await expect(this.rememberMeCheckbox).toBeChecked({timeout: 2000});
    }

    async processLogoutPage() {
        await this.clickLogoutButton.click();

        await this.page.waitForTimeout(2000);
        this.page.close();
    }
}
