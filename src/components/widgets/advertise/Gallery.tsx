'use client';

// libraries
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules';

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "@/styles/customize/swiper.scss";

// types
import {IAdvertise} from "@/types/global";

const Gallery = ({data}: {data: IAdvertise}) => {

    return (
        <section className="flex flex-col justify-center items-center w-full gap-y-4 bg-light rounded-lg p-2">

            <Swiper
                spaceBetween={16}
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                className="w-full"
            >
                {
                    data?.gallery.map(galleryItem =>
                        <SwiperSlide key={galleryItem}>
                            <Image
                                src={galleryItem}
                                alt="advertise"
                                width={240}
                                height={240}
                                className="w-full min-h-[320px] h-[320px] lg:min-h-[360px] lg:h-[360px] object-cover object-center rounded-lg"
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>

        </section>
    )
}

export default Gallery;