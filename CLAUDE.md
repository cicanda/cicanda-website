@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Next.js 16 + React 19 + Tailwind v4

This stack is newer than most training data. Verify APIs against the bundled docs and source before writing code:

- Next.js docs: `node_modules/next/dist/docs/` (start with `01-app/` for App Router).
- Tailwind v4 uses CSS-first config via `@import "tailwindcss"` and `@theme inline {}` in `app/globals.css` — there is no `tailwind.config.{js,ts}`. Don't introduce one.
- React 19 is in use (e.g. `use`, Actions, ref-as-prop). Don't downlevel patterns to React 18.

If something looks like it would work but you can't confirm it in the installed version, read the source under `node_modules/next/` rather than guessing.

## Commands

- `npm run dev` — start the dev server on http://localhost:3000.
- `npm run build` — production build.
- `npm start` — serve the production build (run `build` first).
- `npm run lint` — run ESLint (flat config, `eslint.config.mjs`). The script is bare `eslint`; pass paths to lint a subset, e.g. `npm run lint -- app/page.tsx`.

There is no test runner configured.

## Architecture

- **App Router only** under `app/`. `app/layout.tsx` is the root layout (loads Geist/Geist Mono via `next/font/google`, sets `<html>`/`<body>` flex layout). `app/page.tsx` is the root route.
- **Styling**: Tailwind v4 via `@tailwindcss/postcss` (`postcss.config.mjs`). Theme tokens (`--color-background`, `--font-sans`, etc.) are declared in `app/globals.css` under `@theme inline` — extend the design system there, not in a JS config.
- **TypeScript**: `strict` is on. The `@/*` path alias maps to the repo root (`tsconfig.json`).
- **Static assets**: `public/` is served at `/` (referenced via `next/image` with absolute paths like `/next.svg`).

## Conventions

- Components default to Server Components. Add `"use client"` only when a file actually needs client-side hooks/events.
- Use `next/image` and `next/font` rather than raw `<img>` or `@font-face` — both are already wired up.
