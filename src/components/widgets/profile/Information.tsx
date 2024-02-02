"use client";

// libraries
import Image from "next/image";
import {useSession} from "next-auth/react";
import {LuBadgeCheck, LuUser} from "react-icons/lu";

const Information = () => {

    const {data: session} = useSession();

    return (
        <section className='flex flex-col justify-center items-start gap-y-4 w-full'>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full bg-light rounded-lg p-4">

                <div className="flex justify-center md:justify-start items-center min-w-[120px]">

                    {
                        session?.user?.avatar ? (
                            <Image
                                src={session?.user?.avatar}
                                alt="avatar"
                                width={120}
                                height={120}
                                className='w-[120px] h-[120px] object-cover object-center rounded-full'
                            />
                        ) : (
                            <div
                                className="flex justify-center items-center min-w-[120px] h-[120px] bg-secondary text-gray rounded-full p-2">
                                <LuUser
                                    size={32}
                                    className='text-current'
                                />
                            </div>
                        )
                    }

                </div>

                <div className='flex flex-col justify-center items-center md:items-start gap-y-2 w-full'>

                    <p className="text-base font-bold text-dark">
                        {session?.user?.name && session?.user?.family ? `${session?.user?.name} ${session?.user?.family}` : "کاربر سایت"}
                    </p>

                    <p className="text-xs text-dark">
                        {session?.user?.phoneNumber}
                    </p>

                    {
                        session?.user?.name && session?.user?.family && session?.user?.age ? (
                            <span className="flex justify-start items-center gap-x-2 text-xs font-bold text-green">
                                <LuBadgeCheck
                                    size={16}
                                    className="text-current"
                                />
                                هویت تایید شده است
                            </span>
                        ) : (
                            <span className="text-xs text-red font-bold">
                                هویت تایید نشده است
                            </span>
                        )
                    }

                </div>

            </div>

        </section>
    )
}

export default Information;