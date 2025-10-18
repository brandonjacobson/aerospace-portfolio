# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern aerospace engineering portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features animated backgrounds, smooth scrolling, and responsive design optimized for recruiting and professional presentation.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom aerospace theme
- **Deployment**: Vercel-ready (zero config)

## Project Structure

```
/app
  layout.tsx       - Root layout with SEO metadata
  page.tsx         - Main page composing all sections
  globals.css      - Global styles and animations

/components        - React components for each section
  StarBackground.tsx - Animated starfield background
  Navigation.tsx     - Fixed navigation with smooth scroll
  Hero.tsx          - Landing section with CTA buttons
  About.tsx         - Education, research, interests cards
  Experience.tsx    - Professional experience timeline
  Projects.tsx      - Technical projects showcase
  Skills.tsx        - Animated skill bars with categories
  Contact.tsx       - Contact links section

/data
  portfolio.ts     - Central data store for all content

/types
  index.ts         - TypeScript interfaces

/public
  resume.pdf       - Downloadable resume
```

## Development Commands

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Key Features

**Animated Star Background**: Client-side component that generates 100 twinkling stars on mount. Stars are positioned randomly with CSS animations.

**Smooth Scrolling**: Navigation uses native `scrollIntoView` with smooth behavior. All section IDs match href anchors (#home, #about, etc.).

**Responsive Design**: Mobile-first approach with Tailwind breakpoints (md, lg). Grid layouts automatically stack on mobile.

**SEO Optimized**: metadata in layout.tsx includes title, description, keywords, and Open Graph tags.

## Content Management

All portfolio content is centralized in `/data/portfolio.ts`:
- `experiences`: Work history and roles
- `projects`: Technical projects with accomplishments
- `skillCategories`: Skills grouped by category with proficiency levels
- `contactLinks`: Email, LinkedIn, phone
- `aboutCards`: Education, research focus, interests

To update content, edit the data objects in this file. TypeScript interfaces ensure type safety.

## Color Theme

Custom aerospace theme defined in `tailwind.config.ts`:
- `primary`: #0a1929 (dark blue)
- `secondary`: #1e3a5f (medium blue)
- `accent`: #00d4ff (cyan)
- `text`: #e0e0e0 (light gray)
- `bg`: #000814 (near black)
- `card-bg`: #0d1b2a (card background)

## Deployment

**Vercel** (recommended):
1. Push to GitHub
2. Import repository in Vercel
3. Zero configuration needed - deploys automatically

**Other platforms**: Run `npm run build` then deploy the `.next` folder with a Node.js server.

## Adding New Sections

1. Create component in `/components`
2. Import in `app/page.tsx`
3. Add to `Navigation.tsx` if needed
4. Update types in `/types/index.ts` if using new data structures
5. Add data to `/data/portfolio.ts`
