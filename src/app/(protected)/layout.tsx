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
        <div className="grid grid-cols-12 justify-center items-center w-full max-w-[1200px] min-h-screen h-full mx-auto">

            <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-between items-center gap-y-4 min-h-screen h-full bg-light shadow-3xl px-8 py-4">

                <Logo/>

                {props.children}

                <CopyRight/>

            </div>

            <div className="md:col-span-6 lg:col-span-8 hidden md:flex flex-col justify-center items-center gap-y-4 min-h-screen h-full px-8 py-4">

                <h3 className="text-xl text-dark font-bold">
                    تکنو نما
                </h3>

                <p className="text-sm text-gray font-bold">
                    وب سایتی برای خرید و فروش محصولات دیجیتال
                </p>

            </div>

        </div>
    )
}

export default AuthLayout;

