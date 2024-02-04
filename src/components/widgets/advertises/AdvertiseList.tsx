"use client";

// libraries
import {forwardRef} from "react";

// components
import AdvertiseCard from "@/components/partials/AdvertiseCard";

// types
import {AdvertisesAdvertiseListType} from "@/types/components";

// eslint-disable-next-line react/display-name
const AdvertiseList = forwardRef(({data}: {data: AdvertisesAdvertiseListType}, ref) => {

    return (
        <section className='flex flex-col justify-start items-start gap-y-4 w-full h-full'>

            <ul className="grid grid-cols-12 gap-4 w-full">

                {
                    data?.pages?.length > 0 && data?.pages?.map(page =>
                        page?.map(advertiseItem =>
                            <li
                                // @ts-ignore
                                ref={ref}
                                key={advertiseItem?._id}
                                className="col-span-12 lg:col-span-6"
                            >
                                <AdvertiseCard advertiseItem={advertiseItem}/>
                            </li>
                        )
                    )
                }

            </ul>

        </section>
    )
})

export default AdvertiseList;