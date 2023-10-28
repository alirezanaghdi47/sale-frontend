// libraries
import {Toaster} from "react-hot-toast";

// helpers
import {vazirmatn} from "@/helpers/fonts";

// styles
import '@/styles/globals.scss';
import "@/styles/customize/react-hot-toast.scss";

const RootLayout = (props) => {

    return (
        <html lang="fa" dir='rtl'>

        <body className={`${vazirmatn.className} flex justify-center items-center w-full h-full min-h-screen bg-secondary`}>

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

