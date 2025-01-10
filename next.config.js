const withBundleAnalyzer = require("@next/bundle-analyzer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["lab.basement.studio"],
  },
  rewrites: async () => [
    {
      source: "/:path*",
      destination: "/:path*", // Keep this as is if it's intentional
    },
    {
      source: "/docs",
      destination: "https://scrollytelling.basement.studio/docs", // Fixed URL
    },
    {
      source: "/docs/:path*",
      destination: "https://scrollytelling.basement.studio/docs/:path*", // Fixed URL
    },
  ],
};

module.exports = (_phase, { defaultConfig: _ }) => {
  const plugins = [
    withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
  ];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
