"use client";

// libraries
import {FormikProps, useFormik} from "formik";
import {LuChevronLeft, LuX} from "react-icons/lu";

// modules
import {Button} from "@/modules/Button";
import FileInput from "@/modules/FileInput";

// types
import {AddAdvertiseGalleryType} from "@/types/components";
import {AddAdvertiseGalleryFormType} from "@/types/constants";

// utils
import {addAdvertiseGallerySchema} from "@/utils/validations";

const Gallery = ({data, setData, onCancel, onNext}: AddAdvertiseGalleryType) => {

    const formik: FormikProps<AddAdvertiseGalleryFormType> = useFormik({
        enableReinitialize: true,
        initialValues: {
            gallery: data?.gallery || [],
        },
        validationSchema: addAdvertiseGallerySchema,
        onSubmit: async (result) => {
            setData({...data, ...result});
            onNext();
        }
    });

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4">

                <div className="flex flex-col justify-start items-start gap-y-2 w-full">

                    <span className="text-gray text-xs font-bold">
                        عکس ها
                    </span>

                    <FileInput
                        name="gallery"
                        maxFiles={2}
                        acceptTypes={{
                            "image/png": [],
                            "image/jpeg": [],
                            "image/jpg": [],
                        }}
                        values={formik.values.gallery}
                        onChange={(values) => formik.setFieldValue("gallery", values)}
                    />

                    {
                        formik.errors.gallery && formik.touched.gallery && (
                            <p className='text-red text-xs'>
                                {formik.errors.gallery}
                            </p>
                        )
                    }

                </div>

                <div className="flex justify-end items-center gap-x-2 w-full">

                    <Button
                        variant="text"
                        color="red"
                        startIcon={
                            <LuX
                                size={16}
                                className="text-current"
                            />
                        }
                        onClick={onCancel}
                    >
                        انصراف
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

export default Gallery;