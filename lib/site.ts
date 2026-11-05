import { env } from "@/lib/env";

export const site = {
  name: env.siteName,
  tagline: env.siteTagline,
  description: env.siteDescription,
  url: env.siteUrl,
  email: env.siteEmail,
  location: env.siteLocation,
  postsApiUrl: env.postsApiUrl,
  year: "2026",
  nav: [
    { href: "/", label: "Home", index: "00" },
    { href: "/posts", label: "Posts", index: "01" },
    { href: "/about", label: "About", index: "02" },
    { href: "/contact", label: "Contact", index: "03" },
  ],
} as const;

export const contactHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Project enquiry",
)}`;
