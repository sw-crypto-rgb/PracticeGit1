import { test, expect } from '@playwright/test';

//test('BasicStart with playwright', async ({ page }) => {
//  await page.goto('https://www.google.com');
//  await expect(page).toHaveTitle('Google');
//});

test('BasicStart with playwright', async ({ page }) => {
    
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle('Google');
    await page.goto('https://www.google.com');
    await page.getByRole('button', { name: 'Google apps' }).click();

    console.log('My First Test');
});

test("My2nd Test script", ()=>{
    console.log('My 2nd Test Script');
    console.log("Practice 2nd push from git hub actions");
});
