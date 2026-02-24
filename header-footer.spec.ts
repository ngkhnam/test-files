import { test, expect } from '@playwright/test';

test('Verify header and footer present and visible on https://www.ford.com/finance/', async ({ page }) => {
  await page.goto('https://www.ford.com/finance/', { waitUntil: 'domcontentloaded' });

  const header = page.locator('div[id="single-spa-application:ford-credit-header"] > header');
  await expect(header).toHaveCount(1);
  await expect(header).toBeVisible();

  const footer = page.locator('div[id="single-spa-application:ford-credit-footer"] > footer');
  await expect(footer).toHaveCount(1);

  await footer.scrollIntoViewIfNeeded();
  await expect(footer).toBeVisible();
});