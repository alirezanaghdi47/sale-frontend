'use client';

// libraries
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useSession, signOut} from "next-auth/react";
import {LuBookmark, LuLogOut, LuMenu, LuPlus, LuScrollText, LuUser} from "react-icons/lu";

// modules
import {LinkButton} from "@/modules/Button";
import {IconButton} from "@/modules/IconButton";
import {Menu , MenuItem} from "@/modules/Menu";

const Logo = () => {

    return (
        <div className='flex justify-center md:justify-start items-center'>

            <Link href="/">
                <Image
                    src="/assets/images/logo.png"
                    alt='logo'
                    width={32}
                    height={32}
                    className="min-w-[32px] min-h-[32px] rounded-full"
                />
            </Link>

        </div>
    )
}

const Links = () => {

    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="flex md:hidden justify-start items-center">

            <Menu
                menuButton={
                    <IconButton
                        variant="text"
                        color="gray"
                    >
                        <LuMenu
                            size={16}
                            className="text-current"
                        />
                    </IconButton>
                }
                align="end"
                direction="bottom"
            >

                <MenuItem
                    variant="text"
                    color={pathname === "/account/my-advertises" ? "blue" : "gray"}
                    icon={
                        <LuScrollText
                            size={16}
                            className="text-current"
                        />
                    }
                    onClick={() => router.push("/account/my-advertises")}
                >
                    آگهی های من
                </MenuItem>

                <MenuItem
                    variant="text"
                    color={pathname === "/account/my-advertises/add" ? "blue" : "gray"}
                    icon={
                        <LuPlus
                            size={16}
                            className="text-current"
                        />
                    }
                    onClick={() => router.push("/account/my-advertises/add")}
                >
                    افزودن آگهی
                </MenuItem>

                <MenuItem
                    variant="text"
                    color={pathname === "/account/favorites" ? "blue" : "gray"}
                    icon={
                        <LuBookmark
                            size={16}
                            className="text-current"
                        />
                    }
                    onClick={() => router.push("/account/favorites")}
                >
                    علاقه مندی ها
                </MenuItem>

            </Menu>

        </div>
    )
}

const Actions = () => {

    const pathname = usePathname();
    const router = useRouter();
    const {data: session} = useSession();

    return (
        <div className="flex justify-end items-center">

            <Menu
                menuButton={
                    <IconButton
                        variant="text"
                        color="gray"
                    >
                        {
                            session?.user?.avatar ? (
                                <Image
                                    src={session?.user?.avatar}
                                    alt="avatar"
                                    width={24}
                                    height={24}
                                    className="w-[24px] h-[24px] rounded-full object-cover object-center"
                                />
                            ) : (
                                <LuUser
                                    size={16}
                                    className="text-current"
                                />
                            )
                        }
                    </IconButton>
                }
                align="start"
                direction="bottom"
            >

                <MenuItem
                    variant="text"
                    color={pathname === "/account/profile" ? "blue" : "gray"}
                    icon={
                        <LuUser
                            size={16}
                            className="text-current"
                        />
                    }
                    onClick={() => router.push("/account/profile")}
                >
                    حساب کاربری
                </MenuItem>

                <MenuItem
                    variant="text"
                    color="red"
                    icon={
                        <LuLogOut
                            size={16}
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

const Navbar = () => {

    const pathname = usePathname();

    return (
        <div className="hidden md:flex justify-center items-center">

            <ul className="flex justify-center items-center gap-x-2">

                <li>
                    <LinkButton
                        variant="text"
                        color={pathname === "/account/my-advertises" ? "blue" : "gray"}
                        href="/account/my-advertises"
                    >
                        آگهی های من
                    </LinkButton>
                </li>

                <li>
                    <LinkButton
                        variant="text"
                        color={pathname === "/account/my-advertises/add" ? "blue" : "gray"}
                        href="/account/my-advertises/add"
                    >
                        آگهی جدید
                    </LinkButton>
                </li>

                <li>
                    <LinkButton
                        variant="text"
                        color={pathname === "/account/favorites" ? "blue" : "gray"}
                        href="/account/favorites"
                    >
                        علاقه مندی ها
                    </LinkButton>
                </li>

            </ul>

        </div>
    )
}

const Header = () => {

    return (
        <header
            className="fixed top-0 left-0 z-20 flex justify-center items-center w-full h-[70px] bg-light shadow-3xl">
            <div className='flex justify-between items-center gap-x-4 w-full max-w-[992px] h-full p-4'>
                <Links/>
                <Logo/>
                <Navbar/>
                <Actions/>
            </div>
        </header>
    )
}

export default Header