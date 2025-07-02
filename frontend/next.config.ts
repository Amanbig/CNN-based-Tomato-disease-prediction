import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "picsum.photos","via.placeholder.com"],
  },
  output: "standalone",
};

export default nextConfig;
