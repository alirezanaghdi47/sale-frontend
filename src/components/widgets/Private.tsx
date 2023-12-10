'use client';

// libraries
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSession, signOut} from "next-auth/react";
import {useMediaQuery} from "@react-hooks-library/core";
import {LuBookmark, LuLogOut, LuMenu, LuPlus, LuScrollText, LuUser} from "react-icons/lu";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import {IconButton, LinkIconButton} from "@/components/modules/IconButton";
import {Modal, ModalBody} from "@/components/modules/Modal";

const Menu = dynamic(() => import("@/components/modules/Menu").then(module => ({default: module.Menu})), {ssr: false});
const MenuItem = dynamic(() => import("@/components/modules/Menu").then(module => ({default: module.MenuItem})), {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";

const MenuModal = ({isOpenModal, onCloseModal}) => {

    const pathname = usePathname();
    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <Modal
            isOpenModal={isOpenModal}
            onCloseModal={onCloseModal}
            width={isTablet ? "lg" : "full"}
            position={isTablet ? "center" : "bottom"}
        >

            <ModalBody>

                <ul className="flex flex-col justify-center items-center gap-y-2">

                    <li className="flex justify-start items-center w-full">
                        <LinkButton
                            variant="text"
                            color={pathname === "/account/my-advertises" ? "blue" : "gray"}
                            href="/account/my-advertises"
                            startIcon={
                                <LuScrollText
                                    size={16}
                                    className="text-current"
                                />
                            }
                            onClick={onCloseModal}
                        >
                            آگهی های من
                        </LinkButton>
                    </li>

                    <li className="flex justify-start items-center w-full">
                        <LinkButton
                            variant="text"
                            color={pathname === "/account/my-advertises/add" ? "blue" : "gray"}
                            href="/account/my-advertises/add"
                            startIcon={
                                <LuPlus
                                    size={16}
                                    className="text-current"
                                />
                            }
                            onClick={onCloseModal}
                        >
                            آگهی جدید
                        </LinkButton>
                    </li>

                    <li className="flex justify-start items-center w-full">
                        <LinkButton
                            variant="text"
                            color={pathname === "/account/favorites" ? "blue" : "gray"}
                            href="/account/favorites"
                            startIcon={
                                <LuBookmark
                                    size={16}
                                    className="text-current"
                                />
                            }
                            onClick={onCloseModal}
                        >
                            علاقه مندی ها
                        </LinkButton>
                    </li>

                </ul>

            </ModalBody>

        </Modal>
    )
}

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

    const isTablet = useMediaQuery("(min-width: 768px)");

    const {
        isOpenModal: isOpenMenuModal,
        _handleHideModal: _handleHideMenuModal,
        _handleShowModal: _handleShowMenuModal
    } = useModal();

    return (
        <div className="flex md:hidden justify-start items-center">

            <IconButton
                variant="text"
                color="gray"
                onClick={_handleShowMenuModal}
            >
                <LuMenu
                    size={16}
                    className="text-current"
                />
            </IconButton>

            <MenuModal
                isOpenModal={Boolean(isOpenMenuModal && !isTablet)}
                onCloseModal={_handleHideMenuModal}
            />

        </div>
    )
}

const Actions = () => {

    const pathname = usePathname();
    const {data: session} = useSession();

    return (
        <div className="flex justify-end items-center">

            {/*<LinkButton*/}
            {/*    variant="text"*/}
            {/*    color={pathname === "/account/profile" ? "blue" : "gray"}*/}
            {/*    href="/account/profile"*/}
            {/*    startIcon={*/}
            {/*        session?.user?.avatar ? (*/}
            {/*            <Image*/}
            {/*                src={session?.user?.avatar}*/}
            {/*                alt="avatar"*/}
            {/*                width={24}*/}
            {/*                height={24}*/}
            {/*                className="w-[24px] h-[24px] rounded-full object-cover object-center"*/}
            {/*            />*/}
            {/*        ) : (*/}
            {/*            <LuUser*/}
            {/*                size={16}*/}
            {/*                className="text-current"*/}
            {/*            />*/}
            {/*        )*/}
            {/*    }*/}
            {/*>*/}
            {/*    {session?.user?.name + " " + session?.user?.family}*/}
            {/*</LinkButton>*/}

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
                                    className="rounded-full object-cover object-center"
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

                <div className="px-4 py-2">

                    <h3 className="text-xs font-bold text-gray">
                        {session?.user?.name && session?.user?.family ? `${session?.user?.name} ${session?.user?.family}` : "کاربر سایت"}
                    </h3>

                </div>

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

export const Header = () => {

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