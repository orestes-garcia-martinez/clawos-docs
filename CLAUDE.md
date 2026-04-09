# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ClawOS Docs is the standalone documentation site for the ClawOS multi-skill AI platform, deployed at `docs.clawoshq.com`. Built with **Astro + Starlight** — chosen intentionally over Nextra to stay stable, low-maintenance, and free from React ecosystem churn.

## Commands

```bash
npm run dev       # Local dev server
npm run build     # Production build
npm run preview   # Preview built output
npm run check     # Astro type/schema check
```

## Architecture

### Content

All docs are markdown files in `src/content/docs/`. File paths map directly to URLs. Each page uses YAML frontmatter with `title`, `description`, and `sidebar.order`. The content schema is enforced via Starlight's built-in loader in `src/content.config.ts`.

Navigation structure is defined in `astro.config.mjs` under `starlight.sidebar`. When adding a new page, both the markdown file and the sidebar entry must be created.

### Styling

Three-layer CSS system — order matters:

1. `src/styles/clawos-fonts.css` — font-face declarations (Syne, DM Sans, JetBrains Mono)
2. `src/styles/clawos-tokens.css` — CSS custom properties (colors, spacing). This is the **source of truth** for design tokens.
3. `src/styles/clawos-starlight.css` — Starlight theme overrides using the tokens

The site is **dark-only**. The color scheme is locked to dark mode — do not introduce light-mode variants.

Key tokens:

- Background: `#0A0F1E`
- Accent: `#00D4A1` (mint green)
- Text: `#DDE8F8`

### Components

Custom Astro components live in `src/components/`. Currently only `SocialIcons.astro` exists — it overrides Starlight's default to force social links to open in new tabs.

### Key Config

`astro.config.mjs` is the central config: site URL, Starlight options, sidebar structure, custom CSS registration, and component overrides.

## Content Sections

- `getting-started/` — Onboarding flows for web and Telegram channels
- `core-concepts/` — Shell vs skill mode, channels, security, shared context
- `platform/` — Architecture, billing, data policy
- `skills/careerclaw/` — CareerClaw skill docs (live, Phase 0)
- `skills/scrapeclaw/`, `skills/investclaw/` — Placeholder skill pages
- `api/` — API reference and billing endpoints
- `examples/` — Channel integration examples
- `changelog/` — Release notes

## Deployment

Vercel static deployment with zero extra configuration. The `public/` directory contains `robots.txt`, favicon, and Apple touch icon.
