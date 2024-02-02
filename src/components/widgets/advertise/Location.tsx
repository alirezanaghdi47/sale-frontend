'use client';

// libraries
import dynamic from "next/dynamic";

// components
const Map = dynamic(() => import("@/components/widgets/advertise/Map"), {ssr: false});

// types
import {IAdvertise} from "@/types/global";

const Location = ({data}: {data: IAdvertise}) => {

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

export default Location;