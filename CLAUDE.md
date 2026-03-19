# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 16 App Router** marketing website for "Artic Analytica" — a data research and consulting firm. It's a frontend-only site with no backend or API routes.

### Key Directories

- `src/app/` — App Router entry points (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/components/sections/` — Full-width page sections stacked on the home page
- `src/components/common/` — Reusable primitives (buttons, cards, labels)
- `src/components/layout/` — Navbar, footer, mobile menu, container wrapper
- `src/components/ui/` — shadcn/ui components (don't modify manually)
- `src/lib/constants.ts` — Centralized data: nav links, services, site config
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `public/assets/` — Brand assets (SVG logos, PNG backgrounds, UI images)

### Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss` — configuration is CSS-variable-based in `globals.css`, not a `tailwind.config.js` file
- Brand color tokens defined in `globals.css`: Persian Blue (`#2020D3`), Teal (`#53F2AA`–`#21CC7D`), Ebony (`#161616`)
- Use `cn()` from `@/lib/utils` for conditional class merging
- shadcn/ui is configured with **new-york** style and lucide icons

### Component Patterns

- Mark interactive components with `"use client"` (navbar, hero, buttons that use hooks)
- Animations are JS-driven (hero text carousel via `useState`/`useEffect`) or CSS transitions
- Path alias `@/*` maps to `src/*` — use it for all imports
- Static data (nav items, service cards, etc.) lives in `src/lib/constants.ts`, not inline in components
