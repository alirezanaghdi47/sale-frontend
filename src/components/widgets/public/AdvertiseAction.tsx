'use client';

// libraries
import {LuBookmark, LuClock, LuDollarSign, LuLayers, LuMapPin, LuPhone, LuShare2} from "react-icons/lu";

const AdvertiseAction = () => {
    return (
        <section className="order-2 md:order-1 col-span-12 md:col-span-7 flex flex-col justify-center items-start gap-y-4 h-full">
            <h1 className="text-lg text-dark font-bold line-clamp-1">
                بنز کلاس C C230، مدل ۲۰۰۶
            </h1>
            <ul className="flex flex-col justify-center items-start gap-y-4 w-full">
                <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                    <LuLayers size={20}/>
                    ماشین
                </li>
                <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                    <LuMapPin size={20}/>
                    تهران ، افسریه
                </li>
                <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                    <LuClock size={20}/>
                    6 روز پیش
                </li>
                <li className="flex justify-start items-center gap-x-2 text-gray text-sm line-clamp-1">
                    <LuDollarSign size={20}/>
                    6 میلیارد تومان
                </li>
            </ul>
            <div className="flex justify-between items-center gap-x-4 w-full mt-auto">
                <button className="flex justify-center items-center gap-x-2 bg-blue text-light rounded-lg px-4 py-2">
                    <LuPhone size={20}/>
                    تماس
                </button>
                <div className="flex justify-end items-center gap-x-4">
                    <button className="text-gray p-2">
                        <LuBookmark size={20}/>
                    </button>
                    <button className="text-gray p-2">
                        <LuShare2 size={20}/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AdvertiseAction;