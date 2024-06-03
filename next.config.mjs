// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "production",
    // cacheOnFrontEndNavCaching: true,
    // aggressiveFrontEndNavCaching: true,
    // reloadOnOnline: true,
    // swcMinify: true,
    // workboxOptions: {
    //     disableDevLogs: true,
    //   },
});

export default withPWA({
  // Your Next.js config
});
