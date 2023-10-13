// components
import Header from "@/components/partials/public/Header";
import Footer from "@/components/partials/Footer";
import Appbar from "@/components/partials/public/Appbar";
import BottomNavigation from "@/components/partials/public/BottomNavigation";

const PublicLayout = (props) => {

    return (
        <>
            <Header/>
            <Appbar/>
            {props.children}
            <BottomNavigation/>
            <Footer/>
        </>
    )
}

export default PublicLayout;

