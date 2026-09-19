/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = () => {
  const plugins = [withPWA, withBundleAnalyzer];
  return plugins.reduce((acc, next) => next(acc), {
    turbopack: {},
    pwa: {
      dest: "public",
      register: true,
    },
    reactStrictMode: true,
    transpilePackages: ["@llampukaq/icons"],
    swcMinify: true,
    // Solo se activa en el build de Docker (Dockerfile setea NEXT_DOCKER_STANDALONE=true).
    // Esto NO afecta al despliegue en Cloudflare con OpenNext.
    output: process.env.NEXT_DOCKER_STANDALONE === "true" ? "standalone" : undefined,
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
