"use client";

// libraries
import Link from "next/link";
import Image from "next/image";
import {formatDistance} from "date-fns";
import {faIR} from 'date-fns/locale';
import {LuDot, LuPen, LuShare2, LuTrash2} from "react-icons/lu";

// components
import {IconButton} from "@/components/modules/IconButton";

// utils
import {cityList, qualityList} from "@/utils/constants";

const AdvertiseCard = ({advertiseItem, toolbar, disabled}) => {

    return (
        <>
            <article className="relative flex justify-start items-center gap-x-4 bg-light rounded-lg p-2">

                {/*{*/}
                {/*    disabled && (*/}
                {/*        <div*/}
                {/*            className="absolute top-0 left-0 z-10 flex justify-center items-center w-full h-full bg-light/90 rounded-lg">*/}
                {/*            <span className="bg-secondary text-gray font-bold rounded-lg px-4 py-2">*/}
                {/*                {disabled?.message}*/}
                {/*            </span>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*}*/}

                <Link
                    className="flex justify-center items-center"
                    href={`${process.env.BASE_URL}/advertises/${advertiseItem?._id}`}
                >
                    <Image
                        src={advertiseItem?.gallery[0]}
                        alt="advertise"
                        width={120}
                        height={120}
                        className="min-w-[120px] w-[120px] min-h-[120px] h-[120px] object-cover object-center rounded-lg"
                    />
                </Link>

                <div className="flex flex-col justify-center items-start gap-y-4 w-full">

                    <Link
                        className="flex flex-col justify-center items-start w-full"
                        href={`${process.env.BASE_URL}/advertises/${advertiseItem?._id}`}
                    >
                        <h3 className="text-sm font-bold text-dark line-clamp-1">
                            {advertiseItem?.title}
                        </h3>
                    </Link>

                    <div className="flex flex-col justify-center items-start gap-y-2 w-full">

                        <span className="w-full text-xs text-gray line-clamp-1">
                            {qualityList.find(qualityItem => qualityItem.value === advertiseItem?.quality)?.label}
                        </span>

                        <span className="flex justify-start items-center w-full text-xs text-gray line-clamp-1">
                            {advertiseItem?.price.toLocaleString()}
                            &nbsp;
                            تومان
                        </span>

                        <span className="flex justify-start items-center w-full text-xs text-gray line-clamp-1">
                            {formatDistance(new Date(advertiseItem?.createdAt), new Date(), {addSuffix: true, locale: faIR})}
                            <LuDot
                                size={20}
                                className="text-current"
                            />
                            {cityList.find(cityItem => cityItem.value === advertiseItem?.city)?.label}
                        </span>

                    </div>

                </div>

                {
                    toolbar && (

                        <div className="flex flex-col justify-start items-start gap-y-2 mb-auto">

                            {
                                toolbar.share && (
                                    <IconButton
                                        variant="text"
                                        color="gray"
                                        onClick={toolbar.share.onClick}
                                    >
                                        <LuShare2
                                            size={16}
                                            className="text-current"
                                        />
                                    </IconButton>
                                )
                            }

                            {
                                toolbar.edit && (
                                    <IconButton
                                        variant="text"
                                        color="yellow"
                                        onClick={toolbar.edit.onClick}
                                    >
                                        <LuPen
                                            size={16}
                                            className="text-current"
                                        />
                                    </IconButton>
                                )
                            }

                            {
                                toolbar.delete && (
                                    <IconButton
                                        variant="text"
                                        color="red"
                                        onClick={toolbar.delete.onClick}
                                    >
                                        <LuTrash2
                                            size={16}
                                            className="text-current"
                                        />
                                    </IconButton>
                                )
                            }

                        </div>
                    )
                }

            </article>

        </>
    )
}

export default AdvertiseCard;