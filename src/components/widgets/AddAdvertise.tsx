"use client";

// libraries
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {useFormik} from "formik";
import {LuCheck, LuChevronLeft, LuChevronRight, LuX} from "react-icons/lu";
import {CSSTransition} from 'react-transition-group';

// components
import {Button} from "@/components/modules/Button";
import Stepper from "@/components/modules/Stepper";
import TextArea from "@/components/modules/TextArea";
import SelectBox from "@/components/modules/SelectBox";
import TextInput from "@/components/modules/TextInput";
import NumberInput from "@/components/modules/NumberInput";
import FileInput from "@/components/modules/FileInput";

// utils
import {addEditAdvertiseStepList, monthList, timeList} from "@/utils/constants";


import L from "leaflet";

// assets
import markerIcon from "../../../public/assets/images/marker.svg";

// styles
import "leaflet/dist/leaflet.css";

const Map = () => {

    const map = useRef();

    useEffect(() => {

        let marker = null;

        const layers = {
            "osm": L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }),
        };

        // config leaflet
        map.current = L.map('map', {
            zoomControl: false,
            drawControl: false,
        }).setView(new L.LatLng(35.696, 51.362), 17);

        // set initial layer
        map.current.addLayer(layers.osm);

        // add zoom button
        L.control.zoom({
            position: "topright"
        }).addTo(map.current);

        // customize icon
        const customMarker = L.icon({
            shadowUrl: null,
            iconSize: new L.Point(36, 36),
            iconUrl: markerIcon.src
        });

        // add pointer
        map.current.on("click", (e) => {
            console.log(e.latlng);

            if (marker) map.current.removeLayer(marker);

            marker = new L.marker(e.latlng, {
                icon: customMarker
            }).addTo(map.current);

        });

        return () => map.current.remove();

    }, []);

    return (
        <div id="map" className='z-10 w-full h-full'/>
    )
}


const Detail = ({step, setStep}) => {

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            images: [],
            title: "",
            category: "",
            description: "",
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data);
            setStep("two");
        }
    });

    return (
        <section className={`${step === "one" ? "flex" : "hidden"} flex-col justify-center items-start gap-y-2 w-full`}>

            <div className="flex flex-col justify-center items-start gap-y-8 w-full bg-light rounded-lg p-4">

                <ul className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                        <span className="text-gray text-sm font-bold">
                            عکس ها
                        </span>

                        <FileInput
                            name="images"
                            count={2}
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
                            دسته بندی
                        </span>

                        <SelectBox
                            name="category"
                            isSearchable
                            options={monthList}
                            value={formik.values.category}
                            onChange={(value) => formik.setFieldValue("category", value)}
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
                        startIcon={<LuX size={20}/>}
                        onClick={() => {
                            setStep("one");
                            router.push("/account/my-advertises");
                        }}
                    >
                        انصراف
                    </Button>

                    <Button
                        variant="contained"
                        color="blue"
                        endIcon={<LuChevronLeft size={20}/>}
                        onClick={() => formik.handleSubmit()}
                    >
                        بعدی
                    </Button>

                </div>

            </div>

        </section>
    )
}

