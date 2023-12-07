"use client";

// libraries
import Image from "next/image";
import {useRouter} from "next/navigation";
import {LuChevronRight, LuShieldAlert} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";

export const AdvertiseListEmpty = () => {

    return (
        <section
            className='flex flex-col justify-center items-center gap-y-4 w-full h-full my-auto'>

            <Image
                src="/assets/images/no-data.svg"
                alt="no-data"
                width={150}
                height={150}
                className="w-full max-w-[150px] h-full object-cover object-center"
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
            className='flex flex-col justify-center items-center gap-y-4 w-full h-full my-auto'>

            <Image
                src="/assets/images/no-data.svg"
                alt="no-data"
                width={150}
                height={150}
                className="w-full max-w-[150px] h-full object-cover object-center"
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
            className='flex flex-col justify-center items-center gap-y-4 w-full h-full my-auto'>

            <Image
                src="/assets/images/no-data.svg"
                alt="no-data"
                width={150}
                height={150}
                className="w-full max-w-[150px] h-full object-cover object-center"
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
            className='flex flex-col justify-center items-center gap-y-8 w-full h-full my-auto'>

            <Image
                src="/assets/images/not-found.svg"
                alt="not-found"
                width={250}
                height={250}
                className="w-full max-w-[250px] h-full object-cover object-center"
            />

            <h3 className="text-base font-bold text-gray">
                صفحه مورد نظر یافت نشد
            </h3>

            <Button
                variant="contained"
                color="blue"
                startIcon={
                    <LuChevronRight
                        size={20}
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
            className='flex flex-col justify-center items-center gap-y-8 w-full h-full my-auto'>

            <Image
                src="/assets/images/server-down.svg"
                alt="server-down"
                width={250}
                height={250}
                className="w-full max-w-[250px] h-full object-cover object-center"
            />

            <h3 className="text-base font-bold text-gray">
                خطایی رخ داده است ، در حال برطرف کردن آن هستیم
            </h3>

        </section>
    )
}

export const NotVerified = () => {

    const router = useRouter();

    return (
        <section
            className='flex flex-col justify-center items-center gap-y-8 w-full h-full my-auto'>

            <Image
                src="/assets/images/verified.svg"
                alt="server-down"
                width={150}
                height={150}
                className="w-full max-w-[150px] h-full object-cover object-center"
            />

            <h3 className="text-base font-bold text-gray">
                احراز هویت نشده اید
            </h3>

            <Button
                variant="contained"
                color="blue"
                startIcon={
                    <LuShieldAlert
                        size={20}
                        className="text-current"
                    />
                }
                onClick={() => router.push("/account/profile")}
            >
                احراز هویت
            </Button>

        </section>
    )
}
