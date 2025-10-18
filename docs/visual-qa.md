# Visual QA Process

This document explains the visual quality assurance workflow for the Aerospace Portfolio project, following the Orchestrator pattern defined in CLAUDE.md.

## Overview

The QA loop ensures all changes maintain visual consistency, accessibility, and performance standards before merging.

## Test Infrastructure

### Playwright Configuration

- **Projects**: Desktop (1280x800), iPhone 14, iPad Pro
- **Tests**: Visual regression, layout guards, accessibility
- **Location**: `tests/` directory

### Test Categories

1. **Visual Tests** (`tests/visual.*.spec.ts`)
   - Screenshot-based regression testing
   - Validates layout consistency across viewports
   - Checks for proper spacing and alignment

2. **Layout Guards** (`tests/layout.guards.spec.ts`)
   - Programmatic overlap detection
   - Clipping detection for text content
   - Section spacing validation
   - Grid alignment checks

3. **Accessibility Tests** (`tests/a11y/accessibility.spec.ts`)
   - WCAG 2.1 AA compliance using @axe-core/playwright
   - Keyboard navigation
   - Focus management
   - Semantic HTML validation
   - Color contrast checks

4. **Performance Tests** (via Lighthouse CI)
   - Performance score ≥ 0.90
   - CLS (Cumulative Layout Shift) ≤ 0.10
   - First Contentful Paint, Largest Contentful Paint metrics
   - Configuration: `lighthouserc.json`

## Running Tests

### Visual Tests

```bash
# Run all visual tests
npm run test:e2e

# Update baseline snapshots
npm run test:e2e:update

# Run specific project
npx playwright test --project="Desktop"
```

### Accessibility Audit

```bash
npm run audit:a11y
```

### Lighthouse Performance Audit

```bash
npm run audit:lighthouse
```

### Full Audit Suite

```bash
npm run audit
```

## Acceptance Criteria

Before merging any PR, all of the following must pass:

### Visual Standards
- ✅ No text-image overlaps
- ✅ Grid-aligned sections with consistent spacing
- ✅ Typography uses design tokens (--step-*, text-h1, text-body, etc.)
- ✅ Spacing uses design tokens (space-4, space-8, etc.)
- ✅ Mobile/tablet/desktop golden screenshots stable

### Navigation & Interaction
- ✅ All buttons/links functional
- ✅ Keyboard accessible (Tab navigation works)
- ✅ Focus visible on interactive elements
- ✅ Skip-to-content link exists (if applicable)

### Technical Quality
- ✅ Playwright visual tests pass
- ✅ No accessibility violations (wcag2a, wcag2aa)
- ✅ Lighthouse Performance ≥ 0.90
- ✅ Lighthouse CLS ≤ 0.10
- ✅ Build succeeds with no TypeScript errors
- ✅ ESLint passes with no errors

## Design Tokens

All components must use design tokens instead of arbitrary values:

### Typography
- `text-display-1` - Hero headlines (clamp 2.25rem → 4rem)
- `text-display-2` - Sub-headlines (clamp 1.9rem → 2.5rem)
- `text-h2`, `text-h3` - Section headings
- `text-body` - Body text (clamp 1rem → 1.125rem)
- `text-small` - Metadata, labels

### Spacing
- Use Tailwind's spacing scale: `space-4`, `space-6`, `space-8`, etc.
- Container padding: `px-4 md:px-6 lg:px-8`
- Section padding: `py-16 md:py-24`

### Layout
- **Container**: `max-w-container` (1280px)
- **Measure**: `max-w-measure` (65ch) for readable text
- **Grid**: 12 columns on desktop (≥1024px), 6 on tablet (≥640px), single on mobile

## Non-Negotiables

Per CLAUDE.md orchestration rules:

1. **No absolute positioning for layout** (only for badges/overlays)
2. **No text over images without a scrim** (semi-transparent overlay)
3. **No inline styles** for core layout/typography
4. **No untested page merges** - every new layout needs visual specs

## Iteration Protocol

When a test fails:

1. Generate a **focused patch** - don't widen scope mid-PR
2. Fix the specific issue identified
3. Re-run affected test suite
4. Capture before/after screenshots
5. Update PR with fix description and new artifacts

## Artifacts for PRs

Every PR should include:

- [ ] Before/After screenshots of key sections
- [ ] Test results (visual/a11y/perf) with links
- [ ] Lighthouse report summary
- [ ] Risk assessment and rollback plan
- [ ] Updated documentation if patterns changed

## GitHub Data Integration

The project uses live GitHub data via `scripts/fetch-github.ts`:

```bash
# Fetch latest repository data
npx tsx scripts/fetch-github.ts
```

This populates `data/github.json` with:
- Repository names and descriptions
- Star counts
- Last updated timestamps
- Featured repo flags

## Reporting Issues

If tests fail in CI:

1. Check the Playwright HTML report: `npx playwright show-report`
2. Review screenshots in `test-results/`
3. Compare with baseline snapshots in `tests/*.spec.ts-snapshots/`
4. File an issue with:
   - Test name and failure message
   - Screenshot diff
   - Proposed fix

## Future Enhancements

- [ ] Add Superdesign lint integration for design token compliance
- [ ] Implement Python chart generator for /labs/charts
- [ ] Add code gallery tests for /labs/code
- [ ] Create dynamic project detail pages `/projects/[slug]`
