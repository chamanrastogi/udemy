# Fieldwork

An editorial notebook built with **Next.js 16** (App Router), **TypeScript**, and a small custom CSS design system. Posts are read from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) and cached with Cache Components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy the environment contract before running the app for the first time:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

## Environment variables

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_NAME` | Wordmark, metadata, and footer | `Fieldwork` |
| `NEXT_PUBLIC_SITE_TAGLINE` | Short line used in metadata | `Notes on the build` |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | Meta description and social previews | Long description |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for `metadataBase` | `http://localhost:3000` |
| `NEXT_PUBLIC_SITE_EMAIL` | Contact links and CTAs | `hello@fieldwork.studio` |
| `NEXT_PUBLIC_SITE_LOCATION` | Location shown in the header, hero, and contact page | `Nairobi, Kenya` |
| `NEXT_PUBLIC_POSTS_API_URL` | Posts feed used by `lib/posts.ts` | JSONPlaceholder `/posts` |

All variables are `NEXT_PUBLIC_` because the site config is shared between server and client components. Values are validated in `lib/env.ts` with safe fallbacks, so a malformed URL will not crash a build.

- `.env.example` is committed and documents the contract.
- `.env.local` holds local overrides and is git-ignored.

## Project structure

```text
app/
  layout.tsx              Fonts, metadata, header/footer shell
  page.tsx                Home — hero, latest posts, approach, contact CTA
  globals.css             Design tokens, layout, components, responsive rules
  about/page.tsx          Practice profile and field kit
  contact/page.tsx        Open channel and practicalities
  posts/
    page.tsx              Cached posts index
    loading.tsx           Index skeleton
    error.tsx             Index error boundary
  not-found.tsx           Custom 404
components/
  layout/
    SiteHeader.tsx        Sticky nav + accessible mobile menu
    SiteFooter.tsx        Sitemap, colophon, large wordmark
  marketing/
    ContactCta.tsx        Shared contact band
  notes/
    PostList.tsx          Reusable post index rows
  ui/
    ArrowLink.tsx         Internal/external arrow link
lib/
  env.ts                  Public environment config + fallbacks
  site.ts                 Site metadata and navigation
  posts.ts                Cached data access + formatting helpers
types/
  post.ts                 Post model
```

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build (also runs TypeScript)
npm run start    # Serve the production build
npm run lint     # ESLint
```

## Implementation notes

- **Cache Components** are enabled in `next.config.ts`. `getPosts()` uses `"use cache"`, `cacheLife("hours")`, and the `posts` cache tag so the home page and posts index share one data fetch.
- The posts route has explicit `loading.tsx` and `error.tsx` states.
- Fonts are loaded with `next/font/google` and self-hosted at build time: Bricolage Grotesque for display, Instrument Sans for body copy, and IBM Plex Mono for metadata.
- The UI is a custom CSS system. Bootstrap was removed so the visual language (paper grid, crop marks, signal orange) is not fighting framework defaults.
- The mobile menu closes on route change, Escape, and locks body scroll while open. All interactive states have visible focus styles, and motion is disabled under `prefers-reduced-motion`.
