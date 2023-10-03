// components
import Header from "@/components/partials/Header";
import Appbar from "@/components/partials/Appbar";
import Footer from "@/components/partials/Footer";
import BottomNavigation from "@/components/partials/BottomNavigation";

// helpers
import {vazirmatn} from "@/helpers/fonts";

// styles
import '@/styles/globals.scss';
import "@/styles/other.scss";

const RootLayout = ({children}) => {

    return (
        <html lang="fa" dir='rtl'>

        <body className={`${vazirmatn.className} flex flex-col justify-start items-center w-full min-h-screen h-full bg-secondary py-[80px] md:pb-0`}>

        <Header/>

        <Appbar/>

        {children}

        <Footer/>

        <BottomNavigation/>

        </body>

        </html>
    )
}

export default RootLayout;

