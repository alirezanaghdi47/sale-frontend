'use client';

// libraries
import Image from "next/image";
import Link from "next/link";

const AdvertiseCard = () => {

    return (
        <Link href="/car-benz/benz-2006">
            <article className="flex justify-start items-center gap-x-4 bg-light rounded-lg p-4">
                <div className="flex justify-center items-center">
                    <Image
                        src="/assets/images/card-image.jpg"
                        alt="advertise"
                        width={120}
                        height={120}
                        className="min-w-[120px] min-h-[120px] object-cover object-center rounded-lg"
                    />
                </div>
                <div className="flex flex-col justify-center items-start gap-y-4">
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text-sm font-bold text-gray line-clamp-1">
                            بنز کلاسیک مدل ۲۰۰۶
                        </h3>
                    </div>
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
            </article>
        </Link>
    )
}

export default AdvertiseCard;