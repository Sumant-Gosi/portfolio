// Absolute site URL for metadata, sitemap and Open Graph.
// Change PRODUCTION_URL when the public domain changes (or override with NEXT_PUBLIC_SITE_URL).
const PRODUCTION_URL = "https://sumant-gosi.vercel.app";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL ? PRODUCTION_URL : "http://localhost:3000");
