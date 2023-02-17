import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://acetoys.uk/category/all');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Username').fill('inn');
  await page.getByPlaceholder('Password').fill('2022');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('ไม่มีบัญชีผู้ใช้งาน โปรดลงทะเบียนผู้ใช้งาน')).toHaveText('ไม่มีบัญชีผู้ใช้งาน โปรดลงทะเบียนผู้ใช้งาน');
  await expect(page.getByText('Login')).toHaveText('Login');
  
});