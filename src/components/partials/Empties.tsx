"use client";

// libraries
import Image from "next/image";
import {useRouter} from "next/navigation";
import {LuChevronRight, LuUser} from "react-icons/lu";

// modules
import {Button} from "@/modules/Button";

export const AdvertiseListEmpty = () => {

    return (
        <section
            className='flex flex-col justify-center items-center gap-y-4 w-full h-full my-8'>

            <Image
                src="/assets/images/no-data.svg"
                alt="no-data"
                priority
                width={120}
                height={120}
                className="w-full max-w-[120px] h-full object-cover object-center"
            />

            <h3 className="text-sm font-bold text-gray">
                داده ای یافت نشد
            </h3>

        </section>
    )
}

export const FavoriteListEmpty = () => {

    return (
        <section
            className='flex flex-col justify-center items-center gap-y-4 w-full h-full my-8'>

            <Image
                src="/assets/images/no-data.svg"
                alt="no-data"
                priority
                width={120}
                height={120}
                className="w-full max-w-[120px] h-full object-cover object-center"
            />

            <h3 className="text-sm font-bold text-gray">
                داده ای یافت نشد
            </h3>

        </section>
    )
}

export const MyAdvertiseListEmpty = () => {

    return (
        <section
            className='flex flex-col justify-center items-center gap-y-4 w-full h-full my-8'>

            <Image
                src="/assets/images/no-data.svg"
                alt="no-data"
                priority
                width={120}
                height={120}
                className="w-full max-w-[120px] h-full object-cover object-center"
            />

            <h3 className="text-sm font-bold text-gray">
                داده ای یافت نشد
            </h3>

        </section>
    )
}

export const NotFoundClient = () => {

    const router = useRouter();

    return (
        <section
            className='flex flex-col justify-center items-center gap-y-4 w-full h-full my-8'>

            <Image
                src="/assets/images/not-found.svg"
                alt="not-found"
                priority
                width={240}
                height={240}
                className="w-full max-w-[240px] h-full object-cover object-center"
            />

            <h3 className="text-sm font-bold text-gray">
                صفحه مورد نظر یافت نشد
            </h3>

            <Button
                variant="contained"
                color="blue"
                startIcon={
                    <LuChevronRight
                        size={16}
                        className="text-current"
                    />
                }
                onClick={() => router.back()}
            >
                بازگشت
            </Button>

        </section>
    )
}

export const NotFoundServer = () => {

    return (
        <section
            className='flex flex-col justify-center items-center gap-y-4 w-full h-full my-8'>

            <Image
                src="/assets/images/server-down.svg"
                alt="server-down"
                priority
                width={240}
                height={240}
                className="w-full max-w-[240px] h-full object-cover object-center"
            />

            <h3 className="text-sm font-bold text-gray">
                خطایی رخ داده است ، در حال برطرف کردن آن هستیم
            </h3>

        </section>
    )
}

export const NotVerified = () => {

    const router = useRouter();

    return (
        <section
            className='flex flex-col justify-center items-center gap-y-4 w-full h-full my-8'>

            <Image
                src="/assets/images/not-found.svg"
                alt="not-found"
                priority
                width={240}
                height={240}
                className="w-full max-w-[240px] h-full object-cover object-center"
            />

            <h3 className="text-sm font-bold text-gray">
                ابتدا حساب کاربری خود را تکمیل نمایید
            </h3>

            <Button
                variant="contained"
                color="blue"
                startIcon={
                    <LuUser
                        size={16}
                        className="text-current"
                    />
                }
                onClick={() => router.push("/account/profile")}
            >
                حساب کاربری
            </Button>

        </section>
    )
}