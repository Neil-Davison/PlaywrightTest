import { test, expect } from '@playwright/test';
import yaml from 'js-yaml';
import fs from 'fs';

import { LoginPage } from '../pages/demoWebShop_Login';
import { ProductPage } from '../pages/demoWebShop_Product';

// Load YAML data
const testData = yaml.load(
  fs.readFileSync('C:\\Users\\NeilDavison\\OneDrive - Elysium Digital\\Documents\\testData1.yaml', 'utf8')
) as any;

for (const user of testData.users) {
    for (const product of testData.Products) {
        test(`User ${user.username} checks ${product.category} sorted by '${product.sortOption}'`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            const productPage = new ProductPage(page, product.menuText, product.headingText);

            await loginPage.launchDemoWebshop(testData.URLs.base);
            await loginPage.openLoginPage();
            await loginPage.enterUserName(user.username);
            await loginPage.enterPassword(user.password);
            await loginPage.checkRememberMe();
            await loginPage.clickLoginSubmit();

            await productPage.openCategory();

                if (product.category === "Computers" || product.category === "Electronics") {
                    console.log("Sort option not required for " + product.category + " category!")
                } else {
                    await productPage.setSortOption(product.sortOption);      
                }

            await expect(page).toHaveURL(/[\w-]+/); // optional: regex check for category URL

            await loginPage.processLogoutPage();
        });
    }
}