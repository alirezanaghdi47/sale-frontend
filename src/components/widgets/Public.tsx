'use client';

// libraries
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {
    LuPlus,
    LuScrollText,
    LuUser,
    LuSearch,
    LuCopyright,
    LuMapPin,
    LuBookmark,
    LuLogOut,
    LuLogIn
} from "react-icons/lu";
import {BsInstagram, BsTelegram, BsTwitter, BsWhatsapp} from "react-icons/bs";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import {LinkIconButton} from "@/components/modules/IconButton";
import TextInput from "@/components/modules/TextInput";

const Menu = dynamic(() => import("@/components/modules/Menu").then(module => ({default: module.Menu})), {ssr: false});
const MenuItem = dynamic(() => import("@/components/modules/Menu").then(module => ({default: module.MenuItem})), {ssr: false});
const CitiesModal = dynamic(() => import("@/components/partials/CitiesModal"), {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";
import {useAuth} from "@/hooks/useAuth";

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

    const {
        isOpenModal: isOpenCitiesModal,
        _handleShowModal: _handleShowCitiesModal,
        _handleHideModal: _handleHideCitiesModal
    } = useModal();

    return (
        <>

            <div className="flex justify-center items-center gap-x-4 w-full">

                <TextInput
                    name="search"
                    placeholder="جستجو"
                    startIcon={<LuSearch size={20}/>}
                />

                <Button
                    color="gray"
                    variant="text"
                    startIcon={<LuMapPin size={20}/>}
                    onClick={_handleShowCitiesModal}
                >
                    تهران
                </Button>

            </div>

            <CitiesModal
                isOpenModal={isOpenCitiesModal}
                onCloseModal={_handleHideCitiesModal}
            />

        </>
    )
}

export const Appbar = () => {

    return (
        <header
            className="fixed top-0 left-0 z-20 flex md:hidden justify-center items-center w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-between items-center gap-x-4 w-full max-w-[1200px] h-full p-4'>

                <Logo/>

                <AppbarActions/>

            </div>

        </header>
    )
}

const BottomLinks = () => {

    const pathname = usePathname();
    const {isAuth, user, _handleLogout} = useAuth();

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

            <li className="col-span-3 flex justify-center items-center">
                {
                    isAuth ? (
                        <LinkButton
                            variant="text"
                            color={pathname === "/account/profile" ? "blue" : "gray"}
                            href="/account/profile"
                            vertical
                            startIcon={
                                user?.avatar ? (
                                    <Image
                                        src={user?.avatar}
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
                            {user?.name && user?.family ? `${user?.name} ${user?.family}` : "کاربر سایت"}
                        </LinkButton>
                    ) : (
                        <LinkButton
                            variant="text"
                            color={pathname === "/auth/sign-in" ? "blue" : "gray"}
                            href="/auth/sign-in"
                            vertical
                            startIcon={
                                <LuUser
                                    size={20}
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

const HeaderActions = () => {

    const {
        isOpenModal: isOpenCitiesModal,
        _handleShowModal: _handleShowCitiesModal,
        _handleHideModal: _handleHideCitiesModal
    } = useModal();

    return (
        <>

            <div className="flex justify-center items-center gap-x-4 w-full">

                <Button
                    color="gray"
                    variant="text"
                    startIcon={<LuMapPin size={20}/>}
                    onClick={_handleShowCitiesModal}
                >
                    تهران
                </Button>

                <TextInput
                    name="search"
                    placeholder="جستجو"
                    startIcon={<LuSearch size={20}/>}
                />

            </div>

            <CitiesModal
                isOpenModal={isOpenCitiesModal}
                onCloseModal={_handleHideCitiesModal}
            />

        </>
    )
}

const HeaderLinks = () => {

    const {isAuth, user, _handleLogout} = useAuth();

    return (
        <div className="flex justify-start items-center gap-x-4">

            {
                isAuth ? (
                    <Menu
                        menuButton={
                            <Button
                                variant="text"
                                color="gray"
                                startIcon={
                                    user?.avatar ? (
                                        <Image
                                            src={user?.avatar}
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
                                {user?.name && user?.family ? `${user?.name} ${user?.family}` : "کاربر سایت"}
                            </Button>
                        }
                        align="start"
                        direction="bottom"
                    >

                        <MenuItem
                            variant="text"
                            color="gray"
                            href="/account/my-advertises"
                            icon={
                                <LuScrollText
                                    size={20}
                                    className="text-current"
                                />
                            }
                        >
                            آگهی های من
                        </MenuItem>

                        <MenuItem
                            variant="text"
                            color="gray"
                            href="/account/favorites"
                            icon={
                                <LuBookmark
                                    size={20}
                                    className="text-current"
                                />
                            }
                        >
                            علاقه مندی ها
                        </MenuItem>

                        <MenuItem
                            variant="text"
                            color="gray"
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
                            onClick={_handleLogout}
                        >
                            خروج
                        </MenuItem>

                    </Menu>
                ) : (
                    <LinkButton
                        variant="text"
                        color="gray"
                        href="/auth/sign-in"
                        startIcon={
                            <LuLogIn
                                size={20}
                                className="text-current"
                            />
                        }
                    >
                        ورود
                    </LinkButton>
                )
            }

            <LinkButton
                variant="contained"
                color="blue"
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

        </div>
    )
}

export const Header = () => {

    return (
        <header
            className="fixed top-0 left-0 z-20 hidden md:flex justify-center items-center w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-start items-center gap-x-4 w-full max-w-[1200px] h-full p-4'>

                <Logo/>

                <HeaderActions/>

                <HeaderLinks/>

            </div>

        </header>
    )
}

const FooterLinks = () => {

    const _handleRedirect = async () => {

        const {notification} = await import("@/components/modules/Notification");

        return notification("بزودی", "info");

    }

    return (
        <ul className="order-1 flex justify-start items-center gap-x-2">

            <li>
                <Button
                    variant="text"
                    color="gray"
                    onClick={_handleRedirect}
                >
                    درباره ما
                </Button>
            </li>

            <li>
                <Button
                    variant="text"
                    color="gray"
                    onClick={_handleRedirect}
                >
                    پشتیبانی
                </Button>
            </li>

        </ul>
    )
}

const CopyRight = () => {

    return (
        <div className="order-3 md:order-2 flex justify-center items-center">
            <p className="flex justify-center items-center gap-x-2 text-sm text-gray p-2">
                <LuCopyright
                    size={16}
                    className="text-current"
                />
                1402-1403
            </p>
        </div>
    )
}

const SocialMedias = () => {

    return (
        <ul className="order-2 md:order-3 flex justify-center items-end gap-x-2">

            <li>
                <LinkIconButton
                    variant="text"
                    color="gray"
                    href="/"
                >
                    <BsTelegram
                        size={20}
                        className="text-current"
                    />
                </LinkIconButton>
            </li>

            <li>
                <LinkIconButton
                    variant="text"
                    color="gray"
                    href="/"
                >
                    <BsWhatsapp
                        size={20}
                        className="text-current"
                    />
                </LinkIconButton>
            </li>

            <li>
                <LinkIconButton
                    variant="text"
                    color="gray"
                    href="/"
                >
                    <BsInstagram
                        size={20}
                        className="text-current"
                    />
                </LinkIconButton>
            </li>

            <li>
                <LinkIconButton
                    variant="text"
                    color="gray"
                    href="/"
                >
                    <BsTwitter
                        size={20}
                        className="text-current"
                    />
                </LinkIconButton>
            </li>

        </ul>
    )
}

export const Footer = () => {

    return (
        <footer className="flex justify-center items-center gap-x-2 w-full mt-auto">

            <div className='flex flex-col md:flex-row justify-between items-center gap-2 w-full max-w-[1200px] p-4'>

                <FooterLinks/>

                <CopyRight/>

                <SocialMedias/>

            </div>

        </footer>
    )
}