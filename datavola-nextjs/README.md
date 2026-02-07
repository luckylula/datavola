# DataVola SaaS Landing Page

A modern, production-ready SaaS landing page built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🔒 TypeScript for type safety
- 🎯 Clean, maintainable code structure
- 📦 Content separated from components

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header + Footer
│   ├── page.tsx            # Home page composing all sections
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── Container.tsx   # Reusable container component
│   └── sections/
│       ├── HeroSection.tsx
│       ├── EcosystemSection.tsx
│       ├── UseCasesSection.tsx
│       ├── BeforeAfterSection.tsx
│       └── FinalCTASection.tsx
├── components/ui/
│   └── OrbitalDiagram.tsx  # Orbital diagram component
├── content/
│   ├── copy.ts             # All text content and CTAs
│   └── useCases.ts         # Use case cards data
└── package.json
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Customization

- **Content**: Edit `content/copy.ts` and `content/useCases.ts`
- **Styling**: Modify Tailwind classes in components or extend theme in `tailwind.config.ts`
- **Sections**: Add or modify sections in `components/sections/`

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React 18
