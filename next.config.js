const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    disable: process.env.NODE_ENV !== "production",
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ],
    },
    env:{
        BASE_URL: 'https://sale.alirezanaghdi.ir',
        // BASE_URL: 'http://localhost:3000',
        API_URL: 'https://shop.alirezanaghdi.ir',
        // API_URL: 'http://localhost:4000',
        NEXTAUTH_URL: 'https://sale.alirezanaghdi.ir',
        // NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_SECRET: 'daedmp02304@##20rksf.//'
    },
    typescript:{
        ignoreBuildErrors: true
    },
    eslint:{
        ignoreDuringBuilds: true,
    }
});