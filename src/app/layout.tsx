// components
import Notification from "@/components/modules/Notification";

// helpers
import {vazirmatn} from "@/helpers/fonts";

// styles
import '@/styles/globals.scss';

const RootLayout = (props) => {

    return (
        <html lang="fa" dir='rtl'>

        <body className={`${vazirmatn.className} flex justify-center items-center w-full h-full min-h-screen bg-secondary`}>

        <Notification/>

        {props.children}

        </body>

        </html>
    )
}

export default RootLayout;

