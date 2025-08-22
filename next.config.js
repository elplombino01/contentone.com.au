/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add remote image domains here if used (e.g., CMS/CDN)
    domains: [],
    // Opt-in to next/image handling formats for better perf
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  // Ensure trailingSlash behavior is consistent for sitemap linking (optional)
  // trailingSlash: false,
};

module.exports = nextConfig;