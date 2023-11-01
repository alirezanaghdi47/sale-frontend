'use client';

// libraries
import {useState} from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';

// components
import {Modal, ModalHeader, ModalBody} from "@/components/modules/Modal";

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "@/styles/addon/swiper.scss";

const GalleryModal = ({isOpenModal, onCloseModal}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Modal
            isOpenModal={isOpenModal}
            onCloseModal={onCloseModal}
            width="full"
            height="full"
            position="any"
        >

            <ModalHeader
                title="گالری تصاویر"
                onCloseModal={onCloseModal}
            />

            <ModalBody center>

                <div className="flex flex-col justify-center items-center gap-y-4 w-full max-w-[480px] my-auto">

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
                                        className="w-full min-w-[40px] h-full min-h-[40px] object-cover object-center rounded-lg"
                                    />

                                </SwiperSlide>
                            )
                        }
                    </Swiper>

                </div>

            </ModalBody>

        </Modal>
    )
}

export default GalleryModal;