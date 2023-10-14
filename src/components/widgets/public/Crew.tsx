'use client';

// libraries
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import "@/styles/libraries/react-swiper.scss";

const Slider = () => {

    return (
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
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 4
                    },
                }}
                className="w-full"
            >
                {
                    Array(8).fill("").map((item, index) =>

                        <SwiperSlide key={index}>

                            <div className="flex flex-col justify-center items-center gap-y-2">

                                <Image
                                    src="/assets/images/avatar.jpg"
                                    alt="avatar"
                                    width={80}
                                    height={80}
                                    className="object-cover object-center rounded-full"
                                />

                                <h3 className="text-gray font-bold text-sm">
                                    علیرضا نقدی
                                </h3>

                                <p className="text-gray text-xs">
                                    برنامه نویس فرانت اند
                                </p>

                            </div>

                        </SwiperSlide>
                    )
                }

            </Swiper>

        </div>
    )
}

const Crew = () => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-dark font-bold">
                همکاران ما
            </h3>

            <Slider/>

        </section>
    )
}

export default Crew;