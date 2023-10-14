// helpers
import {vazirmatn} from "@/helpers/fonts";

// styles
import '@/styles/globals.scss';

const RootLayout = (props) => {

    return (
        <html lang="fa" dir='rtl'>

        <body className={`${vazirmatn.className} flex flex-col justify-start items-center w-full min-h-screen h-full bg-secondary py-[70px] md:pb-0`}>

        {props.children}

        </body>

        </html>
    )
}

export default RootLayout;

