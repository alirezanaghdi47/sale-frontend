'use client';

// libraries
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
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
const CitiesModal = dynamic(() => import("@/components/partials/CitiesModal"), {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";

// modules
import {Button, LinkButton} from "@/modules/Button";
import SearchInput from "@/modules/SearchInput";
const Menu = dynamic(() => import("@/modules/Menu").then(module => ({default: module.Menu})), {ssr: false});
const MenuItem = dynamic(() => import("@/modules/Menu").then(module => ({default: module.MenuItem})), {ssr: false});

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
                // @ts-ignore
                page: searchParams.get("page"),
                // @ts-ignore
                sort: searchParams.get("sort"),
                // @ts-ignore
                startPrice: searchParams.get("startPrice"),
                // @ts-ignore
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

const Header = () => {

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

export default Header