/**
 * Layout Guards (QA-Agent)
 * Programmatic overlap/clipping detectors for key elements
 * Ensures no text-image overlaps, proper spacing
 */

import { test, expect } from '@playwright/test';

/**
 * Check if two elements overlap
 */
async function checkOverlap(page: any, selector1: string, selector2: string) {
  const overlap = await page.evaluate(([sel1, sel2]: string[]) => {
    const elem1 = document.querySelector(sel1);
    const elem2 = document.querySelector(sel2);

    if (!elem1 || !elem2) return false;

    const rect1 = elem1.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();

    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  }, [selector1, selector2]);

  return overlap;
}

/**
 * Check if element is clipped by parent
 */
async function checkClipping(page: any, selector: string) {
  const isClipped = await page.evaluate((sel: string) => {
    const elem = document.querySelector(sel);
    if (!elem) return false;

    const rect = elem.getBoundingClientRect();
    const parent = elem.parentElement;
    if (!parent) return false;

    const parentRect = parent.getBoundingClientRect();

    return (
      rect.left < parentRect.left ||
      rect.right > parentRect.right ||
      rect.top < parentRect.top ||
      rect.bottom > parentRect.bottom
    );
  }, selector);

  return isClipped;
}

test.describe('Layout Guards - Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero title does not overlap with buttons', async ({ page }) => {
    const h1 = page.locator('h1').first();
    const button = page.locator('button').first();

    await expect(h1).toBeVisible();
    await expect(button).toBeVisible();

    const overlap = await checkOverlap(page, 'h1', 'button');
    expect(overlap).toBe(false);
  });

  test('no text content is clipped', async ({ page }) => {
    const textElements = ['h1', 'h2', 'h3', 'p', 'a', 'button'];

    for (const selector of textElements) {
      const elements = page.locator(selector);
      const count = await elements.count();

      for (let i = 0; i < Math.min(count, 10); i++) {
        const elem = elements.nth(i);
        if (await elem.isVisible()) {
          const clipped = await checkClipping(page, `${selector}:nth-of-type(${i + 1})`);
          expect(clipped).toBe(false);
        }
      }
    }
  });

  test('sections maintain minimum spacing', async ({ page }) => {
    const sections = page.locator('section');
    const count = await sections.count();

    for (let i = 0; i < count - 1; i++) {
      const section1 = sections.nth(i);
      const section2 = sections.nth(i + 1);

      const gap = await page.evaluate(
        ([s1, s2]: [any, any]) => {
          const rect1 = s1.getBoundingClientRect();
          const rect2 = s2.getBoundingClientRect();
          return rect2.top - rect1.bottom;
        },
        [await section1.elementHandle(), await section2.elementHandle()]
      );

      // Sections should not overlap (gap >= 0)
      expect(gap).toBeGreaterThanOrEqual(0);
    }
  });

  test('cards maintain proper spacing in grid', async ({ page }) => {
    await page.goto('/projects');

    const cards = page.locator('article');
    const count = await cards.count();

    if (count > 1) {
      const overlap = await checkOverlap(page, 'article:first-of-type', 'article:nth-of-type(2)');
      expect(overlap).toBe(false);
    }
  });
});

test.describe('Layout Guards - Projects Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('project cards do not overlap', async ({ page }) => {
    const cards = page.locator('article');
    const count = await cards.count();

    for (let i = 0; i < Math.min(count - 1, 3); i++) {
      const overlap = await checkOverlap(
        page,
        `article:nth-of-type(${i + 1})`,
        `article:nth-of-type(${i + 2})`
      );
      expect(overlap).toBe(false);
    }
  });

  test('card content is not clipped', async ({ page }) => {
    const card = page.locator('article').first();
    await expect(card).toBeVisible();

    const title = card.locator('h2').first();
    const description = card.locator('p').first();

    await expect(title).toBeVisible();
    await expect(description).toBeVisible();

    // Check for proper text wrapping (no overflow)
    const hasOverflow = await card.evaluate((el) => {
      return el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight;
    });

    expect(hasOverflow).toBe(false);
  });
});
