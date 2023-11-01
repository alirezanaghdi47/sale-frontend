'use client';

// libraries
import Image from "next/image";
import {usePathname} from "next/navigation";
import {LuBookmark, LuHome, LuLogOut, LuPieChart, LuScrollText, LuUser} from "react-icons/lu";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import {Menu, MenuItem} from "@/components/modules/Menu";

// utils
import {getTitleFromPathname} from "@/utils/functions";

const Logo = () => {

    return (
        <LinkButton
            variant="text"
            color='dark'
            size="lg"
            href="/"
        >
            فروشگاه
        </LinkButton>
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

                <MenuItem
                    variant="text"
                    color="gray"
                    href="/account/profile"
                    active={pathname === "/account/profile"}
                    icon={<LuUser size={20}/>}
                >
                    پروفایل
                </MenuItem>

                <MenuItem
                    variant="text"
                    color="red"
                    startIcon={<LuLogOut size={20}/>}
                >
                    خروج
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
                <LinkButton
                    variant="text"
                    color="gray"
                    href="/"
                    active={pathname === "/"}
                    vertical
                    startIcon={<LuHome size={20}/>}
                >
                    خانه
                </LinkButton>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <LinkButton
                    variant="text"
                    color="gray"
                    href="/account/dashboard"
                    active={pathname === "/account/dashboard"}
                    vertical
                    startIcon={<LuPieChart size={20}/>}
                >
                    داشبورد
                </LinkButton>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <LinkButton
                    variant="text"
                    color="gray"
                    href="/account/my-advertises"
                    active={pathname === "/account/my-advertises"}
                    vertical
                    startIcon={<LuScrollText size={20}/>}
                >
                    آگهی های من
                </LinkButton>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <LinkButton
                    variant="text"
                    color="gray"
                    href="/account/favorites"
                    active={pathname === "/account/favorites"}
                    vertical
                    startIcon={<LuBookmark size={20}/>}
                >
                    علاقه مندی ها
                </LinkButton>
            </li>

        </ul>
    )
}

const SidebarLinks = () => {

    const pathname = usePathname();

    return (
        <ul className="flex flex-col justify-start items-start gap-y-2 w-full">

            <li className="flex justify-start items-center w-full">
                <LinkButton
                    variant="text"
                    color="gray"
                    href="/account/dashboard"
                    active={pathname === "/account/dashboard"}
                    startIcon={<LuPieChart size={20}/>}
                >
                    داشبورد
                </LinkButton>
            </li>

            <li className="flex justify-start items-center w-full">
                <LinkButton
                    variant="text"
                    color="gray"
                    href="/account/my-advertises"
                    active={pathname === "/account/my-advertises"}
                    startIcon={<LuScrollText size={20}/>}
                >
                    آگهی های من
                </LinkButton>
            </li>

            <li className="flex justify-start items-center w-full">
                <LinkButton
                    variant="text"
                    color="gray"
                    href="/account/favorites"
                    active={pathname === "/account/favorites"}
                    startIcon={<LuBookmark size={20}/>}
                >
                    علاقه مندی ها
                </LinkButton>
            </li>

        </ul>
    )
}

const SidebarActions = () => {

    const pathname = usePathname();

    return (
        <ul className="flex flex-col justify-start items-start gap-y-2 w-full">

            <li className="flex justify-start items-center w-full">
                <LinkButton
                    variant="text"
                    color="gray"
                    href="/account/profile"
                    active={pathname === "/account/profile"}
                >
                    <Image
                        src="/assets/images/avatar.jpg"
                        alt="logo"
                        width={20}
                        height={20}
                        className="rounded-full object-cover object-center"
                    />
                    علیرضا نقدی
                </LinkButton>
            </li>

            <li className="flex justify-start items-center w-full">
                <Button
                    variant="text"
                    color="red"
                    startIcon={<LuLogOut size={20}/>}
                >
                    خروج
                </Button>
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