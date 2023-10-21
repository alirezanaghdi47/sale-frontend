"use client";

// libraries
import {useState} from "react";
import {LuArrowDownWideNarrow, LuCheck, LuFilter} from "react-icons/lu";

// components
import {Accordion, AccordionItem} from "@/components/modules/Accordion";
import AdvertiseCard from "@/components/partials/AdvertiseCard";
import RangeInput from "@/components/modules/RangeInput";
import Button from "@/components/modules/Button";
import SortModal from "@/components/partials/SortModal";
import FilterModal from "@/components/partials/FilterModal";
import Pagination from "@/components/modules/Pagination";

// hooks
import {useModal} from "@/hooks/useModal";

const Filters = () => {

    const [values, setValues] = useState([20, 40]);

    return (
        <div className='hidden md:flex flex-col justify-start items-start gap-y-4 min-w-[280px]'>

            <div className="flex justify-between items-center gap-x-4 w-full">

                <h3 className="flex justify-start items-center gap-x-2 font-bold text-dark">
                    <span>
                        <LuFilter size={20}/>
                    </span>
                    فیلتر ها
                </h3>

            </div>

            <Accordion>

                <AccordionItem
                    header="دسته بندی ها"
                    initialEntered
                >
                    checkbox list
                </AccordionItem>

                <AccordionItem
                    header="قیمت"
                    initialEntered
                >

                    <RangeInput
                        min={0}
                        max={10_000_000}
                        step={1000}
                        rtl
                        values={values}
                        onChange={setValues}
                    />

                    <div className="flex justify-between items-center gap-x-4 w-full">
                        <span className="text-xs text-gray"> {values[0]} تومان</span>
                        <span className="text-xs text-gray"> {values[1]} تومان</span>
                    </div>

                </AccordionItem>

                <AccordionItem
                    header="وضعیت"
                    initialEntered
                >
                    switchbox list
                </AccordionItem>

            </Accordion>

            <div className="flex justify-end items-center gap-x-4 w-full">

                <Button
                    variant="contained"
                    color="blue"
                    startIcon={<LuCheck size={20}/>}
                >
                    فیلتر
                </Button>

            </div>

        </div>
    )
}

const Actionbar = () => {

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
        <section className='col-span-12 flex md:hidden flex-col justify-center items-start gap-y-4 w-full'>

            <div className="flex justify-between items-center gap-x-4 w-full">

                <div className="flex justify-start items-center gap-x-4">

                    <Button
                        variant="contained"
                        color="light"
                        startIcon={<LuFilter size={20}/>}
                        onClick={_handleShowFilterModal}
                    >
                        فیلتر
                    </Button>

                    <Button
                        variant="contained"
                        color="light"
                        startIcon={<LuArrowDownWideNarrow size={20}/>}
                        onClick={_handleShowSortModal}
                    >
                        مرتب سازی
                    </Button>

                </div>

                <span className="text-lg text-gray">
                    12
                    <span className='text-sm mr-1'>
                        مورد
                    </span>
                </span>

            </div>

            <FilterModal
                isOpenModal={isOpenFilterModal}
                onCloseModal={_handleHideFilterModal}
            />

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
                    Array(5).fill("").map((advertiseItem, index) =>
                        <li
                            className="col-span-12 lg:col-span-6"
                            key={index}
                        >
                            <AdvertiseCard
                                advertise={advertiseItem}
                                toolbar={false}
                            />
                        </li>
                    )
                }

            </ul>

        </section>
    )
}

export const Content = () => {

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

export const Advertises = () => {

    return (
        <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full">

            <Filters/>

            <Content/>

        </div>
    )
}