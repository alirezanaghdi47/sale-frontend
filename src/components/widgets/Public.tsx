'use client';

// libraries
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useFormik} from "formik";
import {
    LuPlus,
    LuScrollText,
    LuUser,
    LuSearch,
    LuMapPin,
    LuBookmark,
    LuLogOut,
    LuLogIn
} from "react-icons/lu";

// components
import {Button, LinkButton} from "@/components/modules/Button";
import TextInput from "@/components/modules/TextInput";
import SearchInput from "@/components/modules/SearchInput";
const Menu = dynamic(() => import("@/components/modules/Menu").then(module => ({default: module.Menu})), {ssr: false});
const MenuItem = dynamic(() => import("@/components/modules/Menu").then(module => ({default: module.MenuItem})), {ssr: false});
const CitiesModal = dynamic(() => import("@/components/partials/CitiesModal"), {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";
import {useAuth} from "@/hooks/useAuth";

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

    const searchParams = useSearchParams();

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
                    {searchParams.getAll("city").length === 0 && "انتخاب کنید"}
                    {searchParams.getAll("city").length === 1 && cityList.find(cityItem => cityItem.value === searchParams.get("city"))?.label}
                    {searchParams.getAll("city").length > 1 && `${searchParams.getAll("city").length} شهر `}
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
    const {isAuth, user} = useAuth();

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
                {
                    (!user?.name || !user?.family || !user?.phoneNumber) ? (
                        <Button
                            variant="text"
                            color="gray"
                            vertical
                            startIcon={
                                <LuPlus
                                    size={20}
                                    className="text-current"
                                />
                            }
                            onClick={async () => {
                                const {notification} = await import("@/components/modules/Notification");
                                notification(isAuth ? "ابتدا حساب کاربری خود را تکمیل کنید" : "ابتدا وارد حساب کاربری خود شوید", "error");
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
        <>

            <div className="flex justify-center items-center gap-x-4 w-full">

                <Button
                    color="gray"
                    variant="text"
                    startIcon={<LuMapPin size={20}/>}
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

            {
                (!user?.name || !user?.family || !user?.phoneNumber) ? (
                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={
                            <LuPlus
                                size={20}
                                className="text-current"
                            />
                        }
                        onClick={async () => {
                            const {notification} = await import("@/components/modules/Notification");
                            notification(isAuth ? "ابتدا حساب کاربری خود را تکمیل کنید" : "ابتدا وارد حساب کاربری خود شوید", "error");
                        }}
                    >
                        آگهی جدید
                    </Button>
                ) : (
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
                )
            }

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