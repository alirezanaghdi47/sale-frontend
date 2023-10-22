"use client";

// libraries
// import dynamic from "next/dynamic";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// components
import AdvertiseCard from "@/components/partials/AdvertiseCard";

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import "@/styles/libraries/swiper.scss";

const ActivityCharts = () => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-2 w-full'>

            <ul className='grid grid-cols-12 justify-start items-center gap-4 w-full'>

                <li className="col-span-12 flex flex-col juitems-start items-start gap-y-2">

                    <h1 className="text-dark font-bold ">
                        میزان درآمد به مخارج
                    </h1>

                    <div className="flex justify-center items-center w-full bg-light rounded-lg p-4">

                        donut chart

                        {/*<Chart*/}
                        {/*    type="donut"*/}
                        {/*    options={{*/}
                        {/*        chart: {*/}
                        {/*            type: 'donut',*/}
                        {/*        },*/}
                        {/*        responsive: [{*/}
                        {/*            breakpoint: 320,*/}
                        {/*            options: {*/}
                        {/*                chart: {*/}
                        {/*                    width: 200*/}
                        {/*                },*/}
                        {/*                legend: {*/}
                        {/*                    position: 'bottom'*/}
                        {/*                }*/}
                        {/*            }*/}
                        {/*        }]*/}
                        {/*    }}*/}
                        {/*    series={[44, 55, 41, 17, 15]}*/}
                        {/*/>*/}

                    </div>

                </li>

                <li className="col-span-12 flex flex-col juitems-start items-start gap-y-2">

                    <h1 className="text-dark font-bold ">
                        تاریخچه عملکردی
                    </h1>

                    <div className="flex justify-center items-center w-full bg-light rounded-lg p-4">
                        line chart
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

            <div className="flex justify-start items-center w-full">

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    navigation
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