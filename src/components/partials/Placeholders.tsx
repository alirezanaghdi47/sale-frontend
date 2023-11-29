"use client";

// libraries
import Skeleton from 'react-loading-skeleton';

// styles
import 'react-loading-skeleton/dist/skeleton.css';

export const SortBarPlaceholder = () => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <div className="flex justify-between items-center gap-x-4 w-full">

                <div className="hidden md:flex justify-start items-center gap-x-2">

                    <Skeleton
                        baseColor="#cbd5e1"
                        highlightColor="#94a3b8"
                        width={100}
                        height={20}
                    />

                    <Skeleton
                        baseColor="#cbd5e1"
                        highlightColor="#94a3b8"
                        width={80}
                        height={20}
                    />

                    <Skeleton
                        baseColor="#cbd5e1"
                        highlightColor="#94a3b8"
                        width={80}
                        height={20}
                    />

                </div>

                <div className="flex md:hidden justify-start items-center gap-x-4">

                    <Skeleton
                        baseColor="#cbd5e1"
                        highlightColor="#94a3b8"
                        width={120}
                        height={40}
                    />

                </div>

                <Skeleton
                    baseColor="#cbd5e1"
                    highlightColor="#94a3b8"
                    width={40}
                    height={20}
                    className="mr-auto"
                />

            </div>

        </section>
    )
}

export const AdvertiseListPlaceholder = () => {

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <ul className="grid grid-cols-12 gap-4 w-full">

                {
                    Array(6).fill("").map((item , index) =>
                        <li
                            key={index}
                            className="col-span-12 lg:col-span-6"
                        >
                            <Skeleton
                                baseColor="#cbd5e1"
                                highlightColor="#94a3b8"
                                height={156}
                            />
                        </li>
                    )
                }

            </ul>

        </section>
    )
}

export const PaginationPlaceholder = () => {

    return (
        <div className="flex justify-center items-center gap-x-2 w-full">

            {
                Array(5).fill("").map((item , index) =>
                    <Skeleton
                        key={index}
                        baseColor="#cbd5e1"
                        highlightColor="#94a3b8"
                        width={32}
                        height={32}
                    />
                )
            }

        </div>
    )
}

