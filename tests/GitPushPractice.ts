import { test, expect } from '@playwright/test';

test('Git Push Practice', async ({ page }) => {
        console.log('Git Push Practice');
        await expect(page).toHaveTitle('Git Push Practice');
        await page.goto('https://www.google.com/');
        await page.getByRole('link', { name: 'Sign in' }).click();
        await page.getByRole('textbox', { name: 'Email or phone' }).click();
        await page.getByRole('textbox', { name: 'Email or phone' }).fill('wunnava.sashi@gmail.com');
        await page.getByRole('textbox', { name: 'Email or phone' }).press('Enter');
        await expect(page).toHaveURL('https://www.google.com/');
        console.log('Git Push Practice');
        console.log('Git Push Practice 2');
});
