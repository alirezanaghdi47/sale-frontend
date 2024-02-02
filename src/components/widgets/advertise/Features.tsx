'use client';

// libraries
import {formatDistance} from "date-fns";
import {faIR} from "date-fns/locale";
import {
    LuCalendar,
    LuDollarSign,
    LuLayers,
    LuMapPin,
} from "react-icons/lu";

// types
import {IAdvertise} from "@/types/global";

// utils
import {categoryList, cityList} from "@/utils/constants";

const Features = ({data}: {data: IAdvertise}) => {

    return (
        <section className="flex flex-col justify-start items-start gap-y-2 w-full h-full">

            <h3 className="text-sm text-dark font-bold">
                مشخصات محصول
            </h3>

            <div
                className="flex flex-col justify-center items-start gap-y-4 w-full h-full bg-light rounded-lg px-2 py-4">

                <ul className="grid grid-cols-12 gap-y-8 sm:gap-4 w-full">

                    <li className="col-span-12 sm:col-span-3 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center gap-y-2 text-gray text-xs line-clamp-1">
                        <LuMapPin
                            size={16}
                            className="text-current"
                        />
                        {cityList.find(cityItem => cityItem.value === data?.city)?.label}
                    </li>

                    <li className="col-span-12 sm:col-span-3 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center gap-y-2 text-gray text-xs line-clamp-1">
                        <LuLayers
                            size={16}
                            className="text-current"
                        />
                        {categoryList.find(categoryItem => categoryItem.value === data?.category)?.label}
                    </li>

                    <li className="col-span-12 sm:col-span-3 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center gap-y-2 text-gray text-xs line-clamp-1">
                        <LuCalendar
                            size={16}
                            className="text-current"
                        />
                        {formatDistance(new Date(data?.createdAt), new Date(), {addSuffix: true, locale: faIR})}
                    </li>

                    <li className="col-span-12 sm:col-span-3 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center gap-y-2 text-gray text-xs line-clamp-1">
                        <LuDollarSign
                            size={16}
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

export default Features;