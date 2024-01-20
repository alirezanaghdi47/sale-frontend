// libraries
import {Metadata, Viewport} from "next";

// components
import {CopyRight, Logo} from "@/components/widgets/Protected";

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
const AuthLayout = (props) => {

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full min-h-screen h-full mx-auto p-4">

            <Logo/>

            {props.children}

            <CopyRight/>

        </div>
    )
}

export default AuthLayout;

