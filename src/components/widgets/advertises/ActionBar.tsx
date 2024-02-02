"use client";

// libraries
import dynamic from "next/dynamic";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useMediaQuery} from "@react-hooks-library/core";
import {LuArrowDownWideNarrow, LuFilter} from "react-icons/lu";

// components
const SortModal = dynamic(() => import("@/components/partials/SortModal"), {ssr: false});
const FilterModal = dynamic(() => import("@/components/widgets/advertises/FilterModal"), {ssr: false});

// modules
import {Button} from "@/modules/Button";

// hooks
import {useModal} from "@/hooks/useModal";

// utils
import {generateQueryParams} from "@/utils/functions";

const ActionBar = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isTablet = useMediaQuery("(min-width: 768px)");

    const {
        isOpenModal: isOpenFilterModal,
        _handleHideModal: _handleHideFilterModal,
        _handleShowModal: _handleShowFilterModal
    } = useModal();

    const {
        isOpenModal: isOpenSortModal,
        _handleHideModal: _handleHideSortModal,
        _handleShowModal: _handleShowSortModal
    } = useModal();

    return (
        <section className='flex md:hidden flex-col justify-center items-start gap-y-4 w-full'>

            <div className="flex justify-between items-center gap-x-4 w-full">

                <Button
                    variant="contained"
                    color="light"
                    startIcon={
                        <LuFilter
                            size={16}
                            className="text-current"
                        />
                    }
                    onClick={_handleShowFilterModal}
                >
                    فیلتر
                </Button>

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

            <FilterModal
                isOpenModal={isOpenFilterModal && !isTablet}
                onCloseModal={_handleHideFilterModal}
            />

            <SortModal
                sort={searchParams.get("sort")}
                _handleChangeSort={(value) => {
                    const query = generateQueryParams({
                        search: searchParams.get("search"),
                        page: searchParams.get("page"),
                        sort: value,
                        startPrice: searchParams.get("startPrice"),
                        endPrice: searchParams.get("endPrice"),
                        categories: searchParams.getAll("category"),
                        cities: searchParams.getAll("city"),
                    });
                    router.push(`${pathname}?${query}`);
                }}
                isOpenModal={isOpenSortModal && !isTablet}
                onCloseModal={_handleHideSortModal}
            />

        </section>
    )
}

export default ActionBar;