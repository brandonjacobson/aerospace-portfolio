# Section Components Refactor Guide

## Overview

All content blocks have been refactored into reusable section components that utilize the new design system. This guide documents the new component structure and usage patterns.

## Component Structure

```
components/
├── sections/
│   ├── HeroSection.tsx          - Hero with title, subtitle, description, CTAs
│   ├── HighlightsSection.tsx    - Project highlights grid (3-6 cards)
│   ├── AboutSection.tsx         - Bio cards (education, research, interests)
│   ├── ExperienceSection.tsx    - Professional timeline
│   ├── SkillsSection.tsx        - Animated skill bars by category
│   ├── PublicationsSection.tsx  - Academic publications list
│   ├── ContactSection.tsx       - Contact links panel
│   └── index.ts                 - Barrel export
```

## New Section Components

### 1. **HeroSection**

**Purpose:** Landing section with dramatic entry, optional orbital graphics

**Props:**
```typescript
interface HeroSectionProps {
  title: string;              // Main heading
  subtitle: string;           // Accent subtitle
  description: string;        // Body paragraph
  primaryCTA?: {              // Optional primary button
    label: string;
    action: () => void;
  };
  secondaryCTA?: {            // Optional secondary button
    label: string;
    action: () => void;
  };
}
```

**Default Theming:**
- Theme: `default`
- Graphic: `orbital`
- Divide: `bottom`

**Usage Example:**
```tsx
<HeroSection
  title="Brandon A. Jacobson"
  subtitle="Aerospace Engineering Student | Flight Software & Control Systems"
  description="University of Florida student passionate about flight control, sensor fusion, and autonomous navigation."
/>
```

**Features:**
- ✅ Centered layout with `mx-auto`
- ✅ Gradient text effect on title
- ✅ Fluid typography (text-display, text-h3, text-body)
- ✅ Subtitle constrained by `.measure` (65ch)
- ✅ MagneticButton CTAs with consistent spacing
- ✅ Fade-in animations with staggered delays

---

### 2. **HighlightsSection**

**Purpose:** Featured projects grid (3-6 cards linking to projects page)

**Props:**
```typescript
interface HighlightsSectionProps {
  overline?: string;          // Default: "Featured Work"
  title: string;              // Default: "Projects"
  subtitle?: string;          // Optional subtitle
  highlights: Highlight[];    // Project data array
  showViewAll?: boolean;      // Show "View All" button (default: true)
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}
```

**Default Theming:**
- Theme: `default`
- Graphic: `grid`
- Divide: `both`

**Usage Example:**
```tsx
import { projects } from '@/data/portfolio';

<HighlightsSection
  highlights={projects}
  showViewAll={true}
/>
```

**Features:**
- ✅ Responsive grid (1/2/3 columns)
- ✅ Hover effects with shadow and border accent
- ✅ Technology tags with consistent styling
- ✅ "View All Projects" CTA button
- ✅ Left-aligned text within centered grid

---

### 3. **AboutSection**

**Purpose:** Bio, education, research focus, interests cards

**Props:**
```typescript
interface AboutSectionProps {
  overline?: string;          // Default: "Who I Am"
  title?: string;             // Default: "About Me"
  subtitle?: string;          // Optional subtitle
  cards: AboutCard[];         // Card data array
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}
```

**Default Theming:**
- Theme: `panel`
- Graphic: `none`
- Divide: `none`

**Usage Example:**
```tsx
import { aboutCards } from '@/data/portfolio';

<AboutSection cards={aboutCards} />
```

**Features:**
- ✅ 3-column responsive grid
- ✅ Gradient hover effect
- ✅ First line bold styling for education card
- ✅ Left-aligned text within cards

---

### 4. **ExperienceSection**

**Purpose:** Professional journey timeline with descriptions and tech stacks

**Props:**
```typescript
interface ExperienceSectionProps {
  overline?: string;          // Default: "Professional Journey"
  title?: string;             // Default: "Experience"
  subtitle?: string;          // Optional subtitle
  experiences: Experience[];  // Experience data array
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}
```

**Default Theming:**
- Theme: `dark`
- Graphic: `grid`
- Divide: `both`

**Usage Example:**
```tsx
import { experiences } from '@/data/portfolio';

<ExperienceSection experiences={experiences} />
```

**Features:**
- ✅ 2-column responsive grid
- ✅ Gradient header with rotating accent
- ✅ Bulleted lists with left alignment
- ✅ Technology tags (if provided)
- ✅ Blueprint grid background

---

### 5. **SkillsSection**

**Purpose:** Animated skill bars grouped by category

**Props:**
```typescript
interface SkillsSectionProps {
  overline?: string;          // Default: "Expertise & Proficiency"
  title?: string;             // Default: "Technical Skills"
  subtitle?: string;          // Optional subtitle
  skillCategories: SkillCategory[];
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}
```

**Default Theming:**
- Theme: `panel`
- Graphic: `grid`
- Divide: `both`

**Usage Example:**
```tsx
import { skillCategories } from '@/data/portfolio';

<SkillsSection skillCategories={skillCategories} />
```

**Features:**
- ✅ 3-column responsive grid
- ✅ Intersection Observer for scroll animations
- ✅ Animated progress bars (0% → level%)
- ✅ Gradient bar with shadow
- ✅ Left-aligned text

---

### 6. **PublicationsSection**

**Purpose:** Academic publications list with DOI and links

**Props:**
```typescript
interface PublicationsSectionProps {
  overline?: string;          // Default: "Research & Publications"
  title?: string;             // Default: "Publications"
  subtitle?: string;          // Optional subtitle
  publications: Publication[];
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}
```

