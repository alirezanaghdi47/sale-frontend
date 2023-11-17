"use client";

// libraries
import {useRef} from "react";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";
import {useFormik} from "formik";
import {LuCheck, LuChevronLeft, LuChevronRight} from "react-icons/lu";
import {CSSTransition} from 'react-transition-group';

// components
import {Button} from "@/components/modules/Button";
import Stepper from "@/components/modules/Stepper";
import TextArea from "@/components/modules/TextArea";
import SelectBox from "@/components/modules/SelectBox";
import TextInput from "@/components/modules/TextInput";
import NumberInput from "@/components/modules/NumberInput";
import FileInput from "@/components/modules/FileInput";

const Map2 = dynamic(() => import("@/components/widgets/Map2"), {ssr: false});

// hooks
import {useSegment} from "@/hooks/useSegment";

// utils
import {addEditAdvertiseStepList, categoryList, qualityList} from "@/utils/constants";
import {generateSpecificationFormByCategory, getSpecificationByCategory} from "@/utils/functions";
import {addAdvertiseDetailSchema, addAdvertiseGallerySchema, addAdvertiseLocationSchema} from "@/utils/validations";

const Gallery = ({data , setData, onNext}) => {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            images: data?.images || [],
        },
        validationSchema: addAdvertiseGallerySchema,
        onSubmit: async (res) => {
            onNext();
            setData({...data , ...res});
        }
    });

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4">

                <ul className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                        <span className="text-gray text-sm font-bold">
                            عکس ها
                        </span>

                        <FileInput
                            name="images"
                            maxFiles={2}
                            acceptTypes={{
                                "image/png": [],
                                "image/jpeg": [],
                                "image/jpg": [],
                            }}
                            value={formik.values.images}
                            onChange={(value) => formik.setFieldValue("images", value)}
                        />

                        {
                            formik.errors.images && formik.touched.images && (
                                <p className='text-red text-xs'>
                                    {formik.errors.images}
                                </p>
                            )
                        }

                    </li>

                </ul>

                <div className="flex justify-end items-center gap-x-2 w-full">

                    <Button
                        variant="contained"
                        color="blue"
                        endIcon={<LuChevronLeft size={20}/>}
                        onClick={formik.handleSubmit}
                    >
                        بعدی
                    </Button>

                </div>

            </div>

        </section>
    )
}

const Detail = ({data , setData, onPrev, onNext}) => {

    const formik = useFormik({
        initialValues: {
            title: data?.title || "",
            category: data?.category || "",
            quality: data?.quality || "",
            price: data?.price || "",
            description: data?.description || "",
        },
        validationSchema: addAdvertiseDetailSchema,
        onSubmit: async (res) => {
            onNext();
            setData({...data , ...res});
        }
    });

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4">

                <ul className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-sm font-bold">
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

                         <span className="text-gray text-sm font-bold">
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

                         <span className="text-gray text-sm font-bold">
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

                         <span className="text-gray text-sm font-bold">
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

                         <span className="text-gray text-sm font-bold">
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
                        startIcon={<LuChevronRight size={20}/>}
                        onClick={onPrev}
                    >
                        قبلی
                    </Button>

                    <Button
                        variant="contained"
                        color="blue"
                        endIcon={<LuChevronLeft size={20}/>}
                        onClick={formik.handleSubmit}
                    >
                        بعدی
                    </Button>

                </div>

            </div>

        </section>
    )
}

const Specification = ({data , setData, onPrev, onNext}) => {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: generateSpecificationFormByCategory(data?.category ,data),
        onSubmit: async (res) => {
            onNext();
            setData({...data , ...res});
        }
    });

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4">

                <span className="text-gray text-sm font-bold">
                    ویژگی های محصول
                </span>

                <ul className='flex flex-col justify-start items-start gap-y-4 w-full'>

                    {
                        getSpecificationByCategory(data?.category).map(specItem =>
                            <li
                                key={specItem?.id}
                                className='grid grid-cols-12 justify-start items-start gap-4 w-full'
                            >

                                <div
                                    className="col-span-5 md:col-span-4 lg:col-span-3 flex justify-start items-center w-full h-full">

                                    <span className='text-gray font-bold text-sm line-clamp-1'>
                                        {specItem?.title} :
                                    </span>

                                </div>

                                <div
                                    className="col-span-7 md:col-span-8 lg:col-span-9 flex justify-start items-center w-full">

                                    <TextInput
                                        name={specItem?.value}
                                        value={formik.values[specItem?.value]}
                                        onChange={formik.handleChange}
                                    />

                                </div>

                            </li>
                        )
                    }

                </ul>

                <div className="flex justify-end items-center gap-x-2 w-full">

                    <Button
                        variant="text"
                        color="gray"
                        startIcon={<LuChevronRight size={20}/>}
                        onClick={onPrev}
                    >
                        قبلی
                    </Button>

                    <Button
                        variant="contained"
                        color="blue"
                        endIcon={<LuChevronLeft size={20}/>}
                        onClick={formik.handleSubmit}
                    >
                        بعدی
                    </Button>

                </div>

            </div>

        </section>
    )
}

const Vendor = ({data, onPrev, onSubmit}) => {

    const formik = useFormik({
        initialValues: {
            location: {
                latitude: data?.latitude || null,
                longitude: data?.longitude || null,
            }
        },
        validationSchema: addAdvertiseLocationSchema,
        onSubmit: async (res) => {
            const {notification} = await import("@/components/modules/Notification");
            notification("آگهی با موفقیت اضافه شد" , "success");
            onSubmit();
        }
    });

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4">

                <ul className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                        <span className="text-gray text-sm font-bold">
                            آدرس
                        </span>

                        <div className='w-full h-[320px] bg-secondary rounded-lg p-4'>
                            <Map2 setLocation={(value) => formik.setFieldValue("location" , value)}/>
                        </div>

                        {
                            formik.touched.location && formik.errors.location?.latitude && (
                                <p className='text-red text-xs'>
                                    {formik.errors.location.latitude}
                                </p>
                            )
                        }

                        {
                            formik.touched.location && formik.errors.location?.longitude && (
                                <p className='text-red text-xs'>
                                    {formik.errors.location.longitude}
                                </p>
                            )
                        }

                    </li>

                </ul>

                <div className="flex justify-end items-center gap-x-2 w-full">

                    <Button
                        variant="text"
                        color="gray"
                        startIcon={<LuChevronRight size={20}/>}
                        onClick={onPrev}
                    >
                        قبلی
                    </Button>

                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={<LuCheck size={20}/>}
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

                <Specification
                    data={segment?.data}
                    setData={(data) => _handleSegment(data)}
                    onPrev={_handlePrevSegment}
                    onNext={_handleNextSegment}
                />

            </Section>

            <Section activeSection={segment.active === 3}>

                <Vendor
                    data={segment?.data}
                    onPrev={_handlePrevSegment}
                    onSubmit={() => router.push("/account/my-advertises")}
                />

            </Section>

        </div>
    )
}