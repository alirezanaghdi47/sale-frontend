// libraries
import dynamic from "next/dynamic";

// components
const Notification = dynamic(() => import("@/components/modules/Notification") , {ssr: false});

// helpers
import {vazirmatn} from "@/helpers/fonts";

// styles
import '@/styles/globals.scss';
import '@/styles/customize/simple-bars.scss';

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

