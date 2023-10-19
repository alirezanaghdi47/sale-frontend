"use client";

// libraries
import {LuArrowDownWideNarrow} from "react-icons/lu";

// components
import AdvertiseCard from "@/components/partials/AdvertiseCard";
import Button from "@/components/modules/Button";
import Pagination from "@/components/modules/Pagination";
import SortModal from "@/components/partials/SortModal";

// hooks
import {useModal} from "@/hooks/useModal";

const Actionbar = () => {

    const {
        isOpenModal: isOpenSortModal,
        _handleHideModal: _handleHideSortModal,
        _handleShowModal: _handleShowSortModal
    } = useModal();

    return (
        <section className='col-span-12 flex md:hidden flex-col justify-center items-start gap-y-4 w-full'>

            <div className="flex justify-between items-center gap-x-4 w-full">

                <Button
                    variant="contained"
                    color="light"
                    startIcon={<LuArrowDownWideNarrow size={20}/>}
                    onClick={_handleShowSortModal}
                >
                    مرتب سازی
                </Button>

                <span className="text-lg text-gray">
                    12
                    <span className='text-sm mr-1'>
                        مورد
                    </span>
                </span>

            </div>

            <SortModal
                isOpenModal={isOpenSortModal}
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

                    <span className="flex justify-start items-center gap-x-2 font-bold text-dark ml-2">
                        <span>
                            <LuArrowDownWideNarrow size={20}/>
                        </span>
                        مرتب سازی
                    </span>

                    <Button
                        variant="text"
                        color="gray"
                    >
                        جدید ترین
                    </Button>

                    <Button
                        variant="text"
                        color="gray"
                    >
                        گران ترین
                    </Button>

                </div>

                <span className="text-lg text-gray">
                    12
                    <span className='text-sm mr-1'>
                        مورد
                    </span>
                </span>

            </div>

        </section>
    )
}

const List = () => {

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
                                    edit: true,
                                    delete: true
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

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Actionbar/>

            <Sortbar/>

            <List/>

            <Pagination/>

        </div>
    )
}