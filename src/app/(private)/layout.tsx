// components
import {Sidebar, BottomNavigation, Appbar} from "@/components/widgets/Private";

const AccountLayout = (props) => {

    return (
        <div
            className="relative flex flex-col md:flex-row justify-start items-start w-full max-w-[1200px] min-h-screen h-full py-[70px] md:py-0">

            <Sidebar/>

            <Appbar/>

            {props.children}

            <BottomNavigation/>

        </div>
    )
}

export default AccountLayout;

