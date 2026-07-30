# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio site built on top of a modern, minimalist Astro +
Tailwind CSS v4 template. It's designed to be easily customizable through a
single configuration file (`src/config.ts`) while maintaining a clean,
professional appearance.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new @tailwindcss/vite plugin
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library

## Development Commands

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Lint with ESLint
npm run lint:fix      # Lint and auto-fix (also sorts imports)
npm run format        # Format with Prettier
npm run format:check  # Check formatting without writing
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): Individual Astro components for each section
  (Hero, About, Experience, Projects, Licenses, Header, Footer)
- **Main Layout** (`src/pages/index.astro`): Single-page layout that imports all components
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: Single `accentColor` in config propagates throughout the site via CSS custom properties

## Important Implementation Details

- The site uses Tailwind CSS v4 with the Vite plugin configuration
- ESLint (flat config, `typescript-eslint` + `eslint-plugin-astro` +
  `eslint-plugin-simple-import-sort`) and Prettier (with `prettier-plugin-astro`)
  are configured; no testing framework is set up
- All components are in `.astro` format (not React/Vue/etc)
- The project uses IBM Plex Mono font loaded from Google Fonts
- Social links in the config are all optional and will conditionally render

## Working with Components

When modifying components:

1. Components read directly from the imported `siteConfig` object
2. Use Tailwind utility classes for styling
3. Maintain the existing monospace font aesthetic
4. Use Tabler Icons for consistency with existing icons

## Configuration Structure

The `src/config.ts` exports a `siteConfig` object with these sections:

- Basic info: name, title, description, accentColor
- Social links: email, github, qiita, linkedin, twitter (all optional)
- aboutMe: string
- skills: { proficient: string[], familiar: string[] }
- projects: array of { name?, link?, description?, skills? }
- experience: array of { company?, title?, dateRange?, bullets }
- licenses: array of { name?, dateRange? }
