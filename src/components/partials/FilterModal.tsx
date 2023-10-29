'use client';

// libraries
import Modal from "react-modal";
import {useFormik} from "formik";
import {LuCheck, LuX} from "react-icons/lu";

// components
import {Accordion, AccordionItem} from "@/components/modules/Accordion";
import CheckBox from "@/components/modules/CheckBox";
import RangeInput from "@/components/modules/RangeInput";

const FilterModal = ({isOpenModal, onCloseModal}) => {

    const formik = useFormik({
        initialValues:{
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
        <Modal
            isOpen={isOpenModal}
            onRequestClose={onCloseModal}
            ariaHideApp={false}
            className="flex flex-col justify-start items-center gap-y-4 w-full h-full md:max-w-md md:h-max bg-light md:rounded-lg p-4"
            overlayClassName="fixed top-0 left-0 z-30 flex justify-start items-start md:justify-center md:items-center w-full h-full bg-gray/75 md:p-4"
        >

            <div className="flex justify-between items-center w-full gap-x-4">

                <h3 className="text-dark font-bold">
                    فیلتر
                </h3>

                <button
                    className='text-red p-2'
                    onClick={onCloseModal}
                >
                    <LuX size={20}/>
                </button>

            </div>

            <Accordion>

                <AccordionItem
                    header="دسته بندی ها"
                    initialEntered
                >

                    <CheckBox
                        title="موبایل"
                        name="categories"
                        value="mobile"
                        onChange={(value) => formik.setFieldValue("categories" , value)}
                    />

                    <CheckBox
                        title="لپتاپ"
                        name="categories"
                        value="laptop"
                        onChange={(value) => formik.setFieldValue("categories" , value)}
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
                        onChange={(values) => formik.setFieldValue("prices" , values)}
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
                        value="hasImage"
                        onChange={(value) => formik.setFieldValue("hasImage" , value)}
                    />

                </AccordionItem>

            </Accordion>

            <div className="flex justify-end items-center gap-x-2 w-full mt-auto">

                <button
                    className='flex justify-center items-center gap-x-2 text-gray text-sm font-bold px-4 py-2'
                    onClick={onCloseModal}
                >
                    <LuX
                        size={20}
                        className='text-current'
                    />
                    انصراف
                </button>

                <button
                    className='flex justify-center items-center gap-x-2 bg-blue text-light text-sm font-bold rounded-lg px-4 py-2'
                    onClick={onCloseModal}
                >
                    <LuCheck
                        size={20}
                        className='text-current'
                    />
                    ثبت
                </button>

            </div>

        </Modal>
    )
}

export default FilterModal;