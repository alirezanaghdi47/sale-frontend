'use client';

// libraries
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {LuBookmark, LuEye, LuLogOut, LuPieChart, LuPlus, LuScrollText, LuUser} from "react-icons/lu";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import {Collapse, CollapseItem} from "@/components/modules/Collapse";
const Menu = dynamic(() => import("@/components/modules/Menu").then(module => ({default: module.Menu})), {ssr: false});
const MenuItem = dynamic(() => import("@/components/modules/Menu").then(module => ({default: module.MenuItem})), {ssr: false});

const Logo = () => {

    return (
        <Link href="/">
            <Image
                src="/assets/images/logo.png"
                alt='logo'
                width={32}
                height={32}
                className="min-w-[32px] min-h-[32px] rounded-full"
            />
        </Link>
    )
}

const AppbarActions = () => {

    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center gap-x-4 w-full">

            <Logo/>

            <Menu
                menuButton={
                    <Button
                        variant="text"
                        size="md"
                        color="gray"
                    >
                        <Image
                            src="/assets/images/avatar.jpg"
                            alt="avatar"
                            width={24}
                            height={24}
                            className="rounded-full object-cover object-center"
                        />
                        علیرضا نقدی
                    </Button>
                }
                align="start"
                direction="bottom"
            >

                <MenuItem
                    variant="text"
                    color={pathname === "/account/profile" ? "blue" : "gray"}
                    href="/account/profile"
                    icon={<LuUser size={20}/>}
                >
                    پروفایل
                </MenuItem>

                <MenuItem
                    variant="text"
                    color="red"
                    icon={<LuLogOut size={20}/>}
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
                    color={pathname === "/account/dashboard" ? "blue" : "gray"}
                    href="/account/dashboard"
                    vertical
                    startIcon={<LuPieChart size={20}/>}
                >
                    داشبورد
                </LinkButton>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <LinkButton
                    variant="text"
                    color={pathname === "/account/my-advertises" ? "blue" : "gray"}
                    href="/account/my-advertises"
                    vertical
                    startIcon={<LuScrollText size={20}/>}
                >
                    آگهی های من
                </LinkButton>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <LinkButton
                    variant="text"
                    color={pathname === "/account/my-advertises/add" ? "blue" : "gray"}
                    href="/account/my-advertises/add"
                    vertical
                    startIcon={<LuPlus size={20}/>}
                >
                    افزودن آگهی
                </LinkButton>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <LinkButton
                    variant="text"
                    color={pathname === "/account/favorites" ? "blue" : "gray"}
                    href="/account/favorites"
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
                    color={pathname === "/account/dashboard" ? "blue" : "gray"}
                    size="full"
                    justify="start"
                    href="/account/dashboard"
                    startIcon={<LuPieChart size={20}/>}
                >
                    داشبورد
                </LinkButton>
            </li>

            <li className="flex justify-start items-center w-full">

                <Collapse>

                    <CollapseItem
                        button={{
                            children: "آگهی ها",
                            variant: "text",
                            color: "gray",
                            size: "full",
                            justify: "start",
                            startIcon: <LuScrollText size={20}/>
                        }}
                    >

                        <LinkButton
                            variant="text"
                            color={pathname === "/account/my-advertises" ? "blue" : "gray"}
                            size="full"
                            justify="start"
                            href="/account/my-advertises"
                            startIcon={<LuEye size={20}/>}
                        >
                            مشاهده آگهی ها
                        </LinkButton>

                        <LinkButton
                            variant="text"
                            color={pathname === "/account/my-advertises/add" ? "blue" : "gray"}
                            size="full"
                            justify="start"
                            href="/account/my-advertises/add"
                            startIcon={<LuPlus size={20}/>}
                        >
                            افزودن آگهی
                        </LinkButton>

                    </CollapseItem>

                </Collapse>

            </li>

            <li className="flex justify-start items-center w-full">
                <LinkButton
                    variant="text"
                    color={pathname === "/account/favorites" ? "blue" : "gray"}
                    size="full"
                    justify="start"
                    href="/account/favorites"
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
                    color={pathname === "/account/profile" ? "blue" : "gray"}
                    size="full"
                    justify="start"
                    href="/account/profile"
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
                    size="full"
                    justify="start"
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