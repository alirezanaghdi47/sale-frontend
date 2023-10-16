'use client';

// libraries
import Image from "next/image";
import Link from "next/link";
import {LuUser , LuSearch , LuPlus , LuMapPin , LuLayers} from "react-icons/lu";

// components
import CitiesModal from "@/components/partials/public/CitiesModal";
import CategoriesModal from "@/components/partials/public/CategoriesModal";
import AuthModal from "@/components/partials/public/AuthModal";

// hooks
import {useModal} from "@/hooks/useModal";

const Logo = () => {

    return (
        <Link href="/">
            <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={80}
                height={20}
                className="min-w-[80px]"
            />
        </Link>
    )
}

const Actions = () => {

    const {
        isOpenModal: isOpenCitiesModal,
        _handleHideModal: _handleHideCitiesModal,
        _handleShowModal: _handleShowCitiesModal
    } = useModal();

    const {
        isOpenModal: isOpenCategoriesModal,
        _handleHideModal: _handleHideCategoriesModal,
        _handleShowModal: _handleShowCategoriesModal
    } = useModal();

    return (
        <>
            <div className="flex justify-start items-center gap-x-4">

                <button
                    className={`flex justify-center items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap rounded-lg px-4 py-2`}
                    onClick={_handleShowCitiesModal}
                >
                    <span className="text-gray">
                        <LuMapPin size={20}/>
                    </span>
                    تهران
                </button>

                <button
                    className={`flex justify-center items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap rounded-lg px-4 py-2`}
                    onClick={_handleShowCategoriesModal}
                >
                    <span className="text-gray">
                        <LuLayers size={20}/>
                    </span>
                    دسته بندی
                </button>

                <label
                    htmlFor="search-input"
                    className="flex justify-center items-center gap-x-2 w-full bg-secondary rounded-lg px-4 py-2"
                >
                   <span className="text-gray">
                        <LuSearch size={20}/>
                    </span>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="جستجو ..."
                        className="w-full bg-transparent text-gray font-bold focus:outline-none"
                    />
                </label>

            </div>

            <CitiesModal
                isOpenModal={isOpenCitiesModal}
                onCloseModal={_handleHideCitiesModal}
            />

            <CategoriesModal
                isOpenModal={isOpenCategoriesModal}
                onCloseModal={_handleHideCategoriesModal}
            />

        </>
    )
}

const Navbar = () => {

    const {
        isOpenModal: isOpenAuthModal,
        _handleHideModal: _handleHideAuthModal,
        _handleShowModal: _handleShowAuthModal
    } = useModal();

    return (
        <>
            <ul className="flex justify-start items-center gap-x-4 mr-auto">

                <li className="flex justify-center items-center">
                    <button
                        className="flex justify-center items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap px-4 py-2"
                        onClick={_handleShowAuthModal}
                    >
                        <span className="text-gray">
                            <LuUser size={20}/>
                        </span>
                        علیرضا نقدی
                    </button>
                    {/*<Link*/}
                    {/*    href={`/account/profile`}*/}
                    {/*    className="flex justify-center items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap px-4 py-2"*/}
                    {/*>*/}
                    {/*    <LuUser size={20}/>*/}
                    {/*    پروفایل*/}
                    {/*</Link>*/}
                </li>

                <li className="flex justify-center items-center">
                    <button
                        className="flex justify-center items-center gap-x-2 bg-blue text-light text-sm font-bold whitespace-nowrap rounded-lg px-4 py-2"
                        onClick={_handleShowAuthModal}
                    >
                        <span className="text-light">
                            <LuPlus size={20}/>
                        </span>
                        افزودن آگهی
                    </button>
                    {/*<Link*/}
                    {/*    href={`/account/add-advertise`}*/}
                    {/*    className="flex justify-center items-center gap-x-2 bg-blue text-light text-sm font-bold whitespace-nowrap rounded-lg px-4 py-2"*/}
                    {/*>*/}
                    {/*    <LuPlus size={20}/>*/}
                    {/*    افزودن آگهی*/}
                    {/*</Link>*/}
                </li>

            </ul>

            <AuthModal
                isOpenModal={isOpenAuthModal}
                onCloseModal={_handleHideAuthModal}
            />

        </>
    )
}

const Header = () => {

    return (
        <header
            className="fixed top-0 left-0 z-20 hidden md:flex justify-center items-center w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-start items-center gap-x-4 w-full max-w-[1200px] h-full p-4'>

               <Logo/>

                <Actions/>

                <Navbar/>

            </div>

        </header>
    )
}

export default Header;