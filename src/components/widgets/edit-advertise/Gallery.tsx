"use client";

// libraries
import {useState} from "react";
import Image from "next/image";
import {FormikProps, useFormik} from "formik";
import {LuChevronLeft, LuPlus, LuX} from "react-icons/lu";

// modules
import {Button} from "@/modules/Button";
import FileInput from "@/modules/FileInput";

// types
import {EditAdvertiseGalleryType} from "@/types/components";
import {EditAdvertiseGalleryFormType} from "@/types/constants";

// utils
import {editAdvertiseGallerySchema} from "@/utils/validations";

const Gallery = ({data, setData, onCancel, onNext}: EditAdvertiseGalleryType) => {

    const [showEditGallery, setShowEditGallery] = useState(false);

    // @ts-ignore
    const formik: FormikProps<EditAdvertiseGalleryFormType> = useFormik({
        enableReinitialize: true,
        initialValues: {
            gallery: [],
        },
        validationSchema: editAdvertiseGallerySchema,
        onSubmit: async (result) => {
            if (result.gallery.length > 0) {
                setData({...data, ...result});
            }
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

                    {
                        !showEditGallery && data?.gallery?.length > 0 && (

                            <ul className="flex flex-wrap gap-4 w-full">

                                {
                                    data.gallery.map((galleryItem: string, index: number) =>
                                        <li
                                            key={index}
                                            className=""
                                        >

                                            <Image
                                                src={galleryItem}
                                                alt={galleryItem}
                                                width={120}
                                                height={120}
                                                className="max-w-[120px] w-full h-full object-center object-cover rounded-lg"
                                            />

                                        </li>
                                    )
                                }

                                <li
                                    className="flex flex-col justify-center items-center gap-y-2 w-[120px] h-[120px] bg-secondary rounded-lg p-4 cursor-pointer"
                                    onClick={() => setShowEditGallery(true)}
                                >

                                    <LuPlus
                                        size={16}
                                        className="text-gray"
                                    />

                                    <span className="text-xs font-bold text-gray">
                                        عکس جدید
                                    </span>

                                </li>

                            </ul>

                        )
                    }

                    {
                        showEditGallery && (
                            <>
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
                            </>
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