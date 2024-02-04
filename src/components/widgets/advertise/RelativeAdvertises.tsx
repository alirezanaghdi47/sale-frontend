'use client';

// libraries
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules';

// components
import AdvertiseCard from "@/components/partials/AdvertiseCard";

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "@/styles/customize/swiper.scss";

// types
import {IAdvertise} from "@/types/global";

const RelativeAdvertises = ({data}: {data: IAdvertise[]}) => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-sm text-dark font-bold">
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
                        data.map(item =>
                            <SwiperSlide key={item._id}>
                                <AdvertiseCard advertiseItem={item}/>
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>

        </section>
    )
}

export default RelativeAdvertises;
