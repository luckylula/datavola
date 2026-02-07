# Project Structure Best Practices Guide

## Current DataVola Structure (Well-Organized)

This document outlines the best practices from the well-structured DataVola project that can be applied to other projects.

## 📁 Recommended Project Structure

```
project-root/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Header + Footer)
│   ├── page.tsx                 # Home page (composes sections)
│   └── globals.css              # Global styles & animations
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Container.tsx       # Reusable container wrapper
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx           # Site footer
│   │
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── EcosystemSection.tsx
│   │   ├── UseCasesSection.tsx
│   │   ├── BeforeAfterSection.tsx
│   │   └── FinalCTASection.tsx
│   │
│   └── ui/                      # Reusable UI components
│       └── OrbitalDiagram.tsx
│
├── content/                     # Content & data (separated from components)
│   ├── copy.ts                  # All text content, CTAs, navigation
│   └── useCases.ts              # Use case data
│
├── public/                      # Static assets
│   └── icons/                   # Icon files
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## ✅ Key Best Practices

### 1. **Separation of Concerns**
- **Content** (`content/`) is separated from **Components** (`components/`)
- Makes it easy to update copy without touching component code
- Allows for easy content management and translations

### 2. **Component Organization**
- **Layout components** (`components/layout/`) - Header, Footer, Container
- **Section components** (`components/sections/`) - Page sections
- **UI components** (`components/ui/`) - Reusable visual components

### 3. **TypeScript Types**
- Define interfaces for data structures (e.g., `UseCase`, `IntegrationNode`)
- Type safety prevents errors and improves developer experience

### 4. **Consistent Styling**
- Use Tailwind CSS utility classes
- Define custom animations in `globals.css`
- Consistent spacing, colors, and typography

### 5. **Client Components**
- Mark interactive components with `'use client'` directive
- Use React hooks (useState, useEffect, useRef) for interactivity
- Implement scroll-reveal animations with Intersection Observer

### 6. **Responsive Design**
- Mobile-first approach
- Use Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- Test on multiple screen sizes

### 7. **Performance**
- Use `useMemo` for expensive calculations
- Lazy load animations
- Optimize images and assets

## 🔄 Restructuring Checklist

If you need to restructure an existing project:

- [ ] Create proper folder structure (`components/layout/`, `components/sections/`, `components/ui/`)
- [ ] Extract all text content to `content/copy.ts`
- [ ] Separate data from components
- [ ] Add TypeScript types for all data structures
- [ ] Organize components by purpose (layout, sections, ui)
- [ ] Ensure consistent naming conventions
- [ ] Add proper imports and exports
- [ ] Update `app/page.tsx` to compose sections cleanly
- [ ] Move global styles to `app/globals.css`
- [ ] Add proper TypeScript configuration

## 📝 Example: Content Structure

```typescript
// content/copy.ts
export const copy = {
  header: {
    logo: 'BrandName',
    navLinks: [...],
    cta: {...}
  },
  hero: {
    title: '...',
    subtitle: '...',
    primaryCta: {...},
    secondaryCta: {...},
    proofBullets: [...]
  },
  // ... more sections
}
```

## 📝 Example: Component Structure

```typescript
// components/sections/HeroSection.tsx
'use client'

import { Container } from '@/components/layout/Container'
import { copy } from '@/content/copy'

export function HeroSection() {
  // Component logic
  return (
    <section>
      {/* JSX */}
    </section>
  )
}
```

## 🎯 Benefits of This Structure

1. **Maintainability** - Easy to find and update code
2. **Scalability** - Easy to add new sections or components
3. **Reusability** - Components can be reused across pages
4. **Type Safety** - TypeScript catches errors early
5. **Content Management** - Content is centralized and easy to update
6. **Team Collaboration** - Clear structure helps team members navigate codebase
