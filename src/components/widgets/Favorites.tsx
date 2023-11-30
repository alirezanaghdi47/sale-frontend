"use client";

// libraries
import dynamic from "next/dynamic";
import {useQuery , useMutation, useQueryClient} from "@tanstack/react-query";
import {useMediaQuery} from "@react-hooks-library/core";
import {LuArrowDownWideNarrow} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";
import Pagination from "@/components/modules/Pagination";
import AdvertiseCard from "@/components/partials/AdvertiseCard";
import {PaginationPlaceholder , AdvertiseListPlaceholder , SortBarPlaceholder} from "@/components/partials/Placeholders";
import {FavoriteListEmpty} from "@/components/partials/Empties";
const SortModal = dynamic(() => import("@/components/partials/SortModal") , {ssr: false});
const DeleteAdvertiseDialog = dynamic(() => import("@/components/partials/DeleteAdvertiseDialog"), {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";
import {useFilter} from "@/hooks/useFilter";
import {useDialog} from "@/hooks/useDialog";

// services
import {getAllFavoriteService , deleteFavoriteService} from "@/services/favoriteService";

// utils
import {sortList} from "@/utils/constants";
import {copyToClipboard} from "@/utils/functions";

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

    const queryClient = useQueryClient();

    const {
        dialogData,
        isOpenDialog: isOpenDeleteDialog,
        _handleShowDialog: _handleShowDeleteDialog,
        _handleHideDialog: _handleHideDeleteDialog
    } = useDialog();

    const {mutate, isPending} = useMutation({
        mutationFn: (data) => deleteFavoriteService(data),
        onSuccess: async (data) => {

            const {notification} = await import("@/components/modules/Notification");

            if (data.status === "success") {
                queryClient.invalidateQueries({queryKey: ["allFavorite"]});
                notification(data.message, "success");
            } else {
                notification(data.message, "error");
            }

            _handleHideDeleteDialog();

        }
    });

    const _handleDeleteFromFavorite = async () => {
        mutate(dialogData);
    }

    const _handleShareAdvertise = async (link) => {

        const {notification} = await import("@/components/modules/Notification");

        return copyToClipboard(link)
            .then(res => notification(res, "success"))
            .catch(err => notification(err, "error"));

    }

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

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
                                    delete: {
                                        onClick: () => _handleShowDeleteDialog(advertiseItem?._id)
                                    },
                                    share: {
                                        onClick: () => _handleShareAdvertise(`${process.env.BASE_URL}/advertises/${advertiseItem?._id}`)
                                    },
                                }}
                            />
                        </li>
                    )
                }

            </ul>

            <DeleteAdvertiseDialog
                onDelete={() => _handleDeleteFromFavorite()}
                isOpenDialog={isOpenDeleteDialog}
                onCloseDialog={_handleHideDeleteDialog}
            />

        </section>
    )
}

export const Favorites = () => {

    const {page, limit, sort, _handleChangePage, _handleChangeSort} = useFilter();

    const {isPending, data , error} = useQuery({
        queryKey: ['allFavorite', {page, limit, sort}],
        queryFn: () => getAllFavoriteService({page, limit, sort})
    });

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full h-full">

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

            {
                !isPending && (error || data?.data?.length === 0) && (
                    <FavoriteListEmpty/>
                )
            }

        </div>
    )
}