"use client";

// libraries
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

// components
import {DoughnutChart, LineChart} from "@/components/widgets/Chart";
import AdvertiseCard from "@/components/partials/AdvertiseCard";

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import "@/styles/customize/swiper.scss";

const ActivityCharts = () => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-2 w-full'>

            <ul className='grid grid-cols-12 justify-start items-center gap-4 w-full'>

                <li className="col-span-12 lg:col-span-5 flex flex-col juitems-start items-start gap-y-2 h-full">

                    <h1 className="text-dark font-bold ">
                        میزان فعالیت
                    </h1>

                    <div className="flex justify-center items-center w-full h-[300px] bg-light rounded-lg p-4">

                        <DoughnutChart
                            data={{
                                labels: ['خرید', 'فروش'],
                                datasets: [
                                    {
                                        data: [12, 19],
                                        backgroundColor: [
                                            'rgba(16, 185, 129, 0.5)',
                                            'rgba(239, 68, 68, 0.5)',
                                        ],
                                        borderColor: [
                                            'rgba(16, 185, 129, 1)',
                                            'rgba(239, 68, 68, 1)',
                                        ],
                                        borderWidth: 1,
                                    },
                                ],
                            }}
                        />

                    </div>

                </li>

                <li className="col-span-12 lg:col-span-7 flex flex-col juitems-start items-start gap-y-2 h-full">

                    <h1 className="text-dark font-bold ">
                        تاریخچه عملکردی
                    </h1>

                    <div className="flex justify-center items-center w-full h-[300px] bg-light rounded-lg p-4">

                        <LineChart
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                    {
                                        fill: false,
                                        label: 'خرید',
                                        data: [20, 50, 35, 20, 10, 5, 11],
                                        borderColor: 'rgba(16, 185, 129, 1)',
                                        backgroundColor: 'rgba(16, 185, 129, 0.5)',
                                        borderWidth: 1,
                                    },
                                    {
                                        fill: false,
                                        label: 'فروش',
                                        data: [100, 20, 45, 0, 5, 5, 20],
                                        borderColor: 'rgba(239, 68, 68, 1)',
                                        backgroundColor: 'rgba(239, 68, 68, 0.5)',
                                        borderWidth: 1,
                                    },
                                ],
                            }}
                        />

                    </div>

                </li>

            </ul>

        </section>
    )
}

const InProgressAdvertises = () => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-2 w-full'>

            <h1 className="text-dark font-bold text-base">
                آگهی های فعال
            </h1>

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
                            slidesPerView: 1
                        },
                        992: {
                            slidesPerView: 2
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

export const Dashboard = () => {

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <ActivityCharts/>

            <InProgressAdvertises/>

        </div>
    )
}