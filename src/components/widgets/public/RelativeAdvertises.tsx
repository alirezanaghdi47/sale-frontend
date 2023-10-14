'use client';

// libraries
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';

// components
import AdvertiseCard from "@/components/widgets/AdvertiseCard";

// styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "@/styles/libraries/react-swiper.scss";

const MobileSlider = () => {

    return (
        <div className="flex md:hidden justify-center items-center w-full">

            <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{
                    clickable: true
                }}
                className="w-full"
            >

                {
                    Array(8).fill("").map((item, index) =>
                        <SwiperSlide key={index}>
                            <AdvertiseCard/>
                        </SwiperSlide>
                    )
                }

            </Swiper>

        </div>
    )
}

const DesktopSlider = () => {

    return (
        <div className="hidden md:flex justify-center items-center w-full">

            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                navigation={true}
                breakpoints={{
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
                            <AdvertiseCard/>
                        </SwiperSlide>
                    )
                }

            </Swiper>

        </div>
    )
}

const RelativeAdvertises = () => {

    return (
        <section className="order-5 col-span-12 flex flex-col justify-center items-start gap-y-2">

            <h3 className="text-dark font-bold">
                آگهی های مشابه
            </h3>

            <MobileSlider/>

            <DesktopSlider/>

        </section>
    )
}

export default RelativeAdvertises;