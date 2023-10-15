// components
import Appbar from "@/components/partials/private/Appbar";
import BottomNavigation from "@/components/partials/private/BottomNavigation";
import Sidebar from "@/components/partials/private/Sidebar";

const PrivateLayout = (props) => {

    return (
        <div className="relative flex flex-col md:flex-row justify-start items-start w-full max-w-[1200px] min-h-screen h-full py-[70px] md:py-0">

            <Sidebar/>

            <Appbar/>

            {props.children}

            <BottomNavigation/>

        </div>
    )
}

export default PrivateLayout;

