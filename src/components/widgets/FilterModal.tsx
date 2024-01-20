'use client';

// libraries
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useFormik} from "formik";
import {LuCheck, LuX} from "react-icons/lu";

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
            startPrice: searchParams.get("startPrice") ? parseInt(searchParams.get("startPrice")) : 0,
            endPrice: searchParams.get("endPrice") ? parseInt(searchParams.get("endPrice")) : 100_000_000,
            categories: searchParams.getAll("category") ?? []
        },
        onSubmit: async (result) => {
            const query = generateQueryParams({
                search: searchParams.get("search"),
                page: searchParams.get("page"),
                sort: searchParams.get("sort"),
                startPrice: result.startPrice,
                endPrice: result.endPrice,
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

                                    <span className="text-xs text-dark">
                                        {categoryItem?.label}
                                    </span>

                                </label>
                            )
                        }

                    </AccordionItem>

                    <AccordionItem header="قیمت ( تومان )">

                        <RangeInput
                            min={0}
                            max={100_000_000}
                            step={10_000_000}
                            values={[formik.values.startPrice , formik.values.endPrice]}
                            onChange={(values) => {
                                formik.setFieldValue("startPrice", values[0]);
                                formik.setFieldValue("endPrice", values[1]);
                            }}
                        />

                        <div className="flex justify-between items-center gap-x-4 w-full">

                            <span className="text-xs text-gray">
                                {formik.values.endPrice?.toLocaleString()}
                            </span>

                            <span className="text-xs text-gray">
                                {formik.values.startPrice?.toLocaleString()}
                            </span>

                        </div>

                    </AccordionItem>

                </Accordion>

            </ModalBody>

            <ModalFooter
                cancelButton={
                    (searchParams.getAll("category").length > 0 || searchParams.get("startPrice") || searchParams.get("endPrice")) && (
                        <Button
                            variant="text"
                            color="red"
                            startIcon={<LuX size={16}/>}
                            onClick={() => {
                                const query = generateQueryParams({
                                    search: searchParams.get("search"),
                                    page: searchParams.get("page"),
                                    sort: searchParams.get("sort"),
                                    startPrice: 0,
                                    endPrice: 0,
                                    categories: [],
                                    cities: searchParams.getAll("city"),
                                });
                                router.push(`${pathname}?${query}`);
                            }}
                        >
                            حذف فیلتر ها
                        </Button>
                    )
                }
                submitButton={
                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={<LuCheck size={16}/>}
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
