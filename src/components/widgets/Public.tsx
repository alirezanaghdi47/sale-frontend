'use client';

// libraries
import Image from "next/image";
import Link from "next/link";
import {LuBookmark, LuHome, LuPlus, LuScrollText, LuUser, LuSearch, LuCopyright, LuMapPin} from "react-icons/lu";
import {BsInstagram, BsTelegram, BsTwitter, BsWhatsapp} from "react-icons/bs";

// components
import TextInput from "@/components/modules/TextInput";
import Button from "@/components/modules/Button";
import {useModal} from "@/hooks/useModal";
import CitiesModal from "@/components/partials/CitiesModal";

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

const AppbarActions = () => {

    const {
        isOpenModal: isOpenCitiesModal,
        _handleShowModal: _handleShowCitiesModal,
        _handleHideModal: _handleHideCitiesModal
    } = useModal();

    return (
        <>

            <div className="flex justify-center items-center gap-x-4 w-full">

                <TextInput
                    name="search"
                    placeholder="جستجو"
                    color="secondary"
                    startIcon={<LuSearch size={20}/>}
                />

                <Button
                    color="gray"
                    variant="text"
                    startIcon={<LuMapPin size={20}/>}
                    onClick={_handleShowCitiesModal}
                >
                    تهران
                </Button>

            </div>

            <CitiesModal
                isOpenModal={isOpenCitiesModal}
                onCloseModal={_handleHideCitiesModal}
            />

        </>
    )
}

export const Appbar = () => {

    return (
        <header
            className="fixed top-0 left-0 z-20 flex md:hidden justify-center items-center w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-between items-center gap-x-4 w-full max-w-[1200px] h-full p-4'>

                <AppbarActions/>

            </div>

        </header>
    )
}

const BottomLinks = () => {

    return (
        <ul className="grid grid-cols-12 gap-2 w-full">

            <li className="col-span-3 flex justify-center items-center">
                <Link
                    href="/"
                    className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-gray">
                        <LuHome size={20}/>
                    </span>
                    خانه
                </Link>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <Link
                    href="/src/components/widgets/Advertises"
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
                    href="/account/my-advertises/add"
                    className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                   <span className="text-gray">
                        <LuPlus size={20}/>
                    </span>
                    افزودن آگهی
                </Link>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <Link
                    href="/account/profile"
                    className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-gray">
                        <LuUser size={20}/>
                    </span>
                    پروفایل
                </Link>
            </li>

        </ul>
    )
}

export const BottomNavigation = () => {

    return (
        <nav
            className="fixed bottom-0 left-0 z-20 flex md:hidden justify-center items-center gap-x-2 w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-center items-center gap-x-2 w-full max-w-[1200px] h-full p-4'>

                <BottomLinks/>

            </div>

        </nav>
    )
}

const HeaderActions = () => {

    const {
        isOpenModal: isOpenCitiesModal,
        _handleShowModal: _handleShowCitiesModal,
        _handleHideModal: _handleHideCitiesModal
    } = useModal();

    return (
        <>

            <div className="flex justify-center items-center gap-x-4 w-full">

                <Button
                    color="gray"
                    variant="text"
                    startIcon={<LuMapPin size={20}/>}
                    onClick={_handleShowCitiesModal}
                >
                    تهران
                </Button>

                <TextInput
                    name="search"
                    placeholder="جستجو"
                    color="secondary"
                    startIcon={<LuSearch size={20}/>}
                />

            </div>

            <CitiesModal
                isOpenModal={isOpenCitiesModal}
                onCloseModal={_handleHideCitiesModal}
            />

        </>
    )
}

const HeaderLinks = () => {

    return (
        <ul className="flex justify-start items-center gap-x-4">

            <li className="flex justify-center items-center">
                <button
                    className="flex justify-center items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap px-4 py-2"
                >
                        <span className="text-gray">
                            <LuUser size={20}/>
                        </span>
                    پروفایل
                </button>
            </li>

            <li className="flex justify-center items-center">
                <Link
                    href="/account/my-advertises/add"
                    className="flex justify-center items-center gap-x-2 bg-blue text-light text-sm font-bold whitespace-nowrap rounded-lg px-4 py-2"
                >
                         <span className="text-light">
                            <LuPlus size={20}/>
                        </span>
                    افزودن آگهی
                </Link>
            </li>

        </ul>
    )
}

export const Header = () => {

    return (
        <header
            className="fixed top-0 left-0 z-20 hidden md:flex justify-center items-center w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-start items-center gap-x-4 w-full max-w-[1200px] h-full p-4'>

                <Logo/>

                <HeaderActions/>

                <HeaderLinks/>

            </div>

        </header>
    )
}

const FooterLinks = () => {

    return (
        <ul className="order-1 flex justify-start items-center gap-x-2">

            <li className="px-4 py-2">
                <Link href="/about-us" className='text-gray font-bold text-sm'>
                    درباره ما
                </Link>
            </li>

            <li className="px-4 py-2">
                <Link href="/support" className='text-gray font-bold text-sm'>
                    پشتیبانی
                </Link>
            </li>

        </ul>
    )
}

const CopyRight = () => {

    return (
        <div className="order-3 md:order-2 flex justify-center items-center">
            <p className="flex justify-center items-center gap-x-2 text-sm text-gray p-2">
                <span className="text-gray">
                    <LuCopyright size={16}/>
                </span>
                1402-1403
            </p>
        </div>
    )
}

const SocialMedias = () => {

    return (
        <ul className="order-2 md:order-3 flex justify-center items-end gap-x-2">

            <li className="p-2">
                <Link href="/" className='text-gray'>
                    <BsTelegram size={20}/>
                </Link>
            </li>

            <li className="p-2">
                <Link href="/" className='text-gray'>
                    <BsWhatsapp size={20}/>
                </Link>
            </li>

            <li className="p-2">
                <Link href="/" className='text-gray'>
                    <BsInstagram size={20}/>
                </Link>
            </li>

            <li className="p-2">
                <Link href="/" className='text-gray'>
                    <BsTwitter size={20}/>
                </Link>
            </li>

        </ul>
    )
}

export const Footer = () => {

    return (
        <footer className="flex justify-center items-center gap-x-2 w-full mt-auto">

            <div className='flex flex-col md:flex-row justify-between items-center gap-2 w-full max-w-[1200px] p-4'>

                <FooterLinks/>

                <CopyRight/>

                <SocialMedias/>

            </div>

        </footer>
    )
}