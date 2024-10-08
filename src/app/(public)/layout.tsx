// libraries
import {Metadata, Viewport} from "next";
import dynamic from "next/dynamic";

// components
import Header from "@/components/widgets/public/Header";
import AppBar from "@/components/widgets/public/AppBar";
import BottomNavigation from "@/components/widgets/public/BottomNavigation";
const InstallBanner = dynamic(() => import("@/components/partials/InstallBanner"), {ssr: false});

// types
import {PublicLayoutType} from "@/types/layouts";

export const metadata: Metadata = {
    applicationName: "نماگجت",
    title: "نماگجت",
    description: "وب سایتی برای خرید و فروش محصولات دیجیتال",
    metadataBase: new URL(process.env.BASE_URL),
    manifest: "/manifest.json",
    icons: {
        icon: "/icon-192x192.png",
        apple: "/icon-192x192.png",
    }
}

export const viewport: Viewport = {
    themeColor: "#2563eb",
}

const PublicLayout = (props: PublicLayoutType) => {

    return (
        <div className="relative flex flex-col justify-start items-start w-full max-w-[992px] h-full min-h-screen py-[70px] md:pb-0">

            <Header/>

            <AppBar/>

            {props.children}

            <BottomNavigation/>

            <InstallBanner/>

        </div>
    )
}

export default PublicLayout;

