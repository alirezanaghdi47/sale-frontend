'use client';

// libraries
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

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

        </div>
    )
}

const AdvertiseGallery = () => {

    return (
        <section className="order-1 md:order-2 col-span-12 md:col-span-5 flex justify-center items-center">

            <Slider/>

        </section>
    )
}

export default AdvertiseGallery;