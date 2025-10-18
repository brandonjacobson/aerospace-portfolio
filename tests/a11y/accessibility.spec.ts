/**
 * Accessibility Tests (QA-Agent)
 * Uses @axe-core/playwright for WCAG 2.1 AA compliance
 * Tests keyboard navigation, focus management, semantic HTML
 */

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests - Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('hero has proper heading hierarchy', async ({ page }) => {
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    const h1Count = await h1.count();
    expect(h1Count).toBe(1); // Only one h1 per page
  });

  test('buttons are keyboard accessible', async ({ page }) => {
    const primaryButton = page.locator('button').first();
    await expect(primaryButton).toBeVisible();

    // Tab to button
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');

    // Should be able to focus interactive elements
    const isFocusable = await focused.count() > 0;
    expect(isFocusable).toBe(true);

    // Should be able to activate with Enter
    await page.keyboard.press('Enter');
    // If button triggers navigation, URL should change or modal should appear
  });

  test('links have accessible names', async ({ page }) => {
    const links = page.locator('a');
    const count = await links.count();

    for (let i = 0; i < Math.min(count, 10); i++) {
      const link = links.nth(i);
      if (await link.isVisible()) {
        const text = await link.textContent();
        const ariaLabel = await link.getAttribute('aria-label');

        // Link should have either text content or aria-label
        expect(text || ariaLabel).toBeTruthy();
      }
    }
  });

  test('color contrast meets WCAG AA', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .include('body')
      .analyze();

    const contrastViolations = accessibilityScanResults.violations.filter(
      v => v.id === 'color-contrast'
    );

    expect(contrastViolations).toEqual([]);
  });
});

test.describe('Accessibility Tests - Projects Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('project cards use semantic HTML', async ({ page }) => {
    const articles = page.locator('article');
    const count = await articles.count();

    expect(count).toBeGreaterThan(0);

    // Each article should have heading
    const firstCard = articles.first();
    const heading = firstCard.locator('h2, h3');
    await expect(heading).toBeVisible();
  });

  test('GitHub links have proper attributes', async ({ page }) => {
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();

    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const rel = await link.getAttribute('rel');

      // External links should have rel="noopener noreferrer"
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
  });

  test('keyboard navigation works through all cards', async ({ page }) => {
    const cards = page.locator('article');
    const count = await cards.count();

    // Tab through page
    for (let i = 0; i < count * 2; i++) {
      await page.keyboard.press('Tab');
    }

    // Should be able to focus elements within cards
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });
});
