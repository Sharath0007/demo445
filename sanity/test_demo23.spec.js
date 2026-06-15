import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('test_demo23 @sanity', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  // Username input
  const usernameInput = page.locator('[data-test="username"]');
  await expect(usernameInput).toBeEnabled();
  await usernameInput.click();
  await expect(usernameInput).toBeEditable();
  await usernameInput.fill(testData.username);

  // Password input
  const passwordInput = page.locator('[data-test="password"]');
  await expect(passwordInput).toBeEnabled();
  await passwordInput.click();
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  // Login button
  const loginButton = page.locator('[data-test="login-button"]');
  await expect(loginButton).toBeEnabled();
  await loginButton.click();
});