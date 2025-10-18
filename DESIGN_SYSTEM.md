# Aerospace Portfolio Design System

## Overview

This design system provides a cohesive, aerospace-themed visual language with consistent typography, spacing, and section theming. The system prioritizes clarity, technical precision, and subtle visual interest.

---

## Table of Contents

1. [Typography](#typography)
2. [Spacing & Layout](#spacing--layout)
3. [Section System](#section-system)
4. [Visual Separators](#visual-separators)
5. [Graphic Accents](#graphic-accents)
6. [Component Usage](#component-usage)
7. [Accessibility](#accessibility)

---

## Typography

### Responsive Type Scale (Fluid Sizing)

All headings use `clamp()` for responsive sizing:

```tsx
// Display (Hero titles)
text-display → clamp(2.5rem, 5vw + 1rem, 4.5rem)

// H1 (Page titles)
text-h1 → clamp(2rem, 4vw + 1rem, 3.5rem)

// H2 (Section titles)
text-h2 → clamp(1.5rem, 3vw + 0.5rem, 2.5rem)

// H3 (Subsection titles)
text-h3 → clamp(1.25rem, 2vw + 0.5rem, 1.875rem)

// Body text
text-body → clamp(1rem, 0.5vw + 0.875rem, 1.125rem)

// Small text
text-small → clamp(0.875rem, 0.5vw + 0.75rem, 1rem)

// Overline (Section labels)
text-overline → 0.75rem, uppercase, tracking-widest
```

### Text Utilities

- `.measure` → Max-width of 65ch for optimal reading
- `.prose-balance` → Prevents orphaned words (text-wrap: balance)

---

## Spacing & Layout

### Container

Max-width: **1280px** with responsive horizontal padding:
- Mobile: 1rem (16px)
- Tablet: 1.5rem (24px)
- Desktop: 2rem (32px)

```tsx
<Container>
  {/* Content automatically centered */}
</Container>
```

### Section Padding

Vertical rhythm controlled by `.section` class:
- Mobile: 4rem top/bottom
- Desktop: 6rem top/bottom

Additional spacing scale:
- `spacing-18` → 4.5rem
- `spacing-22` → 5.5rem
- `spacing-26` → 6.5rem
- `spacing-30` → 7.5rem
- `spacing-34` → 8.5rem

---

## Section System

### Themes

Three section themes for visual variety:

#### 1. **Default** (Clean, primary background)
```tsx
<Section theme="default">
  {/* Dark background #000814 */}
</Section>
```

#### 2. **Panel** (Subtle elevation)
```tsx
<Section theme="panel">
  {/* Elevated surface #0d1b2a */}
</Section>
```

#### 3. **Dark** (Inverted darker tone)
```tsx
<Section theme="dark">
  {/* Darker background #0a1929 */}
</Section>
```

### When to Use Each Theme

**Recommended pattern**: Alternate themes down the page for visual distinction

```
Hero        → default
About       → panel
Experience  → dark
Projects    → default
Skills      → panel
Contact     → dark
```

---

## Visual Separators

### Divider Positions

```tsx
// Top divider only
<Section divide="top">

// Bottom divider only
<Section divide="bottom">

// Both top and bottom
<Section divide="both">

// No dividers
<Section divide="none">
```

### Divider Variants

```tsx
<Divider variant="solid" />     // Clean 1px line
<Divider variant="dotted" />    // Subtle dotted line
<Divider variant="blueprint" /> // Technical dashed line
```

---

## Graphic Accents

### Blueprint Grid

CSS gradient-based technical grid (no images):

```tsx
<Section graphic="grid">
  {/* Subtle blueprint gridlines */}
</Section>
```

**Best for**: Technical sections (Skills, Projects, Publications)

### Orbital Arcs

Lightweight SVG corner accents:

```tsx
<Section graphic="orbital">
  {/* Subtle orbital curves in corners */}
</Section>
```

**Best for**: Hero sections, highlighted content areas

### Starfield

Performant CSS starfield with twinkle animation:

```tsx
<Section graphic="stars">
  {/* Twinkling stars background */}
</Section>
```

**Best for**: Hero, special feature sections
**Note**: Auto-disables under `prefers-reduced-motion`

### No Graphics

```tsx
<Section graphic="none">
  {/* Clean, no decorative elements */}
</Section>
```

**Best for**: Dense content sections (About, Contact)

---

## Component Usage

### Complete Section Example

```tsx
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/layout/SectionHeading';

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      theme="panel"
      divide="both"
      graphic="grid"
    >
      <Container>
        <SectionHeading
          overline="Featured Work"
          title="Technical Projects"
          subtitle="Exploring aerospace engineering through hands-on development of flight control systems and autonomous navigation."
          centered
        />

        {/* Section content */}
        <div className="mt-12 space-y-8">
          {/* Project cards */}
        </div>
      </Container>
    </Section>
  );
}
```

### Three Configuration Examples

#### Example 1: Hero Section (Dramatic Entry)

```tsx
<Section
  theme="default"
  graphic="orbital"
  divide="bottom"
>
  <Container>
    <div className="text-center space-y-6">
      <h1 className="text-display font-bold bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
        Brandon A. Jacobson
      </h1>
      <p className="text-h3 text-accent">
        Aerospace Engineering Student
      </p>
    </div>
  </Container>
</Section>
```

**Why**: Orbital accents add visual interest without overwhelming. Bottom divider separates from next section.

---

#### Example 2: Technical Content (Projects/Skills)

```tsx
<Section
  theme="panel"
  graphic="grid"
  divide="both"
>
  <Container>
    <SectionHeading
      overline="Expertise"
      title="Technical Skills"
      subtitle="Proficiency in aerospace engineering tools and technologies."
      centered
    />

    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Skill cards */}
    </div>
  </Container>
</Section>
```

**Why**: Blueprint grid reinforces technical nature. Panel theme provides subtle elevation. Dividers on both sides create clear boundaries.

---

#### Example 3: Content Section (About/Contact)

```tsx
<Section
  theme="dark"
  graphic="none"
  divide="top"
>
  <Container>
    <SectionHeading
      overline="Get In Touch"
      title="Let's Connect"
      subtitle="Interested in collaborating on aerospace projects or discussing opportunities?"
      centered
    />

    <div className="mt-12 max-w-measure mx-auto text-left space-y-6">
      {/* Contact content */}
    </div>
  </Container>
</Section>
```

**Why**: No graphics keeps focus on content. Dark theme provides visual variety. Top divider separates from previous section.

---

## Accessibility

### Reduced Motion

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Components that disable under reduced motion**:
- Starfield twinkling
- Orbital rotation animations
- Parallax scrolling effects

### Contrast

All visual elements maintain WCAG AA contrast (4.5:1 minimum):
- Text on backgrounds: ✓
- Divider lines: ✓ (var(--rule) opacity tuned)
- Accent colors: ✓

### Semantic HTML

- `<Section>` renders as `<section>` with optional `id` for anchor links
- `<SectionHeading>` uses proper heading hierarchy
- Decorative graphics marked with `aria-hidden="true"`

---

## Quick Reference

### Full Page Example

```tsx
export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section theme="default" graphic="orbital" divide="bottom">
        <Container>{/* Hero content */}</Container>
      </Section>

      {/* About */}
      <Section theme="panel" graphic="none" divide="none">
        <Container>{/* About content */}</Container>
      </Section>

      {/* Projects */}
      <Section theme="default" graphic="grid" divide="both">
        <Container>{/* Projects content */}</Container>
      </Section>

      {/* Skills */}
      <Section theme="panel" graphic="grid" divide="both">
        <Container>{/* Skills content */}</Container>
      </Section>

      {/* Contact */}
      <Section theme="dark" graphic="none" divide="top">
        <Container>{/* Contact content */}</Container>
      </Section>
    </>
  );
}
```

---

## Color Tokens

CSS variables defined in `globals.css`:

```css
:root {
  /* Section themes */
  --section-bg-default: #000814;
  --section-bg-panel: #0d1b2a;
  --section-bg-dark: #0a1929;

  /* Visual elements */
  --rule: rgba(0, 212, 255, 0.2);
  --gridline: rgba(0, 212, 255, 0.03);
  --accent: #00d4ff;
}
```

Use via Tailwind: `bg-section-bg`, `border-rule`, etc.

---

## Performance Notes

- **Blueprint Grid**: Pure CSS gradients, no image downloads
- **Orbital Accents**: Inline SVG, < 1KB each
- **Starfield**: CSS-only when possible, DOM manipulation minimal
- **GPU Acceleration**: All transforms use `will-change` for 60fps

---

## Support

For questions or issues with the design system, refer to component JSDoc comments or check individual component files in:
- `components/layout/`
- `components/graphics/`
