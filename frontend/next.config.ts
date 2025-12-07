import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      new URL("https://images.genius.com/**"),
      new URL("https://images.rapgenius.com/**"),
      new URL("https://filepicker-images.genius.com/**"),
      new URL("https://s3.amazonaws.com/**"),
      new URL("https://www.instagram.com/**"),
      new URL("https://imgur.com/**"),
      {
        protocol: "https",
        hostname: "assets.genius.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/m`e/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`

  distDir: "dist",
  compress: false,
};

module.exports = nextConfig;
