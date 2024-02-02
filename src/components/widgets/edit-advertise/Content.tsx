"use client";

// libraries
import {useEffect} from "react";
import {useParams, useRouter} from "next/navigation";
import {useQuery} from "@tanstack/react-query";

// components
import Gallery from "@/components/widgets/edit-advertise/Gallery";
import Detail from "@/components/widgets/edit-advertise/Detail";
import Vendor from "@/components/widgets/edit-advertise/Vendor";

// modules
import Stepper from "@/modules/Stepper";

// helpers
import {FadeTransition} from "@/modules/Transition";

// hooks
import {useSegment} from "@/hooks/useSegment";

// services
import {getMyAdvertiseService} from "@/services/myAdvertiseService";

// utils
import {addEditAdvertiseStepList} from "@/utils/constants";

const Content = () => {

    const router = useRouter();
    const params = useParams();
    const {segment, _handlePrevSegment, _handleNextSegment, _handleSegment} = useSegment();

    const {isFetching: isPendingAdvertise, data: advertiseData} = useQuery({
        queryKey: ['myAdvertise', {advertiseId: params.advertiseId}],
        queryFn: () => getMyAdvertiseService(params.advertiseId)
    });

    useEffect(() => {

        if (!isPendingAdvertise && advertiseData?.data) {
            _handleSegment({
                gallery: advertiseData?.data?.gallery,
                category: advertiseData?.data?.category,
                quality: advertiseData?.data?.quality,
                price: advertiseData?.data?.price,
                title: advertiseData?.data?.title,
                description: advertiseData?.data?.description,
                city: advertiseData?.data?.city,
                latitude: advertiseData?.data?.latitude,
                longitude: advertiseData?.data?.longitude,
            });
        }

    }, [isPendingAdvertise]);

    return !isPendingAdvertise && (

        <div className="flex flex-col justify-start items-center gap-y-4 w-full">

            <Stepper
                stepList={addEditAdvertiseStepList}
                step={segment?.active + 1}
            />

            <FadeTransition active={segment.active === 0}>
                <Gallery
                    data={segment?.data}
                    setData={(data: any) => _handleSegment(data)}
                    onCancel={() => router.push("/account/my-advertises")}
                    onNext={_handleNextSegment}
                />
            </FadeTransition>

            <FadeTransition active={segment.active === 1}>
                <Detail
                    data={segment?.data}
                    setData={(data: any) => _handleSegment(data)}
                    onPrev={_handlePrevSegment}
                    onNext={_handleNextSegment}
                />
            </FadeTransition>

            <FadeTransition active={segment.active === 2}>
                <Vendor
                    data={segment?.data}
                    setData={(data: any) => _handleSegment(data)}
                    onPrev={_handlePrevSegment}
                    onSubmit={() => router.push("/account/my-advertises")}
                />
            </FadeTransition>

        </div>
    )
}

export default Content;