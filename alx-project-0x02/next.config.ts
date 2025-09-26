// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
};

export default nextConfig;
