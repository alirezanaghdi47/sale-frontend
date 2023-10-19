'use client';

// libraries
import Link from "next/link";
import Image from "next/image";
import {LuBookmark, LuChevronLeft, LuHome, LuLogOut, LuPieChart, LuScrollText, LuUser} from "react-icons/lu";
import Button from "@/components/modules/Button";
import {usePathname, useRouter} from "next/navigation";
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

            <Button
                variant="text"
                color="gray"
                href="/"
                endIcon={<LuChevronLeft size={20}/>}
            >
                بازگشت به خانه
            </Button>

        </div>
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
                    href="/account/dashboard"
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
                    href="/account/my-advertises"
                    className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-gray">
                        <LuScrollText size={20}/>
                    </span>
                    آگهی های من
                </Link>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <Link
                    href="/account/favorites"
                    className="flex flex-col justify-center items-center gap-y-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-gray">
                        <LuBookmark size={20}/>
                    </span>
                    علاقه مندی ها
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

const SidebarLinks = () => {

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
                    href={`/account/my-advertises`}
                    className="flex justify-start items-center gap-x-2 text-gray text-sm font-bold whitespace-nowrap p-2"
                >
                    <span className="text-gray">
                        <LuScrollText size={20}/>
                    </span>
                    آگهی های من
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

const SidebarActions = () => {

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