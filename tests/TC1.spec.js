import { test, expect } from '@playwright/test';

//เข้าสู่ระบบสำเร็จ
test('test', async ({ page }) => {
  await page.goto('https://acetoys.uk/category/all');      
  await page.getByRole('link', { name: 'Login' }).click(); 
  await page.getByRole('heading', { name: 'Login' }).click();
  await page.getByPlaceholder('Username').fill('user1'); //ผู้ใช้งานที่เรากรอก
  await page.getByPlaceholder('Password').fill('pass');  //รหัสผ่านที่เรากรอก
  await page.getByRole('button', { name: 'Login' }).click();  //คลิกปุ่มเข้าสู่ระบบ
  await expect(page.getByText('Hi, user1')).toHaveText('Hi, user1'); //เมื่อเข้าสู่ระบบสำเร็จตรง nav bar จะแสดงชื่อผู้ใช้งาน
  await expect(page.getByText('Ace Toys Online Store')).toHaveText('Ace Toys Online Store'); // contenจะแสดงคำว่า'Ace Toys Online Store'
  await page.getByRole('button', { name: 'Logout' }).click(); //ตรง nav bar มี ปุ่ม Logout
  await expect(page.getByText('Ace Toys Online Store')).toHaveText('Ace Toys Online Store'); // เมื่อกดปุ่ม Logout จะมี contenจะแสดงคำว่า'Ace Toys Online Store'
});