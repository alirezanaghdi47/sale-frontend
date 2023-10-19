// libraries
import NextTopLoader from "nextjs-toploader";

// helpers
import {vazirmatn} from "@/helpers/fonts";

// styles
import '@/styles/globals.scss';

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
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div>'
            zIndex={1600}
        />

        {props.children}

        </body>

        </html>
    )
}

export default RootLayout;

