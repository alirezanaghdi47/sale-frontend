'use client';

// types
import {IAdvertise} from "@/types/global";

const ContactUs = ({data}: {data: IAdvertise}) => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-sm text-dark font-bold">
                ارتباط با فروشنده
            </h3>

            <div className="flex justify-between items-center gap-x-4 w-full bg-light rounded-lg p-2">

                <p className="text-xs text-gray leading-8">
                    شما میتوانید با شماره همراه
                    <span className="bg-secondary text-dark font-bold rounded-lg px-2 py-1 mx-2">
                        {data?.userId?.phoneNumber}
                    </span>
                    با فروشنده در ارتباط باشید
                </p>

            </div>

        </section>
    )
}

export default ContactUs;
