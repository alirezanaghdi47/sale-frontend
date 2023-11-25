"use client";

// libraries
import dynamic from "next/dynamic";
import {useRouter, useSearchParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {useMediaQuery} from "@react-hooks-library/core";
import {LuArrowDownWideNarrow} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";
import Pagination from "@/components/modules/Pagination";
import AdvertiseCard from "@/components/partials/AdvertiseCard";
const SortModal = dynamic(() => import("@/components/partials/SortModal") , {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";

// services
import {getAllMyAdvertiseService} from "@/services/myAdvertiseService";

const Actionbar = () => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    const {
        isOpenModal: isOpenSortModal,
        _handleHideModal: _handleHideSortModal,
        _handleShowModal: _handleShowSortModal
    } = useModal();

    return (
        <section className='flex md:hidden flex-col justify-center items-start gap-y-4 w-full'>

            <div className="flex justify-between items-center gap-x-4 w-full">

                <div className="flex justify-start items-center gap-x-4">

                    <Button
                        variant="contained"
                        color="light"
                        startIcon={<LuArrowDownWideNarrow size={20}/>}
                        onClick={_handleShowSortModal}
                    >
                        مرتب سازی
                    </Button>

                </div>

                <span className="text-base text-gray">
                    12
                    <span className='text-xs mr-1'>
                        مورد
                    </span>
                </span>

            </div>

            <SortModal
                isOpenModal={isOpenSortModal && !isTablet}
                onCloseModal={_handleHideSortModal}
            />

        </section>
    )
}

const Sortbar = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    return (
        <section className='hidden md:flex flex-col justify-center items-start gap-y-4 w-full'>

            <div className="flex justify-between items-center gap-x-4 w-full">

                <div className="flex justify-start items-center">

                    <span className="flex justify-start items-center gap-x-2 font-bold text-dark text-sm ml-2">
                       <LuArrowDownWideNarrow size={20}/>
                        مرتب سازی
                    </span>

                    <Button
                        size="sm"
                        variant={searchParams.get("sort") === "newest" ? "contained" : "text"}
                        color={searchParams.get("sort") === "newest" ? "blue" : "gray"}
                        onClick={() => router.push(`${process.env.BASE_URL}/account/my-advertises?page=${searchParams.get("page") || 1}&sort=newest`)}
                    >
                        جدید ترین
                    </Button>

                    <Button
                        size="sm"
                        variant={searchParams.get("sort") === "expensive" ? "contained" : "text"}
                        color={searchParams.get("sort") === "expensive" ? "blue" : "gray"}
                        onClick={() => router.push(`${process.env.BASE_URL}/account/my-advertises?page=${searchParams.get("page") || 1}&sort=expensive`)}
                    >
                        گران ترین
                    </Button>

                </div>

                <span className="text-base text-gray">
                    12
                    <span className='text-xs mr-1'>
                        مورد
                    </span>
                </span>

            </div>

        </section>
    )
}

const AdvertiseList = ({data , isPending}) => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <ul className="grid grid-cols-12 gap-4 w-full">

                {
                   !isPending && data?.length > 0 && data.map(advertiseItem =>
                        <li
                            className="col-span-12 lg:col-span-6"
                            key={advertiseItem?._id}
                        >
                            <AdvertiseCard
                                advertiseItem={advertiseItem}
                                toolbar={{
                                    delete: true,
                                    share: true,
                                    edit: true
                                }}
                            />
                        </li>
                    )
                }

            </ul>

        </section>
    )
}

export const MyAdvertises = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const { isPending, data } = useQuery({
        queryKey: ['allMyAdvertise' , {page: searchParams.get("page") , sort: searchParams.get("sort")}],
        queryFn: () => getAllMyAdvertiseService({page: searchParams.get("page") , sort: searchParams.get("sort")})
    });

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Actionbar/>

            <Sortbar/>

            <AdvertiseList
                data={data?.data}
                isPending={isPending}
            />

            <Pagination
                currentPage={parseInt(searchParams.get("page")) || 1}
                pageCount={100}
                pageSize={12}
                onChange={(page) => router.push(`${process.env.BASE_URL}/account/my-advertises?page=${page}&sort=${searchParams.get("sort") || "newest"}`)}
            />

        </div>
    )
}