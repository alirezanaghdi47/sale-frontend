// libraries
import {Metadata, Viewport} from "next";

// components
import {Header} from "@/components/widgets/Private";

export const metadata: Metadata = {
    applicationName: "نماگجت",
    title: "نماگجت",
    description: "وب سایتی برای خرید و فروش محصولات دیجیتال",
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
            className="relative flex flex-col justify-start items-start w-full max-w-[992px] h-full min-h-screen pt-[70px]">

            <Header/>

            {props.children}

        </div>
    )
}

export default AccountLayout;

