'use client';

// libraries
import Link from "next/link";
import {
    LuBookmark,
    LuMessageCircle,
    LuPieChart,
    LuScrollText,
} from "react-icons/lu";

// components
import CategoriesModal from "@/components/widgets/public/CategoriesModal";
import AuthModal from "@/components/widgets/public/AuthModal";

// hooks
import {useModal} from "@/hooks/useModal";

const Navbar = () => {

    const {
        isOpenModal: isOpenAuthModal,
        _handleHideModal: _handleHideAuthModal,
        _handleShowModal: _handleShowAuthModal
    } = useModal();

    const {
        isOpenModal: isOpenCategoriesModal,
        _handleHideModal: _handleHideCategoriesModal,
        _handleShowModal: _handleShowCategoriesModal
    } = useModal();

    return (
        <>
            <ul className="grid grid-cols-12 gap-2 w-full">

                <li className="col-span-3 flex justify-center items-center">
                    <Link
                        href={`/account/dashboard`}
                        className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                    >
                        <span className="text-gray">
                            <LuPieChart size={20}/>
                        </span>
                        داشبورد
                    </Link>
                </li>

                <li className="col-span-3 flex justify-center items-center">
                    <Link
                        href={`/account/advertises`}
                        className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                    >
                        <span className="text-gray">
                            <LuScrollText size={20}/>
                        </span>
                        آگهی ها
                    </Link>
                </li>

                <li className="col-span-3 flex justify-center items-center">
                    <Link
                        href={`/account/chats`}
                        className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                    >
                        <span className="text-gray">
                            <LuMessageCircle size={20}/>
                        </span>
                        چت ها
                    </Link>
                </li>

                <li className="col-span-3 flex justify-center items-center">
                    <Link
                        href={`/account/favorites`}
                        className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                    >
                        <span className="text-gray">
                            <LuBookmark size={20}/>
                        </span>
                        علاقه مندی ها
                    </Link>
                </li>

            </ul>

            <AuthModal
                isOpenModal={isOpenAuthModal}
                onCloseModal={_handleHideAuthModal}
            />

            <CategoriesModal
                isOpenModal={isOpenCategoriesModal}
                onCloseModal={_handleHideCategoriesModal}
            />

        </>
    )
}

const BottomNavigation = () => {

    return (
        <nav
            className="fixed bottom-0 left-0 z-20 flex md:hidden justify-center items-center gap-x-2 w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-center items-center gap-x-2 w-full max-w-[1200px] h-full p-4'>

                <Navbar/>

            </div>

        </nav>
    )
}

export default BottomNavigation;