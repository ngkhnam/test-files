import { test, expect } from '@playwright/test';

test.describe('Ford Finance - Card titles visibility', () => {
  const url = 'https://www.ford.com/finance/';

  test('Verify card title “Shop With Confidence” is visible', async ({ page }) => {
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const title = page.locator('div.Card__container h3.Card__title', { hasText: 'Shop With Confidence' }).first();
    await expect(title).toBeVisible();

    await page.screenshot({ path: 'evidence-shop-with-confidence.png', fullPage: true });
  });

  test('Verify card title “Estimate Your Monthly Payment” is visible', async ({ page }) => {
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const title = page
      .locator('div.Card__container h3.Card__title', { hasText: /Estimate\s*Your\s*Monthly\s*Payment/ })
      .first();
    await expect(title).toBeVisible();

    await page.screenshot({ path: 'evidence-estimate-your-monthly-payment.png', fullPage: true });
  });

  test('Verify card title “Understand Your Financing Options” is visible', async ({ page }) => {
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const title = page
      .locator('div.Card__container h3.Card__title', { hasText: /Understand\s*Your\s*Financing\s*Options/ })
      .first();
    await expect(title).toBeVisible();

    await page.screenshot({ path: 'evidence-understand-your-financing-options.png', fullPage: true });
  });
});