const Specification = ({step, setStep}) => {

    const formik = useFormik({
        initialValues: {
            specifications: []
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data);
            setStep("two");
        }
    });

    return (
        <section className={`${step === "two" ? "flex" : "hidden"} flex-col justify-center items-start gap-y-2 w-full`}>

            <div className="flex flex-col justify-center items-start gap-y-8 w-full bg-light rounded-lg p-4">

                <span className="text-gray text-sm font-bold">
                    ویژگی های محصول
                </span>

                <ul className='flex flex-col justify-start items-start gap-y-4 w-full'>

                    <li className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                        <div
                            className="col-span-5 md:col-span-4 flex flex-col justify-center items-start gap-y-2 w-full">

                           <span className="text-gray text-sm font-bold">
                                عنوان
                            </span>

                            <TextInput
                                name="title"
                                // value={formik.values.title}
                                // onChange={formik.handleChange}
                            />

                            {/*{*/}
                            {/*    formik.errors.title && formik.touched.title && (*/}
                            {/*        <p className='text-red text-xs'>*/}
                            {/*            {formik.errors.title}*/}
                            {/*        </p>*/}
                            {/*    )*/}
                            {/*}*/}

                        </div>

                        <div
                            className="col-span-7 md:col-span-8 flex flex-col justify-center items-start gap-y-2 w-full">

                           <span className="text-gray text-sm font-bold">
                                توضیحات
                            </span>

                            <TextInput
                                name="title"
                                // value={formik.values.title}
                                // onChange={formik.handleChange}
                            />

                            {/*{*/}
                            {/*    formik.errors.title && formik.touched.title && (*/}
                            {/*        <p className='text-red text-xs'>*/}
                            {/*            {formik.errors.title}*/}
                            {/*        </p>*/}
                            {/*    )*/}
                            {/*}*/}

                        </div>

                    </li>

                </ul>

                <div className="flex justify-end items-center gap-x-2 w-full">

                    <Button
                        variant="text"
                        color="gray"
                        startIcon={<LuChevronRight size={20}/>}
                        onClick={() => setStep("one")}
                    >
                        قبلی
                    </Button>

                    <Button
                        variant="contained"
                        color="blue"
                        endIcon={<LuChevronLeft size={20}/>}
                        onClick={() => setStep("three")}
                    >
                        بعدی
                    </Button>

                </div>

            </div>

        </section>
    )
}

const Vendor = ({step, setStep}) => {

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            price: "",
            fromTime: "",
            toTime: "",
            location: null
        },
        // validationSchema: ,
        onSubmit: async (data) => {
            console.log(data);
            setStep("one");
            router.push("/account/my-advertises");
        }
    });

    return (
        <section
            className={`${step === "three" ? "flex" : "hidden"} flex-col justify-center items-start gap-y-2 w-full`}>

            <div className="flex flex-col justify-center items-start gap-y-8 w-full bg-light rounded-lg p-4">

                <ul className='grid grid-cols-12 justify-start items-start gap-4 w-full'>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                         <span className="text-gray text-sm font-bold">
                            قیمت
                        </span>

                        <NumberInput
                            name="price"
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
                            زمان پاسخگویی ( شروع ، پایان )
                        </span>

                        <div className="flex justify-start items-center gap-x-2 w-full">

                            <SelectBox
                                name="fromTime"
                                options={timeList}
                                value={formik.values.fromTime}
                                onChange={(value) => formik.setFieldValue("fromTime", value)}
                            />

                            <SelectBox
                                name="toTime"
                                options={timeList}
                                value={formik.values.toTime}
                                onChange={(value) => formik.setFieldValue("toTime", value)}
                            />

                        </div>

                        {
                            (formik.errors.fromTime && formik.touched.fromTime) ||
                            (formik.errors.toTime && formik.touched.toTime) &&
                            (
                                <p className='text-red text-xs'>
                                    {formik.errors.fromTime || formik.errors.toTime}
                                </p>
                            )
                        }

                    </li>

                    <li className="col-span-12 flex flex-col justify-start items-start gap-y-2">

                        <span className="text-gray text-sm font-bold">
                            آدرس
                        </span>

                        <div className='w-full h-[320px] bg-secondary rounded-lg p-4'>
                            {step === "three" && <Map/>}
                        </div>

                    </li>

                </ul>

                <div className="flex justify-end items-center gap-x-2 w-full">

                    <Button
                        variant="text"
                        color="gray"
                        startIcon={<LuChevronRight size={20}/>}
                        onClick={() => setStep("two")}
                    >
                        قبلی
                    </Button>

                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={<LuCheck size={20}/>}
                        onClick={() => formik.handleSubmit()}
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

    const [step, setStep] = useState("one");

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Stepper
                stepList={addEditAdvertiseStepList}
                step={step}
                setStep={(value) => setStep(value)}
            />

            <Section activeSection={step === "one"}>

                <Detail
                    step={step}
                    setStep={(value) => setStep(value)}
                />

            </Section>

            <Section activeSection={step === "two"}>

                <Specification
                    step={step}
                    setStep={(value) => setStep(value)}
                />

            </Section>

            <Section activeSection={step === "three"}>

                <Vendor
                    step={step}
                    setStep={(value) => setStep(value)}
                />

            </Section>

        </div>
    )
}