'use client';

// libraries
import {usePathname , useRouter , useSearchParams} from "next/navigation";
import {useFormik} from "formik";
import {LuCheck} from "react-icons/lu";

// components
import {Modal, ModalHeader, ModalBody, ModalFooter} from "@/components/modules/Modal";
import {Accordion, AccordionItem} from "@/components/modules/Accordion";
import {Button} from "@/components/modules/Button";
import CheckBox from "@/components/modules/CheckBox";
import RangeInput from "@/components/modules/RangeInput";
import SwitchBox from "@/components/modules/SwitchBox";

// utils
import {categoryList} from "@/utils/constants";
import {generateQueryParams} from "@/utils/functions";

const FilterModal = ({isOpenModal, onCloseModal}) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            prices: searchParams.get("startPrice") && searchParams.get("endPrice") ? [parseInt(searchParams.get("startPrice")), parseInt(searchParams.get("endPrice"))] : [0, 100_000_000],
            categories: searchParams.getAll("category") ?? []
        },
        onSubmit: async (result) => {
            const query = generateQueryParams({
                search: searchParams.get("search"),
                page: searchParams.get("page"),
                sort: searchParams.get("sort"),
                startPrice: result.prices[0],
                endPrice: result.prices[1],
                categories: result.categories,
                cities: searchParams.getAll("city"),
            });
            router.push(`${pathname}?${query}`);
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

                    <AccordionItem header="دسته بندی ها">

                        {
                            categoryList.map(categoryItem =>
                                <label
                                    key={categoryItem?.id}
                                    htmlFor={`checkbox-${categoryItem?.value}`}
                                    className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
                                >

                                    <CheckBox
                                        name="categories"
                                        value={categoryItem?.value}
                                        checked={formik.values.categories.includes(categoryItem?.value)}
                                        onChange={formik.handleChange}
                                    />

                                    <span className="text-xs font-bold text-dark">
                                        {categoryItem?.label}
                                    </span>

                                </label>
                            )
                        }

                    </AccordionItem>

                    <AccordionItem header="قیمت">

                        <RangeInput
                            min={0}
                            max={100_000_000}
                            step={10_000_000}
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

                    {/*<AccordionItem header="وضعیت">*/}

                    {/*    <label*/}
                    {/*        htmlFor="switchbox-hasImage"*/}
                    {/*        className="flex justify-start items-center gap-x-2 w-full cursor-pointer"*/}
                    {/*    >*/}

                    {/*        <SwitchBox*/}
                    {/*            name="hasImage"*/}
                    {/*            value={true}*/}
                    {/*            checked={formik.values.hasImage}*/}
                    {/*            onChange={formik.handleChange}*/}
                    {/*        />*/}

                    {/*        <span className="text-xs font-bold text-dark">*/}
                    {/*            عکس دار*/}
                    {/*        </span>*/}

                    {/*    </label>*/}

                    {/*</AccordionItem>*/}

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
                        onClick={formik.handleSubmit}
                    >
                        ثبت
                    </Button>
                }
            />

        </Modal>
    )
}

export default FilterModal;