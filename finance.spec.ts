import { test, expect } from '@playwright/test';

test.describe('Ford Finance page UI checks', () => {
  test('Verify “Sign In” button is visible', async ({ page }) => {
    await page.goto('https://www.ford.com/finance/', { waitUntil: 'domcontentloaded' });

    const signInButton = page.locator('a[type="button"].Button', { hasText: 'Sign In' });
    await expect(signInButton).toHaveCount(1);
    await expect(signInButton.first()).toBeVisible();
  });

  test('Verify text “Finance a Ford the Way” is visible', async ({ page }) => {
    await page.goto('https://www.ford.com/finance/', { waitUntil: 'domcontentloaded' });

    const financeText = page.locator('div.RichTextEditor', { hasText: 'Finance a Ford the Way' });
    await expect(financeText).toHaveCount(1);
    await expect(financeText.first()).toBeVisible();
  });

  test('Verify card title “Understand Your Financing Options” is visible', async ({ page }) => {
    await page.goto('https://www.ford.com/finance/', { waitUntil: 'domcontentloaded' });

    const cardTitle = page.locator('div.Card__container h3.Card__title', { hasText: 'Understand Your Financing Options' });
    await expect(cardTitle).toHaveCount(1);
    await expect(cardTitle.first()).toBeVisible();
  });
});