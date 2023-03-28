/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "6LdfhzwkAAAAAAkexk8ygBw4s6yCXZIKM-uV0pSo",
  },
};

module.exports = nextConfig;
