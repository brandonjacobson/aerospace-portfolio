/**
 * Visual Tests - Projects Page (QA-Agent)
 * Tests project grid, cards, and responsive layout
 * Validates GitHub integration and card rendering
 */

import { test, expect } from '@playwright/test';

test.describe('Projects Page - Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('projects page header renders correctly', async ({ page }) => {
    // Wait for header
    await expect(page.locator('h1, h2').filter({ hasText: 'Projects' })).toBeVisible();

    // Check back button
    const backButton = page.locator('a:has-text("Back to Home")');
    await expect(backButton).toBeVisible();

    // Screenshot header
    await expect(page).toHaveScreenshot('projects-header.png', {
      fullPage: false,
      maxDiffPixels: 100,
    });
  });

  test('project cards render in responsive grid', async ({ page }) => {
    // Wait for project cards
    const projectCards = page.locator('article').filter({ hasText: 'Project Icarus' });
    await expect(projectCards.first()).toBeVisible();

    // Check for GitHub integration (stars, featured badge)
    const featuredBadge = page.locator('text=Featured');
    if (await featuredBadge.count() > 0) {
      await expect(featuredBadge.first()).toBeVisible();
    }

    // Full page screenshot
    await expect(page).toHaveScreenshot('projects-grid.png', {
      fullPage: true,
      maxDiffPixels: 200,
    });
  });

  test('project card has proper structure', async ({ page }) => {
    // Find first project card
    const card = page.locator('article').first();
    await expect(card).toBeVisible();

    // Check for title
    await expect(card.locator('h2')).toBeVisible();

    // Check for description
    await expect(card.locator('p').first()).toBeVisible();

    // Check for GitHub link
    const ghLink = card.locator('a:has-text("View on GitHub")');
    if (await ghLink.count() > 0) {
      await expect(ghLink).toBeVisible();
    }

    // Screenshot individual card
    await expect(card).toHaveScreenshot('project-card.png', {
      maxDiffPixels: 100,
    });
  });

  test('responsive grid layout on different viewports', async ({ page, viewport }) => {
    const projectCards = page.locator('article');
    const count = await projectCards.count();

    expect(count).toBeGreaterThan(0);

    // Take screenshot for current viewport
    await expect(page).toHaveScreenshot(`projects-${viewport?.width}x${viewport?.height}.png`, {
      fullPage: true,
      maxDiffPixels: 200,
    });
  });

  test('hover states work correctly', async ({ page, isMobile }) => {
    // Skip on mobile (no hover)
    if (isMobile) {
      test.skip();
    }

    const card = page.locator('article').first();
    await card.hover();

    // Border should change on hover (accent color)
    await expect(card).toBeVisible();

    await expect(page).toHaveScreenshot('projects-card-hover.png', {
      fullPage: false,
      maxDiffPixels: 100,
    });
  });
});
