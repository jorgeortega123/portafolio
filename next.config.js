/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = () => {
  const plugins = [withPWA, withBundleAnalyzer];
  return plugins.reduce((acc, next) => next(acc), {
    pwa: {
      dest: "public",
      register: true,
    },
    reactStrictMode: true,
    transpilePackages: ["@llampukaq/icons"],
    swcMinify: true,
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    i18n: {
      locales: ["es-ES", "en-US", "zh-CN"],
      defaultLocale: "en-US",
    },
  });
};
