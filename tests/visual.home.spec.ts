/**
 * Visual Tests - Home Page (QA-Agent)
 * Tests hero, sections, and visual consistency across viewports
 * Desktop, iPhone 14, iPad Pro
 */

import { test, expect } from '@playwright/test';

test.describe('Home Page - Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero section renders with proper layout', async ({ page }) => {
    // Wait for hero section
    const hero = page.locator('section#home');
    await expect(hero).toBeVisible();

    // Check hero content
    await expect(page.locator('h1')).toContainText('Brandon A. Jacobson');
    await expect(page.locator('text=Aerospace Engineering Student')).toBeVisible();

    // Check CTAs are present
    const primaryCTA = page.locator('button:has-text("View Projects")');
    const secondaryCTA = page.locator('button:has-text("Get in Touch")');
    await expect(primaryCTA).toBeVisible();
    await expect(secondaryCTA).toBeVisible();

    // Take screenshot for visual comparison
    await expect(page).toHaveScreenshot('home-hero.png', {
      fullPage: false,
      maxDiffPixels: 100,
    });
  });

  test('sections are grid-aligned and properly spaced', async ({ page }) => {
    // Check About section
    const aboutSection = page.locator('section').filter({ hasText: 'Education' });
    await expect(aboutSection).toBeVisible();

    // Check Experience section
    const experienceSection = page.locator('section').filter({ hasText: 'Technical Intern' });
    await expect(experienceSection).toBeVisible();

    // Check Projects/Highlights section
    const projectsSection = page.locator('section').filter({ hasText: 'Project Icarus' });
    await expect(projectsSection).toBeVisible();

    // Full page screenshot
    await expect(page).toHaveScreenshot('home-full-page.png', {
      fullPage: true,
      maxDiffPixels: 200,
    });
  });

  test('navigation is accessible and functional', async ({ page }) => {
    // Check for navigation element (first one is main nav)
    const nav = page.locator('nav').first();
    if (await nav.count() > 0) {
      await expect(nav).toBeVisible();
    }

    // Test keyboard navigation on CTAs
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    if (await focused.count() > 0) {
      await expect(focused).toBeVisible();
    }

    // Screenshot navigation state
    await expect(page).toHaveScreenshot('home-navigation.png', {
      fullPage: false,
      maxDiffPixels: 100,
    });
  });

  test('responsive layout on mobile', async ({ page, viewport }) => {
    // Skip if not mobile viewport
    if (!viewport || viewport.width > 768) {
      test.skip();
    }

    // Check hero stacks properly on mobile
    const hero = page.locator('section#home');
    await expect(hero).toBeVisible();

    // CTAs should be full-width or properly sized on mobile
    const buttons = page.locator('button');
    const firstButton = buttons.first();
    await expect(firstButton).toBeVisible();

    await expect(page).toHaveScreenshot('home-mobile.png', {
      fullPage: true,
      maxDiffPixels: 200,
    });
  });
});
