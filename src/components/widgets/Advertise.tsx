'use client';

// libraries
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {LuBookmark, LuClock, LuDollarSign, LuLayers, LuMapPin, LuPhone, LuShare2} from "react-icons/lu";

// components
import AdvertiseCard from "@/components/partials/AdvertiseCard";

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import "@/styles/libraries/swiper.scss";

// utils
import {copyToClipboard} from "@/utils/functions";

const Gallery = () => {

    return (
        <section className="flex justify-center items-center w-full">

            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={true}
                className="w-full"
            >

                {
                    Array(8).fill("").map((item, index) =>
                        <SwiperSlide key={index}>

                            <Image
                                src="/assets/images/card-image.jpg"
                                alt="advertise"
                                width={240}
                                height={240}
                                className="w-full min-w-[240px] h-full min-h-[240px] max-h-[360px] object-cover object-center rounded-lg"
                            />

                        </SwiperSlide>
                    )
                }

            </Swiper>

        </section>
    )
}

const Map = () => {

    return (
        <div className="flex justify-center items-center w-full bg-light rounded-lg p-4">
            leaflet map
        </div>
    )
}

const DesktopMap = () => {
    return (
        <section className="hidden md:flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-dark font-bold">
                موقعیت مکانی
            </h3>

            <Map/>

        </section>
    )
}

const MobileMap = () => {
    return (
        <section className="flex md:hidden flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-dark font-bold">
                موقعیت مکانی
            </h3>

            <Map/>

        </section>
    )
}

const Summary = () => {

    return (
        <section
            className="flex flex-col justify-center items-start gap-y-4 w-full h-full">

            <h1 className="text-lg text-dark font-bold line-clamp-1">
                بنز کلاس C C230، مدل ۲۰۰۶
            </h1>

            <ul className="flex flex-col justify-center items-start gap-y-4 w-full">

                <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                    <span className="text-gray">
                        <LuLayers size={20}/>
                    </span>
                    ماشین
                </li>

                <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                     <span className="text-gray">
                        <LuMapPin size={20}/>
                    </span>
                    تهران ، افسریه
                </li>

                <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                     <span className="text-gray">
                        <LuClock size={20}/>
                    </span>
                    6 روز پیش
                </li>

                <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                     <span className="text-gray">
                        <LuDollarSign size={20}/>
                    </span>
                    6 میلیارد تومان
                </li>

            </ul>

            <div className="flex justify-between items-center gap-x-4 w-full mt-auto">

                <button className="flex justify-center items-center gap-x-2 bg-blue text-light rounded-lg px-4 py-2">
                     <span className="text-light">
                        <LuPhone size={20}/>
                    </span>
                    09195610753
                </button>

                <div className="flex justify-end items-center gap-x-4">

                    <button className="text-gray p-2">
                        <LuBookmark size={20}/>
                    </button>

                    <button
                        className="text-gray p-2"
                        onClick={() => copyToClipboard("link")}
                    >
                        <LuShare2 size={20}/>
                    </button>

                </div>

            </div>

        </section>
    )
}

const Description = () => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-dark font-bold">
                توضیحات
            </h3>

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4">
                <p className="text-sm text-dark leading-8">
                    دوستان معاوضه ندارم با هیچی فقط نقد
                    فول بیرنگ
                    شیش سیلندر
                    بکر و بکر. صفر تا صد ماشین فابریک بدون کوچکترین دست خوردگی حتی سوئیچ ماشین هنوز فابریک خودشه
                    سند شخصی وارداتی
                    بدون مشابه تو کشور لنگش تو ایران مطمعنن با این شرایط انگشت شماره. در بهترین وضعیت نگهداری
                    قیمت مقطوع تخفیف نداره دوستان
                    بازدید ساری پارکینگ منزل بنده
                    با احترام هم پیامک هم تماس پاسخگو هستم
                    لطفا با شماره در ارتباط باشید
                    سپاس عزیزان
                </p>
            </div>

        </section>
    )
}

const Specification = () => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-dark font-bold">
                مشخصات
            </h3>

            <ul className="flex flex-col justify-start items-start gap-y-4 w-full bg-light rounded-lg p-4">

                <li className="flex justify-between items-center gap-x-4 w-full">

                    <span className="text-dark font-bold text-sm line-clamp-1">وضعیت موتور</span>

                    <span className="text-gray text-sm line-clamp-1">سالم</span>

                </li>

                <li className="flex justify-between items-center gap-x-4 w-full">

                    <span className="text-dark font-bold text-sm line-clamp-1">وضعیت شاسی‌ها</span>

                    <span className="text-gray text-sm line-clamp-1">پلمپ</span>

                </li>

                <li className="flex justify-between items-center gap-x-4 w-full">

                    <span className="text-dark font-bold text-sm line-clamp-1">وضعیت بدنه</span>

                    <span className="text-gray text-sm line-clamp-1">سالم و بی‌خط و خش</span>

                </li>

            </ul>

        </section>
    )
}

export const RelativeAdvertises = () => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-dark font-bold">
                آگهی های مشابه
            </h3>

            <div className="flex justify-center items-center w-full">

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    navigation={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1
                        },
                        576: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        },
                    }}
                    className="w-full"
                >

                    {
                        Array(8).fill("").map((item, index) =>
                            <SwiperSlide key={index}>
                                <AdvertiseCard
                                    advertise={item}
                                    toolbar={false}
                                />
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>

        </section>
    )
}

const Visual = () => {

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full md:w-[320px] lg:w-[480px]">

            <Gallery/>

            <DesktopMap/>

        </div>
    )
}

const Content = () => {

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Summary/>

            <Description/>

            <Specification/>

            <MobileMap/>

        </div>
    )
}

export const Advertise = () => {

    return (
        <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full">

            <Visual/>

            <Content/>

        </div>
    )
}