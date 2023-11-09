"use client";

// libraries
import dynamic from "next/dynamic";
import {useMediaQuery} from "@react-hooks-library/core";
import {LuArrowDownWideNarrow} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";
import AdvertiseCard from "@/components/partials/AdvertiseCard";
import Pagination from "@/components/modules/Pagination";
const SortModal = dynamic(() => import("@/components/partials/SortModal") , {ssr: false});
const DeleteAdvertiseDialog = dynamic(() => import("@/components/partials/DeleteAdvertiseDialog") , {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";
import {useDialog} from "@/hooks/useDialog";

// utils
import {copyToClipboard} from "@/utils/functions";

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
                        size="md"
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
                        variant="text"
                        color="gray"
                    >
                        جدید ترین
                    </Button>

                    <Button
                        size="sm"
                        variant="text"
                        color="gray"
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

const List = () => {

    const {
        isOpenDialog: isOpenDeleteDialog,
        _handleShowDialog: _handleShowDeleteDialog,
        _handleHideDialog: _handleHideDeleteDialog
    } = useDialog();

    const _handleShareAdvertise = async () => {

        const {notification} = await import("@/components/modules/Notification");

        return copyToClipboard("link")
            .then(res => notification(res , "success"))
            .catch(err => notification(err , "error"));
    }

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <ul className="grid grid-cols-12 gap-4 w-full">

                {
                    Array(5).fill("").map((advertiseItem , index) =>
                        <li
                            className="col-span-12 lg:col-span-6"
                            key={index}
                        >
                            <AdvertiseCard
                                advertise={advertiseItem}
                                toolbar={{
                                    share: {
                                        onClick: _handleShareAdvertise
                                    },
                                    delete: {
                                        onClick: _handleShowDeleteDialog
                                    }
                                }}
                            />
                        </li>
                    )
                }

            </ul>

            <DeleteAdvertiseDialog
                isOpenDialog={isOpenDeleteDialog}
                onCloseDialog={_handleHideDeleteDialog}
            />

        </section>
    )
}

export const Favorites = () => {

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Actionbar/>

            <Sortbar/>

            <List/>

            <Pagination
                currentPage={1}
                pageCount={100}
                pageSize={10}
            />

        </div>
    )
}