# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cascade Fencing & Repair is a professional website for a wood fencing company in Sumner, WA. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts the development server at `http://localhost:3000`

### Building for Production
```bash
npm build
```

### Starting Production Server
```bash
npm start
```

### Linting
```bash
npm run lint
```

## Architecture & Key Patterns

### App Router Structure
This project uses Next.js App Router (not Pages Router). All routes are defined in the `app/` directory:
- `app/page.tsx` - Homepage
- `app/layout.tsx` - Root layout with font configuration (Young Serif for headings, Poppins for body)
- `app/[route]/page.tsx` - Route-specific pages

### Component Organization
- `components/` - Shared React components
  - `components/sections/` - Homepage sections (Hero, Services, Reviews, etc.)
  - `components/ui/` - Reusable UI components (Button, Modal)
  - `Header.tsx` and `Footer.tsx` - Global layout components

### Performance Optimization Strategy
The homepage uses dynamic imports for below-the-fold components to optimize initial load:
```typescript
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs").then(mod => ({ default: mod.WhyChooseUs })), {
  ssr: true,
});
```

Components loaded dynamically:
- WhyChooseUs
- ServiceAreas
- GalleryPreview
- FinalCTA

Above-the-fold components (Header, Hero, TrustBar, TopServices, Reviews) are imported statically for faster initial render.

### Image Configuration
Next.js image optimization is enabled in `next.config.ts`:
- Formats: AVIF and WebP
- Unoptimized: false (images are optimized)
- Custom device sizes and image sizes configured for responsive loading

### Form Handling
Contact forms use:
- `react-hook-form` for form state management
- `zod` for schema validation
- `@hookform/resolvers` for integration
- Honeypot field for spam protection

### Styling
- Tailwind CSS utility classes
- Custom colors configured in `tailwind.config.ts`:
  - Primary: Forest Green (#35513B)
  - Accent: Gold (#A18956)
- Custom fonts loaded via `next/font/google` in root layout

### Client vs Server Components
- Most components are client components (`"use client"`) due to interactivity requirements
- Forms, modals, and navigation all use client-side state

### Modal Pattern
The site uses a modal overlay for contact forms:
- `Modal` component in `components/ui/Modal.tsx`
- `ContactForm` component rendered inside modals
- Modal state managed via `isModalOpen` in parent components
- Callback pattern: `onEstimateClick` prop passed through Header → page → sections

### Navigation & Routing
- Header has dropdown menu for Services
- Smooth scrolling to sections implemented for Service Areas link
- Cross-page navigation with scroll targets using query parameters: `/?scrollTo=service-areas`
- `useRouter` from `next/navigation` for programmatic navigation

### SEO Pages Structure
Multiple SEO-optimized pages exist for:
- Service types: `/services/wood-fence-installation`, `/services/wood-fence-repair`
- Fence types: `/fences/cedar-privacy-fence`, `/fences/solid-board-fence`, etc.
- Service areas: `/service-areas/sumner`, `/service-areas/tacoma`, etc.

Each has its own `layout.tsx` and `page.tsx` for metadata and content customization.

## Key Technical Notes

### TypeScript
- Strict TypeScript enabled
- Type safety for all components and props
- Interface definitions for component props

### Production Optimizations
- Console statements removed in production (`removeConsole: true`)
- React Strict Mode enabled
- CSS optimization enabled (`optimizeCss: true`)
- Powered-by header disabled for security

### Font Preloading
Root layout includes preconnect and dns-prefetch hints for:
- Google Fonts
- Elfsight CDN (for review widgets)

### Hydration
`suppressHydrationWarning` used on body tag in root layout to prevent hydration mismatches.
