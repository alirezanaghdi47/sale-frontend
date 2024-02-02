'use client';

// libraries
import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {useMediaQuery} from "@react-hooks-library/core";

// components
import Gallery from "@/components/widgets/advertise/Gallery";
import Location from "@/components/widgets/advertise/Location";
import Summary from "@/components/widgets/advertise/Summary";
import Detail from "@/components/widgets/advertise/Detail";
import Features from "@/components/widgets/advertise/Features";
import ContactUs from "@/components/widgets/advertise/ContactUs";
import RelativeAdvertises from "@/components/widgets/advertise/RelativeAdvertises";

// services
import {getAdvertiseService, getRelativeAdvertiseService} from "@/services/advertiseService";

const Content = () => {

    const params = useParams();
    const isTablet = useMediaQuery("(min-width: 768px)");

    const {isPending: isPendingAdvertise, data: advertiseData} = useQuery({
        queryKey: ['advertise', {advertiseSlug: params?.advertiseSlug}],
        queryFn: () => getAdvertiseService(params?.advertiseSlug as string)
    });

    const {isPending: isPendingRelativeAdvertise, data: relativeAdvertiseData} = useQuery({
        queryKey: ['relativeAdvertise', {advertiseSlug: params?.advertiseSlug}],
        queryFn: () => getRelativeAdvertiseService(params?.advertiseSlug as string)
    });

    return !isPendingAdvertise && (

        <div className="flex flex-col justify-start items-start gap-y-4 w-full">

            <div className="flex flex-col md:flex-row justify-start items-start gap-4 w-full">

                <div
                    className="md:sticky md:top-[86px] flex flex-col justify-start items-center gap-y-4 w-full md:w-[320px] lg:w-[360px]">
                    <Gallery data={advertiseData?.data}/>
                    {isTablet && <Location data={advertiseData?.data}/>}
                </div>

                <div className="flex flex-col justify-start items-center gap-y-4 w-full">
                    <Summary data={advertiseData?.data}/>
                    <Detail data={advertiseData?.data}/>
                    <Features data={advertiseData?.data}/>
                    <ContactUs data={advertiseData?.data}/>
                    {!isTablet && <Location data={advertiseData?.data}/>}
                </div>

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

export default Content;