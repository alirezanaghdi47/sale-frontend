'use client';

// libraries
import Image from "next/image";
import {useMediaQuery} from "@react-hooks-library/core";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import toast from "react-hot-toast";
import {
    LuBookmark,
    LuClock,
    LuDollarSign,
    LuLayers,
    LuMapPin,
    LuPhone,
    LuShare2,
} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";
import {IconButton} from "@/components/modules/IconButton";
import AdvertiseSlider from "@/components/partials/AdvertiseSlider";
import GalleryModal from "@/components/widgets/GalleryModal";
import Map from "@/components/widgets/Map";

// hooks
import {useModal} from "@/hooks/useModal";

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import "@/styles/addon/swiper.scss";

// utils
import {copyToClipboard} from "@/utils/functions";

const Gallery = () => {

    const {
        isOpenModal: isOpenGalleryModal,
        _handleShowModal: _handleShowGalleryModal,
        _handleHideModal: _handleHideGalleryModal
    } = useModal();

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
                        <SwiperSlide
                            key={index}
                            onClick={_handleShowGalleryModal}
                        >

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

            <GalleryModal
                isOpenModal={isOpenGalleryModal}
                onCloseModal={_handleHideGalleryModal}
            />

        </section>
    )
}

const Location = () => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">
            <Map/>
        </section>
    )
}

const Summary = () => {

    return (
        <section className="flex flex-col justify-start items-start gap-y-2 w-full h-full">

            <div className="flex flex-col justify-center items-start gap-y-4 w-full h-full bg-light rounded-lg p-4">

                <h1 className="text-lg text-dark font-bold line-clamp-1">
                    بنز کلاس C C230، مدل ۲۰۰۶
                </h1>

                <ul className="flex flex-col justify-center items-start gap-y-4 w-full">

                    <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                        <LuLayers size={20}/>
                        ماشین
                    </li>

                    <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                        <LuMapPin size={20}/>
                        تهران ، افسریه
                    </li>

                    <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                        <LuClock size={20}/>
                        6 روز پیش
                    </li>

                    <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                        <LuDollarSign size={20}/>
                        6 میلیارد تومان
                    </li>

                </ul>

                <div className="flex justify-between items-center gap-x-4 w-full mt-auto">

                    <Button
                        variant="contained"
                        color="blue"
                        startIcon={<LuPhone size={20}/>}
                    >
                        09195610753
                    </Button>

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
                            onClick={() => copyToClipboard("link").then(res => toast.success(res)).catch(err => toast.error(err))}
                        >
                            <LuShare2 size={20}/>
                        </IconButton>

                    </div>

                </div>

            </div>

        </section>
    )
}

const Description = () => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

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

            <AdvertiseSlider/>

        </section>
    )
}

const Visual = () => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <div className="md:sticky md:top-[86px] flex flex-col justify-start items-center gap-y-4 w-full md:w-[320px] lg:w-[480px]">

            <Gallery/>

            {isTablet && <Location/>}

        </div>
    )
}

const Content = () => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Summary/>

            <Description/>

            <Specification/>

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