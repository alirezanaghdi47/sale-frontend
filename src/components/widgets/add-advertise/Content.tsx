"use client";

// libraries
import {useRouter} from "next/navigation";

// modules
import Stepper from "@/modules/Stepper";

// helpers
import {FadeTransition} from "@/modules/Transition";
import Gallery from "@/components/widgets/add-advertise/Gallery";
import Detail from "@/components/widgets/add-advertise/Detail";
import Vendor from "@/components/widgets/add-advertise/Vendor";

// hooks
import {useSegment} from "@/hooks/useSegment";

// utils
import {addEditAdvertiseStepList} from "@/utils/constants";

const Content = () => {

    const router = useRouter();
    const {segment, _handlePrevSegment, _handleNextSegment, _handleSegment} = useSegment();

    return (

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

export default Content