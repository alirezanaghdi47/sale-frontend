/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_MAPBOX_TOKEN: "pk.eyJ1IjoiYWxpcmV6YW5hZ2hkaTQ3IiwiYSI6ImNrbXQ5OXB0ZTBwZm4ycXMwbDM4cnZpZ2kifQ.QQqvipZndjdONiyH0e5hfA"
    },
    typescript:{
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig;
