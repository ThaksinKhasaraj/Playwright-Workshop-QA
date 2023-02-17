import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://acetoys.uk/category/all');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Username').fill('user1');
  await page.getByPlaceholder('Password').fill('1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('รหัสผ่านไม่ถูกต้อง')).toHaveText('รหัสผ่านไม่ถูกต้อง');
  await expect(page.getByText('Login')).toHaveText('Login');
  
});