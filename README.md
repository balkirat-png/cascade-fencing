# Cascade Fencing & Repair - Homepage

A professional website for Cascade Fencing & Repair, a wood fencing company in Sumner, WA.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Project Setup

All dependencies have been installed. The project is ready to open in IntelliJ.

### Installed Dependencies

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Project Structure

```
cascade-fencing/
├── app/
│   ├── layout.tsx          # Root layout with fonts config
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   ├── Button.tsx      # Button component
│   │   └── Modal.tsx       # Modal component
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   ├── ContactForm.tsx     # Contact form
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── TrustBar.tsx    # Trust bar
│       ├── Services.tsx    # Services overview
│       ├── WhyChooseUs.tsx # Why choose us
│       ├── Reviews.tsx     # Reviews section
│       ├── ServiceAreas.tsx # Service areas
│       ├── GalleryPreview.tsx # Gallery
│       └── FinalCTA.tsx    # Final call-to-action
├── public/
│   └── images/
│       └── gallery/
│           └── photo/      # Gallery photos (add 30 images)
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

## Getting Started

1. Open this folder in IntelliJ IDEA
2. IntelliJ will recognize this as a Node.js project
3. Open terminal and run:

```bash
npm run dev
```

This starts the development server at `http://localhost:3000`

## Next Steps

Follow your Phase 1 starter prompt to implement:
1. Header with sticky navigation
2. Hero section
3. All homepage sections
4. Contact form modal
5. Footer

Refer to `/Users/balkiratsingh/Desktop/phase-1-starter-prompt.md` for detailed requirements.

## Fonts Configured

- **Headings:** Young Serif (from Google Fonts)
- **Body/UI:** Poppins (from Google Fonts)

## Colors Configured

- **Primary:** Forest Green (#35513B)
  - Light: #4a6b50
  - Dark: #2a4030
- **Accent:** Gold (#A18956)
  - Light: #b59d6d
  - Dark: #8a7347

All set to go! Open in IntelliJ and start building.
