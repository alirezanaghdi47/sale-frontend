'use client';

// libraries
import {useParams} from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import {useSession} from "next-auth/react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules';
import {useMediaQuery} from "@react-hooks-library/core";
import {formatDistance} from "date-fns";
import {faIR} from "date-fns/locale";
import {
    LuBookmark,
    LuBookmarkMinus,
    LuCalendar,
    LuDollarSign,
    LuLayers,
    LuMapPin,
    LuShare2,
} from "react-icons/lu";

// components
import {IconButton} from "@/components/modules/IconButton";
import AdvertiseCard from "@/components/partials/AdvertiseCard";
const Map = dynamic(() => import("@/components/widgets/Map"), {ssr: false});

// services
import {addFavoriteService, deleteFavoriteService, getIsMyFavoriteService} from "@/services/favoriteService";
import {getAdvertiseService, getRelativeAdvertiseService} from "@/services/advertiseService";

// styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "@/styles/customize/swiper.scss";

// utils
import {copyToClipboard} from "@/utils/functions";
import {categoryList, cityList} from "@/utils/constants";

const Gallery = ({data}) => {

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
                    data?.gallery?.map(galleryItem =>
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

const Location = ({data}) => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-sm text-dark font-bold">
                موقعیت فروشنده
            </h3>

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-2">
                <Map location={[data?.latitude, data?.longitude]}/>
            </div>

        </section>
    )
}

const ContactUs = ({data}) => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-sm text-dark font-bold">
                ارتباط با فروشنده
            </h3>

            <div className="flex justify-between items-center gap-x-4 w-full bg-light rounded-lg p-2">

                <p className="text-xs text-gray leading-8">
                    شما میتوانید با شماره همراه
                    <span className="bg-secondary text-dark font-bold rounded-lg px-2 py-1 mx-2">
                        {data?.userId?.phoneNumber}
                    </span>
                    با فروشنده در ارتباط باشید
                </p>

            </div>

        </section>
    )
}

const Summary = ({data}) => {

    const {data: session , status } = useSession();
    const queryClient = useQueryClient();

    const {isPending: isPendingMyFavorite, data: isMyFavoriteData} = useQuery({
        queryKey: ['isMyFavorite', {advertiseId: data?._id}],
        queryFn: () => getIsMyFavoriteService(data?._id),
        enabled: status === "authenticated"
    });

    const {mutate: mutateAddToFavorite} = useMutation({
        mutationFn: (data) => addFavoriteService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/components/modules/Notification");

            if (data.status === "success") {
                queryClient.invalidateQueries({queryKey: ["isMyFavorite"]});
                notification(data.message, "success");
            } else {
                notification(data.message, "error");
            }
        }
    });

    const {mutate: mutateDeleteFromFavorite} = useMutation({
        mutationFn: (data) => deleteFavoriteService(data),
        onSuccess: async (data) => {
            const {notification} = await import("@/components/modules/Notification");

            if (data.status === "success") {
                queryClient.invalidateQueries({queryKey: ["isMyFavorite"]});
                notification(data.message, "success");
            } else {
                notification(data.message, "error");
            }
        }
    });

    const _handleAddToFavorite = async (advertiseId) => {

        const {notification} = await import("@/components/modules/Notification");

        if (status !== "authenticated") {
            return notification("ابتدا وارد حساب کاربری خود شوید", "error");
        }

        mutateAddToFavorite(advertiseId);

    }

    const _handleDeleteFromFavorite = async (advertiseId) => {

        const {notification} = await import("@/components/modules/Notification");

        if (status !== "authenticated") {
            return notification("ابتدا وارد حساب کاربری خود شوید", "error");
        }

        mutateDeleteFromFavorite(advertiseId);

    }

    const _handleShareAdvertise = async (data) => {

        const {notification} = await import("@/components/modules/Notification");

        copyToClipboard(data).then(res => {
            if (res === "unSupported"){
                notification("کپی شد" , "success");
            }
        });

    }

    return (
        <section className="flex justify-between items-start gap-x-2 w-full">

            <h1 className="text-base text-dark font-bold line-clamp-2 leading-8">
                {data?.title}
            </h1>

            <div className="flex justify-end items-center gap-x-4">

                <IconButton
                    variant="text"
                    color={!isMyFavoriteData?.data || status !== "authenticated" ? 'gray' : 'red'}
                    onClick={() => isMyFavoriteData?.data ? _handleDeleteFromFavorite(data?._id) : _handleAddToFavorite(data?._id)}
                >
                    {
                        (!isMyFavoriteData?.data || status !== "authenticated") ? (
                            <LuBookmark
                                size={16}
                                className="text-current"
                            />
                        ) : (
                            <LuBookmarkMinus
                                size={16}
                                className="text-current"
                            />
                        )
                    }
                </IconButton>

                <IconButton
                    variant="text"
                    color='gray'
                    onClick={() => _handleShareAdvertise({
                            title: data?.title,
                            text: data?.description,
                            url: `${process.env.BASE_URL}/advertises/${data?._id}`,
                        })
                    }
                >
                    <LuShare2
                        size={16}
                        className="text-current"
                    />
                </IconButton>

            </div>

        </section>
    )
}

