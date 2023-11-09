import type {Config} from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            xs: '320px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
        colors: {
            dark: "#334155",
            gray: "#475569",
            secondary: "#e2e8f0",
            light: "#f8fafc",
            red: "#ef4444",
            green: "#10b981",
            blue: "#2563eb",
            yellow: "#facc15",
            current: 'currentColor',
            transparent: "transparent",
            inherit: "inherit"
        },
        fontFamily: {
            sans: ['--font-vazirmatn', 'sans-serif'],
        },
        extend: {
            boxShadow: {
                "3xl": "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                "4xl": "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
            },
            transitionProperty:{
                "height": "height"
            },
            transitionTimingFunction:{
                'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
            }
        }
    },
    plugins: [],
}
export default config;
