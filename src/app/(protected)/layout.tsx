// libraries
import {Metadata, Viewport} from "next";

// components
import {CopyRight, Logo} from "@/components/widgets/Protected";

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
const AuthLayout = (props) => {

    return (
        <div
            className="flex justify-center items-center w-full min-h-screen h-full bg-cover bg-center bg-no-repeat p-4"
            // style={{backgroundImage: 'url(/assets/images/blob.svg)'}}
        >

            <div className="flex flex-col justify-center items-center gap-y-4 w-full max-w-[480px]">

                <Logo/>

                {props.children}

                <CopyRight/>

            </div>

        </div>
    )
}

export default AuthLayout;

