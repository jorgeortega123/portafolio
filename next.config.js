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
    // output: "export",
    swcMinify: true,
    reactStrictMode: false,
    // webpack: (config, { dev, isServer }) => {
    //   if (!dev && !isServer) {
    //     Object.assign(config.resolve.alias, {
    //       "react/jsx-runtime.js": "preact/compat/jsx-runtime",
    //       react: "preact/compat",
    //       "react-dom/test-utils": "preact/test-utils",
    //       "react-dom": "preact/compat",
    //     });
    //   }
    //   return config;
    // },
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },

    i18n: {
      locales: ["en", "es"],
      defaultLocale: "en",
    },
  });
};
