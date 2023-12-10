// libraries
import {Metadata, Viewport} from "next";
import dynamic from "next/dynamic";

// components
import {Header, Appbar, BottomNavigation} from "@/components/widgets/Public";
const InstallBanner = dynamic(() => import("@/components/widgets/InstallBanner"), {ssr: false});

export const metadata: Metadata = {
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

const HomeLayout = (props) => {

    return (
        <div className="relative flex flex-col justify-start items-start w-full max-w-[992px] h-full min-h-screen py-[70px] md:pb-0">

            <Header/>

            <Appbar/>

            {props.children}

            <BottomNavigation/>

            <InstallBanner/>

        </div>
    )
}

export default HomeLayout;

