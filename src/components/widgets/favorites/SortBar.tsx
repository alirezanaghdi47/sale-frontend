"use client";

// libraries
import dynamic from "next/dynamic";
import {useMediaQuery} from "@react-hooks-library/core";
import {LuArrowDownWideNarrow} from "react-icons/lu";

// components
const SortModal = dynamic(() => import("@/components/partials/SortModal") , {ssr: false});

// modules
import {Button} from "@/modules/Button";

// hooks
import {useModal} from "@/hooks/useModal";

// types
import {SortBarType} from "@/types/components";

// utils
import {sortList} from "@/utils/constants";

const SortBar = ({totalCount, sort, _handleChangeSort}: SortBarType) => {

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

                    <span className="flex justify-start items-center gap-x-2 font-bold text-dark text-xs ml-2">
                       <LuArrowDownWideNarrow
                           size={16}
                           className="text-current"
                       />
                        مرتب سازی
                    </span>

                    {
                        sortList?.map(sortItem =>
                            <Button
                                key={sortItem?.id}
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
                        startIcon={
                            <LuArrowDownWideNarrow
                                size={16}
                                className="text-current"
                            />
                        }
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

export default SortBar;