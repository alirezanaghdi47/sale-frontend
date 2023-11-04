// libraries
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

// components
import AdvertiseCard from "@/components/partials/AdvertiseCard";

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import "@/styles/customize/swiper.scss";

const AdvertiseSlider = () => {

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
    )
}

export default AdvertiseSlider;