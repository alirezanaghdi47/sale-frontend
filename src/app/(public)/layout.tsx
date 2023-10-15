// components
import Header from "@/components/partials/public/Header";
import Footer from "@/components/partials/public/Footer";
import Appbar from "@/components/partials/public/Appbar";
import BottomNavigation from "@/components/partials/public/BottomNavigation";

const PublicLayout = (props) => {

    return (
        <div className="relative flex flex-col justify-start items-start w-full max-w-[1200px] min-h-screen h-full py-[70px] md:pb-0">

            <Header/>

            <Appbar/>

            {props.children}

            <BottomNavigation/>

            <Footer/>

        </div>
    )
}

export default PublicLayout;

