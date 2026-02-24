import { test, expect } from '@playwright/test';

test('Verify "Sign In" button is visible on https://www.ford.com/finance/', async ({ page }, testInfo) => {
  await page.goto('https://www.ford.com/finance/', { waitUntil: 'domcontentloaded' });

  const acceptCookies = page
    .getByRole('button', { name: /accept/i })
    .or(page.getByRole('button', { name: /agree/i }))
    .or(page.getByRole('button', { name: /i accept/i }))
    .or(page.getByRole('button', { name: /accept all/i }));

  try {
    if (await acceptCookies.first().isVisible({ timeout: 3000 }).catch(() => false)) {
      await acceptCookies.first().click({ timeout: 5000 }).catch(() => {});
    }
  } catch {
    // ignore cookie banner handling failures
  }

  const signIn = page.getByRole('link', { name: /sign in/i }).or(page.getByRole('button', { name: /sign in/i }));

  try {
    await expect(signIn.first()).toBeVisible({ timeout: 20000 });
  } catch (error) {
    await page.screenshot({
      path: testInfo.outputPath('Sign In button not visible.png'),
      fullPage: true,
    });
    throw error;
  }
});