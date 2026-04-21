import {test, expect} from '@playwright/test';

test ("Assertion Practice", async({page})=>{
    await page.goto ("https://www.saucedemo.com/")
    await page.getByTestId('login-button')
    //await page.locator('[data-test="login-button"]')
    await expect(page.getByTestId('login-button')).toHaveCount(1)
    await expect (page.locator('[data-test="login-button"]')).toBeEnabled()
    //await expect (page.locator('[data-test="login-button"]')).toBeDisabled()
    await expect.soft(page.locator('[data-test="login-button"]')).toBeDisabled()
    await expect(page.locator('[data-test="login-button"]')).toBeVisible()
    //await expect (page.locator('[data-test="login-button"]')).toBeHidden()
    await expect(page.locator('[data-test="login-button"]')).toHaveText("Login")
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('name',"login-button")
    await expect(page.locator('[data-test="login-button"]')).toHaveId("login-button")
    await expect(page).toHaveURL("https://www.saucedemo.com/")
    //await expect(page).toHaveURL("https://www.saucedemo.com/abc")
    await expect(page).toHaveTitle('Swag Labs')
    //expect(5).toBe(4)
    await expect(page).not.toHaveTitle("Google")
    //await expect(page).not.toHaveTitle("Swag Labs")
    await expect(page,"This is Customer error message for practice").not.toHaveTitle("Swag Labs")
})

test ("Assertions Practice using Non Retrying assertions", async({page})=>{


})