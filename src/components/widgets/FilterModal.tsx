'use client';

// libraries
import {useFormik} from "formik";
import {LuCheck, LuX} from "react-icons/lu";

// components
import {Modal, ModalHeader, ModalBody, ModalFooter} from "@/components/modules/Modal";
import {Accordion, AccordionItem} from "@/components/modules/Accordion";
import {Button} from "@/components/modules/Button";
import CheckBox from "@/components/modules/CheckBox";
import RangeInput from "@/components/modules/RangeInput";
import SwitchBox from "@/components/modules/SwitchBox";

const FilterModal = ({isOpenModal, onCloseModal}) => {

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
        <Modal
            isOpenModal={isOpenModal}
            onCloseModal={onCloseModal}
            width="full"
            height="full"
            position="any"
        >

            <ModalHeader
                title="فیلتر"
                onCloseModal={onCloseModal}
            />

            <ModalBody>

                <Accordion>

                    <AccordionItem
                        initialEntered
                        header="دسته بندی ها"
                    >

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

                    <AccordionItem
                        initialEntered
                        header="قیمت"
                    >

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

                    <AccordionItem
                        initialEntered
                        header="وضعیت"
                    >

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

            </ModalBody>

            <ModalFooter
                // cancelButton={
                //     <Button
                //         variant="text"
                //         color="red"
                //         startIcon={<LuX size={20}/>}
                //     >
                //         حذف همه
                //     </Button>
                // }
                submitButton={
                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={<LuCheck size={20}/>}
                    >
                        ثبت
                    </Button>
                }
            />

        </Modal>
    )
}

export default FilterModal;