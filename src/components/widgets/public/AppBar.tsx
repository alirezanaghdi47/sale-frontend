'use client';

// libraries
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import {useFormik} from "formik";
import {LuMapPin} from "react-icons/lu";

// components
const CitiesModal = dynamic(() => import("@/components/partials/CitiesModal"), {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";

// modules
import {Button} from "@/modules/Button";
import SearchInput from "@/modules/SearchInput";

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

const Appbar = () => {

    return (
        <header className="fixed top-0 left-0 z-20 flex md:hidden justify-center items-center w-full h-[70px] bg-light shadow-3xl">
            <div className='flex justify-between items-center gap-x-4 w-full h-full p-4'>
                <Logo/>
                <AppbarActions/>
            </div>
        </header>
    )
}

export default Appbar;