import { test, expect } from '@playwright/test';

test("Title Verification", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
});
test("Login Functionality", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("input#user-name").fill("standard_user");
    await page.locator("input#password").fill("secret_sauce");
    await page.locator("input#login-button").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator(".title")).toHaveText("Products");
    await expect(page.getByTestId('shopping-cart-link')).toBeVisible();

});

test("Negative Login Functionality", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('input[data-test="username"]').fill("standard_user");
    await page.locator('input[data-test="password"]').fill("wrong_password");
    await page.locator('input[data-test="login-button"]').click();
    await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    await expect(page.getByTestId('shopping-cart-link')).toBeVisible();
});
