'use client';

// libraries
import Link from "next/link";
import {LuHome, LuLayers, LuPlus, LuUser} from "react-icons/lu";

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
                        href={`/`}
                        className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                    >
                        <span className="text-gray">
                            <LuHome size={20}/>
                        </span>
                        خانه
                    </Link>
                </li>

                <li className="col-span-3 flex justify-center items-center">
                    <button
                        className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                        onClick={_handleShowAuthModal}
                    >
                        <span className="text-gray">
                            <LuPlus size={20}/>
                        </span>
                        افزودن آگهی
                    </button>
                    {/*<Link*/}
                    {/*    href={`/account/add-advertise`}*/}
                    {/*    className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"*/}
                    {/*>*/}
                    {/*    <LuPlus size={20}/>*/}
                    {/*    افزودن آگهی*/}
                    {/*</Link>*/}
                </li>

                <li className="col-span-3 flex justify-center items-center">
                    <button
                        className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                        onClick={_handleShowCategoriesModal}
                    >
                        <span className="text-gray">
                            <LuLayers size={20}/>
                        </span>
                        دسته بندی ها
                    </button>
                </li>

                <li className="col-span-3 flex justify-center items-center">
                    <button
                        className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                        onClick={_handleShowAuthModal}
                    >
                        <span className="text-gray">
                            <LuUser size={20}/>
                        </span>
                        پروفایل
                    </button>
                    {/*<Link*/}
                    {/*    href={`/account/profile`}*/}
                    {/*    className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"*/}
                    {/*>*/}
                    {/*    <LuUser size={20}/>*/}
                    {/*    پروفایل*/}
                    {/*</Link>*/}
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