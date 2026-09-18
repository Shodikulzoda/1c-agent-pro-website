import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Standalone build output — lets the Docker runner image ship just the
  // built server and its pruned dependencies instead of the whole node_modules tree.
  output: "standalone",
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
