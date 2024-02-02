// libraries
import dynamic from "next/dynamic";

// components
const Notification = dynamic(() => import("@/modules/Notification"), {ssr: false});

// helpers
import {vazirmatn} from "@/helpers/fonts";

// providers
import NextAuth from "@/providers/NextAuth";
import ReactCookie from "@/providers/ReactCookie";
import TanstackQuery from "@/providers/TanstackQuery";

// styles
import '@/styles/globals.scss';

// types
import {RootLayoutType} from "@/types/layouts";

const RootLayout = (props: RootLayoutType) => {

    return (
        <html lang="fa" dir='rtl'>
            <body className={`${vazirmatn.className} flex justify-center items-center w-full h-full min-h-screen bg-secondary`}>
            <Notification/>
            <NextAuth>
                <ReactCookie>
                    <TanstackQuery>
                        {props.children}
                    </TanstackQuery>
                </ReactCookie>
            </NextAuth>
            </body>
        </html>
    )
}

export default RootLayout;

