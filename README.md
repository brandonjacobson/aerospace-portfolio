# Brandon Jacobson | Aerospace Engineering Portfolio

Modern, professional portfolio website showcasing aerospace engineering projects, experience, and technical skills. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- Animated starfield background
- Smooth scrolling navigation
- Responsive design (mobile, tablet, desktop)
- SEO optimized with metadata
- TypeScript for type safety
- Tailwind CSS for modern styling
- Zero-config deployment to Vercel

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
/app
  - layout.tsx       # Root layout with SEO
  - page.tsx         # Main page
  - globals.css      # Global styles

/components          # React components
  - StarBackground.tsx
  - Navigation.tsx
  - Hero.tsx
  - About.tsx
  - Experience.tsx
  - Projects.tsx
  - Skills.tsx
  - Contact.tsx

/data
  - portfolio.ts     # All portfolio content

/types
  - index.ts         # TypeScript interfaces

/public
  - resume.pdf       # Downloadable resume
```

## Content Management

All portfolio content is centralized in `/data/portfolio.ts`. Update this file to modify:
- Work experience
- Projects
- Skills and proficiency levels
- Contact information
- About section

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## Customization

### Colors

Edit the color theme in `tailwind.config.ts`:
```typescript
colors: {
  primary: "#0a1929",
  secondary: "#1e3a5f",
  accent: "#00d4ff",
  text: "#e0e0e0",
  bg: "#000814",
  "card-bg": "#0d1b2a",
}
```

### Adding New Sections

1. Create a component in `/components`
2. Import it in `app/page.tsx`
3. Add navigation link in `Navigation.tsx`
4. Create TypeScript types in `/types/index.ts`
5. Add data to `/data/portfolio.ts`

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Personal portfolio - All rights reserved.

## Contact

- Email: brandonjacobson0@gmail.com
- LinkedIn: [linkedin.com/in/b-jacobson](https://linkedin.com/in/b-jacobson)
