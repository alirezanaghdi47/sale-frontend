'use client';

// libraries
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {signOut, useSession} from "next-auth/react";
import {useFormik} from "formik";
import {
    LuPlus,
    LuScrollText,
    LuUser,
    LuMapPin,
    LuBookmark,
    LuLogOut,
    LuLogIn
} from "react-icons/lu";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import SearchInput from "@/components/modules/SearchInput";
const Menu = dynamic(() => import("@/components/modules/Menu").then(module => ({default: module.Menu})), {ssr: false});
const MenuItem = dynamic(() => import("@/components/modules/Menu").then(module => ({default: module.MenuItem})), {ssr: false});
const CitiesModal = dynamic(() => import("@/components/partials/CitiesModal"), {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";

// utils
import {cityList} from "@/utils/constants";
import {generateQueryParams} from "@/utils/functions";

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

    const router = useRouter();
    const searchParams = useSearchParams();

    const {
        isOpenModal: isOpenCitiesModal,
        _handleShowModal: _handleShowCitiesModal,
        _handleHideModal: _handleHideCitiesModal
    } = useModal();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            search: searchParams.get("search") ?? ""
        },
        onSubmit: async (result) => {
            const query = generateQueryParams({
                search: result.search,
                page: searchParams.get("page"),
                sort: searchParams.get("sort"),
                startPrice: searchParams.get("startPrice"),
                endPrice: searchParams.get("endPrice"),
                categories: searchParams.getAll("category"),
                cities: searchParams.getAll("city"),
            });
            router.push(`${process.env.BASE_URL}/advertises?${query}`);
        }
    });

    return (
        <div className="flex justify-center items-center gap-x-4 w-full">

            <SearchInput
                name="search"
                placeholder="جستجو"
                value={formik.values.search}
                onChange={formik.handleChange}
                onSubmit={formik.handleSubmit}
            />

            <Button
                variant="text"
                color="gray"
                startIcon={
                    <LuMapPin
                        size={16}
                        className="text-current"
                    />
                }
                onClick={_handleShowCitiesModal}
            >
                {searchParams.getAll("city").length === 0 && "انتخاب کنید"}
                {searchParams.getAll("city").length === 1 && cityList.find(cityItem => cityItem.value === searchParams.get("city"))?.label}
                {searchParams.getAll("city").length > 1 && `${searchParams.getAll("city").length} شهر `}
            </Button>

            <CitiesModal
                isOpenModal={isOpenCitiesModal}
                onCloseModal={_handleHideCitiesModal}
            />

        </div>
    )
}

export const Appbar = () => {

    return (
        <header
            className="fixed top-0 left-0 z-20 flex md:hidden justify-center items-center w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-between items-center gap-x-4 w-full h-full p-4'>

                <Logo/>

                <AppbarActions/>

            </div>

        </header>
    )
}

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
                                        width={20}
                                        height={20}
                                        className="w-[20px] h-[20px] rounded-full object-cover object-center"
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

export const BottomNavigation = () => {

    return (
        <nav
            className="fixed bottom-0 left-0 z-20 flex md:hidden justify-center items-center gap-x-2 w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-center items-center gap-x-2 w-full h-full p-4'>

                <BottomLinks/>

            </div>

        </nav>
    )
}

const HeaderActions = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const {
        isOpenModal: isOpenCitiesModal,
        _handleShowModal: _handleShowCitiesModal,
        _handleHideModal: _handleHideCitiesModal
    } = useModal();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            search: searchParams.get("search") ?? ""
        },
        onSubmit: async (result) => {
            const query = generateQueryParams({
                search: result.search,
                page: searchParams.get("page"),
                sort: searchParams.get("sort"),
                startPrice: searchParams.get("startPrice"),
                endPrice: searchParams.get("endPrice"),
                categories: searchParams.getAll("category"),
                cities: searchParams.getAll("city"),
            });
            router.push(`${process.env.BASE_URL}/advertises?${query}`);
        }
    });

    return (
        <div className="flex justify-center items-center gap-x-4 w-full">

            <Button
                variant="text"
                color="gray"
                startIcon={
                    <LuMapPin
                        size={16}
                        className="text-current"
                    />
                }
                onClick={_handleShowCitiesModal}
            >
                {searchParams.getAll("city").length === 0 && "انتخاب کنید"}
                {searchParams.getAll("city").length === 1 && cityList.find(cityItem => cityItem.value === searchParams.get("city"))?.label}
                {searchParams.getAll("city").length > 1 && `${searchParams.getAll("city").length} شهر `}
            </Button>

            <SearchInput
                name="search"
                placeholder="جستجو"
                value={formik.values.search}
                onChange={formik.handleChange}
                onSubmit={formik.handleSubmit}
            />

            <CitiesModal
                isOpenModal={isOpenCitiesModal}
                onCloseModal={_handleHideCitiesModal}
            />

        </div>
    )
}

const HeaderLinks = () => {

    const {data: session, status} = useSession();

    return (
        <div className="flex justify-start items-center gap-x-4">

            {
                status === "authenticated" ? (
                    <Menu
                        menuButton={
                            <Button
                                variant="text"
                                color="gray"
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
                                    size={16}
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
                                    size={16}
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
                                    size={16}
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
                                    size={16}
                                    className="text-current"
                                />
                            }
                            onClick={() => signOut({callbackUrl: "/advertises"})}
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
                                size={16}
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
                        size={16}
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

            <div className='flex justify-start items-center gap-x-4 w-full max-w-[992px] h-full p-4'>

                <Logo/>

                <HeaderActions/>

                <HeaderLinks/>

            </div>

        </header>
    )
}