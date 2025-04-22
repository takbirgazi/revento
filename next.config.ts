import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  scripts: [
    { src: 'https://assets.calendly.com/assets/external/widget.js', async: true }
  ],
  images: {
    domains: ['framerusercontent.com'],
  },
};

export default nextConfig;
