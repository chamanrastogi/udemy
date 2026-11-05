const fallbacks = {
  siteName: "Fieldwork",
  siteTagline: "Notes on the build",
  siteDescription:
    "A public notebook on interfaces, systems, and the small decisions that make software feel considered.",
  siteUrl: "http://localhost:3000",
  siteEmail: "hello@fieldwork.studio",
  siteLocation: "Nairobi, Kenya",
  postsApiUrl: "https://jsonplaceholder.typicode.com/posts",
} as const;

function normalizeUrl(value: string | undefined, fallback: string) {
  try {
    return new URL(value || fallback).toString().replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

/**
 * Every public value is read with a static `process.env.NEXT_PUBLIC_*`
 * lookup so Next.js can inline it at build time.
 */
export const env = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || fallbacks.siteName,
  siteTagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || fallbacks.siteTagline,
  siteDescription:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION || fallbacks.siteDescription,
  siteUrl: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL, fallbacks.siteUrl),
  siteEmail: process.env.NEXT_PUBLIC_SITE_EMAIL || fallbacks.siteEmail,
  siteLocation:
    process.env.NEXT_PUBLIC_SITE_LOCATION || fallbacks.siteLocation,
  postsApiUrl:
    process.env.NEXT_PUBLIC_POSTS_API_URL || fallbacks.postsApiUrl,
} as const;
