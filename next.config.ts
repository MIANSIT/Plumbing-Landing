import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },
  output: "export",
  basePath: "/Plumbing-Landing",
  assetPrefix: "/Plumbing-Landing",
};

export default nextConfig;
