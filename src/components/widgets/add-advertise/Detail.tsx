"use client";

// libraries
import {FormikProps, useFormik} from "formik";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

// modules
import {Button} from "@/modules/Button";
import SelectBox from "@/modules/SelectBox";
import TextInput from "@/modules/TextInput";
import TextArea from "@/modules/TextArea";
import NumberInput from "@/modules/NumberInput";

// types
import {AddAdvertiseDetailType} from "@/types/components";
import {AddAdvertiseDetailFormType} from "@/types/constants";

// utils
import {categoryList, qualityList} from "@/utils/constants";
import {addAdvertiseDetailSchema} from "@/utils/validations";

const Detail = ({data, setData, onPrev, onNext}: AddAdvertiseDetailType) => {

    const formik: FormikProps<AddAdvertiseDetailFormType> = useFormik({
        initialValues: {
            title: data?.title || "",
            category: data?.category || "",
            quality: data?.quality || "",
            price: data?.price || 0,
            description: data?.description || "",
        },
        validationSchema: addAdvertiseDetailSchema,
        onSubmit: async (result) => {
            setData({...data, ...result});
            onNext();
        }
    });

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4">

                <ul className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            دسته بندی
                        </span>

                        <SelectBox
                            name="category"
                            isSearchable
                            options={categoryList}
                            value={categoryList.find(categoryItem => categoryItem.value === formik.values.category)}
                            // @ts-ignore
                            onChange={(value) => formik.setFieldValue("category", value?.value)}
                        />

                        {
                            formik.errors.category && formik.touched.category && (
                                <p className='text-red text-xs'>
                                    {formik.errors.category}
                                </p>
                            )
                        }

                    </li>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            وضعیت محصول
                        </span>

                        <SelectBox
                            name="quality"
                            isSearchable
                            options={qualityList}
                            value={qualityList.find(qualityItem => qualityItem.value === formik.values.quality)}
                            // @ts-ignore
                            onChange={(value) => formik.setFieldValue("quality", value?.value)}
                        />

                        {
                            formik.errors.quality && formik.touched.quality && (
                                <p className='text-red text-xs'>
                                    {formik.errors.quality}
                                </p>
                            )
                        }

                    </li>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            قیمت ( تومان )
                        </span>

                        <NumberInput
                            name="price"
                            options={{
                                numeral: true,
                                numeralIntegerScale: 12
                            }}
                            value={formik.values.price}
                            onChange={formik.handleChange}
                        />

                        {
                            formik.errors.price && formik.touched.price && (
                                <p className='text-red text-xs'>
                                    {formik.errors.price}
                                </p>
                            )
                        }

                    </li>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            عنوان
                        </span>

                        <TextInput
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />

                        {
                            formik.errors.title && formik.touched.title && (
                                <p className='text-red text-xs'>
                                    {formik.errors.title}
                                </p>
                            )
                        }

                    </li>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            توضیحات
                        </span>

                        <TextArea
                            name="description"
                            rows={10}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />

                        {
                            formik.errors.description && formik.touched.description && (
                                <p className='text-red text-xs'>
                                    {formik.errors.description}
                                </p>
                            )
                        }

                    </li>

                </ul>

                <div className="flex justify-end items-center gap-x-2 w-full">

                    <Button
                        variant="text"
                        color="gray"
                        startIcon={
                            <LuChevronRight
                                size={16}
                                className="text-current"
                            />
                        }
                        onClick={() => {
                            onPrev();
                            setData({...data, ...formik.values});
                        }}
                    >
                        قبلی
                    </Button>

                    <Button
                        variant="contained"
                        color="blue"
                        endIcon={
                            <LuChevronLeft
                                size={16}
                                className="text-current"
                            />
                        }
                        onClick={formik.handleSubmit}
                    >
                        بعدی
                    </Button>

                </div>

            </div>

        </section>
    )
}

export default Detail;
