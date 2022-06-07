/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: "csv-loader",
      options: {
        dynamicTyping: false,
        header: false,
        skipEmptyLines: false,
      },
    });

    return config;
  },
};

module.exports = nextConfig;
