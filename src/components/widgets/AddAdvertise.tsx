"use client";

// libraries
import {useRef} from "react";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useFormik} from "formik";
import {LuCheck, LuChevronLeft, LuChevronRight, LuX} from "react-icons/lu";
import {CSSTransition} from 'react-transition-group';

// components
import {Button} from "@/components/modules/Button";
import Stepper from "@/components/modules/Stepper";
import SelectBox from "@/components/modules/SelectBox";
import TextInput from "@/components/modules/TextInput";
import TextArea from "@/components/modules/TextArea";
import NumberInput from "@/components/modules/NumberInput";
import FileInput from "@/components/modules/FileInput";
const Map3 = dynamic(() => import("@/components/widgets/Map3"), {ssr: false});

// hooks
import {useSegment} from "@/hooks/useSegment";

// services
import {addMyAdvertiseService} from "@/services/myAdvertiseService";

// utils
import {addEditAdvertiseStepList, categoryList, cityList, qualityList} from "@/utils/constants";
import {addAdvertiseDetailSchema, addAdvertiseGallerySchema, addAdvertiseLocationSchema} from "@/utils/validations";

const Gallery = ({data, setData, onCancel, onNext}) => {

    const formik = useFormik({
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

const Detail = ({data, setData, onPrev, onNext}) => {

    const formik = useFormik({
        initialValues: {
            title: data?.title || "",
            category: data?.category || "",
            quality: data?.quality || "",
            price: data?.price || "",
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

const Vendor = ({data, setData, onPrev, onSubmit}) => {

    const queryClient = useQueryClient();

    const {mutate, isPending} = useMutation({
        mutationFn: (data) => addMyAdvertiseService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/components/modules/Notification");

            if (data.status === "success") {
                queryClient.invalidateQueries({queryKey: ["allMyAdvertise", {page: 1, sort: "newest"}]});
                onSubmit();
                notification(data.message, "success");
            } else {
                notification(data.message, "error");
            }
        }
    });

    const formik = useFormik({
        initialValues: {
            city: data?.city || null,
            latitude: data?.latitude || null,
            longitude: data?.longitude || null,
        },
        validationSchema: addAdvertiseLocationSchema,
        onSubmit: async (result) => {
            setData({...data, ...result});
            mutate({...data, ...result});
        }
    });

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4">

                <ul className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-xs font-bold">
                            شهر
                        </span>

                        <SelectBox
                            name="city"
                            isSearchable
                            options={cityList}
                            value={cityList.find(cityItem => cityItem.value === formik.values.city)}
                            onChange={(value) => formik.setFieldValue("city", value?.value)}
                        />

                        {
                            formik.errors.city && formik.touched.city && (
                                <p className='text-red text-xs'>
                                    {formik.errors.city}
                                </p>
                            )
                        }

                    </li>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                        <span className="text-gray text-xs font-bold">
                            آدرس
                        </span>

                        <div className='w-full h-[320px] bg-secondary rounded-lg p-4'>
                            <Map3
                                setLocation={(value) => {
                                    formik.setFieldValue("latitude", value.latitude);
                                    formik.setFieldValue("longitude", value.longitude);
                                }}
                            />
                        </div>

                        {
                            formik.touched?.latitude && formik.errors?.latitude && (
                                <p className='text-red text-xs'>
                                    {formik.errors.latitude}
                                </p>
                            )
                        }

                        {
                            formik.touched?.longitude && formik.errors?.longitude && (
                                <p className='text-red text-xs'>
                                    {formik.errors.longitude}
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
                        color="green"
                        startIcon={
                            <LuCheck
                                size={16}
                                className="text-current"
                            />
                        }
                        disabled={isPending}
                        onClick={formik.handleSubmit}
                    >
                        ثبت
                    </Button>

                </div>

            </div>

        </section>
    )
}

const Section = ({children, activeSection}) => {

    const nodeRef = useRef(null);

    return (
        <div
            className={`${activeSection ? 'flex' : 'hidden'} w-full h-full`}
            ref={nodeRef}
        >

            <CSSTransition
                nodeRef={nodeRef}
                in={activeSection}
                timeout={300}
                classNames="fade-in"
                mountOnEnter
                unmountOnExit
            >

                <div
                    className="flex flex-col justify-start items-start gap-y-4 w-full h-full"
                    ref={nodeRef}
                >
                    {children}
                </div>

            </CSSTransition>

        </div>
    )
}

export const AddAdvertise = () => {

    const router = useRouter();
    const {segment, _handlePrevSegment, _handleNextSegment, _handleSegment} = useSegment();

    return (

        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Stepper
                stepList={addEditAdvertiseStepList}
                step={segment?.active + 1}
            />

            <Section activeSection={segment.active === 0}>

                <Gallery
                    data={segment?.data}
                    setData={(data) => _handleSegment(data)}
                    onCancel={() => router.push("/account/my-advertises")}
                    onNext={_handleNextSegment}
                />

            </Section>

            <Section activeSection={segment.active === 1}>

                <Detail
                    data={segment?.data}
                    setData={(data) => _handleSegment(data)}
                    onPrev={_handlePrevSegment}
                    onNext={_handleNextSegment}
                />

            </Section>

            <Section activeSection={segment.active === 2}>

                <Vendor
                    data={segment?.data}
                    setData={(data) => _handleSegment(data)}
                    onPrev={_handlePrevSegment}
                    onSubmit={() => router.push("/account/my-advertises")}
                />

            </Section>

        </div>

    )
}