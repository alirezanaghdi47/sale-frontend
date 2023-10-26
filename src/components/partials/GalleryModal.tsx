'use client';

// libraries
import {useState} from "react";
import Image from "next/image";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {LuX} from "react-icons/lu";

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "@/styles/libraries/swiper.scss";

const GalleryModal = ({isOpenModal, onCloseModal}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={onCloseModal}
            ariaHideApp={false}
            className="flex flex-col justify-start items-center gap-y-4 w-full h-full bg-light p-4"
            overlayClassName="fixed top-0 left-0 z-30 flex justify-start items-start w-full h-full bg-gray/75"
        >

            <div className="flex justify-between items-center w-full gap-x-4">

                <h3 className="text-dark font-bold">
                    گالری تصاویر
                </h3>

                <button
                    className='text-red p-2'
                    onClick={onCloseModal}
                >
                    <LuX size={20}/>
                </button>

            </div>

            <div className="flex flex-col justify-center items-center gap-y-4 w-full max-w-[480px] my-auto">

                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
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
                                    className="w-full min-w-[40px] h-full min-h-[40px] object-cover object-center rounded-lg"
                                />

                            </SwiperSlide>
                        )
                    }
                </Swiper>

            </div>

        </Modal>
    )
}

export default GalleryModal;