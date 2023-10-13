'use client';

// libraries
import {LuArrowDownWideNarrow , LuFilter} from "react-icons/lu";

// components
import FilterModal from "@/components/widgets/public/FilterModal";
import SortModal from "@/components/widgets/public/SortModal";

// hooks
import {useModal} from "@/hooks/useModal";

const Filterbar = () => {

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
        <>
            <section className="flex justify-between items-center gap-x-4 w-full">
                <div className="flex justify-start items-center gap-x-4">
                    <button
                        className={`flex justify-center items-center gap-x-2 bg-light text-gray text-sm font-bold rounded-lg px-4 py-2`}
                        onClick={_handleShowFilterModal}
                    >
                        <LuFilter size={20}/>
                        فیلتر
                    </button>
                    <button
                        className={`flex justify-center items-center gap-x-2 bg-light text-gray text-sm font-bold rounded-lg px-4 py-2`}
                        onClick={_handleShowSortModal}
                    >
                        <LuArrowDownWideNarrow size={20}/>
                        مرتب سازی
                    </button>
                </div>
                <div className="flex justify-end items-center gap-x-4">
                    <span className="text-gray text-base font-bold">
                        12
                        <span className="text-gray text-sm font-medium mr-1">
                            مورد
                        </span>
                    </span>
                </div>
            </section>
            <FilterModal
                isOpenModal={isOpenFilterModal}
                onCloseModal={_handleHideFilterModal}
            />
            <SortModal
                isOpenModal={isOpenSortModal}
                onCloseModal={_handleHideSortModal}
            />
        </>
    )
}

export default Filterbar;