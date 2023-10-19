// components
import {Header , Appbar , BottomNavigation , Footer} from "@/components/widgets/Public";

const HomeLayout = (props) => {

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

export default HomeLayout;

