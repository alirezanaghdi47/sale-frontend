"use client";

// libraries
import dynamic from "next/dynamic";
import {useQuery} from "@tanstack/react-query";
import {useMediaQuery} from "@react-hooks-library/core";
import {LuArrowDownWideNarrow} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";
import Pagination from "@/components/modules/Pagination";
import AdvertiseCard from "@/components/partials/AdvertiseCard";
import {PaginationPlaceholder , AdvertiseListPlaceholder , SortBarPlaceholder} from "@/components/partials/Placeholders";
const SortModal = dynamic(() => import("@/components/partials/SortModal") , {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";
import {useFilter} from "@/hooks/useFilter";

// services
import {getAllFavoriteService} from "@/services/favoriteService";

// utils
import {sortList} from "@/utils/constants";

const SortBar = ({totalCount , page, sort, _handleChangePage, _handleChangeSort}) => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    const {
        isOpenModal: isOpenSortModal,
        _handleHideModal: _handleHideSortModal,
        _handleShowModal: _handleShowSortModal
    } = useModal();

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <div className="flex justify-between items-center gap-x-4 w-full">

                <div className="hidden md:flex justify-start items-center">

                    <span className="flex justify-start items-center gap-x-2 font-bold text-dark text-sm ml-2">
                       <LuArrowDownWideNarrow size={20}/>
                        مرتب سازی
                    </span>

                    {
                        sortList?.map(sortItem =>
                            <Button
                                key={sortItem?.id}
                                size="sm"
                                variant={sortItem?.value === sort ? "contained" : "text"}
                                color={sortItem?.value === sort ? "blue" : "gray"}
                                onClick={() => _handleChangeSort(sortItem?.value)}
                            >
                                {sortItem?.label}
                            </Button>
                        )
                    }

                </div>

                <div className="flex md:hidden justify-start items-center gap-x-4">

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
                    {totalCount}
                    <span className='text-xs mr-1'>
                        مورد
                    </span>
                </span>

                <SortModal
                    sort={sort}
                    _handleChangeSort={(value) => _handleChangeSort(value)}
                    isOpenModal={isOpenSortModal && !isTablet}
                    onCloseModal={_handleHideSortModal}
                />

            </div>

        </section>
    )
}

const AdvertiseList = ({data}) => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full mb-auto'>

            <ul className="grid grid-cols-12 gap-4 w-full">

                {
                    data.map(advertiseItem =>
                        <li
                            key={advertiseItem?._id}
                            className="col-span-12 lg:col-span-6"
                        >
                            <AdvertiseCard
                                advertiseItem={advertiseItem}
                                toolbar={{
                                    delete: true,
                                    share: true,
                                }}
                            />
                        </li>
                    )
                }

            </ul>

        </section>
    )
}

export const Favorites = () => {

    const {page, limit, sort, _handleChangePage, _handleChangeSort} = useFilter();

    const {isPending, data} = useQuery({
        queryKey: ['allFavorite', {page, limit, sort}],
        queryFn: () => getAllFavoriteService({page, limit, sort})
    });

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full h-full min-h-[calc(100dvh_-_32px)]">

            {
                !isPending && data?.data?.length > 0 && (
                    <SortBar
                        totalCount={data?.totalCount}
                        page={page}
                        sort={sort}
                        _handleChangePage={(value) => _handleChangePage(value)}
                        _handleChangeSort={(value) => _handleChangeSort(value)}
                    />
                )
            }

            {
                !isPending && data?.data?.length > 0 && (
                    <AdvertiseList data={data?.data}/>
                )
            }

            {
                !isPending && data?.totalCount > limit && (
                    <Pagination
                        currentPage={page}
                        pageCount={data?.totalCount}
                        pageSize={limit}
                        onChange={(value) => _handleChangePage(value)}
                    />
                )
            }

            {
                isPending && (
                    <SortBarPlaceholder/>
                )
            }

            {
                isPending && (
                    <AdvertiseListPlaceholder/>
                )
            }

            {
                isPending && (
                    <PaginationPlaceholder/>
                )
            }

        </div>
    )
}