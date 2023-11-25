"use client";

// libraries
import dynamic from "next/dynamic";
import {useMediaQuery} from "@react-hooks-library/core";
import {useFormik} from "formik";
import {LuArrowDownWideNarrow, LuCheck, LuFilter} from "react-icons/lu";

// components
import {Accordion, AccordionItem} from "@/components/modules/Accordion";
import {Button} from "@/components/modules/Button";
import RangeInput from "@/components/modules/RangeInput";
import CheckBox from "@/components/modules/CheckBox";
import SwitchBox from "@/components/modules/SwitchBox";
import AdvertiseCard from "@/components/partials/AdvertiseCard";
const SortModal = dynamic(() => import("@/components/partials/SortModal") , {ssr: false});
const FilterModal = dynamic(() => import("@/components/widgets/FilterModal") , {ssr: false});

// hooks
import {useModal} from "@/hooks/useModal";
import {useQuery} from "@tanstack/react-query";
import {getAllMyAdvertiseService} from "@/services/myAdvertiseService";
import {useSearchParams} from "next/navigation";

const Actionbar = () => {

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

                <span className="text-base text-gray">
                    12
                    <span className='text-xs mr-1'>
                        مورد
                    </span>
                </span>

            </div>

            <FilterModal
                isOpenModal={isOpenFilterModal && !isTablet}
                onCloseModal={_handleHideFilterModal}
            />

            <SortModal
                isOpenModal={isOpenSortModal && !isTablet}
                onCloseModal={_handleHideSortModal}
            />

        </section>
    )
}

const Sortbar = () => {

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">

            <h3 className="flex justify-start items-center gap-x-2 font-bold text-dark text-sm">
                <LuArrowDownWideNarrow size={20}/>
                مرتب سازی
            </h3>

            <div className="flex justify-start items-center gap-x-2 w-full bg-light rounded-lg p-4">

                <Button
                    size="sm"
                    variant="contained"
                    color="blue"
                >
                    پربازدید ترین
                </Button>

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
        </div>
    )
}

const Filterbar = () => {

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
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">

            <h3 className="flex justify-start items-center gap-x-2 font-bold text-dark text-sm">
                <LuFilter size={20}/>
                فیلتر ها
            </h3>

            <div className="flex flex-col justify-end items-center gap-y-4 w-full bg-light rounded-lg p-4">

                <Accordion>

                    <AccordionItem header="دسته بندی ها">

                        <label
                            htmlFor="checkbox-mobile"
                            className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
                        >

                            <CheckBox
                                name="categories"
                                value="mobile"
                                checked={formik.values.categories.includes("mobile")}
                                onChange={formik.handleChange}
                            />

                            <span className="text-xs font-bold text-dark">
                                موبایل
                            </span>

                        </label>

                        <label
                            htmlFor="checkbox-laptop"
                            className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
                        >

                            <CheckBox
                                name="categories"
                                value="laptop"
                                checked={formik.values.categories.includes("laptop")}
                                onChange={formik.handleChange}
                            />

                            <span className="text-xs font-bold text-dark">
                                لپتاپ
                            </span>

                        </label>

                    </AccordionItem>

                    <AccordionItem header="قیمت">

                        <RangeInput
                            min={0}
                            max={10_000_000}
                            step={1000}
                            values={formik.values.prices}
                            onChange={(values) => formik.setFieldValue("prices", values)}
                        />

                        <div className="flex justify-between items-center gap-x-4 w-full">

                            <span className="text-xs text-gray">
                                {formik.values.prices[1]?.toLocaleString()}
                                &nbsp;
                                تومان
                            </span>

                            <span className="text-xs text-gray">
                                {formik.values.prices[0]?.toLocaleString()}
                                &nbsp;
                                تومان
                            </span>

                        </div>

                    </AccordionItem>

                    <AccordionItem header="وضعیت">

                        <label
                            htmlFor="switchbox-hasImage"
                            className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
                        >

                            <SwitchBox
                                name="hasImage"
                                value={true}
                                checked={formik.values.hasImage}
                                onChange={formik.handleChange}
                            />

                            <span className="text-xs font-bold text-dark">
                                عکس دار
                            </span>

                        </label>

                    </AccordionItem>

                </Accordion>

            </div>

        </div>
    )
}

const Actions = () => {

    return (
        <div className='sticky top-[86px] hidden md:flex flex-col justify-start items-start gap-y-4 min-w-[280px]'>

            <Sortbar/>

            <Filterbar/>

        </div>
    )
}

const AdvertiseList = () => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <ul className="grid grid-cols-12 gap-4 w-full">

                {
                    Array(12).fill("").map((advertiseItem, index) =>
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

            <AdvertiseList/>

        </div>
    )
}

export const Advertises = () => {

    return (
        <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full">

            <Actions/>

            <Content/>

        </div>
    )
}