// libraries
import NextTopLoader from "nextjs-toploader";
import {Toaster} from "react-hot-toast";

// helpers
import {vazirmatn} from "@/helpers/fonts";

// styles
import '@/styles/globals.scss';
import "@/styles/libraries/react-hot-toast.scss";

const RootLayout = (props) => {

    return (
        <html lang="fa" dir='rtl'>

        <body className={`${vazirmatn.className} flex justify-center items-center w-full h-full min-h-screen bg-secondary`}>

        <NextTopLoader
            color="#2563eb"
            initialPosition={0.08}
            crawlSpeed={200}
            height={4}
            crawl={false}
            easing="ease"
            speed={200}
            showSpinner={false}
            shadow="none"
            template='<div class="bar" role="bar"><div class="peg"></div></div>'
            zIndex={1600}
        />

        <Toaster
            position="bottom-left"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                className: "react-hot-toast",
                duration: 3000,
            }}
        />

        {props.children}

        </body>

        </html>
    )
}

export default RootLayout;