**Default Theming:**
- Theme: `panel`
- Graphic: `grid`
- Divide: `both`

**Usage Example:**
```tsx
const publications = [
  {
    id: 'pub-1',
    title: 'Multi-Mode Propulsion for LEO Rendezvous',
    authors: ['B. Jacobson', 'J. Doe'],
    venue: 'AIAA Propulsion Conference',
    year: 2025,
    url: 'https://example.com/paper.pdf',
    doi: '10.2514/example'
  }
];

<PublicationsSection publications={publications} />
```

**Features:**
- ✅ Centered list with max-width constraint
- ✅ Hover effects on cards
- ✅ External link arrows
- ✅ DOI linking
- ✅ Empty state handling

---

### 7. **ContactSection**

**Purpose:** Email and social links panel

**Props:**
```typescript
interface ContactSectionProps {
  overline?: string;          // Default: "Let's Connect"
  title?: string;             // Default: "Get In Touch"
  subtitle?: string;          // Optional subtitle
  description?: string;       // Panel description
  contactLinks: ContactLink[];
  theme?: 'default' | 'panel' | 'dark';
  graphic?: 'grid' | 'orbital' | 'stars' | 'none';
  divide?: 'top' | 'bottom' | 'both' | 'none';
}
```

**Default Theming:**
- Theme: `dark`
- Graphic: `none`
- Divide: `top`

**Usage Example:**
```tsx
import { contactLinks } from '@/data/portfolio';

<ContactSection
  contactLinks={contactLinks}
  description="Interested in collaborating on aerospace projects..."
/>
```

**Features:**
- ✅ Centered panel with max-width
- ✅ Description constrained by `.measure`
- ✅ Button grid with consistent spacing
- ✅ Hover animations (translate + scale)
- ✅ External link handling

---

## Common Patterns

### Alignment Rules

✅ **Headings:** Centered via `SectionHeading centered={true}`
✅ **Body Text:** Left-aligned via `text-left` class
✅ **Grids:** Centered via `mx-auto` on grid container
✅ **Measure:** Constrained via `max-w-measure` (65ch)

### Button Variants

All sections use MagneticButton or consistent button styles:

```tsx
// Primary CTA
<MagneticButton variant="primary" onClick={action}>
  {label}
</MagneticButton>

// Secondary CTA
<MagneticButton variant="secondary" onClick={action}>
  {label}
</MagneticButton>

// Link-style button
<Link
  href="/projects"
  className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/50"
>
  View All Projects →
</Link>
```

### Typography Tokens

All sections use the design system tokens:

- `text-display` - Hero titles (clamp 2.5rem → 4.5rem)
- `text-h2` - Section headings (clamp 1.5rem → 2.5rem)
- `text-h3` - Card headings (clamp 1.25rem → 1.875rem)
- `text-body` - Paragraphs (clamp 1rem → 1.125rem)
- `text-small` - Meta info (clamp 0.875rem → 1rem)
- `text-overline` - Accent labels (0.75rem uppercase)

---

## Page Integration

### Home Page Example

```tsx
import Navigation from '@/components/Navigation';
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  HighlightsSection,
  SkillsSection,
  ContactSection,
} from '@/components/sections';
import { experiences, projects, skillCategories, contactLinks, aboutCards } from '@/data/portfolio';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroSection
        title="Brandon A. Jacobson"
        subtitle="Aerospace Engineering Student | Flight Software & Control Systems"
        description="University of Florida student passionate about..."
      />

      <AboutSection cards={aboutCards} />

      <ExperienceSection experiences={experiences} />

      <HighlightsSection highlights={projects} />

      <SkillsSection skillCategories={skillCategories} />

      <ContactSection contactLinks={contactLinks} />

      <footer className="bg-primary text-center py-8 border-t border-accent relative z-10">
        <p className="text-body text-text">
          &copy; 2025 Brandon Jacobson | Building the future of spaceflight
        </p>
      </footer>
    </main>
  );
}
```

### Publications Page Example

```tsx
import { PublicationsSection } from '@/components/sections';

const publications = [/* ... */];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen">
      <PublicationsSection
        publications={publications}
        theme="default"
        graphic="orbital"
      />
    </main>
  );
}
```

---

## Benefits of This Refactor

✅ **Consistency** - All sections use the same design system tokens
✅ **Reusability** - Components can be used across multiple pages
✅ **Flexibility** - Theme/graphic/divide props allow easy customization
✅ **Maintainability** - Content changes only require data updates
✅ **Type Safety** - Full TypeScript interfaces for all props
✅ **Alignment** - Fixed "left drift" issues via parent `mx-auto`
✅ **Accessibility** - Semantic HTML, proper heading hierarchy
✅ **Performance** - Optimized animations with Intersection Observer

---

## Migration Checklist

- [x] Create 7 section components
- [x] Add barrel export (index.ts)
- [x] Update home page (app/page.tsx)
- [ ] Update projects page (app/projects/page.tsx)
- [ ] Create publications page (app/publications/page.tsx)
- [ ] Remove old component files (Hero.tsx, About.tsx, etc.)
- [ ] Test responsive behavior on mobile/tablet/desktop
- [ ] Verify animations and hover effects
- [ ] Test with different data sets
- [ ] Lighthouse audit for Performance > 90

---

## Next Steps

1. **Test all sections** with different data configurations
2. **Create dedicated pages** for publications and other sections
3. **Remove old components** (Hero.tsx, About.tsx, etc.) once migration is complete
4. **Add error boundaries** for robust error handling
5. **Document custom theme patterns** for specific use cases
6. **Create Storybook stories** for visual component documentation (optional)
