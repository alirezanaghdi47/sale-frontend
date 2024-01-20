/** @type {import('next').NextConfig} */

const withSerwist = require("@serwist/next").default({
    swSrc: "src/app/sw.ts",
    swDest: "public/sw.js",
});

module.exports = withSerwist({
    reactStrictMode: false,
    images: {
        remotePatterns: [
            // {
            //     protocol: 'https',
            //     hostname: 'api.namagadget.ir',
            //     port: '',
            // },
            {
                protocol: 'http',
                hostname: '**',
            },
        ],
    },
    env:{
        // BASE_URL: 'https://namagadget.ir',
        BASE_URL: 'http://localhost:3000',
        // API_URL: 'https://api.namagadget.ir',
        API_URL: 'http://localhost:4000',
        // NEXTAUTH_URL: 'https://namagadget.ir',
        NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_SECRET: 'daedmp02304@##20rksf.//'
    },
    typescript:{
        ignoreBuildErrors: true
    },
    eslint:{
        ignoreDuringBuilds: true,
    }
});