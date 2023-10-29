'use client';

// libraries
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {LuBookmark, LuHome, LuLogOut, LuPieChart, LuScrollText, LuUser} from "react-icons/lu";

// components
import Button from "@/components/modules/Button";
import {Menu , MenuItem} from "@/components/modules/Menu";

// utils
import {getTitleFromPathname} from "@/utils/functions";

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

const AppbarActions = () => {

    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center gap-x-4 w-full">

            <h1 className='font-bold text-dark'>
                {getTitleFromPathname(pathname)}
            </h1>

            <Menu
                menuButton={
                    <Button
                        variant="text"
                        size="md"
                        color="gray"
                    >
                        <Image
                            src="/assets/images/avatar.jpg"
                            alt="logo"
                            width={24}
                            height={24}
                            className="rounded-full object-cover object-center"
                        />
                        علیرضا نقدی
                    </Button>
                }
                arrow
                align="start"
                direction="bottom"
            >

                <MenuItem>
                    <Button
                        variant="text"
                        size="md"
                        color="gray"
                        href="/account/profile"
                        startIcon={<LuUser size={20}/>}
                    >
                        پروفایل
                    </Button>
                </MenuItem>

                <MenuItem>
                    <Button
                        variant="text"
                        size="md"
                        color="red"
                        startIcon={<LuLogOut size={20}/>}
                    >
                        خروج
                    </Button>
                </MenuItem>

            </Menu>

        </div>
    )
}

const BottomLinks = () => {

    const pathname = usePathname();

    return (
        <ul className="grid grid-cols-12 gap-2 w-full">

            <li className="col-span-3 flex justify-center items-center">
                <Link
                    href="/"
                    className={`flex flex-col justify-center items-center gap-y-2 ${pathname === "/" ? "text-blue" : "text-gray"} text-sm font-bold whitespace-nowrap p-2`}
                >
                    <LuHome
                        size={20}
                        className="text-current"
                    />
                    خانه
                </Link>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <Link
                    href="/account/dashboard"
                    className={`flex flex-col justify-center items-center gap-y-2 ${pathname === "/account/dashboard" ? "text-blue" : "text-gray"} text-sm font-bold whitespace-nowrap p-2`}
                >
                    <LuPieChart
                        size={20}
                        className="text-current"
                    />
                    داشبورد
                </Link>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <Link
                    href="/account/my-advertises"
                    className={`flex flex-col justify-center items-center gap-y-2 ${pathname === "/account/my-advertises" ? "text-blue" : "text-gray"} text-sm font-bold whitespace-nowrap p-2`}
                >
                    <LuScrollText
                        size={20}
                        className="text-current"
                    />
                    آگهی های من
                </Link>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <Link
                    href="/account/favorites"
                    className={`flex flex-col justify-center items-center gap-y-2 ${pathname === "/account/favorites" ? "text-blue" : "text-gray"} text-sm font-bold whitespace-nowrap p-2`}
                >
                    <LuBookmark
                        size={20}
                        className="text-current"
                    />
                    علاقه مندی ها
                </Link>
            </li>

        </ul>
    )
}

const SidebarLinks = () => {

    const pathname = usePathname();

    return (
        <ul className="flex flex-col justify-start items-start gap-y-2 w-full">

            <li className="flex justify-start items-center w-full">
                <Link
                    href="/account/dashboard"
                    className={`flex justify-start items-center gap-x-2 ${pathname === "/account/dashboard" ? "text-blue" : "text-gray"} text-sm font-bold whitespace-nowrap p-2`}
                >
                    <LuPieChart
                        size={20}
                        className="text-current"
                    />
                    داشبورد
                </Link>
            </li>

            <li className="flex justify-start items-center w-full">
                <Link
                    href="/account/my-advertises"
                    className={`flex justify-start items-center gap-x-2 ${pathname === "/account/my-advertises" ? "text-blue" : "text-gray"} text-sm font-bold whitespace-nowrap p-2`}
                >
                    <LuScrollText
                        size={20}
                        className="text-current"
                    />
                    آگهی های من
                </Link>
            </li>

            <li className="flex justify-start items-center w-full">
                <Link
                    href="/account/favorites"
                    className={`flex justify-start items-center gap-x-2 ${pathname === "/account/favorites" ? "text-blue" : "text-gray"} text-sm font-bold whitespace-nowrap p-2`}
                >
                    <LuBookmark
                        size={20}
                        className="text-current"
                    />
                    علاقه مندی ها
                </Link>
            </li>

        </ul>
    )
}

const SidebarActions = () => {

    const pathname = usePathname();

    return (
        <ul className="flex flex-col justify-start items-start gap-y-2 w-full">

            <li className="flex justify-start items-center w-full">
                <Link
                    href="/account/profile"
                    className={`flex justify-start items-center gap-x-2 ${pathname === "/account/profile" ? "text-blue" : "text-gray"} text-sm font-bold whitespace-nowrap p-2`}
                >
                    <Image
                        src="/assets/images/avatar.jpg"
                        alt="logo"
                        width={20}
                        height={20}
                        className="rounded-full object-cover object-center"
                    />
                    علیرضا نقدی
                </Link>
            </li>

            <li className="flex justify-start items-center w-full">
                <button
                    className="flex justify-start items-center gap-x-2 text-red text-sm font-bold whitespace-nowrap p-2"
                >
                    <LuLogOut
                        size={20}
                        className="text-current"
                    />
                    خروج
                </button>
            </li>

        </ul>
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

export const Sidebar = () => {

    return (
        <aside
            className="sticky top-0 right-0 z-20 hidden md:flex flex-col justify-between items-start min-w-[240px] h-full min-h-screen bg-light shadow-3xl p-4">

            <Logo/>

            <SidebarLinks/>

            <SidebarActions/>

        </aside>
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