'use client';

// libraries
import Link from "next/link";
import Image from "next/image";
import {LuBookmark, LuLogOut, LuMessageCircle, LuPieChart, LuScrollText, LuUser} from "react-icons/lu";

const Logo = () => {

    return (
        <Link
            href="/"
            className="flex justify-start items-center w-max"
        >
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

const Navbar = () => {

    return (
        <ul className="flex flex-col justify-start items-start gap-y-2 w-full">

            <li className="flex justify-start items-center w-full">
                <Link
                    href={`/account/dashboard`}
                    className="flex justify-start items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-gray">
                        <LuPieChart size={20}/>
                    </span>
                    داشبورد
                </Link>
            </li>

            <li className="flex justify-start items-center w-full">
                <Link
                    href={`/account/advertises`}
                    className="flex justify-start items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-gray">
                        <LuScrollText size={20}/>
                    </span>
                    آگهی ها
                </Link>
            </li>

            <li className="flex justify-start items-center w-full">
                <Link
                    href={`/account/chats`}
                    className="flex justify-start items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-gray">
                        <LuMessageCircle size={20}/>
                    </span>
                    چت ها
                </Link>
            </li>

            <li className="flex justify-start items-center w-full">
                <Link
                    href={`/account/favorites`}
                    className="flex justify-start items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-gray">
                        <LuBookmark size={20}/>
                    </span>
                    علاقه مندی ها
                </Link>
            </li>

        </ul>
    )
}

const Actions = () => {

    return (
        <ul className="flex flex-col justify-start items-start gap-y-2 w-full">

            <li className="flex justify-start items-center w-full">
                <Link
                    href={`/account/profile`}
                    className="flex justify-start items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-gray">
                        <LuUser size={20}/>
                    </span>
                    علیرضا نقدی
                </Link>
            </li>

            <li className="flex justify-start items-center w-full">
                <button
                    className="flex justify-start items-center gap-x-2 text-red text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-red">
                        <LuLogOut size={20}/>
                    </span>
                    خروج
                </button>
            </li>

        </ul>
    )
}

const Sidebar = () => {

    return (
        <aside
            className="sticky top-0 right-0 z-20 hidden md:flex flex-col justify-between items-start w-[240px] h-full min-h-screen bg-light shadow-3xl p-4">

            <Logo/>

            <Navbar/>

            <Actions/>

        </aside>
    )
}

export default Sidebar;