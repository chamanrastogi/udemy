import type { NextConfig } from "next";

/**
 * GitHub Pages serves project sites from https://<user>.github.io/<repo>,
 * so every route and asset needs the repository name as its base path.
 * The Pages workflow passes the value detected by actions/configure-pages.
 * Locally the variable is empty and the site runs from the root.
 */
const basePath = (process.env.BASE_PATH || "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    agentFeedback: true,
  },
};

export default nextConfig;
