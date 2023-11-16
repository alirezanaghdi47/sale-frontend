// libraries
import {Metadata, Viewport} from "next";
import dynamic from "next/dynamic";

// components
const Notification = dynamic(() => import("@/components/modules/Notification") , {ssr: false});

// helpers
import {vazirmatn} from "@/helpers/fonts";

// styles
import '@/styles/globals.scss';

export const metadata: Metadata = {
    title: "Sale",
    description: "a sale shop for selling or buying anything",
    metadataBase: process.env.BASE_URL,
    manifest: "/manifest.json",
    icons: {
        icon: "/icon-192x192.png",
        apple: "/icon-192x192.png",
    }
}

export const viewport: Viewport = {
    themeColor: "#2563eb",
}

const RootLayout = (props) => {

    return (
        <html lang="fa" dir='rtl'>

        <body className={`${vazirmatn.className} flex justify-center items-center w-full h-full min-h-screen bg-secondary`}>

        <Notification/>

        {props.children}

        </body>

        </html>
    )
}

export default RootLayout;

