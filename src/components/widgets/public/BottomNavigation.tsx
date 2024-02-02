'use client';

// libraries
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
import {
    LuPlus,
    LuScrollText,
    LuUser,
    LuBookmark,
} from "react-icons/lu";

// modules
import {LinkButton} from "@/modules/Button";

const BottomLinks = () => {

    const pathname = usePathname();
    const {data: session, status} = useSession();

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
                            size={16}
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
                    color={pathname === "/account/my-advertises/add" ? "blue" : "gray"}
                    href="/account/my-advertises/add"
                    vertical
                    startIcon={
                        <LuPlus
                            size={16}
                            className="text-current"
                        />
                    }
                >
                    آگهی جدید
                </LinkButton>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                <LinkButton
                    variant="text"
                    color={pathname === "/account/favorites" ? "blue" : "gray"}
                    href="/account/favorites"
                    vertical
                    startIcon={
                        <LuBookmark
                            size={16}
                            className="text-current"
                        />
                    }
                >
                    علاقه مندی ها
                </LinkButton>
            </li>

            <li className="col-span-3 flex justify-center items-center">
                {
                    status === "authenticated" ? (
                        <LinkButton
                            variant="text"
                            color={pathname === "/account/profile" ? "blue" : "gray"}
                            href="/account/profile"
                            vertical
                            startIcon={
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
                        >
                            {session?.user?.name && session?.user?.family ? `${session?.user?.name} ${session?.user?.family}` : "کاربر سایت"}
                        </LinkButton>
                    ) : (
                        <LinkButton
                            variant="text"
                            color={pathname === "/auth/sign-in" ? "blue" : "gray"}
                            href="/auth/sign-in"
                            vertical
                            startIcon={
                                <LuUser
                                    size={16}
                                    className="text-current"
                                />
                            }
                        >
                            ورود
                        </LinkButton>
                    )
                }
            </li>

        </ul>
    )
}

const BottomNavigation = () => {

    return (
        <nav className="fixed bottom-0 left-0 z-20 flex md:hidden justify-center items-center gap-x-2 w-full h-[70px] bg-light shadow-3xl">
            <div className='flex justify-center items-center gap-x-2 w-full h-full p-4'>
                <BottomLinks/>
            </div>
        </nav>
    )
}

export default BottomNavigation;
