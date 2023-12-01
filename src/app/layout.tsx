"use client";

// libraries
import dynamic from "next/dynamic";

// components
const InstallBanner = dynamic(() => import("@/components/widgets/InstallBanner"), {ssr: false});
const Notification = dynamic(() => import("@/components/modules/Notification"), {ssr: false});

// helpers
import {vazirmatn} from "@/helpers/fonts";

// providers
import TanstackQuery from "@/providers/TanstackQuery";

// styles
import '@/styles/globals.scss';

const RootLayout = (props) => {

    return (
        <html lang="fa" dir='rtl'>

        <body className={`${vazirmatn.className} flex justify-center items-center w-full h-full min-h-screen bg-secondary`}>

        <InstallBanner/>

        <Notification/>

        <TanstackQuery>
            {props.children}
        </TanstackQuery>

        </body>

        </html>
    )
}

export default RootLayout;

