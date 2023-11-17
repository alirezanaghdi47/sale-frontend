'use client';

// libraries
import {useState} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {useMediaQuery} from "@react-hooks-library/core";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {
    LuBookmark,
    LuCalendar,
    LuDollarSign,
    LuLayers,
    LuShare2,
} from "react-icons/lu";

// components
import {IconButton} from "@/components/modules/IconButton";
import AdvertiseCard from "@/components/partials/AdvertiseCard";
const Map = dynamic(() => import("@/components/widgets/Map") , {ssr: false});

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "@/styles/customize/swiper.scss";

// utils
import {copyToClipboard} from "@/utils/functions";

const Gallery = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="flex flex-col justify-center items-center w-full gap-y-4">

            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full"
            >
                {
                    Array(8).fill("").map((item, index) =>
                        <SwiperSlide
                            key={index}
                        >

                            <Image
                                src="/assets/images/card-image.jpg"
                                alt="advertise"
                                width={240}
                                height={240}
                                className="w-full min-w-[240px] h-full min-h-[240px] object-cover object-center rounded-lg"
                            />

                        </SwiperSlide>
                    )
                }
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={16}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full"
            >
                {
                    Array(8).fill("").map((item, index) =>
                        <SwiperSlide
                            key={index}
                        >

                            <Image
                                src="/assets/images/card-image.jpg"
                                alt="advertise"
                                width={40}
                                height={40}
                                className="w-full min-w-[40px] max-w-[120px] h-full min-h-[40px] max-h-[120px] object-cover object-center rounded-lg"
                            />

                        </SwiperSlide>
                    )
                }
            </Swiper>

        </section>
    )
}

const Location = () => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-dark font-bold">
                موقعیت فروشنده
            </h3>

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-4">
                <Map/>
            </div>

        </section>
    )
}

const ContactUs = () => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-dark font-bold">
                ارتباط با فروشنده
            </h3>

            <div className="flex justify-between items-center gap-x-4 w-full bg-light rounded-lg p-4">

                <p className="text-xs text-gray">
                    شما میتوانید با شماره همراه
                    <span className="text-dark font-bold text-sm mx-2">
                        09195610753
                    </span>
                    با فروشنده در ارتباط باشید
                </p>

            </div>

        </section>
    )
}

const Summary = () => {

    const _handleShareAdvertise = async () => {

        const {notification} = await import("@/components/modules/Notification");

        return copyToClipboard("link")
            .then(res => notification(res , "success"))
            .catch(err => notification(err , "error"));
    }

    return (
        <section className="flex justify-between items-center gap-x-2 w-full">

            <h1 className="text-base text-dark font-bold line-clamp-1">
                بنز کلاس C C230، مدل ۲۰۰۶
            </h1>

            <div className="flex justify-end items-center gap-x-4">

                <IconButton
                    variant="text"
                    color='gray'
                >
                    <LuBookmark size={20}/>
                </IconButton>

                <IconButton
                    variant="text"
                    color='gray'
                    onClick={_handleShareAdvertise}
                >
                    <LuShare2 size={20}/>
                </IconButton>

            </div>

        </section>
    )
}

const Features = () => {

    return (
        <section className="flex flex-col justify-start items-start gap-y-2 w-full h-full">

            <h3 className="text-dark font-bold">
                ویژگی های محصول
            </h3>

            <div className="flex flex-col justify-center items-start gap-y-4 w-full h-full bg-light rounded-lg p-4">

                <ul className="grid grid-cols-3 gap-4 w-full">

                    <li className="col-span-1 flex flex-col justify-center items-center gap-y-2 text-gray text-sm line-clamp-1">
                        <LuLayers size={24}/>
                        ماشین
                    </li>

                    <li className="col-span-1 flex flex-col justify-center items-center gap-y-2 text-gray text-sm line-clamp-1">
                        <LuCalendar size={24}/>
                        6 روز پیش
                    </li>

                    <li className="col-span-1 flex flex-col justify-center items-center gap-y-2 text-gray text-sm line-clamp-1">
                        <LuDollarSign size={24}/>
                        6 میلیارد تومان
                    </li>

                </ul>

            </div>

        </section>
    )
}

const Description = () => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-dark font-bold">
                بررسی محصول
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
                مشخصات محصول
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
                        768: {
                            slidesPerView: 2
                        },
                        1200: {
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

    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <div
            className="md:sticky md:top-[86px] flex flex-col justify-start items-center gap-y-4 w-full md:w-[360px] lg:w-[480px]">

            <Summary/>

            <Gallery/>

            {isTablet && <ContactUs/>}

            {isTablet && <Location/>}

        </div>
    )
}

const Content = () => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Description/>

            <Features/>

            <Specification/>

            {!isTablet && <ContactUs/>}

            {!isTablet && <Location/>}

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