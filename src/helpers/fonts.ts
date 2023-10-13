import localFont from 'next/font/local';

export const vazirmatn = localFont({
    src: [
        {
            path: '../../public/assets/fonts/Vazirmatn-FD-Medium.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/Vazirmatn-FD-Bold.woff2',
            weight: '700',
            style: 'bold',
        },
    ],
    variable: '--font-vazirmatn',
    display: "swap"
});