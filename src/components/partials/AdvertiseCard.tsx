// libraries
import Link from "next/link";
import Image from "next/image";
import {LuPencil, LuShare2, LuTrash2} from "react-icons/lu";

const AdvertiseCard = ({advertise , toolbar}) => {

    return (
        <article className="flex justify-start items-center gap-x-4 bg-light rounded-lg p-4">

            <Link
                className="flex justify-center items-center"
                href="/advertises/benz-2006"
            >
                <Image
                    src="/assets/images/card-image.jpg"
                    alt="advertise"
                    width={120}
                    height={120}
                    className="min-w-[120px] min-h-[120px] object-cover object-center rounded-lg"
                />
            </Link>

            <div className="flex flex-col justify-center items-start gap-y-4">

                <Link
                    className="flex flex-col justify-center items-start"
                    href="/advertises/benz-2006"
                >
                    <h3 className="text-sm font-bold text-gray line-clamp-1">
                        بنز کلاسیک مدل ۲۰۰۶
                    </h3>
                </Link>

                <div className="flex flex-col justify-center items-start gap-y-2">

                    <span className="text-xs text-gray line-clamp-1">
                        در حد نو
                    </span>

                    <span className="text-xs text-gray line-clamp-1">
                        ۱٬۱۸۰٬۰۰۰٬۰۰۰ تومان
                    </span>

                    <span className="text-xs text-gray line-clamp-1">
                        ۶ روز پیش در تهران، افسریه
                    </span>

                </div>

            </div>

            {
                toolbar && (

                    <div className="flex flex-col justify-start items-start gap-y-2 mr-auto mb-auto">

                        {
                            toolbar.edit && (
                                <button className="text-gray p-2">
                                    <LuPencil size={20}/>
                                </button>
                            )
                        }

                        {
                            toolbar.share && (
                                <button className="text-gray p-2">
                                    <LuShare2 size={20}/>
                                </button>
                            )
                        }

                        {
                            toolbar.delete && (
                                <button className="text-red p-2">
                                    <LuTrash2 size={20}/>
                                </button>
                            )
                        }

                    </div>
                )
            }

        </article>
    )
}

export default AdvertiseCard;