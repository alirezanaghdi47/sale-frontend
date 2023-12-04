'use client';

// libraries
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSession , signOut} from "next-auth/react";
import {LuBookmark, LuList, LuLogOut, LuPlus, LuScrollText, LuUser} from "react-icons/lu";

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
    const {data: session } = useSession();

    return (
        <div className="flex justify-between items-center gap-x-4 w-full">

            <Logo/>

            <Menu
                menuButton={
                    <Button
                        variant="text"
                        size="md"
                        color="gray"
                        startIcon={
                            session?.user?.avatar ? (
                                <Image
                                    src={session?.user?.avatar}
                                    alt="avatar"
                                    width={24}
                                    height={24}
                                    className="rounded-full object-cover object-center"
                                />
                            ) : (
                                <LuUser
                                    size={20}
                                    className="text-current"
                                />
                            )
                        }
                    >
                        {session?.user?.name && session?.user?.family ? `${session?.user?.name} ${session?.user?.family}` : "کاربر سایت"}
                    </Button>
                }
                align="start"
                direction="bottom"
            >

                <MenuItem
                    variant="text"
                    color={pathname === "/account/profile" ? "blue" : "gray"}
                    href="/account/profile"
                    icon={
                        <LuUser
                            size={20}
                            className="text-current"
                        />
                    }
                >
                    پروفایل
                </MenuItem>

                <MenuItem
                    variant="text"
                    color="red"
                    icon={
                        <LuLogOut
                            size={20}
                            className="text-current"
                        />
                    }
                    onClick={() => signOut({callbackUrl: "/advertises"})}
                >
                    خروج
                </MenuItem>

            </Menu>

        </div>
    )
}

const SidebarLinks = () => {

    const pathname = usePathname();
    const {data: session } = useSession();

    return (
        <ul className="flex flex-col justify-start items-start gap-y-2 w-full">

            <li className="flex justify-start items-center w-full">

                <Collapse>

                    <CollapseItem
                        button={{
                            children: "آگهی ها",
                            variant: "text",
                            color: "gray",
                            size: "full",
                            justify: "start",
                            startIcon: <LuScrollText size={20} className="text-current"/>
                        }}
                    >

                        <LinkButton
                            variant="text"
                            color={pathname === "/account/my-advertises" ? "blue" : "gray"}
                            size="full"
                            justify="start"
                            href="/account/my-advertises"
                            startIcon={
                                <LuList
                                    size={20}
                                    className="text-current"
                                />
                            }
                        >
                            آگهی های من
                        </LinkButton>

                        {
                            (!session?.user?.name || !session?.user?.family || !session?.user?.phoneNumber) ? (
                                <Button
                                    variant="text"
                                    color={pathname === "/account/my-advertises/add" ? "blue" : "gray"}
                                    size="full"
                                    justify="start"
                                    startIcon={
                                        <LuPlus
                                            size={20}
                                            className="text-current"
                                        />
                                    }
                                    onClick={async () => {
                                        const {notification} = await import("@/components/modules/Notification");
                                        notification("ابتدا حساب کاربری خود را تکمیل کنید", "error");
                                    }}
                                >
                                    آگهی جدید
                                </Button>
                            ) : (
                                <LinkButton
                                    variant="text"
                                    color={pathname === "/account/my-advertises/add" ? "blue" : "gray"}
                                    size="full"
                                    justify="start"
                                    href="/account/my-advertises/add"
                                    startIcon={
                                        <LuPlus
                                            size={20}
                                            className="text-current"
                                        />
                                    }
                                >
                                    آگهی جدید
                                </LinkButton>
                            )
                        }

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
                    startIcon={
                        <LuBookmark
                            size={20}
                            className="text-current"
                        />
                    }
                >
                    علاقه مندی ها
                </LinkButton>
            </li>

        </ul>
    )
}

const SidebarActions = () => {

    const pathname = usePathname();
    const {data: session } = useSession();

    return (
        <ul className="flex flex-col justify-start items-start gap-y-2 w-full">

            <li className="flex justify-start items-center w-full">
                <LinkButton
                    variant="text"
                    color={pathname === "/account/profile" ? "blue" : "gray"}
                    size="full"
                    justify="start"
                    href="/account/profile"
                    startIcon={
                        session?.user?.avatar ? (
                            <Image
                                src={session?.user?.avatar}
                                alt="avatar"
                                width={24}
                                height={24}
                                className="rounded-full object-cover object-center"
                            />
                        ) : (
                            <LuUser
                                size={20}
                                className="text-current"
                            />
                        )
                    }
                >
                    {session?.user?.name && session?.user?.family ? `${session?.user?.name} ${session?.user?.family}` : "کاربر سایت"}
                </LinkButton>
            </li>

            <li className="flex justify-start items-center w-full">
                <Button
                    variant="text"
                    color="red"
                    size="full"
                    justify="start"
                    startIcon={
                        <LuLogOut
                            size={20}
                            className="text-current"
                        />
                    }
                    onClick={() => signOut({callbackUrl: "/advertises"})}
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

const BottomLinks = () => {

    const pathname = usePathname();
    const {data: session } = useSession();

    return (
        <ul className="grid grid-cols-12 gap-2 w-full">

            <li className="col-span-3 flex justify-center items-center">
                <LinkButton
                    variant="text"
                    color={pathname === "/advertises" ? "blue" : "gray"}
                    href="/advertises"
                    vertical
                    startIcon={
                        <LuScrollText
                            size={20}
                            className="text-current"
                        />
                    }
                >
                    آگهی ها
                </LinkButton>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <LinkButton
                    variant="text"
                    color={pathname === "/account/my-advertises" ? "blue" : "gray"}
                    href="/account/my-advertises"
                    vertical
                    startIcon={
                        <LuList
                            size={20}
                            className="text-current"
                        />
                    }
                >
                    آگهی های من
                </LinkButton>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                {
                    (!session?.user?.name || !session?.user?.family || !session?.user?.phoneNumber) ? (
                        <Button
                            variant="text"
                            color={pathname === "/account/my-advertises/add" ? "blue" : "gray"}
                            vertical
                            startIcon={
                                <LuPlus
                                    size={20}
                                    className="text-current"
                                />
                            }
                            onClick={async () => {
                                const {notification} = await import("@/components/modules/Notification");
                                notification("ابتدا حساب کاربری خود را تکمیل کنید", "error");
                            }}
                        >
                            آگهی جدید
                        </Button>
                    ) : (
                        <LinkButton
                            variant="text"
                            color={pathname === "/account/my-advertises/add" ? "blue" : "gray"}
                            href="/account/my-advertises/add"
                            vertical
                            startIcon={
                                <LuPlus
                                    size={20}
                                    className="text-current"
                                />
                            }
                        >
                            آگهی جدید
                        </LinkButton>
                    )
                }
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <LinkButton
                    variant="text"
                    color={pathname === "/account/favorites" ? "blue" : "gray"}
                    href="/account/favorites"
                    vertical
                    startIcon={
                        <LuBookmark
                            size={20}
                            className="text-current"
                        />
                    }
                >
                    علاقه مندی ها
                </LinkButton>
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