const Features = ({data}) => {

    return (
        <section className="flex flex-col justify-start items-start gap-y-2 w-full h-full">

            <h3 className="text-sm text-dark font-bold">
                مشخصات محصول
            </h3>

            <div className="flex flex-col justify-center items-start gap-y-4 w-full h-full bg-light rounded-lg px-2 py-4">

                <ul className="grid grid-cols-12 gap-8 w-full">

                    <li className="col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center gap-y-2 text-gray text-xs font-bold line-clamp-1">
                        <LuMapPin
                            size={20}
                            className="text-current"
                        />
                        {cityList.find(cityItem => cityItem.value === data?.city)?.label}
                    </li>

                    <li className="col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center gap-y-2 text-gray text-xs font-bold line-clamp-1">
                        <LuLayers
                            size={20}
                            className="text-current"
                        />
                        {categoryList.find(categoryItem => categoryItem.value === data?.category)?.label}
                    </li>

                    <li className="col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center gap-y-2 text-gray text-xs font-bold line-clamp-1">
                        <LuCalendar
                            size={20}
                            className="text-current"
                        />
                        {formatDistance(new Date(data?.createdAt), new Date(), {addSuffix: true, locale: faIR})}
                    </li>

                    <li className="col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center gap-y-2 text-gray text-xs font-bold line-clamp-1">
                        <LuDollarSign
                            size={20}
                            className="text-current"
                        />
                        {data?.price.toLocaleString()}
                        &nbsp;
                        تومان
                    </li>

                </ul>

            </div>

        </section>
    )
}

const Description = ({data}) => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-sm text-dark font-bold">
                بررسی محصول
            </h3>

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-2">

                <p className="text-xs text-dark leading-8">
                    {data?.description}
                </p>

            </div>

        </section>
    )
}

export const RelativeAdvertises = ({data}) => {

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
                        data.map((item, index) =>
                            <SwiperSlide key={index}>
                                <AdvertiseCard
                                    advertiseItem={item}
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

const Visual = ({data}) => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <div
            className="md:sticky md:top-[86px] flex flex-col justify-start items-center gap-y-4 w-full md:w-[320px] lg:w-[360px]">

            <Gallery data={data}/>

            {isTablet && <Location data={data}/>}

        </div>
    )
}

const Content = ({data}) => {

    const isTablet = useMediaQuery("(min-width: 768px)");

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Summary data={data}/>

            <Description data={data}/>

            <Features data={data}/>

            <ContactUs data={data}/>

            {!isTablet && <Location data={data}/>}

        </div>
    )
}

export const Advertise = () => {

    const params = useParams();

    const {isPending: isPendingAdvertise, data: advertiseData} = useQuery({
        queryKey: ['advertise', {advertiseId: params.advertiseId}],
        queryFn: () => getAdvertiseService(params.advertiseId)
    });

    const {isPending: isPendingRelativeAdvertise, data: relativeAdvertiseData} = useQuery({
        queryKey: ['relativeAdvertise', {advertiseId: params.advertiseId}],
        queryFn: () => getRelativeAdvertiseService(params.advertiseId)
    });

    return !isPendingAdvertise && (

        <div className="flex flex-col justify-start items-start gap-y-4 w-full">

            <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full">

                <Visual data={advertiseData?.data}/>

                <Content data={advertiseData?.data}/>

            </div>

            {
                !isPendingRelativeAdvertise && relativeAdvertiseData?.data?.length >= 3 && (

                    <div className="flex justify-center items-center w-full">

                        <RelativeAdvertises data={relativeAdvertiseData?.data}/>

                    </div>
                )
            }

        </div>
    )
}