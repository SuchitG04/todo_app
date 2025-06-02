import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static exports
  images: { unoptimized: true }, // if you use next/image
};

export default nextConfig;
