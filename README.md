# ClawOS Docs — Astro Starlight Phase 0

This is the standalone documentation site scaffold for `docs.clawoshq.com`.

## Why Astro Starlight

This repo intentionally uses Astro Starlight instead of Nextra to keep the docs site stable, low-maintenance, and first-party controlled while avoiding React 19 / `next-themes` noise.

## Phase 0 goals

- Standalone docs repo outside the ClawOS monorepo
- Astro Starlight scaffold
- ClawOS-aligned dark-first visual system
- `clawos-tokens.css` and `clawos-fonts.css` as the simple design contract
- Initial docs information architecture
- Vercel-ready static deployment

## Install

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Validation

```bash
npm run validate
```

This runs:

- `astro check`
- ESLint
- markdownlint
- Prettier check
- production build

## Deploy to Vercel

Astro static sites deploy to Vercel with zero extra configuration.

Recommended settings:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Domain: `docs.clawoshq.com`

## Design token contract

The low-maintenance source of truth for docs styling is:

- `src/styles/clawos-fonts.css`
- `src/styles/clawos-tokens.css`
- `src/styles/clawos-starlight.css`

Do not build a separate token package yet. Keep these files simple and portable.

## Release automation

Releases are managed with `release-please` and Conventional Commits.

The workflow uses the `OGM-Release-bot` GitHub App instead of `GITHUB_TOKEN` so release PRs and releases can trigger downstream workflows.

Required repository secrets:

- `OGM_RELEASE_BOT_APP_ID`
- `OGM_RELEASE_BOT_PRIVATE_KEY`

Primary workflows:

- CI: `.github/workflows/ci.yml`
- Release automation: `.github/workflows/release-please.yml`

## Content ownership

- Platform docs live here.
- CareerClaw docs also live here for Phase 0.
- Future skill docs can remain here or later be federated from skill repos only if that becomes necessary.
