import { test, expect } from '@playwright/test';

test.describe('Ford Finance Page', () => {
  test('Test Case 1: “Sign In” button must be visible', async ({ page }) => {
    await page.goto('https://www.ford.com/finance', { waitUntil: 'domcontentloaded' });

    const signInButton = page.locator('a[type="button"].Button', { hasText: 'Sign In' }).first();
    await expect(signInButton).toBeVisible();
  });

  test('Test Case 2: Text “Finance a Ford the Way” must be visible', async ({ page }) => {
    await page.goto('https://www.ford.com/finance', { waitUntil: 'domcontentloaded' });

    const targetText = page.locator('div.RichTextEditor', { hasText: 'Finance a Ford the Way' }).first();
    await expect(targetText).toBeVisible();
  });

  test('Test Case 3: Card titled “Understand Your Financing Options” must be visible and contains “Explore Options” button in the footer', async ({ page }) => {
    await page.goto('https://www.ford.com/finance', { waitUntil: 'domcontentloaded' });

    const card = page
      .locator('div.Card__container', {
        has: page.locator('h3.Card__title', { hasText: 'Understand Your Financing Options' }),
      })
      .first();

    await expect(card).toBeVisible();

    const exploreOptionsButtonInFooter = card
      .locator('.Card__footer')
      .locator('a[type="button"].Button', { hasText: 'Explore Options' })
      .first();

    await expect(exploreOptionsButtonInFooter).toBeVisible();
  });
});