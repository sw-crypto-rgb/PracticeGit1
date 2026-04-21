import { test, expect } from '@playwright/test';
test.beforeEach (async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[id="user-name"]').fill('standard_user');
    await page.locator('input[id="password"]').fill('secret_sauce');
    await page.locator('input[id="login-button"]').click();
});

test("Cart Verification", async ({ page }) => {

await expect(page.getByTestId('item-4-title-link').getByTestId('inventory-item-name')).toContainText('Sauce Labs Backpack');
await expect(page.getByTestId('add-to-cart-sauce-labs-bike-light')).toBeVisible();
await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
await page.getByTestId('shopping-cart-link').click();
await page.getByTestId('item-4-title-link').click();
await page.getByTestId('remove').click();
await page.getByTestId('shopping-cart-link').click();
await expect(page.getByTestId('add-to-cart-sauce-labs-backpack')).not.toBeVisible();
await page.getByTestId('cart-contents-container').click();

});

test("Empty cart Verification", async ({ page }) => {
await page.getByTestId('shopping-cart-link').click();
await page.getByText('Continue Shopping').click();
await expect(page.getByText('Your cart is empty')).toBeVisible();
});

