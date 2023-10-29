"use client";

// libraries
import {useFormik} from "formik";
import {LuArrowDownWideNarrow, LuCheck, LuFilter} from "react-icons/lu";

// components
import {Accordion, AccordionItem} from "@/components/modules/Accordion";
import AdvertiseCard from "@/components/partials/AdvertiseCard";
import RangeInput from "@/components/modules/RangeInput";
import Button from "@/components/modules/Button";
import SortModal from "@/components/partials/SortModal";
import FilterModal from "@/components/partials/FilterModal";
import Pagination from "@/components/modules/Pagination";
import CheckBox from "@/components/modules/CheckBox";

// hooks
import {useModal} from "@/hooks/useModal";

const Filters = () => {

    const formik = useFormik({
        initialValues: {
            prices: [2_500_000, 7_500_000],
            hasImage: false,
            categories: []
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data)
        }
    });

    return (
        <div className='hidden md:flex flex-col justify-start items-start gap-y-4 min-w-[280px]'>

            <div className="flex justify-between items-center gap-x-4 w-full">

                <h3 className="flex justify-start items-center gap-x-2 font-bold text-dark text-sm">

                    <LuFilter
                        size={20}
                        className="text-dark"
                    />

                    فیلتر ها

                </h3>

            </div>

            <div className="flex flex-col justify-end items-center gap-y-4 w-full bg-light rounded-lg p-4">

                <Accordion>

                    <AccordionItem
                        header="دسته بندی ها"
                        initialEntered
                    >

                        <CheckBox
                            title="موبایل"
                            name="categories"
                            value="mobile"
                            onChange={formik.handleChange}
                        />

                        <CheckBox
                            title="لپتاپ"
                            name="categories"
                            value="laptop"
                            onChange={formik.handleChange}
                        />

                    </AccordionItem>

                    <AccordionItem
                        header="قیمت"
                        initialEntered
                    >

                        <RangeInput
                            min={0}
                            max={10_000_000}
                            step={1000}
                            values={formik.values.prices}
                            onChange={(values) => formik.setFieldValue("prices", values)}
                        />

                        <div className="flex justify-between items-center gap-x-4 w-full">
                            <span className="text-xs text-gray"> {formik.values.prices[0]?.toLocaleString()} تومان</span>
                            <span className="text-xs text-gray"> {formik.values.prices[1]?.toLocaleString()} تومان</span>
                        </div>

                    </AccordionItem>

                    <AccordionItem
                        header="وضعیت"
                        initialEntered
                    >

                        <CheckBox
                            title="عکس دار"
                            name="hasImage"
                            value="yes"
                            onChange={formik.handleChange}
                        />

                    </AccordionItem>

                </Accordion>

            </div>

            <div className="flex justify-end items-center gap-x-4 w-full">

                <Button
                    variant="contained"
                    color="blue"
                    size="md"
                    startIcon={<LuCheck size={20}/>}
                >
                    ثبت
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
                        size="md"
                        startIcon={<LuFilter size={20}/>}
                        onClick={_handleShowFilterModal}
                    >
                        فیلتر
                    </Button>

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

                    <span className="flex justify-start items-center gap-x-2 font-bold text-dark text-sm ml-2">

                       <LuArrowDownWideNarrow
                           size={20}
                           className="text-dark"
                       />

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