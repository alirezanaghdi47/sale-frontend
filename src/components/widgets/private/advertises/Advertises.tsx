'use client';

// components
import AdvertiseCard from "@/components/widgets/private/advertises/AdvertiseCard";

const AdvertiseItem = ({advertiseItem}) => {

    return (
        <li className="col-span-12 lg:col-span-6">
            <AdvertiseCard/>
        </li>
    )
}

const AdvertiseList = () => {

    return (
        <ul className="grid grid-cols-12 gap-4 w-full">

            {
                Array(3).fill("").map((advertiseItem , index) =>
                    <AdvertiseItem
                        key={index}
                        advertiseItem={advertiseItem}
                    />
                )
            }

        </ul>
    )
}

const Advertises = () => {

    return (
        <section className="flex flex-col justify-start items-start gap-y-4 w-full">

            <AdvertiseList/>

        </section>
    )
}

export default Advertises;