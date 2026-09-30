import {test, expect} from '@playwright/test';

test('Selectors Demo', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    await page.pause()
    // using any object property
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('Edison')
    await page.locator('[id="user-name"]').fill('Einstein');
    
    //using CSS selector
    // #login-button
    await page.locator('#login-button').click();

    // using XPath selector
    await page.locator('xpath=//input[@name="password"]').fill('Sunday');
    await page.locator('//*[@id="password"]').fill('Sunday');

    // using Text selector
    await page.locator('text=Login').click();
    await page.locator('input:has-text=("LOGIN")').click();
})