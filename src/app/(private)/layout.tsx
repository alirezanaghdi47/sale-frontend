// libraries
import {Metadata, Viewport} from "next";

// components
import {Sidebar, BottomNavigation, Appbar} from "@/components/widgets/Private";

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

const AccountLayout = (props) => {

    return (
        <div
            className="relative flex flex-col md:flex-row justify-start items-start w-full max-w-[1200px] min-h-screen h-full py-[70px] md:py-0">

            <Sidebar/>

            <Appbar/>

            {props.children}

            <BottomNavigation/>

        </div>
    )
}

export default AccountLayout;

