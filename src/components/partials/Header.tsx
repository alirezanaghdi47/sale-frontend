'use client';

// libraries
import Image from "next/image";
import Link from "next/link";
import {FiMapPin, FiSearch} from "react-icons/fi";

// assets
import logo from "@/assets/images/logo.png";

// components
import CityModal from "@/components/partials/CityModal";

// hooks
import {useModal} from "@/hooks/useModal";

// utils
import {headerLinkList} from "@/utils/constants";

const Logo = () => {

    return (
        <Link href="/">
            <Image
                src={logo}
                alt="logo"
                width={80}
            />
        </Link>
    )
}

const Actions = () => {

    const {isOpenModal, _handleHideModal, _handleShowModal} = useModal();

    return (
        <div className="flex justify-start items-center gap-x-4">

            <button
                className={`flex justify-center items-center gap-x-2 ${isOpenModal ? "bg-secondary" : ""} text-gray text-sm font-bold rounded-lg px-4 py-2`}
                onClick={_handleShowModal}
            >
                <FiMapPin size={20}/>
                تهران
            </button>

            <label
                htmlFor="search-input"
                className="flex justify-center items-center gap-x-2 w-full bg-secondary rounded-lg px-4 py-2"
            >
               <span className="text-gray">
                    <FiSearch size={20}/>
                </span>
                <input
                    id="search-input"
                    type="text"
                    placeholder="جستجو ..."
                    className="w-full bg-transparent text-gray text-sm font-bold focus:outline-none"
                />
            </label>

            <CityModal
                isOpenModal={isOpenModal}
                onCloseModal={_handleHideModal}
            />

        </div>
    )
}

const NavbarItem = ({navbarItem}) => {
    return (
        <li className="flex justify-center items-center px-4 py-2">
            <Link
                href={`/${navbarItem.href}`}
                className="flex justify-center items-center gap-x-2"
            >
                <span className="text-gray">
                    {navbarItem.icon}
                </span>
                <span className="text-gray text-sm font-bold whitespace-nowrap">
                    {navbarItem.title}
                </span>
            </Link>
        </li>
    )
}

const Navbar = () => {

    return (
        <ul className="flex justify-center items-center gap-x-4 w-full">

            {
                headerLinkList.slice(0, 2).map(headerLinkItem =>
                    <NavbarItem
                        key={headerLinkItem.id}
                        navbarItem={headerLinkItem}
                    />
                )
            }

            {
                headerLinkList.slice(2,3).map(headerLinkItem =>
                    <NavbarItem
                        key={headerLinkItem.id}
                        navbarItem={headerLinkItem}
                    />
                )
            }

        </ul>
    )
}

const Links = () => {

    return (
        <div className="flex justify-start items-center gap-x-4 mr-auto">
            <Navbar/>
        </div>
    )
}

const Header = () => {

    return (
        <header
            className="fixed top-0 left-0 z-20 hidden md:flex justify-center items-center w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-start items-center gap-x-4 w-full max-w-[1200px] h-full p-4'>

                <Logo/>

                <Actions/>

                <Links/>

            </div>

        </header>
    )
}

export default Header;