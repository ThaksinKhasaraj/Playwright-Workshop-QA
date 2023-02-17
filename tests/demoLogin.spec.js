import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://acetoys.uk/our-story');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('user1');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('pass');
  await page.getByRole('button', { name: 'Login' }).click();
});