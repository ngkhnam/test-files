import { test, expect } from '@playwright/test';

test.describe('Ford Finance Page UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.ford.com/finance/', { waitUntil: 'domcontentloaded' });
  });

  test('Test Case 1: Verify "Sign In" button is visible', async ({ page }) => {
    const signInButton = page.locator('a[type="button"].Button', { hasText: 'Sign In' }).first();
    await expect(signInButton).toBeVisible();
  });

  test('Test Case 2: Verify text "Finance a Ford the Way" is visible', async ({ page }) => {
    const headline = page.locator('div.RichTextEditor', { hasText: 'Finance a Ford the Way' }).first();
    await expect(headline).toBeVisible();
    await expect(headline).toContainText('Finance a Ford the Way');
  });
});