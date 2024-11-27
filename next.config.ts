import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this if your repository is in a subdirectory
  basePath: process.env.NODE_ENV === "production" ? "project200.org" : "",

  // Add this if you're using a custom domain or GitHub Pages
  assetPrefix: process.env.NODE_ENV === "production" ? "project200.org" : "",

  // Ensure static image exports work
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
