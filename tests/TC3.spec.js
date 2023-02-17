import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://acetoys.uk/category/all');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Username').fill('ins');
  await page.getByPlaceholder('Password').fill('1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('ผู้ใช้งานไม่ถูกต้อง')).toHaveText('ผู้ใช้งานไม่ถูกต้อง');
  await expect(page.getByText('Login')).toHaveText('Login');
  
});