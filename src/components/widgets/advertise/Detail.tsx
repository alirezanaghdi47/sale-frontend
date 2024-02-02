'use client';

// types
import {IAdvertise} from "@/types/global";

const Detail = ({data}: {data: IAdvertise}) => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-2 w-full">

            <h3 className="text-sm text-dark font-bold">
                بررسی محصول
            </h3>

            <div className="flex flex-col justify-center items-start gap-y-4 w-full bg-light rounded-lg p-2">

                <p className="text-xs text-dark leading-8">
                    {data?.description}
                </p>

            </div>

        </section>
    )
}

export default Detail;