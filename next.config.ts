import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // tells Next.js to generate static HTML files
  basePath: "/avijitpandit", // because your repo is NOT username.github.io
};

export default nextConfig;