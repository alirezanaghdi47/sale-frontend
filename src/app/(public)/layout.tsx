// libraries
import {Metadata, Viewport} from "next";

// components
import {Header , Appbar , BottomNavigation} from "@/components/widgets/Public";

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
        <div className="relative flex flex-col justify-start items-start w-full max-w-[1200px] min-h-screen h-full py-[70px] md:pb-0">

            <Header/>

            <Appbar/>

            {props.children}

            <BottomNavigation/>

        </div>
    )
}

export default HomeLayout;

